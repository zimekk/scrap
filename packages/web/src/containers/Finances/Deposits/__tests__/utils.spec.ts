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
    ].forEach(({ string, result }) =>
      expect(parseTransaction(string)).toEqual(result)
    ));
});
