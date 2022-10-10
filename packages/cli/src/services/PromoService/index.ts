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
    return (
      {
        "get-promo:black-friday": {
          type,
          list: [
            {
              href: "https://promocje.x-kom.pl/black-friday",
              name: "rabaty dzisiaj do 23:59",
              desc: `na ponad 100 000 produktów`,
              code: "bf2021",
            },
          ],
          next: null,
        },
        "get-promo:blackwhite": {
          type,
          list: [
            {
              href: "https://promocje.x-kom.pl/blackwhite",
              name: "sprawdź promocje na podzespoły",
              desc: `dla widzów Jarka „Blackwhite'a" Arczyńskiego`,
              code: "blackwhite",
            },
          ],
          next: null,
        },
        "get-promo:lipton": {
          type,
          list: [
            {
              href: "https://promocje.x-kom.pl/lipton",
              name: "sprawdź promocje na podzespoły",
              desc: `dla widzów Piotra „Lipton'a" Szymańskiego`,
              code: "lipton",
            },
          ],
          next: null,
        },
        "get-promo:rootblog": {
          type,
          list: [
            {
              href: "https://promocje.x-kom.pl/rootblog",
              name: "mega promocje na GSM i Smart Home",
              desc: "dla widzów rootblog",
              code: "rootblogi",
            },
          ],
          next: null,
        },
        "get-promo:rtx-week": {
          type,
          list: [
            {
              href: "https://promocje.x-kom.pl/rtx-week",
              name: "piękny obraz, zawrotna prędkość",
              desc: "złap do -12% na karty GeForce RTX z serii 30 i wejdź do świata Ray Tracingu i DLSS",
              code: "rtx-week",
            },
          ],
          next: null,
        },
      }[type] ||
      z
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
        )
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
          // if (last && !item.href.match("promocje")) {
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
                Boolean(console.log({ data })) || data
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
