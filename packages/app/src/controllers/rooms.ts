import { type RequestHandler, Router } from "express";
import fetch from "isomorphic-fetch";
import { stringify } from "qs";
import { rooms } from "@dev/api";
import {
  AvailabilityQuery,
  OffersQuery,
  type RoomsType,
} from "@dev/cli/src/services/RoomsService/types";

function cache(id: string, type: string, callback: () => Promise<unknown>) {
  return rooms.findOne({ id }).then((item: any) => {
    if (item && item._cache && item._cache[type]) {
      return item._cache[type];
    }
    return callback().then((data) => {
      if (item) {
        const [_type, _key] = type.split(":");
        const _cache = Object.assign(
          {},
          item._cache || {},
          _key
            ? {
                [_type]: Object.assign(
                  (item._cache && item._cache[_type]) || {},
                  {
                    [_key]: data,
                  }
                ),
              }
            : {
                [type]: data,
              }
        );
        return rooms.update({ ...item, _cache }).then(() => data);
      }
      return data;
    });
  });
}

export const getRoomsData: RequestHandler = (_req, res) =>
  Promise.all([rooms.find({}) as Promise<RoomsType[]>])
    // .then(([results]) => results.sort((a, b) => Number(b.id) - Number(a.id)))
    .then(([results]) => res.json(results));

export const getRooms = Router()
  .get("/:id/availability", ({ params: { id }, query }, res) =>
    AvailabilityQuery.parseAsync(query).then((query) =>
      cache(
        id,
        ["availability", JSON.stringify(stringify(query))].join(":"),
        () =>
          fetch(
            `https://booking.profitroom.com/api/${id}/availability?${stringify(
              query
            )}`
          ).then((res) => res.json())
      ).then((data) => res.json(data))
    )
  )
  .get("/:id/offers", ({ params: { id }, query }, res) =>
    OffersQuery.parseAsync(query).then((query) =>
      cache(id, "offers", () =>
        fetch(
          `https://booking.profitroom.com/api/${id}/offers?${stringify(query)}`
        ).then((res) => res.json())
      ).then((data) => res.json(data))
    )
  )
  .get("/:id/:type", ({ params: { id, type } }, res) =>
    cache(
      id,
      {
        "person-types": "personTypes",
        "extra-beds": "extraBeds",
      }[type] || type,
      () =>
        fetch(`https://booking.profitroom.com/api/${id}/${type}`).then((res) =>
          res.json()
        )
    ).then((data) => res.json(data))
  );
