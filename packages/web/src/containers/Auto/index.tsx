import React from "react";
import styles from "./styles.module.scss";

const parseProps = (props: string): Record<string, string> =>
  props
    .split("\n")
    .map((line) => line.replace(/^(\(\S+\)\s*)/, "").trim())
    .filter(Boolean)
    .map((line) => line.split("\t"))
    .reduce(
      (result, [key, value]) => Object.assign(result, { [key]: value }),
      {},
    );

const items = [
  {
    name: "audi-a6-bang-olufsen-matrix-led-hak-holowniczy-pakiet-s-line-interieur-ID6GjAa0",
    thumbnail:
      "eyJmbiI6InNrdWprazZra3JodDEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.MG75XSkEpYXfYVXpaXzSrfnjaHyutHhXDU560SgOLTs",
    props: `
Cena\t269 900 PLN
Rok produkcji\t2023
Przebieg\t13 661 km
Pojemność skokowa\t1 984 cm3
Rodzaj paliwa\tBenzyna
Moc\t265 KM
Skrzynia biegów\tAutomatyczna
Napęd\t4x4 (dołączany automatycznie)
Typ nadwozia\tKombi
Kolor\tBiały
Data pierwszej rejestracji w historii pojazdu\t29 września 2023
Numer rejestracyjny pojazdu\tWE6CR80
VIN\tWAUZZZF21RN005750

GWARANCJA FABRYCZNA\t2028-09-19
KOLOR NADWOZIA\tGlacier White Metallic

Systemy multimedialne

Współpraca z LTE\tdla Audi phone box
Audi smartphone interface\tz Application Store
Bang & Olufsen Premium Sound System z dźwiękiem 3D
Audi phone box

Systemy wspomagające kierowcę

Kamera cofania
Wyświetlacz Head-Up
Pakiet systemów wspomagających w ruchu pozamiejskim
Kamera z czujnikiem odległości\t(w systemie wspomagającym kierowcę)
Adaptacyjny asystent jazdy z Emergency Assist
Asystent parkowania z Audi parking system plus
Adaptacyjny asystent prędkości z ogranicznikiem prędkości, asystentem efektywności, asystentem omijania i asystentem skrętu

Materiał

Tapicerka tkaninowa\tKombinacja mikrofibra Dinamica Frequenz/skóra z wytłoczonym logo S

Fotele

Pakiet bezpieczeństwa dzieci
Fotele przednie sportowe
Mocowanie ISOFIX do fotelika dziecięcego przy prawym przednim fotelu
Ogrzewanie foteli przednich\ti skrajnych siedzeń tylnych
4-kierunkowa regulacja podparcia odcinka lędźwiowego kręgosłupa dla przednich siedzeń

Reflektory

Reflektory Matrix LED, światła tylne LED i układ zmywania reflektorów
Reflektory przednie\tMatrix LED
Reflektory tylne w technice LED
Układ zmywania reflektorów

Komfort

Pakiet schowków
Hak holowniczy
Lusterko wewnętrzne automatycznie przyciemniane, bez ramki
Klimatyzacja automatyczna\t4-strefowa komfortowa

Systemy dachowe i przeszklenie

Przyciemnione szyby chroniące przed słońcem
Szyby w drzwiach i szyby boczne z izolacją akustyczną
Dach szklany panoramiczny
Adaptacyjne wycieraczki przedniej szyby ze zintegrowanymi spryskiwaczami

Oświetlenie

Pakiet oświetlenia Ambiente

Wygląd wewnętrzny

Pedały i podparcie pod lewą nogę ze stali nierdzewnej
Aplikacje dekoracyjne\tz ciemnego szczotkowanego, matowego aluminium
Podsufitka tkaninowa w kolorze czarnym
Diody w przednich drzwiach z projekcją logo na podłożu

Linie i pakiety

Pakiet S Line Interieur

Technika i bezpieczeństwo

Zbiornik paliwa\to zwiększonej pojemności
Poduszki powietrzne z przodu, prawa poduszka z możliwością dezaktywacji
Boczne poduszki powietrzne z przodu oraz system kurtyn powietrznych chroniących głowy i podświetlane zamki pasów bezpieczeństwa
Kierownice i elementy obsługi

Kierownica wielofunkcyjna, 3-ramienna, z przełącznikami zmiany przełożenia, obszyta skórą
Oznaczenie S line

Wygląd zewnętrzny

Brak oznaczenia modelu i mocy/technologii
Relingi dachowe\tczarne
Pakiet optyczny Czerń\tplus
Obudowy lusterek w kolorze czarnym

Koła i opony

Obręcze kół ze stopu metali lekkich\t8,5Jx20", 5 - ramienne V-design, z oponami 255/40 R20. 
`,
  },
  {
    name: "audi-a6-matrix-hak-pre-sense-rear-pakiet-czern-ID6GiJWb",
    thumbnail:
      "eyJmbiI6ImRlbnF1dG1iNnJkbDMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.G0h4QuvxQISOHTDUThie7hVR2avcQns9ESHp7gJQJXQ",
    props: `
Cena\t269 900 PLN
Rok produkcji\t2023
Przebieg\t15 689 km
Pojemność skokowa\t1 984 cm3
Rodzaj paliwa\tBenzyna
Moc\t265 KM
Skrzynia biegów\tAutomatyczna
Napęd\t4x4 (dołączany automatycznie)
Typ nadwozia\tSedan???
Kolor\tSzary
Data pierwszej rejestracji w historii pojazdu\t27 czerwca 2023
VIN\tWAUZZZF20PN082722

GWARANCJA FABRYCZNA\t2028-06-18 / 100 000KM
KOLOR NADWOZIA\tszary Daytona metalik

Systemy multimedialne

Współpraca z LTE\tdla Audi phone box
Audi smartphone interface
Złącza USB z funkcją ładowania w tylnej części kabiny
Audi virtual cockpit Plus
Audi sound system
Audi phone box

Wygląd wewnętrzny

Przyciski obsługowe czarne z połyskiem, z haptycznym feedbackiem i elementami w optyce aluminium
Pedały i podparcie pod lewą nogę ze stali nierdzewnej
Listwy progowe\tw przednich i tylnych drzwiach z aluminiowymi wstawkami, podświetlane, przednie z logo S
Aplikacje dekoracyjne\tz matowego aluminium
Podsufitka tkaninowa w kolorze czarnym
Deska rozdzielcza i wyłożenie drzwi dwuczęściowe, jedno lub dwukolorowe

Systemy wspomagające kierowcę

Asystent skrzyżowań
Kamery obserwujące otoczenie
Kamera z czujnikiem odległości\t(w systemie wspomagającym kierowcę)
System rozpoznawania znaków drogowych\twspółpracujący z kamerą
Adaptacyjny asystent jazdy z Emergency Assist
Audi pre sense front
Audi pre sense rear
Asystent parkowania z Audi parking system plus
Asystent zmiany pasa ruchu z funkcją ostrzegania przy wysiadaniu i asystentem ruchu poprzecznego z tyłu
Adaptacyjny asystent prędkości z ogranicznikiem prędkości, asystentem efektywności, asystentem omijania i asystentem skrętu

Materiał

Tapicerka tkaninowa\tKombinacja mikrofibra Dinamica Frequenz/skóra z wytłoczonym logo S

Komfort

Kluczyk komfortowy z czujnikiem zwalniającym blokadę bagażnika i autoalarmem
Hak holowniczy
Lusterko wewnętrzne automatycznie przyciemniane, bez ramki
Lusterka zewnętrzne elektrycznie regulowane, ogrzewane i składane, automatycznie przyciemniane, z funkcją pamięci ustawień lusterka podczas manewru cofania
Klimatyzacja automatyczna\t4-strefowa

Fotele

Pakiet bezpieczeństwa dzieci
Mocowanie ISOFIX do fotelika dziecięcego przy prawym przednim fotelu
Przednie siedzenia z elektryczną regulacją i pamięcią ustawień dla fotela kierowcy
Ogrzewanie foteli przednich

Linie i pakiety

Pakiet stylistyczny S line Exterieur
Pakiet sportowy S line

Reflektory

Reflektory przednie\tHD Matrix LED
Reflektory przednie\tHD Matrix LED
Światła tylne w technice LED z dynamicznymi kierunkowskazami
Układ zmywania reflektorów

Systemy dachowe i przeszklenie

Przyciemnione szyby chroniące przed słońcem
Szyby w drzwiach i szyby boczne z izolacją akustyczną
Wycieraczki przedniej szyby adaptacyjne, z wbudowanymi dyszami

Oświetlenie

Pakiet oświetlenia Ambiente
Diody w przednich drzwiach z projekcją logo na podłożu

Wygląd zewnętrzny

Logo S line, na zewnątrz
Zderzaki S line
Brak oznaczenia modelu i mocy/technologii
Relingi dachowe\tczarne
Pakiet optyczny Czerń\tplus
Spojler dachowy RS
Obudowy lusterek w kolorze czarnym

Technika i bezpieczeństwo

Zawieszenie z regulacją amortyzatorów
Poduszki powietrzne z przodu, prawa poduszka z możliwością dezaktywacji

Kierownice i elementy obsługi

Oznaczenie S line

Koła i opony

Obręcze kół ze stopu metali lekkich\t10-spoke Y-style, Graphite Gray, diamond-turned, 8.5J x 21, 255/35 R21 tires
Śruby kół zabezpieczone przed kradzieżą, z sygnalizacją poluzowanej śruby
`,
  },
  {
    name: "audi-a6-matrix-s-line-pakiet-czern-tempomat-adaptacyjny-head-up-ID6GhDID",
    thumbnail:
      "eyJmbiI6InZzbzZ4YzN0am41Ny1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.G2e2LAxD2grC9IPBjH523DhGinz9hDFVp9vhDFDskQE",
    props: `
Cena\t274 900 PLN
Rok produkcji\t2023
Przebieg\t11 075 km
Pojemność skokowa\t1 984 cm3
Rodzaj paliwa\tBenzyna
Moc\t265 KM
Skrzynia biegów\tAutomatyczna
Napęd\t4x4 (dołączany automatycznie)
Typ nadwozia\tKombi
Kolor\tCzarny
Data pierwszej rejestracji w historii pojazdu\t22 czerwca 2023
Numer rejestracyjny pojazdu\tWE6CG98
VIN\tWAUZZZF24PN070332

GWARANCJA FABRYCZNA\t2028-06-12 / 100 000KM
KOLOR NADWOZIA\tczarny Mythos metalik (LY9T)

Systemy multimedialne

Współpraca z LTE\tdla Audi phone box
Audi smartphone interface
Złącza USB z funkcją ładowania w tylnej części kabiny
Audi virtual cockpit Plus
Audi sound system
Audi phone box

Systemy wspomagające kierowcę

Asystent skrzyżowań
Kamery obserwujące otoczenie
Wyświetlacz Head-Up
Kamera z czujnikiem odległości\t(w systemie wspomagającym kierowcę)
System rozpoznawania znaków drogowych\twspółpracujący z kamerą
Adaptacyjny asystent jazdy z Emergency Assist
Audi pre sense front
Audi pre sense rear
Asystent parkowania z Audi parking system plus
Asystent zmiany pasa ruchu z funkcją ostrzegania przy wysiadaniu i asystentem ruchu poprzecznego z tyłu
Adaptacyjny asystent prędkości z ogranicznikiem prędkości, asystentem efektywności, asystentem omijania i asystentem skrętu

Materiał

Tapicerka tkaninowa\t"Sequenz"/ częściowo skórzana z tłoczeniem "S"

Fotele

Pakiet bezpieczeństwa dzieci
Mocowanie ISOFIX do fotelika dziecięcego przy prawym przednim fotelu
Przednie siedzenia z elektryczną regulacją i pamięcią ustawień dla fotela kierowcy
Ogrzewanie foteli przednich

Linie i pakiety

Pakiet stylistyczny S line Exterieur
Pakiet sportowy S line

Reflektory

Reflektory przednie\tHD Matrix LED
Reflektory przednie\tHD Matrix LED
Światła tylne w technice LED z dynamicznymi kierunkowskazami
Układ zmywania reflektorów

Komfort

Pakiet schowków
Hak holowniczy
Lusterko wewnętrzne automatycznie przyciemniane, bez ramki
Lusterka zewnętrzne elektrycznie regulowane, ogrzewane i składane, automatycznie przyciemniane, z funkcją pamięci ustawień lusterka podczas manewru cofania
Klimatyzacja automatyczna\t4-strefowa

Systemy dachowe i przeszklenie

Przyciemnione szyby chroniące przed słońcem
Wycieraczki przedniej szyby adaptacyjne, z wbudowanymi dyszami

Oświetlenie

Pakiet oświetlenia Ambiente

Wygląd wewnętrzny

Pedały i podparcie pod lewą nogę ze stali nierdzewnej
Listwy progowe\tw przednich i tylnych drzwiach z aluminiowymi wstawkami, podświetlane, przednie z logo S
Aplikacje dekoracyjne\tz matowego aluminium
Podsufitka tkaninowa w kolorze czarnym

Technika i bezpieczeństwo

Zbiornik paliwa\to zwiększonej pojemności
Zawieszenie sportowe
Poduszki powietrzne z przodu, prawa poduszka z możliwością dezaktywacji

Wygląd zewnętrzny

Logo S line, na zewnątrz
Zderzaki S line
Brak oznaczenia modelu i mocy/technologii
Relingi dachowe\tczarne
Pakiet optyczny Czerń\tplus
Tylny spojler w kolorze nadwozia

Kierownice i elementy obsługi

Oznaczenie S line

Koła i opony

Obręcze kół ze stopu metali lekkich\t10-spoke Y-style, Graphite Gray, diamond-turned, 8.5J x 21, 255/35 R21 tires
Śruby kół zabezpieczone przed kradzieżą, z sygnalizacją poluzowanej śruby
`,
  },
  {
    name: "audi-a6-ID6GeKOw",
    thumbnail:
      "eyJmbiI6ImVmM3hnNmtpaWE0dy1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.gV0CF3KU4Efyx90sit9X1HHQCX5_qaVkfK_9L74XaQQ",
    props: `
Cena\t269 900 PLN
Rok produkcji\t2023
Przebieg\t44 934 km
Pojemność skokowa\t1 984 cm3
Rodzaj paliwa\tBenzyna
Moc\t265 KM
Skrzynia biegów\tAutomatyczna
Napęd\t4x4 (dołączany automatycznie)
Typ nadwozia\tKombi
Kolor\tSzary
Data pierwszej rejestracji w historii pojazdu\t27 czerwca 2023
Numer rejestracyjny pojazdu\tWE5CJ24
VIN\tWAUZZZF27PN065304

GWARANCJA FABRYCZNA\t2028-06-15 / 100 000KM
KOLOR NADWOZIA\tszary Chronos metalik

Systemy multimedialne

Współpraca z LTE\tdla Audi phone box
Audi smartphone interface
Złącza USB z funkcją ładowania w tylnej części kabiny
Audi virtual cockpit Plus
Audi sound system
Audi phone box

Systemy wspomagające kierowcę

Kamera cofania
Wyświetlacz Head-Up
Pakiet systemów wspomagających w ruchu pozamiejskim
Kamera z czujnikiem odległości\t(w systemie wspomagającym kierowcę)
System rozpoznawania znaków drogowych\twspółpracujący z kamerą
Adaptacyjny asystent jazdy z Emergency Assist
Asystent parkowania z Audi parking system plus
Adaptacyjny asystent prędkości z ogranicznikiem prędkości, asystentem efektywności, asystentem omijania i asystentem skrętu

Materiał

Tapicerka tkaninowa\t"Sequenz"/ częściowo skórzana z tłoczeniem "S"

Fotele

Pakiet bezpieczeństwa dzieci
Mocowanie ISOFIX do fotelika dziecięcego przy prawym przednim fotelu
Przednie siedzenia z elektryczną regulacją i pamięcią ustawień dla fotela kierowcy
Ogrzewanie foteli przednich\ti skrajnych siedzeń tylnych

Linie i pakiety

Pakiet stylistyczny S line Exterieur
Pakiet sportowy S line

Reflektory

Reflektory przednie\tHD Matrix LED
Światła tylne w technice LED z dynamicznymi kierunkowskazami
Układ zmywania reflektorów

Komfort

Pakiet schowków
Hak holowniczy
Lusterko wewnętrzne automatycznie przyciemniane, bez ramki
Lusterka zewnętrzne elektrycznie regulowane, ogrzewane i składane, automatycznie przyciemniane, z funkcją pamięci ustawień lusterka podczas manewru cofania
Klimatyzacja automatyczna\t4-strefowa
Ogrzewanie postojowe\ti wentylacja

Systemy dachowe i przeszklenie

Przyciemnione szyby chroniące przed słońcem
Wycieraczki przedniej szyby adaptacyjne, z wbudowanymi dyszami

Oświetlenie

Pakiet oświetlenia Ambiente

Wygląd wewnętrzny

Pedały i podparcie pod lewą nogę ze stali nierdzewnej
Listwy progowe\tw przednich i tylnych drzwiach z aluminiowymi wstawkami, podświetlane, przednie z logo S
Aplikacje dekoracyjne\tz matowego aluminium
Podsufitka tkaninowa w kolorze czarnym

Technika i bezpieczeństwo

Zbiornik paliwa\to zwiększonej pojemności
Zawieszenie sportowe
Poduszki powietrzne z przodu, prawa poduszka z możliwością dezaktywacji

Wygląd zewnętrzny

Logo S line, na zewnątrz
Zderzaki S line
Brak oznaczenia modelu i mocy/technologii
Relingi dachowe\tczarne
Pakiet optyczny Czerń
Tylny spojler w kolorze nadwozia

Koła i opony

Śruby kół zabezpieczone przed kradzieżą, z sygnalizacją poluzowanej śruby
Obręcze kół ze stopu metali lekkich\tAudi Sport 8,5Jx21", 5 - ramienne z oponami 255/35 R21.

Kierownice i elementy obsługi

Oznaczenie S line
`,
  },
  {
    name: "audi-a6-ID6GiK0q",
    thumbnail:
      "eyJmbiI6IjRpbWhuOWI0dmduZjEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.ikMLDVkIZyHmA1Bd7Av7T3AepKZssJm7GsNsdhpfFo0",
    props: `
Cena\t269 900 PLN
Rok produkcji\t2023
Przebieg\t19 417 km
Pojemność skokowa\t1 984 cm3
Rodzaj paliwa\tBenzyna
Moc\t265 KM
Skrzynia biegów\tAutomatyczna
Napęd\t4x4 (dołączany automatycznie)
Typ nadwozia\tKombi
Kolor\tSzary
Data pierwszej rejestracji w historii pojazdu\t12 kwietnia 2023
Numer rejestracyjny pojazdu\tWE5CV27
VIN\tWAUZZZF24PN057466

(PQD) "S line" exterior package
(2K7)Sportowa stylistyka przednich i tylnych zderzaków
(0NB)Napis S-Line, na zewnatrz
(VT5)Listwy progowe\taluminiowe, na przednich listwach logo "S", podświetlane
(5J4)Body-colored rear spoiler
(5TG) Aplikacje dekoracyjne z matowego aluminium

(PBY) Assistance package Plus with remote park assist plus
(QK1)Kamera z czujnikiem odległości\t(dla systemu wspomagającego kierowcę Pre sense city)
(KA6)System kamer 360
(7X5)Asystent parkowania
(QR9)System rozpoznawania znaków drogowych
(6K8)Audi pre sense front
(6I6)Ostrzeżenie o zjechaniu z pasa ruchu, asystent wspomagający kierowcę w nagłych przypadkach medycznych i automatyczne wzy
(JX1)Asystent skrzyżowań
(7W3)Audi pre sense rear
(8T5)Adaptive cruise control
(7Y1)Lane change assistant incl. exit warning system and rear cross traffic alert
(FT1)Zdalne parkowanie
(IU1) Audi smartphone interface
(9VD) Audi sound system
(9S9) Audi virtual cockpit Plus

(WDC) Business package
(9AQ)Klimatyzacja automatyczna\t4-strefowa
(9ZE)Audi phone box
(9PF)Wycieraczki przedniej szyby adaptacyjne, z wbudowanymi dyszami
(4L6)Lusterko wewnętrzne z automatyczną funkcją przeciwoślepieniową
(GB1)Współpraca z LTE\tdla Audi phone box
(PGC) Comfort key with sensor-controlled luggage compartment release
(4I3)Comfort key with sensor-controlled luggage compartment release without SAFELOCK
(1D4) Hak holowniczy
(6XL) Lusterka zewnętrzne regulowane i składane elektrycznie\tpodgrzewane
(6FJ) Lusterka zewnętrzne w kolorze czarnym zpołyskiem
(PV3) Memory feature for the driver seat
(3L4)Elektryczna regulacja foteli przednich\tz funkcją pamięci ustawień dla fotela kierowcy
(PIH) Mocowanie fotelika dla dziecka ISOFIX do fotela pasażera
(3G4)Isofix - mocowanie fotelika dziecięcegona skrajnych fotelach z tyłu i fotelu pasażera z przodu
(4UF)Poduszki powietrzne z dezaktywacją poduszki powietrznej pasażera
(52Y) Obręcze kół ze stopu metali lekkich\tAudi Sport 8,5Jx20", 5 - ramienne, z
(4A3) Ogrzewanie foteli przednich
(9M9) Ogrzewanie postojowe
(QQ1) Pakiet oświetlenia Ambiente
(2V9) Pakiet Air Quality

(QE1) Pakiet dodatkowych schowków

(4ZP) Pakiet optyczny Czerń\tplus

(WQS) Pakiet stylistyczny wnętrza S line Interieur
(0NB)Napis S-Line, na zewnatrz
(6NQ)Podsufitka tkaninowa w kolorze czarnym
(1BE)Zawieszenie sportowe
(VT5)Listwy progowe\taluminiowe, na przednich listwach logo "S", podświetlane
(VF1)Aluminiowe nakładki na pedały
(6F7)Oznaczenie S line
(EA8) Przedluzenie gwarancji 3 lata, maks. 100.000 km
(QL5) Przyciemnione szyby tylne (szyby privacy)
(PX6) Reflektory przednie\tMatrix LED
(8X1)Układ zmywania reflektorów
(8G4)Reflektory przednie LED Audi Matrix
(8SP)Reflektory tylne w technice LED
(3S2) Relingi dachowe\tw kolorze czarnym
(N7V) Tapicerka tkaninowa\t"Sequenz"/ częściowo skórzana z tłoczeniem "S"
(KS1) Wyświetlacz Head-Up
(0M5) Zbiornik paliwa\t73l
`,
  },
  {
    name: "audi-a6-s-line-gwarnacja-hak-fv23-ID6GeJVs",
    thumbnail:
      "eyJmbiI6ImE2MWRsamx5MmpsYjEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.ZoEyBSFUd7N8WHexRSDlq_8TC6vJAe3lBFDU8Y6RdRs",
    props: `
Cena\t269 900 PLN
Rok produkcji\t2023
Przebieg\t12 418 km
Pojemność skokowa\t1 984 cm3
Rodzaj paliwa\tBenzyna
Moc\t265 KM
Skrzynia biegów\tAutomatyczna
Napęd\tNa przednie koła???
Typ nadwozia\tKombi
Kolor\tSzary
Data pierwszej rejestracji w historii pojazdu\t12 maja 2023
Numer rejestracyjny pojazdu\tWE5CV28
VIN\tWAUZZZF22PN064349

(PQD) "S line" exterior package
(2K7)Sportowa stylistyka przednich i tylnych zderzaków
(0NB)Napis S-Line, na zewnatrz
(VT5)Listwy progowe\taluminiowe, na przednich listwach logo "S", podświetlane
(5J4)Body-colored rear spoiler
(5TG) Aplikacje dekoracyjne z matowego aluminium
(7X5) Asystent parkowania
(IU1) Audi smartphone interface
(9VD) Audi sound system
(9S9) Audi virtual cockpit Plus

(WDC) Business package
(9AQ)Klimatyzacja automatyczna\t4-strefowa
(9ZE)Audi phone box
(9PF)Wycieraczki przedniej szyby adaptacyjne, z wbudowanymi dyszami
(4L6)Lusterko wewnętrzne z automatyczną funkcją przeciwoślepieniową
(GB1)Współpraca z LTE\tdla Audi phone box
(PGC) Comfort key with sensor-controlled luggage compartment release
(4I3)Comfort key with sensor-controlled luggage compartment release without


(1D4) Hak holowniczy
(KA2) Kamera cofania
(6XL) Lusterka zewnętrzne regulowane i składane elektrycznie\tpodgrzewane
(PV3) Memory feature for the driver seat
(3L4)Elektryczna regulacja foteli przednich\tz funkcją pamięci ustawień dla fotela kierowcy
(PIH) Mocowanie fotelika dla dziecka ISOFIX do fotela pasażera
(3G4)Isofix - mocowanie fotelika dziecięcegona skrajnych fotelach z tyłu i fotelu pasażera z przodu
(4UF)Poduszki powietrzne z dezaktywacją poduszki powietrznej pasażera
(53A) Obręcze kół ze stopu metali lekkich\tAudi Sport 8,5Jx21", 5 - ramienne z
(4A4) Ogrzewanie foteli przednich\ti skrajnych siedzeń tylnych
(9M9) Ogrzewanie postojowe
(QQ1) Pakiet oświetlenia Ambiente
(QE1) Pakiet dodatkowych schowków

(WQS) Pakiet stylistyczny wnętrza S line Interieur
(0NB)Napis S-Line, na zewnatrz
(6NQ)Podsufitka tkaninowa w kolorze czarnym
(1BE)Zawieszenie sportowe
(VT5)Listwy progowe\taluminiowe, na przednich listwach logo "S", podświetlane
(VF1)Aluminiowe nakładki na pedały
(6F7)Oznaczenie S line

(PCC) Pakiet systemów wspomagających w ruchu pozamiejskim
(6I6)Ostrzeżenie o zjechaniu z pasa ruchu, asystent wspomagający kierowcę w nagłych przypadkach medycznych i automatyczne wzy
(8T5)Adaptive cruise control
(QK1)Kamera z czujnikiem odległości\t(dla systemu wspomagającego kierowcę Pre sense city)

(EA8) Przedluzenie gwarancji 3 lata, maks. 100.000 km
(QL5) Przyciemnione szyby tylne (szyby privacy)
(PXC) Reflektory przednie\tHD Matrix LED
(8X1)Układ zmywania reflektorów
(8SQ)Światła tylne w technice LED z dynamicznymi kierunkowskazami
(8G5)Reflektory przednie\tHD Matrix LED
(QR9) System rozpoznawania znaków drogowych
(N7V) Tapicerka tkaninowa\t"Sequenz"/ częściowo skórzana z tłoczeniem "S"
(UE8) Wejście USB do ładowania w konsoli z tyłu
(KS1) Wyświetlacz Head-Up
(0M5) Zbiornik paliwa\t73l
`,
  },
  {
    name: "audi-a6-s-line-head-up-hak-zawieszenie-sportowe-ID6GlPVw",
    thumbnail:
      "eyJmbiI6Iml6bGVjNXgyMHk1di1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.95oxoJjlI9m83MWP8ifg7kqGlwDc68sk8mYL3s4rCFM",
    props: `
Cena\t251 900 PLN
Rok produkcji\t2023
Przebieg\t16 969 km
Pojemność skokowa\t1 984 cm3
Rodzaj paliwa\tBenzyna
Moc\t265 KM
Skrzynia biegów\tAutomatyczna
Napęd\t4x4 (stały)
Typ nadwozia\tKombi
Kolor\tCzarny
Data pierwszej rejestracji w historii pojazdu\t21 czerwca 2023
Numer rejestracyjny pojazdu\tWE4AA82
VIN\tWAUZZZF22PN066652

(PQD) Pakiet zewnętrzny „S line”.
(2K7) Sportowa stylistyka przednich i przednich zderzaków
(0NB) Napis S-Line, na zewnatrz
(VT5) Listwy progowe\taluminiowe, na przednich listwach logo "S", podświetlane
(5J4) Tylny spojler w kolorze nadwozia
(5TG) Aplikacje dekoracyjne z matowego aluminium
(7X5) Asystent parkowania
(IU1) Audi smartphone interface
(9S9) Wirtualny kokpit Audi Plus
(WDC) Pakiet biznes
(9AQ) Klimatyzacja automatyczna\t4-strefowa
(9PF) Wycieraczki adaptacyjne z wbudowanymi dyszami
(GB1) Współpraca z LTE
(4I3) Klucz komfortowy z otwieraniem bagażnika sterowanym czujnikiem, bez ZAMEK BEZPIECZEŃSTWA
(1D4) Hak holowniczy
(6XL) Lusterka zewnętrzne regulowane i składane elektrycznie\tpodgrzewane
(PV3) Funkcja pamięci fotela kierowcy
(3L4) Elektryczna regulacja foteli przednich
(3G4) Isofix - mocowanie fotelika dziecięcego w ekstremalnych fotelach z tylnym i fotelu pasażera z przodu
(4UF) Poduszka powietrzna z dezaktywacją poduszek powietrznych i pasażerskich
(4A4) Ogrzewanie foteli przednich\ti skrajnych siedzeń tylnych
(QQ1) Pakiet oświetlenia Ambiente
(QE1) Pakiet dodatkowych schowków
(WQS) Pakiet stylistyczny wnętrza S line Interior
(6NQ) Podsufitka tkanina w kolorze czarnym
(1BE) Zawieszenie sportowe
(VF1) Aluminiowe nakładki na pedały
(PCC) Pakiet systemów wspomagających w ruchu pozamiejskim
(6I6) Ostrzeżenie o zjechaniu z pasa ruchu, asystent wspomagający kierowcę w nagłych przypadkach medycznych i automatyczne wzywanie pomocy
(8T5) Tempomat adaptacyjny
(QK1) Kamera z czujnikiem odległości\t(dla systemu wspomagającego kierowcę Pre sense city) 
(8X1) Układ zmywania reflektorów
(8G4) Reflektory przednie LED Audi Matrix
(8SP) Reflektory tylne w technice LED
(QR9) System rozpoznawania znaków drogowych
(N7V) Tapicerka tkaninowa\t"Sequenz"/ częściowo skórzana z tłoczeniem "S"
(UE8) Wejście USB do ładowania w konsoli z tyłu
(KS1) Wyświetlacz Head-Up
(0M5) Zbiornik paliwa\t73l

Wyposażenie standardowe:
ABS
Alarm z zabezpieczeniem przed odholowaniem pojazdu
Aplikacje dekoracyjne Aluminium fragment
Audi Music Interface
Audi pre sense basic - system wspomagający bezpieczeństwo kierowcy i pasażerów
Automatyczne odblokowanie pokrywy bagażnika
Brak haka holowniczego
Brak logo typu S
Brak systemu mocowania fotelika dziecięcego na fotelu pasażera z przodu (ISOFIX)
Brak układu zmywania reflektorów
Czujnik kontroli zapięcia pasów bezpieczeństwa
Dywaniki podłogowe przód i tył
Dywaniki z przodu i z tyłu
ESP - układ stabilizacji toru jazdy
Elektroniczna blokada prędkości maksymalnej
Elektryczna nagrzewnica powietrza
Felgi aluminiowe 18" - (5-ramienne) 8J x 18"
Fotele przednie regulowane elektrycznie z pamięcią fotela kierowcy
Fotele przednie sportowe
Gałka dźwigni skrzyni biegów
Gwarancja na nowy samochód Audi 2 lata
Hamulce tarczowe z przodu
Hamulce tarczowe z tyłu
ISOFIX - mocowanie fotelika dziecięcego dla skrajnych siedzeń z tyłu
Immobilizer Infotainment system
(MIB3) Kierownica 3 - ramienna, wielofunkcyjna, sportowa, obszyta skórą
Klimatyzacja automatyczna - 2 strefowa
Komputer pokładowy 7 z kolorowym wyświetlaczem
Lampy : Światła do jazdy dziennej
Lampy : Światła tylne w technice LED
Lampy przednie w technologii LED
Listwy ozdobne wokół szyb w kolorze srebrnym
Listwy progowe\taluminiowe
Lusterka boczne w kolorze nadwozia
Lusterka zewnętrzne regulowane i składane elektrycznie
Lusterko wewnętrzne z automatyczną funkcją przeciwoślepieniową
Napęd quattro
Oznaczenie modelu i typu silnika
Pakiet oświetlenia Ambiente
Panel obsługi z przyciskami z matowej czerni
Podparcie odcinka lędźwiowego dla foteli przednich 4-zakresowe
Podsufitka tkaninowa
Poduszki powietrzne boczne z przodu i z tyłu oraz kurtyny powietrzne
Poduszki powietrzne chroniące głowy pasażerów z przodu i z tyłu
Poduszki powietrzne z dezaktywacją poduszki powietrznej pasażera
Podłokietnik przedni komfortowy
Quattro ultra
Regulacja kolumny kierowniczej w układzie poziomym i pionowym
Siedzenie tylne 3-miejscowe, oparcie nieskładane
Standardowy zestaw pedałów obsługi
System MMI Navigation
System Start/Stop
System nagłośnienia - 8 głośników
Szyby termoizolacyjne
Tablica wskaźników z prędkościomierzem
Tapicerka tkaninowa\tRhythmus
Tempomat z regulacją prędkości i limiterem prędkości
Trójkąt ostrzegawczy i apteczka
Układ wydechowy
Wariant dla niepalących
Wskaźnik kontroli ciśnienia w oponach
Wspomaganie układu kierowniczego, elektromechaniczne
Zagłówki przednie
Zamek centralny sterowany falami radiowymi
Zawieszenie dynamiczne
Zderzaki wzmocnione
Zestaw naprawczy - tire mobility set
Zestaw narzędzi
Złącze Bluetooth
`,
  },
].map(({ props, ...item }) => ({ ...item, props: parseProps(props) }));

console.log(items);

const props = items.reduce(
  (result, { props }) => Object.assign(result, props),
  {},
);
const equip = [];

console.log(props);

function Table() {
  return (
    <table className={styles.Table}>
      <thead>
        <tr>
          <th></th>
          {items.map(({ name, thumbnail }, index) => (
            <th key={index}>
              {thumbnail && (
                <div>
                  <img
                    style={{ width: 180 }}
                    referrerPolicy="no-referrer"
                    src={`https://ireland.apollo.olxcdn.com/v1/files/${thumbnail}/image;s=360x0`}
                    loading="lazy"
                  />
                </div>
              )}
              <div>
                <a
                  onClick={(e) => e.preventDefault()}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.otomoto.pl/osobowe/oferta/${name}.html`}
                >
                  {name}
                </a>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.keys(props).map((prop, index) => (
          <tr key={index}>
            <th>{prop}</th>
            {items.map(({ props }, index) => (
              <td key={index}>{prop in props ? props[prop] || "+" : "-"}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function Section() {
  return (
    <div className={styles.Section}>
      <h2>Auto</h2>
      <Table />
    </div>
  );
}
