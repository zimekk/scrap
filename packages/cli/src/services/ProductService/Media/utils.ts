import { z } from "zod";
import { parse } from "node-html-parser";
import { ItemSchema } from "../types";

const ItemJsonSchema = z.object({
  url: z.string(),
  name: z.string(),
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

  const json = $root
    .querySelectorAll('script[type="application/ld+json"]')
    .map((item) =>
      JSON.parse(item.rawText.replace(/[\r\n\t]+/g, "").trim() || "")
    )
    .filter((json) => json["@type"] === "Product")[0];

  try {
    return ItemSchema.parse({
      // url,
      // title: $root
      // .querySelector('meta[property="og:title"]')
      // ?.getAttribute("content"),
      stars: "",
      label: [],
      proms: [],
      codes: [],
      links: [],
      ...ItemJsonSchema.transform(
        ({ sku: id, url, name: title, brand, image, offers: { price } }) => ({
          id,
          url,
          title,
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
