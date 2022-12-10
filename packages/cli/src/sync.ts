import fetch from "isomorphic-fetch";
import { z } from "zod";
import {
  HotShotService,
  HotShotAltoService,
  PromoService,
  PropertyOtodomService,
  QuotesService,
  RatesService,
  StationService,
  VehicleService,
} from "./services";

const { SYNC_URL } = process.env;

export const Type = {
  AUTOS: "AUTOS",
  FUNDS: "FUNDS",
  PROMO: "PROMO",
  PROMO_ITEM: "PROMO_ITEM",
  HOTSHOT: "HOTSHOT",
  OTODOM: "OTODOM",
  OTODOM_OFFER: "OTODOM_OFFER",
  RATES: "RATES",
  STATIONS: "STATIONS",
  STATION: "STATION",
} as const;

const post = (path: string, data?: object) =>
  fetch(`${SYNC_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : null,
  });

export const sync = async (type = "") => {
  const summary = {
    created: [],
    checked: [],
    updated: [],
    request: {},
  };

  console.log(["sync"], { type });

  post("entries", { type })
    .then((response) => response.json())
    .then(
      z
        .preprocess(
          z
            .object({
              type: z.string(),
              data: z.object({}).passthrough(),
              returnvalue: z.object({}).passthrough(),
            })
            .transform(({ type, data, returnvalue }) => ({
              type,
              data: {
                ...data,
                ...returnvalue,
              },
            })).parse,
          z.discriminatedUnion("type", [
            z.object({
              type: z.literal(Type.AUTOS),
              data: z
                .object({
                  url: z.string(),
                })
                .extend({
                  json: z.any(),
                })
                .transform(({ json }) => {
                  const service = new VehicleService({ summary });
                  return service.sync(json);
                }),
            }),
            z.object({
              type: z.literal(Type.FUNDS),
              data: z
                .object({
                  url: z.string(),
                })
                .extend({
                  json: z.any(),
                })
                .transform(({ json }) => {
                  const service = new QuotesService({ summary });
                  return service.sync(json);
                }),
            }),
            z.object({
              type: z.literal(Type.PROMO),
              data: z.object({}).passthrough(),
            }),
            z.object({
              type: z.literal(Type.PROMO_ITEM),
              data: z
                .object({
                  url: z.string(),
                })
                .extend({
                  code: z.string().optional(),
                  desc: z.string(),
                  href: z.string(),
                  name: z.string(),
                })
                .extend({
                  json: z.any(),
                })
                .transform(({ json, ...data }) => {
                  const service = new PromoService({ summary });
                  return service.sync(json, data);
                }),
            }),
            z.object({
              type: z.literal(Type.HOTSHOT),
              data: z
                .object({
                  url: z.string(),
                })
                .extend({
                  json: z.any(),
                })
                .transform(({ url, json }) => {
                  const service = url.match(/al.to\/goracy_strzal/)
                    ? new HotShotAltoService({ summary })
                    : new HotShotService({ summary });
                  return service.process(json);
                }),
            }),
            z.object({
              type: z.literal(Type.OTODOM),
              data: z.object({
                url: z.string(),
              }),
            }),
            z.object({
              type: z.literal(Type.OTODOM_OFFER),
              data: z
                .object({
                  url: z.string(),
                })
                .extend({
                  json: z.any(),
                })
                .transform(({ json }) => {
                  const service = new PropertyOtodomService({ summary });
                  return service.sync(json);
                }),
            }),
            z.object({
              type: z.literal(Type.RATES),
              data: z
                .object({
                  url: z.string(),
                })
                .extend({
                  json: z.any(),
                })
                .transform(({ json }) => {
                  const service = new RatesService({ summary });
                  return service.sync(json);
                }),
            }),
            z.object({
              type: z.literal(Type.STATIONS),
              data: z.object({
                url: z.string(),
              }),
            }),
            z.object({
              type: z.literal(Type.STATION),
              data: z
                .object({
                  url: z.string(),
                })
                .passthrough()
                .extend({
                  json: z.any(),
                })
                .transform((item) => {
                  const service = new StationService({ summary });
                  return service.sync(item);
                }),
            }),
          ])
        )
        .array().parseAsync
    )
    .then(() => console.log(summary));
};
