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
          reviews: [
            {
              author: "Grzechu",
              body: "A ja wybrałem te kolumny w połączeniu z wzmacniaczem Nad C368 i subem B&amp;W ASW610. Mam spore pomieszczenie do odsłuchu, bo ma aż 35 metrów i do tego jest otwarte na kuchnię. Przy projektowaniu nie wziąłem niestety pod uwagę, że powinienem wygospodarować miejsce na kolumny podłogowe. W miejscu przeznaczonym na sprzęt audio/video mam długą półkę i tylko na niej mogą stać kolumny. Załoga salonu Top Hi-Fi pomogła mi temat rozwiązać właśnie w ten sposób, kupiłem Nada z modułami HDMI i Blu OS. Zestaw przy filmach jak i przy muzyce spisuje się świetnie, a obsługa Blu OS to czysta przyjemność.",
              date: "2021-02-04",
              rating: 5,
            },
            {
              author: "Grzechu",
              body: "Słuchałem tych kolumn w połączeniu z elektroniką Rotel, modelami A12, A14 i RA-1572. Dźwięk kosmos. Piękna barwa, słychać moc w dźwięku. Piękna przestrzeń. Gdzieś na forach internetowych czytałem, że Rotel z B&amp;W nie jest idealnym połączeniem, jednak nie można tak uogólniać. Te konkretne modele grają ze sobą genialnie i nawet obsługa salonu to potwierdzała. Jako źródło dokupiłem Bluesound Node 2i i tak przy niższych modelach Rotela (A12) grał lepiej z wyjść analogowych, tak tutaj zdecydowanie z przetwornika we wzmacniaczu było lepiej.",
              date: "2021-01-16",
              rating: 5,
            },
            {
              author: "Smok",
              body: "Piękna forma i wykończenie ze smakiem. Kolumny idealnie wpasowują się w dzisiejszy design. Jakość i grubość lakieru na wysokim poziomie. Piękna polerka. Maskownice na magnesach, co nie zaburza prostoty designu. Piękne dedykowane standy z możliwością przykręcenia kolumn. Tworzą z kolumnami jedną całość i wyglądają świetnie. Przewód głośnikowy można puścić w nodze. Kolumny zestawiłem z wzmacniaczem Rotel RA-1572. Dźwięk jest taki jak chciałem. Miękki, ale zarazem słychać dużo detali. Kolumny warto odstawić dalej od tylnej ściany. Scena jest wtedy ewidentnie głębsza.",
              date: "2020-09-15",
              rating: 5,
            },
            {
              author: "Robert",
              body: "Zakupiłem trochę na wyrost z amplitunerem Yamaha 803. Cena była wyśmienita tego zestawu. Muszę powiedzieć, że całkiem przyjemnie to gra. Stoi ten zestaw u mnie w małym pokoju i gra super. W salonie mam kolumny B&amp;W duże podłogowe 602 i mam porównanie. Te z zestawu grają dużo lepiej. W końcu to seria wyższa. Trochę bałem się gabarytów, jednak nawet bas jest dużo lepszej jakości. Samo wykończenie w lakierze fortepianowym na połysk robi bardzo pozytywne wrażenie. Dokupiłem tylko nogi dedykowane do tego modelu, model FS700. Do nich kolumny można przykręcić. Śruby i klucz jest w zestawie. No i w końcu w kolumnach B&amp;W jest osłonka na głośnik wysoko tonowy. Teraz dzieciaki już nic nie zepsują. W starych B&amp;W co pół roku musiałem zamawiać głośnik wysoko tonowy.",
              date: "2020-05-22",
              rating: 5,
            },
          ],
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
          reviews: [
            {
              author: "Manieek",
              body: "Świetne osiągi pod względem dźwięku, szczególnie że są to słuchawki bt. Pod względem ergonomii i funkcjonalności jest dobrze, ale px7 wyglądają tutaj o wiele lepiej. Ogólna ocena bardzo dobra ;)",
              date: "2019-12-30",
              rating: 5,
            },
            {
              author: "Lucas",
              body: "Ten model słuchawek jest dość &quot;świeży&quot; na rynku dlatego ciężko znaleźć o nim jakieś sensowne, rzetelne opinie. Dlatego postanowiłem z racji zbliżających się świąt wypróbować je, sprawdzić ich brzmienie i być może zrobić z nich prezent na święta dla siebie. Po przetestowaniu w salonie THF mogę powiedzieć że pod względem funkcjonalności świetnie, może nawet trochę lepiej o PXów (osobny przycisk do ANC) Pod względem dźwiękowym również dość podobnie, natomiast pod względem brzmienia niebo, a nawet dwa lepiej. Miękkie pady to doskonały ruch ze strony projektantów B&amp;W, zatem prezent na święta już znaleziony ;)",
              date: "2019-12-11",
              rating: 5,
            },
          ],
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
          reviews: [
            {
              author: "Jacenty",
              body: "Polecono mi te głośniki do instalacji Dolby Atmos w moim systemie kina domowego. Zestaw oparty na kolumnach z serii 600 od Bowersa. Te głośniki w roli sufitowych Atmos sprawdzają się bardzo dobrze i są w zupełności wystarczające w salonie 30m2. Fajnie uzupełniają ten dźwięk przestrzenny dodając fajnego tła no i oczywiście bardzo dobrze zgrywają się z całą resztą. Warto było kuć sufit pod okablowanie. Dla fanów kina Dolby Atmos obowiązkowy, jednak żeby był efekt to tylko takie głośniki, żadnych montowanych na kolumnach przednich. Efekt iluzoryczny, miałem okazję testować coś takiego u znajomego. Mizeria.",
              date: "2021-03-18",
              rating: 5,
            },
            {
              author: "Tom tom",
              body: "Grają u mnie w zestawie z Yamahą RX-A1080 i kolumnami B&amp;W 603. Używam ich w suficie jako głośników do Dolby Atmos. Jestem bardzo zadowolony z efektu jaki dają. Świetna piętrowość dźwięku. Warto je w suficie podwieszanym dookoła obłożyć watą. U mnie instalatorzy obłożyli je walcem z wełny PT80 o promieniu około 50 cm tworząc taką obudowę pod sufitem. Dzięki temu nie gra mi sufit. Wielkie podziękowania dla poznańskiego salonu za cenne wskazówki. Co do samych głośników, maskownice można pomalować osobno na dowolny kolor i wystają dosłownie kilka mm, więc głośniki wcale nie rzucają się w oczy, a robotę wykonują bardzo dobrze. Do Atmosa chyba wyżej iść nie trzeba, no chyba że mówimy o jakiś Hi-Endach.",
              date: "2020-03-27",
              rating: 5,
            },
            {
              author: "Witold",
              body: "Sprawdzają się w niskich korytarzach i niewielkich pomieszczeniach. Porządna średnica z elementem basowym - tak by je określił.",
              date: "2020-02-29",
              rating: 5,
            },
            {
              author: "Heniu",
              body: "Świetne głośniki do atmosa. Znakomicie budują przestrzeń i uzupełniają moje kino domowe.",
              date: "2020-02-20",
              rating: 5,
            },
            {
              author: "Rafcio",
              body: "Zamontowałem 2 w łazience, bo podobno wodoodporne. No i odpukać nic się nie dzieje. Grają czysto i dość głośno.",
              date: "2020-01-31",
              rating: 5,
            },
            {
              author: "Marcin K",
              body: "Do pomieszczeń typu łazienka, sauna w zupełności wystarczy. Na większych metrażach, warto wstawić kilka mniejszych niż jeden większy głośnik. Dźwięk wtedy rozchodzi się bardziej równomiernie.",
              date: "2019-10-09",
              rating: 5,
            },
            {
              author: "Witold",
              body: "Zakupiłem z przeznaczeniem do użytku na zewnątrz. Duże membrany, maskownice można malować. Pracują w altanie pod zadaszeniem bez zarzutu od ponad roku. Polecam.",
              date: "2019-09-30",
              rating: 5,
            },
          ],
        },
      },
    ].forEach(({ html, result }) => expect(fromHtml3(html)).toEqual(result)));
});
