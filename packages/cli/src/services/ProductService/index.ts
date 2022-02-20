import { diffString } from "json-diff";
import { z } from "zod";
import { productItems } from "@dev/api";
import { browser } from "../../request";
import { fromHtml } from "./utils";

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
) => diffString(last, item);

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

export class ProductService {
  async request(type: string): Promise<{
    type: string;
    list: any[];
    next: any;
  }> {
    return z
      .tuple([z.string(), z.string().transform((name) => name.split("-")[0])])
      .transform(([_, id]) => id)
      .parseAsync(type.split(":"))
      .then((id) =>
        browser({ $type: type }).then((html) => ({
          type,
          list: html ? [{ id, ...fromHtml(html) }] : [],
          next: null,
        }))
      );
  }

  async process(item = {}, summary: any): Promise<any> {
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
              summary.updated.push(item.id);
              return productItems.update(updateItem(last, item));
            } else {
              summary.checked.push(item.id);
              return productItems.update({ ...last, _checked: _time });
            }
          } else {
            summary.created.push(item.id);
            return productItems.insert({ ...item, _created: _time });
          }
        })
      );
  }
}
