import { z } from "zod";

export const ProductItemSchema = z.object({
  url: z.string(),
  title: z.string(),
  image: z.string().array(),
  stars: z.string(),
  brand: z.string(),
  label: z.string().array(),
  price: z.string().array(),
  proms: z.string().array(),
  codes: z.string().array(),
  links: z.string().array(),
});

export type ProductItem = {
  id: string;
  _created: number;
  _updated: number;
} & z.infer<typeof ProductItemSchema>;
