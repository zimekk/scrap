import React, {
  ChangeEventHandler,
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
  const values = useMemo(
    () => ({
      ["2018-04-23"]: 443.05,
      ["2019-05-23"]: 444.15,
      ["2019-06-21"]: 444.15,
      ["2019-07-23"]: 444.15,
      ["2019-08-23"]: 442.27,
      ["2020-01-23"]: 441.49,
      ["2020-02-21"]: 446.11,
      ["2020-06-23"]: 450.35,
      ["2020-07-23"]: 450.35,
      ["2020-10-23"]: 445.27,
      ["2020-11-23"]: 441.87,
      ["2020-12-23"]: 441.87,
      ["2021-01-22"]: 441.87,
      ["2021-02-23"]: 442.06,
      ["2021-03-23"]: 442.06,
      ["2021-04-23"]: 442.06,
      ["2021-05-21"]: 442.82,
      ["2021-06-23"]: 442.82,
      ["2021-07-23"]: 442.82,
      ["2021-08-23"]: 442.46,
      ["2021-09-23"]: 442.46,
      ["2021-10-22"]: 442.46,
      ["2021-11-23"]: 441.87,
      ["2021-12-23"]: 441.87,
      ["2022-01-21"]: 441.87,
      ["2022-02-23"]: 444.77,
      ["2022-03-23"]: 444.77,
      ["2022-04-22"]: 444.77,
    }),
    []
  );

  const list = useMemo(
    () =>
      rates
        .filter((item) => item.code === code)
        .filter((item) => Object.keys(values).includes(item.date))
        .map(({ buy, code, date, sell, spread, time, units }) => ({
          date: new Date(date),
          name: `${units} ${code}`,
          buy: Number(buy),
          sell: Number(sell),
          spread: Number(spread),
          value: values[date],
          add: 60.0,
        }))
        .map((item) =>
          Object.assign(item, {
            pay: Math.round(100 * item.sell * item.value) / 100 + item.add,
          })
        )
        .sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        ),
    [rates, values, code]
  );

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
        <Chart list={series} type="area" />
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
          </tr>
          {list.map((item, i) => (
            <tr key={i}>
              <td align="right">{format(item.date, "dd.MM.yyyy")}</td>
              <td>{item.name}</td>
              <td align="right">
                {new Intl.NumberFormat("pl-PL", {
                  minimumFractionDigits: 4,
                }).format(item.buy)}
              </td>
              <td align="right">
                {new Intl.NumberFormat("pl-PL", {
                  minimumFractionDigits: 4,
                }).format(item.sell)}
              </td>
              <td align="right">
                {new Intl.NumberFormat("pl-PL", {
                  minimumFractionDigits: 4,
                }).format(item.spread)}
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
                {new Intl.NumberFormat("pl-PL", {
                  minimumFractionDigits: 2,
                }).format(item.pay)}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          {[
            list.reduce(
              ({ value, add, pay }, item) => ({
                value: value + item.value,
                add: add + item.add,
                pay: pay + item.pay,
              }),
              {
                value: 0,
                add: 0,
                pay: 0,
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
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}
