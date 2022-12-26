import { z } from "zod";
import { gpass } from "@dev/api";
import Service from "../Service";
import { type GpassType, Gpass } from "./types";

const _time = Date.now();

const createId = (url: string) =>
  (([_, id]) => id)(url.match("/pl-PL/([^/]+)") || []);

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
