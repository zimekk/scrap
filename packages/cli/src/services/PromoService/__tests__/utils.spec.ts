import { loadProductHtml } from "../../utils";
import { fromHtml } from "../utils";

describe("PromoService", () => {
  xit("fromHtml", () =>
    [
      {
        html: loadProductHtml("promocje"),
        result: {
          list: [
            {
              desc: "Każdego dnia o 10:00 i 22:00 ustrzelisz wyjątkowe urządzenia, akcesoria i komponenty w supercenach. Spiesz się :)",
              href: "https://www.x-kom.pl/goracy-strzal",
              name: "Gorący strzał",
            },
            {
              desc: "Śledź wyprzedaże i nie przegap okazji.",
              href: "https://promocje.x-kom.pl/wyprzedaz",
              name: "łap ostatnie sztuki",
            },
            {
              code: "samsung-pro",
              desc: `Uwolnij bezkompromisową moc.
Twój kod rabatowy: samsung-pro`,
              href: "https://promocje.x-kom.pl/samsung-pro",
              name: "dyski SSD Samsung 980 PRO teraz w niższej cenie",
            },
            {
              code: "misja-lifestyle",
              desc: `Najlepsze do zadań specjalnych.
Twój kod rabatowy: misja-lifestyle`,
              href: "https://promocje.x-kom.pl/misja-lifestyle",
              name: "drony, hulajnogi i zegarki do 300 zł taniej na komunię i Dzień Dziecka",
            },
            {
              desc: "Smart prezent dla małych i dużych.",
              href: "https://www.x-kom.pl/szukaj?sort_by=accuracy_desc&f%5BproductMarks%5D%5BCrossedPrice%5D=1&q=amazfit",
              name: "zegarki Amazfit na Dzień Dziecka teraz z rabatem",
            },
            {
              desc: "Skorzystaj z okazji.",
              href: "https://lp.x-kom.pl/a/Samsung_S22_cashback_W21/",
              name: "kup Samsung Galaxy S22 i zyskaj 500 zł zwrotu na konto",
            },
            {
              code: "gwarancja",
              desc: `Teraz to nic nie kosztuje.
Twój kod rabatowy: gwarancja`,
              href: "https://lp.x-kom.pl/a/rozszerzona-gwarancja/",
              name: "zyskaj rozszerzoną gwarancję dla produktów x-kom, Silver Monkey, Silver Monkey X",
            },
            {
              code: "gosund",
              desc: `Nowoczesne, intuicyjne, inteligentne.
Twój kod rabatowy: gosund`,
              href: "https://promocje.x-kom.pl/gosund-smart-home",
              name: "odkryj akcesoria do domu Gosund nawet 55% taniej",
            },
            {
              desc: "Granicą jest jedynie wyobraźnia.",
              href: "https://promocje.x-kom.pl/fibaro",
              name: "stwórz inteligentny dom z produktami Fibaro teraz do 1000 zł taniej",
            },
            {
              code: "mama-gadzet",
              desc: `O mamo, ale rabaty.
Twój kod rabatowy: mama-gadzet`,
              href: "https://promocje.x-kom.pl/mama-gadzet",
              name: "złap produkty na Dzień Mamy w tym laptopy do 21% taniej",
            },
            {
              desc: "Bogata funkcjonalność, płynny obraz.",
              href: "https://www.x-kom.pl/szukaj?q=502119%20710020%20607621%20546536%20515527%20693233%20670087%20546535%20681053%20526930%20580062%20715325%20720111%20747744%20564950%20587912%20729861%20747746%20605978%20607684%20633091%20563846%20693228%20718664%20603415%20547723%20546531%20506938%20564953%20725144%20607617%20718653%20639458",
              name: "odkryj moniotry MSI teraz w niższych cenach",
            },
            {
              desc: "Dobrze zgrana para.",
              href: "https://lp.x-kom.pl/a/samsung-promocje/",
              name: "kup Samsung Galaxy S21FE i zyskaj Galaxy Watch 4",
            },
            {
              desc: "Odciśnij smocze piętno w gamingu.",
              href: "https://promocje.x-kom.pl/msi-promocje",
              name: "kup monitor MSI i zgarnij rabat na akcesoria i fotele gamingowe",
            },
            {
              desc: "Skorzystaj z okazji.",
              href: "https://www.x-kom.pl/szukaj?q=745604%2B745600%2B725831%2B621087%2B695303%2B713652",
              name: "sprawdź promocje na produkty realme",
            },
            {
              desc: "Najpierw przyjemności, później płatności.",
              href: "https://lp.x-kom.pl/a/kup-teraz-zaplac-pozniej/",
              name: "kup komputer G4M3R, Element Plus lub H&O i zacznij spłacać po 3 miesiącach",
            },
            {
              desc: "Logitech ożywia gaming, Red Bull umysł, Ty zwyciężasz i oszczędzasz.",
              href: "https://lp.x-kom.pl/a/logitech-wiosenny-gaming/",
              name: "odbierz rabat na akcesoria Logitech G i zgarnij dwupak Red Bulla w prezencie",
            },
            {
              desc: "Promocja trwa do 30 czerwca 2022 roku.",
              href: "https://www.x-kom.pl/szukaj?sort_by=accuracy_desc&f%5Bmanufacturers%5D%5B46%5D=1&q=737171%2B737167%2B737162%2B737158%2B736954%2B736940%2B736934%2B736928%2B734263%2B721245%2B721241%2B719517%2B719504%2B717895%2B694864%2B689174%2B689171%2B689082%2B611154%2B584234",
              name: "kup laptop Lenovo Yoga  i odbierz do 500 zł zwrotu na konto",
            },
            {
              desc: "Drukuj nawet 5 lat za darmo.",
              href: "https://www.x-kom.pl/szukaj?q=446405%2B616653",
              name: "kup drukarkę Canon  z zestawem tuszy gratis",
            },
            {
              desc: "Zadbaj o swoje bezpieczeństwo nie tylko w grach.",
              href: "https://www.x-kom.pl/szukaj?q=725225%2B725222%2B725212%2B725202%2B725201%2B725199%2B725197%2B725226%2B725224%2B725223%2B725221%2B725219%2B725217%2B725216%2B725214%2B725213%2B725207%2B725206%2B725203%2B725198%2B725196%2B696798%2B696815%2B696803%2B696794%2B696786%2B696805%2B696790%2B696808%2B696799%2B696797%2B696787%2B696814%2B696810%2B696806%2B696813%2B696802%2B696793%2B696791%2B696785%2B696812%2B696809%2B696807%2B696796%2B696788%2B729826%2B729829%2B729831",
              name: "kup komputer G4M3R lub ELEMENT PLUS z 2 letnią ochroną Norton 360 for Gamers",
            },
            {
              desc: "Wiosenny cashback Sony.",
              href: "https://www.x-kom.pl/g-8/c/1117-telewizory.html?f%5Bmanufacturers%5D%5B16%5D=1",
              name: "kup telewizor Sony z soundbarem i otrzymaj 500 zł zwrotu",
            },
            {
              desc: "Promocja trwa do wyczerpania zapasów.",
              href: "https://www.x-kom.pl/szukaj?q=710215%2B697744%2B681493%2B675167%2B670144%2B665342%2B624379%2B622071%2B612794%2B590583%2B577972%2B577953%2B577925%2B577799%2B553924%2B553912%2B526473%2B517957%2B517956%2B506339%2B492480%2B492472%2B492467%2B477500%2B477493%2B463696%2B460188%2B386292%2B152863",
              name: "kup monitor Acer i otrzymaj kamerę w prezencie",
            },
            {
              desc: "Złap okazję w supercenie.",
              href: "https://www.x-kom.pl/szukaj?q=732555%2B732565%2B732560%2B732563",
              name: "kup Samsung Galaxy A53 5G i zgarnij słuchawki Galaxy Buds 2 w prezencie",
            },
            {
              desc: "Zyskaj 100% pewności.",
              href: "https://lp.x-kom.pl/a/telewizor-dvbt2/",
              name: "kup telewizor z DVB-T2 w x-komie i skorzystaj z dofinansowania 250 zł",
            },
            {
              desc: "Gamingowa technologia jutra.",
              href: "https://lp.x-kom.pl/a/steelseries-nowosci/",
              name: "poznaj najnowsze słuchawki Arctis Nova Pro",
            },
            {
              desc: "Nowy drapieżnik w e-sporcie.",
              href: "https://www.x-kom.pl/szukaj?q=1042628%2B1042644",
              name: "poznaj ultralekką mysz Razer Viper V2 Pro",
            },
            {
              desc: "Ultralekka, precyzyjna, wygodna.",
              href: "https://www.x-kom.pl/p/746373-myszka-bezprzewodowa-spc-gear-lix-plus-wireless.html",
              name: "poznaj nową mysz bezprzewodową SPC Gear LIX Plus Wireless",
            },
            {
              desc: "Pozostań zawsze w kontakcie.",
              href: "https://www.x-kom.pl/szukaj?q=748831%20748833",
              name: "poznaj nowe słuchawki bezprzewodowe Sony LinkBuds S",
            },
            {
              desc: "Skorzystaj z okazji.",
              href: "https://www.x-kom.pl/szukaj?q=1041182%2B1041183%2B1041161%2B1041181%2B1041179",
              name: "zamów w przedsprzedaży Huawei Watch GT3 Pro i zgarnij słuchawki w prezencie",
            },
            {
              desc: "Mini jest potężne.",
              href: "https://www.x-kom.pl/szukaj?q=740207%2B740208%2B740205%2B740200",
              name: "poznaj nowy realme Pad Mini 8.7",
            },
            {
              desc: "Piękna i bestia.",
              href: "https://www.x-kom.pl/szukaj?q=744134%2B743820%2B744133",
              name: "poznaj nową Motorolę Edge 30 5G",
            },
            {
              desc: "Zarejestruj zakup telefonu. Dodaj kartę VISA do płatności zbliżeniowych w telefonie. Korzystaj z płatności zbliżeniowych. Wygrywaj.",
              href: "https://www.x-kom.pl/szukaj?q=566366%2B566366%2B566373%2B566373%2B631887%2B636149%2B639889%2B639890%2B639891%2B639900%2B639902%2B639906%2B640191%2B640191%2B643199%2B643199%2B646983%2B646984%2B646985%2B649086%2B649086%2B649087%2B649087%2B649100%2B649101%2B653624%2B653625%2B653625%2B653626%2B653631%2B653631%2B654701%2B654701%2B654702%2B654703%2B654703%2B654704%2B654704%2B654705%2B654705%2B654706%2B654707%2B662138%2B671786%2B671786%2B682124%2B682125%2B682126%2B682130%2B683133%2B683135%2B683136%2B683139%2B683147%2B683147%2B683149%2B683171%2B683173%2B683178%2B683180%2B683181%2B683182%2B683923%2B683926%2B683926%2B691118%2B691121%2B691125%2B691154%2B695439%2B696647%2B696649%2B696651%2B696654%2B696664%2B696665%2B696669%2B696671%2B696674%2B696676%2B696679%2B720189%2B720189%2B720190%2B720190%2B720191%2B720191%2B720193%2B720193%2B720194%2B720194%2B728431%2B728432%2B728433%2B733551%2B733552%2B733553%2B733556%2B733558%2B733575%2B733576%2B733581%2B733584%2B733584%2B733586%2B73523",
              name: "płać zbliżeniowo telefonem Xiaomi i wygrywaj nagrody",
            },
            {
              desc: "Przejmij kontrolę nad wirtualnym torem.",
              href: "https://lp.x-kom.pl/a/formula-x/",
              name: "złap nagrody i promocje na sprzęt w turnieju Formula X",
            },
          ],
        },
      },
    ].forEach(({ html, result }) => expect(fromHtml(html)).toEqual(result)));
});
