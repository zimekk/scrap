import React, {
  ChangeEventHandler,
  MouseEventHandler,
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
import Investments from "./Investments";
import Transactions from "./Transactions";
import styles from "./styles.module.scss";

import type { Meta, Item } from "@dev/cli/src/services/QuotesService/types";

const ERA = 24 * 3600 * 1000;
const DAYS = 1200;

// https://github.com/pmndrs/use-asset#dealing-with-async-assets
const asset = createAsset(async (version) => {
  const res = await fetch(`api/quotes/data.json?${version}`);
  return await res.json();
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

  const [transactions] = useState(() => [
    { date: "2018-12-28", investment_id: 44, value: 5331.6 }, // PKO Zabezpieczenia Emerytalnego 2050
    { date: "2019-12-30", investment_id: 44, value: 1000 }, // PKO Zabezpieczenia Emerytalnego 2050
    { date: "2020-12-28", investment_id: 44, value: 1000 }, // PKO Zabezpieczenia Emerytalnego 2050
    { date: "2021-12-15", investment_id: 44, value: 1000 }, // PKO Zabezpieczenia Emerytalnego 2050
    { date: "2022-01-03", investment_id: 75, value: 1000 }, // PKO Akcji Rynku Amerykańskiego
    { date: "2022-02-01", investment_id: 75, value: 1000 }, // PKO Akcji Rynku Amerykańskiego
    { date: "2022-02-28", investment_id: 34, value: 1000 }, // PKO Surowców Globalny
    { date: "2022-03-08", investment_id: 35, value: 1000 }, // PKO Technologii i Innowacji Globalny
    { date: "2022-03-11", investment_id: 10, value: 1000 }, // PKO Akcji Nowa Europa
    { date: "2022-03-21", investment_id: 36, value: 1000 }, // PKO Dóbr Luksusowych Globalny
    { date: "2022-03-21", investment_id: 37, value: 1000 }, // PKO Infrastruktury i Budownictwa Globalny
    { date: "2022-04-01", investment_id: 34, value: 1000 }, // PKO Surowców Globalny
    { date: "2022-04-11", investment_id: 44, value: 1000 }, // PKO Zabezpieczenia Emerytalnego 2050
    { date: "2022-04-26", investment_id: 34, value: 1000 }, // PKO Surowców Globalny
  ]);

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
      results
        .sort((a, b) => a.date.localeCompare(b.date))
        .reduce(
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

  const [filters, setFilters] = useState(() => ({
    investment: options.investment[0].id,
    related: options.investment[0].id,
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
          [filters.investment, filters.related].includes(investment_id)
        )
        .filter(({ date }) => date.getTime() > from),
    [unified, filters]
  );

  const relation = useMemo(
    () =>
      Object.entries(
        unified.reduce(
          (result, { date, investment_id, value }) =>
            Object.assign(result, {
              [format(date, "yyyy-MM-dd")]: Object.assign(
                result[format(date, "yyyy-MM-dd")] || {},
                {
                  [investment_id]: value,
                }
              ),
            }),
          {}
        )
      )
        .map(([date, investments]) => ({
          date: new Date(date),
          value: investments[filters.investment] / investments[filters.related],
        }))
        .filter(({ date }) => date.getTime() > from),
    [unified, filters]
  );

  const [selected, setSelected] = useState<number[]>(() =>
    transactions.map((_, i) => i)
  );
  const [investmentsSelected, setInvestmentsSelected] = useState<number[]>([]);

  return (
    <div>
      <SyncZoomProvider>
        <fieldset>
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
        </fieldset>
        <Chart
          list={list.map(({ investment_id, ...item }) => ({
            ...item,
            group: names[investment_id],
          }))}
        />
        <fieldset>
          <label>
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
          </button>
        </fieldset>
        <Chart list={relation} />
      </SyncZoomProvider>
      <SyncZoomProvider>
        <fieldset>
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
        </fieldset>
        <Investments
          investments={options.investment}
          rates={rates}
          selected={investmentsSelected}
          setSelected={setInvestmentsSelected}
        />
        <Chart
          list={[...Array(DAYS)]
            .map((_, i) =>
              sub(new Date(), {
                days: i,
              })
            )
            .reverse()
            .map((date, i) =>
              Object.entries(
                transactions
                  .filter(
                    (transaction, i) =>
                      new Date(transaction.date) <= date && selected.includes(i)
                  )
                  .map(getInvestmentTransactionValue({ date, rates }))
                  .filter(Boolean)
                  .reduce(
                    (
                      result: Record<string, number>,
                      { value, investment_id }
                    ) =>
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
        <Chart
          list={[...Array(DAYS)]
            .map((_, i) =>
              sub(new Date(), {
                days: i,
              })
            )
            .reverse()
            .map((date, i) => ({
              date,
              value: transactions
                .filter(
                  (transaction, i) =>
                    new Date(transaction.date) <= date && selected.includes(i)
                )
                .map(getInvestmentTransactionValue({ date, rates }))
                .filter(Boolean)
                .reduce(
                  (result: Record<string, number>, { value }) => result + value,
                  0
                ),
            }))
            .filter(({ value }) => Boolean(value))}
        />
        <Transactions
          transactions={transactions}
          rates={rates}
          names={names}
          selected={selected}
          setSelected={setSelected}
        />
      </SyncZoomProvider>
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
