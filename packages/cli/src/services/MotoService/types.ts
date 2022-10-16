import { z } from "zod";

export const MotoItem = z.object({
  id: z.string(),
  price: z.number(),
  thumbnail: z.string().optional(),
  title: z.string(),
  url: z.string(),
});

export const MotoDiff = MotoItem.omit({
  id: true,
});
