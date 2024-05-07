import React, {
  type ChangeEventHandler,
  useCallback,
  useMemo,
  useState,
} from "react";
import { createAsset } from "use-asset";
import { format } from "date-fns";
import Chart, { SyncZoomProvider } from "../../components/ZoomableLineChart";
import installments from "./installments";
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
  const values = useMemo<Record<string, number[]>>(() => installments, []);

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
      >,
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
        }),
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
            : {},
        ),
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
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
        ),
    [rates, checked],
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
                      : checked.filter((value) => value !== target.value),
                  ),
                [],
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
              [],
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
                  window.getSelection(),
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
              },
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
