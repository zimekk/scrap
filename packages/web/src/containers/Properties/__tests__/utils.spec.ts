import { prepareItem } from "../utils";

describe("Properties", () => {
  it("prepareItem", () =>
    [
      {
        item: {
          id: "otodom-62257212",
          address: {
            lokalizacja_gmina: "Stare Babice",
            lokalizacja_region: "mazowieckie",
            lokalizacja_powiat: "warszawski zachodni",
            lokalizacja_miejscowosc: "Stare Babice",
            lokalizacja_kraj: "Polska",
          },
          information: [
            {
              label: "area",
              unit: "m²",
              values: ["135"],
            },
            {
              label: "heating_types",
              unit: "",
              values: ["heating_types::heat_pump"],
            },
            {
              label: "terrain_area",
              unit: "m²",
              values: ["336"],
            },
            {
              label: "construction_status",
              unit: "",
              values: ["construction_status::to_completion"],
            },
            {
              label: "building_type",
              unit: "",
              values: ["building_type::ribbon"],
            },
            {
              label: "build_year",
              unit: "",
              values: ["2022"],
            },
            {
              label: "rooms_num",
              unit: "",
              values: ["4"],
            },
            {
              label: "car",
              unit: "",
              values: ["extras_types-179::garage"],
            },
            {
              label: "remote_services",
              unit: "",
              values: [],
            },
            {
              label: "rent",
              unit: "",
              values: [],
            },
            {
              label: "market",
              unit: "",
              values: ["market::primary"],
            },
            {
              label: "advertiser_type",
              unit: "",
              values: ["advertiser_type::agency"],
            },
            {
              label: "free_from",
              unit: "",
              values: [],
            },
            {
              label: "building_material",
              unit: "",
              values: [],
            },
            {
              label: "windows_type",
              unit: "",
              values: ["windows_type::wooden"],
            },
            {
              label: "floors_num",
              unit: "",
              values: ["floors_num::two_floors"],
            },
            {
              label: "recreational",
              unit: "",
              values: [],
            },
            {
              label: "roof_type",
              unit: "",
              values: ["roof_type::diagonal"],
            },
            {
              label: "roofing",
              unit: "",
              values: ["roofing::sheet"],
            },
            {
              label: "garret_type",
              unit: "",
              values: ["garret_type::usable"],
            },
            {
              label: "media_types",
              unit: "",
              values: [
                "media_types::cable_television",
                "media_types::electricity",
                "media_types::gas",
                "media_types::internet",
                "media_types::phone",
                "media_types::sewage",
                "media_types::water",
                "media_types::water_purification",
              ],
            },
            {
              label: "security_types",
              unit: "",
              values: [
                "security_types::anti_burglary_door",
                "security_types::closed_area",
                "security_types::entryphone",
                "security_types::monitoring",
              ],
            },
            {
              label: "fence_types",
              unit: "",
              values: ["fence_types::metal"],
            },
            {
              label: "access_types",
              unit: "",
              values: ["access_types::asphalt"],
            },
            {
              label: "location",
              unit: "",
              values: ["location::suburban"],
            },
            {
              label: "vicinity_types",
              unit: "",
              values: [],
            },
            {
              label: "extras_types",
              unit: "",
              values: ["extras_types::attic"],
            },
          ],
          location: ["Stare Babice", "warszawski zachodni", "mazowieckie"],
          parameters: [],
        },
        result: {
          _area: 135,
          _terrain_area: 336,
          _address: [
            "Polska",
            "mazowieckie",
            "warszawski zachodni",
            "Stare Babice",
            "Stare Babice",
          ],
          _location: "Stare Babice, warszawski zachodni, mazowieckie",
          building: "szeregowy",
          parameters: [
            {
              label: "area",
              value: "135m²",
            },
            {
              label: "heating_types",
              value: "heating_types::heat_pump",
            },
            {
              label: "terrain_area",
              value: "336m²",
            },
            {
              label: "construction_status",
              value: "construction_status::to_completion",
            },
            {
              label: "building_type",
              value: "building_type::ribbon",
            },
            {
              label: "build_year",
              value: "2022",
            },
            {
              label: "rooms_num",
              value: "4",
            },
            {
              label: "car",
              value: "extras_types-179::garage",
            },
            {
              label: "market",
              value: "market::primary",
            },
            {
              label: "advertiser_type",
              value: "advertiser_type::agency",
            },
            {
              label: "windows_type",
              value: "windows_type::wooden",
            },
            {
              label: "floors_num",
              value: "floors_num::two_floors",
            },
            {
              label: "roof_type",
              value: "roof_type::diagonal",
            },
            {
              label: "roofing",
              value: "roofing::sheet",
            },
            {
              label: "garret_type",
              value: "garret_type::usable",
            },
            {
              label: "media_types",
              value:
                "media_types::cable_television, media_types::electricity, media_types::gas, media_types::internet, media_types::phone, media_types::sewage, media_types::water, media_types::water_purification",
            },
            {
              label: "security_types",
              value:
                "security_types::anti_burglary_door, security_types::closed_area, security_types::entryphone, security_types::monitoring",
            },
            {
              label: "fence_types",
              value: "fence_types::metal",
            },
            {
              label: "access_types",
              value: "access_types::asphalt",
            },
            {
              label: "location",
              value: "location::suburban",
            },
            {
              label: "extras_types",
              value: "extras_types::attic",
            },
          ],
          road: "asfaltowa",
        },
      },
      {
        item: {
          id: "gratka-23449505",
          address: {
            lokalizacja_gmina: "Warszawa",
            lokalizacja_region: "mazowieckie",
            lokalizacja_powiat: "Warszawa",
            lokalizacja_miejscowosc: "Warszawa",
            lokalizacja_kraj: "Polska",
            lokalizacja_ulica: "Bernardyńska",
            "lokalizacja_szerokosc-geograficzna-y": 52.19546,
            lokalizacja_dzielnica: "Sadyba",
            "lokalizacja_dlugosc-geograficzna-x": 21.0624,
          },
          location: ["Warszawa", "Warszawa", "mazowieckie"],
          parameters: [
            {
              label: "Lokalizacja",
              value: "Warszawa, Sadyba, mazowieckie",
            },
            {
              label: "Powierzchnia działki w m2",
              value: "4 593 m2",
            },
            {
              label: "Droga dojazdowa",
              value: "utwardzana",
            },
            {
              label: "Ogrodzenie działki",
              value: "brak",
            },
            {
              label: "Numer referencyjny",
              value: "gratka-581311",
            },
            {
              label: "Zaktualizowane",
              value: "5 dni temu",
            },
            {
              label: "Dodane",
              value: "ponad miesiąc temu",
            },
          ],
        },
        result: {
          _area: 0,
          _terrain_area: 4593,
          _address: [
            "Polska",
            "mazowieckie",
            "Warszawa",
            "Warszawa",
            "Warszawa",
            "Bernardyńska",
          ],
          _location: "Warszawa, Warszawa, mazowieckie",
          building: undefined,
          parameters: [
            {
              label: "Lokalizacja",
              value: "Warszawa, Sadyba, mazowieckie",
            },
            {
              label: "Powierzchnia działki w m2",
              value: "4 593 m2",
            },
            {
              label: "Droga dojazdowa",
              value: "utwardzana",
            },
            {
              label: "Ogrodzenie działki",
              value: "brak",
            },
            {
              label: "Numer referencyjny",
              value: "gratka-581311",
            },
            {
              label: "Zaktualizowane",
              value: "5 dni temu",
            },
            {
              label: "Dodane",
              value: "ponad miesiąc temu",
            },
          ],
          road: "utwardzana",
        },
      },
    ].forEach(({ item, result }) => expect(prepareItem(item)).toEqual(result)));
});
