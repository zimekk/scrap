import { z } from "zod";
import { propertyItems } from "@dev/api";
import { browser, request } from "../../request";
import Service from "../Service";
import {
  diffPropertyItem,
  scrapPropertyGratkaList,
  scrapPropertyGratkaItem,
  scrapPropertyKlikItem,
  scrapPropertyOtodomList,
  scrapPropertyOtodomItem,
  updatePropertyItem,
} from "./utils";

const {
  NEARBY_LAT = "52.1530829",
  NEARBY_LNG = "21.1104411",
  GRATKA_URL,
  KLIK_URL,
  OTODOM_URL,
} = process.env as {
  NEARBY_LAT: string;
  NEARBY_LNG: string;
  GRATKA_URL: string;
  KLIK_URL: string;
  OTODOM_URL: string;
};

// const ERA = 24 * 3600 * 1000;
const _time = Date.now();
// const _past = _time - ERA;

class PropertyService extends Service {
  async commit(item = {}): Promise<any> {
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
              this.summary.updated.push(item.id);
              return propertyItems.update(updatePropertyItem(last, item));
            } else {
              this.summary.checked.push(item.id);
              return propertyItems.update({
                ...last,
                _checked: _time,
              });
            }
          } else {
            this.summary.created.push(item.id);
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

        return browser(
          {
            id: ["gratka", this.mk, id, page].join("-"),
            url: `${GRATKA_URL}${name}${page > 1 ? `?page=${page}` : ``}`,
          },
          this.summary
        )
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

  async process(item = {}): Promise<any> {
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
            this.summary.checked.push(last.id);
            // propertyItems.update({ ...last, ...item, _updated: _time });
            return propertyItems.update({ ...last, _checked: _time });
          }

          return browser(
            {
              id: ["gratka-item", this.mk, name].join("-"),
              url: href,
            },
            this.summary
          ).then((html) =>
            html
              ? Promise.resolve(
                  Promise.resolve(scrapPropertyGratkaItem({ id }, html))
                ).then((item) => this.commit(item))
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

        return browser(
          {
            id: ["otodom", this.mk, id, page].join("-"),
            url: `${OTODOM_URL}oferty/sprzedaz/${name}${
              page > 1 ? `?page=${page}` : ``
            }`,
          },
          this.summary
        )
          .then((html) =>
            html
              ? Promise.resolve(scrapPropertyOtodomList({ id }, html))
                  .then(({ items, nextPage }) => ({
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
                  }))
                  .catch((e) => {
                    console.info(["error"]);
                    return { list: [], next: null };
                  })
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

  async process(item = {}): Promise<any> {
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
            this.summary.checked.push(last.id);
            // propertyItems.update({ ...last, ...item, _updated: _time });
            return propertyItems.update({ ...last, _checked: _time });
          }

          return browser(
            {
              id: ["otodom-item", this.mk, name].join("-"),
              url: `${OTODOM_URL}oferta/${href}`,
            },
            this.summary
          ).then((html) =>
            html
              ? Promise.resolve(scrapPropertyOtodomItem({ id }, html)).then(
                  (item) => item && this.commit(item)
                )
              : null
          );
        })
      );
  }
}

export class PropertyKlikService extends PropertyService {
  async fetcher({
    $type = "",
    lat = Number(NEARBY_LAT),
    lng = Number(NEARBY_LNG),
    circle = 25014.985524846034,
    items = 20,
    page = 1,
  }) {
    const [_site, type, kind] = $type.split(":");
    return (({
      $type: type = 1,
      $kind: kind = 4,
      // kind = 4, type = 1, // dzialki/do-sprzedania
      // kind = 2, type = 1, // domy/do-sprzedania
      // kind = 1, type = 2, // mieszkania/do-wynajecia
    }) =>
      request(
        {
          id: ["klik", this.mk, lat, lng, circle, kind, type, items, page].join(
            "-"
          ),
          url: `${KLIK_URL}?dump=list&type=${type}&kind=${kind}&id=0&lat=${lat}&lng=${lng}&circle=${circle}&page=${page}&items=${items}&sort=default&cat=4,8`,
        },
        this.summary
      ))({ $type: type, $kind: kind });
  }

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
        return this.fetcher({ $type, items, page })
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

  async process(item: any): Promise<any> {
    // console.log({item})
    return Promise.resolve(scrapPropertyKlikItem(item)).then((item) =>
      this.commit(item)
    );
  }
}
