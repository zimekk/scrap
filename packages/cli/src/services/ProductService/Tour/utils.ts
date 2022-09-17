import { z } from "zod";
import { parse } from "node-html-parser";
import { ItemSchema } from "../types";

const ItemJsonSchema = z.object({
  name: z.string(),
  sku: z.string(),
  gtin13: z.string(),
  offers: z.object({
    priceCurrency: z.enum(["PLN"]),
    price: z.string(),
    itemCondition: z.enum(["http://schema.org/NewCondition"]),
    availability: z.enum([
      "http://schema.org/InStock",
      "http://schema.org/OutOfStock",
    ]),
    url: z.string(),
    priceValidUntil: z.string(),
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

  const url = $root.querySelector("link[rel=canonical]")?.getAttribute("href");

  const image = $root
    .querySelectorAll('a[rel="gallery"]')
    .map((item) => item.getAttribute("href") || "");

  // console.log({ url, image });

  try {
    return ItemSchema.parse({
      url,
      image,
      stars: "",
      proms: [],
      codes: [],
      ...ItemJsonSchema.transform(
        ({
          sku: id,
          gtin13,
          name: title,
          brand,
          offers: { availability, itemCondition, price },
        }) => ({
          id,
          // url,
          title,
          brand,
          label: [`sku: ${id}`, `gtin13: ${gtin13}`],
          links: [
            {
              "http://schema.org/NewCondition": "NewCondition",
            }[itemCondition],
            {
              "http://schema.org/InStock": "InStock",
              "http://schema.org/OutOfStock": "OutOfStock",
            }[availability],
          ],
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
