import React, { useMemo, useState } from "react";
import BalanceChart from "./BalanceChart";
import Chart from "./Chart";
import styles from "./styles.module.scss";

const formatMin = (min: number | string) =>
  typeof min === "number" ? `${min} min` : min;
const formatNet = (net: number) =>
  net > 1100 ? `${net / 1000} GB` : `${net} MB`;
const formatPln = (pln: number) => `${pln} zł`;
const formatSms = (sms: number) => `${sms} sms`;

const parseMin = (min: number | string) =>
  typeof min === "number"
    ? min
    : (([m, s]) => Number(m) + Number(s) / 60)(min.split(":"));

function Data() {
  const [recharges] = useState(() => [
    { date: "2023-03-01", number: "183", amount: 5 },
    { date: "2023-03-01", number: "938", amount: 5 },
    { date: "2023-03-01", number: "379", amount: 25 },
    { date: "2023-03-01", number: "828", amount: 5 },

    { date: "2023-02-19", number: "828", amount: 5 },

    { date: "2023-02-18", number: "183", amount: 5 },

    { date: "2023-02-10", number: "379", amount: 25 },

    { date: "2023-02-02", number: "183", amount: 5 },
    { date: "2023-02-02", number: "938", amount: 5 },
    { date: "2023-02-02", number: "828", amount: 5 },
  ]);
  const [purchases] = useState(() => [
    {
      date: "2023-03-10",
      number: "379",
      amount: 25,
      net: 10_000,
      package: "SOLO M (10 GB)",
    },

    { date: "2023-03-01", number: "818", amount: 5, net: "1GB" },
    { date: "2023-03-01", number: "828", amount: 5, sms: 100 },

    { date: "2023-02-19", number: "828", amount: 5, sms: 100 },

    { date: "2023-02-18", number: "183", amount: 9, net: "2GB" },

    {
      date: "2023-02-10",
      number: "379",
      amount: 25,
      net: "10GB",
      package: "SOLO M (10 GB)",
    },

    { date: "2023-02-02", number: "183", amount: 5, net: "1GB" },
    { date: "2023-02-02", number: "938", amount: 15, min: 100 },
    { date: "2023-02-02", number: "818", amount: 5, net: "1GB" },
    { date: "2023-02-02", number: "828", amount: 15, min: 100 },
  ]);
  const [balance] = useState(() => [
    {
      date: "2023-03-28",
      number: "183",
      amount: 8.95,
      net: 333,
      min: "2:15",
      sms: 69,
    },
    {
      date: "2023-03-28",
      number: "938",
      amount: 5.94,
      net: 2_040,
      min: 115,
      sms: 149,
    },
    {
      date: "2023-03-28",
      number: "379",
      amount: 2.72,
      net: 8_390,
      min: "1:22",
      sms: 130,
    },
    {
      date: "2023-03-28",
      number: "818",
      amount: 8.65,
      net: 3_160,
      min: 170,
      sms: 133,
    },
    {
      date: "2023-03-28",
      number: "828",
      amount: 0.2,
      net: 290,
      min: 150,
      sms: 119,
    },

    {
      date: "2023-03-23",
      number: "183",
      amount: 8.95,
      net: 739,
      min: "12:10",
      sms: 75,
    },
    {
      date: "2023-03-23",
      number: "938",
      amount: 5.94,
      net: 2_040,
      min: 115,
      sms: 149,
    },
    {
      date: "2023-03-23",
      number: "379",
      amount: 2.72,
      net: 9_020,
      min: "1:22",
      sms: 130,
    },
    {
      date: "2023-03-23",
      number: "818",
      amount: 8.65,
      net: 3_250,
      min: 170,
      sms: 140,
    },
    {
      date: "2023-03-23",
      number: "828",
      amount: 0.2,
      net: 299,
      min: 150,
      sms: 125,
    },

    {
      date: "2023-03-17",
      number: "183",
      amount: 8.95,
      net: 818,
      min: "12:54",
      sms: 75,
    },
    {
      date: "2023-03-17",
      number: "938",
      amount: 5.94,
      net: 2_050,
      min: 115,
      sms: 149,
    },
    {
      date: "2023-03-17",
      number: "379",
      amount: 2.72,
      net: 9_540,
      min: "1:22",
      sms: 130,
    },
    {
      date: "2023-03-17",
      number: "818",
      amount: 8.65,
      net: 3_290,
      min: 170,
      sms: 140,
    },
    {
      date: "2023-03-17",
      number: "828",
      amount: 0.2,
      net: 299,
      min: 150,
      sms: 125,
    },

    {
      date: "2023-03-14",
      number: "183",
      amount: 8.95,
      net: 872,
      min: "15:23",
      sms: 75,
    },
    {
      date: "2023-03-14",
      number: "938",
      amount: 5.94,
      net: 2_060,
      min: 115,
      sms: 149,
    },
    {
      date: "2023-03-14",
      number: "379",
      amount: 2.72,
      net: 9_890,
      min: "1:22",
      sms: 130,
    },
    {
      date: "2023-03-14",
      number: "818",
      amount: 8.65,
      net: 3_320,
      min: 170,
      sms: 140,
    },
    {
      date: "2023-03-14",
      number: "828",
      amount: 0.2,
      net: 299,
      min: 150,
      sms: 125,
    },

    {
      date: "2023-03-13",
      number: "183",
      amount: 8.95,
      net: 873,
      min: 16,
      sms: 75,
    },

    {
      date: "2023-03-10",
      number: "183",
      amount: 8.95,
      net: 1_000,
      min: "16:30",
      sms: 75,
    },
    {
      date: "2023-03-10",
      number: "938",
      amount: 5.94,
      net: 2_070,
      min: 115,
      sms: 151,
    },
    {
      date: "2023-03-10",
      number: "379",
      amount: 2.72,
      net: 10_010,
      min: "1:22",
      sms: 130,
    },
    {
      date: "2023-03-10",
      number: "818",
      amount: 8.65,
      net: 3_350,
      min: 170,
      sms: 140,
    },
    {
      date: "2023-03-10",
      number: "828",
      amount: 0.2,
      net: 299,
      min: 150,
      sms: 29,
    },

    {
      date: "2023-02-19",
      number: "183",
      amount: 3.95,
      net: 1_820,
      min: "40:23",
      sms: 80,
    },
    {
      date: "2023-02-19",
      number: "938",
      amount: 0.94,
      net: 2_100,
      min: 115,
      sms: 154,
    },
    {
      date: "2023-02-19",
      number: "379",
      amount: 2.72,
      net: 9_860,
      min: "1:22",
      sms: 130,
    },
    {
      date: "2023-02-19",
      number: "818",
      amount: 13.65,
      net: 2_470,
      min: 170,
      sms: 140,
    },
    {
      date: "2023-02-19",
      number: "828",
      amount: 0.2,
      net: 354,
      min: 151,
      sms: 0,
    },

    {
      date: "2023-02-18",
      number: "183",
      amount: 7.95,
      net: 101,
      min: "40:23",
      sms: 80,
    },
    {
      date: "2023-02-18",
      number: "938",
      amount: 0.94,
      net: 2_110,
      min: 115,
      sms: 154,
    },
    {
      date: "2023-02-18",
      number: "379",
      amount: 2.72,
      net: 12_590,
      min: "1:22",
      sms: 130,
    },
    {
      date: "2023-02-18",
      number: "818",
      amount: 13.65,
      net: 2_480,
      min: 170,
      sms: 140,
    },
    {
      date: "2023-02-18",
      number: "828",
      amount: 2.93,
      net: 358,
      min: 151,
      sms: 13,
    },

    {
      date: "2023-02-10",
      number: "183",
      amount: 7.95,
      net: 1_570,
      min: "58:25",
      sms: 83,
    },
    {
      date: "2023-02-10",
      number: "938",
      amount: 0.94,
      net: 2_140,
      min: 120,
      sms: 154,
    },
    {
      date: "2023-02-10",
      number: "379",
      amount: 2.72,
      net: 3_700,
      min: "1:21",
      sms: 130,
    },
    {
      date: "2023-02-10",
      number: "818",
      amount: 13.65,
      net: 2_530,
      min: 170,
      sms: 140,
    },
    {
      date: "2023-02-10",
      number: "828",
      amount: 2.93,
      net: 817,
      min: 152,
      sms: 88,
    },

    {
      date: "2023-02-02",
      number: "183",
      amount: 7.95,
      net: 863,
      min: "58:25",
      sms: 87,
    },
    {
      date: "2023-02-02",
      number: "938",
      amount: 10.94,
      net: 2_170,
      min: "36:26",
      sms: 154,
    },
    {
      date: "2023-02-02",
      number: "379",
      amount: 2.72,
      net: 3_870,
      min: "6:28",
      sms: 130,
    },
    {
      date: "2023-02-02",
      number: "818",
      amount: 18.65,
      net: 2_590,
      min: 170,
      sms: 140,
    },
    {
      date: "2023-02-02",
      number: "828",
      amount: 2.93,
      net: 1008,
      min: 152,
      sms: 88,
    },
  ]);

  const rows = useMemo(
    () =>
      balance.map(({ date, number, amount, net, min, sms }) => ({
        date,
        number,
        amount,
        net,
        min,
        sms,
      })),
    [balance]
  );

  return (
    <div className={styles.Elixir}>
      {/* <h3>Recharges</h3>
      <Chart list={recharges} />
      <h3>Purchases</h3>
      <Chart list={purchases} /> */}
      <h3>Balance</h3>
      <BalanceChart
        list={recharges.concat(
          purchases.map(({ date, number, amount }) => ({
            date,
            number,
            amount: -amount,
          }))
        )}
        balance={rows}
      />
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
                {
                  {
                    183: `507 *** ${number}`,
                    938: `509 *** ${number}`,
                    379: `501 *** ${number}`,
                    818: `575 *** ${number}`,
                    828: `575 *** ${number}`,
                  }[number]
                }
              </td>
              <td>{formatPln(amount)}</td>
              <td>{formatNet(net)}</td>
              <td>{formatMin(min)}</td>
              <td>{formatSms(sms)}</td>
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
