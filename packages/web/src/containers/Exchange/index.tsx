import React, {
  type ChangeEventHandler,
  useCallback,
  useMemo,
  useState,
} from "react";
import { createAsset } from "use-asset";
import { format } from "date-fns";
import Chart, { SyncZoomProvider } from "../../components/ZoomableLineChart";
import styles from "./styles.module.scss";

import type { Rate } from "@dev/cli/src/services/RatesService/types";

const CODES = ["EUR", "USD", "CHF", "GBP"];

const asset = createAsset(async (version) => {
  const res = await fetch(`api/exchange/data.json?${version}`);
  return await res.json();
});

export default function Section({ version = "v1" }) {
  const { rates } = asset.read(version) as {
    rates: Rate[];
  };
  const [code, setCode] = useState("CHF");
  const [checked, setCheckedOptions] = useState(CODES);
  const values = useMemo<Record<string, number[]>>(
    () => ({
      ["2013-05-23"]: [153.68, 332.17],
      ["2013-06-21"]: [143.1, 342.75],
      ["2013-07-23"]: [154.61, 331.24],
      ["2013-08-23"]: [144.07, 341.78],
      ["2013-09-23"]: [144.54, 341.31],
      ["2013-10-23"]: [156.0, 329.85],

      ["2013-11-22"]: [145.54, 340.25],
      ["2013-12-23"]: [156.97, 328.82],
      ["2014-01-23"]: [146.52, 339.27],

      ["2014-02-21"]: [146.88, 339.15],
      ["2014-03-21"]: [180.13, 305.9],
      ["2014-04-23"]: [147.94, 338.09],

      ["2014-05-23"]: [159.49, 326.12],
      ["2014-06-23"]: [149.14, 336.47],
      ["2014-07-23"]: [160.46, 325.15],
      ["2014-08-22"]: [150.66, 335.2],
      ["2014-09-23"]: [151.15, 334.71],
      ["2014-10-23"]: [162.42, 323.44],

      ["2014-11-21"]: [152.21, 333.61],
      ["2014-12-23"]: [163.45, 322.37],
      ["2015-01-23"]: [153.23, 332.59],
      // ["2015-02-23"]: [485.82],
      // ["2015-02-23"]: [485.15],
      // ["2015-03-23"]: [485.15],
      // ["2015-04-23"]: [485.15],
      ["2015-02-23"]: [147.05, 292.54],
      ["2015-03-23"]: [204.34, 235.25],
      ["2015-04-23"]: [179.56, 259.94],
      ["2015-05-22"]: [189.08, 249.18],
      ["2015-06-23"]: [181.25, 257.01],
      ["2015-07-23"]: [189.98, 248.28],
      ["2015-08-21"]: [179.44, 263.49],
      ["2015-09-23"]: [179.91, 263.02],
      ["2015-10-23"]: [188.85, 254.08],

      ["2015-11-23"]: [180.29, 263.69],
      ["2015-12-23"]: [189.25, 254.73],
      ["2016-01-22"]: [181.25, 262.73],
      //
      ["2016-08-23"]: [185.74, 256.36],
      ["2016-09-23"]: [186.22, 255.88],
      ["2016-10-21"]: [194.94, 247.16],
      //
      ["2017-02-23"]: [187.81, 255.88],
      ["2017-03-23"]: [213.02, 230.67],
      ["2017-04-21"]: [188.86, 254.83],
      //
      ["2017-11-23"]: [192.24, 251.54],
      ["2017-12-22"]: [200.84, 242.94],
      ["2018-01-23"]: [193.27, 250.51],
      ["2018-02-23"]: [194.26, 248.74],
      ["2018-03-23"]: [218.79, 224.21],
      ["2018-04-23"]: [195.34, 247.66],
      ["2018-05-23"]: [203.47, 240.03],
      ["2018-06-22"]: [196.0, 247.5],
      ["2018-07-23"]: [204.48, 239.02],
      ["2018-08-23"]: [196.8, 247.05],
      ["2018-09-21"]: [197.31, 246.54],
      ["2018-10-23"]: [205.77, 238.08],
      ["2018-11-23"]: [198.89, 244.16],
      ["2018-12-21"]: [207.27, 235.78],
      ["2019-01-23"]: [199.95, 243.1],

      ["2019-02-22"]: [443.03], // 1.93 CHF
      ["2019-03-22"]: [443.03],
      ["2019-04-23"]: [443.03],
      ["2019-05-23"]: [209.19, 234.96],
      ["2019-06-21"]: [201.91, 242.24],
      ["2019-07-23"]: [210.23, 233.92],
      ["2019-08-23"]: [204.14, 238.13],
      ["2019-09-23"]: [204.67, 237.6],
      ["2019-10-23"]: [212.85, 229.42],
      ["2019-11-22"]: [206.26, 235.23],
      ["2019-12-23"]: [214.36, 227.13],
      ["2020-01-23"]: [207.34, 234.15],
      ["2020-02-21"]: [205.01, 241.1],
      ["2020-03-23"]: [221.07, 225.04],
      ["2020-04-23"]: [206.14, 239.97],
      ["2020-05-22"]: [211.94, 238.41],
      ["2020-06-23"]: [204.58, 245.77],
      ["2020-07-23"]: [213.04, 237.31],
      ["2020-08-21"]: [208.87, 236.4],
      ["2020-09-23"]: [209.42, 235.85],
      ["2020-10-23"]: [217.56, 227.71],
      ["2020-11-23"]: [212.75, 229.12],
      ["2020-12-23"]: [220.67, 221.2],
      ["2021-01-22"]: [213.87, 228.0],
      ["2021-02-23"]: [214.34, 227.72],
      ["2021-03-23"]: [236.88, 205.18],
      ["2021-04-23"]: [215.5, 226.56],
      ["2021-05-21"]: [222.8, 220.02],
      ["2021-06-23"]: [216.04, 226.78],
      ["2021-07-23"]: [223.9, 218.92],
      ["2021-08-23"]: [217.39, 225.07],
      ["2021-09-23"]: [217.95, 224.51],
      ["2021-10-22"]: [225.74, 216.72],
      ["2021-11-23"]: [219.52, 222.35],
      ["2021-12-23"]: [227.24, 214.63],
      ["2022-01-21"]: [220.67, 221.2],
      ["2022-02-23"]: [219.37, 225.4],
      ["2022-03-23"]: [241.71, 203.06],
      ["2022-04-22"]: [220.59, 224.18],
      ["2022-05-23"]: [444.58],
      ["2022-06-23"]: [444.58],
      ["2022-07-22"]: [444.58],
      ["2022-08-23"]: [217.45, 235.59],
      ["2022-09-23"]: [218.06, 234.98],
      ["2022-10-21"]: [226.23, 226.81],
      ["2022-11-23"]: [205.76, 269.08],
      ["2022-12-23"]: [215.08, 259.76],
      ["2023-01-23"]: [207.12, 267.72],
      ["2023-02-23"]: [504.65],
      ["2023-03-23"]: [504.65],
      ["2023-04-21"]: [504.65],
      ["2023-05-23"]: [193.21, 331.03],
      ["2023-06-23"]: [182.98, 341.26],
      ["2023-07-21"]: [194.73, 329.51],
    }),
    []
  );

  const list = useMemo(() => {
    const result = Object.entries(values).reduce(
      (result, [date, factors]) =>
        Object.assign(result, {
          [date]: {
            date: new Date(date),
            value: factors.reduce((sum, val) => sum + val, 0),
            add: 60.0,
          },
        }),
      {} as Record<
        string,
        {
          date: Date;
          value: number;
          add: number;
          name?: string;
          buy?: number;
          sell?: number;
          spread?: number;
          pay?: number;
          sum?: number;
        }
      >
    );

    rates
      .filter((item) => item.code === code && item.date in result)
      .forEach(({ buy, code, date, sell, spread, units }) =>
        Object.assign(result[date], {
          name: `${units} ${code}`,
          buy: Number(buy),
          sell: Number(sell),
          spread: Number(spread),
          value: values[date].reduce((sum, val) => sum + val, 0),
        })
      );
    return Object.values(result)
      .map((item) =>
        Object.assign(
          item,
          item.sell
            ? ((pay) => ({
                pay,
                sum: pay + item.add,
              }))(Math.round(100 * item.sell * item.value) / 100)
            : {}
        )
      )
      .sort((a, b) => b.date.getTime() - a.date.getTime());
  }, [rates, values, code]);

  const series = useMemo(
    () =>
      rates
        .filter(({ code }) => checked.includes(code))
        .map(({ buy, sell, code, date, time, units }) => ({
          date: new Date(`${date} ${time}`),
          name: `${units} ${code}`,
          value: Number(sell),
          value2: Number(buy),
          group: code,
        }))
        .sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        ),
    [rates, checked]
  );

  console.log({ rates, code, list });

  return (
    <div className={styles.Section}>
      <h2>Exchange</h2>
      <fieldset>
        <legend>Code</legend>
        {CODES.map((code) => (
          <label key={code}>
            <input
              type="checkbox"
              value={code}
              checked={checked.includes(code)}
              onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
                ({ target }) =>
                  setCheckedOptions((checked) =>
                    target.checked
                      ? checked.concat(target.value)
                      : checked.filter((value) => value !== target.value)
                  ),
                []
              )}
            />
            <span>{code}</span>
          </label>
        ))}
      </fieldset>
      <SyncZoomProvider>
        <Chart list={series} type="area" legend rule />
        <Chart list={series} type="area" move />
      </SyncZoomProvider>
      <fieldset>
        <label>
          <span>Code</span>
          <select
            value={code}
            onChange={useCallback<ChangeEventHandler<HTMLSelectElement>>(
              ({ target }) => setCode(target.value),
              []
            )}
          >
            {CODES.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
        </label>
      </fieldset>
      <table>
        <tbody>
          <tr>
            <th>Data</th>
            <th>Nazwa</th>
            <th>Kupno</th>
            <th>Sprzedaż</th>
            <th>Spread</th>
            <th>Wartość</th>
            <th>Stała</th>
            <th>Kwota</th>
            <th>Płatność</th>
          </tr>
          {list.map((item, i) => (
            <tr
              key={i}
              tabIndex={0}
              onFocus={(e) => {
                const range = document.createRange();
                range.selectNode(e.target);
                ((selection) =>
                  selection &&
                  (selection.removeAllRanges(), selection.addRange(range)))(
                  window.getSelection()
                );
              }}
            >
              <td align="right">{format(item.date, "dd.MM.yyyy")}</td>
              <td>{item.name}</td>
              <td align="right">
                {item.buy
                  ? new Intl.NumberFormat("pl-PL", {
                      minimumFractionDigits: 4,
                    }).format(item.buy)
                  : ""}
              </td>
              <td align="right">
                {item.sell
                  ? new Intl.NumberFormat("pl-PL", {
                      minimumFractionDigits: 4,
                    }).format(item.sell)
                  : ""}
              </td>
              <td align="right">
                {item.spread
                  ? new Intl.NumberFormat("pl-PL", {
                      minimumFractionDigits: 4,
                    }).format(item.spread)
                  : ""}
              </td>
              <td align="right">
                {new Intl.NumberFormat("pl-PL", {
                  minimumFractionDigits: 2,
                }).format(item.value)}
              </td>
              <td align="right">
                {new Intl.NumberFormat("pl-PL", {
                  minimumFractionDigits: 2,
                }).format(item.add)}
              </td>
              <td align="right">
                {item.pay
                  ? new Intl.NumberFormat("pl-PL", {
                      minimumFractionDigits: 2,
                    }).format(item.pay)
                  : ""}
              </td>
              <td align="right">
                {item.sum
                  ? new Intl.NumberFormat("pl-PL", {
                      minimumFractionDigits: 2,
                    }).format(item.sum)
                  : ""}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          {[
            list.reduce(
              ({ value, add, pay, sum }, item) => ({
                value: value + item.value,
                add: add + item.add,
                pay: pay + (item.pay || 0),
                sum: sum + (item.sum || 0),
              }),
              {
                value: 0,
                add: 0,
                pay: 0,
                sum: 0,
              }
            ),
          ].map((item, i) => (
            <tr key={i}>
              <td colSpan={5}></td>
              <td align="right">
                {new Intl.NumberFormat("pl-PL", {
                  minimumFractionDigits: 2,
                }).format(item.value)}
              </td>
              <td align="right">
                {new Intl.NumberFormat("pl-PL", {
                  minimumFractionDigits: 2,
                }).format(item.add)}
              </td>
              <td align="right">
                {new Intl.NumberFormat("pl-PL", {
                  minimumFractionDigits: 2,
                }).format(item.pay)}
              </td>
              <td align="right">
                {new Intl.NumberFormat("pl-PL", {
                  minimumFractionDigits: 2,
                }).format(item.sum)}
              </td>
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}
