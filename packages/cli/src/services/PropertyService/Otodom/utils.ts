import { parse } from "node-html-parser";
import { z } from "zod";
import { Category, Coordinates } from "../utils";

const PAGES_LIMIT = 5;

const LocalizedString = z.object({
  value: z.string(),
});

const AdditionalInfo = z.object({
  label: z.string(),
  unit: z.string(),
  values: z.array(z.string()),
});

const AddressItem = z
  .object({
    id: z.string(),
    code: z.string(),
    name: z.string(),
    __typename: z.string(),
  })
  .transform(({ name }) => name);

const Address = z.object({
  city: AddressItem,
  county: AddressItem,
  district: AddressItem.nullable(),
  municipality: AddressItem.nullable(),
  postalCode: AddressItem.nullable(),
  street: AddressItem.nullable(),
  province: AddressItem,
  subdistrict: AddressItem.nullable(),
  // __typename: "Address"
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

const FeatureGroup = z.object({
  label: z.string(),
  values: z.array(z.string()),
});

const AdvertCoordinates = Coordinates.extend({
  // latitude: z.number(),
  // longitude: z.number(),
  radius: z.number().optional(),
  zoomLevel: z.number().optional(),
});

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
                        estate: z.enum(["FLAT", "HOUSE", "TERRAIN"]),
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
                        transaction: z.enum(["RENT", "SELL"]),
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
          )
          .parse(json)
      );
  } catch (e) {
    console.log(json);
    console.error(e);
    return { items: [], nextPage: null };
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
  try {
    return z
      .object({
        id: z.string(),
        address: z
          .object({
            lokalizacja_gmina: z.string(),
            lokalizacja_region: z.string().optional(),
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
        price: z.number().optional(),
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
                    address: Address,
                    geoLevels: z
                      .array(
                        z.object({
                          label: z.string(),
                          type: z.string(),
                        })
                      )
                      .optional(),
                  }),
                  target: z.object({
                    Area: z.string().optional(),
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
                    Build_year: z.string().optional(),
                    Building_type: z
                      .array(
                        z.enum([
                          "apartment",
                          "block",
                          "detached",
                          "house",
                          "residence",
                          "ribbon",
                          "semi_detached",
                          "tenement",
                        ])
                      )
                      .optional(),
                    City: z.string().optional(),
                    Construction_status: z
                      .array(
                        z.enum([
                          "ready_to_use",
                          "to_completion",
                          "to_renovation",
                        ])
                      )
                      .optional(),
                    Country: z.string(),
                    Dimensions: z.string().optional(),
                    Extras_types: z
                      .array(
                        z.enum([
                          "air_conditioning",
                          "attic",
                          "balcony",
                          "basement",
                          "garage",
                          "garden",
                          "lift",
                          "non_smokers_only",
                          "pool",
                          "separate_kitchen",
                          "terrace",
                          "two_storey",
                          "usable_room",
                        ])
                      )
                      .optional(),
                    Floor_no: z.string().array().optional(),
                    // Location: z.enum(["city","country","suburban"]).optional(),
                    MarketType: z.enum(["primary", "secondary"]).optional(),
                    Media_types: z
                      .array(
                        z.enum([
                          "cable_television",
                          "cable-television",
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
                    OfferType: z.enum(["sprzedaz", "wynajem"]),
                    Price: z.number().optional(),
                    ProperType: z.enum(["dom", "dzialka", "mieszkanie"]),
                    Province: z.string(),
                    Subregion: z.string(),
                    Terrain_area: z.string().optional(),
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
                      .array(
                        z.enum(["forest", "lake", "mountains", "open_terrain"])
                      )
                      .optional(),
                    hidePrice: z.enum(["0", "1"]),
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
                      ["agricultural_building"]:
                        "dzialki-grunty/rolno-budowlana",
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
          )
          .parse(json)
      );
  } catch (e) {
    console.log(json);
    console.error(e);
    return null;
  }
};
