import { loadProductHtml } from "../../../utils";
import { fromHtml } from "../utils";

describe("ProductMensaService", () => {
  xit("fromHtml", () =>
    [
      {
        html: loadProductHtml("wmf-blok-do-nozy-1880454500"),
        result: {
          brand: "WMF",
          codes: [],
          id: "1880454500",
          image: ["https://mensahome.eu/images/items/4086/40860_top.webp"],
          label: [],
          links: [],
          price: ["299.00"],
          proms: [],
          stars: "",
          title: "Blok do noży",
          url: "https://mensahome.eu/wmf-blok-do-nozy-1880454500",
        },
      },
    ].forEach(({ html, result }) => expect(fromHtml(html)).toEqual(result)));
});
