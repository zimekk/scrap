import { z } from "zod";

export const { TUI_URL: BASE_URL } = process.env;

enum Sorting {
  PRICE = "price",
}

export const ArgsSchema = z.object({
  page: z.number().default(0),
  pageSize: z.number().default(100),
  sorting: z.nativeEnum(Sorting).default(Sorting.PRICE),
});

export const ParamsSchema = z.object({
  durationFrom: z.string().default("6").transform(Number),
  durationTo: z.string().default("8").transform(Number),
  numberOfAdults: z.string().default("2").transform(Number),
  childrenBirthdays: z.string().transform((s) => s.split(":")),
});

const FlightSchema = z.object({
  flightDuration: z.string(), // "2h 05min",
  flightNumber: z.string(), // "6336",
  airLineCode: z.string(), // "LO",
  departure: z.object({
    date: z.string(), // "28.06.2022",
    airportName: z.string(), // "Warna",
    airportCode: z.string(), // "VAR",
    time: z.string(), // "17:55"
  }),
  arrival: z.object({
    date: z.string(), // "28.06.2022",
    airportName: z.string(), // "Warszawa-Chopina",
    airportCode: z.string(), // "WAW",
    time: z.string(), // "19:00"
  }),
  carrierName: z.enum([
    "Aegean Airlines",
    "Air France",
    "Air Mauritius, Air France",
    "Austrian Airlines",
    "Emirates / FlyDubai",
    "Enter Air",
    "KLM",
    "LOT",
    "LOT, Air Mauritius",
    "LOT, Condor",
    "Lufthansa",
    "Precision Air, KLM",
    "Qatar Airways",
    "Ryanair Sun",
    "Smartwings Poland",
    "Sun Express",
    "Swiss International Air Lines",
    "Travel Service",
  ]), // "LOT"
});

export const ItemSchema = z.object({
  hotelCode: z.string(), // "VAR19077",
  hotelName: z.string(), // "Vemara Club",
  hotelStandard: z.number().optional(), // 3,
  offerCode: z.string(), // "WAWBOJ20220621204020220621202206281755L07VAR19077DZX3AA02Ch02BD2010041320121213ROADZX3A02BD2010041320121213",
  duration: z.number(), // 7,
  durationText: z.enum(["noclegów"]), // "noclegów",
  zoom: z.number(), // 8,
  offerUrl: z.string().transform((url) => new URL(url, BASE_URL).href), // "/wypoczynek/bulgaria/riwiera-bulgarska/vemara-club-var19077/OfferCodeWS/WAWBOJ20220621204020220621202206281755L07VAR19077DZX3AA02Ch02BD2010041320121213ROADZX3A02BD2010041320121213",
  breadcrumbs: z
    .object({
      label: z.string(), // "Bułgaria",
      url: z.string().optional(), // "/wypoczynek/bulgaria"
    })
    .array(),
  features: z.string().array(), //"kameralny obiekt",
  discountFullPrice: z.string(), // "6530",
  originalFullPrice: z.string(), // "6530",
  discountPerPersonPrice: z.string(), // "1828",
  originalPerPersonPrice: z.string(), // "1828",
  departureDate: z.string(), // "21.06.2022",
  returnDate: z.string(), // "28.06.2022",
  departureTime: z.string(), // "20:40",
  departureAirport: z.string(), // "Warszawa-Chopina",
  latitude: z.number().optional(), // 42.856119,
  longitude: z.number().optional(), // 27.899428,
  imageUrl: z.string(), // "https://r.cdn.redgalaxy.com/scale/o2/TUI/hotels/VAR19077/S18/10351400.jpg?dstw=268&dsth=266&srcw=268&srch=266&srcx=1/2&srcy=1/2&srcmode=3&type=1&quality=80",
  boardType: z.enum([
    "All Inclusive",
    "All Inclusive Light",
    "Dwa posiłki plus",
    "Śniadanie i obiadokolacja",
    "Śniadanie",
    "Bez wyżywienia",
    "Zgodnie z programem",
    "3 posiłki",
  ]), // "All Inclusive",
  promotions: z
    .object({
      label: z.string(), // "Last minute",
      description: z.string().optional(), // "",
      promotionType: z.enum(["LAST_MINUTE", "OTHER"]), // "LAST_MINUTE"
    })
    .array(),
  tripAdvisorRating: z.number().optional(), // 3,
  tripAdvisorReviewsNo: z.number().optional(), // 119,
  tripAdvisorReviewsText: z.string().optional(), // "opinii",
  participants: z.string(), // "2 Dorosłych + 2 Dzieci",
  currency: z.enum(["zł"]), // "zł",
  priceCheckingAvailable: z.boolean(), // false,
  onWishlist: z.boolean(), // false,
  soldOut: z.boolean(), // false,
  promoted: z.boolean(), // false,
  gallery: z
    .object({
      imageUrl: z.string(), // "https://r.cdn.redgalaxy.com/scale/o2/TUI/hotels/VAR19077/S18/10351400.jpg?dstw=1157&dsth=621&srcw=1157&srch=621&srcx=1/2&srcy=1/2&srcmode=3&type=1&quality=80",
      thumbnailUrl: z.string(), // "https://r.cdn.redgalaxy.com/scale/o2/TUI/hotels/VAR19077/S18/10351400.jpg?dstw=200&dsth=200&srcw=200&srch=200&srcx=1/2&srcy=1/2&srcmode=3&type=1&quality=80",
      alt: z.string(), // "Hotel"
    })
    .array(),
  departureFlight: FlightSchema,
  returnFlight: FlightSchema,
  season: z.string(), // "S22",
  priceAlert: z.boolean(), // false,
  viewers: z
    .object({
      counter: z.number(), // 25,
      message: z.string(), // "25 osób właśnie ogląda ten hotel",
      type: z.string(), // "HOTEL_VIEWS"
    })
    .optional(),
});

export const OffersSchema = z.object({
  pagination: z.object({
    page: z.number(), // 1,
    pageSize: z.number(), // 30,
    totalResults: z.number(), // 1972,
    sorting: z.enum(["price"]), // 'price',
    pagesCount: z.number(), // 66
  }),
  offers: ItemSchema.strict().array(),
});
