import React, {
  type ChangeEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { createAsset } from "use-asset";
import { format, sub } from "date-fns";
import Chart, { SyncZoomProvider } from "../../components/ZoomableLineChart";
import DonutChart from "../../components/DonutChart";
import Investments from "./Investments";
import Transactions from "./Transactions";
import * as data from "./data";
import styles from "./styles.module.scss";

import type { Meta, Item } from "@dev/cli/src/services/QuotesService/types";

const ERA = 24 * 3600 * 1000;
const DAYS = 1200;

// https://github.com/pmndrs/use-asset#dealing-with-async-assets
const asset = createAsset(async (version) => {
  const res = await fetch(`api/quotes/data.json?${version}`);
  return await res.json().then(({ metas, objects }) => ({
    metas,
    objects: objects.concat([
      {
        date: "2022-06-23",
        // "roi": -29.59,
        // "unit": "A",
        // value: 70.55,
        value: 68.65,
        // "id": "investments-10-2022-06-22",
        investment_id: 10,
      },
    ]),
  }));
});

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
    if (!rates[investment_id]) {
      return null;
    }
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

function Data({ version = "v1" }) {
  const { metas, objects: results } = asset.read(version) as {
    metas: Meta[];
    objects: Item[];
  };

  const [transactions] = useState(() => data.transactions);

  const options = useMemo(
    () => ({
      investment: metas
        .map(({ id, name }) => ({ id, name }))
        .sort((a, b) => a.name.localeCompare(b.name)),
    }),
    [results],
  );

  const names = useMemo(
    () =>
      metas.reduce(
        (result: Record<string, string>, { id, name }) =>
          Object.assign(result, {
            [id]: name,
          }),
        {},
      ),
    [metas],
  );

  const rates = useMemo(
    () =>
      results
        .sort((a, b) => a.date.localeCompare(b.date))
        .reduce(
          (
            result: Record<string, Record<string, number>>,
            { date, investment_id, value },
          ) =>
            Object.assign(result, {
              [investment_id]: Object.assign(result[investment_id] || {}, {
                [date]: value,
              }),
            }),
          {},
        ),
    [results],
  );

  const [filters, setFilters] = useState(() => ({
    // investment: options.investment[0].id,
    // related: options.investment[0].id,
    search: "",
  }));

  const [queries, setQueries] = useState(() => filters);

  const search$ = useMemo(() => new Subject<any>(), []);

  useEffect(() => {
    const subscription = search$
      .pipe(
        map(({ search, ...filters }) =>
          JSON.stringify({ ...queries, ...filters, search: search.trim() }),
        ),
        distinctUntilChanged(),
        debounceTime(400),
      )
      .subscribe((filters) =>
        setQueries((queries) => ({ ...queries, ...JSON.parse(filters) })),
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
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
        ),
    [results],
  );

  const from = useMemo(
    () => unified[unified.length - 1].date.getTime() - ERA * 2000,
    [unified],
  );

  const [selected, setSelected] = useState<number[]>(() =>
    transactions.map((_, i) => i),
  );
  const [selectedDate, setSelectedDate] = useState<string>(() =>
    format(unified[unified.length - 1].date.getTime(), "yyyy-MM-dd"),
  );
  const [investmentsSelected, setInvestmentsSelected] = useState<number[]>(
    () => [34, 35, 44, 79],
  );

  const list = useMemo(
    () =>
      unified
        .filter(({ investment_id }) =>
          investmentsSelected.includes(investment_id),
        )
        .filter(({ date }) => date.getTime() > from),
    [unified, investmentsSelected],
  );

  // const relation = useMemo(
  //   () =>
  //     Object.entries(
  //       unified.reduce(
  //         (result, { date, investment_id, value }) =>
  //           Object.assign(result, {
  //             [format(date, "yyyy-MM-dd")]: Object.assign(
  //               result[format(date, "yyyy-MM-dd")] || {},
  //               {
  //                 [investment_id]: value,
  //               }
  //             ),
  //           }),
  //         {}
  //       )
  //     )
  //       .map(([date, investments]) => ({
  //         date: new Date(date),
  //         value: investments[filters.investment] / investments[filters.related],
  //       }))
  //       .filter(({ date }) => date.getTime() > from),
  //   [unified, filters]
  // );

  const getRelatedValue = useCallback((values, date, selectedDate) => {
    const formattedDate = format(date, "yyyy-MM-dd");
    if (values[formattedDate] && values[selectedDate]) {
      return values[formattedDate] / values[selectedDate];
    }
    return 0;
  }, []);

  return (
    <div>
      <SyncZoomProvider>
        {/* <fieldset>
          <label>
            <span>Investment</span>
            <select
              value={filters.investment}
              onChange={useCallback<ChangeEventHandler<HTMLSelectElement>>(
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
        </fieldset> */}
        <Chart
          list={list.map(({ investment_id, ...item }) => ({
            ...item,
            group: names[investment_id],
          }))}
          legend
          rule
        />
        <fieldset>
          {/* <label>
            <span>Related</span>
            <select
              value={filters.related}
              onChange={useCallback<ChangeEventHandler<HTMLSelectElement>>(
                ({ target }) =>
                  setFilters((filters) => ({
                    ...filters,
                    related: Number(target.value),
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
          <button
            onClick={useCallback<MouseEventHandler>(
              (e) => (
                e.preventDefault(),
                setFilters(({ investment, related, ...filters }) => ({
                  ...filters,
                  investment: related,
                  related: investment,
                }))
              ),
              []
            )}
          >
            reverse
          </button> */}
          <label>
            <span>Date</span>
            <input
              type="date"
              value={selectedDate}
              onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
                ({ target }) => setSelectedDate(target.value),
                [],
              )}
            />
          </label>
        </fieldset>
        <Chart
          list={unified
            .filter(({ investment_id }) =>
              investmentsSelected.includes(investment_id),
            )
            .filter(({ date }) => date.getTime() > from)

            .map(({ investment_id, ...item }) => ({
              ...item,
              value: getRelatedValue(
                rates[investment_id],
                item.date,
                selectedDate,
              ),
              group: names[investment_id],
            }))}
          rule
        />
        {/* <fieldset>
          <label>
            <span>Search</span>
            <input
              type="search"
              value={filters.search}
              onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
                ({ target }) =>
                  setFilters((filters) => ({
                    ...filters,
                    search: target.value,
                  })),
                []
              )}
            />
          </label>
        </fieldset> */}
        <Investments
          investments={options.investment}
          rates={rates}
          selected={investmentsSelected}
          setSelected={setInvestmentsSelected}
        />
      </SyncZoomProvider>
      <SyncZoomProvider>
        <Chart
          list={[...Array(DAYS)]
            .map((_, i) =>
              sub(new Date(), {
                days: i,
              }),
            )
            .reverse()
            .map((date, i) =>
              Object.entries(
                transactions
                  .filter(
                    (transaction, i) =>
                      new Date(transaction.date) <= date &&
                      selected.includes(i),
                  )
                  .map(getInvestmentTransactionValue({ date, rates }))
                  .filter(Boolean)
                  .reduce(
                    (
                      result: Record<string, number>,
                      { value, investment_id },
                    ) =>
                      Object.assign(result, {
                        [investment_id]: (result[investment_id] || 0) + value,
                      }),
                    {},
                  ),
              ).map(([investment_id, value]) => ({
                date,
                group: names[investment_id],
                value,
              })),
            )
            .flat()}
        />
        <Chart
          list={[...Array(DAYS)]
            .map((_, i) =>
              sub(new Date(), {
                days: i,
              }),
            )
            .reverse()
            .map((date) =>
              Object.entries(
                transactions
                  .filter(
                    (transaction, i) =>
                      new Date(transaction.date) <= date &&
                      selected.includes(i),
                  )
                  .map(getInvestmentTransactionValue({ date, rates }))
                  .filter(Boolean)
                  .reduce(
                    (result, { value }, i) =>
                      Object.assign(result, {
                        [i]: value,
                      }),
                    {},
                  ),
              ).map(([group, value], i, list) =>
                ((value2) => ({
                  date,
                  group,
                  value: value + value2,
                  value2,
                }))(
                  list
                    .slice(0, i)
                    .reduce((result, [_, value]) => result + value, 0),
                ),
              ),
            )
            .flat()}
          type="area"
          legend
        />
        <Transactions
          transactions={transactions}
          rates={rates}
          names={names}
          selected={selected}
          setSelected={setSelected}
        />
      </SyncZoomProvider>
      <DonutChart
        list={Object.entries(
          transactions
            .filter((_, i) => selected.includes(i))
            .reduce(
              (list: Record<number, number>, item) =>
                Object.assign(list, {
                  [item.investment_id]:
                    (list[item.investment_id] || 0) + item.value,
                }),
              {},
            ),
        )
          .map(([investment_id, value]) => ({
            label: names[investment_id],
            value,
          }))
          .sort((a, b) => b.value - a.value)}
      />
      {/* <pre>{JSON.stringify(metas, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(list.slice(0, 5), null, 2)}</pre> */}
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
