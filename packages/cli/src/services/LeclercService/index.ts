import { z } from "zod";
import { leclerc } from "@dev/api";
import Service from "../Service";
import { type LeclercType, Leclerc } from "./types";

const _time = Date.now();

const createId = (url: string) => "petrol-station";

export class LeclercService extends Service {
  async sync(json = {}, { timestamp: _fetched, url }: any = {}) {
    console.log({ json });
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
