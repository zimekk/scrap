import React, { useMemo, useState } from "react";
import BalanceChart from "./BalanceChart";
import Chart, { COLORS } from "./Chart";
import * as data from "./data";
import cx from "classnames";
import styles from "./styles.module.scss";

interface Operation {
  date: string;
  number: string;
  amount: number;
  net?: number | string;
  min?: number;
  sms?: number;
  package?: string;
}

interface Item {
  date: string;
  number: string;
  amount: number;
  net: number;
  min: number | string;
  sms: number;
  roaming?: number;
  operations?: Omit<Operation, "date" | "number">[];
}

const isItem = (item: Partial<Item>): item is Item =>
  !(
    item.amount === undefined ||
    item.min === undefined ||
    item.sms === undefined
  );

const formatMin = (min: number | string) =>
  typeof min === "number"
    ? `${min} min`
    : min
        .split(":")
        .map((v, i) => `${v} ${["min", "s"][i]}`)
        .join(" ");
const formatNet = (net: number) =>
  net > 1100 ? `${net / 1000} GB` : `${net} MB`;
const formatPln = (pln: number) => `${pln} zł`;
const formatSms = (sms: number) => `${sms} sms`;

const parseMin = (min: number | string) =>
  typeof min === "number"
    ? min
    : (([m, s]) => Number(m) + Number(s) / 60)(min.split(":"));

function MobileNumber({
  number,
  onSelect,
}: {
  number: string;
  onSelect: (number: string) => void;
}) {
  const NUMBER = new Map([
    ["183", `507 *** ${number}`],
    ["938", `509 *** ${number}`],
    ["379", `501 *** ${number}`],
    ["818", `575 *** ${number}`],
    ["828", `575 *** ${number}`],
    ["796", `${number} *** 379`],
    ["102", `535 *** ${number}`],
  ]);

  return (
    <span>
      <i
        style={{
          display: "inline-block",
          width: ".75em",
          height: ".75em",
          backgroundColor: COLORS[[...NUMBER.keys()].indexOf(number)],
          borderRadius: "50%",
        }}
      ></i>{" "}
      <a
        onClick={(e) => {
          e.preventDefault();
          onSelect(number);
        }}
      >
        {NUMBER.get(number)}
      </a>
    </span>
  );
}

function Data() {
  const [operations] = useState<Operation[]>(() => {
    const operations: Operation[] = data.operations;
    return operations.concat(
      data.balance.reduce(
        (result, { date, number, operations = [] }) =>
          result.concat(operations.map((item) => ({ date, number, ...item }))),
        [] as Operation[],
      ),
    );
  });

  const recharges = useMemo(
    () => operations.filter(({ amount }) => amount > 0),
    [operations],
  );
  const purchases = useMemo(
    () => operations.filter(({ amount }) => amount < 0),
    [operations],
  );

  const [balance] = useState<Item[]>(() =>
    data.balance.map(
      ({ date, number, amount = 0, min = 0, net = 0, sms = 0 }) => ({
        date,
        number,
        amount,
        min,
        net,
        sms,
      }),
    ),
  );

  const [mobile, setMobile] = useState<string | null>(null);

  const rows = useMemo(
    () =>
      balance
        .filter(isItem)
        .filter(({ number }) => [number, null].includes(mobile))
        .map(({ date, number, amount, net, min, sms }) => ({
          date,
          number,
          amount,
          net,
          min,
          sms,
        })),
    [balance, mobile],
  );

  return (
    <div className={styles.Mobile}>
      <h3>Recharges & Purchases</h3>
      <BalanceChart
        list={recharges.concat(
          purchases.map(({ date, number, amount }) => ({
            date,
            number,
            amount,
          })),
        )}
        balance={rows}
      />
      <h3>Balance</h3>
      <Chart list={rows} />
      <h3>Internet</h3>
      <Chart
        list={rows.map(({ number, date, net }) => ({
          number,
          date,
          amount: net / 1000,
        }))}
      />
      <h3>Minutes</h3>
      <Chart
        list={rows.map(({ number, date, min }) => ({
          number,
          date,
          amount: parseMin(min),
        }))}
      />
      <h3>Messages</h3>
      <Chart
        list={rows.map(({ number, date, sms }) => ({
          number,
          date,
          amount: sms,
        }))}
      />
      {mobile && (
        <div>
          <MobileNumber
            number={mobile}
            onSelect={(mobile) => setMobile(mobile)}
          />{" "}
          <button onClick={() => setMobile(null)}>x</button>
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>date</th>
            <th>number</th>
            <th>balance</th>
            <th>internet</th>
            <th>min</th>
            <th>sms</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ date, number, amount, net, min, sms }, i) => [
            <tr key={i}>
              <th>{date}</th>
              <td>
                <MobileNumber
                  number={number}
                  onSelect={(mobile) => setMobile(mobile)}
                />
              </td>
              <td>{formatPln(amount)}</td>
              <td className={cx(net < 1_000 && styles.warn)}>
                {formatNet(net)}
              </td>
              <td className={cx(parseMin(min) < 100 && styles.warn)}>
                {formatMin(min)}
              </td>
              <td className={cx(sms < 100 && styles.warn)}>{formatSms(sms)}</td>
            </tr>,
          ])}
        </tbody>
      </table>
    </div>
  );
}

export default function Section() {
  return (
    <div className={styles.Section}>
      <h2>Mobile</h2>
      <Data />
    </div>
  );
}
