import { z } from "zod";
import { propertyItems } from "@dev/api";
import { browser } from "../../../request";
import PropertyService from "../PropertyService";
import { saveProductHtml } from "../../utils";
import { scrapPropertyOtodomList, scrapPropertyOtodomItem } from "./utils";

const { OTODOM_URL } = process.env as {
  OTODOM_URL: string;
};

const _time = Date.now();

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
        const [kind, name] = $type.split(":");
        const id = name.replace(/\//g, "-");

        return browser(
          {
            id: ["otodom", this.mk, id, page].join("-"),
            url: `${OTODOM_URL}${name}${page > 1 ? `?page=${page}` : ``}`,
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
            // saveProductHtml(href, html) ||
            // ["otodom-63400761"].includes(id) &&
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
