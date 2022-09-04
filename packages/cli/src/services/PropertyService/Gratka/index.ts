import { z } from "zod";
import { propertyItems } from "@dev/api";
import { browser } from "../../../request";
import PropertyService from "../PropertyService";
// import { saveProductHtml } from "../../utils";
import { scrapPropertyGratkaList, scrapPropertyGratkaItem } from "./utils";

const { GRATKA_URL } = process.env as {
  GRATKA_URL: string;
};

const _time = Date.now();

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
