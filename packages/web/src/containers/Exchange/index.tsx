import React, { useCallback, useMemo, useState } from "react";
import { createAsset } from "use-asset";
import { format } from "date-fns";
import styles from "./styles.module.scss";

const CODES = ["EUR", "USD", "CHF", "GBP"];

const asset = createAsset(async (version) => {
  // const res = await fetch(`api/exchange/data.json?${version}`);
  // return await res.json();
  return {
    // https://www.rbinternational.com.pl/rest/rates/?type=kursywalut&range=all&date=2022-02-21
    results: [
      {
        date: "2021-06-23",
        rates: {
          "08:07": [
            {
              code: "EUR",
              units: 1,
              buy: "4.2949",
              sell: "4.7413",
              spread: "0.4464",
              date: "2021-06-23",
              time: "08:07:00",
            },
            {
              code: "USD",
              units: 1,
              buy: "3.6078",
              sell: "3.9684",
              spread: "0.3606",
              date: "2021-06-23",
              time: "08:07:00",
            },
            {
              code: "CHF",
              units: 1,
              buy: "4.0220",
              sell: "4.2206",
              spread: "0.1986",
              date: "2021-06-23",
              time: "08:07:00",
            },
            {
              code: "GBP",
              units: 1,
              buy: "5.0287",
              sell: "5.5325",
              spread: "0.5038",
              date: "2021-06-23",
              time: "08:07:00",
            },
          ],
        },
        range: { minRateDate: "2000-03-22", maxRateDate: "2022-04-21" },
      },
      {
        date: "2021-07-23",
        rates: {
          "08:07": [
            {
              code: "EUR",
              units: 1,
              buy: "4.3412",
              sell: "4.7924",
              spread: "0.4512",
              date: "2021-07-23",
              time: "08:07:00",
            },
            {
              code: "USD",
              units: 1,
              buy: "3.6974",
              sell: "4.0670",
              spread: "0.3696",
              date: "2021-07-23",
              time: "08:07:00",
            },
            {
              code: "CHF",
              units: 1,
              buy: "4.1165",
              sell: "4.3198",
              spread: "0.2033",
              date: "2021-07-23",
              time: "08:07:00",
            },
            {
              code: "GBP",
              units: 1,
              buy: "5.0878",
              sell: "5.5975",
              spread: "0.5097",
              date: "2021-07-23",
              time: "08:07:00",
            },
          ],
        },
        range: { minRateDate: "2000-03-22", maxRateDate: "2022-04-21" },
      },
      {
        date: "2021-08-23",
        rates: {
          "08:07": [
            {
              code: "EUR",
              units: 1,
              buy: "4.3531",
              sell: "4.8056",
              spread: "0.4525",
              date: "2021-08-23",
              time: "08:07:00",
            },
            {
              code: "USD",
              units: 1,
              buy: "3.7223",
              sell: "4.0943",
              spread: "0.3720",
              date: "2021-08-23",
              time: "08:07:00",
            },
            {
              code: "CHF",
              units: 1,
              buy: "4.1605",
              sell: "4.3660",
              spread: "0.2055",
              date: "2021-08-23",
              time: "08:07:00",
            },
            {
              code: "GBP",
              units: 1,
              buy: "5.0817",
              sell: "5.5907",
              spread: "0.5090",
              date: "2021-08-23",
              time: "08:07:00",
            },
          ],
        },
        range: { minRateDate: "2000-03-22", maxRateDate: "2022-04-21" },
      },
      {
        date: "2021-09-23",
        rates: {
          "08:07": [
            {
              code: "EUR",
              units: 1,
              buy: "4.3920",
              sell: "4.8485",
              spread: "0.4565",
              date: "2021-09-23",
              time: "08:07:00",
            },
            {
              code: "USD",
              units: 1,
              buy: "3.7579",
              sell: "4.1335",
              spread: "0.3756",
              date: "2021-09-23",
              time: "08:07:00",
            },
            {
              code: "CHF",
              units: 1,
              buy: "4.1585",
              sell: "4.3639",
              spread: "0.2054",
              date: "2021-09-23",
              time: "08:07:00",
            },
            {
              code: "GBP",
              units: 1,
              buy: "5.1262",
              sell: "5.6397",
              spread: "0.5135",
              date: "2021-09-23",
              time: "08:07:00",
            },
          ],
        },
        range: { minRateDate: "2000-03-22", maxRateDate: "2022-04-21" },
      },
      {
        date: "2021-10-22",
        rates: {
          "08:07": [
            {
              code: "EUR",
              units: 1,
              buy: "4.3815",
              sell: "4.8369",
              spread: "0.4554",
              date: "2021-10-22",
              time: "08:07:00",
            },
            {
              code: "USD",
              units: 1,
              buy: "3.7757",
              sell: "4.1531",
              spread: "0.3774",
              date: "2021-10-22",
              time: "08:07:00",
            },
            {
              code: "CHF",
              units: 1,
              buy: "4.2144",
              sell: "4.4226",
              spread: "0.2082",
              date: "2021-10-22",
              time: "08:07:00",
            },
            {
              code: "GBP",
              units: 1,
              buy: "5.2090",
              sell: "5.7308",
              spread: "0.5218",
              date: "2021-10-22",
              time: "08:07:00",
            },
          ],
        },
        range: { minRateDate: "2000-03-22", maxRateDate: "2022-04-21" },
      },
      {
        date: "2021-11-23",
        rates: {
          "08:07": [
            {
              code: "EUR",
              units: 1,
              buy: "4.4761",
              sell: "4.9413",
              spread: "0.4652",
              date: "2021-11-23",
              time: "08:07:00",
            },
            {
              code: "USD",
              units: 1,
              buy: "3.9900",
              sell: "4.3888",
              spread: "0.3988",
              date: "2021-11-23",
              time: "08:07:00",
            },
            {
              code: "CHF",
              units: 1,
              buy: "4.3870",
              sell: "4.6036",
              spread: "0.2166",
              date: "2021-11-23",
              time: "08:07:00",
            },
            {
              code: "GBP",
              units: 1,
              buy: "5.3406",
              sell: "5.8756",
              spread: "0.5350",
              date: "2021-11-23",
              time: "08:07:00",
            },
          ],
        },
        range: { minRateDate: "2000-03-22", maxRateDate: "2022-04-21" },
      },
      {
        date: "2021-12-23",
        rates: {
          "08:07": [
            {
              code: "EUR",
              units: 1,
              buy: "4.4073",
              sell: "4.8653",
              spread: "0.4580",
              date: "2021-12-23",
              time: "08:07:00",
            },
            {
              code: "USD",
              units: 1,
              buy: "3.8950",
              sell: "4.2844",
              spread: "0.3894",
              date: "2021-12-23",
              time: "08:07:00",
            },
            {
              code: "CHF",
              units: 1,
              buy: "4.3410",
              sell: "4.5554",
              spread: "0.2144",
              date: "2021-12-23",
              time: "08:07:00",
            },
            {
              code: "GBP",
              units: 1,
              buy: "5.1995",
              sell: "5.7204",
              spread: "0.5209",
              date: "2021-12-23",
              time: "08:07:00",
            },
          ],
        },
        range: { minRateDate: "2000-03-22", maxRateDate: "2022-04-21" },
      },
      {
        date: "2022-01-21",
        rates: {
          "08:07": [
            {
              code: "EUR",
              units: 1,
              buy: "4.3051",
              sell: "4.7526",
              spread: "0.4475",
              date: "2022-01-21",
              time: "08:07:00",
            },
            {
              code: "USD",
              units: 1,
              buy: "3.8071",
              sell: "4.1877",
              spread: "0.3806",
              date: "2022-01-21",
              time: "08:07:00",
            },
            {
              code: "CHF",
              units: 1,
              buy: "4.2644",
              sell: "4.4750",
              spread: "0.2106",
              date: "2022-01-21",
              time: "08:07:00",
            },
            {
              code: "GBP",
              units: 1,
              buy: "5.1737",
              sell: "5.6920",
              spread: "0.5183",
              date: "2022-01-21",
              time: "08:07:00",
            },
          ],
        },
        range: { minRateDate: "2000-03-22", maxRateDate: "2022-04-21" },
      },
      {
        date: "2022-02-23",
        rates: {
          "08:07": [
            {
              code: "EUR",
              units: 1,
              buy: "4.3169",
              sell: "4.7656",
              spread: "0.4487",
              date: "2022-02-23",
              time: "08:07:00",
            },
            {
              code: "USD",
              units: 1,
              buy: "3.8201",
              sell: "4.2019",
              spread: "0.3818",
              date: "2022-02-23",
              time: "08:07:00",
            },
            {
              code: "CHF",
              units: 1,
              buy: "4.2503",
              sell: "4.4602",
              spread: "0.2099",
              date: "2022-02-23",
              time: "08:07:00",
            },
            {
              code: "GBP",
              units: 1,
              buy: "5.1921",
              sell: "5.7122",
              spread: "0.5201",
              date: "2022-02-23",
              time: "08:07:00",
            },
          ],
        },
        range: { minRateDate: "2000-03-22", maxRateDate: "2022-04-21" },
      },
      {
        date: "2022-03-23",
        rates: {
          "08:07": [
            {
              code: "EUR",
              units: 1,
              buy: "4.4521",
              sell: "4.9148",
              spread: "0.4627",
              date: "2022-03-23",
              time: "08:07:00",
            },
            {
              code: "USD",
              units: 1,
              buy: "4.0432",
              sell: "4.4474",
              spread: "0.4042",
              date: "2022-03-23",
              time: "08:07:00",
            },
            {
              code: "CHF",
              units: 1,
              buy: "4.4329",
              sell: "4.6518",
              spread: "0.2189",
              date: "2022-03-23",
              time: "08:07:00",
            },
            {
              code: "GBP",
              units: 1,
              buy: "5.3672",
              sell: "5.9049",
              spread: "0.5377",
              date: "2022-03-23",
              time: "08:07:00",
            },
          ],
        },
        range: { minRateDate: "2000-03-22", maxRateDate: "2022-04-21" },
      },
    ],
  };
});

export default function Section({ version = "v1" }) {
  const { results } = asset.read(version) as {
    results: object[];
  };

  const [code, setCode] = useState("CHF");

  const values = useMemo(
    () => ({
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
    }),
    []
  );

  const list = useMemo(
    () =>
      results
        .reduce((result, { rates }) => result.concat(Object.values(rates)), [])
        .flat()
        .filter((item) => item.code === code)
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
        ),
    [results, values, code]
  );

  console.log({ results, code, list });

  return (
    <div className={styles.Section}>
      <h2>Exchange</h2>
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
