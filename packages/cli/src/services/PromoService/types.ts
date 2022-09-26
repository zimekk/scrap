import { z } from "zod";

export const ItemSchema = z.object({
  name: z.string(),
  desc: z.string(),
  href: z.string(),
  code: z.string().optional(),
});

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  url: z.string(),
  photo: z.string(),
  rate: z.number(),
  rate_count: z.number(),
  // features: z.record(z.string()).array(),
  price: z.number(),
  previous_price: z.number(),
  filter_values: z.array(z.string()),
  popularity: z.number(),
  mark: z.string(),
});

export type ProductType = z.infer<typeof ProductSchema>;

export const JsonSchema = z
  .object({
    filters: z
      .object({
        id: z.number(),
        name: z.string(),
        position: z.number(),
        type: z.enum(["availability", "custom", "price", "producer"]),
        values: z
          .object({
            count: z.number(),
            id: z.number(),
            name: z.string(),
            position: z.number(),
          })
          .array(),
        view: z.enum(["select", "range"]),
      })
      .array(),
    general: z.object({
      date_start: z.string(),
      date_start_utc: z.string(),
      date_stop: z.string(),
      date_stop_utc: z.string(),
      enabled: z.boolean(),
      id: z.number(),
      name: z.string(),
      url: z.string(),
    }),
    products: ProductSchema.array(),
    seo: z.object({
      description: z.string(),
      keywords: z.string(),
      robots: z.string(),
      title: z.string(),
    }),
  })
  .strip();

export type PromoType = z.infer<typeof ItemSchema> & {
  data?: z.infer<typeof JsonSchema>;
  _created: number;
  _checked: number;
};

export const ListSchema = z.object({
  list: ItemSchema.array(),
});
