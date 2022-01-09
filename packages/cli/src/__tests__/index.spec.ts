import {
  loadProductHtml,
  scrapOptions,
  scrapProduct,
  scrapPropertyList,
  scrapPropertyList1,
  scrapPropertyItem,
  scrapPropertyItem1,
} from "../utils";

describe("cli", () => {
  it("scrapOptions", () =>
    [
      {
        item: {},
        html: `

        <section id="v7668-vehicle_infos" >
        <div class="container">
          <table class="table table-lg-columns">
            <tbody>
            
              <tr>
                <th scope="row">Moc</th>
                <td>
                  
                    250KW
                  
                   / 
                  
                  340KM
                  
                </td>
              </tr>
            
            
              <tr>
                <th scope="row">Pojemność silnika</th>
                <td>2998cm3</td>
              </tr>
            
            
            </tbody>
            </table>
            </div>
            </section>
    

<section id="v22387-specifications" >
<div class="container">
<h2 class="h4 ">
Dane techniczne
</h2>
<table class="table table-lg-columns">
<tbody>
<tr>
<th scope="row">Typ nadwozia</th>
<td>Sedan</td>
</tr>
<tr>
<th scope="row">Typ napędu</th>
<td>Napęd na cztery koła</td>
</tr>
</tbody>
</table>
</div>
</section>
<section>
<h3 class="h5 ">
Wyposażenie zewnętrzne
</h3>
<div class="list-group-columns-wrapper">
<ul class="list-group list-group-sm list-group-flush columns-md-2">
<li class="list-group-item columns-avoid-break-inside">Izolacja termiczna i akustyczna szyb</li>
<li class="list-group-item columns-avoid-break-inside">Opony z funkcją jazdy awaryjnej Runflat</li>
</ul>
</div>
</section>
    `,
        result: {
          options: [
            "Moc\t250KW / 340KM",
            "Pojemność silnika\t2998cm3",
            "Typ nadwozia\tSedan",
            "Typ napędu\tNapęd na cztery koła",
            "Izolacja termiczna i akustyczna szyb",
            "Opony z funkcją jazdy awaryjnej Runflat",
          ],
        },
      },
    ].forEach(({ item, html, result }) =>
      expect(scrapOptions(item, html)).toEqual(result)
    ));

  xit("scrapProduct", () =>
    [
      {
        item: { id: "186950" },
        html: loadProductHtml(
          "186950-akcesorium-sieciowe-ubiquiti-zasilacz-poe-24v-24w-1a"
        ),
        result: {
          brand: "Ubiquiti",
          codes: [],
          id: "186950",
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
        item: { id: "576290" },
        html: loadProductHtml(
          "576290-klocki-lego-lego-technic-42115-lamborghini-sian-fkp-37"
        ),
        result: {
          brand: "LEGO",
          codes: [],
          id: "576290",
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
    ].forEach(({ item, html, result }) =>
      expect(scrapProduct(item, html)).toEqual(result)
    ));

  xit("scrapProduct.links", () =>
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
      expect(scrapProduct({ id: "" }, html).links).toEqual(result)
    ));

  xit("scrapPropertyList", () =>
    [
      {
        item: { id: "gratka" },
        html: loadProductHtml("gratka-nieruchomosci-podkowa-lesna-1"),
        result: {
          id: "gratka",
          items: [
            {
              id: 22807857,
              name: "item-22807857",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/22807857",
            },
            {
              id: 23424923,
              name: "item-23424923",
              href: "https://gratka.pl/nieruchomosci/dzialka-budowlana-podkowa-lesna/ob/23424923",
            },
            {
              id: 22587393,
              name: "item-22587393",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/22587393",
            },
            {
              id: 23265061,
              name: "item-23265061",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/23265061",
            },
            {
              id: 24200813,
              name: "item-24200813",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/24200813",
            },
            {
              id: 23265461,
              name: "item-23265461",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/23265461",
            },
            {
              id: 23265457,
              name: "item-23265457",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/23265457",
            },
            {
              id: 24355267,
              name: "item-24355267",
              href: "https://gratka.pl/nieruchomosci/nowy-dom-podkowa-lesna/ob/24355267",
            },
            {
              id: 24261309,
              name: "item-24261309",
              href: "https://gratka.pl/nieruchomosci/nowy-dom-podkowa-lesna/ob/24261309",
            },
            {
              id: 24248251,
              name: "item-24248251",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/24248251",
            },
            {
              id: 24201749,
              name: "item-24201749",
              href: "https://gratka.pl/nieruchomosci/nowy-dom-podkowa-lesna/ob/24201749",
            },
            {
              id: 24193747,
              name: "item-24193747",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna-ul-podlesna/ob/24193747",
            },
            {
              id: 24172377,
              name: "item-24172377",
              href: "https://gratka.pl/nieruchomosci/dzialka-budowlana-podkowa-lesna/ob/24172377",
            },
            {
              id: 24166589,
              name: "item-24166589",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/24166589",
            },
            {
              id: 24337957,
              name: "item-24337957",
              href: "https://gratka.pl/nieruchomosci/dzialka-budowlana-podkowa-lesna-ul-parkowa/ob/24337957",
            },
            {
              id: 24128121,
              name: "item-24128121",
              href: "https://gratka.pl/nieruchomosci/nowy-dom-podkowa-lesna/ob/24128121",
            },
            {
              id: 24101549,
              name: "item-24101549",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/24101549",
            },
            {
              id: 24055919,
              name: "item-24055919",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/24055919",
            },
            {
              id: 24023529,
              name: "item-24023529",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/24023529",
            },
            {
              id: 23957557,
              name: "item-23957557",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/23957557",
            },
            {
              id: 23844965,
              name: "item-23844965",
              href: "https://gratka.pl/nieruchomosci/nowy-dom-podkowa-lesna/ob/23844965",
            },
            {
              id: 23840223,
              name: "item-23840223",
              href: "https://gratka.pl/nieruchomosci/dzialka-budowlana-podkowa-lesna/ob/23840223",
            },
            {
              id: 23840209,
              name: "item-23840209",
              href: "https://gratka.pl/nieruchomosci/dzialka-budowlana-podkowa-lesna/ob/23840209",
            },
            {
              id: 23829359,
              name: "item-23829359",
              href: "https://gratka.pl/nieruchomosci/nowy-dom-podkowa-lesna/ob/23829359",
            },
            {
              id: 23775467,
              name: "item-23775467",
              href: "https://gratka.pl/nieruchomosci/nowy-dom-podkowa-lesna/ob/23775467",
            },
            {
              id: 23707903,
              name: "item-23707903",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/23707903",
            },
            {
              id: 23654093,
              name: "item-23654093",
              href: "https://gratka.pl/nieruchomosci/dzialka-budowlana-podkowa-lesna-ul-parkowa/ob/23654093",
            },
            {
              id: 23618089,
              name: "item-23618089",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/23618089",
            },
            {
              id: 23611077,
              name: "item-23611077",
              href: "https://gratka.pl/nieruchomosci/nowy-dom-podkowa-lesna/ob/23611077",
            },
            {
              id: 23531917,
              name: "item-23531917",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/23531917",
            },
            {
              id: 23444117,
              name: "item-23444117",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/23444117",
            },
            {
              id: 24289663,
              name: "item-24289663",
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/24289663",
            },
          ],
          nextPage: "https://gratka.pl/nieruchomosci/podkowa-lesna?page=2",
        },
      },
    ].forEach(({ item, html, result }) =>
      // Boolean(console.log(scrapPropertyList(item, html)))||
      expect(scrapPropertyList(item, html)).toEqual(result)
    ));

  xit("scrapPropertyList", () =>
    [
      {
        item: { id: "otodom" },
        html: loadProductHtml("otodom-dzialka-komorow_5600-1"),
        result: {
          id: "otodom",
          items: [
            {
              id: 55875684,
              name: "Usługowo-Mieszkaniowa, 1033 m², Komorów",
              href: "uslugowo-mieszkaniowa-1033-m-komorow-ID3MrOI",
            },
            {
              id: 62046081,
              name: "Działka 1 406 m² Komorów",
              href: "dzialka-1-406-m-komorow-ID4cl1f",
            },
            {
              id: 62625026,
              name: "Piękna działka budowlana Komorów",
              href: "piekna-dzialka-budowlana-komorow-ID4eLD4",
            },
            {
              id: 62265265,
              name: "Działka z linią brzegową i z pozwoleniem na budowę",
              href: "dzialka-z-linia-brzegowa-i-z-pozwoleniem-na-budowe-ID4dg2t",
            },
            {
              id: 62621923,
              name: "Atrakcyjna działka budowlana, niezadrzewiona!",
              href: "atrakcyjna-dzialka-budowlana-niezadrzewiona-ID4eKP1",
            },
            {
              id: 62339614,
              name: "Działka Budowlana Komorów",
              href: "dzialka-budowlana-komorow-ID4dznE",
            },
            {
              id: 61546914,
              name: "Atrakcyjna działka w Komorowie.",
              href: "atrakcyjna-dzialka-w-komorowie-ID4afaa",
            },
            {
              id: 62586946,
              name: "Rod-Komorów/zadrzewiona/domek/kołoWędkarskie",
              href: "rod-komorow-zadrzewiona-domek-kolowedkarskie-ID4eBIS",
            },
            {
              id: 62523350,
              name: "Piękna działka pod 2 bliźniaki w Komorowie",
              href: "piekna-dzialka-pod-2-blizniaki-w-komorowie-ID4elb8",
            },
            {
              id: 62514201,
              name: "Działka w Komorowie z zabudową mieszkalną",
              href: "dzialka-w-komorowie-z-zabudowa-mieszkalna-ID4eiNz",
            },
            {
              id: 62481487,
              name: "Rod-Komorów/20letnRododendron/domek/kołoWędkarskie",
              href: "rod-komorow-20letnrododendron-domek-kolowedkarskie-ID4eahW",
            },
            {
              id: 62433079,
              name: "Działka, 1 500 m², Komorów",
              href: "dzialka-1-500-m-komorow-ID4dXH9",
            },
            {
              id: 62433081,
              name: "Działka, 1 000 m², Komorów",
              href: "dzialka-1-000-m-komorow-ID4dXHb",
            },
            {
              id: 62265589,
              name: "Budowlana 3500 m2 Zalew Komorowski",
              href: "budowlana-3500-m2-zalew-komorowski-ID4dg7H",
            },
            {
              id: 62429653,
              name: "Działka, 3 500 m², Komorów",
              href: "dzialka-3-500-m-komorow-ID4dVNT",
            },
            {
              id: 62427907,
              name: "Duża działka w Komorowie",
              href: "duza-dzialka-w-komorowie-ID4dVlJ",
            },
            {
              id: 62411469,
              name: "Wszystkie media, 1.5km do Wkd",
              href: "wszystkie-media-1-5km-do-wkd-ID4dS4B",
            },
            {
              id: 62358866,
              name: "Komorów-Dla Szukających Ciszy I Pięknego Otoczenia",
              href: "komorow-dla-szukajacych-ciszy-i-pieknego-otoczenia-ID4dEoa",
            },
            {
              id: 62337786,
              name: "Komorów - piękna działka pod rezydencję.",
              href: "komorow-piekna-dzialka-pod-rezydencje-ID4dyUa",
            },
            {
              id: 62332831,
              name: "Atrakcyjna działka w Komorowie.",
              href: "atrakcyjna-dzialka-w-komorowie-ID4dxCf",
            },
            {
              id: 59033976,
              name: "Działka Komorów 1951mkw, ogrodzona, przy parku.",
              href: "dzialka-komorow-1951mkw-ogrodzona-przy-parku-ID3ZHqU",
            },
            {
              id: 61271218,
              name: "Działka Komorów,zabudowa rezydencjonalna.",
              href: "dzialka-komorow-zabudowa-rezydencjonalna-ID495rs",
            },
            {
              id: 62017140,
              name: "Piękna Działka W Komorowie",
              href: "piekna-dzialka-w-komorowie-ID4cdus",
            },
            {
              id: 61965316,
              name: "Komorów, piękna działka budowlana",
              href: "komorow-piekna-dzialka-budowlana-ID4c00A",
            },
            {
              id: 31887473,
              name: "Atrakcyjna działka Komorów Wieś",
              href: "atrakcyjna-dzialka-komorow-wies-ID29No5",
            },
            {
              id: 61812872,
              name: "Piękna działka budowlana 2.001 m2 w Komorowie.",
              href: "piekna-dzialka-budowlana-2-001-m2-w-komorowie-ID4bmlO",
            },
            {
              id: 61798340,
              name: "Najpiękniejsza działka w Komorowie 2001m2",
              href: "najpiekniejsza-dzialka-w-komorowie-2001m2-ID4bizq",
            },
            {
              id: 61791651,
              name: "Działka pod zabudowę jednorodzinną Rezydencjonalną",
              href: "dzialka-pod-zabudowe-jednorodzinna-rezydencjonalna-ID4bgPx",
            },
            {
              id: 61791650,
              name: "Działka pod zabudowę jednorodzinną Rezydencjonalną",
              href: "dzialka-pod-zabudowe-jednorodzinna-rezydencjonalna-ID4bgPv",
            },
            {
              id: 61652949,
              name: "Działka, 2 420 m², Komorów",
              href: "dzialka-2-420-m-komorow-ID4aGKp",
            },
            {
              id: 61616414,
              name: "Komorów działka 2511m2",
              href: "komorow-dzialka-2511m2-ID4axf8",
            },
            {
              id: 61544582,
              name: "Działka, 937 m², Komorów",
              href: "dzialka-937-m-komorow-ID4aeyy",
            },
            {
              id: 61544576,
              name: "Działka, 2 001 m², Komorów",
              href: "dzialka-2-001-m-komorow-ID4aeys",
            },
            {
              id: 61254976,
              name: "Działka, 912 m², Komorów",
              href: "dzialka-912-m-komorow-ID491du",
            },
            {
              id: 60920602,
              name: "Ostatnia taka działka w Komorowie 2500m2",
              href: "ostatnia-taka-dzialka-w-komorowie-2500m2-ID47Cem",
            },
            {
              id: 60920506,
              name: "Działka w cichej i spokojnej okolicy",
              href: "dzialka-w-cichej-i-spokojnej-okolicy-ID47CcO",
            },
          ],
          nextPage: "/pl/oferty/sprzedaz/dzialka/komorow_5600?page=2",
        },
      },
    ].forEach(({ item, html, result }) =>
      // Boolean(console.log(scrapPropertyList(item, html)))||
      expect(scrapPropertyList1(item, html)).toEqual(result)
    ));

  xit("scrapPropertyItem", () =>
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
      expect(scrapPropertyItem(item, html)).toEqual(result)
    ));

  xit("scrapPropertyItem.address", () =>
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
    ].forEach(({ html, result }) =>
      expect(scrapPropertyItem({ id: "" }, html).address).toEqual(result)
    ));

  xit("scrapPropertyItem.images", () =>
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
      expect(scrapPropertyItem({ id: "" }, html).images).toEqual(result)
    ));

  xit("scrapPropertyItem.description", () =>
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
      expect(scrapPropertyItem({ id: "" }, html).description).toEqual(result)
    ));

  xit("scrapPropertyItem1", () =>
    [
      {
        item: { id: "otodom-55875684" },
        html: loadProductHtml("otodom-55875684"),
        result: {
          id: "otodom-55875684",
          address: {
            lokalizacja_gmina: "Komorów",
            lokalizacja_region: "mazowieckie",
            lokalizacja_powiat: "pruszkowski",
            lokalizacja_miejscowosc: "Komorów",
            lokalizacja_kraj: "Polska",
          },
          canonical:
            "https://www.otodom.pl/pl/oferta/uslugowo-mieszkaniowa-1033-m-komorow-ID3MrOI.html",
          images: [
            "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InBqdHIzeWJxYThyYjEtQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.WkRwfzj0i8HdobgCSIbyP-jm501mArfMKqkQXMmZEBo/image;s=1280x1024;q=80",
            "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjlycHV6ZTZuYzB6aDEtQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.FGMAjjkipgvc5HNEXH-3pqKN8OxgcPEAu5DTpK7hUR0/image;s=1280x1024;q=80",
            "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Ind1MXJqN3BudW9qOTEtQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.aeqWQBOnCqT2BjbDqziM6CQNiVBhgIw03mxq31NUMU8/image;s=1280x1024;q=80",
            "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Im1ta2hjaGlnM2h4Mi1BUEwiLCJ3IjpbeyJmbiI6ImVudmZxcWUxYXk0azEtQVBMIiwicyI6IjE0IiwicCI6IjEwLC0xMCIsImEiOiIwIn1dfQ.kKIAJalU2XMguiScBskzbjYZWanyrzOQ9ryeneKbi1o/image;s=1280x1024;q=80",
            "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImhpeHB1ODNwODV2djMtQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.kQL649uhbVIc4189J0l1Zgms00reNhL0lKA-FdlUpug/image;s=1280x1024;q=80",
            "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InVuOXBwNXQ0MWN5aDItQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.OEijHbGwDBh7QI6-WrBqRfjzgsUj8UmJTuThdUEExwI/image;s=1280x1024;q=80",
            "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Im5hMG1pN3dhd2RpdTMtQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.PqHaMBOpPVAfWELf9U8NiMWffWYHEH1XZlDZ35yzTrY/image;s=1280x1024;q=80",
            "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Ijlvd2FjZGQ4NmUzMDMtQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.1FaV7HbzoS-rkUeCuXPBv6r2L75VJP60Toep-RUdRgQ/image;s=1280x1024;q=80",
            "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImRzczhyamhlMGV6MS1BUEwiLCJ3IjpbeyJmbiI6ImVudmZxcWUxYXk0azEtQVBMIiwicyI6IjE0IiwicCI6IjEwLC0xMCIsImEiOiIwIn1dfQ.praVScMdYTXY_fCE8wXI14B9-dE4hZdo6KhOm2twwLM/image;s=1280x1024;q=80",
          ],
          location: ["Komorów", "pruszkowski", "mazowieckie"],
          title: "Usługowo-Mieszkaniowa, 1033 m², Komorów",
          price: 790000,
          description: [
            "Na sprzedaż piękna działka budowlana, o powierzchni 500 m² położona blisko kolejki WKD w Komorowie. Działka ma przeznaczenie usługowo-mieszkaniowe. Dostępny procent zabudowy wynosi 30%.",
            "Jest to ostatnia działka położona w tak znakomitej lokalizacji. Znajduje się bowiem ok. 1 min. pieszo do stacji WKD Komorów, a co za tym idzie do całej infrastruktury. W pobliżu są sklepy, usługi, cukiernie, restauracje, przychodnia, apteka, przedszkola prywatne, kompleks szkół. W okolicy jest dostępny także Zalew Komorów na rzece Utracie, który jest rajem dla wędkarzy i ptaków.",
            "Działka położona jest przy cichej ulicy. Dookoła dominuje zabudowa jednorodzinna. Media są w drodze, aczkolwiek na działce znajduje się studnia głębinowa. Warto wspomnieć, że są tu niskie wody gruntowe, zatem można wybudować dom jednorodzinny podpiwniczony. ",
            "Ponieważ przeznaczenie działki jest pod zabudowę usługowo-mieszkaniową, zatem na parterze mogą być usługi, a do II piętra część mieszkaniowa. Dozwolona jest wysokość zabudowy do 12 m².",
            "Zapraszam zainteresowanych do kontaktu.",
          ],
          parameters: [],
        },
      },
    ].forEach(({ item, html, result }) =>
      // Boolean(console.log(scrapPropertyItem1(item, html)))||
      expect(scrapPropertyItem1(item, html)).toEqual(result)
    ));
});
