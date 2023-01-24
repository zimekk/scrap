import { diffString } from "json-diff";
import { z } from "zod";
import { directions } from "@dev/api";
import Service, { _time, updateItem } from "../Service";
import {
  DiffSchema,
  type DirectionsType,
  DirectionsInputSchema,
  DirectionsSchema,
} from "./types";

const createId = (url: string) =>
  ((searchParams) =>
    [
      "directions",
      searchParams.get("origin"),
      searchParams.get("destination"),
      searchParams.get("travelmode"),
    ].join(":"))(new URL(url).searchParams);

export class DirectionsService extends Service {
  async sync(json = {}, { timestamp: _fetched, url }: any = {}) {
    return DirectionsSchema.parseAsync({
      id: createId(url),
      ...DirectionsInputSchema.parse(json),
    }).then((item) => this.commit(item, { _fetched }));
  }

  async commit(item = {}, { _fetched }: any = {}) {
    // console.log(item);
    return z
      .object({
        id: z.string(),
      })
      .passthrough()
      .parseAsync(item)
      .then((item) =>
        directions
          .findOne({ id: item.id })
          .then((last) => last as DirectionsType)
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
                return directions.update(updateItem(last, item));
              } else {
                this.summary.checked.push(item.id);
                return directions.update({ ...last, _checked: _time });
              }
            } else {
              this.summary.created.push(item.id);
              return directions.insert({
                ...item,
                _created: _time,
              });
            }
          })
      );
  }
}
