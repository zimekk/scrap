import { z } from "zod";
import { parse } from "node-html-parser";
import { ItemSchema } from "../types";

const parseText = (text: string) =>
  text
    .trim()
    .replace(/\n+/g, "")
    .replace(/function \w+\(\)\s+{[^}]+}/g, "")
    .replace(/\u00A0/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\\([^"])/g, "\\\\$1");

export const parseJson = (text: string) => JSON.parse(parseText(text));

const ItemJsonSchema = z.object({
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

export const fromHtml = (html: string) => {
  const $root = parse(html);

  // const id = $root
  //   .querySelector('form#product_addtocart_form')
  //   ?.getAttribute("data-product-sku")?.toLowerCase().replace(/\s+/g, '-');
  const url = $root.querySelector("link[rel=canonical]")?.getAttribute("href");
  // const title = $root
  //   .querySelector('.product-info-main .page-title')?.text;
  // const brand = $root
  //   .querySelector('.product-info-main .product-brand')?.text.replace(/^Marka:\s+/, '');
  // const image = $root
  //   .querySelectorAll(".gallery-placeholder img")
  //   .map(($img: any) => $img.getAttribute("src"));
  const links = $root
    // .querySelectorAll(".product-info-main .product-info-custom-blocks h4")
    .querySelectorAll("h4.block__title")
    .map(($div: any) => $div.text.trim());
  const price = [
    $root
      .querySelector(".product-info-main .price-wrapper")
      ?.text.replace(/\s+/g, " "),
  ].filter(Boolean);
  const stars = $root
    .querySelectorAll(
      ".product-info-main .product-reviews-summary .action.view"
    )
    .map(($div) => $div.text)
    .join(" ")
    .replace(/\s+/g, " ");

  const json = parseJson(
    $root.querySelector('script[type="application/ld+json"]')?.rawText || ""
  );

  try {
    return ItemSchema.parse(
      ItemJsonSchema.transform(
        ({
          name: title,
          brand: { name: brand },
          image,
          sku,
          gtin13,
          review: reviews,
        }) => ({
          id: sku.toLowerCase().replace(/\s+/g, "-"),
          url,
          title,
          image: [image],
          stars,
          brand,
          label: [
            `od: ${brand}`,
            `sku: ${sku}`,
            gtin13 && `kod: ${gtin13}`,
          ].filter(Boolean),
          price,
          proms: [],
          codes: [],
          links,
          reviews,
        })
      ).parse(json)
    );
  } catch (e) {
    console.log(json);
    throw e;
  }
};
