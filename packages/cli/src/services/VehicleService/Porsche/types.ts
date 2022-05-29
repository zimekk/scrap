import { z } from "zod";

export const Vehicle4Data = z.object({
  pages: z.object({
    activePage: z.number(),
    totalPages: z.number(),
  }),
  results: z.array(
    z
      .object({
        description: z
          .object({
            listingId: z.string(),
          })
          .passthrough(),
      })
      .passthrough()
      .transform((item) => ({
        ...item,
        id: item.description.listingId,
      }))
  ),
  // count: z.any(),
  // filterOptions: z.any(),
  // sortOptions: z.any(),
});
// .strict()

export const Vehicle4Item = z
  .object({
    id: z.string(),
  })
  .passthrough();
