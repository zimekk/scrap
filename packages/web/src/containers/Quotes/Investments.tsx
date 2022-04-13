import React, {
  ChangeEventHandler,
  MouseEventHandler,
  useCallback,
  useMemo,
  useState,
} from "react";
import { format, sub } from "date-fns";
import cx from "classnames";
import styles from "./styles.module.scss";

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

export function Percent({ value }: { value: number }) {
  return isNaN(value) ? null : (
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

export default function Investments({
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
                      <td colSpan={11}>
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
