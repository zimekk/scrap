import { z } from "zod";

export const Gpass = z
  .object({
    id: z.string(),
  })
  .passthrough();

export type GpassType = z.infer<typeof Gpass> & {
  _created: number;
  _checked: number;
  _updated: number;
};
