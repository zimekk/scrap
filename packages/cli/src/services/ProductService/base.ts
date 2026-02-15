import { diffString } from "json-diff";
import { IntlMessageFormat } from "intl-messageformat";
import { productItems } from "@dev/api/products";
import Service from "../Service";
import { DiffSchema, ItemSchema } from "./types";
import { z } from "zod";

const ERA = 24 * 3600 * 1000;
const _time = Date.now();
const _past = _time - ERA;

const diffItem = (
  {
    _id,
    _created,
    _checked,
    _updated,
    _history,
    ...last
  }: {
    _id: string;
    _created: number;
    _checked: number;
    _updated: number;
    _history: {};
  },
  item: {},
) => diffString(DiffSchema.parse(last), DiffSchema.parse(item));

const updateItem = (
  {
    _id,
    _created = _past,
    _updated = _created,
    _history = {},
    ...last
  }: { _id: string; _created: number; _updated: number; _history: {} },
  item: {},
) => ({
  ...item,
  _id,
  _created,
  _updated: _time,
  _history: {
    ..._history,
    [_updated]: last,
  },
});

export const PhotoSchema = z.object({
  url: z.string().optional(),
  thumbnailUrl: z.string().optional(),
  urlTemplate: z.string().optional(),
});

export const ProductSchema = z
  .object({
    featureSummary: z.string().array().optional(),
    featureSummaryStructured: z
      .object({
        shortName: z.string(),
        description: z.string().nullable(),
        valueSeparator: z.string(),
        valueGroups: z
          .object({ shortName: z.string(), description: z.string().nullable() })
          .array(),
      })
      .array()
      .optional(),
    availabilityStatus: z.string().optional(),
    producerCode: z.string().optional(),
    installmentMinimum: z.number().optional(),
    alternativeGroupId: z.string().optional(),
    alternativeProducts: z.unknown().array().optional(),
    mark: z.string().optional(),
    oldPrice: z.number().optional(),
    priceInfo: z.object({
      price: z.number(),
      oldPrice: z.number().nullable(),
      isPriceVisible: z.boolean(),
    }),
    producer: z.object({ id: z.string(), name: z.string() }),
    isEsd: z.boolean(),
    esdType: z.string(),
    productLink: z.string(),
    photo: PhotoSchema,
    rating: z.number().optional(),
    ratingCount: z.number().optional(),
    commentsCount: z.number().optional(),
    freeShipping: z.boolean().optional(),
    id: z.string(),
    name: z.string(),
    price: z.number(),
    category: z.object({
      id: z.string(),
      parentGroupId: z.string().optional(),
    }),
    questionsAndAnswers: z.boolean().optional(),
    isFetching: z.boolean(),
  })
  .transform(
    ({
      id,
      producer,
      producerCode,
      photo,
      priceInfo,
      name,
      availabilityStatus,
      rating = 0,
      ratingCount,
    }) => ({
      id,
      brand: producer.name,
      codes: [],
      image: photo ? [photo.thumbnailUrl].filter(Boolean) : [],
      label: [
        `od: ${producer.name}`,
        `kod producenta: ${producerCode}`,
        `kod x-kom: ${id}`,
      ],
      price: [
        `${new Intl.NumberFormat("pl-PL", {
          minimumFractionDigits: 2,
        }).format(priceInfo.price)} zł`,
      ],
      title: `${producer.name} ${name}`,
      links: availabilityStatus
        ? [
            {
              Available: "Dostępny",
              Unavailable: "Czasowo niedostępny",
            }[availabilityStatus],
          ]
        : [],
      proms: [],
      stars: ratingCount
        ? `${new Intl.NumberFormat("pl-PL", {}).format(
            rating,
          )} (${new IntlMessageFormat(
            `{ratingCount, plural,
              one {# opinia}
              few {# opinie}
              many {# opinii}
              other {# opinii}
            }`,
            "pl-PL",
          ).format({ ratingCount })})`
        : `Brak opinii`,
      url: `https://www.x-kom.pl/p/${id}`,
    }),
  );

export default class extends Service {
  async sync2(json = {}, { timestamp: _fetched }: any = {}) {
    // console.log(json)

    return z
      .object({
        app: z.object({
          products: z.record(z.string(), ProductSchema),
        }),
      })
      .transform(({ app }) =>
        Object.values(app.products).reduce<Promise<any>>(
          (promise, item) =>
            promise.then(() => this.process(item, { _fetched })),
          Promise.resolve(),
        ),
      )
      .parseAsync(json);
  }

  async sync(json = {}, { timestamp: _fetched }: any = {}) {
    // console.log(json)
    return z
      .discriminatedUnion("Type", [
        z.object({
          Type: z.literal("Category"),
        }),
        z.object({
          Type: z.literal("Product"),
          ProductHeader: z
            .object({
              Id: z.string(),
              Name: z.string(),
              Price: z.number(),
              OldPrice: z.number().nullable(),
              Producer: z.object({
                Name: z.string(),
              }),
              ProducerCode: z.string(),
              MainPhoto: z
                .object({
                  ThumbnailUrl: z.string(),
                })
                .nullable(),
              CommentsRating: z.number(),
              CommentsCount: z.number(),
              WebUrl: z.string(),
            })
            .transform(
              ({
                Id,
                Name,
                Price,
                Producer,
                ProducerCode,
                MainPhoto,
                CommentsRating,
                CommentsCount,
                WebUrl,
              }) => ({
                id: Id,
                brand: Producer.Name,
                codes: [],
                image: MainPhoto ? [MainPhoto.ThumbnailUrl] : [],
                label: [
                  `od: ${Producer.Name}`,
                  `kod producenta: ${ProducerCode}`,
                  `kod x-kom: ${Id}`,
                ],
                price: [
                  `${new Intl.NumberFormat("pl-PL", {
                    minimumFractionDigits: 2,
                  }).format(Price)} zł`,
                ],
                title: `${Producer.Name} ${Name}`,
                links: [],
                proms: [],
                stars: CommentsCount
                  ? `${new Intl.NumberFormat("pl-PL", {}).format(
                      CommentsRating,
                    )} (${new IntlMessageFormat(
                      `{CommentsCount, plural,
                    one {# opinia}
                    few {# opinie}
                    many {# opinii}
                    other {# opinii}
                  }`,
                      "pl-PL",
                    ).format({ CommentsCount })})`
                  : `Brak opinii`,
                url: WebUrl,
              }),
            ),
        }),
      ])
      .array()
      .transform((list) =>
        list
          .filter(({ Type }) => Type === "Product")
          .reduce<
            Promise<any>
          >((promise, item) => promise.then(() => (item.Type === "Product" ? this.process(item.ProductHeader, { _fetched }) : null)), Promise.resolve()),
      )
      .parseAsync(json);
  }

  async process(item = {}, { _fetched }: any = {}) {
    return ItemSchema.parseAsync(item).then((item) =>
      productItems.findOne({ id: item.id }).then((last: any) => {
        if (last) {
          if (
            _fetched &&
            (_fetched < last._checked ||
              _fetched < last._updated ||
              _fetched < last._created)
          ) {
            return;
          }
          const diff = diffItem(last, item);
          if (diff) {
            console.log(`[${last.id}]`, diff);
            this.summary.updated.push(item.id);
            return productItems.update(updateItem(last, item));
          } else {
            this.summary.checked.push(item.id);
            return productItems.update({ ...last, _checked: _time });
          }
        } else {
          this.summary.created.push(item.id);
          return productItems.insert({ ...item, _created: _time });
        }
      }),
    );
  }
}
