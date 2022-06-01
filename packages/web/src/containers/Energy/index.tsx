import React, { useState } from "react";
import Calculations from "./Calculations";
import styles from "./styles.module.scss";

import type { Item, Rate } from "./Calculations";

function Data() {
  const [rates] = useState<Record<string, Rate>>(() => ({
    "2019-10-20": {
      "Energia czynna": 0.2762,
      "Opłata handlowa": 4.29,
      "Opłata jakościowa": 0.013,
      "Opłata sieciowa zmienna": 0.1349,
      "Opłata OZE": 0,
      "Opłata kogeneracyjna": 0.00158,
      "Opłata sieciowa stała": 10.29,
      "Opłata przejściowa": 0.33,
      "Opłata mocowa": 0,
      "Opłata abonamentowa": 0.4,
      VAT: 23,
    },
    "2020-01-01": {
      "Energia czynna": 0.3195,
      "Opłata handlowa": 6.25,
      "Opłata jakościowa": 0.0133,
      "Opłata sieciowa zmienna": 0.1372,
      "Opłata OZE": 0,
      "Opłata kogeneracyjna": 0.00139,
      "Opłata sieciowa stała": 10.55,
      "Opłata przejściowa": 0.33,
      "Opłata mocowa": 0,
      "Opłata abonamentowa": 0.42,
      VAT: 23,
    },
    "2021-04-04": {
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
      data: {
        ...rates["2021-04-04"],
        "Opłata przejściowa": 0.1,
        "Opłata mocowa": 4.48,
      },
      from: "2021-02-03",
      to: "2021-05-31",
      count: 3,
      start: 5820.63,
      value: 6082.55,
      estimated: true,
    },
    {
      data: {
        ...rates["2021-04-04"],
        "Opłata przejściowa": 0.1,
        "Opłata mocowa": 4.48,
      },
      from: "2021-06-01",
      to: "2021-08-09",
      count: 3,
      start: 6082.55,
      value: 6185.36,
    },
    {
      data: {
        ...rates["2021-04-04"],
        "Opłata przejściowa": 0.1,
        "Opłata mocowa": 4.48,
      },
      from: "2021-08-10",
      to: "2021-12-31",
      count: 4,
      start: 6185.36,
      value: 6447.49,
      estimated: true,
    },
    {
      data: {
        ...rates["2022-01-01"],
        "Opłata przejściowa": 0.1,
        "Opłata mocowa": 5.68,
      },
      from: "2022-01-01",
      to: "2022-02-23",
      count: 2,
      start: 6447.49,
      value: 6561.0,
    },
    {
      data: rates["2019-10-20"],
      from: "2019-10-20",
      to: "2019-12-31",
      count: 2,
      start: 5090.33,
      value: 6099.11,
      estimated: true,
    },
    {
      data: {
        ...rates["2019-10-20"],
        "Opłata jakościowa": 0.0133,
        "Opłata sieciowa zmienna": 0.1372,
        "Opłata sieciowa stała": 10.55,
        "Opłata abonamentowa": 0.42,
      },
      from: "2019-10-20",
      to: "2019-12-31",
      count: 1,
      start: 6099.11,
      value: 5090.33 + 1413,
      estimated: true,
    },
    {
      data: rates["2020-01-01"],
      from: "2020-01-01",
      to: "2020-04-09",
      count: 3,
      start: 5090.33 + 1413,
      value: 7272.0,
    },
    {
      data: rates["2020-01-01"],
      from: "2020-04-10",
      to: "2020-10-22",
      count: 6,
      start: 7272.0,
      value: 9734.69,
    },
    {
      data: rates["2020-01-01"],
      from: "2020-10-23",
      to: "2020-12-31",
      count: 2,
      start: 9734.69,
      value: 10831.52,
      estimated: true,
    },
    {
      data: {
        ...rates["2021-04-04"],
        "Energia czynna": 0.3195,
        "Opłata handlowa": 6.25,
        "Opłata jakościowa": 0.0133,
        "Opłata sieciowa zmienna": 0.1372,
        "Opłata sieciowa stała": 10.55,
      },
      from: "2021-01-01",
      to: "2021-01-31",
      count: 1,
      start: 10831.52,
      value: 11296.29,
      estimated: true,
    },
    {
      data: rates["2021-04-04"],
      from: "2021-02-01",
      to: "2021-04-03",
      count: 3,
      start: 11296.29,
      value: 12108.42,
    },
    {
      data: rates["2021-04-04"],
      from: "2021-04-04",
      to: "2021-05-31",
      count: 1,
      start: 12108.42,
      value: 12736.33,
      estimated: true,
    },
    {
      data: rates["2021-04-04"],
      from: "2021-06-01",
      to: "2021-10-28",
      count: 5,
      start: 12736.33,
      value: 14643.17,
    },
    {
      data: rates["2021-04-04"],
      from: "2021-10-29",
      to: "2021-12-31",
      count: 2,
      start: 14643.17,
      value: 15588.03,
    },
    {
      data: rates["2022-01-01"],
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
