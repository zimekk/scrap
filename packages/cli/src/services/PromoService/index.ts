import { z } from "zod";
import { browser } from "../../request";
import Service from "../Service";
import { saveProductHtml } from "../utils";
import { ItemSchema, fromHtml } from "./utils";

const { STORE_URL: URL } = process.env;

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
            // list: [],
            list: item ? [item] : [],
            next: null,
          }))
      );
  }

  async process(item = {}): Promise<any> {
    return ItemSchema.parseAsync(item).then((item) => item);
  }
}
