import { parse } from "node-html-parser";
import { ItemSchema } from "../types";

export const fromHtml = (html: string) => {
  const $root = parse(html);

  const url = $root.querySelector("link[rel=canonical]")?.getAttribute("href");

  return ItemSchema.parse({
    url,
    id: $root.querySelector("input[name=product_id]")?.getAttribute("value"),
    title: $root
      .querySelector("meta[property=og:title]")
      ?.getAttribute("content")
      ?.trim(),
    brand: $root
      .querySelector("a[itemprop=brand]")
      ?.getAttribute("content")
      ?.trim(),
    price: $root
      .querySelectorAll("span[itemprop=price]")
      .map((node) => node?.rawText.trim()),
    image: $root
      .querySelectorAll("link[itemprop=image]")
      .map((node) => new URL(node.getAttribute("href") || "", url).href),
    stars: "",
    label: [],
    proms: [],
    codes: [],
    links: [],
  });
};
