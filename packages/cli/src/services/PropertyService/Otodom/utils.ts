import { parse } from "node-html-parser";
import { z } from "zod";
import { ItemSchema, ListSchema, NormalizedItemSchema } from "./types";

const PAGES_LIMIT = 5;

export const scrapPropertyOtodomList = (
  item: { id: string; url: string; canonicalURL: string },
  html: string
) => {
  const $root = parse(html);
  const json = JSON.parse(
    $root.querySelector("script#__NEXT_DATA__")?.text || "{}"
  );
  // console.log(json.props);
  try {
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
      .parse(
        ListSchema.transform(
          ({
            props: {
              pageProps: {
                canonicalURL,
                data: {
                  searchAds: {
                    items,
                    pagination: { page, totalPages },
                  },
                },
              },
            },
          }) =>
            Boolean(console.log({ item, page, totalPages })) || {
              ...item,
              items:
                canonicalURL === item.canonicalURL
                  ? items.map(({ id, slug, title }) => ({
                      id: `otodom-${id}`,
                      name: title,
                      href: slug,
                    }))
                  : Boolean(
                      console.error("Invalid URL", {
                        ...item,
                        canonicalURL,
                        page,
                        totalPages,
                      })
                    ) || [],
              nextPage:
                canonicalURL === item.canonicalURL &&
                page < Math.min(totalPages, PAGES_LIMIT)
                  ? `${canonicalURL}?page=${page + 1}`
                  : undefined,
            }
        ).parse(json)
      );
  } catch (e) {
    console.log(json);
    console.error(e);
    return { items: [], nextPage: null };
  }
};

export const scrapPropertyOtodomJson = (
  item: Partial<{ id: string }>,
  json: any
) => {
  try {
    return NormalizedItemSchema.parse(
      ItemSchema.transform(
        ({
          props: {
            pageProps: {
              ad: {
                additionalInformation,
                breadcrumbs,
                category,
                characteristics,
                description,
                featuresByCategory,
                id,
                images,
                location: { address, coordinates, geoLevels = [] },
                target: {
                  Country,
                  Price,
                  ProperType,
                  Province,
                  Subregion,
                  Type,
                },
                title,
                topInformation,
                url,
              },
              // adTrackingData: {
              //   ad_price
              // }
            },
          },
        }) =>
          // Boolean(console.log(parse(description).childNodes.map(p => p.text).filter(Boolean)))||
          // Boolean(console.log(characteristics))||
          ({
            ...item,
            address: Object.assign(
              {
                lokalizacja_gmina: address.province,
                lokalizacja_powiat: address.county,
                lokalizacja_miejscowosc: address.city,
                lokalizacja_kraj: Country,
              },
              address.district && { lokalizacja_region: address.district },
              address.street && { lokalizacja_ulica: address.street }
            ),
            canonical: url,
            category: {
              ["dzialka"]: () =>
                ({
                  ["building"]: "dzialki-grunty/budowlana",
                  ["agricultural"]: "dzialki-grunty/rolna",
                  ["agricultural_building"]: "dzialki-grunty/rolno-budowlana",
                  ["commercial"]: "dzialki-grunty/inwestycyjna",
                  ["habitat"]: "dzialki-grunty/siedliskowa",
                  ["other"]: "dzialki-grunty/pozostale",
                  ["recreational"]: "dzialki-grunty/rekreacyjna",
                  ["woodland"]: "dzialki-grunty/lesna",
                }[Type?.pop() || "building"]),
              ["dom"]: () => "domy",
              ["mieszkanie"]: () => "mieszkania",
            }[ProperType](),
            characteristics,
            coordinates,
            description: parse(description)
              .childNodes.map((p) => p.text)
              .filter(Boolean),
            images: images.map(({ large }) => large),
            information: topInformation.concat(additionalInformation),
            location: geoLevels
              .filter(({ type }) => type !== "")
              .map(({ label }) => label)
              .reverse(),
            parameters: [],
            price: Price,
            title,
          })
      ).parse(json)
    );
  } catch (e) {
    console.log(json);
    console.error(e);
    return null;
  }
};

export const scrapPropertyOtodomItem = (
  item: Partial<{ id: string }>,
  html: string
) => {
  const $root = parse(html);
  const json = JSON.parse(
    $root.querySelector("script#__NEXT_DATA__")?.text || "{}"
  );
  // console.log(json.props.pageProps.ad.location);
  return scrapPropertyOtodomJson(item, json);
};
