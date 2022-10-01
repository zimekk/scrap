import React, {
  ChangeEventHandler,
  MouseEventHandler,
  useCallback,
  useMemo,
  useState,
} from "react";
import { format } from "date-fns";
import styles from "./styles.module.scss";

export type Rate = {
  "Energia czynna": number;
  "Opłata handlowa": number;
  "Opłata jakościowa": number;
  "Opłata sieciowa zmienna": number;
  "Opłata OZE": number;
  "Opłata kogeneracyjna": number;
  "Opłata sieciowa stała": number;
  "Opłata przejściowa": number;
  "Opłata mocowa": number;
  "Opłata abonamentowa": number;
  VAT: number;
};

export type Item = {
  contract: string;
  counter: string;
  data: Rate;
  from: string;
  to: string;
  start: number;
  value: number;
  count: number;
  estimated?: boolean;
};

const VAT = "VAT";
const VALUE = [
  "Energia czynna",
  "Opłata jakościowa",
  "Opłata sieciowa zmienna",
  "Opłata OZE",
  "Opłata kogeneracyjna",
];

const getCalculations = (item: Item) =>
  Object.entries(item.data)
    .filter(([label]) => label !== VAT)
    .map(([label, price]) => {
      const vat = item.data[VAT];
      const kwh = Math.round(item.value - item.start);
      const count = VALUE.includes(label) ? kwh : item.count;
      const value = Math.round(price * count * 100) / 100;
      const tax = (value * vat) / 100;
      const total = Math.round((value + tax) * 100) / 100;
      return {
        label,
        count: VALUE.includes(label) ? `${count} kWh` : `${count} mc`,
        price,
        value,
        vat,
        tax,
        total,
      };
    });

const getSummary = (item: Item) =>
  getCalculations(item).reduce(
    ({ value, vat, tax, total }, item) => ({
      value: value + item.value,
      vat,
      tax: tax + item.tax,
      total: total + item.total,
    }),
    {
      value: 0,
      vat: item.data[VAT],
      tax: 0,
      total: 0,
    }
  );

export default function Calculations({
  calculations,
  selected,
  setSelected,
}: {
  calculations: Item[];
  selected: number[];
  setSelected: Function;
}) {
  const [expanded, setExpanded] = useState<number[]>([]);

  const list = useMemo(() => calculations.filter(Boolean), [calculations]);

  return (
    <div className={styles.Calculations}>
      <h3>Calculations</h3>
      <table>
        <tbody>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selected.length === calculations.length}
                onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
                  ({ target }) =>
                    setSelected(
                      target.checked ? calculations.map((_, i) => i) : []
                    ),
                  []
                )}
              />
            </th>
            <th align="left">Licznik / Okres zużycia</th>
            <th align="right">Poprzednie wskazanie licznika</th>
            <th align="right">Obecne wskazanie licznika</th>
            <th align="left">Rodzaj odczytu</th>
            <th align="right">Zużycie [kWh]</th>
            <th align="right">Wartość brutto [zł]</th>
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
                    {`${item.counter} / ${format(
                      new Date(item.from),
                      "dd.MM.yyyy"
                    )}-${format(new Date(item.to), "dd.MM.yyyy")}`}
                  </a>
                </td>
                <td align="right">
                  {new Intl.NumberFormat("pl-PL", {
                    minimumFractionDigits: 2,
                  }).format(item.start)}
                </td>
                <td align="right">
                  {new Intl.NumberFormat("pl-PL", {
                    minimumFractionDigits: 2,
                  }).format(item.value)}
                </td>
                <td align="left">{item.estimated ? "S**" : "R"}</td>
                <td align="right">
                  {new Intl.NumberFormat("pl-PL", {
                    minimumFractionDigits: 2,
                  }).format(item.value - item.start)}
                </td>
                <td align="right">
                  {new Intl.NumberFormat("pl-PL", {
                    minimumFractionDigits: 2,
                  }).format(getSummary(item).total)}
                </td>
              </tr>,
            ].concat(
              expanded.includes(i)
                ? [
                    <tr key={`${i}-details`}>
                      <td></td>
                      <td colSpan={6}>
                        <table width="100%">
                          <tbody>
                            <tr>
                              <th></th>
                              <th align="right">Ilość</th>
                              <th align="right">Cena netto [zł]</th>
                              <th align="right">Wartość netto [zł]</th>
                              <th align="right">Stawka VAT [%]</th>
                              <th align="right">Podatek VAT [zł]</th>
                              <th align="right">Wartość brutto [zł]</th>
                            </tr>
                            {getCalculations(item).map(
                              (
                                { label, count, price, value, vat, tax, total },
                                i
                              ) => (
                                <tr key={i}>
                                  <td>{label}</td>
                                  <td align="right">{count}</td>
                                  <td align="right">
                                    {new Intl.NumberFormat("pl-PL", {
                                      minimumFractionDigits: 4,
                                    }).format(price)}
                                  </td>
                                  <td align="right">
                                    {new Intl.NumberFormat("pl-PL", {
                                      minimumFractionDigits: 2,
                                    }).format(value)}
                                  </td>
                                  <td align="right">{vat}</td>
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
                              )
                            )}
                          </tbody>
                          <tfoot>
                            {[getSummary(item)].map((item, i) => (
                              <tr key={i}>
                                <th align="left">Razem</th>
                                <td colSpan={2}></td>
                                <td align="right">
                                  {new Intl.NumberFormat("pl-PL", {
                                    minimumFractionDigits: 2,
                                  }).format(item.value)}
                                </td>
                                <td align="right">{item.vat}</td>
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
                ({ value, total }, item) => ({
                  value: value + item.value - item.start,
                  total: total + getSummary(item).total,
                }),
                {
                  value: 0,
                  total: 0,
                }
              ),
          ].map((item, i) => (
            <tr key={i}>
              <td></td>
              <td colSpan={4}></td>
              <td align="right">
                {new Intl.NumberFormat("pl-PL", {
                  minimumFractionDigits: 2,
                }).format(item.value)}
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
  );
}
