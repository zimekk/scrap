import React, {
  type ChangeEventHandler,
  type MouseEventHandler,
  useCallback,
  useState,
} from "react";
import { format } from "date-fns";
import { type Items, type Rates, getMatch } from "./utils";
import styles from "./styles.module.scss";

const formatRange = (from: string, to: string) =>
  `${format(new Date(from), "dd.MM.yy")}-${format(new Date(to), "dd.MM.yy")}`;

const getSummary = (
  line: Record<string, { value: number; tax: number; total: number }[]>
) =>
  Object.entries(line).reduce(
    (result, [_, list]) =>
      list.reduce(
        ({ value, tax, total }, item) => ({
          value: value + item.value,
          tax: tax + item.tax,
          total: total + item.total,
        }),
        result
      ),
    {
      value: 0,
      tax: 0,
      total: 0,
    }
  );

export default function Calculations({
  counter,
  items,
  rates,
  selected,
  setSelected,
}: {
  counter: string;
  items: Items[];
  rates: Rates;
  selected: number[];
  setSelected: Function;
}) {
  const [expanded, setExpanded] = useState<number[]>([]);
  // console.log(expanded, items);

  return (
    <div className={styles.Calculations}>
      <h3>Calculations</h3>
      <table>
        <tbody>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selected.length === items.length}
                onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
                  ({ target }) =>
                    setSelected(target.checked ? items.map((_, i) => i) : []),
                  []
                )}
              />
            </th>
            <th align="left">Licznik / Okres zużycia</th>
            <th align="right">Netto [zł]</th>
            <th align="right">Podatek VAT [zł]</th>
            <th align="right">Brutto [zł]</th>
          </tr>
          {items.map((item, i) =>
            [
              Object.values(getMatch(item, rates)).reduce(
                (result, line) =>
                  Object.entries(line).reduce(
                    (result, [_, list]) =>
                      list.reduce(
                        ({ value, tax, total }, item) => ({
                          value: value + item.value,
                          tax: tax + item.tax,
                          total: total + item.total,
                        }),
                        result
                      ),
                    result
                  ),
                {
                  value: 0,
                  tax: 0,
                  total: 0,
                }
              ),
            ]
              .map(({ value, tax, total }) => (
                <tr key={i}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selected.includes(i)}
                      onChange={useCallback<
                        ChangeEventHandler<HTMLInputElement>
                      >(
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
                  <td align="left">
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
                      {`${counter} / Szczegóły rozliczenia za okres od ${format(
                        new Date(item[0].from),
                        "dd.MM.yyyy"
                      )} do ${format(
                        new Date(item[item.length - 1].to),
                        "dd.MM.yyyy"
                      )}`}
                    </a>
                  </td>
                  <td align="right">
                    {new Intl.NumberFormat("pl-PL", {
                      minimumFractionDigits: 2,
                    }).format(value)}
                  </td>
                  <td align="right">
                    {new Intl.NumberFormat("pl-PL", {
                      minimumFractionDigits: 2,
                    }).format(tax)}
                  </td>
                  <td align="right">
                    {new Intl.NumberFormat("pl-PL", {
                      minimumFractionDigits: 2,
                    }).format(total)}
                  </td>
                </tr>
              ))
              .concat(
                expanded.includes(i)
                  ? [
                      <tr key={`${i}-details`}>
                        <td></td>
                        <td colSpan={6}>
                          <div>
                            <h4>Wskazania układu pomiarowego</h4>
                            <table width="100%">
                              <tbody>
                                <tr>
                                  <th align="left">Numer licznika</th>
                                  <th align="left">Okres zużycia</th>
                                  <th align="right">
                                    Poprzednie wskazanie licznika
                                  </th>
                                  <th align="right">
                                    Obecne wskazanie licznika
                                  </th>
                                  <th align="right">Rodzaj odczytu</th>
                                  <th align="right">Zużycie [kWh]</th>
                                </tr>
                                {item.map(
                                  (
                                    { from, to, start, value, estimated },
                                    k
                                  ) => (
                                    <tr key={k}>
                                      <td>{counter}</td>
                                      <td align="right">
                                        {formatRange(from, to)}
                                      </td>
                                      <td align="right">
                                        {new Intl.NumberFormat("pl-PL", {
                                          minimumFractionDigits: 2,
                                        }).format(start)}
                                      </td>
                                      <td align="right">
                                        {new Intl.NumberFormat("pl-PL", {
                                          minimumFractionDigits: 2,
                                        }).format(value)}
                                      </td>
                                      <td align="right">
                                        {estimated ? "S**" : "R"}
                                      </td>
                                      <td align="right">
                                        {new Intl.NumberFormat("pl-PL", {
                                          minimumFractionDigits: 2,
                                        }).format(value - start)}
                                      </td>
                                    </tr>
                                  )
                                )}
                              </tbody>
                              <tfoot>
                                <tr>
                                  <th align="left">Razem</th>
                                  <td colSpan={4}></td>
                                  <td align="right">
                                    {new Intl.NumberFormat("pl-PL", {
                                      minimumFractionDigits: 2,
                                    }).format(
                                      item.reduce(
                                        (result, { start, value }) =>
                                          result + value - start,
                                        0
                                      )
                                    )}
                                  </td>
                                </tr>
                              </tfoot>
                            </table>
                          </div>
                          {Object.entries(getMatch(item, rates)).map(
                            ([name, list], key) => (
                              <div key={key}>
                                <h4>{name}</h4>
                                <table width="100%">
                                  <tbody>
                                    <tr>
                                      <th></th>
                                      <th align="left">Okres zużycia</th>
                                      <th align="right">Ilość</th>
                                      <th align="right">Cena netto [zł]</th>
                                      <th align="right">Wartość netto [zł]</th>
                                      <th align="right">Stawka VAT [%]</th>
                                      <th align="right">Podatek VAT [zł]</th>
                                      <th align="right">Wartość brutto [zł]</th>
                                    </tr>
                                    {Object.entries(list).map(
                                      ([label, list], i) =>
                                        list.map(
                                          (
                                            {
                                              from,
                                              to,
                                              count,
                                              price,
                                              value,
                                              vat,
                                              tax,
                                              total,
                                            },
                                            j
                                          ) => (
                                            <tr key={`${i}-${j}`}>
                                              <td>{label}</td>
                                              <td align="right">
                                                {formatRange(from, to)}
                                              </td>
                                              <td align="right">{count}</td>
                                              <td align="right">
                                                {new Intl.NumberFormat(
                                                  "pl-PL",
                                                  {
                                                    minimumFractionDigits: 4,
                                                    maximumFractionDigits: 5,
                                                  }
                                                ).format(price)}
                                              </td>
                                              <td align="right">
                                                {new Intl.NumberFormat(
                                                  "pl-PL",
                                                  {
                                                    minimumFractionDigits: 2,
                                                  }
                                                ).format(value)}
                                              </td>
                                              <td align="right">{vat}</td>
                                              <td align="right">
                                                {new Intl.NumberFormat(
                                                  "pl-PL",
                                                  {
                                                    minimumFractionDigits: 2,
                                                  }
                                                ).format(tax)}
                                              </td>
                                              <td align="right">
                                                {new Intl.NumberFormat(
                                                  "pl-PL",
                                                  {
                                                    minimumFractionDigits: 2,
                                                  }
                                                ).format(total)}
                                              </td>
                                            </tr>
                                          )
                                        )
                                    )}
                                  </tbody>
                                  <tfoot>
                                    {[getSummary(list)].map((item, i) => (
                                      <tr key={i}>
                                        <th align="left">Razem</th>
                                        <td colSpan={3}></td>
                                        <td align="right">
                                          {new Intl.NumberFormat("pl-PL", {
                                            minimumFractionDigits: 2,
                                          }).format(item.value)}
                                        </td>
                                        <td></td>
                                        <td align="right">
                                          {new Intl.NumberFormat("pl-PL", {
                                            minimumFractionDigits: 2,
                                          }).format(item.tax)}
                                        </td>
                                        <td align="right">
                                          {new Intl.NumberFormat("pl-PL", {
                                            minimumFractionDigits: 2,
                                          }).format(item.total)}
                                        </td>
                                      </tr>
                                    ))}
                                  </tfoot>
                                </table>
                              </div>
                            )
                          )}
                        </td>
                      </tr>,
                    ]
                  : []
              )
          )}
        </tbody>
        <tfoot>
          {[
            items
              .filter((_, i) => selected.includes(i))
              .reduce(
                (result, item) =>
                  Object.values(getMatch(item, rates)).reduce(
                    (result, line) =>
                      Object.entries(line).reduce(
                        (result, [_, list]) =>
                          list.reduce(
                            ({ value, tax, total }, item) => ({
                              value: value + item.value,
                              tax: tax + item.tax,
                              total: total + item.total,
                            }),
                            result
                          ),
                        result
                      ),
                    result
                  ),
                {
                  value: 0,
                  tax: 0,
                  total: 0,
                }
              ),
          ].map(({ value, tax, total }, i) => (
            <tr key={i}>
              <td></td>
              <td></td>
              <td align="right">
                {new Intl.NumberFormat("pl-PL", {
                  minimumFractionDigits: 2,
                }).format(value)}
              </td>
              <td align="right">
                {new Intl.NumberFormat("pl-PL", {
                  minimumFractionDigits: 2,
                }).format(tax)}
              </td>
              <td align="right">
                {new Intl.NumberFormat("pl-PL", {
                  minimumFractionDigits: 2,
                }).format(total)}
              </td>
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}
