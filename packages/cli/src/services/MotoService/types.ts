import { z } from "zod";

export const MotoItem = z.object({
  id: z.string(),
  location: z
    .object({
      city: z.object({
        name: z.string(),
        // __typename: z.enum(["AdministrativeLevel"]),
      }),
      region: z.object({
        name: z.string(),
        // __typename: z.enum(["AdministrativeLevel"]),
      }),
      // __typename: z.enum(["Location"]),
    })
    .optional(),
  parameters: z
    .object({
      key: z.enum(["make", "year", "mileage", "engine_capacity", "fuel_type"]),
      displayValue: z.string(),
      value: z.string(),
      // __typename: z.enum(["AdvertParameter"]),
    })
    .array()
    .optional(),
  price: z.number(),
  priceCurrency: z.enum(["EUR", "PLN"]).optional(),
  shortDescription: z.string().optional(),
  thumbnail: z.string().optional(),
  title: z.string(),
  url: z.string(),
});

export const MotoDiff = MotoItem.omit({
  id: true,
});

export type ItemType = z.infer<typeof MotoItem> & {
  _created: number;
  _checked: number;
};
