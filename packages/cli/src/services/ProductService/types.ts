import { z } from "zod";

const ReviewSchema = z
  .object({
    rating: z.number().optional(),
    author: z.string(),
    date: z.string(),
    body: z.string(),
  })
  .transform(({ rating, ...review }) =>
    Object.assign(rating !== undefined ? { rating } : {}, review)
  );

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
  reviews: z
    .array(ReviewSchema)
    .transform((reviews) =>
      reviews.sort((a, b) => a.date.localeCompare(b.date))
    )
    .optional(),
});

const JsonReviewSchema = z
  .object({
    reviewRating: z.object({ ratingValue: z.number() }).optional(),
    author: z.object({
      name: z.string().transform((s) => s.trim()),
    }),
    datePublished: z.string().transform((s) => s.split("T")[0]),
    description: z.string().transform((s) => s.trim()),
  })
  .transform(
    ({
      reviewRating: { ratingValue: rating } = {},
      author: { name: author },
      datePublished: date,
      description: body,
    }) => ({
      rating,
      author,
      date,
      body,
    })
  );

export const ItemJsonSchema = z.object({
  name: z.string(),
  productID: z.string(),
  sku: z.string(),
  mpn: z.string(),
  image: z.union([z.string(), z.string().array()]),
  offers: z.object({
    priceCurrency: z.enum(["PLN"]),
    price: z.number(),
  }),
  brand: z.object({
    name: z.string(),
  }),
  review: z
    .union([
      JsonReviewSchema.transform((review) => [review]),
      JsonReviewSchema.array(),
    ])
    .optional(),
});

export const ItemJson3Schema = z.object({
  name: z.string(),
  image: z.string(),
  brand: z.object({
    name: z.string(),
  }),
  sku: z.string(),
  gtin13: z.string().optional(),
  review: z
    .object({
      reviewRating: z
        .object({ ratingValue: z.string().transform(Number) })
        .optional(),
      author: z.object({
        name: z.string().transform((s) => s.trim()),
      }),
      datePublished: z.string(),
      reviewBody: z.string().transform((s) => s.trim()),
    })
    .transform(
      ({
        reviewRating: { ratingValue: rating } = {},
        author: { name: author },
        datePublished: date,
        reviewBody: body,
      }) => ({
        rating,
        author,
        date,
        body,
      })
    )
    .array()
    .optional(),
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
  reviews: z
    .array(ReviewSchema)
    .transform((reviews) =>
      reviews.sort((a, b) => a.date.localeCompare(b.date))
    )
    .optional(),
});

export type ProductItem = {
  id: string;
  _created: number;
  _updated: number;
} & z.infer<typeof ItemSchema>;

export type ReviewItem = z.infer<typeof ReviewSchema>;
