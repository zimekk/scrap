import { loadProductHtml } from "../../../utils";
import { fromHtml } from "../utils";

describe("ProductKompService", () => {
  xit("fromHtml", () =>
    [
      {
        html: loadProductHtml(
          "757888-lian-li-dan-cases-a4-h2o-x4-riser-pcie4-0-czarna"
        ),
        result: {
          brand: "Lian-Li",
          codes: [],
          id: "komputronik-757888",
          image: [
            "https://static.komputronik.pl/product-picture/5/OBGELI902-1.jpg",
          ],
          label: ["sku: OB-LIA-0055"],
          links: ["InStock"],
          price: ["769,00 zł"],
          proms: [],
          reviews: undefined,
          stars: "",
          title: "Lian Li DAN Cases A4-H2O X4, Riser PCIE4.0 czarna",
          url: "https://www.komputronik.pl/product/757888/lian-li-dan-cases-a4-h2o-x4-riser-pcie4-0-czarna.html",
        },
      },
      {
        html: loadProductHtml("692410-asus-rog-strix-b550-i-gaming"),
        result: {
          brand: "Asus",
          codes: [],
          id: "komputronik-692410",
          image: [
            "https://static.komputronik.pl/product-picture/5/PLROGSTRIXB550IG-1.jpg",
          ],
          label: ["sku: PL-AM4-ASU-068"],
          links: ["SoldOut"],
          price: ["1167,21 zł"],
          proms: [],
          reviews: undefined,
          stars: "",
          title: "ASUS ROG STRIX B550-I GAMING",
          url: "https://www.komputronik.pl/product/692410/asus-rog-strix-b550-i-gaming.html",
        },
      },
    ].forEach(({ html, result }) => expect(fromHtml(html)).toEqual(result)));
});
