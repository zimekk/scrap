import { now, parseTransaction } from "../utils";

import { parse } from "date-fns";

describe("utils", () => {
  it("parseTransaction", () =>
    [
      {
        string: `Tytuł przelewu
OTW. LOKATY NR 079741947700001
Kwota operacji
10 000,00 PLN
Data operacji
21.02.2018`,
        result: {
          "Tytuł przelewu": "OTW. LOKATY NR 079741947700001",
          "Kwota operacji": 10000.0,
          "Data operacji": parse("21.02.2018", "dd.MM.yyyy", now),
        },
      },
      {
        string: `Tytuł przelewu
NR 079741947700004
Kwota operacji
10 025,71 PLN
Data operacji
30.06.2018`,
        result: {
          "Tytuł przelewu": "NR 079741947700004",
          "Kwota operacji": 10025.71,
          "Data operacji": parse("30.06.2018", "dd.MM.yyyy", now),
        },
      },
      {
        string: `Tytuł
        OTWARCIE LOKATY NR 00002 32..88 3 M DO 09-05-2023 OPROC.ST. 7,500000%
        Kwota
        -10 000,00 PLN
        Data przelewu
        09.02.2023
        Data waluty
        09.02.2023
        Rodzaj operacji
        Obciążenie`,
        result: {
          "Tytuł przelewu": "OTWARCIE LOKATY NR 32..88 3M7.5% DO 09-05-2023",
          "Kwota operacji": 10000,
          "Data operacji": parse("09.02.2023", "dd.MM.yyyy", now),
        },
      },
      {
        string: `Tytuł
WYGAŚNIĘCIE LOKATY NR 00001 37..96 3 M OD 07-11-2022 OPROC.ST. 7,500000%
Kwota
10 000,00 PLN
Data przelewu
06.02.2023
Data waluty
07.02.2023
Rodzaj operacji
Uznanie`,
        result: {
          "Tytuł przelewu":
            "WYGAŚNIĘCIE LOKATY NR 00001 37..96 3 M OD 07-11-2022 OPROC.ST. 7,500000%",
          "Kwota operacji": 10000,
          "Data operacji": parse("06.02.2023", "dd.MM.yyyy", now),
        },
      },
      {
        string: `Tytuł
ODSETKI NALEŻNE LOKATY NR00001
Kwota
153,12 PLN
Data przelewu
06.02.2023
Data waluty
07.02.2023
Rodzaj operacji
Naliczenie odsetek`,
        result: {
          "Tytuł przelewu": "ODSETKI NALEŻNE LOKATY NR00001",
          "Kwota operacji": 153.12,
          "Data operacji": parse("06.02.2023", "dd.MM.yyyy", now),
        },
      },
    ].forEach(({ string, result }) =>
      expect(parseTransaction(string)).toEqual(result)
    ));
});
