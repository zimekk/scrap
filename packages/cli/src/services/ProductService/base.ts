import { diffString } from "json-diff";
import IntlMessageFormat from "intl-messageformat";
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
  item: {}
) => diffString(DiffSchema.parse(last), DiffSchema.parse(item));

const updateItem = (
  {
    _id,
    _created = _past,
    _updated = _created,
    _history = {},
    ...last
  }: { _id: string; _created: number; _updated: number; _history: {} },
  item: {}
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

export default class extends Service {
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
                      CommentsRating
                    )} (${new IntlMessageFormat(
                      `{CommentsCount, plural,
                    one {# opinia}
                    few {# opinie}
                    many {# opinii}
                    other {# opinii}
                  }`,
                      "pl-PL"
                    ).format({ CommentsCount })})`
                  : `Brak opinii`,
                url: WebUrl,
              })
            ),
        }),
      ])
      .array()
      .transform((list) =>
        list
          .filter(({ Type }) => Type === "Product")
          .reduce<Promise<any>>(
            (promise, item) =>
              promise.then(() =>
                item.Type === "Product"
                  ? this.process(item.ProductHeader, { _fetched })
                  : null
              ),
            Promise.resolve()
          )
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
      })
    );
  }
}
