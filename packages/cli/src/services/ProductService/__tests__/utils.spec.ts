import { loadProductHtml } from "../../../utils";
import { fromHtml, fromHtml2, fromHtml3 } from "../utils";

describe("ProductService", () => {
  xit("fromHtml", () =>
    [
      {
        html: loadProductHtml(
          "186950-akcesorium-sieciowe-ubiquiti-zasilacz-poe-24v-24w-1a"
        ),
        result: {
          brand: "Ubiquiti",
          codes: [],
          image: [
            "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2017/9/pr_2017_9_27_14_37_18_439_00.jpg",
            "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2017/9/pr_2017_9_27_14_37_18_439_00.jpg",
            "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,pr_2014_5_15_17_32_20_730.jpg",
            "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,pr_2014_5_15_17_32_20_730.jpg",
          ],
          label: [
            "od: Ubiquiti",
            "kod producenta: POE-24-24W",
            "kod x-kom: 186950",
          ],
          links: ["Dostępny", "Darmowy odbiór w salonie"],
          price: ["59,00 zł"],
          proms: [],
          stars: "(0 opinii)",
          title: "Ubiquiti Zasilacz POE 24V 24W 1A",
          url: "https://www.x-kom.pl/p/186950-akcesorium-sieciowe-ubiquiti-zasilacz-poe-24v-24w-1a.html",
        },
      },
      {
        html: loadProductHtml(
          "576290-klocki-lego-lego-technic-42115-lamborghini-sian-fkp-37"
        ),
        result: {
          brand: "LEGO",
          codes: [],
          image: [
            "https://cdn.al.to/i/setup/images/prod/big/product-mini,,2021/6/pr_2021_6_8_10_41_17_447_00.jpg",
            "https://cdn.al.to/i/setup/images/prod/big/product-small,,2021/6/pr_2021_6_8_10_41_17_447_00.jpg",
            "https://cdn.al.to/i/setup/images/prod/big/product-mini,,2021/6/pr_2021_6_8_10_43_56_258_03.jpg",
            "https://cdn.al.to/i/setup/images/prod/big/product-small,,2021/6/pr_2021_6_8_10_43_56_258_03.jpg",
            "https://cdn.al.to/i/setup/images/prod/big/product-mini,,2021/6/pr_2021_6_8_10_43_53_820_02.jpg",
            "https://cdn.al.to/i/setup/images/prod/big/product-small,,2021/6/pr_2021_6_8_10_43_53_820_02.jpg",
            "https://cdn.al.to/i/setup/images/prod/big/product-mini,,2021/6/pr_2021_6_8_10_43_48_899_00.jpg",
            "https://cdn.al.to/i/setup/images/prod/big/product-small,,2021/6/pr_2021_6_8_10_43_48_899_00.jpg",
            "https://cdn.al.to/i/setup/images/prod/big/product-mini,,2021/6/pr_2021_6_8_10_43_50_930_01.jpg",
            "https://cdn.al.to/i/setup/images/prod/big/product-small,,2021/6/pr_2021_6_8_10_43_50_930_01.jpg",
            "https://cdn.al.to/i/setup/images/prod/big/product-mini,,2021/6/pr_2021_6_8_10_45_35_789_01.jpg",
            "https://cdn.al.to/i/setup/images/prod/big/product-small,,2021/6/pr_2021_6_8_10_45_35_789_01.jpg",
            "https://cdn.al.to/i/setup/images/prod/big/product-mini,,2021/6/pr_2021_6_8_10_47_10_680_00.jpg",
            "https://cdn.al.to/i/setup/images/prod/big/product-small,,2021/6/pr_2021_6_8_10_47_10_680_00.jpg",
            "https://cdn.al.to/i/setup/images/prod/big/product-mini,,2021/6/pr_2021_6_8_10_46_26_78_00.jpg",
            "https://cdn.al.to/i/setup/images/prod/big/product-small,,2021/6/pr_2021_6_8_10_46_26_78_00.jpg",
            "https://cdn.al.to/i/setup/images/prod/big/product-mini,,2021/6/pr_2021_6_8_10_45_33_758_00.jpg",
            "https://cdn.al.to/i/setup/images/prod/big/product-small,,2021/6/pr_2021_6_8_10_45_33_758_00.jpg",
            "https://cdn.al.to/i/setup/images/prod/big/product-mini,,2021/6/pr_2021_6_8_10_48_11_540_00.jpg",
            "https://cdn.al.to/i/setup/images/prod/big/product-small,,2021/6/pr_2021_6_8_10_48_11_540_00.jpg",
          ],
          label: ["od: LEGO", "kod producenta: 42115", "kod al.to: 576290"],
          links: ["Wycofany"],
          price: ["1 480,00 zł"],
          proms: [],
          stars: "(4 opinie)",
          title: "LEGO Technic 42115 Lamborghini Sián FKP 37",
          url: "https://www.al.to/p/576290-klocki-lego-lego-technic-42115-lamborghini-sian-fkp-37.html",
        },
      },
    ].forEach(({ html, result }) => expect(fromHtml(html)).toEqual(result)));

  xit("fromHtml.links", () =>
    [
      {
        html: loadProductHtml(
          "460088-rysik-do-tabletu-apple-pencil-2-do-ipad-pro"
        ),
        result: ["Dostępny", "Darmowy odbiór w salonie", "Rata tylko 20,32 zł"],
      },
      {
        html: loadProductHtml(
          "682156-smartwatch-apple-watch-se-40-gold-aluminium-starlight-sport-gps"
        ),
        result: [
          "Wydłużony czas dostawy",
          "Darmowa dostawa",
          "Rata tylko 44,68 zł",
        ],
      },
      {
        html: loadProductHtml(
          "592143-smartfon-telefon-apple-iphone-12-64gb-black-5g"
        ),
        result: ["Dostępny", "Darmowa dostawa", "Rata tylko 114,05 zł"],
      },
      {
        html: loadProductHtml(
          "1014810-urzadzenie-kosmetyczne-inface-ultrasonic-ion-cleansing-instrument-bialy"
        ),
        result: ["Dostępny", "Dostawa od: 8,90 zł"],
      },
    ].forEach(({ html, result }) =>
      expect(fromHtml(html).links).toEqual(result)
    ));

  xit("fromHtml2", () =>
    [
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
          image: ["//u.cyfrowe.pl/600x0/c/e/efm55200-6_1966710048.jpg"],
          stars: "9/10 (8 opinii)",
          price: ["1 429 zł"],
          links: [
            "Na zamówienie",
            "Zapytaj kiedy będzie / Powiadom",
            "Koszt dostawy: GRATIS",
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
    ].forEach(({ html, result }) => expect(fromHtml2(html)).toEqual(result)));

  xit("fromHtml3", () =>
    [
      {
        html: loadProductHtml(
          "glosniki/glosniki-podstawkowe/bowers-wilkins-706-s2-czarny-polysk"
        ),
        result: {
          id: "fp-38881",
          url: "https://www.tophifi.pl/glosniki/glosniki-podstawkowe/bowers-wilkins-706-s2-czarny-polysk.html",
          title: "706 S2 czarny połysk",
          brand: "Bowers & Wilkins",
          image: [
            "https://www.tophifi.pl/media/catalog/product/cache/c76cfc952dbe1a24abf7200506210ae9/b/o/bowers-wilkins-706-s2-bl_2.png",
          ],
          stars: "Ocena: 5 z 5 (5 opinii)",
          price: ["3 799 zł"],
          links: [
            "Wysyłka: w ciągu 24h",
            "Produkt chwilowo niedostępny",
            "Odbiór w salonie: już za godzinę",
            "Darmowa dostawa",
            "Rata 20 x 0% tylko 190 zł",
          ],
          label: ["od: Bowers & Wilkins", "sku: FP 38881", "kod: 714346329410"],
          proms: [],
          codes: [],
        },
      },
      {
        html: loadProductHtml(
          "sluchawki/sluchawki-z-redukcja-szumow/bowers-wilkins-px5-space-grey"
        ),
        result: {
          id: "fp-41173",
          url: "https://www.tophifi.pl/sluchawki/sluchawki-z-redukcja-szumow/bowers-wilkins-px5-space-grey.html",
          title: "PX5 space grey",
          brand: "Bowers & Wilkins",
          image: [
            "https://www.tophifi.pl/media/catalog/product/cache/c76cfc952dbe1a24abf7200506210ae9/b/o/bowers-wilkins-px5-space-grey-angle-redukcja-slu-nau-roku.png",
          ],
          stars: "Ocena: 5 z 5 (3 opinie)",
          price: ["1 111 zł"],
          links: [
            "Wysyłka: w ciągu 24h",
            "Produkt chwilowo niedostępny",
            "Odbiór w salonie: już za godzinę",
            "Darmowa dostawa",
            "Rata 20 x 0% tylko 56 zł",
          ],
          label: ["od: Bowers & Wilkins", "sku: FP 41173", "kod: 714346332366"],
          proms: [],
          codes: [],
        },
      },
      {
        html: loadProductHtml("glosniki/glosniki-instalacyjne/ccm-362"),
        result: {
          id: "1632",
          url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/ccm-362.html",
          title: "CCM362",
          brand: "Bowers & Wilkins",
          image: [
            "https://www.tophifi.pl/media/catalog/product/cache/c76cfc952dbe1a24abf7200506210ae9/8/b/8b1dd4ec.png",
          ],
          stars: "Ocena: 5 z 5 (7 opinii)",
          price: [],
          links: [
            "Produkt chwilowo niedostępny",
            "Odbiór w salonie: Prosimy o kontakt",
            "Darmowa dostawa",
            "Rata 20 x 0%",
          ],
          label: ["od: Bowers & Wilkins", "sku: 1632"],
          proms: [],
          codes: [],
        },
      },
    ].forEach(({ html, result }) => expect(fromHtml3(html)).toEqual(result)));
});
