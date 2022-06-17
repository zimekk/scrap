import { z } from "zod";

const { GRECOS_URL: BASE_URL } = process.env;

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
