import { diffString } from "json-diff";
import { parse } from "node-html-parser";
import { z } from "zod";

const _time = Date.now();

export const scrapPropertyGratkaList = (
  item: Partial<{ id: string }>,
  html: string
) => {
  const $root = parse(html);

  return z
    .object({
      id: z.string(),
      items: z.array(
        z.object({
          id: z.string(),
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
          id: `gratka-${$item.getAttribute("id").split("-").pop()}`,
          name: $item.getAttribute("id"),
          href: $item.getAttribute("data-href"),
        })),
      nextPage: $root.querySelector("link[rel=next]")?.getAttribute("href"),
    });
};

export const Category = z.enum([
  "domy",
  "dzialki-grunty/budowlana",
  "dzialki-grunty/gospodarstwo",
  "dzialki-grunty/inwestycyjna",
  "dzialki-grunty/lesna",
  "dzialki-grunty/pozostale",
  "dzialki-grunty/przemyslowa",
  "dzialki-grunty/rekreacyjna",
  "dzialki-grunty/rolna",
  "dzialki-grunty/rolno-budowlana",
  "dzialki-grunty/siedliskowa",
  "dzialki-grunty/uslugowa",
  "mieszkania",
]);

export const scrapPropertyGratkaItem = (
  item: Partial<{ id: string }>,
  html: string
) => {
  const $root = parse(html);

  return z
    .object({
      id: z.string(),
      address: z
        .object({
          lokalizacja_gmina: z.string(),
          lokalizacja_region: z.string(),
          lokalizacja_powiat: z.string(),
          lokalizacja_miejscowosc: z.string(),
          lokalizacja_kraj: z.string(),
          lokalizacja_ulica: z.string().optional(),
        })
        .passthrough(),
      canonical: z.string(),
      category: Category,
      images: z.array(z.string()),
      location: z.array(z.string()),
      title: z.string(),
      price: z.string().transform((value) => Number(value.replace(/\s+/g, ""))),
      description: z.array(z.string()),
      parameters: z.array(
        z.object({
          label: z.string(),
          value: z.string().transform((value) => value.replace(/\s+/g, " ")),
        })
      ),
    })
    .parse(
      ((data) =>
        // Boolean(console.log(data)) ||
        data)({
        ...item,
        address: $root
          .querySelectorAll("script")
          ?.map(($node: any) =>
            $node.text.match(/const addressObject = (\{.+\});/)
          )
          .filter(Boolean)
          .map((m) => JSON.parse(m[1]))[0],
        canonical: $root
          .querySelector("link[rel=canonical]")
          ?.getAttribute("href"),
        category: $root
          .querySelector(".sticker__backLink")
          ?.getAttribute("href")
          ?.split("/nieruchomosci/")[1],
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
                    thumb: z.string().optional(),
                  })
                )
                .parse(data)
                .map(({ url }) => url)
            )[0] || [],
        location: (({
          lokalizacja_miejscowosc,
          lokalizacja_powiat,
          lokalizacja_region,
        }) => [
          lokalizacja_miejscowosc,
          lokalizacja_powiat,
          lokalizacja_region,
        ])(
          $root
            .querySelectorAll("script")
            ?.map(($node: any) =>
              $node.text.match(/const addressObject = (\{.+\});/)
            )
            .filter(Boolean)
            .map((m) => JSON.parse(m[1]))[0]
        ),
        title: $root.querySelector("h1.sticker__title")?.text.trim(),
        price: $root
          .querySelector("span.priceInfo__value")
          ?.firstChild.text.trim(),
        description:
          $root
            .querySelector("div.description__rolled")
            ?.childNodes.reduce((result: string[], $node: any) => {
              if ($node.nodeType === 3) {
                result[result.length - 1] += $node.text.trim();
              } else if ($node.nodeType === 1 && $node.rawTagName === "br") {
                result.push("");
              }
              return result;
            }, [])
            .filter((s) => s.length > 0) || [],
        parameters: $root
          .querySelectorAll(".parameters__value")
          .map(($div: any) => ({
            label: $div.parentNode.childNodes
              .find(($div: any) => $div.nodeType === 1)
              .text.trim(),
            value: $div.text.trim(),
          })),
      })
    );
};

export const Coordinates = z.object({
  latitude: z.number(),
  longitude: z.number(),
});

const PropertyDiff = z.object({
  canonical: z.string(),
  images: z.array(z.string()),
  title: z.string(),
  price: z.number(),
  description: z.array(z.string()),
});

export const diffPropertyItem = (last: any, item: any) =>
  ((last, item) => diffString(last, item))(
    PropertyDiff.parse(last),
    PropertyDiff.parse(item)
  );

export const updatePropertyItem = (last: any, item: any, updated = _time) =>
  (({ _updated, _history, ...last }, item) => ({
    ...last,
    ...item,
    _updated: updated,
    _history: {
      ..._history,
      [_updated]: last,
    },
  }))(
    z
      .object({
        _id: z.string(),
        _created: z.number(),
        _updated: z.number().default(last._created),
        _history: z.object({}).passthrough().default({}),
      })
      .passthrough()
      .parse(last),
    PropertyDiff.parse(item)
  );
