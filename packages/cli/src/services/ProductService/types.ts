import { z } from "zod";

const ReviewSchema = z.object({
  rating: z.number().optional(),
  author: z.string(),
  date: z.string(),
  body: z.string(),
});

export const DiffSchema = z.object({
  url: z.string(),
  title: z.string(),
  image: z.string().array(),
  // stars: z.string(),
  brand: z.string(),
  label: z.string().array(),
  price: z.string().array(),
  proms: z.string().array(),
  codes: z.string().array(),
  links: z.string().array(),
  reviews: z.array(ReviewSchema).optional(),
});

export const ItemSchema = z.object({
  id: z.string().optional(),
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
  reviews: z.array(ReviewSchema).optional(),
});

export type ProductItem = {
  id: string;
  _created: number;
  _updated: number;
} & z.infer<typeof ItemSchema>;

export type ReviewItem = z.infer<typeof ReviewSchema>;
