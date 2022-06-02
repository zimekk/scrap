import { z } from "zod";
import { parse } from "node-html-parser";
import { ItemSchema } from "../types";

const ItemJsonSchema = z.object({
  name: z.string(),
  description: z.string(),
  sku: z.string(),
  image: z.string(),
  offers: z.object({
    priceCurrency: z.enum(["PLN"]),
    price: z.number().transform(String),
  }),
  brand: z.string(),
});

export const fromHtml = (html: string) => {
  const $root = parse(html);

  const json = $root
    .querySelectorAll('script[type="application/ld+json"]')
    .map((item) =>
      JSON.parse(item.rawText.replace(/[\r\n\t]+/g, "").trim() || "")
    )
    .filter((json) => json["@type"] === "Product")[0];

  const url = $root.querySelector("link[rel=canonical]")?.getAttribute("href");

  try {
    return ItemSchema.parse({
      url,
      image: $root
        .querySelectorAll("#product-images .position-relative img")
        .map((item) => item.getAttribute("src") || "")
        .filter((src) => src.match(/^https:\/\//)),
      stars: "",
      label: [],
      proms: [],
      codes: [],
      links: [],
      ...ItemJsonSchema.transform(
        ({ sku: id, name: title, brand, offers: { price } }) => ({
          id,
          // url,
          title,
          brand,
          // image,
          price: [price],
        })
      ).parse(json),
    });
  } catch (e) {
    console.log(json);
    throw e;
  }
};
