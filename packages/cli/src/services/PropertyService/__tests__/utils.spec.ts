import { diffPropertyItem, updatePropertyItem } from "../utils";

describe("utils", () => {
  it("diffPropertyItem", () =>
    [
      {
        last: {
          _id: "kWUpK2jZu2D72GpU",
          _created: 1643137731239,
          id: "klik-471728",
          canonical:
            "https://www.klikmapa.pl/o/warszawa-wawer-1-050-000-zl-200-m2-do-remontu-id471728.html",
          category: "domy",
          images: [
            "https://i.klikmapa.pl/19c/b42/a0-1939-487e-aecb-2dc6ec175503-jpg",
          ],
          title: "Super lokalizacja bliźniak Anin Sadul",
          price: 1050000,
          description: [
            "Mamy przyjemność zaprezentować Państwu do sprzedaży nieduży dom w zabudowie bliźniaczej w doskonałej lokalizacji. Budynek wybudowany w latach 80-tych. Budynek podpiwniczony w całości , piwnice bardzo obszerne i przestronne. Pod tarasem garaż na rowery czy bardzo niski samochód . W budynku ogrzewanie gazowe, woda miejska, szambo, w ulicy niedaleko kanalizacja miejska.<br />Właściwa...",
          ],
          parameters: [],
          created: "2022-01-25 15:41:01",
          changed: "",
          _checked: 1643235391658,
        },
        item: {
          _id: "kWUpK2jZu2D72GpU",
          _created: 1643137731239,
          id: "klik-471728",
          canonical:
            "https://www.klikmapa.pl/o/warszawa-wawer-1-050-000-zl-200-m2-do-remontu-id471728.html",
          category: "domy",
          images: [
            "https://i.klikmapa.pl/399/b6b/65-0e92-48f8-aa8a-65d6346fb4be-jpg",
          ],
          title: "Super lokalizacja, bliźniak Anin-Sadul",
          price: 1050000,
          description: [
            "<br />Mamy przyjemność zaprezentować Państwu ofertę sprzedaży piętrowego domu o powierzchni 130m2 w zabudowie bliźniaczej usytuowanego w doskonałej lokalizacji.<br /><br />Budynek wybudowany w latach 80-tych, w całości podpiwniczony (piwnica bardzo obszerna i przestronna). Pod tarasem zlokalizowany jest garaż na rowery lub niski samochód. <br />Ogrzewanie gazowe, woda miejska,...",
          ],
          parameters: [],
          created: "2022-01-25 15:41:01",
          changed: "",
          _checked: 1643237835712,
        },
        result: true,
      },
    ].forEach(({ last, item, result }) =>
      expect(Boolean(diffPropertyItem(last, item))).toEqual(result)
    ));

  it("updatePropertyItem", () =>
    [
      {
        last: {
          _id: "kWUpK2jZu2D72GpU",
          _created: 1643137731239,
          id: "klik-471728",
          canonical:
            "https://www.klikmapa.pl/o/warszawa-wawer-1-050-000-zl-200-m2-do-remontu-id471728.html",
          category: "domy",
          coordinates: {
            latitude: 52.2096,
            longitude: 21.1602,
          },
          images: [
            "https://i.klikmapa.pl/19c/b42/a0-1939-487e-aecb-2dc6ec175503-jpg",
          ],
          title: "Super lokalizacja bliźniak Anin Sadul",
          price: 1050000,
          description: [
            "Mamy przyjemność zaprezentować Państwu do sprzedaży nieduży dom w zabudowie bliźniaczej w doskonałej lokalizacji. Budynek wybudowany w latach 80-tych. Budynek podpiwniczony w całości , piwnice bardzo obszerne i przestronne. Pod tarasem garaż na rowery czy bardzo niski samochód . W budynku ogrzewanie gazowe, woda miejska, szambo, w ulicy niedaleko kanalizacja miejska.<br />Właściwa...",
          ],
          parameters: [],
          created: "2022-01-25 15:41:01",
          changed: "",
          _checked: 1643235391658,
        },
        item: {
          _id: "kWUpK2jZu2D72GpU",
          _created: 1643137731239,
          id: "klik-471728",
          address: {
            lokalizacja_region: "mazowieckie",
            lokalizacja_powiat: "warszawski",
            lokalizacja_miejscowosc: "Warszawa",
            lokalizacja_kraj: "Polska",
            lokalizacja_dzielnica: "Wawer",
          },
          canonical:
            "https://www.klikmapa.pl/o/warszawa-wawer-1-050-000-zl-200-m2-do-remontu-id471728.html",
          category: "domy",
          coordinates: {
            latitude: 52.2096,
            longitude: 21.1602,
          },
          images: [
            "https://i.klikmapa.pl/399/b6b/65-0e92-48f8-aa8a-65d6346fb4be-jpg",
          ],
          location: ["POLSKA", "MAZOWIECKIE", "WARSZAWA", "WAWER"],
          title: "Super lokalizacja, bliźniak Anin-Sadul",
          price: 1050000,
          description: [
            "<br />Mamy przyjemność zaprezentować Państwu ofertę sprzedaży piętrowego domu o powierzchni 130m2 w zabudowie bliźniaczej usytuowanego w doskonałej lokalizacji.<br /><br />Budynek wybudowany w latach 80-tych, w całości podpiwniczony (piwnica bardzo obszerna i przestronna). Pod tarasem zlokalizowany jest garaż na rowery lub niski samochód. <br />Ogrzewanie gazowe, woda miejska,...",
          ],
          parameters: [],
          created: "2022-01-25 15:41:01",
          changed: "",
          _checked: 1643237835712,
          _updated: 1643237701078,
          _area: 0,
          _terrain_area: 0,
          _address: ["Polska", "mazowieckie", "warszawski", "Warszawa"],
          _location: "POLSKA, MAZOWIECKIE, WARSZAWA, WAWER",
        },
        result: {
          _checked: 1643235391658,
          _created: 1643137731239,
          _history: {
            "1643137731239": {
              _checked: 1643235391658,
              _created: 1643137731239,
              _id: "kWUpK2jZu2D72GpU",
              canonical:
                "https://www.klikmapa.pl/o/warszawa-wawer-1-050-000-zl-200-m2-do-remontu-id471728.html",
              category: "domy",
              changed: "",
              coordinates: { latitude: 52.2096, longitude: 21.1602 },
              created: "2022-01-25 15:41:01",
              description: [
                "Mamy przyjemność zaprezentować Państwu do sprzedaży nieduży dom w zabudowie bliźniaczej w doskonałej lokalizacji. Budynek wybudowany w latach 80-tych. Budynek podpiwniczony w całości , piwnice bardzo obszerne i przestronne. Pod tarasem garaż na rowery czy bardzo niski samochód . W budynku ogrzewanie gazowe, woda miejska, szambo, w ulicy niedaleko kanalizacja miejska.<br />Właściwa...",
              ],
              id: "klik-471728",
              images: [
                "https://i.klikmapa.pl/19c/b42/a0-1939-487e-aecb-2dc6ec175503-jpg",
              ],
              parameters: [],
              price: 1050000,
              title: "Super lokalizacja bliźniak Anin Sadul",
            },
          },
          _id: "kWUpK2jZu2D72GpU",
          _updated: 1643239160251,
          canonical:
            "https://www.klikmapa.pl/o/warszawa-wawer-1-050-000-zl-200-m2-do-remontu-id471728.html",
          category: "domy",
          changed: "",
          coordinates: { latitude: 52.2096, longitude: 21.1602 },
          created: "2022-01-25 15:41:01",
          description: [
            "<br />Mamy przyjemność zaprezentować Państwu ofertę sprzedaży piętrowego domu o powierzchni 130m2 w zabudowie bliźniaczej usytuowanego w doskonałej lokalizacji.<br /><br />Budynek wybudowany w latach 80-tych, w całości podpiwniczony (piwnica bardzo obszerna i przestronna). Pod tarasem zlokalizowany jest garaż na rowery lub niski samochód. <br />Ogrzewanie gazowe, woda miejska,...",
          ],
          id: "klik-471728",
          images: [
            "https://i.klikmapa.pl/399/b6b/65-0e92-48f8-aa8a-65d6346fb4be-jpg",
          ],
          parameters: [],
          price: 1050000,
          title: "Super lokalizacja, bliźniak Anin-Sadul",
        },
      },
    ].forEach(({ last, item, result }) =>
      expect(updatePropertyItem(last, item, 1643239160251)).toEqual(result)
    ));
});
