import { z } from "zod";
import { browser } from "../../request";
import Service from "./base";
import { fromHtml, fromHtml2, fromHtml3 } from "./utils";
// import { saveProductHtml } from "../utils";

export { ProductElectroService } from "./Electro";
export { ProductEuroService } from "./Euro";
export { ProductMediaService } from "./Media";

const { STORE_URL, STORE_ALTO_URL, STORE_CYFROWE_URL, STORE_TOPHIFI_URL } =
  process.env as {
    STORE_URL: string;
    STORE_ALTO_URL: string;
    STORE_CYFROWE_URL: string;
    STORE_TOPHIFI_URL: string;
  };

export class ProductService extends Service {
  async fetcher([site, type]: string[]) {
    return browser(
      {
        id: [site, this.mk, type].join("-"),
        url: {
          "get-product-alto": `${STORE_ALTO_URL}p/${type}.html`,
          "get-product": `${STORE_URL}p/${type}.html`,
          "get-product-cyfrowe": `${STORE_CYFROWE_URL}${type}.html`,
          "get-product-tophifi": `${STORE_TOPHIFI_URL}${type}.html`,
        }[site] as string,
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
      .then(({ id, name, kind }) =>
        this.fetcher(type.split(":"))
          .then((html) =>
            // saveProductHtml(name, html) ||
            ({
              id,
              ...(
                {
                  "get-product-cyfrowe": fromHtml2,
                  "get-product-tophifi": fromHtml3,
                }[kind] || fromHtml
              )(html),
            })
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
