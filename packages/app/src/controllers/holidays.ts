import fetch from "isomorphic-fetch";
import { RequestHandler } from "express";
import { holidaysItems } from "@dev/api/holidays";
import {
  BASE_URL,
  HotelOffersQuerySchema,
  HotelOffersSchema,
} from "@dev/cli/src/services/HolidaysService/types";

export const getHolidaysData: RequestHandler = (_req, res) =>
  // Promise.resolve(require('@dev/web/src/assets/api/holidays/data'))
  holidaysItems.find({}).then((json) => res.json(json));

export const getHollidaysHotelOffersData: RequestHandler = (req, res) =>
  HotelOffersQuerySchema.parseAsync(req.query)
    .then((params) =>
      fetch(
        `${BASE_URL}api/sitecore/Hotel/HotelAllOffersAsJson?${new URLSearchParams(
          params
        )}`
      )
    )
    .then((res) => res.json())
    .then((data) => HotelOffersSchema.parseAsync(data))
    .then((json) => res.json(json));
