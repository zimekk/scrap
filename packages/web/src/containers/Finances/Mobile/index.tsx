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
    { date: "2023-06-02", number: "183", amount: 5 },
    { date: "2023-06-02", number: "938", amount: 5 },
    { date: "2023-06-02", number: "379", amount: 25 },
    { date: "2023-06-02", number: "828", amount: 5 },

    { date: "2023-05-01", number: "183", amount: 5 },
    { date: "2023-05-01", number: "938", amount: 5 },
    { date: "2023-05-01", number: "379", amount: 25 },
    { date: "2023-05-01", number: "818", amount: 5 },
    { date: "2023-05-01", number: "828", amount: 5 },

    { date: "2023-04-19", number: "183", amount: 10 },

    { date: "2023-04-01", number: "183", amount: 15 },
    { date: "2023-04-01", number: "938", amount: 5 },
    { date: "2023-04-01", number: "379", amount: 25 },
    { date: "2023-04-01", number: "818", amount: 5 },
    { date: "2023-04-01", number: "828", amount: 5 },

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
    { date: "2023-06-02", number: "183", amount: 9, net: "2GB" },
    { date: "2023-06-02", number: "183", amount: 5, sms: 100 },
    { date: "2023-06-02", number: "818", amount: 5, sms: 100 },
    { date: "2023-06-02", number: "828", amount: 5, sms: 100 },

    { date: "2023-05-01", number: "938", amount: 15, min: 100 },

    { date: "2023-04-19", number: "183", amount: 9, net: "2GB" },
    { date: "2023-04-19", number: "828", amount: 5, net: "1GB" },

    {
      date: "2023-04-10",
      number: "379",
      amount: 25,
      net: 10_000,
      package: "SOLO M (10 GB)",
    },

    { date: "2023-04-01", number: "183", amount: 15, min: 100 },
    { date: "2023-04-01", number: "183", amount: 5, net: "1GB" },

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
      date: "2023-06-05",
      number: "183",
      amount: 0.95,
      net: 2_040,
      min: "77:12",
      sms: 132,
    },
    {
      date: "2023-06-05",
      number: "938",
      amount: 5.94,
      net: 1_800,
      min: 158,
      sms: 111,
    },
    {
      date: "2023-06-05",
      number: "379",
      amount: 27.72,
      net: 4_990,
      min: "1:22",
      sms: 130,
    },
    {
      date: "2023-06-05",
      number: "818",
      amount: 13.65,
      net: 2_640,
      min: 166,
      sms: 176,
    },
    {
      date: "2023-06-05",
      number: "828",
      amount: 4.61, // ?
      net: 720,
      min: 136,
      sms: 121,
    },

    {
      date: "2023-06-02",
      number: "183",
      amount: 9.95,
      // amount: 0.95,
      net: 148, // ?
      // net: 2_140,
      min: "82:53",
      sms: 32,
      // sms: 132,
    },
    {
      date: "2023-06-02",
      number: "938",
      amount: 0.94, // ?
      // amount: 5.94,
      net: 1_820,
      min: 158,
      sms: 111,
    },
    {
      date: "2023-06-02",
      number: "379",
      amount: 2.72, // ?
      // amount: 27.72,
      net: 6_020,
      min: "1:22",
      sms: 130,
    },
    {
      date: "2023-06-02",
      number: "818",
      amount: 18.65,
      // amount: 13.65,
      net: 2_650,
      min: 166,
      sms: 76, // ?
      // sms: 176,
    },
    {
      date: "2023-06-02",
      number: "828",
      amount: 4.61, // ?
      net: 729,
      min: 139,
      sms: 28, // ?
      // sms: 128,
    },

    {
      date: "2023-05-30",
      number: "183",
      amount: 9.95,
      net: 211,
      min: "82:53",
      sms: 32,
    },
    {
      date: "2023-05-30",
      number: "938",
      amount: 0.94,
      net: 1_830,
      min: 158,
      sms: 111,
    },
    {
      date: "2023-05-30",
      number: "379",
      amount: 2.72,
      net: 6_090,
      min: "1:22",
      sms: 130,
    },
    {
      date: "2023-05-30",
      number: "818",
      amount: 18.65,
      net: 2_660,
      min: 166,
      sms: 76,
    },
    {
      date: "2023-05-30",
      number: "828",
      amount: 4.61, // mms 05-24
      net: 753,
      min: 140,
      sms: 28,
    },

    {
      date: "2023-05-26",
      number: "183",
      amount: 9.95,
      net: 433,
      min: "84:57",
      sms: 33,
    },
    {
      date: "2023-05-26",
      number: "938",
      amount: 0.94,
      net: 1_850,
      min: 158,
      sms: 111,
    },
    {
      date: "2023-05-26",
      number: "379",
      amount: 2.72,
      net: 6_680,
      min: "1:22",
      sms: 130,
    },
    {
      date: "2023-05-26",
      number: "818",
      amount: 18.65,
      net: 2_690,
      min: 166,
      sms: 76,
    },
    {
      date: "2023-05-26",
      number: "828",
      amount: 4.61, // mms 05-24
      net: 811,
      min: 146,
      sms: 38,
    },

    {
      date: "2023-05-20",
      number: "183",
      amount: 9.95,
      net: 681,
      min: "85:49",
      sms: 34,
    },
    {
      date: "2023-05-20",
      number: "938",
      amount: 0.94,
      net: 1_860,
      min: 168,
      sms: 111,
    },
    {
      date: "2023-05-20",
      number: "379",
      amount: 2.72,
      net: 6_840,
      min: "1:22",
      sms: 130,
    },
    {
      date: "2023-05-20",
      number: "818",
      amount: 18.65,
      net: 2_730,
      min: 166,
      sms: 93,
    },
    {
      date: "2023-05-20",
      number: "828",
      amount: 5.2,
      net: 899,
      min: 146,
      sms: 67,
    },

    {
      date: "2023-05-15",
      number: "183",
      amount: 9.95,
      net: 750,
      min: "85:49",
      sms: 34,
    },
    {
      date: "2023-05-15",
      number: "938",
      amount: 0.94,
      net: 1_860,
      min: 168,
      sms: 111,
    },
    {
      date: "2023-05-15",
      number: "379",
      amount: 2.72,
      net: 6_840,
      min: "1:22",
      sms: 130,
    },
    {
      date: "2023-05-15",
      number: "818",
      amount: 18.65,
      net: 2_730,
      min: 166,
      sms: 105,
    },
    {
      date: "2023-05-15",
      number: "828",
      amount: 5.2,
      net: 963,
      min: 148,
      sms: 67,
    },

    {
      date: "2023-05-10",
      number: "183",
      amount: 9.95,
      net: 1_500,
      min: "87:50",
      sms: 43,
    },
    {
      date: "2023-05-10",
      number: "938",
      amount: 0.94,
      net: 1_910,
      min: 199,
      sms: 111,
    },
    {
      date: "2023-05-10",
      number: "379",
      amount: 2.72,
      net: 9_310,
      min: "1:22",
      sms: 130,
    },
    {
      date: "2023-05-10",
      number: "818",
      amount: 18.65,
      net: 2_750,
      min: 166,
      sms: 105,
    },
    {
      date: "2023-05-10",
      number: "828",
      amount: 5.2,
      net: 1_030,
      min: 149,
      sms: 68,
    },

    {
      date: "2023-05-05",
      number: "183",
      amount: 9.95,
      net: 1_720,
      min: "87:50",
      sms: 45,
    },
    {
      date: "2023-05-05",
      number: "938",
      amount: 0.94,
      net: 1_920,
      min: 199,
      sms: 111,
    },
    {
      date: "2023-05-05",
      number: "379",
      amount: 27.72,
      net: 7_120,
      min: "1:22",
      sms: 130,
    },
    {
      date: "2023-05-05",
      number: "818",
      amount: 13.65,
      // amount: 18.65,
      net: 2_770,
      min: 166,
      sms: 105,
    },
    {
      date: "2023-05-05",
      number: "828",
      amount: 5.2,
      net: 1_040,
      min: 150,
      sms: 77,
    },

    {
      date: "2023-05-01",
      number: "183",
      amount: 4.95,
      // amount: 9.95,
      net: 1_870,
      min: "88:05",
      sms: 45,
    },
    {
      date: "2023-05-01",
      number: "938",
      amount: 10.94,
      // amount: 0.94,
      net: 1_950,
      min: "99:37",
      // min: 199,
      sms: 111,
    },
    {
      date: "2023-05-01",
      number: "379",
      amount: 2.72,
      // amount: 27.72,
      net: 7_450,
      min: "1:22",
      sms: 130,
    },
    {
      date: "2023-05-01",
      number: "818",
      amount: 13.65,
      net: 2_780,
      min: 166,
      sms: 105,
    },
    {
      date: "2023-05-01",
      number: "828",
      amount: 0.2,
      // amount: 5.2,
      net: 1_080,
      min: 150,
      sms: 77,
    },

    {
      date: "2023-04-26",
      number: "183",
      amount: 4.95,
      net: 2_010,
      min: "89:27",
      sms: 45,
    },
    {
      date: "2023-04-26",
      number: "938",
      amount: 10.94,
      net: 1_950,
      min: "99:37",
      sms: 111,
    },
    {
      date: "2023-04-26",
      number: "379",
      amount: 2.72,
      net: 7_830,
      min: "1:22",
      sms: 130,
    },
    {
      date: "2023-04-26",
      number: "818",
      amount: 13.65,
      net: 2_810,
      min: 166,
      sms: 105,
    },
    {
      date: "2023-04-26",
      number: "828",
      amount: 0.2,
      net: 1_080,
      min: 150,
      sms: 77,
    },

    {
      date: "2023-04-21",
      number: "183",
      amount: 4.95,
      net: 2_100,
      min: "89:36",
      sms: 45,
    },
    {
      date: "2023-04-21",
      number: "938",
      amount: 10.94,
      net: 1_970,
      min: "99:37",
      sms: 111,
    },
    {
      date: "2023-04-21",
      number: "379",
      amount: 2.72,
      net: 8_640,
      min: "1:22",
      sms: 130,
    },
    {
      date: "2023-04-21",
      number: "818",
      amount: 13.65,
      net: 2_830,
      min: 166,
      sms: 105,
    },
    {
      date: "2023-04-21",
      number: "828",
      amount: 0.2,
      // net: 1_210,
      net: 1_210,
      min: 150,
      sms: 77,
    },

    {
      date: "2023-04-19",
      number: "183",
      amount: 3.95,
      // amount: 13.95,
      // amount: 4.95,
      net: 125,
      // net: 2_120,
      min: "89:36",
      sms: 45,
    },
    {
      date: "2023-04-19",
      number: "938",
      amount: 10.94,
      net: 1_970,
      min: 101,
      sms: 111,
    },
    {
      date: "2023-04-19",
      number: "379",
      amount: 2.72,
      net: 8_850,
      min: "1:22",
      sms: 130,
    },
    {
      date: "2023-04-19",
      number: "818",
      amount: 13.65,
      net: 2_870,
      min: 166,
      sms: 105,
    },
    {
      date: "2023-04-19",
      number: "828",
      amount: 5.2,
      // amount: .2,
      net: 225,
      // net: 1_210,
      min: 150,
      sms: 77,
    },

    {
      date: "2023-04-17",
      number: "183",
      amount: 3.95,
      net: 216,
      min: "89:36",
      sms: 45,
    },
    {
      date: "2023-04-17",
      number: "938",
      amount: 10.94,
      net: 1_970,
      min: 101,
      sms: 111,
    },
    {
      date: "2023-04-17",
      number: "379",
      amount: 2.72,
      net: 9_010,
      min: "1:22",
      sms: 130,
    },
    {
      date: "2023-04-17",
      number: "818",
      amount: 13.65,
      net: 2_890,
      min: 166,
      sms: 105,
    },
    {
      date: "2023-04-17",
      number: "828",
      amount: 5.2,
      net: 227,
      min: 150,
      sms: 77,
    },

    {
      date: "2023-04-11",
      number: "183",
      amount: 3.95,
      net: 691,
      min: "93:43",
      sms: 55,
    },
    {
      date: "2023-04-11",
      number: "938",
      amount: 10.94,
      net: 1_990,
      min: 110,
      sms: 127,
    },
    {
      date: "2023-04-11",
      number: "379",
      amount: 2.72,
      net: 9_760,
      min: "1:22",
      sms: 130,
    },
    {
      date: "2023-04-11",
      number: "818",
      amount: 13.65,
      net: 2_910,
      min: 166,
      sms: 109,
    },
    {
      date: "2023-04-11",
      number: "828",
      amount: 5.2,
      net: 247,
      min: 150,
      sms: 112,
    },

    {
      date: "2023-04-07",
      number: "183",
      amount: 3.64,
      net: 1_160,
      min: "93:43",
      sms: 61,
    },
    {
      date: "2023-04-07",
      number: "938",
      amount: 10.94,
      net: 2_000,
      min: 112,
      sms: 127,
    },
    {
      date: "2023-04-07",
      number: "379",
      amount: 27.72,
      net: 7_690,
      min: "1:22",
      sms: 130,
    },
    {
      date: "2023-04-07",
      number: "818",
      amount: 13.65,
      net: 2_930,
      min: 166,
      sms: 112,
    },
    {
      date: "2023-04-07",
      number: "828",
      amount: 5.2,
      net: 268,
      min: 150,
      sms: 112,
    },

    {
      date: "2023-04-04",
      number: "183",
      amount: 3.95,
      net: 1_160,
      min: "93:59",
      sms: 61,
    },
    {
      date: "2023-04-04",
      number: "938",
      amount: 10.94,
      net: 2_020,
      min: 115,
      sms: 149,
    },
    {
      date: "2023-04-04",
      number: "379",
      amount: 27.72,
      net: 7_840,
      min: "1:22",
      sms: 130,
    },
    {
      date: "2023-04-04",
      number: "818",
      amount: 13.65,
      net: 2_940,
      min: 169,
      sms: 122,
    },
    {
      date: "2023-04-04",
      number: "828",
      amount: 5.2,
      net: 276,
      min: 150,
      sms: 112,
    },

    {
      date: "2023-04-01",
      number: "183",
      amount: 8.95,
      net: 188,
      min: "1:26",
      sms: 61,
    },
    {
      date: "2023-04-01",
      number: "938",
      amount: 5.94,
      net: 2_030,
      min: 115,
      sms: 149,
    },
    {
      date: "2023-04-01",
      number: "379",
      amount: 2.72,
      net: 8_110,
      min: "1:22",
      sms: 130,
    },
    {
      date: "2023-04-01",
      number: "818",
      amount: 8.65,
      net: 3_130,
      min: 169,
      sms: 128,
    },
    {
      date: "2023-04-01",
      number: "828",
      amount: 0.2,
      net: 283,
      min: 150,
      sms: 112,
    },

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
