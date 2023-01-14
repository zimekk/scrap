import { z } from "zod";

export const Gpass = z
  .object({
    id: z.string(),
  })
  .passthrough();

export const DiffSchema = z.object({
  id: z.string(),
  details: z.object({}).passthrough().array(),
});

export type GpassType = z.infer<typeof Gpass> & {
  _id: string;
  _created: number;
  _checked: number;
  _updated: number;
  _history: Record<string, object>;
};
