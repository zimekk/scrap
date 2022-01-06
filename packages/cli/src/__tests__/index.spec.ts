import {
  loadProductHtml,
  scrapOptions,
  scrapProduct,
  scrapPropertyList,
  scrapPropertyItem,
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

  xit("scrapPropertyList", () =>
    [
      {
        item: { id: "gratka" },
        html: loadProductHtml("gratka-nieruchomosci-podkowa-lesna-1"),
        result: {
          id: "gratka",
          items: [
            {
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/22807857",
              name: "item-22807857",
            },
            {
              href: "https://gratka.pl/nieruchomosci/dzialka-budowlana-podkowa-lesna/ob/23424923",
              name: "item-23424923",
            },
            {
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/22587393",
              name: "item-22587393",
            },
            {
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/23265061",
              name: "item-23265061",
            },
            {
              href: "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/24200813",
              name: "item-24200813",
            },
            {
              href: "https://gratka.pl/nieruchomosci/nowy-dom-podkowa-lesna/ob/24355267",
              name: "item-24355267",
            },
            {
              href: "https://gratka.pl/nieruchomosci/nowy-dom-podkowa-lesna/ob/24261309",
              name: "item-24261309",
            },
          ],
          nextPage: "https://gratka.pl/nieruchomosci/podkowa-lesna?page=2",
        },
      },
    ].forEach(({ item, html, result }) =>
      expect(scrapPropertyList(item, html)).toEqual(result)
    ));

  xit("scrapPropertyItem", () =>
    [
      {
        item: { id: "22587393" },
        html: loadProductHtml("gratka-item-22587393"),
        result: {
          id: "22587393",
          canonical:
            "https://gratka.pl/nieruchomosci/dom-podkowa-lesna/ob/22587393",
          images: [
            "https://d-gr.cdngr.pl/kadry/k/r/gr-ogl/a6/31/22587393_686848463_dom-podkowa-lesna_xlarge.jpg",
          ],
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
});
