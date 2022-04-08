import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { createAsset } from "use-asset";
import { format, sub } from "date-fns";
import Chart from "../../components/ZoomableLineChart";
import styles from "./styles.module.scss";

import type { Meta, Item } from "@dev/cli/src/services/QuotesService/types";

const ERA = 24 * 3600 * 1000;

// https://github.com/pmndrs/use-asset#dealing-with-async-assets
const asset = createAsset(async (version) => {
  const res = await fetch(`api/quotes/data.json?${version}`);
  return await res.json();
});

function Data({ version = "v1" }) {
  const { metas, objects: results } = asset.read(version) as {
    metas: Meta[];
    objects: Item[];
  };

  const options = useMemo(
    () => ({
      investment: metas
        .map(({ id, name }) => ({ id, name }))
        .sort((a, b) => a.name.localeCompare(b.name)),
    }),
    [results]
  );

  const names = useMemo(
    () =>
      metas.reduce(
        (result: Record<string, string>, { id, name }) =>
          Object.assign(result, {
            [id]: name,
          }),
        {}
      ),
    [metas]
  );

  const rates = useMemo(
    () =>
      results.reduce(
        (
          result: Record<string, Record<string, number>>,
          { date, investment_id, value }
        ) =>
          Object.assign(result, {
            [investment_id]: Object.assign(result[investment_id] || {}, {
              [date]: value,
            }),
          }),
        {}
      ),
    [results]
  );

  const [transactions] = useState(() => [
    { date: "2022-02-01", investment_id: 75, value: 1000 }, // PKO Akcji Rynku Amerykańskiego
    { date: "2022-02-28", investment_id: 34, value: 1000 }, // PKO Surowców Globalny
    { date: "2022-03-08", investment_id: 35, value: 1000 }, // PKO Technologii i Innowacji Globalny
    { date: "2022-03-01", investment_id: 75, value: 1000 }, // PKO Akcji Rynku Amerykańskiego
    { date: "2022-03-11", investment_id: 10, value: 1000 }, // PKO Akcji Nowa Europa
    { date: "2022-03-21", investment_id: 36, value: 1000 }, // PKO Dóbr Luksusowych Globalny
    { date: "2022-03-21", investment_id: 37, value: 1000 }, // PKO Infrastruktury i Budownictwa Globalny
    { date: "2022-04-01", investment_id: 34, value: 1000 }, // PKO Surowców Globalny
  ]);

  const [filters, setFilters] = useState(() => ({
    investment: options.investment[0].id,
    search: "",
  }));

  const [queries, setQueries] = useState(() => filters);

  const search$ = useMemo(() => new Subject<any>(), []);

  useEffect(() => {
    const subscription = search$
      .pipe(
        map(({ search, ...filters }) =>
          JSON.stringify({ ...queries, ...filters, search: search.trim() })
        ),
        distinctUntilChanged(),
        debounceTime(400)
      )
      .subscribe((filters) =>
        setQueries((queries) => ({ ...queries, ...JSON.parse(filters) }))
      );
    return () => subscription.unsubscribe();
  }, [search$]);

  useEffect(() => {
    search$.next(filters);
  }, [filters]);

  console.log({ metas, options, filters, results, rates });

  const unified = useMemo(
    () =>
      results
        .map(({ investment_id, value, date }) => ({
          investment_id,
          value,
          date: new Date(date),
        }))
        .sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        ),
    [results]
  );

  const from = useMemo(
    () => unified[unified.length - 1].date.getTime() - ERA * 2000,
    [unified]
  );

  const list = useMemo(
    () =>
      unified
        .filter(({ investment_id }) =>
          [filters.investment].includes(investment_id)
        )
        .filter(({ date }) => date.getTime() > from),
    [unified, filters]
  );

  return (
    <div>
      <fieldset>
        <label>
          <span>Investment</span>
          <select
            value={filters.investment}
            onChange={useCallback(
              ({ target }) =>
                setFilters((filters) => ({
                  ...filters,
                  investment: Number(target.value),
                })),
              []
            )}
          >
            {options.investment.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Search</span>
          <input
            type="search"
            value={filters.search}
            onChange={useCallback(
              ({ target }) =>
                setFilters((filters) => ({
                  ...filters,
                  search: target.value,
                })),
              []
            )}
          />
        </label>
      </fieldset>
      <Chart
        list={list.map(({ investment_id, ...item }) => ({
          ...item,
          group: names[investment_id],
        }))}
      />
      <Chart
        list={[...Array(120)]
          .map((_, i) =>
            sub(new Date(), {
              days: i,
            })
          )
          .reverse()
          .map((date, i) =>
            Object.entries(
              transactions
                .filter((transaction) => new Date(transaction.date) <= date)
                .map(getInvestmentTransactionValue({ date, rates }))
                .filter(Boolean)
                .reduce(
                  (result: Record<string, number>, { value, investment_id }) =>
                    Object.assign(result, {
                      [investment_id]: (result[investment_id] || 0) + value,
                    }),
                  {}
                )
            ).map(([investment_id, value]) => ({
              date,
              group: names[investment_id],
              value,
            }))
          )
          .flat()}
      />
      <Transactions transactions={transactions} rates={rates} names={names} />
      {options.investment.map(({ id, name }) => (
        <div key={id}>
          <h3>{name}</h3>
          {/* <Chart list={list[id]} /> */}
        </div>
      ))}
      <pre>{JSON.stringify(metas, null, 2)}</pre>
      <pre>{JSON.stringify(list.slice(0, 5), null, 2)}</pre>
    </div>
  );
}

const getInvestmentTransactionValue =
  ({
    date: valueDate,
    rates,
  }: {
    date: Date;
    rates: Record<string, Record<string, number>>;
  }) =>
  ({
    date,
    investment_id,
    value,
  }: {
    date: string;
    investment_id: number;
    value: number;
  }) => {
    const unitValue = rates[investment_id][date];
    const round = 1000;
    const units = Math.round((round * value) / unitValue) / round;
    const unitValueDate = rates[investment_id][format(valueDate, "yyyy-MM-dd")];
    return rates[investment_id][format(valueDate, "yyyy-MM-dd")]
      ? {
          investment_id,
          value: Math.round(100 * units * unitValueDate) / 100,
        }
      : null;
  };

const getInvestmentTransaction =
  ({
    names,
    rates,
  }: {
    names: Record<string, string>;
    rates: Record<string, Record<string, number>>;
  }) =>
  ({
    date,
    investment_id,
    value,
  }: {
    date: string;
    investment_id: number;
    value: number;
  }) => {
    const unitValue = rates[investment_id][date];
    const round = 1000;
    const units = Math.round((round * value) / unitValue) / round;
    return {
      name: names[investment_id],
      date: new Date(date),
      investment_id,
      value: Math.round(100 * units * unitValue) / 100,
      valueNetto: value,
      valueBrutto: value,
      unitValue,
      units,
    };
  };

function Transactions({
  transactions,
  rates,
  names,
}: {
  transactions: { date: string; investment_id: number; value: number }[];
  names: Record<string, string>;
  rates: Record<string, Record<string, number>>;
}) {
  return (
    <div className={styles.Transactions}>
      <h3>Transactions</h3>
      <table>
        <tbody>
          {transactions
            .map(getInvestmentTransaction({ names, rates }))
            .map((item, i) => (
              <tr key={i}>
                <td>
                  <div>{item.name}</div>
                  {/* <pre>{JSON.stringify(rates[investment_id], null, 2)}</pre> */}
                  <pre>
                    {`Data wyceny jednostki
${format(item.date, "yyyy-MM-dd")}
Data realizacji
28.02.2022
Kwota transakcji netto w PLN
${new Intl.NumberFormat("pl-PL", {
  minimumFractionDigits: 2,
}).format(item.valueNetto)} PLN
1 000,00 PLN
Kwota transakcji brutto w PLN
${new Intl.NumberFormat("pl-PL", {
  minimumFractionDigits: 2,
}).format(item.valueBrutto)} PLN
Ilość jednostek po transakcji
${item.units}
4,483
Wartość jednostki w dniu wyceny
${new Intl.NumberFormat().format(item.unitValue)} PLN
223,05 PLN
Wartość
${new Intl.NumberFormat("pl-PL", {
  minimumFractionDigits: 2,
}).format(item.value)} PLN
999,93 PLN
Opłata manipulacyjna
0,00 PLN / 0 %`}
                  </pre>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Section() {
  return (
    <div className={styles.Section}>
      <h2>Quotes</h2>
      <Data />
    </div>
  );
}
