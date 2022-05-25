import { loadProductHtml } from "../../../utils";
import { fromHtml } from "../utils";

describe("ProductCyfroweService", () => {
  xit("fromHtml", () =>
    [
      {
        html: loadProductHtml("plecak-manfrotto-advanced2-befree-p"),
        result: {
          brand: "Manfrotto",
          codes: [],
          id: undefined,
          image: [
            "https://u.cyfrowe.pl/600x0/f/f/manfrotto-advanced2-camera-backpack-mb-ma2-bp-bfr-45degree_438266437.jpg",
          ],
          label: ["Kod w sklepie: TORMANADBF2"],
          links: ["Koniec modelu", "Zostaw swój stary sprzęt w rozliczeniu"],
          price: [],
          proms: [],
          stars: "(0) Napisz opinię",
          title: "Plecak Manfrotto Advanced 2 Befree",
          url: "https://www.cyfrowe.pl/plecak-manfrotto-advanced2-befree-p.html",
        },
      },
      {
        html: loadProductHtml(
          "aparat-cyfrowy-canon-eos-m50-ii-czarny-i-ob-15-45-f35-63-p"
        ),
        result: {
          id: "4549292176438",
          url: "https://www.cyfrowe.pl/aparat-cyfrowy-canon-eos-m50-ii-czarny-p.html",
          title:
            "Aparat cyfrowy Canon EOS M50 Mark II czarny + ob. 15-45 F3.5-6.3",
          brand: "Canon",
          image: ["//u.cyfrowe.pl/600x0/e/6/825585617_1058422319.jpg"],
          stars: "9/10 (1 opinia)",
          price: ["2 999 zł", "3 330 zł"],
          links: [
            "Na zamówienie",
            "Produkt aktualnie niedostępny. Nie znamy daty dostawy.",
            "Zapytaj kiedy będzie / Powiadom",
            "Koszt dostawy: GRATIS",
          ],
          label: ["EAN: 4549292176438", "Kod w sklepie: ACFCANEOSM50II1545-B"],
          proms: [],
          codes: [],
        },
      },
      {
        html: loadProductHtml(
          "aparaty-obiektyw-canon-ef-m-55-200mm-f-45-63-is-stm"
        ),
        result: {
          id: "4549292009873",
          url: "https://www.cyfrowe.pl/aparaty/obiektyw-canon-ef-m-55-200mm-f-45-63-is-stm.html",
          title: "Obiektyw Canon EF-M 55-200 mm f/4.5-6.3 IS STM",
          brand: "Canon",
          image: ["https://u.cyfrowe.pl/600x0/c/e/efm55200-6_1966710048.jpg"],
          stars: "9/10 (8 opinii)",
          price: ["1 470 zł"],
          links: [
            "Na zamówienie",
            "Darmowa dostawa",
            "Zamów za darmo do salonu",
            "Zostaw swój stary sprzęt w rozliczeniu",
          ],
          label: [
            "EAN: 4549292009873",
            "Kod w sklepie: OBICANEFM55200F4563ISSTM",
          ],
          proms: [],
          codes: [],
        },
      },
      {
        html: loadProductHtml("obiektyw-sigma-c-16-mm-f-14-dc-dn-eos-m-p"),
        result: {
          id: "085126402716",
          url: "https://www.cyfrowe.pl/obiektyw-sigma-c-16-mm-f-14-dc-dn-eos-m-p.html",
          title: "Obiektyw Sigma C 16 mm f/1.4 DC DN / EOS M",
          brand: "Sigma",
          image: ["//u.cyfrowe.pl/600x0/a/3/3_701492896_1301637766.jpg"],
          stars: "9/10 (2 opinie)",
          price: ["1 790 zł"],
          links: ["Wysyłamy w 24h", "Koszt dostawy: GRATIS"],
          label: ["EAN: 085126402716", "Kod w sklepie: OBISIGC16F14DC-EOSM"],
          proms: [],
          codes: [],
        },
      },
      {
        html: loadProductHtml("aparat-cyfrowy-panasonic-lumix-dc-s5-body-p"),
        result: {
          id: "5025232940073",
          url: "https://www.cyfrowe.pl/aparat-cyfrowy-panasonic-lumix-dc-s5-body-p.html",
          title: "Aparat cyfrowy Panasonic Lumix DC-S5 body",
          brand: "Panasonic",
          image: ["//u.cyfrowe.pl/600x0/1/7/panasonics55_1404567492.jpg"],
          stars: "0/10 (0 opinii)",
          price: ["8 999 zł"],
          links: [
            "Na zamówienie",
            "Zapytaj kiedy będzie / Powiadom",
            "Koszt dostawy: GRATIS",
          ],
          label: ["EAN: 5025232940073", "Kod w sklepie: ACFPANDCS5"],
          proms: [
            "LUMIX S 50 mm f/1.8 gratis!",
            "Kup za 8099 zł (900 zł taniej) wpisując w koszyku kod: LumixPromo900",
          ],
          codes: ["LumixPromo900"],
        },
      },
    ].forEach(({ html, result }) => expect(fromHtml(html)).toEqual(result)));
});
