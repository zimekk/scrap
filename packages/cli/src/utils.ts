import { diffString } from "json-diff";
import { parse } from "node-html-parser";
import { z } from "zod";

const _time = Date.now();

const productHtmlPath = (name: string) =>
  require("path").resolve(
    __dirname,
    `../temp/${name.replace(/\//g, "-")}.html`
  );

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

export const scrapPropertyOtodomList = (
  item: Partial<{ id: string }>,
  html: string
) => {
  const $root = parse(html);
  const json = $root.querySelector("script#__NEXT_DATA__")?.text;
  // console.log((json ? JSON.parse(json) : {})?.props.pageProps.data.searchAds.items.map((item:any) => item.totalPrice))
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
      z
        .object({
          props: z.object({
            pageProps: z.object({
              canonicalURL: z.string(),
              data: z.object({
                searchAds: z.object({
                  items: z.array(
                    z.object({
                      areaInSquareMeters: z.number(),
                      estate: z.enum(["HOUSE", "TERRAIN"]),
                      id: z.number(),
                      images: z.array(
                        z.object({
                          large: z.string(),
                        })
                      ),
                      locationLabel: z.object({
                        value: z.string(),
                      }),
                      shortDescription: z.string().optional(),
                      slug: z.string(),
                      terrainAreaInSquareMeters: z.number().nullable(),
                      title: z.string(),
                      totalPrice: z
                        .object({
                          currency: z.enum(["EUR", "PLN", "USD"]),
                          value: z.number(),
                        })
                        .nullable(),
                      transaction: z.enum(["SELL"]),
                    })
                  ),
                  pagination: z.object({
                    page: z.number(),
                    totalPages: z.number(),
                  }),
                }),
              }),
            }),
          }),
        })
        .transform(
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
          }) => ({
            ...item,
            items: items.map(({ id, slug, title }) => ({
              id: `otodom-${id}`,
              name: title,
              href: slug,
            })),
            nextPage:
              page < totalPages
                ? `${canonicalURL}?page=${page + 1}`
                : undefined,
          })
        )
        .parse(json ? JSON.parse(json) : {})
    );
};

const Category = z.enum([
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
    .parse({
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
                  thumb: z.string(),
                })
              )
              .parse(data)
              .map(({ url }) => url)
          )[0] || [],
      location: (({
        lokalizacja_miejscowosc,
        lokalizacja_powiat,
        lokalizacja_region,
      }) => [lokalizacja_miejscowosc, lokalizacja_powiat, lokalizacja_region])(
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
    });
};

const LocalizedString = z.object({
  value: z.string(),
});

const AdditionalInfo = z.object({
  label: z.string(),
  unit: z.string(),
  values: z.array(z.string()),
});

const AdvertCategory = z.object({
  id: z.number(),
  name: z.array(LocalizedString),
});

const Characteristic = z.object({
  currency: z.string(),
  key: z.string(),
  label: z.string(),
  localizedValue: z.string(),
  suffix: z.string(),
  value: z.string(),
});

const Coordinates = z.object({
  latitude: z.number(),
  longitude: z.number(),
});

const FeatureGroup = z.object({
  label: z.string(),
  values: z.array(z.string()),
});

const AdvertCoordinates = Coordinates.extend({
  // latitude: z.number(),
  // longitude: z.number(),
  radius: z.number(),
  zoomLevel: z.number(),
});

export const scrapPropertyOtodomItem = (
  item: Partial<{ id: string }>,
  html: string
) => {
  const $root = parse(html);
  const json = $root.querySelector("script#__NEXT_DATA__")?.text;

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
      characteristics: z.array(Characteristic),
      coordinates: AdvertCoordinates,
      images: z.array(z.string()),
      information: z.array(AdditionalInfo),
      location: z.array(z.string()),
      title: z.string(),
      // price: z.string().transform((value) => Number(value.replace(/\s+/g, ""))),
      price: z.number(),
      description: z.array(z.string()),
      parameters: z.array(
        z.object({
          label: z.string(),
          value: z.string().transform((value) => value.replace(/\s+/g, " ")),
        })
      ),
    })
    .parse(
      z
        .object({
          props: z.object({
            pageProps: z.object({
              ad: z.object({
                additionalInformation: z.array(AdditionalInfo),
                breadcrumbs: z.array(
                  z.object({
                    label: z.string(),
                    locative: z.string(),
                    url: z.string(),
                  })
                ),
                category: AdvertCategory,
                characteristics: z.array(Characteristic),
                description: z.string(),
                featuresByCategory: z.array(FeatureGroup),
                id: z.number(),
                images: z.array(
                  z.object({
                    large: z.string(),
                  })
                ),
                location: z.object({
                  coordinates: AdvertCoordinates,
                  address: z.array(LocalizedString),
                  geoLevels: z.array(
                    z.object({
                      label: z.string(),
                      type: z.string(),
                    })
                  ),
                }),
                target: z.object({
                  Access_types: z
                    .array(
                      z.enum([
                        "asphalt",
                        "dirt",
                        "hard_surfaced",
                        "soft_surfaced",
                      ])
                    )
                    .optional(),
                  Building_type: z
                    .array(
                      z.enum([
                        "detached",
                        "residence",
                        "ribbon",
                        "semi_detached",
                        "tenement",
                      ])
                    )
                    .optional(),
                  City: z.string().optional(),
                  Country: z.string(),
                  Dimensions: z.string().optional(),
                  // Location: z.enum(["city","country","suburban"]).optional(),
                  Media_types: z
                    .array(
                      z.enum([
                        "cable_television",
                        "cesspool",
                        "electricity",
                        "gas",
                        "internet",
                        "phone",
                        "power",
                        "rafinery",
                        "sewage",
                        "telephone",
                        "water",
                        "water_purification",
                      ])
                    )
                    .optional(),
                  Price: z.number(),
                  ProperType: z.enum(["dzialka", "dom"]),
                  Province: z.string(),
                  Subregion: z.string(),
                  Type: z
                    .array(
                      z.enum([
                        "agricultural",
                        "agricultural_building",
                        "building",
                        "commercial",
                        "habitat",
                        "other",
                        "recreational",
                        "woodland",
                      ])
                    )
                    .optional(),
                  Vicinity_types: z
                    .array(z.enum(["forest", "lake", "open_terrain"]))
                    .optional(),
                }),
                title: z.string(),
                topInformation: z.array(AdditionalInfo),
                url: z.string(),
              }),
              // adTrackingData: z.object({
              //   ad_price: z.number(),
              // })
            }),
          }),
        })
        .transform(
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
                  location: { coordinates, geoLevels },
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
              address: ((location: any, breadcrumb: any) =>
                Object.assign(
                  {
                    lokalizacja_gmina: location.city,
                    lokalizacja_region: location.region,
                    lokalizacja_powiat: location["sub-region"],
                    lokalizacja_miejscowosc: location.city,
                    lokalizacja_kraj: Country,
                  },
                  breadcrumb
                    ? {
                        lokalizacja_ulica: breadcrumb.locative,
                      }
                    : {}
                ))(
                geoLevels.reduce(
                  (result, { label, type }) =>
                    Object.assign(result, { [type]: label }),
                  {}
                ),
                breadcrumbs.find(({ url }) => Boolean(url.match(/streetId/)))
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
        )
        .parse(json ? JSON.parse(json) : {})
    );
};

export const addressKlik = (
  location_path: { name: string; type: string }[],
  location_user: string
) =>
  ((
    address: any,
    [
      lokalizacja_kraj,
      lokalizacja_region,
      lokalizacja_powiat,
      lokalizacja_miejscowosc,
    ]
  ) =>
    Object.assign(
      {
        lokalizacja_kraj:
          lokalizacja_kraj.slice(0, 1) +
          lokalizacja_kraj.slice(1).toLocaleLowerCase(), //"Polska"
        lokalizacja_miejscowosc:
          address.miejsce ||
          lokalizacja_miejscowosc.slice(0, 1) +
            lokalizacja_miejscowosc.slice(1).toLocaleLowerCase(), //"Stare Babice"
        lokalizacja_powiat:
          {
            WARSZAWA: "warszawski",
            "Warszawa m.": "warszawski",
          }[lokalizacja_powiat] || lokalizacja_powiat.toLocaleLowerCase(), //"warszawski zachodni"
        lokalizacja_region: lokalizacja_region.toLocaleLowerCase(), //"mazowieckie"
      },
      address.miejsce2 ? { lokalizacja_dzielnica: address.miejsce2 } : {},
      address.dzielnica ? { lokalizacja_dzielnica: address.dzielnica } : {},
      address.ulica ? { lokalizacja_ulica: address.ulica } : {}
    ))(
    location_path.reduce(
      (address, { name, type }) => Object.assign(address, { [type]: name }),
      {}
    ),
    (
      {
        POLSKA: location_user,
        mazowieckie: `POLSKA, ${location_user}`,
      }[location_user.split(",")[0]] ||
      `POLSKA, MAZOWIECKIE, WARSZAWA,${location_user}`
    )
      .split(",")
      .map((s) => s.trim())
  );

export const scrapPropertyKlikItem = (item: any) =>
  z
    .object({
      id: z.string(),
      address: z
        .object({
          lokalizacja_gmina: z.string().optional(),
          lokalizacja_region: z.string(),
          lokalizacja_powiat: z.string(),
          lokalizacja_miejscowosc: z.string(),
          lokalizacja_kraj: z.string(),
          lokalizacja_ulica: z.string().optional(),
        })
        .passthrough(),
      canonical: z.string(),
      category: Category,
      coordinates: Coordinates,
      images: z.array(z.string()),
      location: z.array(z.string()),
      title: z.string(),
      // price: z.string().transform((value) => Number(value.replace(/\s+/g, ""))),
      price: z.number(),
      description: z.array(z.string()),
      parameters: z.array(
        z.object({
          label: z.string(),
          value: z.string().transform((value) => value.replace(/\s+/g, " ")),
        })
      ),
      created: z.string(),
      changed: z.string(),
    })
    .strict()
    .parse(
      z
        .object({
          // f: z.object({
          //   p: z.string(),
          //   p_pln: z.string(),
          //   pp_m2_pln: z.string(),
          //   pp_m2_pln_wz: z.string(),
          //   area_m2: z.string(),
          //   area_m2_4: z.string(),
          //   pp_m2_pln_4: z.string(),
          //   area_m2_4t: z.string(),
          // }),
          id: z.number(),
          // exists: z.number(),
          // is_active: z.boolean(),
          // is_active_merge: z.boolean(),
          // format: z.string(),
          // currency: z.string(),
          // price: z.number(),
          price_pln: z.number(),
          // price_per_m2_pln: z.number(),
          // area_m2: z.number(),
          latitude: z.number(),
          longitude: z.number(),
          description_short: z.string(),
          title: z.string(),
          location_path: z.array(
            z.object({
              name: z.string(),
              type: z.enum(["dzielnica", "miejsce", "miejsce2"]),
            })
          ),
          // location_path_id: z.string(),
          location_user: z.string(),
          // location_owner_type_name: z.string(),
          // have_image: z.number(),
          our_title: z.string(),
          // our_desc: z.string(),
          // our_list: z.string(),
          our_url: z.string(),
          // contact_phone_merge: z.array(z.string()),
          type: z.number(), //.transform(type => z.enum(['1']).parse(String(type))),
          kind: z.number(), //.transform(kind => z.enum(['4']).parse(String(kind))),
          // kind: z.enum([4]),
          // offerowner_name: z.string(),
          images: z.array(z.string()),
          created: z.string(),
          changed: z.string(),
          // distance: z.number(),
          // distanceT: z.string(),
        })
        // .passthrough()
        .transform(
          ({
            id,
            description_short,
            images,
            latitude,
            longitude,
            location_path,
            location_user,
            our_title,
            our_url,
            price_pln,
            title,
            type,
            kind,
            created,
            changed,
          }) => ({
            id: `klik-${id}`,

            address: addressKlik(location_path, location_user),

            canonical: `https://www.klikmapa.pl/o/${our_url}-id${id}.html`,
            category: {
              "1": {
                "2": "domy",
                "4": "dzialki-grunty/budowlana",
              }[kind],
            }[type],
            coordinates: {
              latitude,
              longitude,
              // radius: z.number(),
              // zoomLevel: z.number(),
            },
            description: [description_short],
            images,
            location: location_user.split(",").map((s) => s.trim()),
            parameters: [],
            price: price_pln,
            title: title || our_title,
            created,
            changed,
          })
        )
        .parse(item)
    );

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
