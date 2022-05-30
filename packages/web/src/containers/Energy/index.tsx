import React, { useState } from "react";
import Calculations from "./Calculations";
import styles from "./styles.module.scss";

import type { Item, Rates } from "./Calculations";

function Data() {
  const [rates] = useState<Rates>(() => ({
    "2021-10-29": {
      "Energia czynna": 0.33,
      "Opłata handlowa": 6.25,
      "Opłata jakościowa": 0.0102,
      "Opłata sieciowa zmienna": 0.1391,
      "Opłata OZE": 0.0022,
      "Opłata kogeneracyjna": 0,
      "Opłata sieciowa stała": 10.7,
      "Opłata przejściowa": 0.33,
      "Opłata mocowa": 10.46,
      "Opłata abonamentowa": 0.42,
      VAT: 23,
    },
    "2022-01-01": {
      "Energia czynna": 0.4346,
      "Opłata handlowa": 7.8,
      "Opłata jakościowa": 0.0095,
      "Opłata sieciowa zmienna": 0.1459,
      "Opłata OZE": 0.0009,
      "Opłata kogeneracyjna": 0.00406,
      "Opłata sieciowa stała": 11.32,
      "Opłata przejściowa": 0.33,
      "Opłata mocowa": 13.25,
      "Opłata abonamentowa": 0.42,
      VAT: 5,
    },
  }));

  const [calculations] = useState<Item[]>(() => [
    {
      from: "2021-10-29",
      to: "2021-12-31",
      count: 2,
      start: 14643.17,
      value: 15588.03,
    },
    {
      from: "2022-01-01",
      to: "2022-04-12",
      count: 4,
      start: 15588.03,
      value: 16919.0,
      estimated: true,
    },
  ]);

  const [selected, setSelected] = useState<number[]>(() =>
    calculations.map((_, i) => i)
  );

  return (
    <div>
      <Calculations
        calculations={calculations}
        rates={rates}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
}

export default function Section() {
  return (
    <div className={styles.Section}>
      <h2>Energy</h2>
      <Data />
    </div>
  );
}
