import { loadProductHtml } from "../../../utils";
import { fromHtml } from "../utils";

describe("ProductEquipService", () => {
  xit("fromHtml", () =>
    [
      {
        html: loadProductHtml(
          "product-pol-63775-Plecak-Fjallraven-Kanken-fog-pink"
        ),
        result: {
          brand: "Fjallraven",
          codes: [],
          id: "mpn:23510-021-312",
          image: [
            "https://equip.pl/pol_pl_Plecak-Fjallraven-Kanken-fog-pink-63775_1.jpg",
          ],
          label: [],
          links: [],
          price: ["343.00"],
          proms: [],
          reviews: [
            {
              author: "Agnieszka, Rokietnica",
              body: "Super, córka bardzo zadowolona. Przesyłka natychmiastowa.",
              date: "2001-01-01",
              rating: 5,
            },
            {
              author: "Stefania, Rytel",
              body: "plecak swietny mialam poprzedni 3 lata ale postanowialam zmineic poniewaz byl juz troche przetarty polecam wydac te pare stowek na ten plecak i miec na lata niz kupic jakis plecak ktory zaraz sue rozwalil przesylka tez jest bardzo szybka",
              date: "2001-01-01",
              rating: 5,
            },
            {
              author: "Karolina, Rzeszów",
              body: "Idealny miejski plecak. Świetnie się prezentuje dosłownie w każdej stylizacji. Mieści naprawdę dużo i co najważniejsze jest solidny. Wysyłka bardzo szybko. Polecam!",
              date: "2001-01-01",
              rating: 5,
            },
            {
              author: "Ewa, Warszawa",
              body: "Bardzo profesjonalna obsługa klienta! Złożyłam zamówienie online. Pomimo zbliżających się świąt, paczka doszła w niecałe 2 dni robocze. Produkt wysokiej jakości. Polecam!",
              date: "2001-01-01",
              rating: 5,
            },
            {
              author: "Justyna, Warszawa",
              body: "Kolor jest piękny, choć po zdjęciach myślałam, że będzie dużo ciemniejszy. Dla mnie idealny - liczyłam na taki różowy odcień po wyszukaniu innych zdjęć w internecie. Bardzo wygodne jest to, że suwak pozwala na naprawdę szerokie rozpięcie plecaka, więc łatwo się dostać nawet do rzeczy na samym dnie. Wygląda bosko, ale to chyba wszyscy wiedzą ;)",
              date: "2001-01-01",
              rating: 5,
            },
            {
              author: "Iwona, Radzymin",
              body: "Plecak świetny, kolor jak na zdjęciu, ładnie się prezentuje. 100% oryginalny. Dla 6-klasy mieści się wszystko co potrzebne. Dobry też na wycieczki jednodniowe. Zamówiłam plecak z dłuższym terminem realizacji - oczekiwano na dostawę. Wszystko odbyło się zgodnie z terminem podanym w zamówieniu. Kontakt ze sprzedawcą BDB+. POLECAM.",
              date: "2001-01-01",
              rating: 5,
            },
            {
              author: "Maciej, Zielonka",
              body: "Plecak idealny. Bardzo szybka wysyłka. Firma godna zaufania. POLECAM.",
              date: "2001-01-01",
              rating: 5,
            },
            {
              author: "Grażyna, Kraków",
              body: "Plecak fantastyczny. Przesyłka szybka i bezproblemowa. Polecam. Firma godna zaufania.",
              date: "2001-01-01",
              rating: 5,
            },
            {
              author: "Magdalena, Łódź",
              body: "Szybka sprawna przesyłka. Bezproblemowy kontakt ze sprzedawcą. Polecam",
              date: "2001-01-01",
              rating: 5,
            },
          ],
          stars: "",
          title: "Plecak Fjallraven Kanken - fog pink",
          url: "https://equip.pl/product-pol-63775-Plecak-Fjallraven-Kanken-fog-pink.html",
        },
      },
    ].forEach(({ html, result }) => expect(fromHtml(html)).toEqual(result)));
});
