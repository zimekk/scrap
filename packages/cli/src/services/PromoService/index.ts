import { z } from "zod";
import { promoItems } from "@dev/api/promo";
import { browser } from "../../request";
import Service from "../Service";
import { saveProductHtml } from "../utils";
import { ItemSchema, fromHtml } from "./utils";

const { STORE_URL: URL } = process.env;

const _time = Date.now();

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
    return ItemSchema.transform((item) => ({ id: item.href, ...item }))
      .parseAsync(item)
      .then((item) =>
        promoItems.findOne({ id: item.id }).then((last: any) => {
          if (last) {
            this.summary.checked.push(item.id);
            return promoItems.update({ ...last, _checked: _time });
          } else {
            this.summary.created.push(item.id);
            return promoItems.insert({ ...item, _created: _time });
          }
        })
      );
  }
}
