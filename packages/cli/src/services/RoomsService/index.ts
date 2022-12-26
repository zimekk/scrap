import { z } from "zod";
import { rooms } from "@dev/api";
import Service from "../Service";
import { type RoomsType, Rooms } from "./types";

const _time = Date.now();

const createId = (url: string) =>
  (([_, id]) => id)(url.match("api/(\\w+)/details") || []);

export class RoomsService extends Service {
  async sync(json = {}, { timestamp: _fetched, url }: any = {}) {
    return Rooms.parseAsync({ id: createId(url), ...json }).then((item) =>
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
        rooms
          .findOne({ id: item.id })
          .then((last) => last as RoomsType)
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
              return rooms.insert({
                ...item,
                _created: _time,
              });
            }
          })
      );
  }
}
