import { loadProductHtml } from "../../../utils";
import { fromHtml } from "../utils";

describe("ProductTourService", () => {
  xit("fromHtml", () =>
    [
      {
        html: loadProductHtml("211740-abus-youn-i-2.0-kask-jasnoczerwony"),
        result: {
          brand: "Abus",
          codes: [],
          id: "211740",
          image: [
            "https://www.rowertour.com/uploads/shop/2/1/2/5/3/1/abus-youn-i-2.0-kask-jasnoczerwony-1.jpg",
            "https://www.rowertour.com/uploads/shop/2/1/2/5/3/1/abus-youn-i-2.0-kask-jasnoczerwony-2.jpg",
            "https://www.rowertour.com/uploads/shop/2/1/2/5/3/1/abus-youn-i-2.0-kask-jasnoczerwony-3.jpg",
            "https://www.rowertour.com/uploads/shop/2/1/2/5/3/1/abus-youn-i-2.0-kask-jasnoczerwony-4.jpg",
            "https://www.rowertour.com/uploads/shop/2/1/2/5/3/1/abus-youn-i-2.0-kask-jasnoczerwony-5.jpg",
            "https://www.rowertour.com/uploads/shop/2/1/2/5/3/1/abus-youn-i-2.0-kask-jasnoczerwony-6.jpg",
            "https://www.rowertour.com/uploads/shop/2/1/2/5/3/1/abus-youn-i-2.0-kask-jasnoczerwony-7.jpg",
          ],
          label: [],
          links: [],
          price: ["236.22"],
          proms: [],
          stars: "",
          title: "Abus Youn I 2.0 Kask jasnoczerwony",
          url: "https://www.rowertour.com/p/211740/abus-youn-i-2.0-kask-jasnoczerwony",
        },
      },
    ].forEach(({ html, result }) => expect(fromHtml(html)).toEqual(result)));
});
