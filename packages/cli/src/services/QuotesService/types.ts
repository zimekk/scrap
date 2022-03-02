import { z } from "zod";

export const TypeSchema = z
  .tuple([z.string(), z.string().transform(Number)])
  .transform(([type, investment_id]) => ({
    type,
    investment_id,
  }));

export const ItemSchema = z.object({
  date: z.string(),
  roi: z.number(),
  unit: z.string(),
  value: z.number(),
});

export type Item = z.infer<typeof ItemSchema> & {
  investment_id: number;
};

export const DiffSchema = z.object({
  currency: z.string(),
  division: z.string(),
  end_date: z.string(),
  end_value: z.number(),
  id: z.number(),
  // limit: z.number(),
  name: z.string(),
  // next: z.string().nullable(),
  // offset: z.number(),
  only_full: z.boolean(),
  // previous: z.string().nullable(),
  roi: z.number(),
  start_date: z.string(),
  start_value: z.number(),
  synthetic_value_to: z.string().nullable(),
  total_count: z.number(),
});

export const MetaSchema = DiffSchema;

export type Meta = z.infer<typeof MetaSchema>;

export const DataSchema = z.object({
  meta: MetaSchema.extend({
    limit: z.number(),
    next: z.string().nullable(),
    offset: z.number(),
    previous: z.string().nullable(),
  }),
  objects: z.array(ItemSchema),
});
