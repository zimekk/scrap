import { loadProductHtml } from "../../../utils";
import { fromHtml } from "../utils";

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
          links: [
            "Wydłużony czas dostawy",
            "Darmowa dostawa",
            "Rata tylko 70,00 zł",
          ],
          price: ["1 400,00 zł"],
          proms: [],
          stars: "(4 opinie)",
          title: "LEGO Technic 42115 Lamborghini Sián FKP 37",
          url: "https://www.al.to/p/576290-klocki-lego-lego-technic-42115-lamborghini-sian-fkp-37.html",
          reviews: [
            {
              author: "Hajdan",
              body: "Super Wykonanie, instrukcja bardzo zrozumiała, Dobra cena.",
              date: "2020-11-17",
              rating: 6,
            },
            {
              author: "Nie powiem",
              body: "Auto bardzo eleganckie ładne i ekskluzywne. Miałem niezła frajdę, budowanie go zajęło ok30 godz. Te pieniądze naprawdę nie idą na marne same szczegóły i te wszystkie detale są niesamowite oraz pudełko niesamowicie zaprojektowane i oczywiście samochód. Polecam też zainwestować w bugatti chiron.",
              date: "2021-03-01",
              rating: 6,
            },
            {
              author: "Jakub",
              body: "Piękny model. Składanie tego zestawu sprawiało przyjemność. Silnik wygląda jak prawdziwy. Drzwi otwierają się jednocześnie przy przyciśnięciu guzika. Cieplutko polecam każdemu, świetna zabawa i doskonały model na półkę.",
              date: "2021-08-01",
              rating: 6,
            },
            {
              author: "Arek",
              body: "Przepiękny zestaw, przepięknie zapakowany, czuć ekskluzywność.\nMożna się bawić, można podziwiać na półce. Bardzo przyjemnie się budowało, najpierw syn, następnie ja. Pozdrawiam i polecam.",
              date: "2021-09-28",
              rating: 6,
            },
          ],
        },
      },
      {
        html: loadProductHtml(
          "712247-akcesorium-do-stacji-zasilania-ecoflow-panel-fotowoltaiczny-110w"
        ),
        result: {
          id: "712247",
          brand: "Ecoflow",
          codes: [],
          image: [
            "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/2/pr_2022_2_24_12_2_49_472_00.jpg",
            "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2022/2/pr_2022_2_24_12_2_49_472_00.jpg",
            "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/2/pr_2022_2_24_11_55_34_252_05.jpg",
            "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2022/2/pr_2022_2_24_11_55_34_252_05.jpg",
            "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/2/pr_2022_2_24_11_55_32_424_04.jpg",
            "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2022/2/pr_2022_2_24_11_55_32_424_04.jpg",
            "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/2/pr_2022_2_24_11_55_28_644_02.jpg",
            "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2022/2/pr_2022_2_24_11_55_28_644_02.jpg",
            "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/2/pr_2022_2_24_11_55_30_690_03.jpg",
            "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2022/2/pr_2022_2_24_11_55_30_690_03.jpg",
          ],
          label: [
            "od: Ecoflow",
            "kod producenta: EFSOLAR110W",
            "kod x-kom: 712247",
          ],
          links: ["Czasowo niedostępny"],
          price: ["1599,00 zł"],
          proms: [
            "kup ten produkt",
            "i dobierz dysk zewnętrzny Crucial X6 500GB - 60 zł taniej",
          ],
          stars: "(1 opinia)",
          title: "Ecoflow Panel fotowoltaiczny 110W",
          url: "https://www.x-kom.pl/p/712247-akcesorium-do-stacji-zasilania-ecoflow-panel-fotowoltaiczny-110w.html",
          reviews: [
            {
              author: "SMH",
              body: `Nie będę ukrywał, że im więcej W ma panel \"przenośny\" generować tym więcej musi ważyć. Przenoszenie i rozkładanie wymaga trochę wysiłku, ale warto.
Przy bezchmurnym niebie udało się generować około 140W do Ecoflow River.`,
              date: "2022-07-26",
              rating: 6,
            },
          ],
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
});
