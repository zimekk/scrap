import { z } from "zod";
import { parse } from "node-html-parser";
import { ItemSchema } from "../types";

const { toJson } = require("microdata-node");

const ItemJsonSchema = z.object({
  url: z
    .string()
    .array()
    .transform(([text]) => text),
  name: z
    .string()
    .array()
    .transform(([text]) => text.trim()),
  image: z.string().array(),
  offers: z
    .object({
      type: z.enum(["https://schema.org/Offer"]).array(),
      properties: z.object({
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
    .transform(([text]) => text.trim()),
  brand: z
    .string()
    .array()
    .default([""])
    .transform(([text]) => text),
});

export const fromHtml = (html: string) => {
  const json = toJson(html).items.find(({ properties }: any) =>
    Boolean(properties.offers)
  ).properties;
  // console.log(json.offers)

  const $root = parse(html);
  const id = $root
    ?.querySelector("#product_page_product_id")
    ?.getAttribute("value");
  const ean = (([_, ean]) => ean)(
    $root
      ?.querySelector(".product-ean")
      ?.rawText.trim()
      .match(/EAN (\d+)/) || []
  );

  try {
    return ItemSchema.parse(
      ItemJsonSchema.transform(
        ({
          url,
          name: title,
          description,
          brand,
          image,
          offers: [{ price, priceCurrency, availability }],
        }) => ({
          id: `riff-${id}`,
          url,
          stars: "",
          label: [`EAN: ${ean}`],
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
