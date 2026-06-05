import type { Item } from "./types";
// yyyy-mm-19 183
// yyyy-mm-15 938
// yyyy-mm-25 379
// yyyy-mm-01 818
// yyyy-mm-01 828
// yyyy-mm-01 102

const MB = 1;
const GB = 1_000 * MB;

export type Balance = (Omit<Item, "amount" | "min" | "net" | "sms"> & {
  amount?: Item["amount"];
  min?: Item["min"];
  net?: Item["net"];
  sms?: Item["sms"];
})[];

export const balance: Balance = [
  {
    date: "2026-06-05",
    number: "183",
    // amount: 5.95, // ważne do 18 maja 2027
    // amount: 10.95, // ważne do 18 czerwca 2027
    amount: 1.95, // ważne do 18 czerwca 2027
    // net: 829 * MB,
    net: 2.8 * GB,
    // roaming: 3.09 * GB,
    roaming: 6.18 * GB,
    min: "93:28",
    sms: 55,
    operations: [
      {
        amount: -9,
        net: "2GB", // Pakiet 2 GB bez terminu ważności
      },
      { amount: 5 },
    ],
  },
  {
    date: "2026-06-05",
    number: "938",
    // amount: 11.08, // ważne do 14 maja 2027
    // amount: 16.08, // ważne do 14 czerwca 2027
    amount: 1.08, // ważne do 14 czerwca 2027
    net: 1.09 * GB,
    roaming: 0 * GB,
    // min: "66:48",
    min: 166,
    sms: 101,
    operations: [
      {
        amount: -15,
        min: 100, // 100 min do innych sieci i na numery stacjonarne
      },
      { amount: 5 },
    ],
  },
  {
    date: "2026-06-05",
    number: "379",
    // amount: 1.37, // ważne do 24 maja 2027
    amount: 26.37, // ważne do 24 czerwca 2027
    net: 2.2 * GB,
    roaming: 8.59 * GB,
    min: "1:22",
    sms: 130,
    operations: [{ amount: 25 }],
  },
  {
    date: "2026-06-05",
    number: "818",
    // amount: 5.97, // ważne do 31 maja 2027
    // amount: 10.97, // ważne do 30 czerwca 2027
    amount: 1.97, // ważne do 30 czerwca 2027
    // net: 873 * MB,
    net: 2.85 * GB,
    // roaming: 1.71 * GB,
    roaming: 4.81 * GB,
    min: 255,
    sms: 141,
    operations: [
      {
        amount: -9,
        net: "2GB", // Pakiet 2 GB bez terminu ważności
      },
      { amount: 5 },
    ],
  },
  {
    date: "2026-06-05",
    number: "828",
    amount: 1.01, // ważne do 31 maja 2027
    // net: 5.23 * GB,
    net: 4.9 * GB,
    // roaming: 12.71 * GB,
    roaming: 9.62 * GB,
    // min: "96:19", //
    min: "94:19", //
    sms: 41,
    operations: [],
  },
  {
    date: "2026-06-05",
    number: "796",
    amount: 70, // konto utraciło waność / traci ważność dziś / traci ważność za 5 dni
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
    operations: [],
  },
  {
    date: "2026-06-05",
    number: "102",
    roaming: 10.3 * GB,
    net: 150 * GB,
  },

  {
    date: "2026-06-01",
    number: "183",
    amount: 5.95, // ważne do 18 maja 2027
    net: 881 * MB,
    roaming: 3.09 * GB,
    min: "97:18",
    sms: 55,
    operations: [],
  },
  {
    date: "2026-06-01",
    number: "938",
    amount: 11.08, // ważne do 14 maja 2027
    net: 1.1 * GB,
    roaming: 0 * GB,
    min: "66:48",
    sms: 101,
    operations: [],
  },
  {
    date: "2026-06-01",
    number: "379",
    amount: 1.37, // ważne do 24 maja 2027
    net: 2.98 * GB,
    roaming: 8.59 * GB,
    min: "1:22",
    sms: 130,
    operations: [],
  },
  {
    date: "2026-06-01",
    number: "818",
    amount: 5.97, // ważne do 31 maja 2027
    net: 882 * MB,
    roaming: 4.81 * GB,
    min: 255,
    sms: 141,
    operations: [],
  },
  {
    date: "2026-06-01",
    number: "828",
    amount: 1.01, // ważne do 31 maja 2027
    net: 5.23 * GB,
    roaming: 12.71 * GB,
    min: "96:41", //
    sms: 42,
    operations: [],
  },
  {
    date: "2026-06-01",
    number: "796",
    amount: 70, // konto utraciło waność / traci ważność dziś / traci ważność za 5 dni
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
    operations: [],
  },
  {
    date: "2026-06-01",
    number: "102",
    roaming: 10.3 * GB,
    net: 150 * GB,
  },

  {
    date: "2026-05-30",
    number: "183",
    amount: 5.95, // ważne do 18 maja 2027
    net: 925 * MB,
    roaming: 3.09 * GB,
    min: "97:18",
    sms: 55,
    operations: [],
  },
  {
    date: "2026-05-30",
    number: "938",
    amount: 11.08, // ważne do 14 maja 2027
    net: 1.11 * GB,
    roaming: 0 * GB,
    min: "66:48",
    sms: 101,
    operations: [],
  },
  {
    date: "2026-05-30",
    number: "379",
    amount: 1.37, // ważne do 24 maja 2027
    net: 3.88 * GB,
    roaming: 8.59 * GB,
    min: "1:22",
    sms: 130,
    operations: [],
  },
  {
    date: "2026-05-30",
    number: "818",
    amount: 5.97, // ważne do 31 maja 2027
    net: 894 * MB,
    roaming: 4.81 * GB,
    min: 255,
    sms: 141,
    operations: [],
  },
  {
    date: "2026-05-30",
    number: "828",
    amount: 1.01, // ważne do 31 maja 2027
    net: 5.25 * GB,
    roaming: 12.71 * GB,
    min: "96:41", //
    sms: 43,
    operations: [],
  },
  {
    date: "2026-05-30",
    number: "796",
    amount: 70, // konto utraciło waność / traci ważność dziś / traci ważność za 5 dni
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
    operations: [],
  },
  {
    date: "2026-05-30",
    number: "102",
    roaming: 10.3 * GB,
    net: 150 * GB,
  },

  {
    date: "2026-05-26",
    number: "828",
    // amount: 1.01, // ważne do 31 maja 2027
    // amount: 11.01, // ważne do 31 maja 2027
    amount: 1.01, // ważne do 31 maja 2027
    // net: 1.92 * GB,
    net: 5.92 * GB,
    roaming: 9.28 * GB,
    min: "97:18", //
    sms: 48,
    operations: [
      {
        amount: -10,
        net: "4GB", // Pakiet 4 GB na 30 dni
      },
      { amount: 10 },
    ],
  },

  {
    date: "2026-05-25",
    number: "183",
    amount: 5.95, // ważne do 18 maja 2027
    net: 1.11 * GB,
    roaming: 3.09 * GB,
    min: "98:40",
    sms: 57,
    operations: [],
  },
  {
    date: "2026-05-25",
    number: "938",
    amount: 11.08, // ważne do 14 maja 2027
    net: 1.12 * GB,
    roaming: 0 * GB,
    min: "68:18",
    sms: 105,
    operations: [],
  },
  {
    date: "2026-05-25",
    number: "379",
    amount: 1.37, // ważne do 24 maja 2027
    net: 5.2 * GB,
    roaming: 8.59 * GB,
    min: "1:22",
    sms: 130,
    operations: [],
  },
  {
    date: "2026-05-25",
    number: "818",
    amount: 5.97, // ważne do 31 maja 2027
    net: 998 * MB,
    roaming: 4.81 * GB,
    min: 255,
    sms: 141,
    operations: [],
  },
  {
    date: "2026-05-25",
    number: "828",
    amount: 1.01, // ważne do 31 maja 2027
    net: 1.94 * GB,
    roaming: 9.28 * GB,
    min: "97:18", //
    sms: 48,
    operations: [],
  },
  {
    date: "2026-05-25",
    number: "796",
    amount: 70, // konto utraciło waność / traci ważność dziś / traci ważność za 5 dni
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
    operations: [],
  },
  {
    date: "2026-05-25",
    number: "102",
    roaming: 10.3 * GB,
    net: 150 * GB,
  },

  {
    date: "2026-05-20",
    number: "183",
    amount: 5.95, // ważne do 18 maja 2027
    net: 1.31 * GB,
    roaming: 3.09 * GB,
    min: "98:40",
    sms: 57,
    operations: [],
  },
  {
    date: "2026-05-20",
    number: "938",
    amount: 11.08, // ważne do 14 maja 2027
    net: 1.15 * GB,
    roaming: 0 * GB,
    min: "69:01",
    sms: 105,
    operations: [],
  },
  {
    date: "2026-05-20",
    number: "379",
    amount: 1.37, // ważne do 24 maja 2027
    net: 6.53 * GB,
    roaming: 8.59 * GB,
    min: "1:22",
    sms: 130,
    operations: [],
  },
  {
    date: "2026-05-20",
    number: "818",
    amount: 5.97, // ważne do 31 maja 2027
    net: 1.01 * GB,
    roaming: 4.81 * GB,
    min: 255,
    sms: 141,
    operations: [],
  },
  {
    date: "2026-05-20",
    number: "828",
    // amount: 0.01, // ważne do 31 maja 2027
    // amount: 10.01, // ważne do 31 maja 2027
    amount: 1.01, // ważne do 31 maja 2027
    // net: 227 * MB,
    net: 2.22 * GB,
    // roaming: 6.18 * GB,
    roaming: 9.28 * GB,
    min: "98:06", //
    sms: 57,
    operations: [
      {
        amount: -9,
        net: "2GB", // Pakiet 2 GB bez terminu ważności
      },
      { amount: 10 },
    ],
  },
  {
    date: "2026-05-20",
    number: "796",
    amount: 70, // konto utraciło waność / traci ważność dziś / traci ważność za 5 dni
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
    operations: [],
  },
  {
    date: "2026-05-20",
    number: "102",
    roaming: 10.3 * GB,
    net: 150 * GB,
  },

  {
    date: "2026-05-15",
    number: "183",
    amount: 5.95, // ważne do 18 maja 2027
    net: 1.58 * GB,
    roaming: 3.09 * GB,
    min: "98:40",
    sms: 57,
    operations: [],
  },
  {
    date: "2026-05-15",
    number: "938",
    amount: 11.08, // ważne do 14 maja 2027
    net: 1.17 * GB,
    roaming: 0 * GB,
    min: "69:01",
    sms: 107,
    operations: [],
  },
  {
    date: "2026-05-15",
    number: "379",
    amount: 1.37, // ważne do 24 maja 2027
    net: 7.74 * GB,
    roaming: 8.59 * GB,
    min: "1:22",
    sms: 130,
    operations: [],
  },
  {
    date: "2026-05-15",
    number: "818",
    amount: 5.97, // ważne do 31 maja 2027
    net: 1.04 * GB,
    roaming: 4.81 * GB,
    min: 255,
    sms: 141,
    operations: [],
  },
  {
    date: "2026-05-15",
    number: "828",
    amount: 0.01, // ważne do 31 maja 2027
    net: 345 * MB,
    roaming: 6.18 * GB,
    min: "98:13", //
    sms: 58,
    operations: [],
  },
  {
    date: "2026-05-15",
    number: "796",
    amount: 70, // konto utraciło waność / traci ważność dziś / traci ważność za 5 dni
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
    operations: [],
  },
  {
    date: "2026-05-15",
    number: "102",
    roaming: 10.3 * GB,
    net: 150 * GB,
  },

  {
    date: "2026-05-10",
    number: "183",
    amount: 5.95, // ważne do 18 maja 2027
    net: 1.72 * GB,
    roaming: 3.09 * GB,
    min: "99:18",
    sms: 58,
    operations: [],
  },
  {
    date: "2026-05-10",
    number: "938",
    amount: 11.08, // ważne do 14 maja 2027
    net: 1.2 * GB,
    roaming: 0 * GB,
    min: 149,
    sms: 109,
    operations: [],
  },
  {
    date: "2026-05-10",
    number: "379",
    // amount: 26.37, // ważne do 24 maja 2027
    amount: 1.37, // ważne do 24 maja 2027
    net: 10.87 * GB,
    roaming: 8.59 * GB,
    min: "1:22",
    sms: 130,
    operations: [],
  },
  {
    date: "2026-05-10",
    number: "818",
    amount: 5.97, // ważne do 31 maja 2027
    net: 1.19 * GB,
    roaming: 4.81 * GB,
    min: 255,
    sms: 141,
    operations: [],
  },
  {
    date: "2026-05-10",
    number: "828",
    amount: 0.01, // ważne do 31 maja 2027
    net: 506 * MB,
    roaming: 6.18 * GB,
    min: "98:26", //
    sms: 61,
    operations: [],
  },
  {
    date: "2026-05-10",
    number: "796",
    // amount: 65, // konto utraciło waność / traci ważność dziś / traci ważność za 5 dni
    amount: 70, // traci ważność dziś
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
    operations: [],
  },
  {
    date: "2026-05-10",
    number: "102",
    roaming: 10.3 * GB,
    net: 150 * GB,
  },

  {
    date: "2026-05-05",
    number: "183",
    // amount: 0.95, // ważne do 18 maja 2027
    amount: 5.95, // ważne do 18 maja 2027
    net: 1.84 * GB,
    roaming: 6.18 * GB,
    min: 101,
    sms: 61,
    operations: [{ amount: 5 }],
  },
  {
    date: "2026-05-05",
    number: "938",
    // amount: 6.08, // ważne do 14 kwietnia 2027
    amount: 11.08, // ważne do 6 maja 2027
    net: 1.22 * GB,
    roaming: 0 * GB,
    min: 149,
    sms: 109,
    operations: [{ amount: 5 }],
  },
  {
    date: "2026-05-05",
    number: "379",
    // amount: 1.37, // ważne do 24 kwietnia 2027
    amount: 26.37, // ważne do 24 maja 2027
    net: 3.35 * GB,
    roaming: 8.59 * GB,
    min: "1:22",
    sms: 130,
    operations: [{ amount: 25 }],
  },
  {
    date: "2026-05-05",
    number: "818",
    // amount: 0.97, // ważne do 30 kwietnia 2027
    amount: 5.97, // ważne do 31 maja 2027
    net: 1.21 * GB,
    roaming: 6.53 * GB,
    min: 255,
    sms: 141,
    operations: [{ amount: 5 }],
  },
  {
    date: "2026-05-05",
    number: "828",
    // amount: 0.01, // ważne do 30 kwietnia 2027
    // amount: 15.01, // ważne do 31 maja 2027
    amount: 0.01, // ważne do 31 maja 2027
    // net: 677 * MB,
    net: 675 * MB,
    roaming: 6.18 * GB,
    min: 100, //
    sms: 63,
    operations: [
      {
        amount: -15,
        min: 100, // 100 min do innych sieci i na numery stacjonarne
      },
      { amount: 15 },
    ],
  },
  {
    date: "2026-05-05",
    number: "796",
    // amount: 65, // konto utraciło waność / traci ważność dziś / traci ważność za 5 dni
    amount: 70, // traci ważność za 5 dni
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
    operations: [{ amount: 5 }],
  },
  {
    date: "2026-05-05",
    number: "102",
    roaming: 10.3 * GB,
    net: 150 * GB,
  },

  {
    date: "2026-05-01",
    number: "183",
    amount: 0.95, // ważne do 18 maja 2027
    net: 2.04 * GB,
    roaming: 6.18 * GB,
    min: 103,
    sms: 65,
    operations: [],
  },
  {
    date: "2026-05-01",
    number: "938",
    amount: 6.08, // ważne do 14 kwietnia 2027
    net: 1.25 * GB,
    roaming: 0 * GB,
    min: 149,
    sms: 109,
    operations: [],
  },
  {
    date: "2026-05-01",
    number: "379",
    amount: 1.37, // ważne do 24 kwietnia 2027
    net: 4.98 * GB,
    roaming: 8.59 * GB,
    min: "1:22",
    sms: 130,
    operations: [], //
  },
  {
    date: "2026-05-01",
    number: "818",
    amount: 0.97, // ważne do 30 kwietnia 2027
    net: 1.21 * GB,
    roaming: 6.53 * GB,
    min: 255,
    sms: 141,
    operations: [],
  },
  {
    date: "2026-05-01",
    number: "828",
    amount: 0.01, // ważne do 30 kwietnia 2027
    net: 884 * MB,
    roaming: 6.18 * GB,
    min: "00:00",
    sms: 65,
    operations: [],
  },
  {
    date: "2026-05-01",
    number: "796",
    // amount: 60, // konto utraciło waność / traci ważność dziś / traci ważność za 5 dni
    amount: 65, // konto utraciło waność
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
    operations: [],
  },
  {
    date: "2026-05-01",
    number: "102",
    roaming: 10.3 * GB,
    net: 150 * GB,
  },

  {
    date: "2026-04-30",
    number: "183",
    amount: 0.95, // ważne do 18 maja 2027
    net: 2.11 * GB,
    roaming: 6.18 * GB,
    min: 103, //
    sms: 66,
    operations: [], //
  },
  {
    date: "2026-04-30",
    number: "938",
    amount: 6.08, // ważne do 14 kwietnia 2027
    net: 1.25 * GB,
    roaming: 0 * GB,
    min: 149,
    sms: 109,
    operations: [], //
  },
  {
    date: "2026-04-30",
    number: "379",
    amount: 1.37, // ważne do 24 kwietnia 2027
    net: 5.01 * GB,
    roaming: 8.59 * GB,
    min: "1:22",
    sms: 130,
    operations: [], //
  },
  {
    date: "2026-04-30",
    number: "818",
    amount: 0.97, // ważne do 30 kwietnia 2027
    net: 1.21 * GB,
    roaming: 6.53 * GB,
    min: 255,
    sms: 141,
    operations: [], //
  },
  {
    date: "2026-04-30",
    number: "828",
    amount: 0.01, // ważne do 30 kwietnia 2027
    net: 945 * MB,
    roaming: 6.18 * GB,
    min: "00:00",
    sms: 66,
    operations: [], //
  },
  {
    date: "2026-04-30",
    number: "796",
    // amount: 60, // konto utraciło waność / traci ważność dziś / traci ważność za 5 dni
    amount: 65, // konto utraciło waność
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
    operations: [], //
  },
  {
    date: "2026-04-30",
    number: "102",
    roaming: 10.3 * GB,
    net: 148.56 * GB,
  },

  {
    date: "2026-04-25",
    number: "183",
    amount: 0.95, // ważne do 18 maja 2027
    net: 2.22 * GB,
    roaming: 6.18 * GB,
    min: 103, //
    sms: 69,
    operations: [], //
  },
  {
    date: "2026-04-25",
    number: "938",
    amount: 6.08, // ważne do 14 kwietnia 2027
    net: 1.28 * GB,
    roaming: 0 * GB,
    min: 150,
    sms: 109,
    operations: [], //
  },
  {
    date: "2026-04-25",
    number: "379",
    amount: 1.37, // ważne do 24 kwietnia 2027
    net: 6.11 * GB,
    roaming: 8.59 * GB,
    min: "1:22",
    sms: 130,
    operations: [], //
  },
  {
    date: "2026-04-25",
    number: "818",
    amount: 0.97, // ważne do 30 kwietnia 2027
    net: 1.27 * GB,
    roaming: 6.53 * GB,
    min: 255,
    sms: 141,
    operations: [], //
  },
  {
    date: "2026-04-25",
    number: "828",
    amount: 0.01, // ważne do 30 kwietnia 2027
    net: 1.18 * GB,
    roaming: 6.18 * GB,
    min: "00:00",
    sms: 71,
    operations: [], //
  },
  {
    date: "2026-04-25",
    number: "796",
    // amount: 60, // konto utraciło waność / traci ważność dziś / traci ważność za 5 dni
    amount: 65, // konto utraciło waność
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
    operations: [], //
  },
  {
    date: "2026-04-25",
    number: "102",
    roaming: 10.3 * GB,
    net: 148.56 * GB,
  },

  {
    date: "2026-04-20",
    number: "183",
    // amount: 4.95, // ważne do 18 kwietnia 2027
    // amount: 9.95, // ważne do 18 maja 2027
    amount: 0.95, // ważne do 18 maja 2027
    // net: 434 * MB,
    net: 2.42 * GB,
    roaming: 6.18 * GB,
    min: 107, //
    sms: 69,
    operations: [
      {
        amount: -9,
        net: "2GB", // Pakiet 2 GB bez terminu ważności
      },
      { amount: 5 },
    ], //
  },
  {
    date: "2026-04-20",
    number: "938",
    amount: 6.08, // ważne do 14 kwietnia 2027
    net: 1.3 * GB,
    roaming: 0 * GB,
    min: 150,
    sms: 109,
    operations: [], //
  },
  {
    date: "2026-04-20",
    number: "379",
    amount: 1.37, // ważne do 24 kwietnia 2027
    net: 7.58 * GB,
    roaming: 8.59 * GB,
    min: "1:22",
    sms: 130,
    operations: [], //
  },
  {
    date: "2026-04-20",
    number: "818",
    amount: 0.97, // ważne do 30 kwietnia 2027
    net: 1.37 * GB,
    roaming: 6.53 * GB,
    min: 255,
    sms: 141,
    operations: [], //
  },
  {
    date: "2026-04-20",
    number: "828",
    amount: 0.01, // ważne do 30 kwietnia 2027
    net: 1.55 * GB,
    roaming: 6.18 * GB,
    min: "00:00",
    sms: 75,
    operations: [], //
  },
  {
    date: "2026-04-20",
    number: "796",
    // amount: 60, // konto utraciło waność / traci ważność dziś / traci ważność za 5 dni
    amount: 65, // konto utraciło waność
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
    operations: [], //
  },
  {
    date: "2026-04-20",
    number: "102",
    roaming: 10.3 * GB,
    net: 148.56 * GB,
  },

  {
    date: "2026-04-15",
    number: "183",
    amount: 4.95, // ważne do 18 kwietnia 2027
    net: 657 * MB,
    roaming: 3.09 * GB,
    min: 114, //
    sms: 69,
    operations: [], //
  },
  {
    date: "2026-04-15",
    number: "938",
    amount: 6.08, // ważne do 14 kwietnia 2027
    net: 1.32 * GB,
    roaming: 0 * GB,
    min: 150,
    sms: 109,
    operations: [], //
  },
  {
    date: "2026-04-15",
    number: "379",
    amount: 1.37, // ważne do 24 kwietnia 2027
    net: 9.65 * GB,
    roaming: 8.59 * GB,
    min: "1:22",
    sms: 130,
    operations: [], //
  },
  {
    date: "2026-04-15",
    number: "818",
    amount: 0.97, // ważne do 30 kwietnia 2027
    net: 1.47 * GB,
    roaming: 8.25 * GB,
    min: 255,
    sms: 141,
    operations: [], //
  },
  {
    date: "2026-04-15",
    number: "828",
    amount: 0.01, // ważne do 30 kwietnia 2027
    net: 1.89 * GB,
    roaming: 6.18 * GB,
    min: "00:00",
    sms: 86,
    operations: [], //
  },
  {
    date: "2026-04-15",
    number: "796",
    // amount: 60, // konto utraciło waność / traci ważność dziś / traci ważność za 5 dni
    amount: 65, // konto utraciło waność
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
    operations: [], //
  },
  {
    date: "2026-04-15",
    number: "102",
    roaming: 10.3 * GB,
    net: 149.6 * GB,
  },

  {
    date: "2026-04-10",
    number: "183",
    amount: 4.95, // ważne do 18 kwietnia 2027
    net: 871 * MB,
    roaming: 3.09 * GB,
    min: 121, //
    sms: 72,
    operations: [], //
  },
  {
    date: "2026-04-10",
    number: "938",
    amount: 6.08, // ważne do 14 kwietnia 2027
    net: 1.33 * GB,
    roaming: 0 * GB,
    min: 150,
    sms: 119,
    operations: [], //
  },
  {
    date: "2026-04-10",
    number: "379",
    amount: 2.61, // ważne do 24 kwietnia 2027
    net: 10.9 * GB,
    roaming: 8.59 * GB,
    min: "1:22",
    sms: 130,
    operations: [], //
  },
  {
    date: "2026-04-10",
    number: "818",
    amount: 0.97, // ważne do 30 kwietnia 2027
    net: 1.52 * GB,
    roaming: 11.34 * GB,
    min: 256,
    sms: 141,
    operations: [], //
  },
  {
    date: "2026-04-10",
    number: "828",
    amount: 0.69, // ważne do 30 kwietnia 2027
    net: 2.34 * GB,
    roaming: 9.28 * GB,
    min: "26:01",
    sms: 88,
    operations: [], //
  },
  {
    date: "2026-04-10",
    number: "796",
    // amount: 60, // konto utraciło waność / traci ważność dziś / traci ważność za 5 dni
    amount: 65, // traci ważność dziś
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
    operations: [], //
  },
  {
    date: "2026-04-10",
    number: "102",
    roaming: 10.3 * GB,
    net: 149.6 * GB,
  },

  {
    date: "2026-04-05",
    number: "183",
    // amount: 9.95, // ważne do 18 marca 2027
    // amount: 19.95, // ważne do 18 kwietnia 2027
    amount: 4.95, // ważne do 18 kwietnia 2027
    net: 1.06 * GB,
    roaming: 3.09 * GB,
    // min: "21:57",
    min: 121,
    sms: 72,
    operations: [
      {
        amount: -15,
        min: 100, // 100 min do innych sieci i na numery stacjonarne
      },
      { amount: 10 },
    ],
  },
  {
    date: "2026-04-05",
    number: "938",
    // amount: 1.08, // ważne do 14 marca 2027
    amount: 6.08, // ważne do 6 kwietnia 2027
    net: 1.34 * GB,
    roaming: 1.71 * GB,
    min: 150,
    sms: 119,
    operations: [{ amount: 5 }],
  },
  {
    date: "2026-04-05",
    number: "379",
    // amount: 2.61, // ważne do 24 marca 2027
    amount: 27.61, // ważne do 24 kwietnia 2027
    net: 5.78 * GB,
    roaming: 8.59 * GB,
    min: "1:22",
    sms: 130,
    operations: [{ amount: 25 }],
  },
  {
    date: "2026-04-05",
    number: "818",
    // amount: 0.97, // ważne do 31 marca 2027
    // amount: 5.97, // ważne do 6 kwietnia 2027
    amount: 0.97, // ważne do 30 kwietnia 2027
    net: 1.57 * GB,
    roaming: 9.62 * GB,
    min: 256,
    sms: 141,
    operations: [
      {
        amount: -5,
        net: "1GB", // Pakiet 1 GB bez terminu ważności
      },
      { amount: 5 },
    ],
  },
  {
    date: "2026-04-05",
    number: "828",
    // amount: 4.69, // ważne do 6 marca 2027
    // amount: 9.69, // ważne do 6 kwietnia 2027
    amount: 0.69, // ważne do 30 kwietnia 2027
    // net: 600 * MB,
    net: 2.6 * GB,
    roaming: 6.18 * GB,
    min: "26:01",
    sms: 93,
    operations: [
      {
        amount: -9,
        net: "2GB", // Pakiet 2 GB bez terminu ważności
      },
      { amount: 5 },
    ],
  },
  {
    date: "2026-04-05",
    number: "796",
    // amount: 60, // konto utraciło waność / traci ważność dziś / traci ważność za 5 dni
    amount: 65, // traci ważność za 5 dni
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
    operations: [{ amount: 5 }],
  },
  {
    date: "2026-04-05",
    number: "102",
    roaming: 10.3 * GB,
    net: 150 * GB,
  },

  {
    date: "2026-04-01",
    number: "183",
    amount: 9.95, // ważne do 18 marca 2027
    net: 1.23 * GB,
    roaming: 3.09 * GB,
    min: "23:40",
    sms: 72,
  },
  {
    date: "2026-04-01",
    number: "938",
    amount: 1.08, // ważne do 14 marca 2027
    net: 1.36 * GB,
    roaming: 1.71 * GB,
    min: 162,
    sms: 137,
  },
  {
    date: "2026-04-01",
    number: "379",
    amount: 2.61, // ważne do 24 marca 2027
    net: 6.75 * GB,
    roaming: 8.59 * GB,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2026-04-01",
    number: "818",
    amount: 0.97, // ważne do 31 marca 2027
    net: 611 * MB,
    roaming: 9.62 * GB,
    min: 256,
    sms: 141,
  },
  {
    date: "2026-04-01",
    number: "828",
    amount: 4.69, // ważne do 6 marca 2027
    net: 737 * MB,
    roaming: 6.18 * GB,
    min: "30:39",
    sms: 93,
  },
  {
    date: "2026-04-01",
    number: "796",
    amount: 60, // konto utraciło waność / traci ważność dziś / traci ważność za 5 dni
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
  },
  {
    date: "2026-04-01",
    number: "102",
    roaming: 10.3 * GB,
    net: 150 * GB,
  },

  {
    date: "2026-03-30",
    number: "183",
    amount: 9.95, // ważne do 18 marca 2027
    net: 1.27 * GB,
    roaming: 3.09 * GB,
    min: "23:40",
    sms: 72,
  },
  {
    date: "2026-03-30",
    number: "938",
    amount: 1.08, // ważne do 14 marca 2027
    net: 1.37 * GB,
    roaming: 1.71 * GB,
    min: 162, //
    sms: 137,
  },
  {
    date: "2026-03-30",
    number: "379",
    amount: 2.61, // ważne do 24 marca 2027
    net: 7.3 * GB,
    roaming: 8.59 * GB,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2026-03-30",
    number: "818",
    amount: 0.97, // ważne do 31 marca 2027
    net: 697 * MB, //
    roaming: 9.62 * GB,
    min: 256,
    sms: 141,
  },
  {
    date: "2026-03-30",
    number: "828",
    amount: 4.69, // ważne do 6 marca 2027
    net: 1.03 * GB, //
    roaming: 6.18 * GB,
    min: "35:02",
    sms: 93,
  },
  {
    date: "2026-03-30",
    number: "796",
    amount: 60, // konto utraciło waność / traci ważność dziś / traci ważność za 5 dni
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
  },
  {
    date: "2026-03-30",
    number: "102",
    roaming: 10.3 * GB,
    net: 150 * GB,
  },

  {
    date: "2026-03-25",
    number: "183",
    amount: 9.95, // ważne do 18 marca 2027
    net: 1.32 * GB,
    roaming: 3.09 * GB,
    min: "25:17",
    sms: 73,
  },
  {
    date: "2026-03-25",
    number: "938",
    amount: 1.08, // ważne do 14 marca 2027
    net: 1.4 * GB,
    roaming: 1.71 * GB,
    min: 162, //
    sms: 137,
  },
  {
    date: "2026-03-25",
    number: "379",
    amount: 2.61, // ważne do 24 marca 2027
    net: 7.92 * GB,
    roaming: 8.59 * GB,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2026-03-25",
    number: "818",
    amount: 0.97, // ważne do 31 marca 2027
    net: 747 * MB, //
    roaming: 9.62 * GB,
    min: 256,
    sms: 141,
  },
  {
    date: "2026-03-25",
    number: "828",
    amount: 4.69, // ważne do 6 marca 2027
    net: 1.28 * GB, //
    roaming: 6.18 * GB,
    min: "36:47",
    sms: 94,
  },
  {
    date: "2026-03-25",
    number: "796",
    amount: 60, // konto utraciło waność / traci ważność dziś / traci ważność za 5 dni
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
  },
  {
    date: "2026-03-25",
    number: "102",
    roaming: 10.3 * GB,
    net: 150 * GB,
  },

  {
    date: "2026-03-16",
    number: "183",
    amount: 9.95, // ważne do 18 marca 2027
    net: 2.01 * GB,
    roaming: 3.09 * GB,
    min: "27:36",
    sms: 75,
  },
  {
    date: "2026-03-16",
    number: "938",
    amount: 1.08, // ważne do 14 marca 2027
    net: 1.43 * GB,
    roaming: 1.71 * GB,
    min: 162, //
    sms: 137,
  },
  {
    date: "2026-03-16",
    number: "379",
    amount: 2.61, // ważne do 24 marca 2027
    net: 10.16 * GB,
    roaming: 8.59 * GB,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2026-03-16",
    number: "818",
    amount: 0.97, // ważne do 31 marca 2027
    net: 1.45 * GB, //
    roaming: 9.62 * GB,
    min: 256,
    sms: 141,
  },
  {
    date: "2026-03-16",
    number: "828",
    amount: 4.69, // ważne do 6 marca 2027
    net: 1.94 * GB, //
    roaming: 6.18 * GB,
    min: "42:05",
    sms: 100,
  },
  {
    date: "2026-03-16",
    number: "796",
    amount: 60, // konto utraciło waność / traci ważność dziś / traci ważność za 5 dni
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
  },
  {
    date: "2026-03-16",
    number: "102",
    roaming: 10.3 * GB,
    net: 150 * GB,
  },

  {
    date: "2026-03-10",
    number: "183",
    amount: 9.95, // ważne do 18 marca 2027
    net: 2.01 * GB,
    roaming: 3.09 * GB,
    min: "27:36",
    sms: 75,
  },
  {
    date: "2026-03-10",
    number: "938",
    amount: 1.08, // ważne do 14 marca 2027
    net: 1.44 * GB,
    roaming: 1.71 * GB,
    min: 162, //
    sms: 137,
  },
  {
    date: "2026-03-10",
    number: "379",
    // amount: 27.61, // ważne do 6 marca 2027
    amount: 2.61, // ważne do 24 marca 2027
    net: 10.67 * GB,
    roaming: 8.59 * GB,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2026-03-10",
    number: "818",
    amount: 0.97, // ważne do 31 marca 2027
    net: 1.68 * GB, //
    roaming: 9.62 * GB,
    min: 256,
    sms: 141,
  },
  {
    date: "2026-03-10",
    number: "828",
    amount: 4.69, // ważne do 6 marca 2027
    net: 2.18 * GB, //
    roaming: 6.18 * GB,
    min: "44:09",
    sms: 105,
  },
  {
    date: "2026-03-10",
    number: "796",
    amount: 60, // traci ważność dziś / traci ważność za 5 dni
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
    operations: [{ amount: 5 }],
  },
  {
    date: "2026-03-10",
    number: "102",
    roaming: 10.3 * GB,
    net: 150 * GB,
  },

  {
    date: "2026-03-05",
    number: "183",
    // amount: 4.95,
    amount: 9.95, // ważne do 18 marca 2027
    net: 2.14 * GB,
    roaming: 6.18 * GB,
    min: "38:49",
    sms: 79,
    operations: [{ amount: 5 }],
  },
  {
    date: "2026-03-05",
    number: "938",
    // amount: 11.08,
    // amount: 16.08, // ważne do 6 marca 2027
    amount: 1.08, // ważne do 14 marca 2027
    net: 1.47 * GB,
    roaming: 1.71 * GB,
    // min: "62:16",
    min: 162, //
    sms: 141,
    operations: [
      {
        amount: -15,
        min: 100, // 100 min do innych sieci i na numery stacjonarne
      },
      { amount: 5 },
    ],
  },
  {
    date: "2026-03-05",
    number: "379",
    // amount: 2.61,
    amount: 27.61, // ważne do 6 marca 2027
    net: 4.24 * GB,
    roaming: 8.59 * GB,
    min: "1:22",
    sms: 130,
    operations: [{ amount: 25 }],
  },
  {
    date: "2026-03-05",
    number: "818",
    amount: 0.97, // ważne do 31 marca 2027
    net: 1.88 * GB, //
    roaming: 12.72 * GB,
    min: 256,
    sms: 141,
  },
  {
    date: "2026-03-05",
    number: "828",
    // amount: 3.69,
    // amount: 13.69, // ważne do 6 marca 2027
    amount: 4.69, // ważne do 6 marca 2027
    // net: 400 * MB,
    net: 2.39 * GB, //
    roaming: 9.28 * GB,
    min: "46:36",
    sms: 108,
    operations: [
      {
        amount: -9,
        net: "2GB", // Pakiet 2 GB bez terminu ważności
      },
      { amount: 10 },
    ],
  },
  {
    date: "2026-03-05",
    number: "796",
    // amount: 55, // konto utraciło ważność / traci ważność dziś
    amount: 60, // traci ważność za 5 dni
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
    operations: [{ amount: 5 }],
  },
  {
    date: "2026-03-05",
    number: "102",
    roaming: 10.3 * GB,
    net: 150 * GB,
  },

  {
    date: "2026-03-03",
    number: "818",
    // amount: 0,
    // amount: 5, // ważne do 31 marca 2027
    // amount: 4.99, // ważne do 31 marca 2027
    // amount: 9.98, // ważne do 31 marca 2027
    amount: 0.97, // ważne do 31 marca 2027
    // net: 0 * MB,
    net: 2 * GB, //
    roaming: 9.62 * GB,
    min: 256,
    sms: 141,
    operations: [
      {
        amount: -9,
        net: "2GB", // Pakiet 2 GB bez terminu ważności
      },
      { amount: 5 },
      { amount: 5 },
    ],
  },
  {
    date: "2026-03-01",
    number: "183",
    amount: 4.95,
    net: 2.2 * GB,
    roaming: 6.18 * GB,
    min: "42:29",
    sms: 80,
  },
  {
    date: "2026-03-01",
    number: "938",
    amount: 11.08,
    net: 1.48 * GB,
    roaming: 1.71 * GB,
    min: "62:16",
    sms: 143,
  },
  {
    date: "2026-03-01",
    number: "379",
    amount: 2.61,
    net: 5.33 * GB,
    roaming: 8.59 * GB,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2026-03-01",
    number: "818",
    amount: 0,
    net: 859 * MB,
    roaming: 9.62 * GB,
    min: 256,
    sms: 141,
  },
  {
    date: "2026-03-01",
    number: "828",
    amount: 3.69,
    net: 769 * MB,
    roaming: 6.18 * GB,
    min: "61:07",
    sms: 109,
  },
  {
    date: "2026-03-01",
    number: "796",
    amount: 55, // konto utraciło ważność / traci ważność dziś
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
  },
  {
    date: "2026-03-01",
    number: "102",
    roaming: 10.3 * GB,
    net: 150 * GB,
  },

  {
    date: "2026-02-25",
    number: "183",
    amount: 4.95, //
    net: 2.28 * GB, //
    roaming: 6.18 * GB,
    min: "42:52",
    sms: 82,
  },
  {
    date: "2026-02-25",
    number: "938",
    amount: 11.08, //
    net: 1.49 * GB,
    roaming: 1.71 * GB,
    min: "62:16",
    sms: 143,
  },
  {
    date: "2026-02-25",
    number: "379",
    amount: 2.61, //
    net: 5.43 * GB,
    roaming: 8.59 * GB,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2026-02-25",
    number: "818",
    amount: 0, //
    net: 1010 * MB, //
    roaming: 9.62 * GB,
    min: 256,
    sms: 141,
  },
  {
    date: "2026-02-25",
    number: "828",
    amount: 3.69, //
    net: 983 * MB,
    roaming: 6.18 * GB,
    min: "61:41",
    sms: 109, //
  },
  {
    date: "2026-02-25",
    number: "796",
    amount: 55, // konto utraciło ważność / traci ważność dziś
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
  },
  {
    date: "2026-02-25",
    number: "102",
    roaming: 10.3 * GB,
    net: 150 * GB,
  },

  {
    date: "2026-02-20",
    number: "183",
    amount: 4.95, //
    net: 2.39 * GB, //
    roaming: 6.18 * GB,
    min: "45:17",
    sms: 84,
  },
  {
    date: "2026-02-20",
    number: "938",
    amount: 11.08, //
    net: 1.51 * GB,
    roaming: 1.71 * GB,
    min: "78:56",
    sms: 143,
  },
  {
    date: "2026-02-20",
    number: "379",
    amount: 2.61, //
    net: 6.79 * GB,
    roaming: 8.59 * GB,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2026-02-20",
    number: "818",
    amount: 0, //
    net: 1.26 * GB, //
    roaming: 9.62 * GB,
    min: 256,
    sms: 141,
  },
  {
    date: "2026-02-20",
    number: "828",
    amount: 3.69, //
    net: 1.21 * GB,
    roaming: 6.18 * GB,
    min: "61:41",
    sms: 109, //
  },
  {
    date: "2026-02-20",
    number: "796",
    amount: 55, // konto utraciło ważność / traci ważność dziś
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
  },
  {
    date: "2026-02-20",
    number: "102",
    roaming: 10.3 * GB,
    net: 150 * GB,
  },

  {
    date: "2026-02-15",
    number: "183",
    amount: 4.95, //
    net: 2.46 * GB, //
    roaming: 6.18 * GB,
    min: "45:17",
    sms: 84,
  },
  {
    date: "2026-02-15",
    number: "938",
    amount: 11.08, //
    net: 1.53 * GB,
    roaming: 1.71 * GB,
    min: "78:56",
    sms: 143,
  },
  {
    date: "2026-02-15",
    number: "379",
    amount: 2.61, //
    net: 8.18 * GB,
    roaming: 8.59 * GB,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2026-02-15",
    number: "818",
    amount: 0, //
    net: 1.3 * GB, //
    roaming: 9.62 * GB,
    min: 256,
    sms: 141,
  },
  {
    date: "2026-02-15",
    number: "828",
    amount: 3.69, //
    net: 1.48 * GB,
    roaming: 6.18 * GB,
    min: "63:25",
    sms: 109, //
  },
  {
    date: "2026-02-15",
    number: "796",
    amount: 55, // konto utraciło ważność / traci ważność dziś
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
  },
  {
    date: "2026-02-15",
    number: "102",
    roaming: 10.3 * GB,
    net: 150 * GB,
  },

  {
    date: "2026-02-10",
    number: "183",
    amount: 4.95, //
    net: 2.54 * GB, //
    roaming: 6.18 * GB,
    min: "45:17",
    sms: 84,
  },
  {
    date: "2026-02-10",
    number: "938",
    amount: 11.08, //
    net: 1.57 * GB,
    roaming: 1.71 * GB,
    min: "79:43",
    sms: 143,
  },
  {
    date: "2026-02-10",
    number: "379",
    amount: 2.61, //
    net: 10.51 * GB,
    roaming: 8.59 * GB,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2026-02-10",
    number: "818",
    amount: 0, //
    net: 1.38 * GB, //
    roaming: 9.62 * GB,
    min: 256,
    sms: 141,
  },
  {
    date: "2026-02-10",
    number: "828",
    amount: 3.69, //
    net: 1.74 * GB,
    roaming: 6.18 * GB,
    min: "65:01",
    sms: 115, //
  },
  {
    date: "2026-02-10",
    number: "796",
    amount: 55, // traci ważność dziś
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
  },
  {
    date: "2026-02-10",
    number: "102",
    roaming: 10.3 * GB,
    net: 150 * GB,
  },

  {
    date: "2026-02-05",
    number: "183",
    // amount: 3.95,
    // amount: 13.95, //
    amount: 4.95, //
    // net: 1.08 * GB,
    net: 3.09 * GB, //
    // roaming: 3.09 * GB,
    roaming: 6.18 * GB,
    min: "45:17",
    sms: 84,
    operations: [
      {
        amount: -9,
        net: "2GB", // Pakiet 2 GB bez terminu ważności
      },
      { amount: 10 },
    ],
  },
  {
    date: "2026-02-05",
    number: "938",
    // amount: 6.08,
    amount: 11.08, //
    net: 1.65 * GB,
    roaming: 1.71 * GB,
    min: "79:43",
    sms: 146,
    operations: [{ amount: 5 }],
  },
  {
    date: "2026-02-05",
    number: "379",
    // amount: 2.61,
    amount: 27.61, //
    net: 4.47 * GB,
    roaming: 8.59 * GB,
    min: "1:22",
    sms: 130,
    operations: [{ amount: 25 }],
  },
  {
    date: "2026-02-05",
    number: "818",
    // amount: 0,
    // amount: 5, //
    amount: 0, //
    // net: 604,
    net: 1.58 * GB, //
    // roaming: 7.9 * GB,
    roaming: 9.62 * GB,
    min: 256,
    sms: 141,
    operations: [
      {
        amount: -5,
        net: "1GB", // Pakiet 1 GB bez terminu ważności
      },
      { amount: 5 },
    ],
  },
  {
    date: "2026-02-05",
    number: "828",
    // amount: 3.69,
    // amount: 8.69, //
    amount: 3.69, //
    net: 1.96 * GB,
    roaming: 6.18 * GB,
    min: "65:01",
    // sms: 20,
    sms: 120, //
    operations: [
      {
        amount: -5,
        sms: 100, // 100 SMS-ów do innych sieci
      },
      { amount: 5 },
    ],
  },
  {
    date: "2026-02-05",
    number: "796",
    // amount: 50, // konto utraciło ważność
    amount: 55, // traci ważność za 5 dni
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
    operations: [{ amount: 5 }],
  },
  {
    date: "2026-02-05",
    number: "102",
    roaming: 10.3 * GB,
    net: 150 * GB,
  },

  {
    date: "2026-02-01",
    number: "183",
    amount: 3.95,
    net: 3.5 * GB,
    roaming: 9.62 * GB,
    min: "47:57",
    sms: 84,
  },
  {
    date: "2026-02-01",
    number: "938",
    amount: 6.08,
    net: 1.66 * GB,
    roaming: 1.71 * GB,
    min: "80:50",
    sms: 146,
  },
  {
    date: "2026-02-01",
    number: "379",
    amount: 2.61,
    net: 5.35 * GB,
    roaming: 8.59 * GB,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2026-02-01",
    number: "818",
    amount: 0,
    net: 1003,
    roaming: 7.9 * GB,
    min: 256,
    sms: 141,
  },
  {
    date: "2026-02-01",
    number: "828",
    amount: 3.69,
    net: 2.25 * GB,
    roaming: 6.18 * GB,
    min: "67:51",
    sms: 31,
  },
  {
    date: "2026-02-01",
    number: "796",
    amount: 50, // konto utraciło ważność
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
  },
  {
    date: "2026-02-01",
    number: "102",
    roaming: 10.3 * GB,
    net: 150 * GB,
  },

  {
    date: "2026-01-30",
    number: "183",
    amount: 3.95, //
    net: 3.8 * GB, //
    roaming: 9.24 * GB,
    min: "47:57",
    sms: 84,
  },
  {
    date: "2026-01-30",
    number: "938",
    amount: 6.08,
    net: 1.66 * GB, //
    roaming: 1.71 * GB,
    min: "80:50",
    sms: 146,
  },
  {
    date: "2026-01-30",
    number: "379",
    amount: 2.61, //
    net: 5.78 * GB,
    roaming: 7.8 * GB,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2026-01-30",
    number: "818",
    amount: 0, //
    net: 1009, //
    roaming: 7.88 * GB,
    min: 256,
    sms: 141,
  },
  {
    date: "2026-01-30",
    number: "828",
    amount: 3.69, //
    net: 2.29 * GB, //
    roaming: 6.18 * GB,
    min: "67:51",
    sms: 31,
  },
  {
    date: "2026-01-30",
    number: "796",
    amount: 50, // konto utraciło ważność
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
  },
  {
    date: "2026-01-30",
    number: "102",
    roaming: 10.3 * GB,
    net: 150.09 * GB,
  },

  {
    date: "2026-01-25",
    number: "183",
    amount: 3.95, //
    net: 4.09 * GB, //
    roaming: 9.24 * GB,
    min: "47:57",
    sms: 86,
  },
  {
    date: "2026-01-25",
    number: "938",
    amount: 6.08,
    net: 1.68 * GB, //
    roaming: 1.71 * GB,
    min: "99:25",
    sms: 146,
  },
  {
    date: "2026-01-25",
    number: "379",
    amount: 2.61, //
    net: 7.29 * GB,
    roaming: 7.8 * GB,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2026-01-25",
    number: "818",
    amount: 0, //
    net: 1011, //
    roaming: 7.89 * GB,
    min: 256,
    sms: 141,
  },
  {
    date: "2026-01-25",
    number: "828",
    amount: 3.69, //
    net: 2.31 * GB, //
    roaming: 8.87 * GB,
    min: "67:51",
    sms: 31,
  },
  {
    date: "2026-01-25",
    number: "796",
    amount: 50, // konto utraciło ważność
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
  },
  {
    date: "2026-01-25",
    number: "102",
    roaming: 10.3 * GB,
    net: 150.09 * GB,
  },

  {
    date: "2026-01-22",
    number: "183",
    amount: 3.95, //
    net: 4.09 * GB, //
    roaming: 9.3 * GB,
    min: "56:48",
    sms: 86,
  },
  {
    date: "2026-01-22",
    number: "938",
    amount: 6.08,
    net: 1.69 * GB, //
    roaming: 1.71 * GB,
    min: "99:25",
    sms: 146,
  },
  {
    date: "2026-01-22",
    number: "379",
    amount: 2.61, //
    net: 8.26 * GB,
    roaming: 7.84 * GB,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2026-01-22",
    number: "818",
    amount: 0, //
    net: 1020, //
    roaming: 7.89 * GB,
    min: 256,
    sms: 141,
  },
  {
    date: "2026-01-22",
    number: "828",
    amount: 3.69, //
    net: 2.52 * GB, //
    roaming: 8.99 * GB,
    min: "68:51",
    sms: 34,
  },
  {
    date: "2026-01-22",
    number: "796",
    amount: 50, // konto utraciło ważność
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
  },
  {
    date: "2026-01-22",
    number: "102",
    roaming: 10.3 * GB,
    net: 150.09 * GB,
  },

  {
    date: "2026-01-16",
    number: "183",
    amount: 3.95, //
    net: 4.56 * GB, //
    roaming: 9.62 * GB,
    min: "56:49",
    sms: 92,
  },
  {
    date: "2026-01-16",
    number: "938",
    amount: 6.08,
    net: 1.71 * GB, //
    roaming: 0,
    min: "99:25",
    sms: 146,
  },
  {
    date: "2026-01-16",
    number: "379",
    amount: 2.61, //
    net: 9.56 * GB,
    roaming: 8.59 * GB,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2026-01-16",
    number: "818",
    // amount: 0, //
    // amount: 5, //
    amount: 0, //
    // net: 23 * MB, //
    net: 1.02 * GB, //
    roaming: 6.18 * GB,
    min: 256,
    sms: 141,
    operations: [
      {
        amount: -5,
        net: "1GB", // Pakiet 1 GB bez terminu ważności
      },
      { amount: 5 },
    ],
  },
  {
    date: "2026-01-16",
    number: "828",
    amount: 3.69, //
    net: 2.83 * GB, //
    roaming: 9.28 * GB,
    min: "84:04",
    sms: 40,
    operations: [
      {
        amount: -9,
        net: "2GB", // Pakiet 2 GB bez terminu ważności
      },
      { amount: 5 },
    ],
  },
  {
    date: "2026-01-16",
    number: "796",
    amount: 50, // konto utraciło ważność
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
  },
  {
    date: "2026-01-16",
    number: "102",
    roaming: 10.3 * GB,
    net: 150.16 * GB,
  },

  {
    date: "2026-01-10",
    number: "183",
    amount: 3.95, //
    net: 4.83 * GB, //
    roaming: 9.62 * GB,
    min: "57:50",
    sms: 92,
  },
  {
    date: "2026-01-10",
    number: "938",
    amount: 6.08,
    net: 1.76 * GB, //
    roaming: 0,
    min: "99:25",
    sms: 146,
  },
  {
    date: "2026-01-10",
    number: "379",
    // amount: 27.61, //
    amount: 2.61, //
    net: 10.82 * GB,
    roaming: 8.59 * GB,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2026-01-10",
    number: "818",
    // amount: 8.11, //
    // amount: 0.27, //
    // amount: 10.27, //
    amount: 1.27, //
    // net: 0,
    net: 2 * GB, //
    roaming: 6.18 * GB,
    min: 256,
    sms: 141,
    operations: [
      {
        amount: -9,
        net: "2GB", // Pakiet 2 GB bez terminu ważności
      },
      { amount: 10 },
    ],
  },
  {
    date: "2026-01-10",
    number: "828",
    // amount: 7.69, //
    // amount: 12.69, //
    amount: 3.69, //
    // net: 1.1 * GB,
    net: 3.1 * GB, //
    roaming: 6.18 * GB,
    min: "87:18",
    sms: 56,
    operations: [
      {
        amount: -9,
        net: "2GB", // Pakiet 2 GB bez terminu ważności
      },
      { amount: 5 },
    ],
  },
  {
    date: "2026-01-10",
    number: "796",
    amount: 50, // traci ważność dziś
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
  },
  {
    date: "2026-01-10",
    number: "102",
    net: 150.29 * GB,
    roaming: 10.3 * GB,
  },

  {
    date: "2026-01-05",
    number: "183",
    // amount: 3.95,
    // amount: 13.95, //
    amount: 3.95, //
    // net: 1.09 * GB,
    net: 5.09 * GB, //
    roaming: 6.18 * GB,
    min: "59:38",
    sms: 92,
    operations: [
      {
        amount: -10,
        net: "4GB", // Pakiet 4 GB na 30 dni
      },
      { amount: 10 },
    ],
  },
  {
    date: "2026-01-05",
    number: "938",
    // amount: 11.08,
    amount: 6.08,
    // net: 797,
    net: 1.77 * GB, //
    roaming: 0,
    min: 104,
    sms: 161,
    operations: [
      {
        amount: -5,
        net: "1GB",
      },
    ],
  },
  {
    date: "2026-01-05",
    number: "379",
    // amount: 2.61,
    amount: 27.61, //
    net: 7.32 * GB,
    roaming: 10.31 * GB,
    min: "1:22",
    sms: 130,
    operations: [{ amount: 25 }],
  },
  {
    date: "2026-01-05",
    number: "818",
    // amount: 3.11,
    amount: 8.11, //
    net: 2.45 * GB,
    roaming: 3.09 * GB,
    min: 256,
    sms: 141,
    operations: [{ amount: 5 }],
  },
  {
    date: "2026-01-05",
    number: "828",
    // amount: 2.69,
    amount: 7.69, //
    net: 1.29 * GB,
    roaming: 6.18 * GB,
    min: "87:18",
    sms: 59,
    operations: [{ amount: 5 }],
  },
  {
    date: "2026-01-05",
    number: "796",
    // amount: 45, // konto utraciło ważność
    amount: 50, // traci ważność za 5 dni
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
    operations: [{ amount: 5 }],
  },
  {
    date: "2026-01-05",
    number: "102",
    net: 150.41 * GB,
    roaming: 10.3 * GB,
  },

  {
    date: "2026-01-01",
    number: "183",
    amount: 3.95,
    net: 1.35 * GB,
    roaming: 6.18 * GB,
    min: "60:51",
    sms: 92,
  },
  {
    date: "2026-01-01",
    number: "938",
    amount: 11.08,
    net: 833,
    roaming: 0,
    min: 107,
    sms: 163,
  },
  {
    date: "2026-01-01",
    number: "379",
    amount: 2.61,
    net: 7.46 * GB,
    roaming: 10.31 * GB,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2026-01-01",
    number: "818",
    amount: 3.11,
    net: 2.49 * GB,
    roaming: 4.81 * GB,
    min: 256,
    sms: 141,
  },
  {
    date: "2026-01-01",
    number: "828",
    amount: 3.48,
    net: 1.37 * GB,
    roaming: 6.18 * GB,
    min: "94:45",
    sms: 62,
  },
  {
    date: "2026-01-01",
    number: "796",
    amount: 45, // konto utraciło ważność
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
  },
  {
    date: "2026-01-01",
    number: "102",
    net: 150.47 * GB,
    roaming: 10.3 * GB,
  },
];
