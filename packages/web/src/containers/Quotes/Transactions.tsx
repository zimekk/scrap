import React, {
  ChangeEventHandler,
  MouseEventHandler,
  useCallback,
  useMemo,
  useState,
} from "react";
import { format } from "date-fns";
import { Percent } from "./Investments";
import styles from "./styles.module.scss";

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
    if (!rates[investment_id]) {
      return null;
    }
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

export default function Transactions({
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

  const list = useMemo(
    () =>
      transactions
        .map(getInvestmentTransaction({ names, rates }))
        .filter(Boolean),
    [transactions, names, rates]
  );

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
                      <td colSpan={10}>
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
                ({ units, value, valueNetto, quote }, item) => ({
                  units: units + item.units,
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
                  units: 0,
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
              <td align="right">
                {new Intl.NumberFormat("pl-PL", {
                  minimumFractionDigits: 2,
                }).format(item.units)}
              </td>
              <td colSpan={2}></td>
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
