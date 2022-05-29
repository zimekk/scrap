import { z } from "zod";

export const Vehicle3Data = z
  .object({
    pagination: z.object({
      currentPage: z.number(),
      pageSize: z.number(),
      totalPages: z.number(),
    }),
    products: z.array(
      z
        .object({
          commissionNumber: z.string(),
        })
        .passthrough()
        .transform((item) => ({
          ...item,
          id: item.commissionNumber,
        }))
    ),
  })
  .strict();

export const Vehicle3Item = z
  .object({
    id: z.string(),
  })
  .passthrough();
