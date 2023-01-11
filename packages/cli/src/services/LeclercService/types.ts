import { z } from "zod";

export const Leclerc = z
  .object({
    id: z.string(),
  })
  .passthrough();

export type LeclercType = z.infer<typeof Leclerc> & {
  _created: number;
  _checked: number;
  _updated: number;
};
