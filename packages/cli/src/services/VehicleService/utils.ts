import { format } from "date-fns";
import { diffString } from "json-diff";
import { parse } from "node-html-parser";
import { z } from "zod";
import { ExtendedItem, VehicleDiff } from "./types";

const ERA = 24 * 3600 * 1000;
export const _time = Date.now();
export const _past = _time - ERA;

export const createItem = (item: {}) => ({ ...item, _created: _time });

export const diffItem = (last: any, item: any) =>
  ((last, item) => diffString(last, item))(
    VehicleDiff.parse(last),
    VehicleDiff.parse(item)
  );

export const reduceHistory = (_history: any[]) =>
  Object.entries(_history).reduce(
    (history: Record<string, any>, [date, item], _key) => {
      const entries = Object.entries(history);
      if (entries.length > 0) {
        const [_last_date, last] = entries[entries.length - 1];

        const diff = diffItem(last, item);
        console.log(
          `${item.id}[${date}]`,
          _key,
          format(Number(date), "yyyy-MM-dd, HH:mm:ss")
          // diff ? diffString(last, item) : null
        );
        if (!diff) {
          return history;
        }
      }
      return Object.assign(history, { [date]: item });
    },
    {}
  );

export const updateItem = (last: unknown, item: unknown, updated = _time) =>
  ((last, { _created, _updated = _created, _history, ...item }) => ({
    ...item,
    _created: _created,
    _updated: updated,
    _history: {
      ..._history,
      [_updated]: last,
    },
  }))(ExtendedItem.parse(last), {
    ...z
      .object({
        _id: z.string(),
        _created: z.number(),
        _updated: z.number().optional(),
        _checked: z.number().optional(),
        _removed: z.number().optional(),
        _history: z.object({}).passthrough().default({}),
        options: z.string().array().optional(),
      })
      .parse(last),
    ...ExtendedItem.parse(item),
  });

export const scrapOptions = (item: object, html: string) => {
  const $root = parse(html);

  return {
    ...item,
    options: ([] as string[])
      .concat(
        $root.querySelectorAll("table.table-lg-columns tr").map(($el) =>
          $el
            .querySelectorAll("*")
            .map(($el) => $el.text.replace(/\s+/g, " ").trim())
            .join("\t")
        )
      )
      .concat(
        $root.querySelectorAll("ul.list-group li").map(($el) => $el.text.trim())
      ),
  };
};
