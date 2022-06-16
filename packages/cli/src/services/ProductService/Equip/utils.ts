import { z } from "zod";
import { parse } from "node-html-parser";
import { ItemSchema } from "../types";

const ItemJsonSchema = z.object({
  "@type": z.enum(["Product"]),
  name: z.string(),
  image: z.union([
    z.string().transform((image) => [image]),
    z.string().array(),
  ]),
  description: z.string(),
  productID: z.string(),
  brand: z.string(),
  offers: z
    .object({
      "@type": z.enum(["Offer"]),
      availability: z.enum([
        "http://schema.org/InStock",
        "http://schema.org/OutOfStock",
      ]),
      priceCurrency: z.enum(["PLN"]),
      price: z.string(),
      url: z.string(),
    })
    .array()
    .transform(([item]) => item),
  review: z
    .object({
      author: z.string(),
      description: z.string(),
      reviewRating: z
        .object({
          "@type": z.enum(["Rating"]),
          bestRating: z.string().transform(Number),
          ratingValue: z.string().transform(Number),
          worstRating: z.string().transform(Number),
        })
        .passthrough(),
    })
    .transform(
      ({
        author,
        description: body,
        reviewRating: { ratingValue: rating },
      }) => ({ author, date: "2001-01-01", body, rating })
    )
    .array()
    .optional(),
});

export const fromHtml = (html: string) => {
  const $root = parse(html);

  const json = $root
    .querySelectorAll('script[type="application/ld+json"]')
    .flatMap((item) =>
      JSON.parse(item.rawText.replace(/[\r\n\t]+/g, "").trim() || "")
    )
    .map((json) =>
      z
        .object({
          "@context": z.enum(["http://schema.org"]),
          "@type": z.enum(["Product"]),
        })
        .passthrough()
        .safeParse(json)
    )
    .filter(({ success }) => success)
    .map(({ data }: any) => data)
    .pop();

  const url = $root
    .querySelector('link[rel="canonical"]')
    ?.getAttribute("href");

  try {
    return ItemSchema.parse({
      url,
      stars: "",
      proms: [],
      codes: [],
      ...ItemJsonSchema.transform(
        ({
          productID: id,
          name: title,
          description,
          brand,
          image,
          offers: { availability, price },
          review,
        }) => ({
          id,
          title,
          description,
          brand,
          image,
          label: [`productID: ${id}`],
          links: [
            {
              "http://schema.org/InStock": "InStock",
              "http://schema.org/OutOfStock": "OutOfStock",
            }[availability],
          ],
          price: [price],
          reviews: review,
        })
      ).parse(json),
    });
  } catch (e) {
    console.log(json);
    throw e;
  }
};
