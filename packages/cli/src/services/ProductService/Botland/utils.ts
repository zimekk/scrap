import { z } from "zod";
import { ItemSchema } from "../types";

const { toJson } = require("microdata-node");

const ItemJsonSchema = z.object({
  name: z
    .string()
    .array()
    .transform(([text]) => text),
  image: z
    .string()
    .array()
    .transform((images) => images.filter((url) => url.match(/^http/))),
  sku: z
    .string()
    .array()
    .transform(([text]) => text),
  offers: z
    .object({
      type: z.enum(["https://schema.org/Offer"]).array(),
      properties: z.object({
        url: z
          .string()
          .array()
          .transform(([text]) => text),
        price: z
          .string()
          .array()
          .transform(([text]) => text)
          .transform((value) =>
            new Intl.NumberFormat("pl-PL", {
              minimumFractionDigits: 2,
            })
              .format(Number(value))
              .replace(/\s/g, " ")
          ),
        priceCurrency: z
          .string()
          .array()
          .transform(([text]) => text),
        priceValidUntil: z
          .string()
          .array()
          .transform(([text]) => text),
        availability: z
          .string()
          .array()
          .transform(([text]) => text),
      }),
    })
    .transform(({ properties }) => properties)
    .array(),
  description: z
    .string()
    .array()
    .transform(([text]) => text.trim())
    .transform((text) => text.replace(/\n+/g, "\n").trim()),
  brand: z
    .object({
      properties: z
        .object({
          name: z
            .string()
            .array()
            .transform(([text]) => text),
        })
        .transform(({ name }) => name),
    })
    .transform(({ properties }) => properties)
    .array()
    .transform(([text]) => text),
  gtin13: z
    .string()
    .array()
    .transform(([text]) => text.trim())
    .optional(),
  review: z.object({}).passthrough().array().optional(),
  aggregateRating: z.object({}).passthrough().array().optional(),
});

export const fromHtml = (html: string) => {
  const json = toJson(html).items.find((item: any) =>
    item.type.includes("https://schema.org/Product")
  ).properties;

  try {
    return ItemSchema.parse(
      ItemJsonSchema.transform(
        ({
          sku,
          name: title,
          description,
          brand,
          image,
          offers: [{ url, price, priceCurrency, availability }],
        }) => ({
          id: `botland-${sku}`,
          url,
          stars: "",
          label: [`sku: ${sku}`],
          proms: [],
          codes: [],
          links: [
            {
              "https://schema.org/InStock": "InStock",
              "https://schema.org/OutOfStock": "OutOfStock",
              "https://schema.org/SoldOut": "SoldOut",
            }[availability],
          ],
          title,
          description,
          brand,
          image,
          price: [`${price} ${priceCurrency}`],
        })
      ).parse(json)
    );
  } catch (e) {
    console.log(json);
    throw e;
  }
};
