import { z } from "zod";
import { Category, Coordinates } from "../utils";

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
    __typename: z.string().optional(),
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

export const ListSchema = z.object({
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
});

export const ItemSchema = z.object({
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
              z.enum(["asphalt", "dirt", "hard_surfaced", "soft_surfaced"])
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
                "unfinished_open",
                "unfinished_close",
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
              z.enum(["forest", "lake", "mountains", "open_terrain", "sea"])
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
});

export const NormalizedItemSchema = z.object({
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
});
