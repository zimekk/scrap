import React, { useMemo, useState } from "react";
import cx from "classnames";
import styles from "./styles.module.scss";

function Data() {
  const [time, setTime] = useState("");
  const data = useMemo(
    () =>
      `
  Alior Bank
  8.20, 12.20, 15.20
  11.00, 15.00, 17.00
  Bank Millennium
  11.00, 15.00, 17.30
  12.00, 15.30, 17.15
  Bank Pekao
  8.30, 10.30, 14.25
  12.00, 16.00, 18.00
  Bank Pocztowy
  9.00, 13.00, 15.00
  11.00, 15.00, 17.30
  BNP Paribas
  8.00, 11.45, 14.15
  12.00, 15.00, 17.00
  BGŻ Optima
  8.05, 11.50, 14.20
  11.00, 15.00, 17.15
  BOŚ Bank
  9.30, 13.30, 16.00
  11.00, 15.15, 17.15
  Citi Handlowy
  8.00, 12.15, 15.30
  11.30, 15.30, 17.30
  Credit Agricole
  8.00, 12.00, 14.30
  12.00, 16.00, 18.00
  EnveloBank
  9.00, 13.00, 15.00
  11.00, 15.00, 17.30
  Getin Bank
  8.15, 12.15, 14.30
  10.00, 14.00, 17.00
  ING Bank Śląski
  8.10, 11.30, 14.30
  11.00, 15.00, 17.30
  Inteligo
  8.00, 11.45, 14.30
  11.30, 15.10, 17.30
  mBank
  6.00, 10.00, 13.30
  11.15, 15.00, 18.15
  Nest Bank
  8.00, 12.00, 14.30
  10.30, 14.15, 17.00
  PKO Bank Polski
  8.00, 11.45, 14.30
  11.30, 15.10, 17.30
  Santander Bank Polska
  8.15, 12.15, 14.45
  11.00, 15.00, 18.00
  T-Mobile Usługi Bankowe
  8.20, 12.20, 15.10
  11.00, 15.00, 17.00
  Toyota Bank
  8.10, 12.10, 14.40
  10.30, 14.30, 16.30
  Volkswagen Bank
  8.00, 11.50, 14.20
  11.30, 15.30, 18.00
  `
        .trim()
        .split("\n")
        .reduce(
          (result, line, i, list) =>
            i % 3 === 0
              ? result.concat([[line, list[i + 1], list[i + 2]]])
              : result,
          [] as string[][]
        ),
    []
  );

  const [rows, max1, max2] = useMemo(() => {
    let max1 = 0;
    let max2 = 0;
    return [
      data.map((item) => {
        const col1 = item[1].split(",").map((s) => s.trim());
        if (col1.length > max1) {
          max1 = col1.length;
        }
        const col2 = item[2].split(",").map((s) => s.trim());
        if (col2.length > max2) {
          max2 = col2.length;
        }
        return {
          name: item[0],
          col1,
          col2,
        };
      }),
      max1,
      max2,
    ];
  }, data);

  const payment = useMemo(
    () =>
      rows.map(({ col2 }) =>
        time ? col2.findIndex((item) => Number(item) > Number(time)) : -1
      ),
    [rows, time]
  );

  return (
    <div className={styles.Elixir}>
      <table>
        <thead>
          <tr>
            <th rowSpan={2}>Nazwa banku</th>
            <th colSpan={max1}>Sesje wychodzące</th>
            <th colSpan={max2}>Sesje przychodzące</th>
          </tr>
          <tr>
            {[...Array(max1)].map((_, k) => (
              <th key={k}>{k + 1}</th>
            ))}
            {[...Array(max2)].map((_, k) => (
              <th key={k}>{k + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(({ name, col1, col2 }, i) => [
            <tr key={i}>
              <th>{name}</th>
              {col1.concat(...Array(max1 - col1.length)).map((item, k) => [
                <td
                  key={k}
                  className={cx(
                    styles.active,
                    item === time && styles.selected
                  )}
                  onClick={() => setTime(item)}
                >
                  {item}
                </td>,
              ])}
              {col2.concat(...Array(max2 - col2.length)).map((item, k) => [
                <td key={k} className={cx(payment[i] === k && styles.selected)}>
                  {item}
                </td>,
              ])}
            </tr>,
          ])}
        </tbody>
      </table>
    </div>
  );
}

export default function Section() {
  return (
    <div className={styles.Section}>
      <h2>Elixir</h2>
      <Data />
    </div>
  );
}
