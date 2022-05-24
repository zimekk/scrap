import { loadProductHtml } from "../../../utils";
import { fromHtml } from "../utils";

describe("ProductMediaService", () => {
  xit("fromHtml", () =>
    [
      {
        html: loadProductHtml(
          "smartfony-i-zegarki-smartfony-smartfon-apple-iphone-12-5g-black-64gb"
        ),
        result: {
          brand: "APPLE",
          codes: [],
          id: "357324",
          image: [
            "https://www.mediaexpert.pl/media/cache/resolve/gallery/images/26/2607349/APPLE-iPhone-12-Czarny-Front.jpg",
            "https://www.mediaexpert.pl/media/cache/resolve/gallery/images/26/2607349/APPLE-iPhone-12-Czarny-Front2.jpg",
            "https://www.mediaexpert.pl/media/cache/resolve/gallery/images/26/2607349/APPLE-iPhone-12-Czarny-Skos.jpg",
            "https://www.mediaexpert.pl/media/cache/resolve/gallery/images/26/2607349/APPLE-iPhone-12-Czarny-Ekran.jpg",
            "https://www.mediaexpert.pl/media/cache/resolve/gallery/images/26/2607349/APPLE-iPhone-12-Czarny-Aparat.jpg",
            "https://www.mediaexpert.pl/media/cache/resolve/gallery/images/26/2607349/SMARTFON-TABLET-usluga.jpg",
          ],
          label: [],
          links: [],
          price: ["3499.00"],
          proms: [],
          stars: "",
          title: 'Smartfon APPLE iPhone 12 64GB 5G 6.1" Czarny MGJ53PM/A',
          url: "https://www.mediaexpert.pl/smartfony-i-zegarki/smartfony/smartfon-apple-iphone-12-5g-black-64gb",
        },
      },
    ].forEach(({ html, result }) => expect(fromHtml(html)).toEqual(result)));
});
