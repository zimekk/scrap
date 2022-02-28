import { RequestHandler } from "express";
import { z } from "zod";
// import { items } from "@dev/api";
// import { profilesItems, propertyItems } from "@dev/api";

// export const getQuotesData: RequestHandler = (_req, res) =>
//   items.find({}).then((results) => res.json({ results }));

export const getQuotesData: RequestHandler = (_req, res) =>
  fetch(
    "https://www.pkotfi.pl/_ajax/rest/v2/tfi/fund/75/values/?format=json&ajax=1&lang=pl&date__gte=2021-02-02&date__lte=2022-02-02&division=daily&unit=A"
  )
    .then((res) => res.json())
    .then((body) =>
      z
        .object({
          meta: z.object({
            currency: z.string(),
            division: z.string(),
            end_date: z.string(),
            end_value: z.number(),
            id: z.number(),
            limit: z.number(),
            name: z.string(),
            next: z.string().nullable(),
            offset: z.number(),
            only_full: z.boolean(),
            previous: z.string().nullable(),
            roi: z.number(),
            start_date: z.string(),
            start_value: z.number(),
            synthetic_value_to: z.string(),
            total_count: z.number(),
          }),
          objects: z.array(
            z.object({
              date: z.string(),
              roi: z.number(),
              unit: z.string(),
              value: z.number(),
            })
          ),
        })
        .parse(body)
    )
    .then(({ meta, objects }) =>
      res.json({
        meta,
        objects,
      })
    );
