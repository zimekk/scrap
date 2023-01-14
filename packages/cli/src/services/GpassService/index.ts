import { diffString } from "json-diff";
import { z } from "zod";
import { gpass } from "@dev/api";
import Service from "../Service";
import { DiffSchema, type GpassType, Gpass } from "./types";

const ERA = 24 * 3600 * 1000;
const _time = Date.now();
const _past = _time - ERA;

const createId = (url: string) =>
  (([_, id]) => id)(url.match("/pl-PL/([^/]+)") || []);

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

export class GpassService extends Service {
  async sync(json = {}, { timestamp: _fetched, url }: any = {}) {
    return Gpass.parseAsync({ id: createId(url), ...json }).then((item) =>
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
        gpass
          .findOne({ id: item.id })
          .then((last) => last as GpassType)
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
                return gpass.update(updateItem(last, item));
              } else {
                this.summary.checked.push(item.id);
                return gpass.update({ ...last, _checked: _time });
              }
            } else {
              this.summary.created.push(item.id);
              return gpass.insert({
                ...item,
                _created: _time,
              });
            }
          })
      );
  }
}
