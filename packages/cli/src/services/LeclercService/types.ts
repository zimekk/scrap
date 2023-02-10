import { z } from "zod";

const PetrolList = z
  .object({
    type: z.string(),
    price: z.string(),
  })
  .array();

const Item = z.object({
  id: z.string(),
  petrol_list: PetrolList,
});

export const Leclerc = Item.passthrough();

export const DiffSchema = Item.extend({});

export type LeclercType = z.infer<typeof Leclerc> & {
  _id: string;
  _created: number;
  _checked: number;
  _updated: number;
  _history: Record<string, { petrol_list: z.infer<typeof PetrolList> }>;
};
