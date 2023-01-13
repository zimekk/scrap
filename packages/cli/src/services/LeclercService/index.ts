import { diffString } from "json-diff";
import { z } from "zod";
import { leclerc } from "@dev/api";
import Service from "../Service";
import { DiffSchema, type LeclercType, Leclerc } from "./types";

const ERA = 24 * 3600 * 1000;
const _time = Date.now();
const _past = _time - ERA;

const createId = (url: string) => "petrol-station";

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

export class LeclercService extends Service {
  async sync(json = {}, { timestamp: _fetched, url }: any = {}) {
    return Leclerc.parseAsync({ id: createId(url), ...json }).then((item) =>
      this.commit(item, { _fetched })
    );
  }

  async commit(item = {}, { _fetched }: any = {}) {
    return z
      .object({
        id: z.string(),
      })
      .passthrough()
      .parseAsync(item)
      .then((item) =>
        leclerc
          .findOne({ id: item.id })
          .then((last) => last as LeclercType)
          .then((last) => {
            if (last) {
              if (
                _fetched &&
                (_fetched < last._checked ||
                  _fetched < last._updated ||
                  _fetched < last._created)
              ) {
                return;
              }
              const diff = diffString(
                DiffSchema.parse(last),
                DiffSchema.parse(item)
              );
              if (diff) {
                console.log(`[${last.id}]`, diff);
                this.summary.updated.push(item.id);
                return leclerc.update(updateItem(last, item));
              } else {
                this.summary.checked.push(item.id);
                return leclerc.update({ ...last, _checked: _time });
              }
            } else {
              this.summary.created.push(item.id);
              return leclerc.insert({
                ...item,
                _created: _time,
              });
            }
          })
      );
  }
}
