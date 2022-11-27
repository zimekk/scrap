import fetch from "isomorphic-fetch";
import { z } from "zod";
import {
  HotShotService,
  HotShotAltoService,
  PromoService,
  PropertyOtodomService,
} from "./services";

const { SYNC_URL } = process.env;

export const Type = {
  PROMO: "PROMO",
  PROMO_ITEM: "PROMO_ITEM",
  HOTSHOT: "HOTSHOT",
  HOTSHOT_ALTO: "HOTSHOT_ALTO",
  OTODOM: "OTODOM",
  OTODOM_OFFER: "OTODOM_OFFER",
} as const;

const post = (path: string, data?: object) =>
  fetch(`${SYNC_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : null,
  });

export const sync = async () => {
  const summary = {
    created: [],
    checked: [],
    updated: [],
    request: {},
  };

  console.log(["sync"]);

  post("entries")
    .then((response) => response.json())
    .then(
      z
        .discriminatedUnion("type", [
          z
            .object({
              type: z.literal(Type.PROMO),
              data: z.object({
                url: z.string(),
              }),
              returnvalue: z.object({}),
            })
            .extend({})
            .passthrough(),
          z.object({
            type: z.literal(Type.PROMO_ITEM),
            data: z.object({
              url: z.string(),
            }),
            returnvalue: z
              .object({
                json: z.any(),
              })
              .transform(({ json }) => {
                const service = new PromoService({ summary });
                return service.sync(json);
              }),
          }),
          z.object({
            type: z.literal(Type.HOTSHOT),
            data: z.object({
              url: z.string(),
            }),
            returnvalue: z
              .object({
                json: z.any(),
              })
              .transform(({ json }) => {
                const service = new HotShotService({ summary });
                return service.process(json);
              }),
          }),
          z.object({
            type: z.literal(Type.HOTSHOT_ALTO),
            data: z.object({
              url: z.string(),
            }),
            returnvalue: z
              .object({
                json: z.any(),
              })
              .transform(({ json }) => {
                const service = new HotShotAltoService({ summary });
                return service.process(json);
              }),
          }),
          z.object({
            type: z.literal(Type.OTODOM),
            data: z.object({
              url: z.string(),
            }),
            returnvalue: z.object({}),
          }),
          z.object({
            type: z.literal(Type.OTODOM_OFFER),
            data: z.object({
              url: z.string(),
            }),
            returnvalue: z
              .object({
                json: z.any(),
              })
              .transform(({ json }) => {
                const service = new PropertyOtodomService({ summary });
                return service.sync(json);
              }),
          }),
        ])
        .array().parseAsync
    )
    .then(() => console.log(summary));
};
