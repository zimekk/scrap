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
import Chart from "../../components/ZoomableLineChart";
import cx from "classnames";
import styles from "./styles.module.scss";

import type { Meta, Item } from "@dev/cli/src/services/QuotesService/types";

const ERA = 24 * 3600 * 1000;
const DAYS = 1200;

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
  ]);

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
      <Investments
        investments={options.investment}
        rates={rates}
        selected={investmentsSelected}
        setSelected={setInvestmentsSelected}
      />
      {/* <pre>{JSON.stringify(metas, null, 2)}</pre> */}
      {/* <pre>{JSON.stringify(list.slice(0, 5), null, 2)}</pre> */}
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
  selected,
  setSelected,
}: {
  transactions: { date: string; investment_id: number; value: number }[];
  names: Record<string, string>;
  rates: Record<string, Record<string, number>>;
  selected: number[];
  setSelected: Function;
}) {
  const [expanded, setExpanded] = useState<number[]>([]);

  const quotes = useMemo(
    () =>
      Object.keys(rates).reduce((result, id) => {
        const [date, unitValue] = Object.entries(rates[id]).pop();

        return Object.assign(result, {
          [id]: {
            date: new Date(date),
            unitValue,
          },
        });
      }, {}),
    [rates]
  );

  const list = transactions.map(getInvestmentTransaction({ names, rates }));

  return (
    <div className={styles.Transactions}>
      <h3>Transactions</h3>
      <table>
        <tbody>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selected.length === transactions.length}
                onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
                  ({ target }) =>
                    setSelected(
                      target.checked ? transactions.map((_, i) => i) : []
                    ),
                  []
                )}
              />
            </th>
            <th>Fundusz</th>
            <th>Kwota transakcji</th>
            <th>Liczba jednostek</th>
            <th>Data wyceny jednostki</th>
            <th>Wycena jednostki</th>
            <th>Wartość</th>
            <th>Data wyceny jednostki</th>
            <th>Wycena jednostki</th>
            <th>Wartość</th>
            <th>%</th>
          </tr>
          {list.map((item, i) =>
            [
              <tr key={i}>
                <td>
                  <input
                    type="checkbox"
                    checked={selected.includes(i)}
                    onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
                      ({ target }) =>
                        setSelected((selected: number[]) =>
                          !target.checked
                            ? selected.filter((n) => n !== i)
                            : selected.concat(i)
                        ),
                      []
                    )}
                  />
                </td>
                <td>
                  <a
                    href="#"
                    onClick={useCallback<MouseEventHandler>(
                      (e) => (
                        e.preventDefault(),
                        setExpanded((expanded) =>
                          expanded.includes(i)
                            ? expanded.filter((n) => n !== i)
                            : expanded.concat(i)
                        )
                      ),
                      []
                    )}
                  >
                    {item.name}
                  </a>
                </td>
                <td align="right">
                  {new Intl.NumberFormat("pl-PL", {
                    minimumFractionDigits: 2,
                  }).format(item.valueNetto)}
                  &nbsp;PLN
                </td>
                <td align="right">
                  {new Intl.NumberFormat("pl-PL", {}).format(item.units)}
                </td>
                <td align="right">{format(item.date, "dd.MM.yyyy")}</td>
                <td align="right">
                  {new Intl.NumberFormat("pl-PL", {
                    minimumFractionDigits: 2,
                  }).format(item.unitValue)}
                  &nbsp;PLN
                </td>
                <td align="right">
                  {new Intl.NumberFormat("pl-PL", {
                    minimumFractionDigits: 2,
                  }).format(item.value)}
                  &nbsp;PLN
                </td>
                <td align="right">
                  {format(quotes[item.investment_id].date, "dd.MM.yyyy")}
                </td>
                <td align="right">
                  {new Intl.NumberFormat("pl-PL", {
                    minimumFractionDigits: 2,
                  }).format(quotes[item.investment_id].unitValue)}
                  &nbsp;PLN
                </td>
                <td align="right">
                  {new Intl.NumberFormat("pl-PL", {
                    minimumFractionDigits: 2,
                  }).format(
                    Math.round(
                      100 * quotes[item.investment_id].unitValue * item.units
                    ) / 100
                  )}
                  &nbsp;PLN
                </td>
                <td align="right">
                  <Percent
                    value={
                      quotes[item.investment_id].unitValue / item.unitValue - 1
                    }
                  />
                </td>
              </tr>,
            ].concat(
              expanded.includes(i)
                ? [
                    <tr key={`${i}-details`}>
                      <td></td>
                      <td colSpan={8}>
                        {/* <pre>{JSON.stringify(rates[investment_id], null, 2)}</pre> */}
                        <pre>
                          {`Data wyceny jednostki
${format(item.date, "dd.MM.yyyy")}
Data realizacji
${format(item.date, "dd.MM.yyyy")}
Kwota transakcji netto w PLN
${new Intl.NumberFormat("pl-PL", {
  minimumFractionDigits: 2,
}).format(item.valueNetto)} PLN
Kwota transakcji brutto w PLN
${new Intl.NumberFormat("pl-PL", {
  minimumFractionDigits: 2,
}).format(item.valueBrutto)} PLN
Ilość jednostek po transakcji
${new Intl.NumberFormat("pl-PL", {}).format(item.units)}
Wartość jednostki w dniu wyceny
${new Intl.NumberFormat("pl-PL", {
  minimumFractionDigits: 2,
}).format(item.unitValue)} PLN
Wartość
${new Intl.NumberFormat("pl-PL", {
  minimumFractionDigits: 2,
}).format(item.value)} PLN
Opłata manipulacyjna
0,00 PLN / 0 %`}
                        </pre>
                      </td>
                    </tr>,
                  ]
                : []
            )
          )}
        </tbody>
        <tfoot>
          {[
            list
              .filter((_, i) => selected.includes(i))
              .reduce(
                ({ value, valueNetto, quote }, item) => ({
                  value: value + item.value,
                  valueNetto: valueNetto + item.valueNetto,
                  quote:
                    quote +
                    Math.round(
                      100 * quotes[item.investment_id].unitValue * item.units
                    ) /
                      100,
                }),
                {
                  value: 0,
                  valueNetto: 0,
                  quote: 0,
                }
              ),
          ].map((item, i) => (
            <tr key={i}>
              <td></td>
              <td></td>
              <td align="right">
                {new Intl.NumberFormat("pl-PL", {
                  minimumFractionDigits: 2,
                }).format(item.valueNetto)}
                &nbsp;PLN
              </td>
              <td colSpan={3}></td>
              <td align="right">
                {new Intl.NumberFormat("pl-PL", {
                  minimumFractionDigits: 2,
                }).format(item.value)}
                &nbsp;PLN
              </td>
              <td colSpan={2}></td>
              <td align="right">
                {new Intl.NumberFormat("pl-PL", {
                  minimumFractionDigits: 2,
                }).format(item.quote)}
                &nbsp;PLN
              </td>
              <td align="right">
                <Percent value={item.quote / item.value - 1} />
              </td>
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}

function Percent({ value }: { value: number }) {
  return (
    <div
      className={cx(
        styles.Percent,
        value === 0 ? styles.eq : value > 0 ? styles.gt : styles.lt
      )}
    >
      {new Intl.NumberFormat("pl-PL", {
        minimumFractionDigits: 2,
      }).format(Math.round(100 * 100 * value) / 100)}
      &nbsp;%
    </div>
  );
}

function getValueNearDate(values, date) {
  for (let i = 0; i < 5; i++) {
    let value = values[format(date, "yyyy-MM-dd")];
    if (value) {
      return value;
    }
    date = sub(date, {
      days: 1,
    });
  }
}

function Investments({
  investments,
  rates,
  selected,
  setSelected,
}: {
  investments: { id: number; name: string }[];
  rates: Record<string, Record<string, number>>;
  selected: number[];
  setSelected: Function;
}) {
  const [expanded, setExpanded] = useState<number[]>([]);
  const list = useMemo(
    () =>
      investments.map((item) => {
        const [date, unitValue] = Object.entries(rates[item.id]).pop();

        return {
          ...item,
          date: new Date(date),
          unitValue,
        };
      }),
    [rates]
  );

  return (
    <div className={styles.Investments}>
      <h3>Investments</h3>
      <table>
        <tbody>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selected.length === investments.length}
                onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
                  ({ target }) =>
                    setSelected(
                      target.checked ? investments.map(({ id }) => id) : []
                    ),
                  []
                )}
              />
            </th>
            <th>Fundusz</th>
            <th>Data wyceny jednostki</th>
            <th>Wycena jednostki</th>
            <th>7d</th>
            <th>14d</th>
            <th>1m</th>
            <th>3m</th>
            <th>6m</th>
            <th>12m</th>
            <th>24m</th>
            <th>36m</th>
          </tr>
          {list.map((item, i) =>
            [
              <tr key={i}>
                <td>
                  <input
                    type="checkbox"
                    checked={selected.includes(item.id)}
                    onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
                      ({ target }) =>
                        setSelected((selected: number[]) =>
                          !target.checked
                            ? selected.filter((id) => id !== item.id)
                            : selected.concat(item.id)
                        ),
                      []
                    )}
                  />
                </td>
                <td>
                  <a
                    href="#"
                    onClick={useCallback<MouseEventHandler>(
                      (e) => (
                        e.preventDefault(),
                        setExpanded((expanded) =>
                          expanded.includes(item.id)
                            ? expanded.filter((id) => id !== item.id)
                            : expanded.concat(item.id)
                        )
                      ),
                      []
                    )}
                  >
                    {item.name}
                  </a>
                </td>
                <td align="right">{format(item.date, "dd.MM.yyyy")}</td>
                <td align="right">
                  {new Intl.NumberFormat("pl-PL", {
                    minimumFractionDigits: 2,
                  }).format(item.unitValue)}
                  &nbsp;PLN
                </td>
                <td align="right">
                  <Percent
                    value={
                      item.unitValue /
                        getValueNearDate(
                          rates[item.id],
                          sub(item.date, {
                            days: 7,
                          })
                        ) -
                      1
                    }
                  />
                </td>
                <td align="right">
                  <Percent
                    value={
                      item.unitValue /
                        getValueNearDate(
                          rates[item.id],
                          sub(item.date, {
                            days: 14,
                          })
                        ) -
                      1
                    }
                  />
                </td>
                <td align="right">
                  <Percent
                    value={
                      item.unitValue /
                        getValueNearDate(
                          rates[item.id],
                          sub(item.date, {
                            months: 1,
                          })
                        ) -
                      1
                    }
                  />
                </td>
                <td align="right">
                  <Percent
                    value={
                      item.unitValue /
                        rates[item.id][
                          format(
                            sub(item.date, {
                              months: 3,
                            }),
                            "yyyy-MM-dd"
                          )
                        ] -
                      1
                    }
                  />
                </td>
                <td align="right">
                  <Percent
                    value={
                      item.unitValue /
                        getValueNearDate(
                          rates[item.id],
                          sub(item.date, {
                            months: 6,
                          })
                        ) -
                      1
                    }
                  />
                </td>
                <td align="right">
                  <Percent
                    value={
                      item.unitValue /
                        getValueNearDate(
                          rates[item.id],
                          sub(item.date, {
                            months: 12,
                          })
                        ) -
                      1
                    }
                  />
                </td>
                <td align="right">
                  <Percent
                    value={
                      item.unitValue /
                        getValueNearDate(
                          rates[item.id],
                          sub(item.date, {
                            months: 24,
                          })
                        ) -
                      1
                    }
                  />
                </td>
                <td align="right">
                  <Percent
                    value={
                      item.unitValue /
                        getValueNearDate(
                          rates[item.id],
                          sub(item.date, {
                            months: 36,
                          })
                        ) -
                      1
                    }
                  />
                </td>
              </tr>,
            ].concat(
              expanded.includes(item.id)
                ? [
                    <tr key={`${i}-details`}>
                      <td></td>
                      <td colSpan={3}>
                        <pre>{JSON.stringify(item, null, 2)}</pre>
                        <pre>{JSON.stringify(rates[item.id], null, 2)}</pre>
                      </td>
                    </tr>,
                  ]
                : []
            )
          )}
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
