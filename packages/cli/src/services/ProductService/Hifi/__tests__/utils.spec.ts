import { loadProductHtml } from "../../../utils";
import { fromHtml, parseJson } from "../utils";

describe("ProductHifiService", () => {
  it("parseJson", () =>
    [
      {
        text: `
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "A26",
  "image": "https://www.tophifi.pl/media/catalog/product/cache/c76cfc952dbe1a24abf7200506210ae9/a/u/audio-pro-a26-bl.png",
  "brand": {
      "@type": "Thing",
      "name": "Audio Pro"
  },
   "sku": "100990001409",
   "description": "
// 









Znakomity dźwięk dla telewizora w kompaktowych rozmiarach
A26 to podstawkowe kolumny głośnikowe typu all-in-one, w kt&oacute;rych skumulowano 40 lat doświadczenia w tworzeniu zaawansowanych konstrukcji audio. Efektem są głośniki, kt&oacute;re zapewniają imponujące wrażenia brzmieniowe z telewizora, jednocześnie gwarantując mocniejszy i pełniejszy dźwięk niż ten, kt&oacute;ry dostarczany jest z tradycyjnego soundbara.



















Multiroom &ndash; muzyka we wszystkich pomieszczeniach
A26 bez trudu można wykorzystać jako komponent domowego systemu multiroom &ndash; wystarczy, że połączysz bezprzewodowo głośniki rozstawione w r&oacute;żnych pokojach w jedną lub kilka grup, aby cieszyć się wspaniałym dźwiękiem w całym domu czy w kilku pomieszczeniach jednocześnie. Każdy z użytkownik&oacute;w ma także indywidualny dostęp do swojej ulubionej muzyki, jako że wszystkimi głośnikami multiroom można sterować w pełni niezależnie.





Brzmienie dopasowane do własnych preferencji
Konstruktorzy Audio Pro zadbali o to, aby jak najbardziej ułatwić użytkownikowi precyzyjne dopasowanie brzmienia do własnych preferencji. W tym celu opracowana została specjalna aplikacja Audio Pro Control &ndash; dostępna na smartfony oraz tablety z iOS/Android. Za jej pomocą możliwe jest dokładne dostrojenie charakterystyki brzmienia, regulacja bas&oacute;w i sopran&oacute;w czy włączenie wirtualnego dźwięku przestrzennego (tylko dla wejścia ARC).







Prawdziwy dźwięk w jakości hi-fi
Model A26 stanowi połączenie cech i funkcji kompletnego rozwiązania audio do domowej rozrywki. Łączność bezprzewodowa Bluetooth aptX pozwala z łatwością przesyłać do kolumn dźwięk wprost z urządzeń mobilnych. Istnieje r&oacute;wnież możliwość odtwarzania muzyki z serwis&oacute;w on-line, natomiast chcąc podłączyć do A26 zewnętrzne źr&oacute;dło dźwięku &ndash; np. gramofon lub odtwarzacz CD &ndash; wystarczy użyć wejścia analogowego.







Komfort sterowania
Wraz z kolumnami dostarczany jest pilot zdalnego sterowania, kt&oacute;ry ułatwia obsługę odtwarzania, głośności i wyboru źr&oacute;deł. Ponadto wyposażono go także w pięć przycisk&oacute;w szybkiego wyboru, do kt&oacute;rych wystarczy przypisać preferowaną stację radiową czy listę odtwarzania (np. ze Spotify), po czym przywołać ją za pośrednictwem jednego przycisku.





Złącze HDMI z obsługą ARC
Wygoda użytkowania A26 zwiększa złącze HDMI kompatybilne z ARC. Połączenie głośnik&oacute;w z dowolnym telewizorem obsługującym ARC otwiera możliwość sterowania nimi za pomocą pilota do telewizora.










Specyfikacja techniczna





Wzmacniacze i przetworniki
Wzmacniacz: cyfrowy Class D, 2 x 75W Głośnik wysokotonowy: 25 mm tekstylna kopułka Głośnik niskotonowy: 114 mm o długim skoku Membrany bierne: 2 &times; 165 mm



Wejścia
Standard Bluetooth 5.0 z kodekiem apth-X Low Latency Aux 3,5 mm Cyfrowe optyczne złącze TOSLink (tylko PCM) ARC/TV (tylko PCM)



Wyjścia
RCA Sub Out






Wymiary
W &times; S &times; G: 238 &times; 150 &times; 200 mm



Częstotliwość
Pasmo przenoszenia: 45 &ndash; 20 000 Hz Częstotliwość zwrotnicy: 2 800 Hz



Inne
Pilot zdalnego sterowania frezowany z litego aluminium. Uwaga! Uchwyt ścienny sprzedawany oddzielnie.


",
             "aggregateRating": {
      "@type": "AggregateRating",
      "bestRating": 5,
      "worstRating": 1,
      "ratingValue": "4.75",
      "reviewCount": "34",
      "itemReviewed": "A26"
  },
                               "review": [
               {
                      "@type": "Review",
                                                  "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5"
                      },
                       "name": "opinia",
                      "author": {
                        "@type": "Person",
                        "name": "Jacko"
                      },
                      "datePublished": "2022-02-28",
                      "reviewBody": "Dobrze brzmią, dźwięk całkiem czysty. Nie są zbyt duże co jest dla mnie plusem. Klasyczny desing. "
                  },                 {
                      "@type": "Review",
                                                  "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "2"
                      },
                       "name": "opinia",
                      "author": {
                        "@type": "Person",
                        "name": "Krzysztof"
                      },
                      "datePublished": "2022-01-22",
                      "reviewBody": "Naczytałem się samych dobrych opinii na temat tych głośników. Byłem już prawie zdecydowany żeby je kupić, ale udałem się do salonu w Kielcach żeby je odsłuchać. I tu czar prysł. Byłem bardzo zaskoczony i zawiedziony bardzo słabym &quot;odsłuchem&quot;. Od razu mówię, że to jest oczywiście moje zdanie i gust. A wiadomo że o gustach się nie dyskutuje. Jedno co mogę polecić każdemu, to żeby przed zakupem posłuchać jak brzmią te głośniki. Ja odpuściłem, bo dla mnie dźwięk z tych A26 brzmi słabo."
                  },                 {
                      "@type": "Review",
                                                  "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5"
                      },
                       "name": "opinia",
                      "author": {
                        "@type": "Person",
                        "name": "Gabriel"
                      },
                      "datePublished": "2021-12-31",
                      "reviewBody": "Dla mnie dźwiękowe i wizualne mistrzostwo świata! SOUNDBAR KILLERS !!! Czytałem o tym sprzęcie wiele pozytywnych opinii i nie do końca wierzyłem. Ale jak dokonałem odsłuchu w salonie Top-HiFi Video Design we Wrocławiu i porównałem z innymi sprzętami w cenie do 2500zl to mi szczęka opadła a butów szukałem przez kilka godzin. Ten zestaw Audio Pro A26 miażdży dźwiękowo wszystkie SOUNDBARY do 3000zl a może nawet droższe. Dźwięk jest żywiołowy, energiczny i nasycony. Dla mnie basy schodzą wystarczająco nisko, świetnie słychać wokale i dobre kontolowane są wysokie tony które nie męczą metalicznie przy długim sluchaniu. To niewiarygodne ale jak zamknąłem oczy i posłuchałem to mialem wrażenie grania dużo większych kolumn a nie takich mikrusów. Zajmują mało miejsca na półce pod telewizorem i doskonale komponują się w mieszkaniu. Do tego pilot to prawdziwe dzieło sztuki z litego aluminium. Aplikacja do kontroli oraz MultiRoom działa stabilnie. Apka jest przejrzysta, prosta i funkcjonalna. Do tego sprzęt ma HDMI z ARC dzięki czemu można kontolowac dźwięk z pilota TV. Dzięki strumieniowaniu muzyki przez WiFi z wbudowanych serwisów typu Spotify czy TIDAL lub radia internetowe uzyskujemy dużo lepsza jakość dźwięku niż przez stratny i skomprespwany Bluetooth. Do tego można wyłączyć smartfona a dźwięk nadal będzie grał. Nawet bez smartfona można nacisnąć zaprogramowane wcześniej w pamięci 5 stacji radiowych lub playlisty ze Spotify lub TIDAL i będzie grało. Ponadto można zaprogramować budzik muzyką o dowolnej porze dnia. Dla mnie ideał tym bardziej że pobierają mało prądu porównując z amplitunerami stereo lub kina domowego a także nawet w porownaniu z soundbarami wraz z subwooferami Bluetooth. Miałem budżet do 2500zl. Chciałem sprzęt w 30% do filmów z TV a w 70% do odsłuchu muzyki. Najpierw napaliłem się na popularne SOUNDBARY wybrałem nawet Yamaha Bar 400 który kupiłem na próbę w popularnym elektromarkecie i oddałem na drugi dzien bo mój stary 18-letni mini zestaw stereo DENON grał lepiej na wejściu analogowym z TV niż ten soundbar Yamaha. Potem w salonie we Wrocławiu zrobiłem odsłuch ponowny tego soundbara i było tak samo marnie. Na odsłuchu w salonie Hi-Fi porównywałem również jakość dźwięku z pełnowymiarowym amplitunerem Yamaha N402d w cenie za 2500zl - niestety ten amplituner zagrał z moimi kolumnami podstawkowymi JAMO bardzo słabo. Dźwięk z N402D był płaski bez wyrazu, bez ikry. Dopiero wzmacniacz zintegrowany NAD C338 za około 2600zl zabrał porównywalnie dobrze do A26 z moimi starymi monitorami Jamo. Ale ostatecznie o wyborze A26 zadecydowała cena oraz wygląd który jak wiadomo nie bryluje od lat w sprzęcie firmy NAD a przypomina więcej surowy miernik laboratoryjny niż piękny sprzęt audio hifi. Audio Pro A26 to prawdziwy dźwiękowy Soundbar Killers a nawet więcej bo Yamaha że swoim płaskim dźwiękiem nie ma do niego nawet podejścia. "
                  },                 {
                      "@type": "Review",
                                                  "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "3"
                      },
                       "name": "opinia",
                      "author": {
                        "@type": "Person",
                        "name": "Filip"
                      },
                      "datePublished": "2021-12-22",
                      "reviewBody": "Przekonany dużo liczbą pozytywnych opinii kupiłem te głośniki jednak zawiodłem się. Grają ładnie, jak na takie małe głośniki potrafią również wygenerować bass. Airplay, bluetooth, hdmi arc, wszystko działa, pojawia się pytanie czego można chcieć więcej? 

Tak więc, nie rozumiem dlaczego nikt nie zwraca uwagi na to, że te głośniki szumią.
Jeżeli ktoś słucha muzyki zawsze głośno to można je polecić, bo wtedy zagłuszymy szum :D 
Jednak wieczorem gdy wszystko ucichnie i chcemy cicho odpalić muzykę w tle, nie ma takiej opcji, więcej szumu niż muzyki, zatrzymamy muzykę na telefonie lub laptopie, muzyka ginie szum zostaje. (zatrzymanie muzyki dołączonym pilotem wyłącza również szum, sprytne). Przerwa miedzy utworami? szum.

Wydawać się może, że otrzymałem felerny egzemplarz? Nic bardziej mylnego, po kontakcie z jednym salonem zostałem poinformowany, że mam nieuziemiony prąd w gniazdku XD kolejny salon powiedział że te głośniki już tak mają ¯\_(ツ)_/¯.

Postanowiłem skontaktować się z producentem, który odpisał mi na zgłoszenie tak:

&quot;Hi,
Thanks for the mail.
It is normal the the speakers emits some white noise. ...&quot;

Następnie zapytałem, jaki poziom szumu jest akceptowalny oraz dlaczego nie informują o tym nigdzie jeżeli to jest feature tych głośników, oto odpowiedź:

&quot;Hi again,
It is nothing we can change with a software update.
It should not be audible after around 2-2.5 meters.
I&#039;m not aware of that we have an exact decibel number for the noise.

Best regards,

Audio Pro Tech Support Team&quot;

testując siedziałem ~5 metrów od głośników więc niestety nie ma magicznej bariery 2.5m która by zatrzymywała ten szum :(

Radzę przemyśleć te informację przed zakupem. Można powiedzieć komuś żeby usiadł w miejscu gdzie mają stać głośniki i ciągle do was szeptał bo gdy szumią, wydają 40dB dźwięku przy samym głośniku. Przy wyłączonych głośnikach poziom dźwięku wynosi 26dB więc różnica jest znaczna. (zmierzone telefonem więc wartości są przybliżone)

Dodatkowo gdy zbliżymy ucho do głośników, które są podłączone do prądu ale wyłączone, również usłyszymy delikatny szum.

tl;dr gdyby nie szum głośniki byłby idealne jak na swoje rozmiary i cene

Pozdrawiam"
                  },                 {
                      "@type": "Review",
                                                  "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5"
                      },
                       "name": "opinia",
                      "author": {
                        "@type": "Person",
                        "name": "Ajgor"
                      },
                      "datePublished": "2021-11-26",
                      "reviewBody": "Jak na głośniki, niespodziewane dobre brzmienie i można ustawić na naprawdę wysoką głośność, co prawda nie ma tu efektu pełnowymiarowych kolumn, ale jest co podziwiać i tak. Pozdrawiam."
                  },                 {
                      "@type": "Review",
                                                  "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5"
                      },
                       "name": "opinia",
                      "author": {
                        "@type": "Person",
                        "name": "Hassan"
                      },
                      "datePublished": "2021-10-07",
                      "reviewBody": "No w tej kwocie to próżno szukać coś sensowniejszego. Na tym zestawie można normalnie posłuchać muzyki. Ja jako basolub muszę przyznać, że bałem się, że bez suba nie dadzą rady, a tutaj się okazuje, że dają bez problemu. Żadne soundbary nie mają startu do tych głośniczków. Funkjconalnie tez jest bardzo dobrze. Radio internetowe, serwisy Spotify, Deezer, Tidal, Qobuz. AirPlay, bluetooth. Apka działa dobrze i jest bardzo intuicyjna. Kolumienki wykonane z dbałością o szczegóły. Mają nawet podklejone spody obudowy, aby się nie porysowały. Maskownice na magnesach, czysty front- to lubię. Kolor biały w satynie bardzo ładnie wpasował się w biało brązowe meble. Polecam"
                  },                 {
                      "@type": "Review",
                                                  "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5"
                      },
                       "name": "opinia",
                      "author": {
                        "@type": "Person",
                        "name": "Łukasz"
                      },
                      "datePublished": "2021-09-26",
                      "reviewBody": "Witam kupiłem A26 z subem sw10 i jestem mega zadowolony..."
                  },                 {
                      "@type": "Review",
                                                  "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5"
                      },
                       "name": "opinia",
                      "author": {
                        "@type": "Person",
                        "name": "Tomasz"
                      },
                      "datePublished": "2021-09-08",
                      "reviewBody": "Mam pytanie, czy takie głośniki można porównać do zestawu Sony MHC-NX3AV głośniki SS-NX1 ?"
                  },                 {
                      "@type": "Review",
                                                  "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5"
                      },
                       "name": "opinia",
                      "author": {
                        "@type": "Person",
                        "name": "Damian"
                      },
                      "datePublished": "2021-08-27",
                      "reviewBody": "Wiadomo, że nie jest to poziom grania amplitunera stereo kolumn pełnowymiarowych, jednak jako uniwersalne źródło dźwięku pod tv i do posłuchania muzyki nadaje się idealnie. Ja się na nie przesiadłem z soundbara, który kosztował więcej od Audio Pro a grał sporo gorzej! Tutaj słyszę stereo, poza tym dźwięk ma głębię. Mimo, iż nie ma subwoofera, to bas i tak jest lepszy niż miałem wcześniej. Sterowanie z tv działa, wystarczy podłączyć Audio Pro z tv po HDMI arc (u mnie to HDMI 2). Metalowy pilot dodatkowo sprawia pozytywne odczucia. "
                  },                 {
                      "@type": "Review",
                                                  "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5"
                      },
                       "name": "opinia",
                      "author": {
                        "@type": "Person",
                        "name": "Robert"
                      },
                      "datePublished": "2021-07-03",
                      "reviewBody": "Miał być soundbar z dobrym stereo, bo posłuchać muzyki też lubimy. Wybór padł jednak na Audio Pro z uwagi na dużo lepszy dźwięk właśnie przy odsłuchu muzyki. Może przy filmach aż takiego efektu jak np. w Yamasze BAR400 nie ma, jednak w stereo gra Audio Pro lepszą średnicą. Tak bardziej naturalnie. Funkcjonalnie też jest wszystko do grania z internetu. Apka jest spoko, nic się nie wiesza. Dla mnie nie audiofila gra to i działa bardzo dobrze. "
                  }                 ],
         "offers": {
      "@type": "Offer",
      "priceCurrency": "PLN",
      "url": "https://www.tophifi.pl/multiroom/audio-pro/audio-pro-a26.html",
      "availability": "https://schema.org/InStock",
"price": "1999.00"
}
}
`,
        result: {
          "@context": "https://schema.org/",
          "@type": "Product",
          aggregateRating: {
            "@type": "AggregateRating",
            bestRating: 5,
            itemReviewed: "A26",
            ratingValue: "4.75",
            reviewCount: "34",
            worstRating: 1,
          },
          brand: {
            "@type": "Thing",
            name: "Audio Pro",
          },
          description:
            "// Znakomity dźwięk dla telewizora w kompaktowych rozmiarachA26 to podstawkowe kolumny głośnikowe typu all-in-one, w kt&oacute;rych skumulowano 40 lat doświadczenia w tworzeniu zaawansowanych konstrukcji audio. Efektem są głośniki, kt&oacute;re zapewniają imponujące wrażenia brzmieniowe z telewizora, jednocześnie gwarantując mocniejszy i pełniejszy dźwięk niż ten, kt&oacute;ry dostarczany jest z tradycyjnego soundbara.Multiroom &ndash; muzyka we wszystkich pomieszczeniachA26 bez trudu można wykorzystać jako komponent domowego systemu multiroom &ndash; wystarczy, że połączysz bezprzewodowo głośniki rozstawione w r&oacute;żnych pokojach w jedną lub kilka grup, aby cieszyć się wspaniałym dźwiękiem w całym domu czy w kilku pomieszczeniach jednocześnie. Każdy z użytkownik&oacute;w ma także indywidualny dostęp do swojej ulubionej muzyki, jako że wszystkimi głośnikami multiroom można sterować w pełni niezależnie.Brzmienie dopasowane do własnych preferencjiKonstruktorzy Audio Pro zadbali o to, aby jak najbardziej ułatwić użytkownikowi precyzyjne dopasowanie brzmienia do własnych preferencji. W tym celu opracowana została specjalna aplikacja Audio Pro Control &ndash; dostępna na smartfony oraz tablety z iOS/Android. Za jej pomocą możliwe jest dokładne dostrojenie charakterystyki brzmienia, regulacja bas&oacute;w i sopran&oacute;w czy włączenie wirtualnego dźwięku przestrzennego (tylko dla wejścia ARC).Prawdziwy dźwięk w jakości hi-fiModel A26 stanowi połączenie cech i funkcji kompletnego rozwiązania audio do domowej rozrywki. Łączność bezprzewodowa Bluetooth aptX pozwala z łatwością przesyłać do kolumn dźwięk wprost z urządzeń mobilnych. Istnieje r&oacute;wnież możliwość odtwarzania muzyki z serwis&oacute;w on-line, natomiast chcąc podłączyć do A26 zewnętrzne źr&oacute;dło dźwięku &ndash; np. gramofon lub odtwarzacz CD &ndash; wystarczy użyć wejścia analogowego.Komfort sterowaniaWraz z kolumnami dostarczany jest pilot zdalnego sterowania, kt&oacute;ry ułatwia obsługę odtwarzania, głośności i wyboru źr&oacute;deł. Ponadto wyposażono go także w pięć przycisk&oacute;w szybkiego wyboru, do kt&oacute;rych wystarczy przypisać preferowaną stację radiową czy listę odtwarzania (np. ze Spotify), po czym przywołać ją za pośrednictwem jednego przycisku.Złącze HDMI z obsługą ARCWygoda użytkowania A26 zwiększa złącze HDMI kompatybilne z ARC. Połączenie głośnik&oacute;w z dowolnym telewizorem obsługującym ARC otwiera możliwość sterowania nimi za pomocą pilota do telewizora.Specyfikacja technicznaWzmacniacze i przetwornikiWzmacniacz: cyfrowy Class D, 2 x 75W Głośnik wysokotonowy: 25 mm tekstylna kopułka Głośnik niskotonowy: 114 mm o długim skoku Membrany bierne: 2 &times; 165 mmWejściaStandard Bluetooth 5.0 z kodekiem apth-X Low Latency Aux 3,5 mm Cyfrowe optyczne złącze TOSLink (tylko PCM) ARC/TV (tylko PCM)WyjściaRCA Sub OutWymiaryW &times; S &times; G: 238 &times; 150 &times; 200 mmCzęstotliwośćPasmo przenoszenia: 45 &ndash; 20 000 Hz Częstotliwość zwrotnicy: 2 800 HzInnePilot zdalnego sterowania frezowany z litego aluminium. Uwaga! Uchwyt ścienny sprzedawany oddzielnie.",
          image:
            "https://www.tophifi.pl/media/catalog/product/cache/c76cfc952dbe1a24abf7200506210ae9/a/u/audio-pro-a26-bl.png",
          name: "A26",
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            price: "1999.00",
            priceCurrency: "PLN",
            url: "https://www.tophifi.pl/multiroom/audio-pro/audio-pro-a26.html",
          },
          review: [
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Jacko",
              },
              datePublished: "2022-02-28",
              name: "opinia",
              reviewBody:
                "Dobrze brzmią, dźwięk całkiem czysty. Nie są zbyt duże co jest dla mnie plusem. Klasyczny desing. ",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Krzysztof",
              },
              datePublished: "2022-01-22",
              name: "opinia",
              reviewBody:
                "Naczytałem się samych dobrych opinii na temat tych głośników. Byłem już prawie zdecydowany żeby je kupić, ale udałem się do salonu w Kielcach żeby je odsłuchać. I tu czar prysł. Byłem bardzo zaskoczony i zawiedziony bardzo słabym &quot;odsłuchem&quot;. Od razu mówię, że to jest oczywiście moje zdanie i gust. A wiadomo że o gustach się nie dyskutuje. Jedno co mogę polecić każdemu, to żeby przed zakupem posłuchać jak brzmią te głośniki. Ja odpuściłem, bo dla mnie dźwięk z tych A26 brzmi słabo.",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "2",
              },
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Gabriel",
              },
              datePublished: "2021-12-31",
              name: "opinia",
              reviewBody:
                "Dla mnie dźwiękowe i wizualne mistrzostwo świata! SOUNDBAR KILLERS !!! Czytałem o tym sprzęcie wiele pozytywnych opinii i nie do końca wierzyłem. Ale jak dokonałem odsłuchu w salonie Top-HiFi Video Design we Wrocławiu i porównałem z innymi sprzętami w cenie do 2500zl to mi szczęka opadła a butów szukałem przez kilka godzin. Ten zestaw Audio Pro A26 miażdży dźwiękowo wszystkie SOUNDBARY do 3000zl a może nawet droższe. Dźwięk jest żywiołowy, energiczny i nasycony. Dla mnie basy schodzą wystarczająco nisko, świetnie słychać wokale i dobre kontolowane są wysokie tony które nie męczą metalicznie przy długim sluchaniu. To niewiarygodne ale jak zamknąłem oczy i posłuchałem to mialem wrażenie grania dużo większych kolumn a nie takich mikrusów. Zajmują mało miejsca na półce pod telewizorem i doskonale komponują się w mieszkaniu. Do tego pilot to prawdziwe dzieło sztuki z litego aluminium. Aplikacja do kontroli oraz MultiRoom działa stabilnie. Apka jest przejrzysta, prosta i funkcjonalna. Do tego sprzęt ma HDMI z ARC dzięki czemu można kontolowac dźwięk z pilota TV. Dzięki strumieniowaniu muzyki przez WiFi z wbudowanych serwisów typu Spotify czy TIDAL lub radia internetowe uzyskujemy dużo lepsza jakość dźwięku niż przez stratny i skomprespwany Bluetooth. Do tego można wyłączyć smartfona a dźwięk nadal będzie grał. Nawet bez smartfona można nacisnąć zaprogramowane wcześniej w pamięci 5 stacji radiowych lub playlisty ze Spotify lub TIDAL i będzie grało. Ponadto można zaprogramować budzik muzyką o dowolnej porze dnia. Dla mnie ideał tym bardziej że pobierają mało prądu porównując z amplitunerami stereo lub kina domowego a także nawet w porownaniu z soundbarami wraz z subwooferami Bluetooth. Miałem budżet do 2500zl. Chciałem sprzęt w 30% do filmów z TV a w 70% do odsłuchu muzyki. Najpierw napaliłem się na popularne SOUNDBARY wybrałem nawet Yamaha Bar 400 który kupiłem na próbę w popularnym elektromarkecie i oddałem na drugi dzien bo mój stary 18-letni mini zestaw stereo DENON grał lepiej na wejściu analogowym z TV niż ten soundbar Yamaha. Potem w salonie we Wrocławiu zrobiłem odsłuch ponowny tego soundbara i było tak samo marnie. Na odsłuchu w salonie Hi-Fi porównywałem również jakość dźwięku z pełnowymiarowym amplitunerem Yamaha N402d w cenie za 2500zl - niestety ten amplituner zagrał z moimi kolumnami podstawkowymi JAMO bardzo słabo. Dźwięk z N402D był płaski bez wyrazu, bez ikry. Dopiero wzmacniacz zintegrowany NAD C338 za około 2600zl zabrał porównywalnie dobrze do A26 z moimi starymi monitorami Jamo. Ale ostatecznie o wyborze A26 zadecydowała cena oraz wygląd który jak wiadomo nie bryluje od lat w sprzęcie firmy NAD a przypomina więcej surowy miernik laboratoryjny niż piękny sprzęt audio hifi. Audio Pro A26 to prawdziwy dźwiękowy Soundbar Killers a nawet więcej bo Yamaha że swoim płaskim dźwiękiem nie ma do niego nawet podejścia. ",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Filip",
              },
              datePublished: "2021-12-22",
              name: "opinia",
              reviewBody:
                "Przekonany dużo liczbą pozytywnych opinii kupiłem te głośniki jednak zawiodłem się. Grają ładnie, jak na takie małe głośniki potrafią również wygenerować bass. Airplay, bluetooth, hdmi arc, wszystko działa, pojawia się pytanie czego można chcieć więcej? Tak więc, nie rozumiem dlaczego nikt nie zwraca uwagi na to, że te głośniki szumią.Jeżeli ktoś słucha muzyki zawsze głośno to można je polecić, bo wtedy zagłuszymy szum :D Jednak wieczorem gdy wszystko ucichnie i chcemy cicho odpalić muzykę w tle, nie ma takiej opcji, więcej szumu niż muzyki, zatrzymamy muzykę na telefonie lub laptopie, muzyka ginie szum zostaje. (zatrzymanie muzyki dołączonym pilotem wyłącza również szum, sprytne). Przerwa miedzy utworami? szum.Wydawać się może, że otrzymałem felerny egzemplarz? Nic bardziej mylnego, po kontakcie z jednym salonem zostałem poinformowany, że mam nieuziemiony prąd w gniazdku XD kolejny salon powiedział że te głośniki już tak mają ¯_(ツ)_/¯.Postanowiłem skontaktować się z producentem, który odpisał mi na zgłoszenie tak:&quot;Hi,Thanks for the mail.It is normal the the speakers emits some white noise. ...&quot;Następnie zapytałem, jaki poziom szumu jest akceptowalny oraz dlaczego nie informują o tym nigdzie jeżeli to jest feature tych głośników, oto odpowiedź:&quot;Hi again,It is nothing we can change with a software update.It should not be audible after around 2-2.5 meters.I&#039;m not aware of that we have an exact decibel number for the noise.Best regards,Audio Pro Tech Support Team&quot;testując siedziałem ~5 metrów od głośników więc niestety nie ma magicznej bariery 2.5m która by zatrzymywała ten szum :(Radzę przemyśleć te informację przed zakupem. Można powiedzieć komuś żeby usiadł w miejscu gdzie mają stać głośniki i ciągle do was szeptał bo gdy szumią, wydają 40dB dźwięku przy samym głośniku. Przy wyłączonych głośnikach poziom dźwięku wynosi 26dB więc różnica jest znaczna. (zmierzone telefonem więc wartości są przybliżone)Dodatkowo gdy zbliżymy ucho do głośników, które są podłączone do prądu ale wyłączone, również usłyszymy delikatny szum.tl;dr gdyby nie szum głośniki byłby idealne jak na swoje rozmiary i cenePozdrawiam",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "3",
              },
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Ajgor",
              },
              datePublished: "2021-11-26",
              name: "opinia",
              reviewBody:
                "Jak na głośniki, niespodziewane dobre brzmienie i można ustawić na naprawdę wysoką głośność, co prawda nie ma tu efektu pełnowymiarowych kolumn, ale jest co podziwiać i tak. Pozdrawiam.",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Hassan",
              },
              datePublished: "2021-10-07",
              name: "opinia",
              reviewBody:
                "No w tej kwocie to próżno szukać coś sensowniejszego. Na tym zestawie można normalnie posłuchać muzyki. Ja jako basolub muszę przyznać, że bałem się, że bez suba nie dadzą rady, a tutaj się okazuje, że dają bez problemu. Żadne soundbary nie mają startu do tych głośniczków. Funkjconalnie tez jest bardzo dobrze. Radio internetowe, serwisy Spotify, Deezer, Tidal, Qobuz. AirPlay, bluetooth. Apka działa dobrze i jest bardzo intuicyjna. Kolumienki wykonane z dbałością o szczegóły. Mają nawet podklejone spody obudowy, aby się nie porysowały. Maskownice na magnesach, czysty front- to lubię. Kolor biały w satynie bardzo ładnie wpasował się w biało brązowe meble. Polecam",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Łukasz",
              },
              datePublished: "2021-09-26",
              name: "opinia",
              reviewBody:
                "Witam kupiłem A26 z subem sw10 i jestem mega zadowolony...",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Tomasz",
              },
              datePublished: "2021-09-08",
              name: "opinia",
              reviewBody:
                "Mam pytanie, czy takie głośniki można porównać do zestawu Sony MHC-NX3AV głośniki SS-NX1 ?",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Damian",
              },
              datePublished: "2021-08-27",
              name: "opinia",
              reviewBody:
                "Wiadomo, że nie jest to poziom grania amplitunera stereo kolumn pełnowymiarowych, jednak jako uniwersalne źródło dźwięku pod tv i do posłuchania muzyki nadaje się idealnie. Ja się na nie przesiadłem z soundbara, który kosztował więcej od Audio Pro a grał sporo gorzej! Tutaj słyszę stereo, poza tym dźwięk ma głębię. Mimo, iż nie ma subwoofera, to bas i tak jest lepszy niż miałem wcześniej. Sterowanie z tv działa, wystarczy podłączyć Audio Pro z tv po HDMI arc (u mnie to HDMI 2). Metalowy pilot dodatkowo sprawia pozytywne odczucia. ",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Robert",
              },
              datePublished: "2021-07-03",
              name: "opinia",
              reviewBody:
                "Miał być soundbar z dobrym stereo, bo posłuchać muzyki też lubimy. Wybór padł jednak na Audio Pro z uwagi na dużo lepszy dźwięk właśnie przy odsłuchu muzyki. Może przy filmach aż takiego efektu jak np. w Yamasze BAR400 nie ma, jednak w stereo gra Audio Pro lepszą średnicą. Tak bardziej naturalnie. Funkcjonalnie też jest wszystko do grania z internetu. Apka jest spoko, nic się nie wiesza. Dla mnie nie audiofila gra to i działa bardzo dobrze. ",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
            },
          ],
          sku: "100990001409",
        },
      },
      {
        text: `
        {
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": "A36",
          "image": "https://www.tophifi.pl/media/catalog/product/cache/c76cfc952dbe1a24abf7200506210ae9/a/u/audio-pro-a36-bl.png",
          "brand": {
              "@type": "Thing",
              "name": "Audio Pro"
          },
           "sku": "100990001410",
           "description": "
  
  
  function white()
  {
    console.log(\"Changing Image\");
    document.querySelector(\".glb-headerLogo > img:first-of-type\").src = \'https://tophifi.pl/ftpdownload/pr/2019/audiopro/a26/wireless-multiroom-speaker-A36-white-angle1-AudioPro-600x600.png\';
  }
  function black()
  {
    console.log(\"Changing Image\");
    document.querySelector(\".glb-headerLogo > img:first-of-type\").src = \'https://tophifi.pl/ftpdownload/pr/2019/audiopro/a26/wireless-multiroom-speaker-A36-black-angle1-AudioPro-600x600.png\';
  }
  
  
  
    
  
  
  
  
     
    
      
      
    
    
       
         
           
         
        
          Wyrafinowane rozwiązanie audio dla telewizora
          Audio Pro A36 są wolnostojącymi kolumnami głośnikowymi typu all-in-one, które odzwierciedlają 40 lat doświadczenia w tworzeniu zaawansowanej inżynierii audio. Konstrukcja ta została opracowana tak, aby gwarantowała wspaniałe wrażenia dźwiękowe z telewizora, zapewniając mocniejszy i pełniejszy dźwięk niż ten, który można uzyskać z tradycyjnego soundbaru.
          
        
        
        
       
    
   
  
      
          
              
              
                  
                  
              
   
   
              
              
                  
                      
                  
                  
                      
                  
              
          
      
  
          
          
              
                  
                      
                  
                  Muzyka w jakości hi-fi
                  Kolumny A36 tworzą kompletne rozwiązanie dźwiękowe do domowej rozrywki. Dzięki łączności bezprzewodowej Bluetooth aptX z łatwością możesz przesyłać do nich dźwięk bezpośrednio z urządzeń mobilnych, z kolei funkcje sieciowe pozwalają na odtwarzanie muzyki z serwisów on-line. Za pomocą wejścia analogowego można podłączyć, już przewodowo, zewnętrzne źródło dźwięku, np. gramofon czy odtwarzacz CD.
              
  
              
              
              
                  
                      
                  
                  Strumieniowanie multiroom
                  A36 bez trudu może stać się częścią domowego systemu multiroom – wystarczy, że połączysz bezprzewodowo głośniki rozstawione w różnych pokojach w jedną lub kilka grup, aby cieszyć się wspaniałym dźwiękiem w całym domu czy w kilku pomieszczeniach jednocześnie. Każdy z użytkowników ma indywidualny dostęp do swoich ulubionej muzyki, jako że wszystkimi głośnikami multiroom można sterować w pełni niezależnie.
              
          
          
  
          
          
              
              
  
              
                  
                      
                  
                  Brzmienie takie, jakiego oczekujesz
                  Konstruktorzy Audio Pro zadbali o to, aby jak najbardziej ułatwić użytkownikowi precyzyjne dopasowanie brzmienia do własnych preferencji. W tym celu opracowana została specjalna aplikacja Audio Pro Control – dostępna na smartfony oraz tablety z iOS/Android. Za jej pomocą możliwe jest dokładne dostrojenie charakterystyki brzmienia, regulacja basów i sopranów czy włączenie wirtualnego dźwięku przestrzennego (tylko dla wejścia ARC).
              
              
          
          
  
          
          
              
                  
                      
                  
                  Wygoda użytkowania
                  Do A36 dołączany jest także pilot zdalnego sterowania, który umożliwia obsługę odtwarzania, głośności i wyboru źródeł. Co więcej konstruktorzy wyposażyli go również w przyciski szybkiego wyboru, do których wystarczy przypisać preferowaną stację radiową czy listę odtwarzania (np. ze Spotify), po czym przywołać ją za pośrednictwem jednego przycisku.
              
  
              
              
              
                  
                      
                  
                  HDMI z ARC
                  Model A36 wyposażony został w złącze HDMI obsługujące ARC. Dzięki niemu pojawia się możliwość połączenia kolumn z dowolnym telewizorem kompatybilnym z ARC. Rozwiązanie to pozwala komfortowo sterować nimi za pomocą pilota zdalnego sterowania do telewizora. 
              
          
          
  
      
        
      
      
  
      
          
          
              Specyfikacja techniczna
          
  
          
          
              
                  
                      
                  
                  Wzmacniacze i przetworniki
                  Wzmacniacz: cyfrowy Class D, 2 x 75W
                      Głośnik wysokotonowy: 25 mm tekstylna kopułka
                      Głośnik niskotonowy: 2x 114 mm o długim skoku
  
                  
              
              
                  
                      
                  
                  Wejścia
                  Standard Bluetooth 5.0 z kodekiem apth-X Low Latency
                      Aux 3,5 mm
                      Cyfrowe optyczne złącze TOSLink (tylko PCM)
                      ARC/TV (tylko PCM)
  
                  
              
              
                  
                      
                  
                  Wyjścia
                  RCA Sub Out
  
                  
              
          
          
  
          
          
              
                  
                      
                  
                  Wymiary
                  W × S × G: 238 × 150 × 200 mm  
                  
              
              
                  
                      
                  
                  Częstotliwość
                  Pasmo przenoszenia: 45 – 20 000 Hz
                      Częstotliwość zwrotnicy: 2 800 Hz
                  
              
              
                  
                      
                  
                  Inne
                  Pilot zdalnego sterowania frezowany z litego aluminium. Uwaga! Uchwyt ścienny sprzedawany oddzielnie.
                  
              
          
          
  
  
          
      ",
                     "aggregateRating": {
              "@type": "AggregateRating",
              "bestRating": 5,
              "worstRating": 1,
              "ratingValue": "5",
              "reviewCount": "16",
              "itemReviewed": "A36"
          },
                                       "review": [
                       {
                              "@type": "Review",
                                                          "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5"
                              },
                               "name": "opinia",
                              "author": {
                                "@type": "Person",
                                "name": "Paweł"
                              },
                              "datePublished": "2022-04-28",
                              "reviewBody": "Super działają i wyglądają. Łatwe w ogarnięciu. Za tą cenę warto. "
                          },                 {
                              "@type": "Review",
                                                          "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5"
                              },
                               "name": "opinia",
                              "author": {
                                "@type": "Person",
                                "name": "Michał"
                              },
                              "datePublished": "2022-04-26",
                              "reviewBody": "Absolutnie rewelacyjny sprzęt pod każdym względem. Jakość wykonania i ten minimalizm to po prostu bajka. Jeśli chodzi o odsłuch po podłączeniu przez HDMI z kanałem zwrotnym ARC pojawia się dodatkowy pasek do regulacji trybu przestrzennego dla TV, co bardzo podnosi jakość dźwięku. Jeśli chodzi o muzykę, to jest rewelacja; czyste brzmienie z nie nachalnym basem. Nie brakuje im basu, jest on po prostu ciepły i nie dudniący, ale kiedy trzeba potrafi poruszyć pokojem. Mistrzostwo świata - każdy soundbar przy nich wysiada. Polecam każdemu, co szuka czegoś do TV i muzyki."
                          },                 {
                              "@type": "Review",
                                                          "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5"
                              },
                               "name": "opinia",
                              "author": {
                                "@type": "Person",
                                "name": "Taran"
                              },
                              "datePublished": "2022-01-30",
                              "reviewBody": "Kozackie kolumny, design 10/10, a dźwięk co prawda nieco analityczny, ale nie pozbawiony ciepła i odpowiedniej barwy :P"
                          },                 {
                              "@type": "Review",
                                                          "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5"
                              },
                               "name": "opinia",
                              "author": {
                                "@type": "Person",
                                "name": "Krozzor"
                              },
                              "datePublished": "2022-01-20",
                              "reviewBody": "Dobra kompatybilność z wifi, zestaw bardzo przydatny w domu. Regulacja na +"
                          },                 {
                              "@type": "Review",
                                                          "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5"
                              },
                               "name": "opinia",
                              "author": {
                                "@type": "Person",
                                "name": "Mikele"
                              },
                              "datePublished": "2021-12-22",
                              "reviewBody": "Bardzo szeroka gama możliwości z takiego sprzętu. Funkcje siecowe i aplikacja dedykowana do tych kolumn są świetnie zrobione i można sobie skonfigurować z ogromną łatwością te głośniki pod swój gust muzyczny. "
                          },                 {
                              "@type": "Review",
                                                          "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5"
                              },
                               "name": "opinia",
                              "author": {
                                "@type": "Person",
                                "name": "Dg"
                              },
                              "datePublished": "2021-02-22",
                              "reviewBody": "witam,
  
  Specjalnie zalozylem konto aby sie wypowiedziec na temat tych glosnikow. Zakupilem okolo 2 msc temu w poznaniu. W sumie czailem sie na nie prawie rok (wtedy byly za 2999... :( ). ostatecznie zakupilem za 3,5k. Bolalo. Grają w prawie pustym salonie 23m2 z aneksem 8m. Czyli mamy prawie 30m2 powierzchni do naglosnienia. Rozstawione obok tv  2.5m od siebie. okolo 20cm od sciany (bass reflex z tylu). Powiem tak to co te 11cm glosniki robią jak by mi ktos powiedzial to bym w zyciu nie uwierzyl. Wiem co mowie (w historii mialem monitory Alesismk2, jakies rozne logitechy 500W itp). bylem na 100% pewny ze bede musial do nich dokupic Sub bo gdzie takie pierdziawki dadzą fajny bas.. mylilem sie i to bardzo. Po ustawieniu korektora w aplikacji. Bas schodzi nieprawdopodonie nisko, kontrolowanie i na takie pomieszczenie wiecej niz 70% nie puszczam, po prostu za glosno jest. Przy czym jakos oczywscie 1 klasa. Wczesniej mialem sub 130W RMS w 5.1 dlatego mam jakies oczekiwania co do basow. Ktos powie ze za 3.5k fajny zestaw z aplitunerem mozna kupic. Mozna, ale tutaj jest wszystko w jednym. Zero zbednych kabli. ARC hdmi do TV - bajka. Wifi, BLT... Jakos wykonannia - 1 klasa czuc jakosc. Jakos muzyki i filmow - nie potrzeba zestaw 5.1 (nawet maja opcje virutal surround). bas - nieprawdopodobne zdziwienie co mozna zrobic z 4x 11cm.. te 32Hz na papierze to nie sciema. Ogolnie strzal w 10, jesli mialbym kupic to oczywscie jeszcze raz bym kupil nawet i za 4k. Nie potrzeba Suba. do uzytku domowego polecam w 100%"
                          },                 {
                              "@type": "Review",
                                                          "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5"
                              },
                               "name": "opinia",
                              "author": {
                                "@type": "Person",
                                "name": "Lutek"
                              },
                              "datePublished": "2020-12-18",
                              "reviewBody": "Niepozorne kolumienki. Malutkie, a potrafią przyłożyć. Na pochwałę oprócz dźwięku zasługuje jakość wykonania i dbałość o szczegóły jak chociażby metalowy pilot. Na takim poziomie to jest wręcz niespotykane. Kolumny testowałem na muzyce jak i filmach i dają sobie radę bez problemu, nawet bez subwoofera. Stoją u mnie w pokoiku o powierzchni 25 metrów. HDMI z ARC załatwia sprawę podłączenia TV. Włączając TV włącza się od razu sprzęt audio. Aplikacja działa bez zarzutu tak na Androidach jak i na iOS. "
                          },                 {
                              "@type": "Review",
                                                          "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5"
                              },
                               "name": "opinia",
                              "author": {
                                "@type": "Person",
                                "name": "KUBA RATAJCZAK"
                              },
                              "datePublished": "2020-10-01",
                              "reviewBody": "Miał być soundbar belka, a skusiłem się na te kolumienki po odsłuchu i porównaniach w salonie. Faktycznie te głośniczki niszczą soundbary dźwiękowo. Bas potężny, słychać ten zapas mocy, czego w żadnym modelu soundbara za podobne pieniążki nie usłyszałem, HDMI z arc jest, więc wystarczy podłączyć tv i wszystkim sterujemy z poziomu pilota od tv. Radio internetowe bezpłatne, serwisy do streamingu, bluetooth. Bardzo ciekawy produkt spokojnie wart tej ceny. "
                          },                 {
                              "@type": "Review",
                                                          "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5"
                              },
                               "name": "opinia",
                              "author": {
                                "@type": "Person",
                                "name": "Leszek"
                              },
                              "datePublished": "2020-09-22",
                              "reviewBody": "Kolumny z bardzo wysokim współczynnikiem akceptacji żony hehe.
  
  W domu niestety nie mam zbyt dużo miejsca na ustawienie kolumn i z początku padł pomysł na zakup porządnego soundbara z subwooferem. Kilka modeli odsłuchaliśmy i żaden jakoś specjalnie mnie nie zachwycił przede wszystkim przy muzyce. W salonie zaproponowano mi odsłuch tych kolumienek aktywnych. Faktycznie grają tak jak są opisywane w necie. Grają po prostu jak normalne stereo, łącząc w sobie wzmacniacz, funkcje sieciowe i HDMI. Z uwagi na gabaryty łatwo znikają w pomieszczeniu. Dodatkowo dostajemy bardzo wygodną w obsłudze aplikacje mobilną. Powiem szczerze, że wcześniej marka nie była mi znana, a szkoda, bo już dawno bym wszedł w ich produkty.  "
                          },                 {
                              "@type": "Review",
                                                          "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5"
                              },
                               "name": "opinia",
                              "author": {
                                "@type": "Person",
                                "name": "Wojtek J"
                              },
                              "datePublished": "2020-07-16",
                              "reviewBody": "Smukłe i malutkie kolumienki z wbudowanymi wzmacniaczami i wszystkim co potrzeba. Zobaczcie sobie na zdjęciach w odniesieniu do innych kolumn jakie są malutkie a grają wielkim dźwiękiem. Wszystkie przewody podłączamy do kolumny bazy. Jest nawet HDMI z ARC. Dzięki temu mogę sterować głośnością z pilota od tv. Wszystko działa w 100% kompatybilnie. Audio Pro ma tez funkcje internetowe, wifi, bluetooth. Mogę odtwarzać muzykę ze Spotify, DLNA. Urzekło mnie też dbałość o jakość wykonanie. Już sam lakier nie jest często spotykany w kolumnach za takie pieniądze, tym bardziej aktywnych. U mnie ten zestaw z łatwością pokonał porządną miniwieżę no i do filmów zdecydowanie bardziej się nadaje ze względu na moc i bas. "
                          }                 ],
                 "offers": {
              "@type": "Offer",
              "priceCurrency": "PLN",
              "url": "https://www.tophifi.pl/multiroom/audio-pro/audio-pro-a36.html",
              "availability": "https://schema.org/InStock",
    "price": "3099.00"
    }
      }
`,
        result: {
          "@context": "https://schema.org/",
          "@type": "Product",
          aggregateRating: {
            "@type": "AggregateRating",
            bestRating: 5,
            itemReviewed: "A36",
            ratingValue: "5",
            reviewCount: "16",
            worstRating: 1,
          },
          brand: {
            "@type": "Thing",
            name: "Audio Pro",
          },
          description:
            " Wyrafinowane rozwiązanie audio dla telewizora Audio Pro A36 są wolnostojącymi kolumnami głośnikowymi typu all-in-one, które odzwierciedlają 40 lat doświadczenia w tworzeniu zaawansowanej inżynierii audio. Konstrukcja ta została opracowana tak, aby gwarantowała wspaniałe wrażenia dźwiękowe z telewizora, zapewniając mocniejszy i pełniejszy dźwięk niż ten, który można uzyskać z tradycyjnego soundbaru. Muzyka w jakości hi-fi Kolumny A36 tworzą kompletne rozwiązanie dźwiękowe do domowej rozrywki. Dzięki łączności bezprzewodowej Bluetooth aptX z łatwością możesz przesyłać do nich dźwięk bezpośrednio z urządzeń mobilnych, z kolei funkcje sieciowe pozwalają na odtwarzanie muzyki z serwisów on-line. Za pomocą wejścia analogowego można podłączyć, już przewodowo, zewnętrzne źródło dźwięku, np. gramofon czy odtwarzacz CD. Strumieniowanie multiroom A36 bez trudu może stać się częścią domowego systemu multiroom – wystarczy, że połączysz bezprzewodowo głośniki rozstawione w różnych pokojach w jedną lub kilka grup, aby cieszyć się wspaniałym dźwiękiem w całym domu czy w kilku pomieszczeniach jednocześnie. Każdy z użytkowników ma indywidualny dostęp do swoich ulubionej muzyki, jako że wszystkimi głośnikami multiroom można sterować w pełni niezależnie. Brzmienie takie, jakiego oczekujesz Konstruktorzy Audio Pro zadbali o to, aby jak najbardziej ułatwić użytkownikowi precyzyjne dopasowanie brzmienia do własnych preferencji. W tym celu opracowana została specjalna aplikacja Audio Pro Control – dostępna na smartfony oraz tablety z iOS/Android. Za jej pomocą możliwe jest dokładne dostrojenie charakterystyki brzmienia, regulacja basów i sopranów czy włączenie wirtualnego dźwięku przestrzennego (tylko dla wejścia ARC). Wygoda użytkowania Do A36 dołączany jest także pilot zdalnego sterowania, który umożliwia obsługę odtwarzania, głośności i wyboru źródeł. Co więcej konstruktorzy wyposażyli go również w przyciski szybkiego wyboru, do których wystarczy przypisać preferowaną stację radiową czy listę odtwarzania (np. ze Spotify), po czym przywołać ją za pośrednictwem jednego przycisku. HDMI z ARC Model A36 wyposażony został w złącze HDMI obsługujące ARC. Dzięki niemu pojawia się możliwość połączenia kolumn z dowolnym telewizorem kompatybilnym z ARC. Rozwiązanie to pozwala komfortowo sterować nimi za pomocą pilota zdalnego sterowania do telewizora. Specyfikacja techniczna Wzmacniacze i przetworniki Wzmacniacz: cyfrowy Class D, 2 x 75W Głośnik wysokotonowy: 25 mm tekstylna kopułka Głośnik niskotonowy: 2x 114 mm o długim skoku Wejścia Standard Bluetooth 5.0 z kodekiem apth-X Low Latency Aux 3,5 mm Cyfrowe optyczne złącze TOSLink (tylko PCM) ARC/TV (tylko PCM) Wyjścia RCA Sub Out Wymiary W × S × G: 238 × 150 × 200 mm Częstotliwość Pasmo przenoszenia: 45 – 20 000 Hz Częstotliwość zwrotnicy: 2 800 Hz Inne Pilot zdalnego sterowania frezowany z litego aluminium. Uwaga! Uchwyt ścienny sprzedawany oddzielnie. ",
          image:
            "https://www.tophifi.pl/media/catalog/product/cache/c76cfc952dbe1a24abf7200506210ae9/a/u/audio-pro-a36-bl.png",
          name: "A36",
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            price: "3099.00",
            priceCurrency: "PLN",
            url: "https://www.tophifi.pl/multiroom/audio-pro/audio-pro-a36.html",
          },
          review: [
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Paweł",
              },
              datePublished: "2022-04-28",
              name: "opinia",
              reviewBody:
                "Super działają i wyglądają. Łatwe w ogarnięciu. Za tą cenę warto. ",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Michał",
              },
              datePublished: "2022-04-26",
              name: "opinia",
              reviewBody:
                "Absolutnie rewelacyjny sprzęt pod każdym względem. Jakość wykonania i ten minimalizm to po prostu bajka. Jeśli chodzi o odsłuch po podłączeniu przez HDMI z kanałem zwrotnym ARC pojawia się dodatkowy pasek do regulacji trybu przestrzennego dla TV, co bardzo podnosi jakość dźwięku. Jeśli chodzi o muzykę, to jest rewelacja; czyste brzmienie z nie nachalnym basem. Nie brakuje im basu, jest on po prostu ciepły i nie dudniący, ale kiedy trzeba potrafi poruszyć pokojem. Mistrzostwo świata - każdy soundbar przy nich wysiada. Polecam każdemu, co szuka czegoś do TV i muzyki.",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Taran",
              },
              datePublished: "2022-01-30",
              name: "opinia",
              reviewBody:
                "Kozackie kolumny, design 10/10, a dźwięk co prawda nieco analityczny, ale nie pozbawiony ciepła i odpowiedniej barwy :P",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Krozzor",
              },
              datePublished: "2022-01-20",
              name: "opinia",
              reviewBody:
                "Dobra kompatybilność z wifi, zestaw bardzo przydatny w domu. Regulacja na +",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Mikele",
              },
              datePublished: "2021-12-22",
              name: "opinia",
              reviewBody:
                "Bardzo szeroka gama możliwości z takiego sprzętu. Funkcje siecowe i aplikacja dedykowana do tych kolumn są świetnie zrobione i można sobie skonfigurować z ogromną łatwością te głośniki pod swój gust muzyczny. ",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Dg",
              },
              datePublished: "2021-02-22",
              name: "opinia",
              reviewBody:
                "witam, Specjalnie zalozylem konto aby sie wypowiedziec na temat tych glosnikow. Zakupilem okolo 2 msc temu w poznaniu. W sumie czailem sie na nie prawie rok (wtedy byly za 2999... :( ). ostatecznie zakupilem za 3,5k. Bolalo. Grają w prawie pustym salonie 23m2 z aneksem 8m. Czyli mamy prawie 30m2 powierzchni do naglosnienia. Rozstawione obok tv 2.5m od siebie. okolo 20cm od sciany (bass reflex z tylu). Powiem tak to co te 11cm glosniki robią jak by mi ktos powiedzial to bym w zyciu nie uwierzyl. Wiem co mowie (w historii mialem monitory Alesismk2, jakies rozne logitechy 500W itp). bylem na 100% pewny ze bede musial do nich dokupic Sub bo gdzie takie pierdziawki dadzą fajny bas.. mylilem sie i to bardzo. Po ustawieniu korektora w aplikacji. Bas schodzi nieprawdopodonie nisko, kontrolowanie i na takie pomieszczenie wiecej niz 70% nie puszczam, po prostu za glosno jest. Przy czym jakos oczywscie 1 klasa. Wczesniej mialem sub 130W RMS w 5.1 dlatego mam jakies oczekiwania co do basow. Ktos powie ze za 3.5k fajny zestaw z aplitunerem mozna kupic. Mozna, ale tutaj jest wszystko w jednym. Zero zbednych kabli. ARC hdmi do TV - bajka. Wifi, BLT... Jakos wykonannia - 1 klasa czuc jakosc. Jakos muzyki i filmow - nie potrzeba zestaw 5.1 (nawet maja opcje virutal surround). bas - nieprawdopodobne zdziwienie co mozna zrobic z 4x 11cm.. te 32Hz na papierze to nie sciema. Ogolnie strzal w 10, jesli mialbym kupic to oczywscie jeszcze raz bym kupil nawet i za 4k. Nie potrzeba Suba. do uzytku domowego polecam w 100%",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Lutek",
              },
              datePublished: "2020-12-18",
              name: "opinia",
              reviewBody:
                "Niepozorne kolumienki. Malutkie, a potrafią przyłożyć. Na pochwałę oprócz dźwięku zasługuje jakość wykonania i dbałość o szczegóły jak chociażby metalowy pilot. Na takim poziomie to jest wręcz niespotykane. Kolumny testowałem na muzyce jak i filmach i dają sobie radę bez problemu, nawet bez subwoofera. Stoją u mnie w pokoiku o powierzchni 25 metrów. HDMI z ARC załatwia sprawę podłączenia TV. Włączając TV włącza się od razu sprzęt audio. Aplikacja działa bez zarzutu tak na Androidach jak i na iOS. ",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "KUBA RATAJCZAK",
              },
              datePublished: "2020-10-01",
              name: "opinia",
              reviewBody:
                "Miał być soundbar belka, a skusiłem się na te kolumienki po odsłuchu i porównaniach w salonie. Faktycznie te głośniczki niszczą soundbary dźwiękowo. Bas potężny, słychać ten zapas mocy, czego w żadnym modelu soundbara za podobne pieniążki nie usłyszałem, HDMI z arc jest, więc wystarczy podłączyć tv i wszystkim sterujemy z poziomu pilota od tv. Radio internetowe bezpłatne, serwisy do streamingu, bluetooth. Bardzo ciekawy produkt spokojnie wart tej ceny. ",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Leszek",
              },
              datePublished: "2020-09-22",
              name: "opinia",
              reviewBody:
                "Kolumny z bardzo wysokim współczynnikiem akceptacji żony hehe. W domu niestety nie mam zbyt dużo miejsca na ustawienie kolumn i z początku padł pomysł na zakup porządnego soundbara z subwooferem. Kilka modeli odsłuchaliśmy i żaden jakoś specjalnie mnie nie zachwycił przede wszystkim przy muzyce. W salonie zaproponowano mi odsłuch tych kolumienek aktywnych. Faktycznie grają tak jak są opisywane w necie. Grają po prostu jak normalne stereo, łącząc w sobie wzmacniacz, funkcje sieciowe i HDMI. Z uwagi na gabaryty łatwo znikają w pomieszczeniu. Dodatkowo dostajemy bardzo wygodną w obsłudze aplikacje mobilną. Powiem szczerze, że wcześniej marka nie była mi znana, a szkoda, bo już dawno bym wszedł w ich produkty. ",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Wojtek J",
              },
              datePublished: "2020-07-16",
              name: "opinia",
              reviewBody:
                "Smukłe i malutkie kolumienki z wbudowanymi wzmacniaczami i wszystkim co potrzeba. Zobaczcie sobie na zdjęciach w odniesieniu do innych kolumn jakie są malutkie a grają wielkim dźwiękiem. Wszystkie przewody podłączamy do kolumny bazy. Jest nawet HDMI z ARC. Dzięki temu mogę sterować głośnością z pilota od tv. Wszystko działa w 100% kompatybilnie. Audio Pro ma tez funkcje internetowe, wifi, bluetooth. Mogę odtwarzać muzykę ze Spotify, DLNA. Urzekło mnie też dbałość o jakość wykonanie. Już sam lakier nie jest często spotykany w kolumnach za takie pieniądze, tym bardziej aktywnych. U mnie ten zestaw z łatwością pokonał porządną miniwieżę no i do filmów zdecydowanie bardziej się nadaje ze względu na moc i bas. ",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
            },
          ],
          sku: "100990001410",
        },
      },
      {
        text: `
        {
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": "MusicCast R-N803D",
          "image": "https://www.tophifi.pl/media/catalog/product/cache/c76cfc952dbe1a24abf7200506210ae9/y/a/yamaha-r-n803d-black_1_2.png",
          "brand": {
              "@type": "Thing",
              "name": "Yamaha"
          },
           "sku": "623280",
           "description": "
  
  STEREOFONICZNY AMPLITUNER EISA 2018&ndash;2019
  Uzasadnienie EISA
  To urządzenie najlepiej pokazuje, jak daleko zaszły udoskonalenia przystępnego cenowo sprzętu Hi-Fi. Yamaha R-N803D to zaawansowany amplituner stereofoniczny, zaprojektowany jednocześnie z dbałością o kr&oacute;tką ścieżkę sygnału, jak też bogato wyposażony w nowoczesne układy, w tym przetwornik C/A ESS Sabre i system YPAO &ndash; firmowy układ optymalizacji charakterystyki działający bardzo efektywnie. Wysoka moc, zar&oacute;wno przy wysokiej, jak i niskiej impedancji, pozwala podłączyć większość kolumn, wydobyć brzmienie swobodne i przy tym precyzyjne, znacznie przekraczające oczekiwania, jakie dotąd mieliśmy w stosunku do sprzętu w tym zakresie cenowym. Do dyspozycji jest komunikacja Bluetooth, a firmowa platforma MusicCast pozwala połączyć się z serwisami Tidal, Spotify, Deezer oraz Qobuz. R-N803D to \\"szwajcarski scyzoryk\\" wśr&oacute;d wzmacniaczy stereofonicznych.
  Referencyjny amplituner stereo 
  Yamaha R-N803D z systemem MusicCast&nbsp;
  
  Poczuj magię hi-fi i ciesz się funkcjami sieciowymi
  Yamaha wprowadza doskonałą jakość dźwięku hi-fi do świata sieciowych amplituner&oacute;w stereo. Yamaha MusicCast R-N803D to najwyższej klasy układy elektroniczne i komponenty, będące dziedzictwem legendarnej koncepcji hi-fi firmy Yamaha, zwanej ToP-ART (Total Purity Audio Reproduction Technology). R-N803D to także &nbsp;pierwszy amplituner stereo z wbudowaną, wyrafinowaną technologią YPAO, kt&oacute;ra stosowana była dotąd tylko w urządzeniach wielokanałowych. Rozwiązanie to pozwala automatycznie skalibrować parametry pracy urządzenia pod kątem akustyki pomieszczenia.&nbsp;
  MusicCast R-N803D to jednak nie tylko świetny sprzęt stereo - to w pełni sieciowe urządzenie zapewniające łatwy i szeroki dostęp do muzyki. Obsługa serwis&oacute;w muzycznych (m.in. Spotify, Tidal, Deezer, Qobuz), radia internetowego, odtwarzanie muzyki przesyłanej do amplitunera bezprzewodowo (za pomocą Wi-Fi, Bluetooth i Airplay), obsługa protokołu DLNA (pozwalająca na odtwarzanie plik&oacute;w zgromadzonych na komputerze/serwerze NAS) - to tylko kilka z wielu funkcjonalności, dzięki kt&oacute;rym słuchanie muzyki będzie teraz łatwiejsze niż kiedykolwiek.
  Wisienką na torcie sieciowych umiejętności R-N803D jest jego wsp&oacute;łpraca z systemem multiroom Yamaha MusicCast, dzięki kt&oacute;remu bezprzewodowo możesz przesyłać muzykę między pokojami w całym domu. &nbsp;&nbsp;
  
  
  
  Zapewnij sobie idealny dźwięk dzięki auto-kalibracji YPAO&nbsp;
  Po raz pierwszy amplituner hi-fi, MusicCast R-N803D, wyposażony jest w układ YPAO (Yamaha Parametric room Acoustic Optimizer), słynną technologię stosowaną dotychczas w amplitunerach AV i soundbarach Yamahy. Układ ocenia kształt pokoju, materiał pokrywający ściany i pozycję głośnik&oacute;w, a następnie automatycznie reguluje parametry dźwięku, aby zapewnić idealną odpowiedź i jakość brzmienia. Urządzenie dodatkowo wyposażone jest w zaawansowane funkcje YPAO, wliczając YPAO-R.S.C. (Reflected Sound Control), kt&oacute;ry aktywnie koryguje istotne, wczesne odbicia dźwięku, mające znaczący wpływ na jakość brzmienia, a także YPAO Volume, kt&oacute;ry wykorzystuje niezwykle precyzyjną korekcję (192 kHz/64 bity). Efekt? Możesz stworzyć idealne środowisko odsłuchowe w swoim domu, takie samo jak w profesjonalnym studiu. Dodatkowo możesz kontrolować funkcje YPAO i wyświetlać rezultaty analizy wykorzystując aplikację MusicCast*.
  *Funkcja dostępna w przyszłych aktualizacjach oprogramowania.
  
  Korzystaj z dziedzictwa hi-fi Yamahy
  Koncepcja ToP-ART
  W modelu MusicCast R-N803D projektanci zastosowali wzmacniacz mocy z symetrycznymi i bezpośrednim układem obwod&oacute;w. Moduł ten opiera się na koncepcji ToP-ART i wyposażony jest w r&oacute;wnoległą konstrukcję push-pull, wykorzystującą łącznie osiem bipolarnych tranzystor&oacute;w mocy (po cztery na kanały lewy i prawy). Ponadto inżynierowie skr&oacute;cili do absolutnego minimum długość tor&oacute;w sygnałowych audio, co pozwoliło obniżyć impedancję i zapewnić doskonałą siłę napędową z maksymalną mocą wyjściową sięgającą 145 W na kanał. Amplituner wyposażono także w możliwość włączenia trybu Pure Direct omijającego obwody regulacji ton&oacute;w, dzięki czemu ścieżka sygnału jest maksymalnie skr&oacute;cona, a dźwięk dociera do Twoich uszu w najczystszej postaci.&nbsp;
  Dźwięk wysokiej rozdzielczości (hi-res)&nbsp;
  MusicCast R-N803D przystosowany jest do wsp&oacute;łpracy ze źr&oacute;dłami dźwięku wysokiej rozdzielczości. Urządzenie obsługuje natywny format DSD 2,8/5,6 MHz, pliki AIFF/WAV/FLAC 192 kHz/24 bity, a także Apple Lossless 96 kHz/24 bity. Amplituner wyposażony jest w słynny przetwornik c/a SABRE 9006AS 192 kHz/24 bity (firmy ESS), dzięki kt&oacute;remu zapewnia doskonały stosunek sygnał/szum. W połączeniu z oryginalnym modułem sieciowym Yamahy model ten perfekcyjnie wydobywa wszystkie dźwiękowe niuanse ze źr&oacute;deł high-res, idealnie odwzorowując nawet subtelną atmosferę sal koncertowych i ekspresyjne detale brzmienia.
  Wewnętrzny moduł sieciowy zapewniający wysoką jakość dźwięku
  Jednym z kluczowych komponent&oacute;w MusicCast R-N803D, decydującym o jakości dźwięku sieciowego, jest Yamaha Original Network Module. Układ ten wykorzystuje precyzyjny zegar, kt&oacute;ry gwarantuje niski jitter i udoskonala odwzorowanie dźwięku ze źr&oacute;deł high-res. Obniżenie szumu jitteru podczas odtwarzania dźwięku z sieci oraz źr&oacute;deł USB/Bluetooth pozwala użytkownikowi z łatwością rozr&oacute;żnić wszelkie niuanse zapisanej w nagraniach wysokiej rozdzielczości.
  
  Ciesz się funkcjami sieciowymi
  Serwisy muzyczne i łączność bezprzewodowa
  Szeroki dostęp do licznych źr&oacute;deł muzyki to r&oacute;wnież efekt kompatybilności z serwisami muzycznymi. MusicCast R-N803D obsługuje nie tylko popularne serwisy takie jak Spotify, lecz także coraz chętniej wykorzystywane (i oferujące jakość dźwięku CD) Tidal, Deezer oraz Qobuz. Dzięki temu użytkownik może korzystać z niemal nieograniczonych bibliotek muzycznych obejmujących miliony utwor&oacute;w z całego świata.&nbsp;
  Funkcjonalność modelu zwiększa wbudowana łączność: Bluetooth, AirPlay i Wi-Fi. Te bezprzewodowe technologie umożliwiają strumieniowanie muzyki wprost ze smartfona lub tabletu, np. z serwisu YouTube, a kompatybilność z protokołem DLNA pozwala słuchać nagrań udostępnionych w domowej sieci bezprzewodowej (np. z komputera lub serwera NAS).
  Unikalną funkcjonalnością amplitunera&nbsp;R-N803D&nbsp;jest r&oacute;wnież Bluetooth Output czyli transmisja Bluetooth z amplitunera do zewnętrznych głośnik&oacute;w/słuchawek Bluetooth - dowolnego producenta. Dzięki temu rozwiązaniu możesz np. wysłać na bluetoothowe słuchawki dźwięk z każdego podłączonego do&nbsp;R-N803D&nbsp;urządzenia - telewizora, odtwarzacza CD czy nawet gramofonu!
  
  Nagłośnij cały dom dzięki Yamaha MusicCast
  Yamaha MusicCast to rewolucyjny system, kt&oacute;ry umożliwia bezprzewodowe przesyłanie dźwięku&nbsp; pomiędzy domowymi urządzeniami audio z rodziny MusicCast. Wszystkie urządzenia Yamahy obsługujące ten system łączą się ze sobą poprzez domową sieć Wi-Fi, a do sterowania nimi służy łatwa w użytkowaniu, polskojęzyczna aplikacja MusicCast Controller. Teraz, bez potrzeby wertowania instrukcji obsługi, w prosty spos&oacute;b prześlesz dźwięk pomiędzy urządzeniami audio znajdującymi się w r&oacute;żnych pokojach. Ponadto każdy z domownik&oacute;w może w tym samym czasie słuchać innej muzyki, niezależnie od pozostałych użytkownik&oacute;w systemu, lub stworzyć grupę, aby to samo nagranie było odtwarzane w kilku pomieszczeniach.
  
  Stw&oacute;rz swoje domowe centrum rozrywki&nbsp;
  Wejścia cyfrowe i analogowe
  Ten model wyposażony jest w cyfrowe wejścia audio &ndash; zar&oacute;wno ze złączem optycznym, jak i wsp&oacute;łosiowym. Obydwa służą do przesyłania dźwięku: optyczne z telewizora, wsp&oacute;łosiowe z odtwarzacza Blu-ray/CD. Sygnał dźwiękowy cały czas pozostaje w cyfrowej postaci, aż do momentu przetworzenia przez wysokiej jakości DAC wewnątrz amplitunera, zapewniając czyste i dynamiczne brzmienie w przypadku każdego źr&oacute;dła rozrywki, od sportu i innych program&oacute;w, aż do film&oacute;w i koncert&oacute;w. R-N803D to także sporo wejśc analogowych, a wśr&oacute;d nich oczywiście wejście Phono dla podłączenia gramofonu. &nbsp;
  Tuner DAB/DABzapewniający dostęp do cyfrowych audycji radiowych
  Amplituner MusicCast R-N803D wyposażony jest w tuner DAB/DAB(Digital Audio Broadcasting). Pozwala on słuchać audycji radiowych nadawanych w cyfrowej postaci i zapewnia wysoką jakość dźwięku. Dalsze korzyści przynosi automatyczne strojenie stacji z dostępnej listy oraz wyświetlanie informacji takich jak nazwa rozgłośni.
  Odtwarzanie bez pauz (gapless playback)
  Funkcjonalność modelu zwiększa przydatna funkcja odtwarzania bez pauz (gapless playback). Funkcja ta rozwiązuje problem przerw pojawiających się pomiędzy ciągłymi utworami, np. podczas odtwarzania album&oacute;w koncertowych.
  Wsp&oacute;łpraca z asystentem głosowym Google
  Najnowsza aktualizacja oprogramowania zapewnia wsparcie Actions on Google dla wszystkich urządzeń Yamaha MusicCast &ndash; dzięki temu zyskujemy możliwość głosowej obsługi urządzeń Yamaha za pomocą Asystenta Google. Dzięki sterowaniu głosowemu uwalniamy się od konieczności sięgania po smartfon lub tablet, aby m&oacute;c cieszyć się swoją ulubioną muzyką. Możemy teraz głosowo włączać, wyłączać urządzenia, regulować ich głośność, zmieniać źr&oacute;dła czy łączyć urządzenia w grupy odtwarzające jednocześnie tę samą muzykę.
  Sprawdź, co potrafią Yamaha MusicCast i Asystent Google &ndash; przeczytaj poświęcony temu artykuł.
  
  Podsumowanie najważniejszych cech:&nbsp;
  
  Układ auto-kalibracji YPAO zapewniający idealny dźwięk
  Kompatybilność z popularnymi serwisami muzycznymi, wliczając Spotify, Tidal i Deezer
  Dostęp do wszystkich wsp&oacute;łczesnych źr&oacute;deł muzyki (sieciowe audio, serwisy strumieniowe, Bluetooth, AirPlay, radio FM)
  Nieograniczone możliwości rozrywki dzięki MusicCast
  Cyfrowe wejście audio do podłączenia telewizora lub odtwarzacza Blu-ray
  Tuner DAB/DABzapewniający dostęp do cyfrowych audycji radiowych
  Wejście Phono umożliwiające podłączenie gramofonu
  Obsługa dźwięku high-res
  Odtwarzanie bez pauz (gapless playback)
  Wsp&oacute;łpraca z asystentem głosowym Google
  Mocny wzmacniacz zapewniający wysoką jakość dźwięku
  Wewnętrzny moduł sieciowy zapewniający wysoką jakość dźwięku
  
  ",
                     "aggregateRating": {
              "@type": "AggregateRating",
              "bestRating": 5,
              "worstRating": 1,
              "ratingValue": "4.95",
              "reviewCount": "26",
              "itemReviewed": "MusicCast R-N803D"
          },
                                       "review": [
                       {
                              "@type": "Review",
                                                          "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5"
                              },
                               "name": "opinia",
                              "author": {
                                "@type": "Person",
                                "name": "Adam"
                              },
                              "datePublished": "2021-07-18",
                              "reviewBody": "Gorąco polecam salon w Białymstoku.Obsluga na najwyższym poziomie.Zadowolony posiadacz amplituner Yamaha 803D."
                          },                 {
                              "@type": "Review",
                                                          "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5"
                              },
                               "name": "opinia",
                              "author": {
                                "@type": "Person",
                                "name": "Adrian"
                              },
                              "datePublished": "2021-07-03",
                              "reviewBody": "Wybrałem zestaw Yamaha R-N803D z kolumnami Indiana Line Tesi 661.Budżet oczywiście miałem niższy, bo do 5 tys na zestaw, jednak ten zestaw zagrał o tyle lepiej, że dołożyłem i wziąłem raty 0%. Po przesiadce z amplitunera model niższego 602 różnica na korzyść bardzo duża i tutaj powiem szczerze, że aż takiej dużej się nie spodziewałem. Dodatkowo kolumny Tesi 661 grają dużo lepiej niż 561, tym bardziej, że mój salon ma prawie 40m, więc tesi 561 trochę za małe. 
  Warto umówić się na prezentację i podejść posłuchać różnych opcji. W moim przypadku dołożyłem, bo faktycznie było warto. Taki sprzęt jednak nie kupuje się na 2-3 lata, a dłużej. 
  "
                          },                 {
                              "@type": "Review",
                                                          "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5"
                              },
                               "name": "opinia",
                              "author": {
                                "@type": "Person",
                                "name": "Kris"
                              },
                              "datePublished": "2021-02-25",
                              "reviewBody": "Jeden z najlepiej wycenionych klocków w audio. Mega funkcjonalny, z wszelkimi Tidalami, radiami i innymi wodotryskami. Gra już nie jak wybebeszony amplituner kina, a bliżej mu do prawdziwego wzmaka stereo. Porównywałem z Yamahą A-S701 na bazie którego jest niby zbudowany i faktycznie różnica na korzyść wzmaka jest, ale minimalna. Music Cast mnie czasem przy Tidalu denerwuje, jednak korzystam z apki Tidala i gram poprzez AirPlay. Spadku na jakości odtwarzając w ten sposób nie zauważyłem."
                          },                 {
                              "@type": "Review",
                                                          "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5"
                              },
                               "name": "opinia",
                              "author": {
                                "@type": "Person",
                                "name": "Mojo"
                              },
                              "datePublished": "2020-11-25",
                              "reviewBody": "Jeszcze amplituner, jednak gra dużo lepiej niż niższe modele i konkurencja. Jak doczytałem później ma to sens, ponieważ Yamaha R-N803D jest zbudowana na platformie wzmacniacza stereo Yamaha A-S701. Do tego dołożono DAC, radio i funkcje sieciowe. Jako kombajn wypada rewelacyjnie jeśli chodzi o funkcjonalność i jakość dźwięku. Amplituner ten wybrałem na odsłuchu do moich starych JMLabów. Spokojnie daje radę je napędzić, a to spore monitory o sporych wymaganiach. Kilka wzmacniaczy poległo sromotnie. Yamaha oferuje dodatkowo kalibrację YPAO, która w moim przypadku mocno pomogła, ponieważ miałem problem z basem w swoim salonie. Ten model dostał nagrodę EISA nie bez powodu. Zasłużył jak najbardziej!"
                          },                 {
                              "@type": "Review",
                                                          "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5"
                              },
                               "name": "Recenzja",
                              "author": {
                                "@type": "Person",
                                "name": "Łukasz"
                              },
                              "datePublished": "2020-05-29",
                              "reviewBody": "Sprzęt zakupiłem po weekendzie majowym, w celu zastąpienia mojego starego wzmacniacza. Na papierze mocowo sprzęt był porównywalny jednak po dłuższym odsłuchu jestem szczerze zdziwiony zarówno jego funkcjami jak i dźwiękiem który jest o klasę wyższy niż poprzednik.
  Warto dopowiedzieć jeszcze kilka słów o Musiccaście, wewnętrznej aplikacji Yamahy do obsługi sprzętu Audio- Video. Aplikacja jest bardzo prosta i intuicyjna zbudowana na zasadzie kafelków. Łatwo się jej nauczyć, instrukcja konfiguracji nowych produktów wyjaśnia wszystko krok po kroku. Jestem bardzo zadowolony z mojego nowego nabytku i z pewnością polecę go znajomym "
                          },                 {
                              "@type": "Review",
                                                          "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5"
                              },
                               "name": "Recenzja",
                              "author": {
                                "@type": "Person",
                                "name": "Łukasz"
                              },
                              "datePublished": "2020-04-21",
                              "reviewBody": "Jestem jeszcze na etapie odkrywania możliwości sprzętu, jednak jak do tego momentu mogę śmiało stwierdzić że jest on fantastycznie skonstruowany i posiada wiele funkcji, które znacznie ułatwiają życie. Dla przykładu wszytko czego używał w domu do odtwarzania muzyki mam z jabłuszkiem, i mogę dzięki aplikacji Musiccast strumieniować to na system audio za pomocą Airplaya. Boska funkcja! Do tego, przesyłam sobie muzykę z amplitunera na słuchawki w czasie strumieniowania muzyki na amplituner. Sprawia to że jest on na raz odbiornikiem i nadajnikiem sygnału. Super sprzęt!"
                          },                 {
                              "@type": "Review",
                                                          "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5"
                              },
                               "name": "Recenzja",
                              "author": {
                                "@type": "Person",
                                "name": "Fabien"
                              },
                              "datePublished": "2020-02-29",
                              "reviewBody": "Świetny amplituner. Wg. mnie the best na rynku!"
                          },                 {
                              "@type": "Review",
                                                          "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "4"
                              },
                               "name": "Recenzja",
                              "author": {
                                "@type": "Person",
                                "name": "Paweł"
                              },
                              "datePublished": "2020-01-10",
                              "reviewBody": "Najlepszy ampli na rynku. Jedną gwiazdkę odejmuję za mielenie w Tidalu."
                          },                 {
                              "@type": "Review",
                                                          "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5"
                              },
                               "name": "Recenzja",
                              "author": {
                                "@type": "Person",
                                "name": "mowgli"
                              },
                              "datePublished": "2020-01-02",
                              "reviewBody": "Funkcjonalność kina domowego, a dźwięk jak w prawdziwym stereo. "
                          },                 {
                              "@type": "Review",
                                                          "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "5"
                              },
                               "name": "Recenzja",
                              "author": {
                                "@type": "Person",
                                "name": "Jarek"
                              },
                              "datePublished": "2019-12-23",
                              "reviewBody": "Yamaha jako Japońska marka od zawsze specjalizowała się w sprzętach typu &quot;All in One&quot; ale w tym przypadku przeszła samą siebie. Amplituner mogę określić jako bardzo udany a jego brzmienie jako bardzo ciepłe i pasujące do wielu kolumn. Dodatkowym atutem jest rozwiązanie wyciągnięte żywcem z systemów kina domowego, czyli mikrofon YPAO który spełnia swoją funkcję znakomicie, i pozwala zaoszczędzić sporo czasu w przypadku konfiguracji sprzętu. Ogólna ocena sprzętu bardzo dobra, szczerze zachęcam do zakupu w przypadku dylematu typu &quot;jaki sprzęt wybrać&quot; ;)"
                          }                 ],
                 "offers": {
              "@type": "Offer",
              "priceCurrency": "PLN",
              "url": "https://www.tophifi.pl/multiroom/musiccast/yamaha-r-n803d.html",
              "availability": "https://schema.org/InStock",
    "price": "5999.00"
    }
      }
        `,
        result: {
          "@context": "https://schema.org/",
          "@type": "Product",
          aggregateRating: {
            "@type": "AggregateRating",
            bestRating: 5,
            itemReviewed: "MusicCast R-N803D",
            ratingValue: "4.95",
            reviewCount: "26",
            worstRating: 1,
          },
          brand: {
            "@type": "Thing",
            name: "Yamaha",
          },
          description:
            ' STEREOFONICZNY AMPLITUNER EISA 2018&ndash;2019 Uzasadnienie EISA To urządzenie najlepiej pokazuje, jak daleko zaszły udoskonalenia przystępnego cenowo sprzętu Hi-Fi. Yamaha R-N803D to zaawansowany amplituner stereofoniczny, zaprojektowany jednocześnie z dbałością o kr&oacute;tką ścieżkę sygnału, jak też bogato wyposażony w nowoczesne układy, w tym przetwornik C/A ESS Sabre i system YPAO &ndash; firmowy układ optymalizacji charakterystyki działający bardzo efektywnie. Wysoka moc, zar&oacute;wno przy wysokiej, jak i niskiej impedancji, pozwala podłączyć większość kolumn, wydobyć brzmienie swobodne i przy tym precyzyjne, znacznie przekraczające oczekiwania, jakie dotąd mieliśmy w stosunku do sprzętu w tym zakresie cenowym. Do dyspozycji jest komunikacja Bluetooth, a firmowa platforma MusicCast pozwala połączyć się z serwisami Tidal, Spotify, Deezer oraz Qobuz. R-N803D to "szwajcarski scyzoryk" wśr&oacute;d wzmacniaczy stereofonicznych. Referencyjny amplituner stereo Yamaha R-N803D z systemem MusicCast&nbsp; Poczuj magię hi-fi i ciesz się funkcjami sieciowymi Yamaha wprowadza doskonałą jakość dźwięku hi-fi do świata sieciowych amplituner&oacute;w stereo. Yamaha MusicCast R-N803D to najwyższej klasy układy elektroniczne i komponenty, będące dziedzictwem legendarnej koncepcji hi-fi firmy Yamaha, zwanej ToP-ART (Total Purity Audio Reproduction Technology). R-N803D to także &nbsp;pierwszy amplituner stereo z wbudowaną, wyrafinowaną technologią YPAO, kt&oacute;ra stosowana była dotąd tylko w urządzeniach wielokanałowych. Rozwiązanie to pozwala automatycznie skalibrować parametry pracy urządzenia pod kątem akustyki pomieszczenia.&nbsp; MusicCast R-N803D to jednak nie tylko świetny sprzęt stereo - to w pełni sieciowe urządzenie zapewniające łatwy i szeroki dostęp do muzyki. Obsługa serwis&oacute;w muzycznych (m.in. Spotify, Tidal, Deezer, Qobuz), radia internetowego, odtwarzanie muzyki przesyłanej do amplitunera bezprzewodowo (za pomocą Wi-Fi, Bluetooth i Airplay), obsługa protokołu DLNA (pozwalająca na odtwarzanie plik&oacute;w zgromadzonych na komputerze/serwerze NAS) - to tylko kilka z wielu funkcjonalności, dzięki kt&oacute;rym słuchanie muzyki będzie teraz łatwiejsze niż kiedykolwiek. Wisienką na torcie sieciowych umiejętności R-N803D jest jego wsp&oacute;łpraca z systemem multiroom Yamaha MusicCast, dzięki kt&oacute;remu bezprzewodowo możesz przesyłać muzykę między pokojami w całym domu. &nbsp;&nbsp; Zapewnij sobie idealny dźwięk dzięki auto-kalibracji YPAO&nbsp; Po raz pierwszy amplituner hi-fi, MusicCast R-N803D, wyposażony jest w układ YPAO (Yamaha Parametric room Acoustic Optimizer), słynną technologię stosowaną dotychczas w amplitunerach AV i soundbarach Yamahy. Układ ocenia kształt pokoju, materiał pokrywający ściany i pozycję głośnik&oacute;w, a następnie automatycznie reguluje parametry dźwięku, aby zapewnić idealną odpowiedź i jakość brzmienia. Urządzenie dodatkowo wyposażone jest w zaawansowane funkcje YPAO, wliczając YPAO-R.S.C. (Reflected Sound Control), kt&oacute;ry aktywnie koryguje istotne, wczesne odbicia dźwięku, mające znaczący wpływ na jakość brzmienia, a także YPAO Volume, kt&oacute;ry wykorzystuje niezwykle precyzyjną korekcję (192 kHz/64 bity). Efekt? Możesz stworzyć idealne środowisko odsłuchowe w swoim domu, takie samo jak w profesjonalnym studiu. Dodatkowo możesz kontrolować funkcje YPAO i wyświetlać rezultaty analizy wykorzystując aplikację MusicCast*. *Funkcja dostępna w przyszłych aktualizacjach oprogramowania. Korzystaj z dziedzictwa hi-fi Yamahy Koncepcja ToP-ART W modelu MusicCast R-N803D projektanci zastosowali wzmacniacz mocy z symetrycznymi i bezpośrednim układem obwod&oacute;w. Moduł ten opiera się na koncepcji ToP-ART i wyposażony jest w r&oacute;wnoległą konstrukcję push-pull, wykorzystującą łącznie osiem bipolarnych tranzystor&oacute;w mocy (po cztery na kanały lewy i prawy). Ponadto inżynierowie skr&oacute;cili do absolutnego minimum długość tor&oacute;w sygnałowych audio, co pozwoliło obniżyć impedancję i zapewnić doskonałą siłę napędową z maksymalną mocą wyjściową sięgającą 145 W na kanał. Amplituner wyposażono także w możliwość włączenia trybu Pure Direct omijającego obwody regulacji ton&oacute;w, dzięki czemu ścieżka sygnału jest maksymalnie skr&oacute;cona, a dźwięk dociera do Twoich uszu w najczystszej postaci.&nbsp; Dźwięk wysokiej rozdzielczości (hi-res)&nbsp; MusicCast R-N803D przystosowany jest do wsp&oacute;łpracy ze źr&oacute;dłami dźwięku wysokiej rozdzielczości. Urządzenie obsługuje natywny format DSD 2,8/5,6 MHz, pliki AIFF/WAV/FLAC 192 kHz/24 bity, a także Apple Lossless 96 kHz/24 bity. Amplituner wyposażony jest w słynny przetwornik c/a SABRE 9006AS 192 kHz/24 bity (firmy ESS), dzięki kt&oacute;remu zapewnia doskonały stosunek sygnał/szum. W połączeniu z oryginalnym modułem sieciowym Yamahy model ten perfekcyjnie wydobywa wszystkie dźwiękowe niuanse ze źr&oacute;deł high-res, idealnie odwzorowując nawet subtelną atmosferę sal koncertowych i ekspresyjne detale brzmienia. Wewnętrzny moduł sieciowy zapewniający wysoką jakość dźwięku Jednym z kluczowych komponent&oacute;w MusicCast R-N803D, decydującym o jakości dźwięku sieciowego, jest Yamaha Original Network Module. Układ ten wykorzystuje precyzyjny zegar, kt&oacute;ry gwarantuje niski jitter i udoskonala odwzorowanie dźwięku ze źr&oacute;deł high-res. Obniżenie szumu jitteru podczas odtwarzania dźwięku z sieci oraz źr&oacute;deł USB/Bluetooth pozwala użytkownikowi z łatwością rozr&oacute;żnić wszelkie niuanse zapisanej w nagraniach wysokiej rozdzielczości. Ciesz się funkcjami sieciowymi Serwisy muzyczne i łączność bezprzewodowa Szeroki dostęp do licznych źr&oacute;deł muzyki to r&oacute;wnież efekt kompatybilności z serwisami muzycznymi. MusicCast R-N803D obsługuje nie tylko popularne serwisy takie jak Spotify, lecz także coraz chętniej wykorzystywane (i oferujące jakość dźwięku CD) Tidal, Deezer oraz Qobuz. Dzięki temu użytkownik może korzystać z niemal nieograniczonych bibliotek muzycznych obejmujących miliony utwor&oacute;w z całego świata.&nbsp; Funkcjonalność modelu zwiększa wbudowana łączność: Bluetooth, AirPlay i Wi-Fi. Te bezprzewodowe technologie umożliwiają strumieniowanie muzyki wprost ze smartfona lub tabletu, np. z serwisu YouTube, a kompatybilność z protokołem DLNA pozwala słuchać nagrań udostępnionych w domowej sieci bezprzewodowej (np. z komputera lub serwera NAS). Unikalną funkcjonalnością amplitunera&nbsp;R-N803D&nbsp;jest r&oacute;wnież Bluetooth Output czyli transmisja Bluetooth z amplitunera do zewnętrznych głośnik&oacute;w/słuchawek Bluetooth - dowolnego producenta. Dzięki temu rozwiązaniu możesz np. wysłać na bluetoothowe słuchawki dźwięk z każdego podłączonego do&nbsp;R-N803D&nbsp;urządzenia - telewizora, odtwarzacza CD czy nawet gramofonu! Nagłośnij cały dom dzięki Yamaha MusicCast Yamaha MusicCast to rewolucyjny system, kt&oacute;ry umożliwia bezprzewodowe przesyłanie dźwięku&nbsp; pomiędzy domowymi urządzeniami audio z rodziny MusicCast. Wszystkie urządzenia Yamahy obsługujące ten system łączą się ze sobą poprzez domową sieć Wi-Fi, a do sterowania nimi służy łatwa w użytkowaniu, polskojęzyczna aplikacja MusicCast Controller. Teraz, bez potrzeby wertowania instrukcji obsługi, w prosty spos&oacute;b prześlesz dźwięk pomiędzy urządzeniami audio znajdującymi się w r&oacute;żnych pokojach. Ponadto każdy z domownik&oacute;w może w tym samym czasie słuchać innej muzyki, niezależnie od pozostałych użytkownik&oacute;w systemu, lub stworzyć grupę, aby to samo nagranie było odtwarzane w kilku pomieszczeniach. Stw&oacute;rz swoje domowe centrum rozrywki&nbsp; Wejścia cyfrowe i analogowe Ten model wyposażony jest w cyfrowe wejścia audio &ndash; zar&oacute;wno ze złączem optycznym, jak i wsp&oacute;łosiowym. Obydwa służą do przesyłania dźwięku: optyczne z telewizora, wsp&oacute;łosiowe z odtwarzacza Blu-ray/CD. Sygnał dźwiękowy cały czas pozostaje w cyfrowej postaci, aż do momentu przetworzenia przez wysokiej jakości DAC wewnątrz amplitunera, zapewniając czyste i dynamiczne brzmienie w przypadku każdego źr&oacute;dła rozrywki, od sportu i innych program&oacute;w, aż do film&oacute;w i koncert&oacute;w. R-N803D to także sporo wejśc analogowych, a wśr&oacute;d nich oczywiście wejście Phono dla podłączenia gramofonu. &nbsp; Tuner DAB/DABzapewniający dostęp do cyfrowych audycji radiowych Amplituner MusicCast R-N803D wyposażony jest w tuner DAB/DAB(Digital Audio Broadcasting). Pozwala on słuchać audycji radiowych nadawanych w cyfrowej postaci i zapewnia wysoką jakość dźwięku. Dalsze korzyści przynosi automatyczne strojenie stacji z dostępnej listy oraz wyświetlanie informacji takich jak nazwa rozgłośni. Odtwarzanie bez pauz (gapless playback) Funkcjonalność modelu zwiększa przydatna funkcja odtwarzania bez pauz (gapless playback). Funkcja ta rozwiązuje problem przerw pojawiających się pomiędzy ciągłymi utworami, np. podczas odtwarzania album&oacute;w koncertowych. Wsp&oacute;łpraca z asystentem głosowym Google Najnowsza aktualizacja oprogramowania zapewnia wsparcie Actions on Google dla wszystkich urządzeń Yamaha MusicCast &ndash; dzięki temu zyskujemy możliwość głosowej obsługi urządzeń Yamaha za pomocą Asystenta Google. Dzięki sterowaniu głosowemu uwalniamy się od konieczności sięgania po smartfon lub tablet, aby m&oacute;c cieszyć się swoją ulubioną muzyką. Możemy teraz głosowo włączać, wyłączać urządzenia, regulować ich głośność, zmieniać źr&oacute;dła czy łączyć urządzenia w grupy odtwarzające jednocześnie tę samą muzykę. Sprawdź, co potrafią Yamaha MusicCast i Asystent Google &ndash; przeczytaj poświęcony temu artykuł. Podsumowanie najważniejszych cech:&nbsp; Układ auto-kalibracji YPAO zapewniający idealny dźwięk Kompatybilność z popularnymi serwisami muzycznymi, wliczając Spotify, Tidal i Deezer Dostęp do wszystkich wsp&oacute;łczesnych źr&oacute;deł muzyki (sieciowe audio, serwisy strumieniowe, Bluetooth, AirPlay, radio FM) Nieograniczone możliwości rozrywki dzięki MusicCast Cyfrowe wejście audio do podłączenia telewizora lub odtwarzacza Blu-ray Tuner DAB/DABzapewniający dostęp do cyfrowych audycji radiowych Wejście Phono umożliwiające podłączenie gramofonu Obsługa dźwięku high-res Odtwarzanie bez pauz (gapless playback) Wsp&oacute;łpraca z asystentem głosowym Google Mocny wzmacniacz zapewniający wysoką jakość dźwięku Wewnętrzny moduł sieciowy zapewniający wysoką jakość dźwięku ',
          image:
            "https://www.tophifi.pl/media/catalog/product/cache/c76cfc952dbe1a24abf7200506210ae9/y/a/yamaha-r-n803d-black_1_2.png",
          name: "MusicCast R-N803D",
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            price: "5999.00",
            priceCurrency: "PLN",
            url: "https://www.tophifi.pl/multiroom/musiccast/yamaha-r-n803d.html",
          },
          review: [
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Adam",
              },
              datePublished: "2021-07-18",
              name: "opinia",
              reviewBody:
                "Gorąco polecam salon w Białymstoku.Obsluga na najwyższym poziomie.Zadowolony posiadacz amplituner Yamaha 803D.",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Adrian",
              },
              datePublished: "2021-07-03",
              name: "opinia",
              reviewBody:
                "Wybrałem zestaw Yamaha R-N803D z kolumnami Indiana Line Tesi 661.Budżet oczywiście miałem niższy, bo do 5 tys na zestaw, jednak ten zestaw zagrał o tyle lepiej, że dołożyłem i wziąłem raty 0%. Po przesiadce z amplitunera model niższego 602 różnica na korzyść bardzo duża i tutaj powiem szczerze, że aż takiej dużej się nie spodziewałem. Dodatkowo kolumny Tesi 661 grają dużo lepiej niż 561, tym bardziej, że mój salon ma prawie 40m, więc tesi 561 trochę za małe. Warto umówić się na prezentację i podejść posłuchać różnych opcji. W moim przypadku dołożyłem, bo faktycznie było warto. Taki sprzęt jednak nie kupuje się na 2-3 lata, a dłużej. ",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Kris",
              },
              datePublished: "2021-02-25",
              name: "opinia",
              reviewBody:
                "Jeden z najlepiej wycenionych klocków w audio. Mega funkcjonalny, z wszelkimi Tidalami, radiami i innymi wodotryskami. Gra już nie jak wybebeszony amplituner kina, a bliżej mu do prawdziwego wzmaka stereo. Porównywałem z Yamahą A-S701 na bazie którego jest niby zbudowany i faktycznie różnica na korzyść wzmaka jest, ale minimalna. Music Cast mnie czasem przy Tidalu denerwuje, jednak korzystam z apki Tidala i gram poprzez AirPlay. Spadku na jakości odtwarzając w ten sposób nie zauważyłem.",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Mojo",
              },
              datePublished: "2020-11-25",
              name: "opinia",
              reviewBody:
                "Jeszcze amplituner, jednak gra dużo lepiej niż niższe modele i konkurencja. Jak doczytałem później ma to sens, ponieważ Yamaha R-N803D jest zbudowana na platformie wzmacniacza stereo Yamaha A-S701. Do tego dołożono DAC, radio i funkcje sieciowe. Jako kombajn wypada rewelacyjnie jeśli chodzi o funkcjonalność i jakość dźwięku. Amplituner ten wybrałem na odsłuchu do moich starych JMLabów. Spokojnie daje radę je napędzić, a to spore monitory o sporych wymaganiach. Kilka wzmacniaczy poległo sromotnie. Yamaha oferuje dodatkowo kalibrację YPAO, która w moim przypadku mocno pomogła, ponieważ miałem problem z basem w swoim salonie. Ten model dostał nagrodę EISA nie bez powodu. Zasłużył jak najbardziej!",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Łukasz",
              },
              datePublished: "2020-05-29",
              name: "Recenzja",
              reviewBody:
                "Sprzęt zakupiłem po weekendzie majowym, w celu zastąpienia mojego starego wzmacniacza. Na papierze mocowo sprzęt był porównywalny jednak po dłuższym odsłuchu jestem szczerze zdziwiony zarówno jego funkcjami jak i dźwiękiem który jest o klasę wyższy niż poprzednik. Warto dopowiedzieć jeszcze kilka słów o Musiccaście, wewnętrznej aplikacji Yamahy do obsługi sprzętu Audio- Video. Aplikacja jest bardzo prosta i intuicyjna zbudowana na zasadzie kafelków. Łatwo się jej nauczyć, instrukcja konfiguracji nowych produktów wyjaśnia wszystko krok po kroku. Jestem bardzo zadowolony z mojego nowego nabytku i z pewnością polecę go znajomym ",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Łukasz",
              },
              datePublished: "2020-04-21",
              name: "Recenzja",
              reviewBody:
                "Jestem jeszcze na etapie odkrywania możliwości sprzętu, jednak jak do tego momentu mogę śmiało stwierdzić że jest on fantastycznie skonstruowany i posiada wiele funkcji, które znacznie ułatwiają życie. Dla przykładu wszytko czego używał w domu do odtwarzania muzyki mam z jabłuszkiem, i mogę dzięki aplikacji Musiccast strumieniować to na system audio za pomocą Airplaya. Boska funkcja! Do tego, przesyłam sobie muzykę z amplitunera na słuchawki w czasie strumieniowania muzyki na amplituner. Sprawia to że jest on na raz odbiornikiem i nadajnikiem sygnału. Super sprzęt!",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Fabien",
              },
              datePublished: "2020-02-29",
              name: "Recenzja",
              reviewBody: "Świetny amplituner. Wg. mnie the best na rynku!",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Paweł",
              },
              datePublished: "2020-01-10",
              name: "Recenzja",
              reviewBody:
                "Najlepszy ampli na rynku. Jedną gwiazdkę odejmuję za mielenie w Tidalu.",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "4",
              },
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "mowgli",
              },
              datePublished: "2020-01-02",
              name: "Recenzja",
              reviewBody:
                "Funkcjonalność kina domowego, a dźwięk jak w prawdziwym stereo. ",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Jarek",
              },
              datePublished: "2019-12-23",
              name: "Recenzja",
              reviewBody:
                "Yamaha jako Japońska marka od zawsze specjalizowała się w sprzętach typu &quot;All in One&quot; ale w tym przypadku przeszła samą siebie. Amplituner mogę określić jako bardzo udany a jego brzmienie jako bardzo ciepłe i pasujące do wielu kolumn. Dodatkowym atutem jest rozwiązanie wyciągnięte żywcem z systemów kina domowego, czyli mikrofon YPAO który spełnia swoją funkcję znakomicie, i pozwala zaoszczędzić sporo czasu w przypadku konfiguracji sprzętu. Ogólna ocena sprzętu bardzo dobra, szczerze zachęcam do zakupu w przypadku dylematu typu &quot;jaki sprzęt wybrać&quot; ;)",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
            },
          ],
          sku: "623280",
        },
      },
    ].forEach(({ text, result }) => expect(parseJson(text)).toEqual(result)));

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
      {
        html: loadProductHtml("multiroom/audio-pro/audio-pro-a36"),
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
