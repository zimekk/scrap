import { diffString } from "json-diff";
import { productItems } from "@dev/api/products";
import Service from "../Service";
import { DiffSchema, ItemSchema } from "./types";

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

export default class extends Service {
  async process(item = {}): Promise<any> {
    return ItemSchema.parseAsync(item).then((item) =>
      productItems.findOne({ id: item.id }).then((last: any) => {
        if (last) {
          const diff = diffItem(last, item);
          if (diff) {
            console.log(`[${last.id}]`, diff);
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
