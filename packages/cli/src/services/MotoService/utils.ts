import { diffString } from "json-diff";
import { parse } from "node-html-parser";
import { z } from "zod";
import { MotoDiff } from "./types";

const _time = Date.now();

const UrqlState = z
  .object({
    advertSearch: z
      .object({
        __typename: z.enum(["AdvertSearchOutput"]),
        url: z.string(),
        seoPageTitle: z.string(),
        // sortedBy: null,
        locationCriteriaChanged: z.boolean(),
        subscriptionKey: z.string(),
        totalCount: z.number(),
        filtersCounters: z
          .object({
            name: z.enum([
              "filter_enum_generation",
              "filter_enum_make",
              "filter_enum_model",
            ]),
            // nodes: [Array],
            __typename: z.enum(["AdvertSearchFilterCounters"]),
          })
          .array()
          .optional(),
        // appliedLocation: null,
        // appliedFilters: [ [Object], [Object], [Object], [Object] ],
        // breadcrumbs: [ [Object], [Object], [Object], [Object] ],
        pageInfo: z.object({
          pageSize: z.number(),
          currentOffset: z.number(),
          __typename: z.enum(["Pager"]),
        }),
        facets: z
          .object({ options: z.any().array(), __typename: z.enum(["Facet"]) })
          .array(),
        sortOptions: z
          .object({
            searchKey: z.enum([
              "created_at:desc",
              "created_at_first:desc",
              "filter_float_price:asc",
              "filter_float_price:desc",
              "filter_float_mileage:asc",
              "filter_float_mileage:desc",
              "filter_float_engine_power:asc",
              "filter_float_engine_power:desc",
            ]),
            label: z.string(),
            __typename: z.enum(["SortOption"]),
          })
          .array(),
        alternativeLinks: z
          .object({
            name: z.enum(["regions", "years"]),
            title: z.string(),
            links: z
              .object({
                title: z.string(),
                url: z.string(),
                counter: z.number(),
                __typename: z.enum(["Link"]),
              })
              .array(),
            __typename: z.enum(["AlternativeLinksBlock"]),
          })
          .array(),
        edges: z
          .object({
            vas: z
              .object({
                isHighlighted: z.boolean(),
                isPromoted: z.boolean(),
                // bumpDate: null,
                __typename: z.enum(["AdvertListingVAS"]),
              })
              .passthrough(),
            node: z
              .object({
                id: z.string(),
                title: z.string(),
                createdAt: z.string(),
                shortDescription: z.string(),
                url: z.string(),
                // badges: [],
                category: z.object({
                  id: z.string(),
                  __typename: z.enum(["Category"]),
                }),
                location: z.object({
                  city: z.object({
                    name: z.string(),
                    __typename: z.enum(["AdministrativeLevel"]),
                  }),
                  region: z.object({
                    name: z.string(),
                    __typename: z.enum(["AdministrativeLevel"]),
                  }),
                  __typename: z.enum(["Location"]),
                }),
                thumbnail: z
                  .object({
                    x1: z.string(),
                    x2: z.string(),
                    __typename: z.enum(["Image"]),
                  })
                  .nullable(),
                price: z
                  .object({
                    amount: z.object({
                      units: z.number(),
                      currencyCode: z.enum(["EUR", "PLN"]),
                      __typename: z.enum(["Money"]),
                    }),
                    // badges: [],
                    __typename: z.enum(["Price"]),
                  })
                  .passthrough(),
                parameters: z
                  .object({
                    key: z.enum([
                      "make",
                      "year",
                      "mileage",
                      "engine_capacity",
                      "fuel_type",
                    ]),
                    displayValue: z.string(),
                    value: z.string(),
                    __typename: z.enum(["AdvertParameter"]),
                  })
                  .array(),
                sellerLink: z.object({
                  id: z.string(),
                  name: z.string().nullable(),
                  websiteUrl: z.string().nullable(),
                  logo: z
                    .object({
                      x1: z.string(),
                      __typename: z.enum(["Image"]),
                    })
                    .nullable(),
                  __typename: z.enum(["AdvertSellerLink"]),
                }),
                brandProgram: z
                  .object({
                    // logo: null,
                    // searchUrl: null,
                    __typename: z.enum(["BrandProgram"]),
                  })
                  .passthrough(),
                dealer4thPackage: z
                  .object({
                    package: z.object({
                      id: z.string(),
                      name: z.string(),
                      __typename: z.enum(["SellerPackage"]),
                    }),
                    // services: [],
                    photos: z
                      .object({
                        //  nodes: [Array],
                        totalCount: z.number(),
                        __typename: z.enum(["PhotosCollection"]),
                      })
                      .passthrough(),
                    __typename: z.enum(["AdvertDealer4thPackage"]),
                  })
                  .passthrough()
                  .nullable(),
                priceEvaluation: z.object({
                  indicator: z.enum(["ABOVE", "BELOW", "IN", "NONE"]),
                  __typename: z.enum(["PriceEvaluation"]),
                }),
                __typename: z.enum(["Advert"]),
              })
              .passthrough(),
            __typename: z.enum(["AdvertEdge"]),
          })
          .passthrough()
          .array(),
      })
      .passthrough()
      .transform(
        ({ url, edges, pageInfo: { currentOffset, pageSize }, totalCount }) =>
          Boolean(console.log(edges[0].node)) || {
            url,
            nextPage:
              currentOffset + pageSize < totalCount
                ? currentOffset / pageSize + 2
                : null,
            list: edges.map(
              ({
                node: {
                  id,
                  thumbnail,
                  title,
                  price: {
                    amount: { units: price },
                  },
                  url,
                },
              }) =>
                Object.assign(
                  { id, price, title, url },
                  thumbnail &&
                    (({ x1: thumbnail }) => ({ thumbnail }))(thumbnail)
                )
            ),
          }
      )
      .optional(),
    click2Buy: z
      .object({
        search: z.object({
          __typename: z.enum(["Click2BuySearchOutput"]),
          // edges: z.any().array()
        }),
        __typename: z.enum(["Click2Buy"]),
      })
      .optional()
      .optional(),
  }) //.passthrough()
  .transform(({ advertSearch }) => advertSearch);

export const scrapMotoList = (
  // item: Partial<{ id: string }>,
  html: string
) => {
  const $root = parse(html);
  const json = JSON.parse(
    $root.querySelector("script#__NEXT_DATA__")?.text || "{}"
    // $root.querySelector("script#listing-json-ld")?.text || "{}"
  );
  try {
    return (
      z
        // .object({
        //   '@context': z.enum(["http://schema.org"]),
        //   '@type': z.enum(["Webpage"]),
        //   'mainEntity': z.object({
        //     '@type': z.enum(["OfferCatalog"]),
        //     itemListElement: z.object({
        //       '@type': z.enum(["Offer"]),
        //       itemOffered: z.object({
        //         '@type': z.enum(["Car"]),
        //         brand: z.string(),
        //         fuelType: z.enum(["","Benzyna","Diesel","Hybryda"]),
        //         mileageFromOdometer: z.object({
        //           '@type': z.enum(["QuantitativeValue"]),
        //           unitCode: z.enum(["KMT"]),
        //           value: z.string(),
        //         }),
        //         modelDate: z.string(),
        //         name: z.string(),
        //       }),
        //       priceSpecification: z.object({
        //         '@type': z.enum(["UnitPriceSpecification"]),
        //         price: z.string(),
        //         priceCurrency: z.enum(["PLN"]),
        //       }),
        //     }).array(),
        //     'name': z.string(),
        //   }),
        //   'url': z.string(),
        // })
        // .transform(({mainEntity: {itemListElement}}) => ({
        //   list: itemListElement
        // }))
        .object({
          props: z.object({
            pageProps: z.object({
              categories: z
                .object({
                  code: z.string(),
                  id: z.string(),
                  label: z.string(),
                  name: z.string(),
                  parentId: z.string().nullable(),
                  uriPath: z.string(),
                })
                .array(),
              currentUrl: z.string(),
              urqlState: z
                .record(
                  z.object({
                    data: z
                      .string()
                      .transform((data) => UrqlState.parse(JSON.parse(data)))
                      .optional(),
                  })
                )
                .transform(
                  (urqlState) =>
                    Boolean(console.log(urqlState)) ||
                    Object.values(urqlState)
                      .map(({ data }) => data)
                      .find(Boolean)
                ),
            }),
          }),
          query: z.object({
            listing: z.string().array(),
          }),
        })
        .transform(
          ({
            props: {
              pageProps: { urqlState },
            },
          }) => urqlState
        )
        // .transform(({mainEntity: {itemListElement}}) => ({
        //   list: itemListElement
        //   // .map(({url}) => ({url}))
        // }))
        .parse(json)
    );
  } catch (e) {
    console.log(json);
    console.error(e);
    return { items: [], nextPage: null };
  }
};

export const diffMotoItem = (last: any, item: any) =>
  ((last, item) => diffString(last, item))(
    MotoDiff.parse(last),
    MotoDiff.parse(item)
  );

export const updateMotoItem = (last: any, item: any, updated = _time) =>
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
    MotoDiff.parse(item)
  );
