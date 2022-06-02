import { z } from "zod";
import { browser } from "../../../request";
import Service from "../base";
import { saveProductHtml } from "../../utils";
import { fromHtml } from "./utils";

const { TOUS_URL: URL } = process.env;

export class ProductTousService extends Service {
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
          .then((html) =>
            // saveProductHtml(name, html) ||
            fromHtml(html)
          )
          .catch((e) => console.error(e))
          .then((item) => ({
            type,
            list: item ? [item] : [],
            next: null,
          }))
      );
  }
}
