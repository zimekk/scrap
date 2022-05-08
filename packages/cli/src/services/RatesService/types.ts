import { z } from "zod";

export const ArgsSchema = z.object({
  date: z.string().default(""),
  // date: z.string().default("2008-01-01"),
});

export const RateSchema = z.object({
  code: z.string(),
  units: z.number(),
  buy: z.string(),
  sell: z.string(),
  spread: z.string(),
  date: z.string(),
  time: z.string(),
});

export const ItemSchema = RateSchema.extend({
  id: z.string(),
});

export type Rate = z.infer<typeof RateSchema>;

export const DataSchema = z.object({
  date: z.string(),
  rates: z.record(z.array(RateSchema)),
  range: z.object({ minRateDate: z.string(), maxRateDate: z.string() }),
});
