import { loadProductHtml } from "../../../utils";
import { fromHtml } from "../utils";

describe("ProductElectroService", () => {
  xit("fromHtml", () =>
    [
      {
        html: loadProductHtml(
          "sport-i-rekreacja-akcesoria-do-rowerow-kaski-sportowe-kask-rowerowy-abus-macator-szary-szosowy-rozmiar-m"
        ),
        result: {
          brand: "ABUS",
          codes: [],
          id: "467332",
          image: [
            "https://www.electro.pl/media/cache/gallery/product/4/240/223/596/u7mzdzlv/images/36/3675160/ABUS-Macator-Czarny-Szosowy-rozmiar-M-bok-1.jpg",
            "https://www.electro.pl/media/cache/resolve/gallery/product/3/9/863/142/4bc2jb3h/images/36/3675160/ABUS-Macator-Czarny-Szosowy-rozmiar-M-przod-1.jpg?filters%5Bthumbnail%5D%5Bsize%5D%5B0%5D=500&filters%5Bthumbnail%5D%5Bsize%5D%5B1%5D=500&filters%5Bthumbnail%5D%5Bmode%5D=inset&filters%5Bbackground%5D%5Bsize%5D%5B0%5D=500&filters%5Bbackground%5D%5Bsize%5D%5B1%5D=500&filters%5Bbackground%5D%5Bcolor%5D=fff",
          ],
          label: [],
          links: [],
          price: ["189.99"],
          proms: [],
          stars: "",
          title: "Kask rowerowy ABUS Macator Szary Szosowy (rozmiar M)",
          url: "https://www.electro.pl/sport-i-rekreacja/akcesoria-do-rowerow/kaski-sportowe/kask-rowerowy-abus-macator-szary-szosowy-rozmiar-m",
        },
      },
    ].forEach(({ html, result }) => expect(fromHtml(html)).toEqual(result)));
});
