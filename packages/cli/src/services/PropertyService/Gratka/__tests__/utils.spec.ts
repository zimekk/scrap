import { loadProductHtml } from "../../../utils";
import { scrapPropertyGratkaList, scrapPropertyGratkaItem } from "../utils";

describe("utils", () => {
  xit("scrapPropertyGratkaList", () =>
    [
      {
        item: { id: "gratka" },
        html: loadProductHtml("gratka-nieruchomosci-podkowa-lesna-1"),
        result: {
          id: "gratka",
          items: [
            {
              id: "gratka-22807857",
              name: "item-22807857",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/22807857",
            },
            {
              id: "gratka-23424923",
              name: "item-23424923",
              href: "https://gratka.pl/nieruchomosci/dzialka-budowlana-podkowa-lesna/ob/23424923",
            },
            {
              id: "gratka-22587393",
              name: "item-22587393",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/22587393",
            },
            {
              id: "gratka-23265061",
              name: "item-23265061",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/23265061",
            },
            {
              id: "gratka-24462089",
              name: "item-24462089",
              href: "https://gratka.pl/nieruchomosci/dzialka-budowlana-podkowa-lesna-ul-wrobla/ob/24462089",
            },
            {
              id: "gratka-24460949",
              name: "item-24460949",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/24460949",
            },
            {
              id: "gratka-24441447",
              name: "item-24441447",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/24441447",
            },
            {
              id: "gratka-24355267",
              name: "item-24355267",
              href: "https://gratka.pl/nieruchomosci/nowy-dom-podkowa-lesna/ob/24355267",
            },
            {
              id: "gratka-24261309",
              name: "item-24261309",
              href: "https://gratka.pl/nieruchomosci/nowy-dom-podkowa-lesna/ob/24261309",
            },
            {
              id: "gratka-24248251",
              name: "item-24248251",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/24248251",
            },
            {
              id: "gratka-24201749",
              name: "item-24201749",
              href: "https://gratka.pl/nieruchomosci/nowy-dom-podkowa-lesna/ob/24201749",
            },
            {
              id: "gratka-24200813",
              name: "item-24200813",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/24200813",
            },
            {
              id: "gratka-24172377",
              name: "item-24172377",
              href: "https://gratka.pl/nieruchomosci/dzialka-budowlana-podkowa-lesna/ob/24172377",
            },
            {
              id: "gratka-24166589",
              name: "item-24166589",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/24166589",
            },
            {
              id: "gratka-24337957",
              name: "item-24337957",
              href: "https://gratka.pl/nieruchomosci/dzialka-budowlana-podkowa-lesna-ul-parkowa/ob/24337957",
            },
            {
              id: "gratka-24128121",
              name: "item-24128121",
              href: "https://gratka.pl/nieruchomosci/nowy-dom-podkowa-lesna/ob/24128121",
            },
            {
              id: "gratka-24101549",
              name: "item-24101549",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/24101549",
            },
            {
              id: "gratka-24459449",
              name: "item-24459449",
              href: "https://gratka.pl/nieruchomosci/nowy-dom-podkowa-lesna/ob/24459449",
            },
            {
              id: "gratka-24055919",
              name: "item-24055919",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/24055919",
            },
            {
              id: "gratka-24023529",
              name: "item-24023529",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/24023529",
            },
            {
              id: "gratka-23957557",
              name: "item-23957557",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/23957557",
            },
            {
              id: "gratka-23844965",
              name: "item-23844965",
              href: "https://gratka.pl/nieruchomosci/nowy-dom-podkowa-lesna/ob/23844965",
            },
            {
              id: "gratka-23840223",
              name: "item-23840223",
              href: "https://gratka.pl/nieruchomosci/dzialka-budowlana-podkowa-lesna/ob/23840223",
            },
            {
              id: "gratka-23840209",
              name: "item-23840209",
              href: "https://gratka.pl/nieruchomosci/dzialka-budowlana-podkowa-lesna/ob/23840209",
            },
            {
              id: "gratka-23829359",
              name: "item-23829359",
              href: "https://gratka.pl/nieruchomosci/nowy-dom-podkowa-lesna/ob/23829359",
            },
            {
              id: "gratka-23775467",
              name: "item-23775467",
              href: "https://gratka.pl/nieruchomosci/nowy-dom-podkowa-lesna/ob/23775467",
            },
            {
              id: "gratka-23654093",
              name: "item-23654093",
              href: "https://gratka.pl/nieruchomosci/dzialka-budowlana-podkowa-lesna-ul-parkowa/ob/23654093",
            },
            {
              id: "gratka-23618089",
              name: "item-23618089",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/23618089",
            },
            {
              id: "gratka-23611077",
              name: "item-23611077",
              href: "https://gratka.pl/nieruchomosci/nowy-dom-podkowa-lesna/ob/23611077",
            },
            {
              id: "gratka-23531917",
              name: "item-23531917",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/23531917",
            },
            {
              id: "gratka-23444117",
              name: "item-23444117",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/23444117",
            },
            {
              id: "gratka-24289663",
              name: "item-24289663",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/24289663",
            },
          ],
          nextPage: "https://gratka.pl/nieruchomosci/podkowa-lesna?page=2",
        },
      },
    ].forEach(({ item, html, result }) =>
      // Boolean(console.log(scrapPropertyGratkaList(item, html)))||
      expect(scrapPropertyGratkaList(item, html)).toEqual(result)
    ));

  xit("scrapPropertyGratkaItem", () =>
    [
      {
        item: { id: "gratka-22587393" },
        html: loadProductHtml("gratka-item-22587393"),
        result: {
          id: "gratka-22587393",
          address: {
            "lokalizacja_dlugosc-geograficzna-x": 20.7265083,
            lokalizacja_gmina: "Podkowa Leśna",
            lokalizacja_kraj: "Polska",
            lokalizacja_miejscowosc: "Podkowa Leśna",
            lokalizacja_powiat: "grodziski",
            lokalizacja_region: "mazowieckie",
            "lokalizacja_szerokosc-geograficzna-y": 52.1199928,
          },
          canonical:
            "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/22587393",
          category: "domy",
          images: [
            "https://d-gr.cdngr.pl/kadry/k/r/gr-ogl/a6/31/22587393_686848463_dom-podkowa-lesna_xlarge.jpg",
            "https://d-gr.cdngr.pl/kadry/k/r/gr-ogl/a6/31/22587393_686848465_dom-podkowa-lesna_xlarge.jpg",
            "https://d-gr.cdngr.pl/kadry/k/r/gr-ogl/a6/31/22587393_686848469_dom-podkowa-lesna_xlarge.jpg",
            "https://d-gr.cdngr.pl/kadry/k/r/gr-ogl/a6/31/22587393_686848479_dom-podkowa-lesna_xlarge.jpg",
            "https://d-gr.cdngr.pl/kadry/k/r/gr-ogl/a6/31/22587393_686848485_dom-podkowa-lesna_xlarge.jpg",
          ],
          location: ["Podkowa Leśna", "grodziski", "mazowieckie"],
          title: "Dom Podkowa Leśna",
          price: 1450000,
          description: [
            "Do sprzedania przedwojenny dom (pod opieką konserwatora) położony w cichym miejscu. Budynek wykonany z drewna obłożony cegłą. Parter składa się obecnie z trzech kuchni, trzech łazienek i sześciu pokoi. Piętro to jeden pokój. Nieruchomość wymaga generalnego remonty. Idealna nieruchomość dla ludzi ceniących ciszę i spokój.",
            "Polub nas na Facebooku",
            "https://www.facebook.com/nconceptpl/",
            "Niniejsze ogłoszenie jest wyłącznie informacją handlową i nie stanowi oferty w myśl art. 66, 1. Kodeksu Cywilnego. Nie odpowiadamy za ewentualne błędy lub nieaktualność ogłoszenia.",
            "Oferta wysłana z programu IMO dla biur nieruchomości",
          ],
          parameters: [
            {
              label: "Lokalizacja",
              value: "Podkowa Leśna, grodziski, mazowieckie",
            },
            {
              label: "Numer referencyjny",
              value: "gratka-1203",
            },
            {
              label: "Kanalizacja",
              value: "miejska",
            },
            {
              label: "Droga dojazdowa",
              value: "utwardzana",
            },
            {
              label: "Liczba pięter w budynku",
              value: "1",
            },
            {
              label: "Rok budowy",
              value: "1943",
            },
            {
              label: "Stan",
              value: "do remontu",
            },
            {
              label: "Forma własności",
              value: "własność",
            },
            {
              label: "Liczba pokoi",
              value: "6",
            },
            {
              label: "Dach",
              value: "papa",
            },
            {
              label: "Powierzchnia działki w m2",
              value: "1 806 m2",
            },
            {
              label: "Powierzchnia użytkowa w m2",
              value: "145 m2",
            },
            {
              label: "Powierzchnia w m2",
              value: "145 m2",
            },
            {
              label: "Typ budynku",
              value: "pałac/dworek/willa",
            },
            {
              label: "Media",
              value: "woda, prąd, siła",
            },
            {
              label: "Ogrzewanie i energia",
              value: "gazowe",
            },
            {
              label: "Zaktualizowane",
              value: "ponad miesiąc temu",
            },
            {
              label: "Dodane",
              value: "ponad miesiąc temu",
            },
          ],
        },
      },
    ].forEach(({ item, html, result }) =>
      expect(scrapPropertyGratkaItem(item, html)).toEqual(result)
    ));

  xit("scrapPropertyGratkaItem.address", () =>
    [
      {
        html: loadProductHtml("gratka-item-22587393"),
        result: {
          "lokalizacja_dlugosc-geograficzna-x": 20.7265083,
          lokalizacja_gmina: "Podkowa Leśna",
          lokalizacja_kraj: "Polska",
          lokalizacja_miejscowosc: "Podkowa Leśna",
          lokalizacja_powiat: "grodziski",
          lokalizacja_region: "mazowieckie",
          "lokalizacja_szerokosc-geograficzna-y": 52.1199928,
        },
      },
      {
        html: loadProductHtml("gratka-item-19928301"),
        result: {
          "lokalizacja_dlugosc-geograficzna-x": 20.81310511,
          lokalizacja_gmina: "Michałowice",
          lokalizacja_kraj: "Polska",
          lokalizacja_miejscowosc: "Komorów",
          lokalizacja_powiat: "pruszkowski",
          lokalizacja_region: "mazowieckie",
          "lokalizacja_szerokosc-geograficzna-y": 52.14746053,
          lokalizacja_ulica: "Marii Dąbrowskiej",
        },
      },
    ].forEach(({ html, result }) =>
      expect((scrapPropertyGratkaItem({ id: "" }, html) || {}).address).toEqual(
        result
      )
    ));

  xit("scrapPropertyGratkaItem.images", () =>
    [
      {
        html: loadProductHtml("gratka-item-22587393"),
        result: [
          "https://d-gr.cdngr.pl/kadry/k/r/gr-ogl/a6/31/22587393_686848463_dom-podkowa-lesna_xlarge.jpg",
          "https://d-gr.cdngr.pl/kadry/k/r/gr-ogl/a6/31/22587393_686848465_dom-podkowa-lesna_xlarge.jpg",
          "https://d-gr.cdngr.pl/kadry/k/r/gr-ogl/a6/31/22587393_686848469_dom-podkowa-lesna_xlarge.jpg",
          "https://d-gr.cdngr.pl/kadry/k/r/gr-ogl/a6/31/22587393_686848479_dom-podkowa-lesna_xlarge.jpg",
          "https://d-gr.cdngr.pl/kadry/k/r/gr-ogl/a6/31/22587393_686848485_dom-podkowa-lesna_xlarge.jpg",
        ],
      },
      {
        html: loadProductHtml("gratka-item-18369371"),
        result: [],
      },
    ].forEach(({ html, result }) =>
      expect(scrapPropertyGratkaItem({ id: "" }, html).images).toEqual(result)
    ));

  xit("scrapPropertyGratkaItem.description", () =>
    [
      {
        html: loadProductHtml("gratka-item-22587393"),
        result: [
          "Do sprzedania przedwojenny dom (pod opieką konserwatora) położony w cichym miejscu. Budynek wykonany z drewna obłożony cegłą. Parter składa się obecnie z trzech kuchni, trzech łazienek i sześciu pokoi. Piętro to jeden pokój. Nieruchomość wymaga generalnego remonty. Idealna nieruchomość dla ludzi ceniących ciszę i spokój.",
          "Polub nas na Facebooku",
          "https://www.facebook.com/nconceptpl/",
          "Niniejsze ogłoszenie jest wyłącznie informacją handlową i nie stanowi oferty w myśl art. 66, 1. Kodeksu Cywilnego. Nie odpowiadamy za ewentualne błędy lub nieaktualność ogłoszenia.",
          "Oferta wysłana z programu IMO dla biur nieruchomości",
        ],
      },
      {
        html: loadProductHtml("gratka-item-23597317"),
        result: [],
      },
    ].forEach(({ html, result }) =>
      expect(scrapPropertyGratkaItem({ id: "" }, html).description).toEqual(
        result
      )
    ));
});
