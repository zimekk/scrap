import { type RequestHandler, Router } from "express";
import fetch from "isomorphic-fetch";
import { stringify } from "qs";
import { rooms } from "@dev/api";
import {
  AvailabilityQuery,
  OffersQuery,
  type RoomsType,
} from "@dev/cli/src/services/RoomsService/types";

export const getRoomsData: RequestHandler = (_req, res) =>
  Promise.all([rooms.find({}) as Promise<RoomsType[]>])
    // .then(([results]) => results.sort((a, b) => Number(b.id) - Number(a.id)))
    .then(([results]) => res.json(results));

export const getRooms = Router()
  .get("/:id/offers", ({ params: { id }, query }, res) =>
    OffersQuery.parseAsync(query)
      .then((query) =>
        fetch(
          `https://booking.profitroom.com/api/${id}/offers?${stringify(query)}`
        )
      )
      .then((res) => res.json())
      .then((data) => res.json(data))
  )
  .get("/:id/availability", ({ params: { id }, query }, res) =>
    AvailabilityQuery.parseAsync(query)
      .then((query) =>
        fetch(
          `https://booking.profitroom.com/api/${id}/availability?${stringify(
            query
          )}`
        )
      )
      .then((res) => res.json())
      .then((data) => res.json(data))
  )
  .get("/:id/:type", ({ params: { id, type } }, res) =>
    fetch(`https://booking.profitroom.com/api/${id}/${type}`)
      .then((res) => res.json())
      .then((data) => res.json(data))
  );
