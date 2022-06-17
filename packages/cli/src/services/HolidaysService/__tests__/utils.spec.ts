import { diffItem } from "../utils";

const stripAnsi = (s: string) =>
  s.replace(
    /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,
    ""
  );

describe("HolidaysService", () => {
  it("diffItem", () =>
    [
      {
        last: {
          Hotel_Features: [],
          Hotel_Tags: [
            { Name: "GRECKI VIBE", ColorCSS: "#F18700" },
            { Name: "ŻYCIE NOCNE", ColorCSS: "#D15097" },
          ],
          Hotel_SubBrands: [],
          Hotel_AverageRating: 0,
          Hotel_Id: "89a59832-486b-43a2-b8b9-64b452f8d874",
          Hotel_ListingImageUrl:
            "/-/media/grecos/hotel-photos/aazakynthos/selyria-resort/selyria_resort_02.ashx",
          Hotel_Name: "Selyria Resort",
          Hotel_GPS_Latitude: 37.787023,
          Hotel_GPS_Longitude: 20.8999234,
          Hotel_Location_Name: "Zakynthos",
          Hotel_OfferUrlWithOfferCode:
            "/wakacje/grecja/selyria-resort?offercode=",
          Hotel_Standard_Stars_Css: "four-stars",
          Hotel_Local_Standard_Stars_Css: "",
          Hotel_Keys_Value: "",
          Hotel_LocalStandard: "pending",
          Hotel_Type_Name: "",
          Hotel_TextCategory: "All Inclusive",
          Hotel_Teaser_Highlights_1: "Blisko rozrywkowego centrum Tsilivi",
          Hotel_Teaser_Highlights_2: "Nowoczesny design",
          Hotel_Teaser_Highlights_3: "Długa, piaszczysta plaża",
          Hotel_Is_New: false,
          Query_AdultsChildenQueryString:
            "&Adults=2&Children=2&Child1=20100413&Child2=20121213",
          Query_AdditionalFiltersQueryString:
            "&DateOfDeparture=20220708&DateOfReturn=20220726&PriceFrom=0&PriceTo=50000&DurationInterval=10:13&From=WAW",
          Merlin_Id:
            "c45805a252ba0e1eaf9c4a6e1c425ad68481182fb4c091507ea589273c8338b8",
          Merlin_AdultPrice: 5095,
          Merlin_BoardStandardDesc: "All inclusive",
          Merlin_City: "",
          Merlin_Duration: 10,
          Merlin_FlightFrom: "Warszawa",
          Merlin_FullPriceParsed: 20380,
          Merlin_HotelCode: "ZTHSELL",
          Merlin_ParsedDepartureTime: "17:25",
          Merlin_ParsedStartDate: "Wt 26.07",
          Merlin_ParsedStartFullDate: "Wt 26.07.2022",
          id: "c45805a252ba0e1eaf9c4a6e1c425ad68481182fb4c091507ea589273c8338b8",
          _created: 1655458951658,
          _id: "FQC46JwVYvi6XkwX",
        },
        item: {
          Hotel_Features: [],
          Hotel_Tags: [
            { Name: "GRECKI VIBE", ColorCSS: "#F18700" },
            { Name: "ŻYCIE NOCNE", ColorCSS: "#D15097" },
          ],
          Hotel_SubBrands: [],
          Hotel_AverageRating: 0,
          Hotel_Id: "89a59832-486b-43a2-b8b9-64b452f8d874",
          Hotel_ListingImageUrl:
            "/-/media/grecos/hotel-photos/aazakynthos/selyria-resort/selyria_resort_02.ashx",
          Hotel_Name: "Selyria Resort",
          Hotel_GPS_Latitude: 37.787023,
          Hotel_GPS_Longitude: 20.8999234,
          Hotel_Location_Name: "Zakynthos",
          Hotel_OfferUrlWithOfferCode:
            "/wakacje/grecja/selyria-resort?offercode=",
          Hotel_Standard_Stars_Css: "five-stars",
          Hotel_Local_Standard_Stars_Css: "",
          Hotel_Keys_Value: "",
          Hotel_LocalStandard: "pending",
          Hotel_Type_Name: "",
          Hotel_TextCategory: "All Inclusive",
          Hotel_Teaser_Highlights_1: "Blisko rozrywkowego centrum Tsilivi",
          Hotel_Teaser_Highlights_2: "Nowoczesny design",
          Hotel_Teaser_Highlights_3: "Długa, piaszczysta plaża",
          Hotel_Is_New: false,
          Query_AdultsChildenQueryString:
            "&Adults=2&Children=2&Child1=20100413&Child2=20121213",
          Query_AdditionalFiltersQueryString:
            "&DateOfDeparture=20220708&DateOfReturn=20220726&PriceFrom=0&PriceTo=50000&DurationInterval=10:13&From=WAW",
          Merlin_Id:
            "c45805a252ba0e1eaf9c4a6e1c425ad68481182fb4c091507ea589273c8338b8",
          Merlin_AdultPrice: 5095,
          Merlin_BoardStandardDesc: "All inclusive",
          Merlin_City: "",
          Merlin_Duration: 10,
          Merlin_FlightFrom: "Warszawa",
          Merlin_FullPriceParsed: 20380,
          Merlin_HotelCode: "ZTHSELL",
          Merlin_ParsedDepartureTime: "17:25",
          Merlin_ParsedStartDate: "Wt 26.07",
          Merlin_ParsedStartFullDate: "Wt 26.07.2022",
          id: "c45805a252ba0e1eaf9c4a6e1c425ad68481182fb4c091507ea589273c8338b8",
        },
        result: ` {
-  Hotel_Standard_Stars_Css: \"four-stars\"
+  Hotel_Standard_Stars_Css: \"five-stars\"
 }
`,
      },
    ].forEach(({ item, last, result }) =>
      expect(stripAnsi(diffItem(last, item))).toEqual(result)
    ));
});
