import { parse } from "node-html-parser";
import { ItemSchema } from "../types";

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
      id: $root
        .querySelector('meta[property="product:retailer_part_no"]')
        ?.getAttribute("content"),
      url,
      title: $root
        .querySelector('meta[property="og:title"]')
        ?.getAttribute("content"),
      brand: $root
        .querySelector('meta[property="product:brand"]')
        ?.getAttribute("content"),
      image: $root
        .querySelectorAll(
          'div[data-component="modal"] > img[data-component="lazyLoad"]'
        )
        .map(
          (item) =>
            item.getAttribute("src") || item.getAttribute("data-src") || ""
        )
        .map((src) => new URL(src, url).href),
      stars: "",
      label: [],
      price: $root
        .querySelectorAll('meta[property="product:price:amount"]')
        .map((meta) => meta.getAttribute("content"))
        .map((price) => price),
      proms: [],
      codes: [],
      links: [],
    });
  } catch (e) {
    console.log(json);
    throw e;
  }
};
