import { addressKlik } from "../utils";

describe("utils", () => {
  xit("addressKlik", () =>
    [
      {
        location_path: [
          { p: "otwock", s: "", name: "Otwock", type: "miejsce" },
          { p: "otwock", s: "środborów", name: "Środborów", type: "miejsce2" },
        ],
        location_user: "POLSKA, MAZOWIECKIE, OTWOCKI, OTWOCK, ŚRÓDBORÓW",
        address: {
          lokalizacja_region: "mazowieckie",
          lokalizacja_powiat: "otwocki",
          lokalizacja_miejscowosc: "Otwock",
          lokalizacja_dzielnica: "Środborów",
          lokalizacja_kraj: "Polska",
        },
      },
      {
        location_path: [
          { p: "warszawa", s: "", name: "Warszawa", type: "miejsce" },
          { p: "warszawa", s: "ursynów", name: "Ursynów", type: "dzielnica" },
        ],
        location_user: "POLSKA, MAZOWIECKIE, WARSZAWA, URSYNÓW",
        address: {
          lokalizacja_region: "mazowieckie",
          lokalizacja_powiat: "warszawski",
          lokalizacja_miejscowosc: "Warszawa",
          lokalizacja_dzielnica: "Ursynów",
          lokalizacja_kraj: "Polska",
        },
      },
      {
        location_path: [
          { p: "halinów", s: "", name: "Halinów", type: "miejsce" },
        ],
        location_user: "mazowieckie, miński, Halinów",
        address: {
          lokalizacja_region: "mazowieckie",
          lokalizacja_powiat: "miński",
          lokalizacja_miejscowosc: "Halinów",
          lokalizacja_kraj: "Polska",
        },
      },
      {
        location_path: [
          { p: "warszawa", s: "", name: "Warszawa", type: "miejsce" },
          {
            p: "warszawa",
            s: "białołęka,brzeziny",
            name: "Brzeziny",
            type: "miejsce2",
          },
        ],
        location_user: "Ostródzka",
        address: {
          lokalizacja_region: "mazowieckie",
          lokalizacja_powiat: "warszawski",
          lokalizacja_miejscowosc: "Warszawa",
          lokalizacja_dzielnica: "Brzeziny",
          lokalizacja_kraj: "Polska",
        },
      },
      {
        location_path: [
          { p: "warszawa", s: "", name: "Warszawa", type: "miejsce" },
          { p: "warszawa", s: "wawer", name: "Wawer", type: "dzielnica" },
        ],
        location_user: "mazowieckie, Warszawa m., Warszawa, Wawer",
        address: {
          lokalizacja_region: "mazowieckie",
          lokalizacja_powiat: "warszawski",
          lokalizacja_miejscowosc: "Warszawa",
          lokalizacja_dzielnica: "Wawer",
          lokalizacja_kraj: "Polska",
        },
      },
    ].forEach(({ location_path, location_user, address }) =>
      // Boolean(console.log({location_path, location_user}))||
      expect(addressKlik(location_path, location_user)).toEqual(address)
    ));
});
