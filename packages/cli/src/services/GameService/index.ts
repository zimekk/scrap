import { diffString } from "json-diff";
import { z } from "zod";
import { gameItems } from "@dev/api/games";
import Service from "../Service";
import { request } from "../../request";
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

export class GameService extends Service {
  async fetcher({ $type }: { $type: string }) {
    const [_site, type] = $type.split(":");
    const mscv = "DGU1mcuYo0WMMp+F.1";

    return request(
      {
        id: ["displaycatalog", this.mk, $type].join("-"),
        url: `https://displaycatalog.mp.microsoft.com/v7.0/products?bigIds=${type}&market=PL&languages=pl-pl&MS-CV=${mscv}`,
      },
      this.summary
    );
  }

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
      })
      .parseAsync(args)
      .then(({ $type }) =>
        this.fetcher({ $type }).then((data) =>
          z
            .object({
              Products: z.array(ItemSchema.passthrough()),
            })
            .transform(({ Products }) => ({
              type,
              list: Products,
              next: null,
            }))
            .parseAsync(data)
        )
      );
  }

  async process(item = {}): Promise<any> {
    return ItemSchema.passthrough()
      .transform((Product) => ({ id: Product.ProductId, ...Product }))
      .parseAsync(item)
      .then((item) =>
        gameItems.findOne({ id: item.id }).then((last: any) => {
          if (last) {
            const diff = diffItem(last, item);
            if (diff) {
              console.log(`[${last.id}]`);
              console.log(diff);
              this.summary.updated.push(item.id);
              return gameItems.update(updateItem(last, item));
            } else {
              this.summary.checked.push(item.id);
              return gameItems.update({ ...last, _checked: _time });
            }
          } else {
            this.summary.created.push(item.id);
            return gameItems.insert({ ...item, _created: _time });
          }
        })
      );
  }
}
