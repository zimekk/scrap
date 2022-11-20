import { loadProductHtml } from "../../../utils";
import { fromHtml } from "../utils";

describe("ProductRiffService", () => {
  xit("fromHtml", () =>
    [
      {
        html: loadProductHtml(
          "monitory-odsluchowe-52211-presonus-eris-e35-673454006388"
        ),
        result: {
          // brand: "PRESONUS",
          brand: "",
          codes: [],
          id: "riff-52211",
          image: [
            "https://riff.net.pl/35707-large_default/presonus-eris-e35.jpg",
            "https://riff.net.pl/35707-home_default/presonus-eris-e35.jpg",
            "https://riff.net.pl/35708-home_default/presonus-eris-e35.jpg",
            "https://riff.net.pl/35707-custom_large/presonus-eris-e35.jpg",
            "https://riff.net.pl/35707-medium_default/presonus-eris-e35.jpg?v2",
            "https://riff.net.pl/35708-medium_default/presonus-eris-e35.jpg?v2",
          ],
          label: ["EAN: 673454006388"],
          links: ["InStock"],
          price: ["469,00 PLN"],
          proms: [],
          stars: "",
          title: "PRESONUS ERIS E3.5",
          url: "https://riff.net.pl/monitory-odsluchowe/52211-presonus-eris-e35-673454006388.html",
        },
      },
      {
        html: loadProductHtml("sluchawki-nauszne-44286-akg-k-52-9002761038774"),
        result: {
          // brand: "AKG",
          brand: "",
          codes: [],
          id: "riff-44286",
          image: [
            "https://riff.net.pl/74654-large_default/akg-k-52.jpg",
            "https://riff.net.pl/74654-home_default/akg-k-52.jpg",
            "https://riff.net.pl/10924-home_default/akg-k-52.jpg",
            "https://riff.net.pl/10925-home_default/akg-k-52.jpg",
            "https://riff.net.pl/74654-custom_large/akg-k-52.jpg",
            "https://riff.net.pl/74654-medium_default/akg-k-52.jpg?v2",
            "https://riff.net.pl/10924-medium_default/akg-k-52.jpg?v2",
            "https://riff.net.pl/10925-medium_default/akg-k-52.jpg?v2",
          ],
          label: ["EAN: 9002761038774"],
          links: ["InStock"],
          price: ["189,00 PLN"],
          proms: [],
          stars: "",
          title: "AKG K-52 słuchawki nauszne",
          url: "https://riff.net.pl/sluchawki-nauszne/44286-akg-k-52-9002761038774.html",
        },
      },
    ].forEach(({ html, result }) => expect(fromHtml(html)).toEqual(result)));
});
