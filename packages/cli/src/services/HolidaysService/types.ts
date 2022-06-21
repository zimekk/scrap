import { z } from "zod";

export const { GRECOS_URL: BASE_URL } = process.env;

const toNumber = (s: string) => Number(s.replace(",", ".").replace(" ", ""));

export const OfferItem = z.object({
  Hotel_Features: z
    .object({
      Rating: z.number(),
      Name: z.enum([
        "Pokój",
        "Wyżywienie",
        "Obsługa hotelowa",
        "Położenie",
        "Czystość",
        "Infrastruktura sportowa",
        "Infrastruktura dla dzieci",
        "Jakość do ceny",
      ]),
    })
    .array(),
  Hotel_Tags: z
    .object({
      Name: z.string(),
      ColorCSS: z.string(),
    })
    .array(),
  Hotel_SubBrands: z
    .object({
      Amenities_Name: z.string(),
      Description: z.string(),
    })
    .array(),
  Hotel_AverageRating: z.string().transform(toNumber), // '4,8',
  Hotel_Id: z.string(), // '12f88575-5719-420c-99f6-b28c34c89612',
  Hotel_ListingImageUrl: z
    .string()
    .transform((src) => new URL(src, BASE_URL).href), // '/-/media/grecos/hotel-photos/aarodos/mitsis-faliraki-beach/mitsis_faliraki_beach_01.ashx',
  Hotel_Name: z.string(), // 'Hotel Mitsis Faliraki Beach Hotel & Spa',
  Hotel_GPS_Latitude: z.string().transform(toNumber), // '36,34213',
  Hotel_GPS_Longitude: z.string().transform(toNumber), // '28,20261',
  Hotel_Location_Name: z.enum([
    "Attyka",
    "Chalkidiki",
    "Cypr",
    "Evia",
    "Kefalonia",
    "Korfu",
    "Kos",
    "Kreta",
    "Peloponez",
    "Riwiera Olimpu",
    "Rodos",
    "Zakynthos",
  ]), // 'Rodos',
  Hotel_OfferUrlWithOfferCode: z
    .string()
    .transform((src) => new URL(src, BASE_URL).href), // '/wakacje/grecja/hotel-mitsis-faliraki-beach-hotel--spa?offercode=',
  Hotel_Standard_Stars_Css: z.enum([
    "five-stars",
    "four-stars",
    "four-stars stars-plus",
    "three-stars",
    "three-stars stars-plus",
  ]), // 'five-stars',
  Hotel_Local_Standard_Stars_Css: z.enum([
    "",
    "five-stars",
    "four-stars",
    "three-stars",
    "two-stars",
  ]), // 'five-stars',
  Hotel_Keys_Value: z.string(), // '',
  Hotel_LocalStandard: z.enum([
    "local-standard",
    "pending",
    "pending-plus",
    "none",
  ]), // 'local-standard',
  Hotel_Type_Name: z.enum(["", "Aparthotel", "Hotel"]), // 'Hotel',
  Hotel_TextCategory: z.string(), // 'All Inclusive',
  Hotel_Teaser_Highlights_1: z.string(), // '',
  Hotel_Teaser_Highlights_2: z.string(), // 'Dla wymagającego Klienta',
  Hotel_Teaser_Highlights_3: z.string(), // 'W centrum rozrywkowego Faliraki',
  Hotel_Is_New: z.boolean(),
  Query_AdultsChildenQueryString: z.string(), // '&Adults=2&Children=2&Child1=20100413&Child2=20121213',
  Query_AdditionalFiltersQueryString: z.string(), // '&DateOfDeparture=20220708&DateOfReturn=20220726&PriceFrom=0&PriceTo=50000&DurationInterval=6:9&From=WAW',
  Merlin_Id: z.string(), // '9c1ee0c3e44310da020fd713c15a61ea86dd8ac51973028929da0ce093469f4c',
  Merlin_AdultPrice: z.string().transform(toNumber), // '7 138',
  Merlin_BoardStandardDesc: z.enum([
    "All inclusive",
    "Śniadanie",
    "Śniadanie i obiadokolacja",
  ]), // 'All inclusive',
  Merlin_City: z.string(), // '',
  Merlin_Duration: z.string().transform(toNumber), // '7',
  Merlin_FlightFrom: z.enum(["Warszawa"]), // 'Warszawa',
  Merlin_FullPriceParsed: z.string().transform(toNumber), // '28 552',
  Merlin_HotelCode: z.string(), // 'RHOFALI',
  Merlin_OfferTypeSitecore: z
    .object({
      Name: z.enum(["Last Minute"]), // "Last Minute",
      ShortName: z.enum(["LM"]), // "LM",
      Color: z.string(), // ""
    })
    .optional(),
  Merlin_ParsedDepartureTime: z.string(), // '18:20',
  Merlin_ParsedStartDate: z.string(), // 'Pt 8.07',
  Merlin_ParsedStartFullDate: z.string(), // 'Pt 8.07.2022'
});

export const HotelOffersQuerySchema = z.object({
  hotelSlug: z.string().default("hotel-ledras-beach"),
  offercode: z
    .string()
    .default(
      "0f7f49fd996e3f71a0441c9b82d5cfdb382818d26e229ef89e3800f588eba154"
    ),
  pageFrom: z.string().default("0"),
  airports: z.string().default("WAW"),
  SortBy: z.string().default("6"),
  SortAsc: z.string().default("1"),
  Adults: z.string().optional(),
  Children: z.string().optional(),
  Child1: z.string().optional(),
  Child2: z.string().optional(),
  Child3: z.string().optional(),
  Dates: z.string().optional(),
});

export type HotelOffersQueryType = {} & z.infer<typeof HotelOffersQuerySchema>;

export const HotelOffersSchema = z.object({
  HotelOffers: z
    .object({
      AdultPriceInt: z.string().transform(toNumber), // "1 836",
      BoardStandardCode: z.string(), // "1",
      CodeOfDeparture: z.enum(["WAW"]),
      DepartureDate: z.string(), // "20220620",
      DepartureTime: z.string(), // "1010",
      Duration: z.string().transform(toNumber), // "4",
      FlightFrom: z.enum(["Warszawa"]),
      ReturnFlightTo: z.enum(["Warszawa"]),
      HotelUrl: z.string().transform((src) => new URL(src, BASE_URL).href), // "/wakacje/grecja/hotel-ledras-beach?offercode=",
      Id: z.string(), // "28d1bbe6ec7cd1d5a091ca3fdff27c78c2c9d3243057f2f7fd1bb5dbd512718b",
      MinimumNumberOfPeople: z.string().transform(toNumber), // "3",
      MinimumNumberOfAdults: z.string().transform(toNumber), // "3",
      MinimumNumberOfChildren: z.string().transform(toNumber), // "0",
      ParsedDepartureTime: z.string(), // "10:10",
      ParsedReturnArrivalTime: z.string(), // "10:35",
      ReturnDate: z.string(), // "20220624",
      RoomCode: z.string(), // "DVL",
      MaximumNumberOfPeople: z.string().transform(toNumber), // "3",
      MaximumNumberOfAdults: z.string().transform(toNumber), // "3",
      MaximumNumberOfChildren: z.string().transform(toNumber), // "1",
      ParsedTripDateWithDays: z.string(), // "Pn.20.06 - Pt.24.06.2022",
      ParsedTripDepartureDateWithDays: z.string(), // "Pn.20.06.2022",
      ParsedTripArrivalDateWithDays: z.string(), // "Pt.24.06.2022",
      DescriptionOfRoom: z.string(), // "Standard widok na morze",
      BoardStandardDesc: z.enum([
        "All inclusive",
        "Śniadanie",
        "Śniadanie i obiadokolacja",
        "",
      ]),
      FilterData: z.string(), // "&Adults=3&Children=-3&Dates=&airports=WAW&Room=&BoardStandards="
    })
    .passthrough()
    .array(),
  OffersToLoad: z.number(),
  IsThereMoreOffers: z.boolean(),
  PageSize: z.number(),
});

export type HotelOffersType = {} & z.infer<typeof HotelOffersSchema>;
