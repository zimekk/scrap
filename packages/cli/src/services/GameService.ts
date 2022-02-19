import { diffString } from "json-diff";
import { z } from "zod";
import { gameItems } from "@dev/api";
import { request } from "../request";

const ERA = 24 * 3600 * 1000;
const _time = Date.now();
const _past = _time - ERA;

export class GameService {
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
        request({ $type }).then((data) =>
          z
            .object({
              Products: z.array(
                z
                  .object({
                    ProductId: z.string(),
                    LocalizedProperties: z.array(
                      z.object({
                        DeveloperName: z.string(),
                        Images: z.array(
                          z.object({
                            Uri: z.string(),
                            Width: z.number(),
                          })
                        ),
                        ProductTitle: z.string(),
                        PublisherName: z.string(),
                      })
                    ),
                  })
                  .passthrough()
              ),
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

  async process(item = {}, summary: any): Promise<any> {
    return z
      .object({
        ProductId: z.string(),
      })
      .passthrough()
      .transform((Product) => ({ id: Product.ProductId, ...Product }))
      .parseAsync(item)
      .then((item) =>
        gameItems.findOne({ id: item.id }).then((last: any) => {
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
              summary.updated.push(item.id);
              return gameItems.update(update);
            } else {
              summary.checked.push(item.id);
              return gameItems.update({ ...last, _checked: _time });
            }
          } else {
            summary.created.push(item.id);
            return gameItems.insert({ ...item, _created: _time });
          }
        })
      );
  }
}
