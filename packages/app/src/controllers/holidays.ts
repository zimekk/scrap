import fetch from "isomorphic-fetch";
import { type RequestHandler } from "express";
import { holidaysItems, holidaysTuiItems } from "@dev/api/holidays";
import {
  BASE_URL,
  HotelOffersQuerySchema,
  HotelOffersSchema,
} from "@dev/cli/src/services/HolidaysService/types";

export const getHolidaysData: RequestHandler = (_req, res) =>
  // Promise.resolve(require('@dev/web/src/assets/api/holidays/data'))
  Promise.all([
    holidaysItems.find({}),
    holidaysTuiItems.find({}).then((list) =>
      list.map(({ id, ...item }) => ({
        id,
        ...item,
        Hotel_Features: [],
        Hotel_Tags: [
          {
            Name: "PRAWDZIWE SIGA-SIGA",
            ColorCSS: "#009FE3",
          },
          {
            Name: "PLAŻOWY HIT",
            ColorCSS: "#FFDA72",
          },
        ],
        Hotel_SubBrands: [],
        Hotel_AverageRating: 0,
        Hotel_Id: "79c947fa-e578-42f8-9dc7-816457855a3f",
        Hotel_ListingImageUrl: item.imageUrl,
        Hotel_Name: item.hotelName,
        Hotel_GPS_Latitude: item.latitude,
        Hotel_GPS_Longitude: item.longitude,
        Hotel_Location_Name: "Rodos",
        Hotel_OfferUrlWithOfferCode: item.offerUrl,
        Hotel_Standard_Stars_Css: "four-stars",
        Hotel_Local_Standard_Stars_Css: "four-stars",
        Hotel_Keys_Value: "",
        Hotel_LocalStandard: "local-standard",
        Hotel_Type_Name: "Hotel",
        Hotel_TextCategory: "All Inclusive",
        Hotel_Teaser_Highlights_1: "Modernizacja wszystkich pokoi na 2021!",
        Hotel_Teaser_Highlights_2:
          "Przy pięknej szerokiej plaży (bezpłatne leżaki i parasole)",
        Hotel_Teaser_Highlights_3: "Plażowanie w rytmie siga-siga",
        Hotel_Is_New: true,
        Query_AdultsChildenQueryString:
          "&Adults=2&Children=2&Child1=20100413&Child2=20121213",
        Query_AdditionalFiltersQueryString:
          "&DateOfDeparture=20220708&DateOfReturn=20220726&PriceFrom=0&PriceTo=50000&DurationInterval=10:13&From=WAW",
        Merlin_Id:
          "3e182a1d53da3956b511fa334f339138382818d26e229ef89e3800f588eba154",
        Merlin_AdultPrice: item.originalPerPersonPrice,
        Merlin_BoardStandardDesc: item.boardType,
        Merlin_City: "",
        Merlin_Duration: item.duration,
        Merlin_FlightFrom: item.departureAirport,
        Merlin_FullPriceParsed: item.originalFullPrice,
        Merlin_HotelCode: item.hotelCode,
        Merlin_OfferTypeSitecore: {
          Name: "Last Minute",
          ShortName: "LM",
          Color: "",
        },
        Merlin_ParsedDepartureTime: item.departureTime,
        Merlin_ParsedStartDate: "Pt 22.07",
        Merlin_ParsedStartFullDate: item.departureDate,
      }))
    ),
  ]).then(([json, json2]) => res.json(json.concat(json2)));

export const getHollidaysHotelOffersData: RequestHandler = (req, res) =>
  HotelOffersQuerySchema.parseAsync(req.query)
    .then((params) =>
      fetch(
        `${BASE_URL}api/sitecore/Hotel/HotelAllOffersAsJson?${new URLSearchParams(
          params
        )}`
      )
    )
    .then((res) => res.json())
    .then((data) => HotelOffersSchema.parseAsync(data))
    .then((json) => res.json(json));
