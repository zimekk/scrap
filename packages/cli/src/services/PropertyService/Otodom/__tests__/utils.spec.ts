import { loadProductHtml } from "../../../utils";
import { scrapPropertyOtodomList, scrapPropertyOtodomItem } from "../utils";

describe("utils", () => {
  xit("scrapPropertyOtodomList", () =>
    [
      {
        item: { id: "otodom" },
        html: loadProductHtml("otodom-dzialka-komorow_5600-1"),
        result: {
          id: "otodom",
          items: [
            {
              id: "otodom-62643173",
              name: "budowlana w Komorowie - blisko Wkd",
              href: "budowlana-w-komorowie-blisko-wkd-ID4eQlL",
            },
            {
              id: "otodom-55875684",
              name: "Usługowo-Mieszkaniowa, 1033 m², Komorów",
              href: "uslugowo-mieszkaniowa-1033-m-komorow-ID3MrOI",
            },
            {
              id: "otodom-62046081",
              name: "Działka 1 406 m² Komorów",
              href: "dzialka-1-406-m-komorow-ID4cl1f",
            },
            {
              id: "otodom-62625026",
              name: "Piękna działka budowlana Komorów",
              href: "piekna-dzialka-budowlana-komorow-ID4eLD4",
            },
            {
              id: "otodom-62265265",
              name: "Działka z linią brzegową i z pozwoleniem na budowę",
              href: "dzialka-z-linia-brzegowa-i-z-pozwoleniem-na-budowe-ID4dg2t",
            },
            {
              id: "otodom-62621923",
              name: "Atrakcyjna działka budowlana, niezadrzewiona!",
              href: "atrakcyjna-dzialka-budowlana-niezadrzewiona-ID4eKP1",
            },
            {
              id: "otodom-62339614",
              name: "Działka Budowlana Komorów",
              href: "dzialka-budowlana-komorow-ID4dznE",
            },
            {
              id: "otodom-61546914",
              name: "Atrakcyjna działka w Komorowie.",
              href: "atrakcyjna-dzialka-w-komorowie-ID4afaa",
            },
            {
              id: "otodom-62586946",
              name: "Rod-Komorów/zadrzewiona/domek/kołoWędkarskie",
              href: "rod-komorow-zadrzewiona-domek-kolowedkarskie-ID4eBIS",
            },
            {
              id: "otodom-62523350",
              name: "Piękna działka pod 2 bliźniaki w Komorowie",
              href: "piekna-dzialka-pod-2-blizniaki-w-komorowie-ID4elb8",
            },
            {
              id: "otodom-62514201",
              name: "Działka w Komorowie z zabudową mieszkalną",
              href: "dzialka-w-komorowie-z-zabudowa-mieszkalna-ID4eiNz",
            },
            {
              id: "otodom-62481487",
              name: "Rod-Komorów/20letnRododendron/domek/kołoWędkarskie",
              href: "rod-komorow-20letnrododendron-domek-kolowedkarskie-ID4eahW",
            },
            {
              id: "otodom-62433081",
              name: "Działka, 1 000 m², Komorów",
              href: "dzialka-1-000-m-komorow-ID4dXHb",
            },
            {
              id: "otodom-62265589",
              name: "Budowlana 3500 m2 Zalew Komorowski",
              href: "budowlana-3500-m2-zalew-komorowski-ID4dg7H",
            },
            {
              id: "otodom-62429653",
              name: "Działka, 3 500 m², Komorów",
              href: "dzialka-3-500-m-komorow-ID4dVNT",
            },
            {
              id: "otodom-62427907",
              name: "Duża działka w Komorowie",
              href: "duza-dzialka-w-komorowie-ID4dVlJ",
            },
            {
              id: "otodom-62411469",
              name: "Wszystkie media, 1.5km do Wkd",
              href: "wszystkie-media-1-5km-do-wkd-ID4dS4B",
            },
            {
              id: "otodom-62358866",
              name: "Komorów-Dla Szukających Ciszy I Pięknego Otoczenia",
              href: "komorow-dla-szukajacych-ciszy-i-pieknego-otoczenia-ID4dEoa",
            },
            {
              id: "otodom-62337786",
              name: "Komorów - piękna działka pod rezydencję.",
              href: "komorow-piekna-dzialka-pod-rezydencje-ID4dyUa",
            },
            {
              id: "otodom-59033976",
              name: "Działka Komorów 1951mkw, ogrodzona, przy parku.",
              href: "dzialka-komorow-1951mkw-ogrodzona-przy-parku-ID3ZHqU",
            },
            {
              id: "otodom-61271218",
              name: "Działka Komorów,zabudowa rezydencjonalna.",
              href: "dzialka-komorow-zabudowa-rezydencjonalna-ID495rs",
            },
            {
              id: "otodom-62017140",
              name: "Piękna Działka W Komorowie",
              href: "piekna-dzialka-w-komorowie-ID4cdus",
            },
            {
              id: "otodom-61965316",
              name: "Komorów, piękna działka budowlana",
              href: "komorow-piekna-dzialka-budowlana-ID4c00A",
            },
            {
              id: "otodom-31887473",
              name: "Atrakcyjna działka Komorów Wieś",
              href: "atrakcyjna-dzialka-komorow-wies-ID29No5",
            },
            {
              id: "otodom-61812872",
              name: "Piękna działka budowlana 2.001 m2 w Komorowie.",
              href: "piekna-dzialka-budowlana-2-001-m2-w-komorowie-ID4bmlO",
            },
            {
              id: "otodom-61798340",
              name: "Najpiękniejsza działka w Komorowie 2001m2",
              href: "najpiekniejsza-dzialka-w-komorowie-2001m2-ID4bizq",
            },
            {
              id: "otodom-61791651",
              name: "Działka pod zabudowę jednorodzinną Rezydencjonalną",
              href: "dzialka-pod-zabudowe-jednorodzinna-rezydencjonalna-ID4bgPx",
            },
            {
              id: "otodom-61652949",
              name: "Działka, 2 420 m², Komorów",
              href: "dzialka-2-420-m-komorow-ID4aGKp",
            },
            {
              id: "otodom-61616414",
              name: "Komorów działka 2511m2",
              href: "komorow-dzialka-2511m2-ID4axf8",
            },
            {
              id: "otodom-61544582",
              name: "Działka, 937 m², Komorów",
              href: "dzialka-937-m-komorow-ID4aeyy",
            },
            {
              id: "otodom-61544576",
              name: "Działka, 2 001 m², Komorów",
              href: "dzialka-2-001-m-komorow-ID4aeys",
            },
            {
              id: "otodom-61254976",
              name: "Działka, 912 m², Komorów",
              href: "dzialka-912-m-komorow-ID491du",
            },
            {
              id: "otodom-60920602",
              name: "Ostatnia taka działka w Komorowie 2500m2",
              href: "ostatnia-taka-dzialka-w-komorowie-2500m2-ID47Cem",
            },
            {
              id: "otodom-60920506",
              name: "Działka w cichej i spokojnej okolicy",
              href: "dzialka-w-cichej-i-spokojnej-okolicy-ID47CcO",
            },
            {
              id: "otodom-60764920",
              name: "Budowlane 2 X 516 m2, Komorów, pruszkowski",
              href: "budowlane-2-x-516-m2-komorow-pruszkowski-ID46XJm",
            },
            {
              id: "otodom-60338706",
              name: "Ładna działka w Komorowie",
              href: "ladna-dzialka-w-komorowie-ID45aQV",
            },
          ],
          nextPage: "/pl/oferty/sprzedaz/dzialka/komorow_5600?page=2",
        },
      },
    ].forEach(({ item, html, result }) =>
      // Boolean(console.log(scrapPropertyOtodomList(item, html)))||
      expect(scrapPropertyOtodomList(item, html)).toEqual(result)
    ));

  xit("scrapPropertyOtodomItem", () =>
    [
      {
        item: { id: "otodom-63400761" },
        html: loadProductHtml("dom-ok-185m2-gotowy-do-wprowadzenia-ID4i3sC"),
        result: {
          address: {
            lokalizacja_gmina: "mazowieckie",
            lokalizacja_kraj: "Polska",
            lokalizacja_miejscowosc: "Komorów",
            lokalizacja_powiat: "pruszkowski",
            lokalizacja_region: "",
            lokalizacja_ulica: "",
          },
          canonical:
            "https://www.otodom.pl/pl/oferta/dom-ok-185m2-gotowy-do-wprowadzenia-ID4i3sC.html",
          category: "domy",
          characteristics: [
            {
              currency: "PLN",
              key: "price",
              label: "Cena",
              localizedValue: "1 299 000 zł",
              suffix: "",
              value: "1299000",
            },
            {
              currency: "",
              key: "terrain_area",
              label: "Powierzchnia działki",
              localizedValue: "685 m²",
              suffix: "",
              value: "685",
            },
            {
              currency: "",
              key: "m",
              label: "Powierzchnia",
              localizedValue: "185,50 m²",
              suffix: "",
              value: "185.5",
            },
            {
              currency: "",
              key: "price_per_m",
              label: "cena za metr",
              localizedValue: "7 003 zł/m²",
              suffix: "",
              value: "7003",
            },
            {
              currency: "",
              key: "market",
              label: "Rynek",
              localizedValue: "wtórny",
              suffix: "",
              value: "secondary",
            },
            {
              currency: "",
              key: "rooms_num",
              label: "Liczba pokoi",
              localizedValue: "4",
              suffix: "",
              value: "4",
            },
            {
              currency: "",
              key: "building_type",
              label: "Rodzaj zabudowy",
              localizedValue: "bliźniak",
              suffix: "",
              value: "semi_detached",
            },
            {
              currency: "",
              key: "building_material",
              label: "Materiał budynku",
              localizedValue: "cegła",
              suffix: "",
              value: "brick",
            },
            {
              currency: "",
              key: "build_year",
              label: "Rok budowy",
              localizedValue: "2020",
              suffix: "",
              value: "2020",
            },
            {
              currency: "",
              key: "windows_type",
              label: "Okna",
              localizedValue: "plastikowe",
              suffix: "",
              value: "plastic",
            },
          ],
          coordinates: {
            latitude: 52.1446983,
            longitude: 20.8156334,
          },
          description: [
            "W ofercie Bardzo Ładny Dom - bliźniak o powierzchni ok. 186 m2, Położony na działce ok. 680 m2 z licznymi nasadzeniami.",
            "Dom położony jest w pięknym rejonie, w zielonym i cichym, wśród zieleni i podobnych zabudowań, a w promieniu 1km szkoła, sklepy oraz stacja kolejki WKD. ",
            "Rozkład : Parter:- Wiatrołap;-Salon ok. 31m2 z wyjściem na taras oraz z możliwością zrobienia kominka; - Kuchnia z jadalnią; ",
            "I Piętro :- 3 Pokoje - sypialnie, przedpokój, - łazienka",
            "Budynek posiada również podpiwniczenie, w którym znajduje się :- Duża kotłownia;- Łazienka z wyprowadzoną siłą, co daje nam możliwość zaaranżowania w niej sauny. ",
            "Na posesji znajduje się również garaż wolnostojący. Wszystkie media miejskie: kanalizacja, prąd, gaz, woda oraz światłowód. ",
            "Dom jest gotowy do zamieszkania. Zapraszam na prezentację.",
            "Treść niniejszego ogłoszenia nie stanowi oferty handlowej w rozumieniu Kodeksu Cywilnego.",
          ],
          id: "otodom-63400761",
          images: [
            "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjlrazA5eHR5cHdoeC1BUEwiLCJ3IjpbeyJmbiI6ImVudmZxcWUxYXk0azEtQVBMIiwicyI6IjE0IiwicCI6IjEwLC0xMCIsImEiOiIwIn1dfQ.eDmhVftyODwex0krYV1vKkMMVgCvuJpn50ffm39c9f8/image;s=1280x1024;q=80",
            "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InY3MTI0cGlvbGw5MDItQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.MPjMVCu33q7n3zB7pxoSmQitAB6VSe31GYEkWKviCWU/image;s=1280x1024;q=80",
            "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Imlsbjk4d3dlZTVtdTMtQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.eY09JuDU3crNLpdXC1hne01HcJj4RmOvNtUt4LZERGI/image;s=1280x1024;q=80",
            "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InRnczVoMXJlOGRtZzMtQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.DwcONo8-h_OrjQEy2wHEp2eal15rdkPZuoYXZv9FJdU/image;s=1280x1024;q=80",
            "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjJ5aGxtb2k0dTdqZzMtQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.yDEmzSCnlwdHXhDXtu6KEydP1p4vGzm-iQ9Ua090M6A/image;s=1280x1024;q=80",
            "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjM1YjZia2JzOHRvazMtQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.rmC8IZu-HKNmMIzGwTZGk9m8PZZp5VSNMj4BzG5-Rv0/image;s=1280x1024;q=80",
            "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjNoaW83eXJuZzc4My1BUEwiLCJ3IjpbeyJmbiI6ImVudmZxcWUxYXk0azEtQVBMIiwicyI6IjE0IiwicCI6IjEwLC0xMCIsImEiOiIwIn1dfQ.Yv6deS5mdq7BVDNpjEODnHjbZ29COgDqcbmiHLcSooI/image;s=1280x1024;q=80",
          ],
          information: [
            {
              label: "area",
              unit: "m²",
              values: ["185.5"],
            },
            {
              label: "heating_types",
              unit: "",
              values: ["heating_types::gas"],
            },
            {
              label: "terrain_area",
              unit: "m²",
              values: ["685"],
            },
            {
              label: "construction_status",
              unit: "",
              values: [],
            },
            {
              label: "building_type",
              unit: "",
              values: ["building_type::semi_detached"],
            },
            {
              label: "build_year",
              unit: "",
              values: ["2020"],
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
              values: ["market::secondary"],
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
              values: ["building_material-117::brick"],
            },
            {
              label: "windows_type",
              unit: "",
              values: ["windows_type::plastic"],
            },
            {
              label: "floors_num",
              unit: "",
              values: [],
            },
            {
              label: "recreational",
              unit: "",
              values: [],
            },
            {
              label: "roof_type",
              unit: "",
              values: [],
            },
            {
              label: "roofing",
              unit: "",
              values: [],
            },
            {
              label: "garret_type",
              unit: "",
              values: [],
            },
            {
              label: "media_types",
              unit: "",
              values: [
                "media_types::electricity",
                "media_types::gas",
                "media_types::internet",
                "media_types::sewage",
                "media_types::water",
              ],
            },
            {
              label: "security_types",
              unit: "",
              values: [],
            },
            {
              label: "fence_types",
              unit: "",
              values: ["fence_types::wire"],
            },
            {
              label: "access_types",
              unit: "",
              values: ["access_types::asphalt"],
            },
            {
              label: "location",
              unit: "",
              values: [],
            },
            {
              label: "vicinity_types",
              unit: "",
              values: [],
            },
            {
              label: "extras_types",
              unit: "",
              values: [],
            },
          ],
          location: [],
          parameters: [],
          price: 1299000,
          title: "Dom ok.185m2 gotowy do wprowadzenia",
        },
      },
    ].forEach(({ item, html, result }) =>
      // Boolean(console.log(scrapPropertyItem1(item, html)))||
      expect(scrapPropertyOtodomItem(item, html)).toEqual(result)
    ));

  xit("scrapPropertyOtodomItem.address", () =>
    [
      {
        item: { id: "otodom-55875684" },
        html: loadProductHtml("otodom-55875684"),
        result: {
          lokalizacja_gmina: "Komorów",
          lokalizacja_region: "mazowieckie",
          lokalizacja_powiat: "pruszkowski",
          lokalizacja_miejscowosc: "Komorów",
          lokalizacja_kraj: "Polska",
        },
      },
      {
        item: { id: "otodom-47739554" },
        html: loadProductHtml("otodom-47739554"),
        result: {
          lokalizacja_gmina: "Warszawa",
          lokalizacja_region: "mazowieckie",
          lokalizacja_powiat: "Warszawa",
          lokalizacja_miejscowosc: "Warszawa",
          lokalizacja_kraj: "Polska",
          lokalizacja_ulica: "Kolegiacka",
        },
      },
    ].forEach(({ item, html, result }) =>
      // Boolean(console.log(scrapPropertyItem1(item, html)))||
      expect((scrapPropertyOtodomItem(item, html) || {}).address).toEqual(
        result
      )
    ));
});
