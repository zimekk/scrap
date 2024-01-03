import { parse } from "node-html-parser";
import { ItemSchema } from "../types";

export const fromHtml = (html: string) => {
  const $root = parse(html);
  const url = $root.querySelector("link[rel=canonical]")?.getAttribute("href");
  const title = $root
    .querySelector('h1[itemprop="name"]')
    ?.text.replace(/^\s+|\s+$/g, "");
  const brand = $root
    .querySelector('meta[itemprop="manufacturer"]')
    ?.getAttribute("content");
  const id =
    $root.querySelector('meta[itemprop="gtin"]')?.getAttribute("content") ||
    $root
      .querySelector('div i[data-tooltip-id="#parameter-ean"]')
      ?.parentNode.nextElementSibling?.text.replace(/\s+/g, "")
      .trim();

  const image = $root
    .querySelectorAll(".js-screen-photo img")
    .map(($img: any) => $img.getAttribute("src"))
    .map((src) => new URL(src, url).href);

  const links = $root
    .querySelectorAll("div.product-info__content > div")
    .map(($div: any) => $div.text.replace(/\s+/g, " ").trim());

  // const price = [$root.querySelector('meta[itemprop="price"]')?.getAttribute('content')];
  const price = $root
    .querySelectorAll("div.price--large")
    .map(($div: any) => $div.text.replace(/\s+/g, " ").trim());

  const stars = ($root.querySelector("a.rating-count__link")?.text || "")
    .replace(/\s+/g, " ")
    .trim();

  const parameters = $root
    .querySelectorAll(".parameter-row")
    .map(($div: any) => ({
      id: $div.querySelector("span[id]")?.getAttribute("id"),
      name: $div.querySelector(".parameter-name")?.text.trim(),
      desc: $div.querySelector(".parameter-description")?.text.trim(),
    }));
  // console.log({parameters})

  const label = parameters
    .filter(({ id }) => ["parameter-ean", "parameter-kod"].includes(id))
    .map(({ name, desc }) => `${name}: ${desc}`);

  // console.log({ url, title, brand, image, stars, price, links, label });

  const promotionsList = $root
    .querySelectorAll(".product-promotions-list a")
    .map(($a: any) => $a?.text.trim());

  const promotionsInfo = $root
    .querySelectorAll(".product-promotions-info ul > li")
    .map(($li: any) => $li?.text.trim());

  const proms = promotionsList.concat(promotionsInfo);

  const codes = promotionsInfo
    .map((text) => text.match(/kod: (\S+)$/))
    .filter(Boolean)
    .map(([_, code]) => code);

  // console.log({ proms, codes });

  const json = {
    id,
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
  };
  try {
    return ItemSchema.parse(json);
  } catch (e) {
    console.log(json);
    throw e;
  }
};
