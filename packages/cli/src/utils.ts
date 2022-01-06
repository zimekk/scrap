import { parse } from "node-html-parser";
import { z } from "zod";

const pathToRoot = ($el: any) => {
  const $path = [];
  while ($el && $el.tagName !== "HTML") {
    $path.push(($el = $el.parentNode));
  }
  return $path;
};

const productHtmlPath = (name: string) =>
  require("path").resolve(__dirname, `../temp/${name}.html`);

export const loadProductHtml = (name: string) =>
  require("fs").readFileSync(productHtmlPath(name));

export const saveProductHtml = (name: string, html: string) =>
  require("fs").writeFileSync(productHtmlPath(name), html);

export const scrapOptions = (item: object, html: string) => {
  const $root = parse(html);

  return {
    ...item,
    options: ([] as string[])
      .concat(
        $root.querySelectorAll("table.table-lg-columns tr").map(($el) =>
          $el
            .querySelectorAll("*")
            .map(($el) => $el.text.replace(/\s+/g, " ").trim())
            .join("\t")
        )
      )
      .concat(
        $root.querySelectorAll("ul.list-group li").map(($el) => $el.text.trim())
      ),
  };
};

export const scrapProduct = (item: Partial<{ id: string }>, html: string) => {
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
        !text.match(/Kup teraz|Zapłać w ciągu/)
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

  return {
    ...item,
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
};

export const scrapPropertyList = (
  item: Partial<{ id: string }>,
  html: string
) => {
  const $root = parse(html);

  return z
    .object({
      id: z.string(),
      items: z.array(
        z.object({
          name: z.string(),
          href: z.string(),
        })
      ),
      nextPage: z.string().optional(),
    })
    .parse({
      ...item,
      items: $root
        .querySelectorAll("article.teaserUnified")
        .map(($item: any) => ({
          name: $item.getAttribute("id"),
          href: $item.getAttribute("data-href"),
        })),
      nextPage: $root.querySelector("link[rel=next]")?.getAttribute("href"),
    });
};

export const scrapPropertyItem = (
  item: Partial<{ id: string }>,
  html: string
) => {
  const $root = parse(html);

  return z
    .object({
      id: z.string(),
      canonical: z.string(),
      images: z.array(z.string()),
      title: z.string(),
      price: z.string().transform((value) => Number(value.replace(/\s+/g, ""))),
      description: z.array(z.string()),
      parameters: z.array(
        z.object({
          label: z.string(),
          value: z.string().transform((value) => value.replace(/\s+/g, " ")),
        })
      ),
      address: z
        .object({
          lokalizacja_gmina: z.string(),
          lokalizacja_region: z.string(),
          lokalizacja_powiat: z.string(),
          lokalizacja_miejscowosc: z.string(),
          lokalizacja_kraj: z.string(),
        })
        .passthrough(),
    })
    .parse({
      ...item,
      canonical: $root
        .querySelector("link[rel=canonical]")
        ?.getAttribute("href"),
      images:
        $root
          .querySelectorAll("script")
          ?.map(($node: any) => $node.text.match(/dataJson: (\[{.+}\]),/))
          .filter(Boolean)
          .map((m) => JSON.parse(m[1]))
          .map(([{ data }]) =>
            z
              .array(
                z.object({
                  url: z.string(),
                  thumb: z.string(),
                })
              )
              .parse(data)
              .map(({ url }) => url)
          )[0] || [],
      title: $root.querySelector("h1.sticker__title")?.text.trim(),
      price: $root
        .querySelector("span.priceInfo__value")
        ?.firstChild.text.trim(),
      description: $root
        .querySelector("div.description__rolled")
        ?.childNodes.reduce((result: string[], $node: any) => {
          if ($node.nodeType === 3) {
            result[result.length - 1] += $node.text.trim();
          } else if ($node.nodeType === 1 && $node.rawTagName === "br") {
            result.push("");
          }
          return result;
        }, [])
        .filter((s) => s.length > 0),
      parameters: $root
        .querySelectorAll(".parameters__value")
        .map(($div: any) => ({
          label: $div.parentNode.childNodes
            .find(($div: any) => $div.nodeType === 1)
            .text.trim(),
          value: $div.text.trim(),
        })),
      address: $root
        .querySelectorAll("script")
        ?.map(($node: any) =>
          $node.text.match(/const addressObject = (\{.+\});/)
        )
        .filter(Boolean)
        .map((m) => JSON.parse(m[1]))[0],
    });
};
