import { z } from "zod";
import { parse } from "node-html-parser";
import { ItemSchema } from "../types";

const ItemJsonSchema = z.object({
  // name: z.string(),
  sku: z.string(),
  // gtin13: z.string(),
  image: z.union([
    z.string().transform((image) => [image]),
    z.string().array(),
  ]),
  offers: z.object({
    priceCurrency: z.enum(["PLN"]),
    price: z.string(),
  }),
  brand: z
    .object({
      name: z.string(),
    })
    .transform(({ name }) => name),
});

export const fromHtml = (html: string) => {
  const $root = parse(html);

  const json = JSON.parse(
    $root
      .querySelector('script[type="application/ld+json"]')
      ?.rawText.replace(/[\r\n\t]+/g, "")
      .trim() || ""
  );

  const url = $root.querySelector("link[rel=canonical]")?.getAttribute("href");

  try {
    return ItemSchema.parse({
      url,
      title: $root
        .querySelector('meta[property="og:title"]')
        ?.getAttribute("content"),
      stars: "",
      label: [],
      proms: [],
      codes: [],
      links: [],
      ...ItemJsonSchema.transform(
        ({ sku: id, brand, image, offers: { price } }) => ({
          id,
          brand,
          image,
          price: [price],
        })
      ).parse(json),
    });
  } catch (e) {
    console.log(json);
    throw e;
  }
};
