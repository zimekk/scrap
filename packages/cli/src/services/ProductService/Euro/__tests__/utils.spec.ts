import { loadProductHtml } from "../../../utils";
import { fromHtml } from "../utils";

describe("ProductEuroService", () => {
  xit("fromHtml", () =>
    [
      {
        html: loadProductHtml("zmywarki-do-zabudowy-siemens-iq300-sn63ex14ce"),
        result: {
          brand: "Siemens",
          codes: [],
          id: "1223396",
          image: [
            "https://www.euro.com.pl/foto/1/71215650281/2b0ac8b905e6aa6c0052fb3ec8bb10ba/siemens-iq300-sn63ex14ce,71215650281_2.jpg",
          ],
          label: [],
          links: [],
          price: ["2649.00"],
          proms: [],
          stars: "",
          title: "Siemens iQ300 SN63EX14CE",
          url: "https://www.euro.com.pl/zmywarki-do-zabudowy/siemens-iq300-sn63ex14ce.bhtml",
        },
      },
    ].forEach(({ html, result }) => expect(fromHtml(html)).toEqual(result)));
});
