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
  sku: z.string(),
  mpn: z.string(),
  gtin13: z.string(),
  brand: z
    .object({
      "@type": z.enum(["Brand"]),
      name: z.string(),
    })
    .transform(({ name }) => name),
  offers: z.object({
    "@type": z.enum(["Offer"]),
    availability: z.enum([
      "http://schema.org/InStock",
      "http://schema.org/OutOfStock",
      "http://schema.org/SoldOut",
    ]),
    priceCurrency: z.enum(["PLN"]),
    price: z
      .number()
      .transform((value) =>
        new Intl.NumberFormat("pl-PL", {
          minimumFractionDigits: 2,
        })
          .format(value)
          .replace(/\s/g, " ")
      )
      .transform((price) => `${price} zł`),
    url: z.string(),
  }),
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
    .map((elem) => JSON.parse(elem.text))
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

  try {
    return ItemSchema.parse(
      ItemJsonSchema.transform((data) => ({
        url: data.offers.url,
        ...data,
      }))
        .transform(
          ({
            name,
            offers: { availability, price },
            review,
            sku,
            ...data
          }) => ({
            id: ((m) => (m ? `komputronik-${m[1]}` : ""))(
              data.url.match(/\/product\/(\d+)\//)
            ),
            stars: "",
            proms: [],
            codes: [],
            title: name,
            label: [`sku: ${sku}`],
            links: [
              {
                "http://schema.org/InStock": "InStock",
                "http://schema.org/OutOfStock": "OutOfStock",
                "http://schema.org/SoldOut": "SoldOut",
              }[availability],
            ],
            price: [price],
            reviews: review,
            ...data,
          })
        )
        .parse(json)
    );
  } catch (e) {
    console.log(json);
    throw e;
  }
};
