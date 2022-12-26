import fetch from "isomorphic-fetch";
import { z } from "zod";
import {
  GpassService,
  HotShotService,
  HotShotAltoService,
  MotoService,
  PromoService,
  PropertyOtodomService,
  QuotesService,
  RatesService,
  RoomsService,
  StationService,
  VehicleService,
  GameService,
} from "./services";

const { SYNC_URL } = process.env;

export const Type = {
  AUTOS: "AUTOS",
  AUTOS_ITEM: "AUTOS_ITEM",
  FUNDS: "FUNDS",
  GAMES: "GAMES",
  GPASS: "GPASS",
  PROMO: "PROMO",
  PROMO_ITEM: "PROMO_ITEM",
  HOTSHOT: "HOTSHOT",
  OTODOM: "OTODOM",
  OTODOM_OFFER: "OTODOM_OFFER",
  OTOMOTO: "OTOMOTO",
  OTOMOTO_OFFER: "OTOMOTO_OFFER",
  PRODUCTS: "PRODUCTS",
  RATES: "RATES",
  ROOMS: "ROOMS",
  STATIONS: "STATIONS",
  STATION: "STATION",
  UNKNOWN: "UNKNOWN",
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

  const ProcessSchema = z
    .preprocess(
      // .transform(t => (console.log(t), t))
      z
        .object({
          type: z.string(),
          data: z.object({}).passthrough(),
          opts: z.object({}).passthrough(),
          returnvalue: z.object({}).passthrough(),
        })
        .transform(({ type, data, opts, returnvalue }) =>
          // console.log(opts),
          ({
            type,
            data: {
              ...data,
              ...opts,
              ...returnvalue,
            },
          })
        ).parse,
      z.discriminatedUnion("type", [
        z.object({
          type: z.literal(Type.AUTOS),
          data: z
            .object({
              url: z.string(),
              timestamp: z.number(),
            })
            .extend({
              json: z.any(),
            })
            .transform(({ json, timestamp }) => {
              const service = new VehicleService({ summary });
              return service.sync(json, { timestamp });
            }),
        }),
        z.object({
          type: z.literal(Type.AUTOS_ITEM),
          data: z.object({}).passthrough(),
        }),
        z.object({
          type: z.literal(Type.FUNDS),
          data: z
            .object({
              url: z.string(),
              timestamp: z.number(),
            })
            .extend({
              json: z.any(),
            })
            .transform(({ json, timestamp }) => {
              const service = new QuotesService({ summary });
              return service.sync(json, { timestamp });
            }),
        }),
        z.object({
          type: z.literal(Type.GAMES),
          data: z
            .object({
              url: z.string(),
              timestamp: z.number(),
            })
            .extend({
              json: z.any(),
            })
            .transform(({ json, timestamp }) => {
              const service = new GameService({ summary });
              return service.sync(json, { timestamp });
            }),
        }),
        z.object({
          type: z.literal(Type.GPASS),
          data: z
            .object({
              url: z.string(),
              timestamp: z.number(),
            })
            .extend({
              json: z.any(),
            })
            .transform(({ json, timestamp, url }) => {
              const service = new GpassService({ summary });
              return service.sync(json, { timestamp, url });
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
              timestamp: z.number(),
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
              timestamp: z.number(),
            })
            .extend({
              json: z.any(),
            })
            .transform(({ url, json, timestamp }) => {
              const service = url.match(/al.to\/goracy_strzal/)
                ? new HotShotAltoService({ summary })
                : new HotShotService({ summary });
              return service.sync(json, { timestamp });
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
              timestamp: z.number(),
            })
            .extend({
              json: z.any(),
            })
            .transform(({ json, timestamp }) => {
              const service = new PropertyOtodomService({ summary });
              return service.sync(json, { timestamp });
            }),
        }),
        z.object({
          type: z.literal(Type.OTOMOTO),
          data: z
            .object({
              url: z.string(),
              timestamp: z.number(),
            })
            .extend({
              json: z.any(),
            })
            .transform(({ json, timestamp }) => {
              const service = new MotoService({ summary });
              return service.sync(json, { timestamp });
            }),
        }),
        z.object({
          type: z.literal(Type.OTOMOTO_OFFER),
          data: z.object({
            url: z.string(),
          }),
        }),
        z.object({
          type: z.literal(Type.PRODUCTS),
          data: z.object({
            url: z.string(),
          }),
        }),
        z.object({
          type: z.literal(Type.RATES),
          data: z
            .object({
              url: z.string(),
              timestamp: z.number(),
            })
            .extend({
              json: z.any(),
            })
            .transform(({ json, timestamp }) => {
              const service = new RatesService({ summary });
              return service.sync(json, { timestamp });
            }),
        }),
        z.object({
          type: z.literal(Type.ROOMS),
          data: z
            .object({
              url: z.string(),
              timestamp: z.number(),
            })
            .extend({
              json: z.any(),
            })
            .transform(({ json, timestamp, url }) => {
              const service = new RoomsService({ summary });
              return service.sync(json, { timestamp, url });
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
              timestamp: z.number(),
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
        z.object({
          type: z.literal(Type.UNKNOWN),
          data: z.object({
            url: z.string(),
          }),
        }),
      ])
    )
    .array();

  for (let start = 0, limit = 100; ; start += limit) {
    const items = await post("entries", { type, start, limit: limit + 1 }).then(
      (response) => response.json()
    );
    const entries = items.slice(0, limit);
    console.log(["process"], start, start + entries.length);
    await ProcessSchema.parseAsync(entries);
    if (!(items.length > limit) || start > 5000) {
      break;
    }
  }

  console.log(summary);
};
