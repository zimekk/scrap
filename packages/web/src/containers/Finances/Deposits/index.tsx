import React, { type ChangeEventHandler, useCallback, useState } from "react";
import { format } from "date-fns";
import { parseTransaction } from "./utils";
import styles from "./styles.module.scss";
import Calculator from "./Calculator";

const summary = (
  result: Record<string, number>,
  income: Record<string, number>
) =>
  Object.entries(result).reduce(
    (result, [key, value]) =>
      Object.assign(result, {
        [key]: value + income[key],
      }),
    {}
  );

function Data() {
  const [deposits] = useState(() =>
    [
      [
        `Tytuł przelewu
OTW. LOKATY NR 07..01 3M1.9%
Kwota operacji
10 000,00 PLN
Data operacji
21.02.2018`,
        `Tytuł przelewu
NR 07..01
Kwota operacji
10 037,52 PLN
Data operacji
21.05.2018`,
      ],
      [
        `Tytuł przelewu
OTW. LOKATY NR 07..04 2M1.9%
Kwota operacji
10 000,00 PLN
Data operacji
30.04.2018`,
        `Tytuł przelewu
NR 07..04
Kwota operacji
10 025,71 PLN
Data operacji
30.06.2018`,
      ],
      [
        `Tytuł przelewu
OTW. LOKATY NR 07..08 6M6.9%
Kwota operacji
10 000,00 PLN
Data operacji
02.09.2022`,
      ],
      [
        `Tytuł przelewu
OTW. LOKATY NR 07..09 6M6.9%
Kwota operacji
10 000,00 PLN
Data operacji
02.09.2022`,
      ],
      [
        `Tytuł przelewu
OTWARCIE LOKATY NR 37..96 3M7.5% DO 07-02-2023
Kwota operacji
10 000,00 PLN
Data operacji
07.11.2022`,
        `Tytuł
WYGAŚNIĘCIE LOKATY NR 00001 37..96 3M7.5% OD 07-11-2022
Kwota
10 000,00 PLN
Data przelewu
06.02.2023
Data waluty
07.02.2023
Rodzaj operacji
Uznanie`,
        `Tytuł
ODSETKI NALEŻNE LOKATY NR00001
Kwota
153,12 PLN
Data przelewu
06.02.2023
Data waluty
07.02.2023
Rodzaj operacji
Naliczenie odsetek`,
      ],
      [
        `Tytuł przelewu
OTWARCIE LOKATY NR 32..88 3M7.5% DO 07-02-2023
Kwota operacji
10 000,00 PLN
Data operacji
07.11.2022`,
        `Tytuł
WYGAŚNIĘCIE LOKATY NR 32..88 3M7.5% OD 07-11-2022
Kwota
10 000,00 PLN
Data przelewu
06.02.2023
Data waluty
07.02.2023
Rodzaj operacji
Uznanie`,
        `Tytuł
ODSETKI NALEŻNE LOKATY NR00001
Kwota
153,12 PLN
Data przelewu
06.02.2023
Data waluty
07.02.2023
Rodzaj operacji
Naliczenie odsetek`,
      ],
      [
        `Tytuł
OTWARCIE LOKATY NR 58..98 3M7.5% DO 27-04-2023
Kwota
-10 000,00 PLN
Data przelewu
27.01.2023
Data waluty
27.01.2023
Rodzaj operacji
Obciążenie`,
      ],
      [
        `Tytuł
OTWARCIE LOKATY NR 13..80 3M7.5% DO 27-04-2023
Kwota
-10 000,00 PLN
Data przelewu
27.01.2023
Data waluty
27.01.2023
Rodzaj operacji
Obciążenie`,
      ],
      [
        `Tytuł
        OTWARCIE LOKATY NR 37..96 3M7.5% DO 09-05-2023
        Kwota
        -10 000,00 PLN
        Data przelewu
        09.02.2023
        Data waluty
        09.02.2023
        Rodzaj operacji
        Obciążenie`,
      ],
      [
        `Tytuł
        OTWARCIE LOKATY NR 32..88 3M7.5% DO 09-05-2023
        Kwota
        -10 000,00 PLN
        Data przelewu
        09.02.2023
        Data waluty
        09.02.2023
        Rodzaj operacji
        Obciążenie`,
      ],
    ].map((transactions) =>
      transactions
        .map(parseTransaction)
        .reduce(
          (result, item, key) =>
            key > 1
              ? ((result[1]["Kwota operacji"] += item["Kwota operacji"]),
                result)
              : result.concat(item),
          [] as any
        )
    )
  );

  const [selected, setSelected] = useState<number[]>(() =>
    deposits.map(([_, income], i) => (income ? i : -1)).filter((i) => i >= 0)
  );
  // console.log(deposits);

  return (
    <div className={styles.Deposits}>
      <table>
        <tbody>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selected.length === deposits.length}
                onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
                  ({ target }) =>
                    setSelected(
                      target.checked ? deposits.map((_, i) => i) : []
                    ),
                  []
                )}
              />
            </th>
            <th align="left">Tytuł przelewu</th>
            <th align="right">Data operacji</th>
            <th align="right">Kwota operacji</th>
            <th align="right">Data operacji</th>
            <th align="right">Kwota operacji</th>
            <th align="right">Zysk</th>
          </tr>
          {deposits.map(([payment, income], i) => [
            <tr key={i}>
              <td>
                <input
                  type="checkbox"
                  checked={selected.includes(i)}
                  onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
                    ({ target }) =>
                      setSelected((selected: number[]) =>
                        !target.checked
                          ? selected.filter((n) => n !== i)
                          : selected.concat(i)
                      ),
                    []
                  )}
                />
              </td>
              <td>{payment["Tytuł przelewu"]}</td>
              <td>
                {format(new Date(payment["Data operacji"]), "dd.MM.yyyy")}
              </td>
              <td align="right">
                {`${new Intl.NumberFormat("pl-PL", {
                  minimumFractionDigits: 2,
                }).format(payment["Kwota operacji"])} PLN`}
              </td>
              <td>
                {income
                  ? format(new Date(income["Data operacji"]), "dd.MM.yyyy")
                  : "-"}
              </td>
              <td align="right">
                {income
                  ? `${new Intl.NumberFormat("pl-PL", {
                      minimumFractionDigits: 2,
                    }).format(income["Kwota operacji"])} PLN`
                  : "-"}
              </td>
              <td align="right">
                {income
                  ? `${new Intl.NumberFormat("pl-PL", {
                      minimumFractionDigits: 2,
                    }).format(
                      income["Kwota operacji"] - payment["Kwota operacji"]
                    )} PLN`
                  : "-"}
              </td>
            </tr>,
          ])}
        </tbody>
        <tfoot>
          {[
            deposits
              .filter((_, i) => selected.includes(i))
              .reduce(
                (item, [payment, income]: any) => [
                  summary(item[0], payment),
                  income ? summary(item[1], income) : item[1],
                ],
                [
                  {
                    "Kwota operacji": 0,
                  },
                  {
                    "Kwota operacji": 0,
                  },
                ] as Record<string, number>[]
              ),
          ].map(([payment, income], i) => (
            <tr key={i}>
              <td colSpan={3}></td>
              <td align="right">
                {`${new Intl.NumberFormat("pl-PL", {
                  minimumFractionDigits: 2,
                }).format(payment["Kwota operacji"])} PLN`}
              </td>
              <td></td>
              <td align="right">
                {`${new Intl.NumberFormat("pl-PL", {
                  minimumFractionDigits: 2,
                }).format(income["Kwota operacji"])} PLN`}
              </td>
              <td align="right">
                {`${new Intl.NumberFormat("pl-PL", {
                  minimumFractionDigits: 2,
                }).format(
                  income["Kwota operacji"] - payment["Kwota operacji"]
                )} PLN`}
              </td>
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}

export default function Section() {
  return (
    <div className={styles.Section}>
      <h2>Deposits</h2>
      <Calculator />
      <Data />
    </div>
  );
}
