import React, { useState } from "react";
import Calculations from "./Calculations";
import styles from "./styles.module.scss";

import { type Items, RATES_1, RATES_2, type Rates } from "./utils";

export const ITEMS_1: Items[] = [
  [
    {
      from: "2020-08-07",
      to: "2020-12-31",
      start: 5479.41,
      value: 5748.76,
      estimated: true,
    },
    {
      from: "2021-01-01",
      to: "2021-01-31",
      start: 5748.76,
      value: 5816.55,
      estimated: true,
    },
    {
      from: "2021-02-01",
      to: "2021-02-02",
      start: 5816.55,
      value: 5820.63,
    },
  ],
  [
    {
      // data: {
      //   ...RATES["2021-04-04"],
      //   "Opłata przejściowa": 0.1,
      //   "Opłata mocowa": 4.48,
      // },
      from: "2021-02-03",
      to: "2021-05-31",
      start: 5820.63,
      value: 6082.55,
      estimated: true,
    },
    {
      // data: {
      //   ...RATES["2021-04-04"],
      //   "Opłata przejściowa": 0.1,
      //   "Opłata mocowa": 4.48,
      // },
      from: "2021-06-01",
      to: "2021-08-09",
      start: 6082.55,
      value: 6185.36,
    },
  ],
  [
    {
      // data: {
      //   ...RATES["2021-04-04"],
      //   "Opłata przejściowa": 0.1,
      //   "Opłata mocowa": 4.48,
      // },
      from: "2021-08-10",
      to: "2021-12-31",
      start: 6185.36,
      value: 6447.49,
      estimated: true,
    },
    {
      from: "2022-01-01",
      to: "2022-02-23",
      start: 6447.49,
      value: 6561.0,
    },
  ],
  [
    {
      from: "2022-02-24",
      to: "2022-03-31",
      start: 6561.0,
      value: 6561.0 + 85.0,
    },
    {
      from: "2022-04-01",
      to: "2022-05-31",
      start: 6561.0 + 85.0,
      value: 6561.0 + 85.0 + 102.0,
    },
    {
      from: "2022-06-01",
      to: "2022-08-09",
      start: 6561.0 + 85.0 + 102.0,
      value: 6835.2,
    },
  ],
  [
    {
      from: "2022-10-15",
      to: "2023-01-07",
      start: 2.26,
      value: 171.86,
    },
  ],
  [
    {
      from: "2022-08-10",
      to: "2022-09-13",
      start: 6_835.2,
      value: 6_835.2 + 41.31,
    },
    {
      from: "2022-09-14",
      to: "2022-12-31",
      start: 0,
      value: 174.78,
      estimated: true,
    },
    {
      from: "2023-01-01",
      to: "2023-02-07",
      start: 174.78,
      value: 174.78 + 67.22,
    },
  ],
];
// .map((item) => ({ contract: "0351", counter: "8586", ...item }))

export const ITEMS_2: Items[] = [
  [
    {
      from: "2019-10-20",
      to: "2019-12-31",
      start: 5090.33,
      value: 6099.11,
      estimated: true,
    },
  ],
  [
    {
      // data: {
      //   ...RATES["2019-10-20"],
      //   "Opłata jakościowa": 0.0133,
      //   "Opłata sieciowa zmienna": 0.1372,
      //   "Opłata sieciowa stała": 10.55,
      //   "Opłata abonamentowa": 0.42,
      // },
      from: "2019-10-20",
      to: "2019-12-31",
      start: 6099.11,
      value: 5090.33 + 1413,
      estimated: true,
    },
  ],
  [
    {
      from: "2020-01-01",
      to: "2020-04-09",
      start: 5090.33 + 1413,
      value: 7272.0,
    },
  ],
  [
    {
      from: "2020-04-10",
      to: "2020-10-22",
      start: 7272.0,
      value: 9734.69,
    },
  ],
  [
    {
      from: "2020-10-23",
      to: "2020-12-31",
      start: 9734.69,
      value: 10831.52,
      estimated: true,
    },
  ],
  [
    {
      // data: {
      //   ...RATES["2021-04-04"],
      //   "Energia czynna": 0.3195,
      //   "Opłata handlowa": 6.25,
      //   "Opłata jakościowa": 0.0133,
      //   "Opłata sieciowa zmienna": 0.1372,
      //   "Opłata sieciowa stała": 10.55,
      // },
      from: "2021-01-01",
      to: "2021-01-31",
      start: 10831.52,
      value: 11296.29,
      estimated: true,
    },
  ],
  [
    {
      from: "2021-02-01",
      to: "2021-04-03",
      start: 11296.29,
      value: 12108.42,
    },
  ],
  [
    {
      from: "2021-04-04",
      to: "2021-05-31",
      start: 12108.42,
      value: 12736.33,
      estimated: true,
    },
  ],
  [
    {
      from: "2021-06-01",
      to: "2021-10-28",
      start: 12736.33,
      value: 14643.17,
    },
  ],
  [
    {
      from: "2021-10-29",
      to: "2021-12-31",
      start: 14643.17,
      value: 15588.03,
    },
  ],
  [
    {
      from: "2022-01-01",
      to: "2022-04-12",
      start: 15588.03,
      value: 16919.0,
      estimated: true,
    },
  ],
  [
    {
      from: "2022-04-13",
      to: "2022-05-31",
      start: 16919.0,
      value: 16919.0 + 530,
    },
    {
      from: "2022-06-01",
      to: "2022-10-21",
      start: 16919.0 + 530,
      value: 19169.0,
    },
  ],
];
// .map((item) => ({ contract: "8586", counter: "2752", ...item }))

function Data({
  counter,
  items,
  rates,
}: {
  counter: string;
  items: Items[];
  rates: Rates;
}) {
  const [selected, setSelected] = useState<number[]>(() =>
    items.map((_, i) => i)
  );

  return (
    <div>
      <Calculations
        counter={counter}
        items={items}
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
      <Data counter="9057" items={ITEMS_1} rates={RATES_1} />
      <Data counter="7224" items={ITEMS_2} rates={RATES_2} />
    </div>
  );
}
