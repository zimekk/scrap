import { loadProductHtml } from "../../../utils";
import { fromHtml } from "../utils";

describe("ProductEf3mService", () => {
  xit("fromHtml", () =>
    [
      {
        html: loadProductHtml("EXCEL-noz-K1--122"),
        result: {
          brand: "Excel",
          codes: [],
          id: "122",
          image: [
            "https://www.ef3m.pl/userdata/public/gfx/412cf0a65f4d90691599e296cde0bf43.jpg",
          ],
          label: [],
          links: [],
          price: ["12.90"],
          proms: [],
          stars: "",
          title: "EXCEL - nóż K1",
          url: "https://www.ef3m.pl/pl/p/EXCEL-noz-K1-/122",
        },
      },
      {
        html: loadProductHtml("Mata-do-ciecia-A3-ze-skala--785"),
        result: {
          brand: "Excel",
          codes: [],
          id: "785",
          image: [
            "https://www.ef3m.pl/userdata/public/gfx/9153/SH-PKN6002.jpg",
            "https://www.ef3m.pl/userdata/public/gfx/79c836f5fdbb2f6e8b16aa255822fd9d.jpg",
          ],
          label: [],
          links: [],
          price: ["56.00"],
          proms: [],
          stars: "",
          title: "Mata do cięcia A3 ze skalą",
          url: "https://www.ef3m.pl/pl/p/Mata-do-ciecia-A3-ze-skala-/785",
        },
      },
    ].forEach(({ html, result }) => expect(fromHtml(html)).toEqual(result)));
});
