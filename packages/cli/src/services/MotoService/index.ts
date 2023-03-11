import { z } from "zod";
import { motoItems } from "@dev/api";
import { browser } from "../../request";
import Service from "../Service";
import { saveProductHtml } from "../utils";
import { MotoItem } from "./types";
import { diffMotoItem, scrapMotoList, updateMotoItem } from "./utils";

const { OTOMOTO_URL } = process.env as {
  OTOMOTO_URL: string;
};

const _time = Date.now();

const UrqlState = z
  .object({
    advertSearch: z
      .object({
        edges: z
          .object({
            node: z.object({
              id: z.string(),
              title: z.string(),
              shortDescription: z.string(),
              url: z.string(),
              location: z.object({
                city: z.object({
                  name: z.string(),
                }),
                region: z.object({
                  name: z.string(),
                }),
              }),
              thumbnail: z
                .object({
                  x1: z.string(),
                  x2: z.string(),
                })
                .nullable(),
              price: z
                .object({
                  amount: z.object({
                    units: z.number(),
                    currencyCode: z.enum(["EUR", "PLN"]),
                  }),
                })
                .passthrough(),
              parameters: z
                .object({
                  key: z.enum([
                    "make",
                    "year",
                    "mileage",
                    "engine_capacity",
                    "fuel_type",
                  ]),
                  displayValue: z.string(),
                  value: z.string(),
                })
                .array(),
            }),
          })
          .transform(
            ({
              node: {
                id,
                location,
                parameters,
                shortDescription,
                thumbnail,
                title,
                price: {
                  amount: { units: price },
                },
                url,
              },
            }) =>
              Object.assign(
                {
                  id,
                  location,
                  parameters,
                  price,
                  shortDescription,
                  title,
                  url,
                },
                thumbnail && (({ x1: thumbnail }) => ({ thumbnail }))(thumbnail)
              )
          )
          .array(),
      })
      .transform(({ edges }) => edges)
      .optional(),
  })
  .transform(({ advertSearch }) => advertSearch);

export class MotoService extends Service {
  async request(
    type: string,
    args = {}
  ): Promise<{
    type: string;
    list: any[];
    next: any;
  }> {
    return z
      .object({
        $type: z.string().default(type),
        page: z.number().default(1),
      })
      .parseAsync(args)
      .then(({ $type, page }) => {
        const href = $type.split(":")[1];
        const url = new URL(`${OTOMOTO_URL}${href}`);
        if (page > 1) {
          url.searchParams.set("page", String(page));
        }
        const name = url.toString().split("/").slice(3).join("-");
        return browser(
          {
            id: ["moto", this.mk, name].join("-"),
            url: url.toString(),
          },
          this.summary
        )
          .then((html) => saveProductHtml(name, html) || scrapMotoList(html))
          .then(({ list, nextPage } = { list: [], nextPage: null }) => ({
            type,
            list,
            next: nextPage ? { page: nextPage } : null,
          }));
      });
  }

  async sync(json = {}, { timestamp: _fetched }: any = {}) {
    return z
      .object({
        props: z.object({
          pageProps: z.object({
            urqlState: z.record(
              z
                .object({
                  data: z.string(),
                })
                .transform(({ data }) => UrqlState.parse(JSON.parse(data)))
            ),
          }),
        }),
      })
      .transform(
        ({
          props: {
            pageProps: { urqlState },
          },
        }) => Object.values(urqlState).find(Boolean) || []
      )
      .transform((list) =>
        list.reduce<Promise<any>>(
          (promise, item) =>
            promise.then(() => this.commit(item, { _fetched })),
          Promise.resolve()
        )
      )
      .parseAsync(json);
  }

  async process(item = {}): Promise<any> {
    return MotoItem.parseAsync(item).then((item) => this.commit(item));
  }

  async commit(item = {}, { _fetched }: any = {}): Promise<any> {
    return z
      .object({
        id: z.string(),
        url: z.string(),
      })
      .passthrough()
      .parseAsync(item)
      .then((item) =>
        motoItems.findOne({ id: item.id }).then((last: any) => {
          if (last) {
            if (
              _fetched &&
              (_fetched < last._checked ||
                _fetched < last._updated ||
                _fetched < last._created)
            ) {
              return;
            }
            const diff = diffMotoItem(last, item);
            if (diff) {
              console.log(`[${last.id}]`, diff);
              this.summary.updated.push(item.id);
              return motoItems.update(updateMotoItem(last, item));
            } else {
              this.summary.checked.push(item.id);
              return motoItems.update({
                ...last,
                _checked: _time,
              });
            }
          } else {
            this.summary.created.push(item.id);
            return motoItems.insert({
              ...item,
              _created: _time,
            });
          }
        })
      );
  }
}
