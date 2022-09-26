import { z } from "zod";
import { createHash } from "crypto";
import { promoItems } from "@dev/api/promo";
import { browser } from "../../request";
import Service from "../Service";
import { saveProductHtml } from "../utils";
import { fromHtml } from "./utils";
import { ItemSchema, JsonSchema } from "./types";

const { STORE_URL: URL } = process.env;

const _time = Date.now();

const createId = (href: string) => createHash("md5").update(href).digest("hex");

export class PromoService extends Service {
  async fetcher([site, type]: string[]) {
    return browser(
      {
        id: [site, this.mk, type].join("-"),
        url: `${URL}${type}`,
      },
      this.summary
    );
  }

  async request(type: string): Promise<{
    type: string;
    list: any[];
    next: any;
  }> {
    return z
      .tuple([z.string(), z.string()])
      .transform(([kind, name]) => ({ id: name.split("-")[0], name, kind }))
      .parseAsync(type.split(":"))
      .then(({ name }) =>
        this.fetcher(type.split(":"))
          .then((html) => saveProductHtml(name, html) || fromHtml(html))
          .catch((e) => console.error(e))
          .then((item) => ({
            type,
            list: item ? item.list : [],
            next: null,
          }))
      );
  }

  async process(item = {}): Promise<any> {
    return ItemSchema.transform((item) => ({
      id: createId(item.href),
      ...item,
    }))
      .parseAsync(item)
      .then((item) =>
        promoItems.findOne({ id: item.id }).then((last: any) => {
          // if (last && !item.href.match("wyprzedaz")) {
          if (last) {
            this.summary.checked.push(item.id);
            return promoItems.update({ ...last, _checked: _time });
          } else {
            this.summary.created.push(item.id);
            const { id, href } = item;
            return Promise.resolve()
              .then(() =>
                browser(
                  {
                    id: [id, this.mk].join("-"),
                    url: href,
                  },
                  this.summary,
                  {}
                )
              )
              .then(({ data }) =>
                data
                  ? JsonSchema.parseAsync(data).then((data) =>
                      Object.assign(item, { data })
                    )
                  : item
              )
              .then((item) => {
                console.log(item);
                if (last) {
                  return promoItems.update({
                    ...last,
                    ...item,
                    _updated: _time,
                  });
                }
                return promoItems.insert({ ...item, _created: _time });
              });
          }
        })
      );
  }
}
