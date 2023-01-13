import { z } from "zod";

export const Leclerc = z
  .object({
    id: z.string(),
  })
  .passthrough();

export const DiffSchema = z.object({
  id: z.string(),
  petrol_list: z
    .object({
      type: z.string(),
      price: z.string(),
    })
    .array(),
});

export type LeclercType = z.infer<typeof Leclerc> & {
  _id: string;
  _created: number;
  _checked: number;
  _updated: number;
  _history: Record<string, object>;
};
