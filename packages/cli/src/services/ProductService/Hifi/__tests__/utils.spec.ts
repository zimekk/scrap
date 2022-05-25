import { loadProductHtml } from "../../../utils";
import { fromHtml } from "../utils";

describe("ProductHifiService", () => {
  xit("fromHtml", () =>
    [
      {
        html: loadProductHtml("multiroom-musiccast-yamaha-musiccast-r-n402d"),
        result: {
          brand: "Yamaha",
          codes: [],
          id: "10654",
          image: [
            "https://www.tophifi.pl/media/catalog/product/cache/c76cfc952dbe1a24abf7200506210ae9/m/u/musiccast-r-n402d-mc-av.png",
          ],
          label: ["od: Yamaha", "sku: 10654"],
          links: [
            "Produkt chwilowo niedostępny",
            "Odbiór w salonie: Prosimy o kontakt",
            "Darmowa dostawa",
            "Rata 20 x 0%",
          ],
          price: [],
          proms: [],
          reviews: [
            {
              author: "Miko",
              body: "Amplituner spełnił moje oczekiwania godny polecenia.",
              date: "2019-05-04",
              rating: 5,
            },
            {
              author: "Karo",
              body: "Potrzebowałem sprzętu do małego pokoju, który jednak będzie mógł dobrze napędzić moje Bowersy 607 które są małe, ale dość prądożerne. Mój poprzedni sprzęt nie dawał sobie z nimi rady więc potrzebowałem czegoś mocniejszego, z dodatkowymi funkcjami sieciowymi. Po pierwszym odsłuchu mogę śmiało stwierdzić że 402 się sprawdziła, gra bardzo ciepło, co jest miłe dla ucha. Dodatkowo skonfigurowałem go w musiccaście i teraz wszystkim steruje przez Mój telefon. Świetny sprzęt!",
              date: "2019-11-12",
              rating: 5,
            },
            {
              author: "Maniuk",
              body: "Musiccast przez którego sterujemy to urządzenie wymiata. Sam amplituner przeznaczony raczej do monitorów, ale ja używam go w połączeniu z Notami 550, i daje radę ;)",
              date: "2019-12-31",
              rating: 5,
            },
            {
              author: "Szymon",
              body: "Podstawowy amplituner stereo z funkcjami sieciowymi. Nadaje się do niewielkich pomieszczeń, maks 20m. Gra nieźle, zwłaszcza jeśli słuchasz dużo muzyki z sieci. Charakter dźwięku typowy dla Yamahy - dużo środka i basu, tonów wysokich mało. Oczywiście preset dźwiękowy można wyłączyć funkcją PureDirect. Polecam.",
              date: "2020-02-28",
              rating: 5,
            },
          ],
          stars: "Ocena: 5 z 5 (4 opinie)",
          title: "MusicCast R-N402D",
          url: "https://www.tophifi.pl/multiroom/musiccast/yamaha-musiccast-r-n402d.html",
        },
      },
      {
        html: loadProductHtml(
          "glosniki/glosniki-podstawkowe/bowers-wilkins-706-s2-czarny-polysk"
        ),
        result: {
          id: "fp-38881",
          url: "https://www.tophifi.pl/glosniki/glosniki-podstawkowe/bowers-wilkins-706-s2-czarny-polysk.html",
          title: "706 S2 czarny połysk",
          brand: "Bowers & Wilkins",
          image: [
            "https://www.tophifi.pl/media/catalog/product/cache/c76cfc952dbe1a24abf7200506210ae9/b/o/bowers-wilkins-706-s2-bl_2.png",
          ],
          stars: "Ocena: 5 z 5 (5 opinii)",
          price: ["3 799 zł"],
          links: [
            "Wysyłka: w ciągu 24h",
            "Produkt chwilowo niedostępny",
            "Odbiór w salonie: już za godzinę",
            "Darmowa dostawa",
            "Rata 20 x 0% tylko 190 zł",
          ],
          label: ["od: Bowers & Wilkins", "sku: FP 38881", "kod: 714346329410"],
          proms: [],
          codes: [],
          reviews: [
            {
              author: "Grzechu",
              body: "A ja wybrałem te kolumny w połączeniu z wzmacniaczem Nad C368 i subem B&amp;W ASW610. Mam spore pomieszczenie do odsłuchu, bo ma aż 35 metrów i do tego jest otwarte na kuchnię. Przy projektowaniu nie wziąłem niestety pod uwagę, że powinienem wygospodarować miejsce na kolumny podłogowe. W miejscu przeznaczonym na sprzęt audio/video mam długą półkę i tylko na niej mogą stać kolumny. Załoga salonu Top Hi-Fi pomogła mi temat rozwiązać właśnie w ten sposób, kupiłem Nada z modułami HDMI i Blu OS. Zestaw przy filmach jak i przy muzyce spisuje się świetnie, a obsługa Blu OS to czysta przyjemność.",
              date: "2021-02-04",
              rating: 5,
            },
            {
              author: "Grzechu",
              body: "Słuchałem tych kolumn w połączeniu z elektroniką Rotel, modelami A12, A14 i RA-1572. Dźwięk kosmos. Piękna barwa, słychać moc w dźwięku. Piękna przestrzeń. Gdzieś na forach internetowych czytałem, że Rotel z B&amp;W nie jest idealnym połączeniem, jednak nie można tak uogólniać. Te konkretne modele grają ze sobą genialnie i nawet obsługa salonu to potwierdzała. Jako źródło dokupiłem Bluesound Node 2i i tak przy niższych modelach Rotela (A12) grał lepiej z wyjść analogowych, tak tutaj zdecydowanie z przetwornika we wzmacniaczu było lepiej.",
              date: "2021-01-16",
              rating: 5,
            },
            {
              author: "Smok",
              body: "Piękna forma i wykończenie ze smakiem. Kolumny idealnie wpasowują się w dzisiejszy design. Jakość i grubość lakieru na wysokim poziomie. Piękna polerka. Maskownice na magnesach, co nie zaburza prostoty designu. Piękne dedykowane standy z możliwością przykręcenia kolumn. Tworzą z kolumnami jedną całość i wyglądają świetnie. Przewód głośnikowy można puścić w nodze. Kolumny zestawiłem z wzmacniaczem Rotel RA-1572. Dźwięk jest taki jak chciałem. Miękki, ale zarazem słychać dużo detali. Kolumny warto odstawić dalej od tylnej ściany. Scena jest wtedy ewidentnie głębsza.",
              date: "2020-09-15",
              rating: 5,
            },
            {
              author: "Robert",
              body: "Zakupiłem trochę na wyrost z amplitunerem Yamaha 803. Cena była wyśmienita tego zestawu. Muszę powiedzieć, że całkiem przyjemnie to gra. Stoi ten zestaw u mnie w małym pokoju i gra super. W salonie mam kolumny B&amp;W duże podłogowe 602 i mam porównanie. Te z zestawu grają dużo lepiej. W końcu to seria wyższa. Trochę bałem się gabarytów, jednak nawet bas jest dużo lepszej jakości. Samo wykończenie w lakierze fortepianowym na połysk robi bardzo pozytywne wrażenie. Dokupiłem tylko nogi dedykowane do tego modelu, model FS700. Do nich kolumny można przykręcić. Śruby i klucz jest w zestawie. No i w końcu w kolumnach B&amp;W jest osłonka na głośnik wysoko tonowy. Teraz dzieciaki już nic nie zepsują. W starych B&amp;W co pół roku musiałem zamawiać głośnik wysoko tonowy.",
              date: "2020-05-22",
              rating: 5,
            },
          ],
        },
      },
      {
        html: loadProductHtml(
          "sluchawki/sluchawki-z-redukcja-szumow/bowers-wilkins-px5-space-grey"
        ),
        result: {
          id: "fp-41173",
          url: "https://www.tophifi.pl/sluchawki/sluchawki-z-redukcja-szumow/bowers-wilkins-px5-space-grey.html",
          title: "PX5 space grey",
          brand: "Bowers & Wilkins",
          image: [
            "https://www.tophifi.pl/media/catalog/product/cache/c76cfc952dbe1a24abf7200506210ae9/b/o/bowers-wilkins-px5-space-grey-angle-redukcja-slu-nau-roku.png",
          ],
          stars: "Ocena: 5 z 5 (3 opinie)",
          price: ["1 111 zł"],
          links: [
            "Wysyłka: w ciągu 24h",
            "Produkt chwilowo niedostępny",
            "Odbiór w salonie: już za godzinę",
            "Darmowa dostawa",
            "Rata 20 x 0% tylko 56 zł",
          ],
          label: ["od: Bowers & Wilkins", "sku: FP 41173", "kod: 714346332366"],
          proms: [],
          codes: [],
          reviews: [
            {
              author: "Manieek",
              body: "Świetne osiągi pod względem dźwięku, szczególnie że są to słuchawki bt. Pod względem ergonomii i funkcjonalności jest dobrze, ale px7 wyglądają tutaj o wiele lepiej. Ogólna ocena bardzo dobra ;)",
              date: "2019-12-30",
              rating: 5,
            },
            {
              author: "Lucas",
              body: "Ten model słuchawek jest dość &quot;świeży&quot; na rynku dlatego ciężko znaleźć o nim jakieś sensowne, rzetelne opinie. Dlatego postanowiłem z racji zbliżających się świąt wypróbować je, sprawdzić ich brzmienie i być może zrobić z nich prezent na święta dla siebie. Po przetestowaniu w salonie THF mogę powiedzieć że pod względem funkcjonalności świetnie, może nawet trochę lepiej o PXów (osobny przycisk do ANC) Pod względem dźwiękowym również dość podobnie, natomiast pod względem brzmienia niebo, a nawet dwa lepiej. Miękkie pady to doskonały ruch ze strony projektantów B&amp;W, zatem prezent na święta już znaleziony ;)",
              date: "2019-12-11",
              rating: 5,
            },
          ],
        },
      },
      {
        html: loadProductHtml("glosniki/glosniki-instalacyjne/ccm-362"),
        result: {
          id: "1632",
          url: "https://www.tophifi.pl/glosniki/glosniki-instalacyjne/ccm-362.html",
          title: "CCM362",
          brand: "Bowers & Wilkins",
          image: [
            "https://www.tophifi.pl/media/catalog/product/cache/c76cfc952dbe1a24abf7200506210ae9/8/b/8b1dd4ec.png",
          ],
          stars: "Ocena: 5 z 5 (7 opinii)",
          price: [],
          links: [
            "Produkt chwilowo niedostępny",
            "Odbiór w salonie: Prosimy o kontakt",
            "Darmowa dostawa",
            "Rata 20 x 0%",
          ],
          label: ["od: Bowers & Wilkins", "sku: 1632"],
          proms: [],
          codes: [],
          reviews: [
            {
              author: "Jacenty",
              body: "Polecono mi te głośniki do instalacji Dolby Atmos w moim systemie kina domowego. Zestaw oparty na kolumnach z serii 600 od Bowersa. Te głośniki w roli sufitowych Atmos sprawdzają się bardzo dobrze i są w zupełności wystarczające w salonie 30m2. Fajnie uzupełniają ten dźwięk przestrzenny dodając fajnego tła no i oczywiście bardzo dobrze zgrywają się z całą resztą. Warto było kuć sufit pod okablowanie. Dla fanów kina Dolby Atmos obowiązkowy, jednak żeby był efekt to tylko takie głośniki, żadnych montowanych na kolumnach przednich. Efekt iluzoryczny, miałem okazję testować coś takiego u znajomego. Mizeria.",
              date: "2021-03-18",
              rating: 5,
            },
            {
              author: "Tom tom",
              body: "Grają u mnie w zestawie z Yamahą RX-A1080 i kolumnami B&amp;W 603. Używam ich w suficie jako głośników do Dolby Atmos. Jestem bardzo zadowolony z efektu jaki dają. Świetna piętrowość dźwięku. Warto je w suficie podwieszanym dookoła obłożyć watą. U mnie instalatorzy obłożyli je walcem z wełny PT80 o promieniu około 50 cm tworząc taką obudowę pod sufitem. Dzięki temu nie gra mi sufit. Wielkie podziękowania dla poznańskiego salonu za cenne wskazówki. Co do samych głośników, maskownice można pomalować osobno na dowolny kolor i wystają dosłownie kilka mm, więc głośniki wcale nie rzucają się w oczy, a robotę wykonują bardzo dobrze. Do Atmosa chyba wyżej iść nie trzeba, no chyba że mówimy o jakiś Hi-Endach.",
              date: "2020-03-27",
              rating: 5,
            },
            {
              author: "Witold",
              body: "Sprawdzają się w niskich korytarzach i niewielkich pomieszczeniach. Porządna średnica z elementem basowym - tak by je określił.",
              date: "2020-02-29",
              rating: 5,
            },
            {
              author: "Heniu",
              body: "Świetne głośniki do atmosa. Znakomicie budują przestrzeń i uzupełniają moje kino domowe.",
              date: "2020-02-20",
              rating: 5,
            },
            {
              author: "Rafcio",
              body: "Zamontowałem 2 w łazience, bo podobno wodoodporne. No i odpukać nic się nie dzieje. Grają czysto i dość głośno.",
              date: "2020-01-31",
              rating: 5,
            },
            {
              author: "Marcin K",
              body: "Do pomieszczeń typu łazienka, sauna w zupełności wystarczy. Na większych metrażach, warto wstawić kilka mniejszych niż jeden większy głośnik. Dźwięk wtedy rozchodzi się bardziej równomiernie.",
              date: "2019-10-09",
              rating: 5,
            },
            {
              author: "Witold",
              body: "Zakupiłem z przeznaczeniem do użytku na zewnątrz. Duże membrany, maskownice można malować. Pracują w altanie pod zadaszeniem bez zarzutu od ponad roku. Polecam.",
              date: "2019-09-30",
              rating: 5,
            },
          ],
        },
      },
    ].forEach(({ html, result }) => expect(fromHtml(html)).toEqual(result)));
});
