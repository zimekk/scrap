import { z } from "zod";
import { propertyItems } from "@dev/api/stations";
import { browser, request } from "../request";
import {
  diffPropertyItem,
  scrapPropertyGratkaList,
  scrapPropertyGratkaItem,
  scrapPropertyKlikItem,
  scrapPropertyOtodomList,
  scrapPropertyOtodomItem,
  updatePropertyItem,
} from "../utils";

const { GRATKA_URL, OTODOM_URL } = process.env as {
  GRATKA_URL: string;
  OTODOM_URL: string;
};

// const ERA = 24 * 3600 * 1000;
const _time = Date.now();
// const _past = _time - ERA;

class PropertyService {
  async commit(item = {}, summary: any): Promise<any> {
    return z
      .object({
        id: z.string(),
        canonical: z.string(),
      })
      .passthrough()
      .parseAsync(item)
      .then((item) => {
        propertyItems.findOne({ id: item.id }).then((last: any) => {
          if (last) {
            const diff = diffPropertyItem(last, item);
            if (diff) {
              console.log(`[${last.id}]`);
              console.log(diff);
              summary.updated.push(item.id);
              return propertyItems.update(updatePropertyItem(last, item));
            } else {
              summary.checked.push(item.id);
              return propertyItems.update({
                ...last,
                _checked: _time,
              });
            }
          } else {
            summary.created.push(item.id);
            return propertyItems.insert({
              ...item,
              _created: _time,
            });
          }
        });
      });
  }
}

export class PropertyGratkaService extends PropertyService {
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
        // console.log({ $type, page });

        const [kind, name] = $type.split(":");
        const id = name.replace(/\//g, "-");

        return browser({ $type, page })
          .then((html) =>
            html
              ? Promise.resolve(
                  Promise.resolve(scrapPropertyGratkaList({ id }, html))
                ).then(({ items, nextPage }) => ({
                  list: items.map((item) => ({
                    type: "gratka-item",
                    ...item,
                  })),
                  next: nextPage
                    ? {
                        page: Number(
                          new URL(nextPage, GRATKA_URL).searchParams.get("page")
                        ),
                      }
                    : null,
                }))
              : { list: [], next: null }
          )
          .then(({ list, next }) => {
            // console.log({list, next})
            return {
              type,
              list,
              next,
            };
          });
      });
  }

  async process(item = {}, summary: any): Promise<any> {
    return z
      .object({
        id: z.string(),
        type: z.string(),
        name: z.string(),
        href: z.string(),
      })
      .parseAsync(item)
      .then(({ id, type, name, href }) =>
        propertyItems.findOne({ id }).then((last: any) => {
          if (last) {
            summary.checked.push(last.id);
            // propertyItems.update({ ...last, ...item, _updated: _time });
            return propertyItems.update({ ...last, _checked: _time });
          }

          return browser({ $type: type, name, href }).then((html) =>
            html
              ? Promise.resolve(
                  Promise.resolve(scrapPropertyGratkaItem({ id }, html))
                ).then((item) => this.commit(item, summary))
              : null
          );
        })
      );
  }
}

export class PropertyOtodomService extends PropertyService {
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
        // console.log({ $type, page });

        const [kind, name] = $type.split(":");
        const id = name.replace(/\//g, "-");

        return browser({ $type, page })
          .then((html) =>
            html
              ? Promise.resolve(scrapPropertyOtodomList({ id }, html)).then(
                  ({ items, nextPage }) => ({
                    list: items.map((item) => ({
                      type: "otodom-item",
                      ...item,
                    })),
                    next: nextPage
                      ? {
                          page: Number(
                            new URL(nextPage, OTODOM_URL).searchParams.get(
                              "page"
                            )
                          ),
                        }
                      : null,
                  })
                )
              : { list: [], next: null }
          )
          .then(({ list, next }) => {
            // console.log({list, next})
            return {
              type,
              list,
              next,
            };
          });
      });
  }

  async process(item = {}, summary: any): Promise<any> {
    return z
      .object({
        id: z.string(),
        type: z.string(),
        name: z.string(),
        href: z.string(),
      })
      .parseAsync(item)
      .then(({ id, type, name, href }) =>
        propertyItems.findOne({ id }).then((last: any) => {
          if (last) {
            summary.checked.push(last.id);
            // propertyItems.update({ ...last, ...item, _updated: _time });
            return propertyItems.update({ ...last, _checked: _time });
          }

          return browser({ $type: type, name, href }).then((html) =>
            html
              ? Promise.resolve(scrapPropertyOtodomItem({ id }, html)).then(
                  (item) => this.commit(item, summary)
                )
              : null
          );
        })
      );
  }
}

export class PropertyKlikService extends PropertyService {
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
        const items = 20;
        // console.log({ $type, page });
        return request({ $type, items, page })
          .then((data) =>
            z
              .object({
                results: z.array(z.object({}).passthrough()),
                total_found: z.string().transform(Number),
              })
              .parse(data)
          )
          .then(({ results, total_found }) => ({
            type,
            list: results,
            next:
              Math.ceil(total_found / items) > page
                ? {
                    type,
                    page: page + 1,
                  }
                : null,
          }));
      });
  }

  async process(item: any, summary: any): Promise<any> {
    // console.log({item})
    return Promise.resolve(scrapPropertyKlikItem(item)).then((item) =>
      this.commit(item, summary)
    );
  }
}
