import { diffString } from "json-diff";
import { z } from "zod";
import { productItems } from "@dev/api";
import { browser } from "../../request";
import Service from "../Service";
import { DiffSchema } from "./types";
import { fromHtml, fromHtml2, fromHtml3 } from "./utils";
import { saveProductHtml } from "../../utils";

const ERA = 24 * 3600 * 1000;
const _time = Date.now();
const _past = _time - ERA;

const diffItem = (
  {
    _id,
    _created,
    _checked,
    _updated,
    _history,
    ...last
  }: {
    _id: string;
    _created: number;
    _checked: number;
    _updated: number;
    _history: {};
  },
  item: {}
) => diffString(DiffSchema.parse(last), DiffSchema.parse(item));

const updateItem = (
  {
    _id,
    _created = _past,
    _updated = _created,
    _history = {},
    ...last
  }: { _id: string; _created: number; _updated: number; _history: {} },
  item: {}
) => ({
  ...item,
  _id,
  _created,
  _updated: _time,
  _history: {
    ..._history,
    [_updated]: last,
  },
});

export class ProductService extends Service {
  async request(type: string): Promise<{
    type: string;
    list: any[];
    next: any;
  }> {
    return z
      .tuple([z.string(), z.string()])
      .transform(([kind, name]) => ({ id: name.split("-")[0], name, kind }))
      .parseAsync(Boolean(console.log(type)) || type.split(":"))
      .then(({ id, name, kind }) =>
        browser({ $type: type }).then(
          (html) =>
            // @ts-ignore saveProductHtml(name, html) ||
            false || {
              type,
              list: html
                ? [
                    {
                      id,
                      ...(
                        {
                          "get-product-cyfrowe": fromHtml2,
                          "get-product-tophifi": fromHtml3,
                        }[kind] || fromHtml
                      )(html),
                    },
                  ]
                : [],
              next: null,
            }
        )
      );
  }

  async process(item = {}): Promise<any> {
    return z
      .object({
        id: z.string(),
      })
      .passthrough()
      .parseAsync(item)
      .then((item) =>
        productItems.findOne({ id: item.id }).then((last: any) => {
          if (last) {
            const diff = diffItem(last, item);
            if (diff) {
              console.log(`[${last.id}]`);
              console.log(diff);
              this.summary.updated.push(item.id);
              return productItems.update(updateItem(last, item));
            } else {
              this.summary.checked.push(item.id);
              return productItems.update({ ...last, _checked: _time });
            }
          } else {
            this.summary.created.push(item.id);
            return productItems.insert({ ...item, _created: _time });
          }
        })
      );
  }
}
