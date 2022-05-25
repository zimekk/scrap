import { z } from "zod";
import { parse } from "node-html-parser";
import { ItemSchema } from "../types";

const pathToRoot = ($el: any) => {
  const $path = [];
  while ($el && $el.tagName !== "HTML") {
    $path.push(($el = $el.parentNode));
  }
  return $path;
};

const JsonReviewSchema = z
  .object({
    reviewRating: z.object({ ratingValue: z.number() }).optional(),
    author: z.object({
      name: z.string().transform((s) => s.trim()),
    }),
    datePublished: z.string().transform((s) => s.split("T")[0]),
    description: z.string().transform((s) => s.trim()),
  })
  .transform(
    ({
      reviewRating: { ratingValue: rating } = {},
      author: { name: author },
      datePublished: date,
      description: body,
    }) => ({
      rating,
      author,
      date,
      body,
    })
  );

const ItemJsonSchema = z.object({
  name: z.string(),
  productID: z.string(),
  sku: z.string(),
  mpn: z.string(),
  image: z.union([z.string(), z.string().array()]),
  offers: z.object({
    priceCurrency: z.enum(["PLN"]),
    price: z.number(),
  }),
  brand: z.object({
    name: z.string(),
  }),
  review: z
    .union([
      JsonReviewSchema.transform((review) => [review]),
      JsonReviewSchema.array(),
    ])
    .optional(),
});

export const fromHtml = (html: string) => {
  const $root = parse(html);

  const title = $root.querySelector("h1")?.text;
  const stars = $root
    .querySelector("h1")
    ?.parentNode?.nextElementSibling?.querySelector("div > a")?.text;
  const brand = $root
    .querySelector("h1")
    ?.parentNode?.nextElementSibling?.querySelector("span > a")?.text;
  const label = $root
    .querySelector("h1")
    ?.parentNode?.nextElementSibling?.querySelector("span > a")
    ?.parentNode?.parentNode?.text.split("|");

  const image = $root
    .querySelectorAll("div[order] > div > div > div + div + div img")
    .map(($img: any) => $img.getAttribute("src"));

  const $cart = $root
    .querySelectorAll("div")
    .find(($div) =>
      $div.text.match(
        /^(Dodaj do koszyka|Powiadom o dostępności|Sprawdź inne produkty)$/
      )
    );
  const price = pathToRoot($cart)
    .find(($div) => $div.rawText.match(/zł/))
    ?.querySelectorAll("*")
    .find(($div: any) => $div.text.match(/zł$/))
    ?.querySelectorAll("div")
    .filter(
      ($div: any) =>
        $div.childNodes.length > 0 && $div.childNodes[0].nodeType === 3
    )
    .map(($div: any) => $div.text);
  const links = pathToRoot($cart)
    .find(($div) => $div.rawText.match(/zł/))
    ?.querySelectorAll("button > span > span > span")
    .filter(($div: any) => $div.text)
    .map(($div: any) => $div.text)
    .filter(
      (text: string) =>
        Boolean(false && console.log({ text })) ||
        !text.match(
          /Dowiedz się więcej|Kup( teraz)?, otrzymasz |Zapłać w ciągu/
        )
    )
    .filter((array: any) => array.length > 0);

  const $prom = $root
    .querySelectorAll("h2")
    .find(($div: any) => $div.text.match(/^(Promocje|Promocja)$/));
  const proms =
    pathToRoot($prom)
      .find(($div) => $div.querySelector("p[title]"))
      ?.querySelectorAll("p[title]")
      .map(($div: any) => $div.text) || [];
  const codes =
    pathToRoot($prom)
      .find(($div) => $div.rawText.match(/Skopiowano kod/))
      ?.querySelectorAll("p")
      .filter(($div: any) => $div.text.match(/aktywuj kod rabatowy/))
      .map(($div: any) => $div.nextElementSibling.text) || [];

  const url = $root.querySelector("link[rel=canonical]")?.getAttribute("href");

  const json = JSON.parse(
    $root.querySelector('script[type="application/ld+json"]')?.rawText.trim() ||
      ""
  );

  try {
    return ItemSchema.parse(
      ItemJsonSchema.transform(({ review: reviews }) => ({
        url,
        title,
        image,
        stars,
        brand,
        label,
        price,
        proms,
        codes,
        links,
        reviews,
      })).parse(json)
    );
  } catch (e) {
    console.log(json);
    throw e;
  }
};
