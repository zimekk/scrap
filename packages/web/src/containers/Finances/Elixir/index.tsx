import React, { useMemo } from "react";
import styles from "./styles.module.scss";

function Data() {
  const rows = useMemo(
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
  9.00, 13,00, 15.00
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
  8.00, 11.30, 14.30
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

  // console.log(elixir);

  return (
    <div className={styles.Elixir}>
      <table>
        <tbody>
          <tr>
            <th>Nazwa banku</th>
            <th>Sesje wychodzące</th>
            <th>Sesje przychodzące</th>
          </tr>
          {rows.map((cols, i) => [
            <tr key={i}>{cols.map((item, k) => [<td key={k}>{item}</td>])}</tr>,
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
