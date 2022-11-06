import React, { ChangeEventHandler, useCallback, useState } from "react";
import { format } from "date-fns";
import { parseTransaction } from "./utils";
import styles from "./styles.module.scss";

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
OTW. LOKATY NR 079741947700001
Kwota operacji
10 000,00 PLN
Data operacji
21.02.2018`,
        `Tytuł przelewu
NR 079741947700001
Kwota operacji
10 037,52 PLN
Data operacji
21.05.2018`,
      ],
      [
        `Tytuł przelewu
OTW. LOKATY NR 079741947700004
Kwota operacji
10 000,00 PLN
Data operacji
30.04.2018`,
        `Tytuł przelewu
NR 079741947700004
Kwota operacji
10 025,71 PLN
Data operacji
30.06.2018`,
      ],
    ].map((transactions) => transactions.map(parseTransaction))
  );

  const [selected, setSelected] = useState<number[]>(() =>
    deposits.map((_, i) => i)
  );
  console.log(deposits);

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
              <td>{format(new Date(income["Data operacji"]), "dd.MM.yyyy")}</td>
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
                  summary(item[1], income),
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
      <Data />
    </div>
  );
}
