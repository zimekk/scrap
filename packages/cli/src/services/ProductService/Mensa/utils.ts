import { z } from "zod";
import { parse } from "node-html-parser";
import { ItemSchema } from "../types";

const ItemJsonSchema = z.object({
  name: z.string(),
  image: z.union([
    z.string().transform((image) => [image]),
    z.string().array(),
  ]),
  description: z.string(),
  sku: z.string(),
  brand: z
    .object({
      name: z.string(),
    })
    .transform(({ name }) => name),
  offers: z.object({
    priceCurrency: z.enum(["zł"]),
    price: z.string(),
  }),
});

export const fromHtml = (html: string) => {
  const $root = parse(html);

  const json = JSON.parse(
    $root
      .querySelector('script[type="application/ld+json"]')
      ?.rawText.replace(/[\r\n\t]+/g, "")
      .trim() || ""
  );

  const url = $root
    .querySelector('meta[property="og:url"]')
    ?.getAttribute("content");

  try {
    return ItemSchema.parse({
      url,
      stars: "",
      label: [],
      proms: [],
      codes: [],
      links: [],
      ...ItemJsonSchema.transform(
        ({
          sku: id,
          name: title,
          description,
          brand,
          image,
          offers: { price },
        }) => ({
          id,
          title,
          description,
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
