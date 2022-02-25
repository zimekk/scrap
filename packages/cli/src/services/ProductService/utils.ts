import { parse } from "node-html-parser";
import { ItemSchema } from "./types";

const pathToRoot = ($el: any) => {
  const $path = [];
  while ($el && $el.tagName !== "HTML") {
    $path.push(($el = $el.parentNode));
  }
  return $path;
};

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
      .find(($div) => $div.querySelector("h3"))
      ?.querySelectorAll("h3")
      .map(($div: any) => $div.text) || [];
  const codes =
    pathToRoot($prom)
      .find(($div) => $div.rawText.match(/Skopiowano kod/))
      ?.querySelectorAll("p")
      .filter(($div: any) => $div.text.match(/aktywuj kod rabatowy/))
      .map(($div: any) => $div.nextElementSibling.text) || [];

  const url = $root.querySelector("link[rel=canonical]")?.getAttribute("href");

  return ItemSchema.parse({
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
  });
};

export const fromHtml2 = (html: string) => {
  const $root = parse(html);
  const url = $root.querySelector("link[rel=canonical]")?.getAttribute("href");
  const title = $root
    .querySelector('h1[itemprop="name"]')
    ?.text.replace(/^\s+|\s+$/g, "");
  const brand = $root
    .querySelector('meta[itemprop="manufacturer"]')
    ?.getAttribute("content");
  const id = $root
    .querySelector('meta[itemprop="gtin"]')
    ?.getAttribute("content");

  const image = $root
    .querySelectorAll(".js-screen-photo img")
    .map(($img: any) => $img.getAttribute("src"));

  const links = $root
    .querySelectorAll(".product-card-availability div")
    .map(($div: any) => $div.text.replace(/\s+/g, " ").trim());

  const price = $root
    .querySelector("div.product-basic-content div.price")
    ?.text.replace(/\s+/g, " ")
    .trim()
    .split("zł")
    .filter((s) => s !== "")
    .map((s) => [s.trim(), "zł"].join(" "));
  // .replace(/[\s\r\n]+/, ' ').split('zł')
  // .split('\n').map(s => s.trim())
  // .join('')
  const stars = $root
    .querySelector("span.rating-description")
    ?.text.split("\n")[1]
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

  return ItemSchema.parse({
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
  });
};
