import { diffString } from "json-diff";
import { z } from "zod";
import { productItems } from "@dev/api/stations";
import { browser } from "../request";
import { scrapProduct } from "../utils";

const ERA = 24 * 3600 * 1000;
const _time = Date.now();
const _past = _time - ERA;

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
          list: html ? [scrapProduct({ id }, html)] : [],
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
            const {
              _id,
              _created = _past,
              _checked = _time,
              _updated = _created,
              _history = {},
              ...rest
            } = last;
            const diff = diffString(rest, item);
            if (diff) {
              console.log(`[${last.id}]`);
              console.log(diff);

              const update = {
                _id,
                ...item,
                _created,
                _checked,
                _updated: _time,
                _history: Object.assign({
                  ..._history,
                  [_updated]: rest,
                }),
              };
              console.log(update);

              summary.updated.push(item.id);
              return productItems.update(update);
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
