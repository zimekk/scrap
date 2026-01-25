// yyyy-mm-19 183
// yyyy-mm-15 938
// yyyy-mm-25 379
// yyyy-mm-01 818
// yyyy-mm-01 828
// yyyy-mm-01 102

const MB = 1;
const GB = 1_000 * MB;

export const operations = [
  { date: "2025-09-25", number: "183", amount: -9, net: "2GB" },
  { date: "2025-09-25", number: "796", amount: 10 },

  { date: "2025-09-20", number: "828", amount: -10, net: "2GB" },
  { date: "2025-09-20", number: "828", amount: 10 },
  { date: "2025-09-20", number: "796", amount: -5, net: "1GB" },
  { date: "2025-09-20", number: "796", amount: 5 },

  { date: "2025-09-05", number: "183", amount: 10 },
  { date: "2025-09-05", number: "938", amount: 5 },
  { date: "2025-09-05", number: "379", amount: 25 },
  { date: "2025-09-05", number: "818", amount: -5, net: "1GB" },
  { date: "2025-09-05", number: "828", amount: -5, net: "1GB" },
  { date: "2025-09-05", number: "828", amount: -5, sms: 100 },
  { date: "2025-09-05", number: "828", amount: 10 },

  { date: "2025-08-23", number: "183", amount: -10, net: "4GB" },

  { date: "2025-08-05", number: "183", amount: 10 },
  { date: "2025-08-05", number: "938", amount: 5 },
  { date: "2025-08-05", number: "379", amount: 25 },
  { date: "2025-08-05", number: "818", amount: -5, net: "1GB" },
  { date: "2025-08-05", number: "828", amount: -10, net: "4GB" },
  { date: "2025-08-05", number: "828", amount: 10 },
  { date: "2025-08-05", number: "828", amount: -5, sms: 100 },
  { date: "2025-08-05", number: "828", amount: 5 },

  { date: "2025-07-25", number: "379", amount: 5 },

  { date: "2025-07-15", number: "183", amount: -9, net: "2GB" },
  { date: "2025-07-15", number: "183", amount: 5 },

  { date: "2025-07-05", number: "183", amount: -15, min: 100 },
  { date: "2025-07-05", number: "183", amount: 15 },
  { date: "2025-07-05", number: "938", amount: -5, sms: 100 },
  { date: "2025-07-05", number: "379", amount: 25 },
  { date: "2025-07-05", number: "818", amount: 5 },
  { date: "2025-07-05", number: "828", amount: -10, net: "4GB" },
  { date: "2025-07-05", number: "828", amount: 10 },

  { date: "2025-06-10", number: "183", amount: -10, net: "4GB" },

  { date: "2025-06-05", number: "183", amount: 10 },
  { date: "2025-06-05", number: "938", amount: 5 },
  { date: "2025-06-05", number: "379", amount: 25 },
  { date: "2025-06-05", number: "818", amount: 5 },
  { date: "2025-06-05", number: "828", amount: -5, sms: 100 },
  { date: "2025-06-05", number: "828", amount: -10, net: "4GB" },
  { date: "2025-06-05", number: "828", amount: 15 },

  { date: "2025-05-10", number: "183", amount: -9, net: "2GB" },

  { date: "2025-05-05", number: "183", amount: 10 },
  { date: "2025-05-05", number: "938", amount: 5 },
  { date: "2025-05-05", number: "379", amount: 25 },
  { date: "2025-05-05", number: "818", amount: 5 },
  { date: "2025-05-05", number: "828", amount: 15 },
  { date: "2025-05-05", number: "828", amount: -15, min: 100 },

  { date: "2025-04-30", number: "828", amount: 10 },

  { date: "2025-04-18", number: "183", amount: -5, net: "1GB" },

  { date: "2025-04-10", number: "828", amount: 5 },
  { date: "2025-04-10", number: "828", amount: -5, net: "1GB" },

  { date: "2025-04-05", number: "938", amount: -5, net: "1GB" },
  { date: "2025-04-05", number: "379", amount: 25 },
  { date: "2025-04-05", number: "818", amount: -5, net: "1GB" },

  { date: "2025-04-01", number: "183", amount: 5 },
  { date: "2025-04-01", number: "828", amount: 5 },
  { date: "2025-04-01", number: "828", amount: -5, sms: 100 },

  { date: "2025-03-15", number: "183", amount: -5, net: "1GB" },

  { date: "2025-03-05", number: "938", amount: 5 },
  { date: "2025-03-05", number: "379", amount: 25 },
  { date: "2025-03-05", number: "818", amount: -5, net: "1GB" },
  { date: "2025-03-05", number: "828", amount: 10 },
  { date: "2025-03-05", number: "828", amount: -9, net: "2GB" },

  { date: "2025-02-05", number: "183", amount: 10 },
  { date: "2025-02-05", number: "818", amount: 5 },
  { date: "2025-02-05", number: "828", amount: 10 },
  { date: "2025-02-05", number: "828", amount: -9, net: "2GB" },

  { date: "2025-02-01", number: "183", amount: 10 },
  { date: "2025-02-01", number: "183", amount: -5, sms: 100 },
  { date: "2025-02-01", number: "938", amount: -15, min: 100 },
  { date: "2025-02-01", number: "379", amount: 25 },
  // { date: "2025-02-01", number: "828", amount: -15, min: 100 },

  { date: "2025-01-05", number: "183", amount: -10, net: "4GB" },
  { date: "2025-01-05", number: "818", amount: 5 },
  { date: "2025-01-05", number: "828", amount: 10 },
  { date: "2025-01-05", number: "828", amount: -9, net: "2GB" },

  { date: "2025-01-01", number: "183", amount: 10 },
  { date: "2025-01-01", number: "938", amount: 5 },
  { date: "2025-01-01", number: "379", amount: 25 },

  { date: "2024-12-05", number: "183", amount: -10, net: "4GB" },

  { date: "2024-12-01", number: "183", amount: 10 },
  { date: "2024-12-01", number: "938", amount: 5 },
  { date: "2024-12-01", number: "379", amount: 20 },
  { date: "2024-12-01", number: "818", amount: -9, net: "2GB" },
  { date: "2024-12-01", number: "828", amount: 5 },
  { date: "2024-12-01", number: "828", amount: -9, net: "2GB" },

  { date: "2024-11-15", number: "183", amount: -9, net: "2GB" },

  { date: "2024-11-12", number: "183", amount: 5 },
  { date: "2024-11-12", number: "379", amount: 5 },

  { date: "2024-11-01", number: "183", amount: 10 },
  { date: "2024-11-01", number: "183", amount: -15, min: 100 },
  { date: "2024-11-01", number: "938", amount: -9, net: "2GB" },
  { date: "2024-11-01", number: "379", amount: 25 },
  { date: "2024-11-01", number: "818", amount: 5 },
  { date: "2024-11-01", number: "828", amount: 5 },

  { date: "2024-10-05", number: "183", amount: 10 },
  { date: "2024-10-05", number: "938", amount: 5 },
  { date: "2024-10-05", number: "379", amount: 23 },
  { date: "2024-10-05", number: "818", amount: -5, net: "1GB" },
  { date: "2024-10-05", number: "828", amount: 5 },
  { date: "2024-10-05", number: "828", amount: -9, net: "2GB" },

  { date: "2024-09-25", number: "183", amount: -9, net: "2GB" },
  { date: "2024-09-25", number: "828", amount: -9, net: "2GB" },
  { date: "2024-09-25", number: "828", amount: 10 },

  { date: "2024-09-20", number: "828", amount: 5 },

  { date: "2024-09-05", number: "379", amount: 5 },

  { date: "2024-09-01", number: "183", amount: 10 },
  { date: "2024-09-01", number: "938", amount: 5 },
  { date: "2024-09-01", number: "379", amount: 25 },
  { date: "2024-09-01", number: "818", amount: -5, net: "1GB" },
  { date: "2024-09-01", number: "828", amount: 5 },

  { date: "2024-08-10", number: "183", amount: 5 },
  { date: "2024-08-10", number: "183", amount: -10, net: "4GB" },

  { date: "2024-08-02", number: "379", amount: 5 },
  { date: "2024-08-02", number: "379", amount: -5, net: "1GB" },

  { date: "2024-08-01", number: "183", amount: 10 },
  { date: "2024-08-01", number: "183", amount: -5, sms: 100 },
  { date: "2024-08-01", number: "938", amount: 5 },
  { date: "2024-08-01", number: "379", amount: 25 },
  { date: "2024-08-01", number: "818", amount: 5 },
  { date: "2024-08-01", number: "828", amount: 5 },

  { date: "2024-07-20", number: "379", amount: -5, net: "1GB" },
  { date: "2024-07-20", number: "379", amount: 5 },
  { date: "2024-07-20", number: "828", amount: -5, net: "1GB" },
  { date: "2024-07-20", number: "828", amount: 5 },

  { date: "2024-07-15", number: "828", amount: -5, net: "1GB" },

  { date: "2024-07-01", number: "183", amount: 10 },
  { date: "2024-07-01", number: "183", amount: -10, net: "4GB" },
  { date: "2024-07-01", number: "938", amount: 5 },
  { date: "2024-07-01", number: "938", amount: -5, net: "1GB" },
  { date: "2024-07-01", number: "379", amount: 25 },
  { date: "2024-07-01", number: "818", amount: 5 },
  { date: "2024-07-01", number: "828", amount: 5 },

  { date: "2024-06-25", number: "828", amount: -10, net: "4GB" },
  { date: "2024-06-25", number: "828", amount: 10 },

  { date: "2024-06-10", number: "183", amount: -15, min: 100 },
  { date: "2024-06-10", number: "183", amount: 10 },

  { date: "2024-06-01", number: "183", amount: -9, net: "2GB" },
  { date: "2024-06-01", number: "938", amount: 5 },
  { date: "2024-06-01", number: "379", amount: 25 },
  { date: "2024-06-01", number: "818", amount: 5 },

  { date: "2024-05-01", number: "183", amount: 10 },
  { date: "2024-05-01", number: "379", amount: 25 },
  { date: "2024-05-01", number: "828", amount: 10 },

  { date: "2024-04-10", number: "183", amount: -9, net: "2GB" },
  { date: "2024-04-10", number: "828", amount: -9, net: "2GB" },

  { date: "2024-04-01", number: "183", amount: 10 },
  { date: "2024-04-01", number: "938", amount: 5 },
  { date: "2024-04-01", number: "379", amount: 25 },
  { date: "2024-04-01", number: "818", amount: 5 },
  { date: "2024-04-01", number: "828", amount: 10 },

  { date: "2024-03-30", number: "828", amount: -5, net: "1GB" },

  { date: "2024-03-10", number: "183", amount: -9, net: "2GB" },

  { date: "2024-03-01", number: "183", amount: 10 },
  { date: "2024-03-01", number: "938", amount: 5 },
  { date: "2024-03-01", number: "379", amount: 25 },
  { date: "2024-03-01", number: "818", amount: -5, net: "1GB" },
  { date: "2024-03-01", number: "828", amount: 5 },

  { date: "2024-02-15", number: "183", amount: -5, net: "1GB" },
  { date: "2024-02-15", number: "828", amount: -5, net: "1GB" },

  { date: "2024-02-01", number: "183", amount: 10 },
  { date: "2024-02-01", number: "938", amount: 5 },
  { date: "2024-02-01", number: "379", amount: 25 },
  { date: "2024-02-01", number: "818", amount: 5 },
  { date: "2024-02-01", number: "828", amount: 5 },

  { date: "2024-01-15", number: "828", amount: -5, net: "1GB" },
  { date: "2024-01-15", number: "828", amount: 5 },

  { date: "2024-01-02", number: "183", amount: 10 },
  { date: "2024-01-02", number: "938", amount: -5, net: "1GB" },
  { date: "2024-01-02", number: "379", amount: 25 },
  { date: "2024-01-02", number: "818", amount: -5, net: "1GB" },
  { date: "2024-01-02", number: "828", amount: -15, min: 100 },
  { date: "2024-01-02", number: "828", amount: 10 },

  { date: "2023-12-26", number: "183", amount: -10, net: "4GB" },

  { date: "2023-12-01", number: "183", amount: 10 },
  { date: "2023-12-01", number: "938", amount: 5 },
  { date: "2023-12-01", number: "379", amount: 25 },
  { date: "2023-12-01", number: "818", amount: 5 },
  { date: "2023-12-01", number: "828", amount: 5 },

  { date: "2023-11-25", number: "828", amount: -9, net: "2GB" },
  { date: "2023-11-25", number: "828", amount: 5 },

  { date: "2023-11-15", number: "183", amount: -9, net: "2GB" },

  { date: "2023-11-01", number: "183", amount: 10 },
  { date: "2023-11-01", number: "938", amount: -15, min: 100 },
  { date: "2023-11-01", number: "379", amount: 25 },
  { date: "2023-11-01", number: "818", amount: 5 },
  { date: "2023-11-01", number: "828", amount: 5 },

  { date: "2023-10-15", number: "828", amount: -5, net: "1GB" },

  { date: "2023-10-10", number: "183", amount: -9, net: "2GB" },
  { date: "2023-10-10", number: "183", amount: 10 },

  { date: "2023-10-07", number: "828", amount: -0.01, net: 0.39 }, // 390 kB

  { date: "2023-10-01", number: "183", amount: -15, min: 100 },
  { date: "2023-10-01", number: "183", amount: 10 },
  { date: "2023-10-01", number: "938", amount: 5 },
  { date: "2023-10-01", number: "379", amount: 25 },
  { date: "2023-10-01", number: "818", amount: -9, net: "2GB" },
  { date: "2023-10-01", number: "828", amount: 5 },

  { date: "2023-09-30", number: "183", amount: -5, net: "1GB" },

  { date: "2023-09-11", number: "818", amount: -4 * 0.59, mms: 4 },

  { date: "2023-09-01", number: "183", amount: -5, net: "1GB" },
  { date: "2023-09-01", number: "183", amount: 10 },
  // { date: "2023-09-01", number: "938", amount: -5, sms: 100 },
  { date: "2023-09-01", number: "938", amount: 5 },
  { date: "2023-09-01", number: "379", amount: 25 },
  // { date: "2023-09-01", number: "818", amount: -5, net: "1GB" },
  { date: "2023-09-01", number: "818", amount: 5 },
  { date: "2023-09-01", number: "828", amount: -9, net: "2GB" },
  { date: "2023-09-01", number: "828", amount: 10 },

  { date: "2023-08-01", number: "183", amount: -10, net: "4GB" },
  { date: "2023-08-01", number: "183", amount: 10 },
  { date: "2023-08-01", number: "938", amount: -5, sms: 100 },
  // { date: "2023-08-01", number: "938", amount: 5 },
  { date: "2023-08-01", number: "379", amount: 25 },
  { date: "2023-08-01", number: "818", amount: -5, net: "1GB" },
  // { date: "2023-08-01", number: "818", amount: 5 },
  { date: "2023-08-01", number: "828", amount: -10, net: "4GB" },
  { date: "2023-08-01", number: "828", amount: 10 },

  { date: "2023-07-20", number: "828", amount: -5, net: "1GB" },
  { date: "2023-07-20", number: "828", amount: 5 },

  { date: "2023-07-15", number: "183", amount: 10 },

  { date: "2023-07-10", number: "183", amount: -5, net: "1GB" },

  { date: "2023-07-05", number: "828", amount: -5, sms: 100 },

  { date: "2023-07-01", number: "183", amount: 5 },
  { date: "2023-07-01", number: "938", amount: 5 },
  { date: "2023-07-01", number: "379", amount: 25 },
  { date: "2023-07-01", number: "818", amount: 5 },
  { date: "2023-07-01", number: "828", amount: 5 },

  { date: "2023-06-26", number: "828", amount: -5, sms: 100 },
  { date: "2023-06-26", number: "828", amount: 5 },

  { date: "2023-06-15", number: "828", amount: -9, net: "2GB" },
  { date: "2023-06-15", number: "828", amount: 5 },

  { date: "2023-06-02", number: "183", amount: -9, net: "2GB" },
  { date: "2023-06-02", number: "183", amount: -5, sms: 100 },
  { date: "2023-06-02", number: "183", amount: 5 },
  { date: "2023-06-02", number: "938", amount: 5 },
  { date: "2023-06-02", number: "379", amount: 25 },
  { date: "2023-06-02", number: "818", amount: -5, sms: 100 },
  { date: "2023-06-02", number: "828", amount: -5, sms: 100 },
  { date: "2023-06-02", number: "828", amount: 5 },

  { date: "2023-05-01", number: "183", amount: 5 },
  { date: "2023-05-01", number: "938", amount: -15, min: 100 },
  { date: "2023-05-01", number: "938", amount: 5 },
  { date: "2023-05-01", number: "379", amount: 25 },
  { date: "2023-05-01", number: "818", amount: 5 },
  { date: "2023-05-01", number: "828", amount: 5 },

  { date: "2023-04-19", number: "183", amount: -9, net: "2GB" },
  { date: "2023-04-19", number: "183", amount: 10 },
  { date: "2023-04-19", number: "828", amount: -5, net: "1GB" },

  {
    date: "2023-04-10",
    number: "379",
    amount: -25,
    net: 10_000,
    package: "SOLO M (10 GB)",
  },

  { date: "2023-04-01", number: "183", amount: -15, min: 100 },
  { date: "2023-04-01", number: "183", amount: -5, net: "1GB" },
  { date: "2023-04-01", number: "183", amount: 15 },
  { date: "2023-04-01", number: "938", amount: 5 },
  { date: "2023-04-01", number: "379", amount: 25 },
  { date: "2023-04-01", number: "818", amount: 5 },
  { date: "2023-04-01", number: "828", amount: 5 },

  {
    date: "2023-03-10",
    number: "379",
    amount: -25,
    net: 10_000,
    package: "SOLO M (10 GB)",
  },

  { date: "2023-03-01", number: "183", amount: 5 },
  { date: "2023-03-01", number: "938", amount: 5 },
  { date: "2023-03-01", number: "379", amount: 25 },
  { date: "2023-03-01", number: "818", amount: -5, net: "1GB" },
  { date: "2023-03-01", number: "828", amount: -5, sms: 100 },
  { date: "2023-03-01", number: "828", amount: 5 },

  { date: "2023-02-19", number: "828", amount: -5, sms: 100 },
  { date: "2023-02-19", number: "828", amount: 5 },

  { date: "2023-02-18", number: "183", amount: -9, net: "2GB" },
  { date: "2023-02-18", number: "183", amount: 5 },

  {
    date: "2023-02-10",
    number: "379",
    amount: -25,
    net: "10GB",
    package: "SOLO M (10 GB)",
  },
  { date: "2023-02-10", number: "379", amount: 25 },

  { date: "2023-02-02", number: "183", amount: -5, net: "1GB" },
  { date: "2023-02-02", number: "183", amount: 5 },
  { date: "2023-02-02", number: "938", amount: -15, min: 100 },
  { date: "2023-02-02", number: "938", amount: 5 },
  { date: "2023-02-02", number: "818", amount: -5, net: "1GB" },
  { date: "2023-02-02", number: "828", amount: -15, min: 100 },
  { date: "2023-02-02", number: "828", amount: 5 },
];

export const balance = [
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
    min: 99.25,
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
    amount: 2.31, //
    net: 2.52 * GB, //
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
    min: 99.25,
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
    min: 99.25,
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
    min: 99.25,
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

  {
    date: "2025-12-30",
    number: "183",
    amount: 3.95, //
    net: 1.42 * GB, //
    roaming: 5.23 * GB,
    min: "60:51",
    sms: 92,
  },
  {
    date: "2025-12-30",
    number: "938",
    amount: 11.08, //
    net: 848,
    roaming: 0,
    min: 107,
    sms: 163,
  },
  {
    date: "2025-12-30",
    number: "379",
    amount: 2.61, //
    net: 7.61 * GB,
    roaming: 8.72 * GB,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-12-30",
    number: "818",
    amount: 3.11, //
    net: 2.59 * GB,
    roaming: 4.07 * GB,
    min: 256,
    sms: 141,
  },
  {
    date: "2025-12-30",
    number: "828",
    amount: 3.48, //
    net: 1.53 * GB, //
    roaming: 5.23 * GB,
    min: "94:45",
    sms: 62,
  },
  {
    date: "2025-12-30",
    number: "796",
    amount: 45, // konto utraciło ważność
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
  },
  {
    date: "2025-12-30",
    number: "102",
    net: 145.04 * GB,
    roaming: 8.71 * GB,
  },

  {
    date: "2025-12-27",
    number: "183",
    amount: 3.95, //
    net: 1.56 * GB, //
    roaming: 5.23 * GB,
    min: "61:02",
    sms: 92,
  },
  {
    date: "2025-12-27",
    number: "938",
    amount: 11.08, //
    net: 854,
    roaming: 0,
    min: 107,
    sms: 163,
  },
  {
    date: "2025-12-27",
    number: "379",
    amount: 2.61, //
    net: 7.68 * GB,
    roaming: 8.72 * GB,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-12-27",
    number: "818",
    amount: 3.11, //
    net: 2.59 * GB,
    roaming: 4.07 * GB,
    min: 256,
    sms: 141,
  },
  {
    date: "2025-12-27",
    number: "828",
    amount: 3.48, //
    net: 1.54 * GB, //
    roaming: 5.23 * GB,
    min: "94:45",
    sms: 85,
  },
  {
    date: "2025-12-27",
    number: "796",
    amount: 45, // konto utraciło ważność
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
  },
  {
    date: "2025-12-27",
    number: "102",
    net: 145.09 * GB,
    roaming: 8.71 * GB,
  },

  {
    date: "2025-12-20",
    number: "183",
    amount: 3.95, //
    net: 2.59 * GB, //
    roaming: 7.85 * GB,
    min: "61:02",
    sms: 92,
  },
  {
    date: "2025-12-20",
    number: "938",
    amount: 11.08, //
    net: 1000,
    roaming: 0,
    min: 111,
    sms: 183,
  },
  {
    date: "2025-12-20",
    number: "379",
    amount: 2.61, //
    net: 8.82 * GB,
    roaming: 8.72 * GB,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-12-20",
    number: "818",
    amount: 3.11, //
    net: 2.7 * GB,
    roaming: 4.07 * GB,
    min: 256,
    sms: 141,
  },
  {
    date: "2025-12-20",
    number: "828",
    amount: 3.48, //
    net: 1.62 * GB, //
    roaming: 7.85 * GB,
    min: "94:45",
    sms: 85,
  },
  {
    date: "2025-12-20",
    number: "796",
    amount: 50, // konto utraciło ważność
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
  },
  {
    date: "2025-12-20",
    number: "102",
    net: 145.46 * GB,
    roaming: 8.71 * GB,
  },

  {
    date: "2025-12-15",
    number: "183",
    amount: 3.95, //
    net: 2.9 * GB, //
    roaming: 7.85 * GB,
    min: "61:02",
    sms: 92,
  },
  {
    date: "2025-12-15",
    number: "938",
    amount: 11.08, //
    net: 1012,
    roaming: 0,
    min: 111,
    sms: 183,
  },
  {
    date: "2025-12-15",
    number: "379",
    amount: 2.61, //
    net: 10.08 * GB,
    roaming: 8.72 * GB,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-12-15",
    number: "818",
    amount: 3.11, //
    net: 3.16 * GB,
    roaming: 4.07 * GB,
    min: 256,
    sms: 141,
  },
  {
    date: "2025-12-15",
    number: "828",
    amount: 3.48, //
    net: 1.91 * GB, //
    roaming: 7.85 * GB,
    min: "96:42",
    sms: 86,
  },
  {
    date: "2025-12-15",
    number: "796",
    amount: 50, // konto utraciło ważność
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
  },
  {
    date: "2025-12-15",
    number: "102",
    net: 145.49 * GB,
    roaming: 8.71 * GB,
  },

  {
    date: "2025-12-10",
    number: "183",
    amount: 3.95, //
    net: 3.08 * GB, //
    roaming: 7.85 * GB,
    min: "61:02",
    sms: 92,
  },
  {
    date: "2025-12-10",
    number: "938",
    amount: 11.08, //
    net: 1 * GB,
    roaming: 0,
    min: 111,
    sms: 183,
  },
  {
    date: "2025-12-10",
    number: "379",
    amount: 2.61, //
    net: 10.74 * GB,
    roaming: 8.72 * GB,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-12-10",
    number: "818",
    amount: 3.11, //
    net: 3.56 * GB,
    roaming: 4.07 * GB,
    min: 256,
    sms: 141,
  },
  {
    date: "2025-12-10",
    number: "828",
    amount: 3.48, //
    net: 2.18 * GB, //
    roaming: 7.85 * GB,
    min: "97:45",
    sms: 88,
  },
  {
    date: "2025-12-10",
    number: "796",
    amount: 50, // konto utraciło ważność
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
  },
  {
    date: "2025-12-10",
    number: "102",
    net: 149.21 * GB,
    roaming: 8.71 * GB,
  },

  {
    date: "2025-12-05",
    number: "183",
    // amount: 2.95,
    // amount: 12.95, //
    amount: 3.95, //
    // net: 1.54 * GB,
    net: 3.54 * GB, //
    roaming: 7.85 * GB,
    min: "61:02",
    sms: 92,
    operations: [
      {
        amount: -9,
        net: "2GB",
      },
      { amount: 10 },
    ],
  },
  {
    date: "2025-12-05",
    number: "938",
    // amount: 6.08,
    amount: 11.08, //
    net: 1.01 * GB,
    roaming: 0,
    min: 111,
    sms: 183,
    operations: [{ amount: 5 }],
  },
  {
    date: "2025-12-05",
    number: "379",
    // amount: 2.61,
    amount: 27.61, //
    net: 5.02 * GB,
    roaming: 8.72 * GB,
    min: "1:22",
    sms: 130,
    operations: [{ amount: 25 }],
  },
  {
    date: "2025-12-05",
    number: "818",
    // amount: 7.11,
    // amount: 12.11, //
    amount: 3.11, //
    net: 3.9 * GB,
    roaming: 2.91 * GB,
    min: 256,
    sms: 141,
    operations: [
      {
        amount: -9,
        net: "2GB",
      },
      { amount: 5 },
    ],
  },
  {
    date: "2025-12-05",
    number: "828",
    // amount: 2.48,
    // amount: 12.48, //
    amount: 3.48, //
    // net: 446 * MB,
    net: 2.43 * GB, //
    roaming: 9.3 * GB,
    min: "97:45",
    sms: 98,
    operations: [
      {
        amount: -9,
        net: "2GB",
      },
      { amount: 10 },
    ],
  },
  {
    date: "2025-12-05",
    number: "796",
    amount: 50, // konto utraciło ważność
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
  },
  {
    date: "2025-12-05",
    number: "102",
    net: 149.37 * GB,
    roaming: 8.71 * GB,
  },

  {
    date: "2025-12-01",
    number: "183",
    amount: 2.95,
    net: 1.81 * GB,
    roaming: 5.23 * GB,
    min: "61:02",
    sms: 92,
  },
  {
    date: "2025-12-01",
    number: "938",
    amount: 6.08,
    net: 1.02 * GB,
    roaming: 0,
    min: 111,
    sms: 183,
  },
  {
    date: "2025-12-01",
    number: "379",
    amount: 2.61,
    net: 5.7 * GB,
    roaming: 8.72 * GB,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-12-01",
    number: "818",
    amount: 7.11,
    net: 2.12 * GB,
    roaming: 2.91 * GB,
    min: 256,
    sms: 141,
  },
  {
    date: "2025-12-01",
    number: "828",
    amount: 2.48,
    net: 693 * MB,
    roaming: 6.68 * GB,
    min: 101,
    sms: 98,
  },
  {
    date: "2025-12-01",
    number: "796",
    amount: 50, // konto utraciło ważność
    net: 0 * GB,
    roaming: 0 * GB,
    min: 10,
    sms: 100,
  },
  {
    date: "2025-12-01",
    number: "102",
    net: 150.47 * GB,
    roaming: 8.71 * GB,
  },

  {
    date: "2025-11-30",
    number: "183",
    amount: 2.95,
    net: 1.87 * GB, //
    roaming: 5.23 * GB,
    min: "62:54",
    sms: 92,
  },
  {
    date: "2025-11-30",
    number: "938",
    amount: 6.08, //
    net: 1.02 * GB,
    roaming: 0,
    min: 111,
    sms: 183,
  },
  {
    date: "2025-11-30",
    number: "379",
    amount: 2.61, //
    net: 6.29 * GB,
    roaming: 8.72 * GB,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-11-30",
    number: "818",
    amount: 7.11, //
    net: 2.26 * GB,
    roaming: 2.91 * GB,
    min: 256,
    sms: 141,
  },
  {
    date: "2025-11-30",
    number: "828",
    amount: 2.48, //
    net: 765 * MB,
    roaming: 6.68 * GB,
    min: 105,
    sms: 104,
  },
  {
    date: "2025-11-30",
    number: "796",
    amount: 50, // konto utraciło ważność
    net: 0 * GB,
    roaming: 1.45 * GB,
    min: 10,
    sms: 100,
  },
  {
    date: "2025-11-30",
    number: "102",
    net: 146.9 * GB,
    roaming: 8.71 * GB,
  },

  {
    date: "2025-11-25",
    number: "183",
    amount: 2.95,
    net: 2.08 * GB, //
    roaming: 5.23 * GB,
    min: "62:54",
    sms: 92,
  },
  {
    date: "2025-11-25",
    number: "938",
    amount: 6.08, //
    net: 1.04 * GB,
    roaming: 0,
    min: 111,
    sms: 183,
  },
  {
    date: "2025-11-25",
    number: "379",
    amount: 2.61, //
    net: 7.68 * GB,
    roaming: 8.72 * GB,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-11-25",
    number: "818",
    amount: 7.11, //
    net: 2.97 * GB,
    roaming: 2.91 * GB,
    min: 256,
    sms: 141,
  },
  {
    date: "2025-11-25",
    number: "828",
    amount: 2.48, //
    net: 969 * MB,
    roaming: 6.68 * GB,
    min: 105,
    sms: 111,
  },
  {
    date: "2025-11-25",
    number: "796",
    amount: 50, // konto utraciło ważność
    net: 0 * GB,
    roaming: 1.45 * GB,
    min: 10,
    sms: 100,
  },
  {
    date: "2025-11-25",
    number: "102",
    net: 147.01 * GB,
    roaming: 8.71 * GB,
  },

  {
    date: "2025-11-20",
    number: "183",
    amount: 2.95,
    net: 2.08 * GB, //
    roaming: 5.23 * GB,
    min: "63:33",
    sms: 96,
  },
  {
    date: "2025-11-20",
    number: "938",
    amount: 6.08, //
    net: 1.05 * GB,
    roaming: 0,
    min: 111,
    sms: 183,
  },
  {
    date: "2025-11-20",
    number: "379",
    amount: 2.61, //
    net: 8.3 * GB,
    roaming: 8.72 * GB,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-11-20",
    number: "818",
    amount: 7.11, //
    net: 3.11 * GB,
    roaming: 2.91 * GB,
    min: 260,
    sms: 141,
  },
  {
    date: "2025-11-20",
    number: "828",
    amount: 2.48, //
    net: 1.25 * GB,
    roaming: 6.68 * GB,
    min: 105,
    sms: 118,
  },
  {
    date: "2025-11-20",
    number: "796",
    amount: 50, // traci ważność dziś
    net: 0 * GB,
    roaming: 1.45 * GB,
    min: 10,
    sms: 100,
  },
  {
    date: "2025-11-20",
    number: "102",
    net: 148.88 * GB,
    roaming: 8.71 * GB,
  },

  {
    date: "2025-11-15",
    number: "183",
    amount: 2.95,
    net: 2.54 * GB, //
    roaming: 5.23 * GB,
    min: "66:15",
    sms: 97,
  },
  {
    date: "2025-11-15",
    number: "938",
    amount: 6.08, //
    net: 1.08 * GB,
    roaming: 0,
    min: 111,
    sms: 183,
  },
  {
    date: "2025-11-15",
    number: "379",
    amount: 2.61, //
    net: 9.67 * GB,
    roaming: 8.72 * GB,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-11-15",
    number: "818",
    amount: 7.11, //
    net: 3.39 * GB,
    roaming: 2.91 * GB,
    min: 260,
    sms: 142,
  },
  {
    date: "2025-11-15",
    number: "828",
    amount: 2.48, //
    net: 1.42 * GB,
    roaming: 6.68 * GB,
    min: 105,
    sms: 125,
  },
  {
    date: "2025-11-15",
    number: "796",
    // amount: 45, // traci ważność dziś
    amount: 50, // traci ważność za 5 dni
    net: 300.09 * GB, // traci ważność za 3 dni
    roaming: 1.45 * GB,
    min: 10,
    sms: 100,
    operations: [{ amount: 5 }],
  },
  {
    date: "2025-11-15",
    number: "102",
    net: 149.78 * GB,
    roaming: 8.71 * GB,
  },

  {
    date: "2025-11-10",
    number: "183",
    amount: 2.95,
    net: 2.61 * GB, //
    roaming: 5.23 * GB,
    min: "66:47",
    sms: 97,
  },
  {
    date: "2025-11-10",
    number: "938",
    amount: 6.08, //
    net: 1.12 * GB,
    roaming: 0,
    min: 112,
    sms: 183,
  },
  {
    date: "2025-11-10",
    number: "379",
    amount: 2.61, //
    net: 10.89 * GB,
    roaming: 8.72 * GB,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-11-10",
    number: "818",
    amount: 7.11, //
    net: 3.58 * GB,
    roaming: 2.91 * GB,
    min: 260,
    sms: 142,
  },
  {
    date: "2025-11-10",
    number: "828",
    amount: 2.48, //
    net: 1.52 * GB,
    roaming: 6.68 * GB,
    min: 106,
    sms: 128,
  },
  {
    date: "2025-11-10",
    number: "796",
    // amount: 40, // traci ważność dziś
    amount: 45, // traci ważność za 5 dni
    net: 300.09 * GB,
    roaming: 1.45 * GB,
    min: 10,
    sms: 100,
    operations: [{ amount: 5 }],
  },

  {
    date: "2025-11-05",
    number: "183",
    // amount: 11.95,
    amount: 2.95,
    // net: 817 * MB,
    net: 2.79 * GB, //
    roaming: 2.61 * GB,
    min: "66:47",
    sms: 97,
    operations: [
      {
        amount: -9,
        net: "2GB",
      },
    ],
  },
  {
    date: "2025-11-05",
    number: "938",
    // amount: 1.08,
    amount: 6.08, //
    net: 1.13 * GB,
    roaming: 0,
    min: 112,
    sms: 183,
    operations: [{ amount: 5 }],
  },
  {
    date: "2025-11-05",
    number: "379",
    // amount: 2.61,
    amount: 27.61, //
    net: 5.68 * GB,
    roaming: 8.72 * GB,
    min: "1:22",
    sms: 130,
    operations: [{ amount: 25 }],
  },
  {
    date: "2025-11-05",
    number: "818",
    // amount: 2.11,
    amount: 7.11, //
    net: 3.73 * GB,
    roaming: 2.91 * GB,
    min: 260,
    sms: 142,
    operations: [{ amount: 5 }],
  },
  {
    date: "2025-11-05",
    number: "828",
    // amount: 2.48,
    // amount: 17.48, //
    amount: 2.48, //
    net: 1.79 * GB,
    roaming: 6.68 * GB,
    // min: "12:23",
    min: 112,
    sms: 128,
    operations: [
      {
        amount: -15,
        min: 100,
      },
      { amount: 15 },
    ],
  },
  {
    date: "2025-11-05",
    number: "796",
    // amount: 35, // konto utraciło ważność
    amount: 40, // traci ważność za 5 dni
    net: 300.09 * GB,
    roaming: 1.45 * GB,
    min: 10,
    sms: 100,
    operations: [{ amount: 5 }],
  },

  {
    date: "2025-11-01",
    number: "183",
    amount: 11.95,
    net: 1.11 * GB,
    roaming: 2.61 * GB,
    min: "66:47",
    sms: 98,
  },
  {
    date: "2025-11-01",
    number: "938",
    amount: 1.08,
    net: 1.15 * GB,
    roaming: 0,
    min: 112,
    sms: 183,
  },
  {
    date: "2025-11-01",
    number: "379",
    amount: 2.61,
    net: 6.75 * GB,
    roaming: 8.72 * GB,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-11-01",
    number: "818",
    amount: 2.11,
    net: 3.98 * GB,
    roaming: 4.36 * GB,
    min: 260,
    sms: 142,
  },
  {
    date: "2025-11-01",
    number: "828",
    amount: 2.48,
    net: 1.96 * GB,
    roaming: 6.68 * GB,
    min: "12:23",
    sms: 128,
  },
  {
    date: "2025-11-01",
    number: "796",
    amount: 35, // traci ważność za 3 dni
    net: 301.09 * GB,
    roaming: 1.45 * GB,
    min: 10,
    sms: 100,
  },
  {
    date: "2025-11-01",
    number: "102",
    net: 150.47 * GB,
    roaming: 8.71 * GB,
  },

  {
    date: "2025-10-30",
    number: "183",
    amount: 11.95, //
    net: 1.14 * GB,
    roaming: 2.61 * GB,
    min: "67:37",
    sms: 98,
  },
  {
    date: "2025-10-30",
    number: "938",
    amount: 1.08, //
    net: 1.16 * GB,
    roaming: 0,
    min: 112, //
    sms: 183,
  },
  {
    date: "2025-10-30",
    number: "379",
    amount: 2.61, //
    net: 7.1 * GB, //
    roaming: 8.72 * GB,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-10-30",
    number: "818",
    amount: 2.11,
    net: 4.08 * GB, //
    roaming: 4.36 * GB,
    min: 260,
    sms: 142,
  },
  {
    date: "2025-10-30",
    number: "828",
    // amount: 1.48, //
    // amount: 11.48, //
    amount: 2.48, //
    // net: 53,
    net: 2.05 * GB, //
    roaming: 6.68 * GB,
    min: "12:23",
    sms: 131, //
    operations: [
      {
        amount: -9,
        net: "2GB",
      },
      { amount: 10 },
    ],
  },
  {
    date: "2025-10-30",
    number: "796",
    // amount: 30, // traci ważność dziś
    amount: 35, // traci ważność za 5 dni
    net: 301_090, //
    roaming: 2_910,
    min: 10,
    sms: 100,
    operations: [
      {
        amount: 5,
      },
    ],
  },
  {
    date: "2025-10-30",
    number: "102",
    net: 144_900,
    roaming: 8_710,
  },

  {
    date: "2025-10-25",
    number: "183",
    amount: 11.95, //
    net: 1_260,
    roaming: 2_610,
    min: "67:37",
    sms: 100,
  },
  {
    date: "2025-10-25",
    number: "938",
    amount: 1.08, //
    net: 1_180,
    roaming: 0,
    min: 113, //
    sms: 183,
  },
  {
    date: "2025-10-25",
    number: "379",
    amount: 2.61, //
    net: 7_670, //
    roaming: 8_720,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-10-25",
    number: "818",
    amount: 2.11,
    net: 4_340, //
    roaming: 4_360,
    min: 260,
    sms: 142,
  },
  {
    date: "2025-10-25",
    number: "828",
    amount: 1.48, //
    net: 353,
    roaming: 4_070,
    min: "13:16",
    sms: 135, //
  },
  {
    date: "2025-10-25",
    number: "796",
    amount: 30, // traci ważność za 5 dni
    net: 301_090, //
    roaming: 2_910,
    min: 10,
    sms: 100,
  },
  {
    date: "2025-10-25",
    number: "102",
    net: 145_050,
    roaming: 0,
  },

  {
    date: "2025-10-20",
    number: "183",
    amount: 11.95, //
    net: 1_530,
    roaming: 2_610,
    min: "67:37",
    sms: 104,
  },
  {
    date: "2025-10-20",
    number: "938",
    amount: 1.08, //
    net: 1_380,
    roaming: 0,
    min: 113, //
    sms: 183,
  },
  {
    date: "2025-10-20",
    number: "379",
    amount: 2.61, //
    net: 9_240, //
    roaming: 8_720,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-10-20",
    number: "818",
    amount: 2.11,
    net: 4_720, //
    roaming: 4_360,
    min: 260,
    sms: 142,
  },
  {
    date: "2025-10-20",
    number: "828",
    amount: 1.48, //
    net: 601,
    roaming: 4_070,
    min: "20:18",
    sms: 142, //
  },
  {
    date: "2025-10-20",
    number: "796",
    // amount: 20, // traci ważność dziś
    amount: 30, // traci ważność 30 października
    net: 302_090, //
    roaming: 2_910,
    min: 10,
    sms: 100,
    operations: [
      {
        amount: 10,
      },
    ],
  },
  {
    date: "2025-10-20",
    number: "102",
    net: 150_000, // bez limitu
    roaming: 8_710,
  },

  {
    date: "2025-10-15",
    number: "183",
    amount: 11.95, //
    net: 1_730,
    roaming: 2_610,
    min: "67:37",
    sms: 118,
  },
  {
    date: "2025-10-15",
    number: "938",
    amount: 1.08, //
    net: 1_390,
    roaming: 0,
    min: 113, //
    sms: 184,
  },
  {
    date: "2025-10-15",
    number: "379",
    amount: 2.61, //
    net: 9_810, //
    roaming: 8_720,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-10-15",
    number: "818",
    amount: 2.11,
    net: 4_910, //
    roaming: 4_360,
    min: 263,
    sms: 142,
  },
  {
    date: "2025-10-15",
    number: "828",
    amount: 1.48, //
    net: 829,
    roaming: 4_070,
    min: "20:38",
    sms: 145, //
  },
  {
    date: "2025-10-15",
    number: "796",
    amount: 20, // traci ważność za 5 dni
    net: 302_090, //
    roaming: 2_910,
    min: 10,
    sms: 100,
  },
  {
    date: "2025-10-15",
    number: "102",
    net: 150_000, // bez limitu
    roaming: 8_710,
  },

  {
    date: "2025-10-10",
    number: "183",
    amount: 11.95, //
    net: 2_000,
    roaming: 5_230,
    min: "67:37",
    sms: 119,
  },
  {
    date: "2025-10-10",
    number: "938",
    amount: 1.08, //
    net: 1_420,
    roaming: 0,
    min: 113, //
    sms: 184,
  },
  {
    date: "2025-10-10",
    number: "379",
    amount: 2.61, //
    net: 10_830, //
    roaming: 8_720,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-10-10",
    number: "818",
    amount: 2.11,
    net: 5_030, //
    roaming: 4_360,
    min: 263,
    sms: 142,
  },
  {
    date: "2025-10-10",
    number: "828",
    amount: 1.48, //
    net: 1_140,
    roaming: 4_070,
    min: "23:02",
    sms: 147, //
  },
  {
    date: "2025-10-10",
    number: "796",
    // amount: 10, // traci ważność za dzisiaj
    amount: 20, // ważne do 20 października
    net: 302_090, //
    roaming: 2_910,
    min: 10,
    sms: 100,
    operations: [
      {
        amount: 10,
      },
    ],
  },
  {
    date: "2025-10-10",
    number: "102",
    net: 150_000, // bez limitu
    roaming: 8_710,
  },

  {
    date: "2025-10-08",
    number: "183",
    amount: 11.95, //
    net: 2_100,
    roaming: 5_230,
    min: "67:37",
    sms: 119,
  },
  {
    date: "2025-10-08",
    number: "938",
    // amount: 16.08, //
    amount: 1.08, //
    net: 1_430,
    roaming: 0,
    // min: "13:56",
    min: 113, //
    sms: 184,
    operations: [
      {
        amount: -15,
        min: 100,
      },
    ],
  },
  {
    date: "2025-10-08",
    number: "379",
    // amount: 22.61, //
    // amount: 17.61, //
    amount: 27.61, //
    // net: 0,
    net: 1_000, //
    roaming: 7_260,
    min: "1:22",
    sms: 130,
    operations: [
      {
        amount: -5,
        net: "1GB",
      },
      { amount: 10 },
    ],
  },
  {
    date: "2025-10-08",
    number: "818",
    amount: 2.11,
    net: 5_240, //
    roaming: 4_360,
    min: 263,
    sms: 142,
  },
  {
    date: "2025-10-08",
    number: "828",
    amount: 1.48, //
    net: 1_300,
    roaming: 4_070,
    min: "23:02",
    sms: 147, //
  },
  {
    date: "2025-10-08",
    number: "796",
    amount: 10, // traci ważność za 2 dni
    net: 302_090, //
    roaming: 2_910,
    min: 10,
    sms: 100,
  },
  {
    date: "2025-10-08",
    number: "102",
    net: 150_420,
    roaming: 8_710,
  },

  {
    date: "2025-10-05",
    number: "183",
    // amount: 1.95,
    amount: 11.95, //
    net: 2_130,
    roaming: 5_230,
    min: "69:21",
    sms: 121,
    operations: [{ amount: 10 }],
  },
  {
    date: "2025-10-05",
    number: "938",
    // amount: 11.08,
    amount: 16.08, //
    net: 1_470,
    roaming: 0,
    min: "26:54",
    sms: 184,
    operations: [{ amount: 5 }],
  },
  {
    date: "2025-10-05",
    number: "379",
    // amount: 3.34,
    amount: 28.34, //
    net: 282,
    roaming: 7_260,
    min: "1:22",
    sms: 130,
    operations: [{ amount: 25 }],
  },
  {
    date: "2025-10-05",
    number: "818",
    // amount: 7.11,
    amount: 2.11,
    // net: 4_410,
    net: 5_410, //
    roaming: 2_910,
    min: 265,
    sms: 142,
    operations: [{ amount: -5, net: "1GB" }],
  },
  {
    date: "2025-10-05",
    number: "828",
    // amount: 1.48,
    // amount: 6.48, //
    amount: 1.48, //
    net: 1_300,
    roaming: 4_070,
    min: "54:34",
    // sms: 47,
    sms: 147, //
    operations: [{ amount: 5 }, { amount: -5, sms: 100 }],
  },
  {
    date: "2025-10-05",
    number: "796",
    // amount: 10, // traci ważność dziś
    // amount: 5, // traci ważność dziś
    amount: 10, // traci ważność za 5 dni
    // net: 301_090,
    net: 302_090, //
    roaming: 2_910,
    min: 10,
    sms: 100,
    operations: [
      { amount: 5 },
      { amount: -5, net: "1GB" }, // na 30 dni
      { amount: 5 },
    ],
  },
  {
    date: "2025-10-05",
    number: "102",
    net: 150_420,
    roaming: 8_710,
  },

  {
    date: "2025-10-01",
    number: "183",
    amount: 1.95,
    net: 2_350,
    roaming: 5_230,
    min: "69:21",
    sms: 121,
  },
  {
    date: "2025-10-01",
    number: "938",
    amount: 11.08,
    net: 1_470,
    roaming: 0,
    min: "26:54",
    sms: 184,
  },
  {
    date: "2025-10-01",
    number: "379",
    amount: 3.34,
    net: 365,
    roaming: 7_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-10-01",
    number: "818",
    amount: 7.11,
    net: 4_610,
    roaming: 2_910,
    min: 265,
    sms: 142,
  },
  {
    date: "2025-10-01",
    number: "828",
    amount: 1.48,
    net: 1_530,
    roaming: 4_070,
    min: "59:51",
    sms: 47,
  },
  {
    date: "2025-10-01",
    number: "796",
    amount: 10, // traci ważność za 4 dni
    net: 301_090,
    roaming: 1_450,
    min: 10,
    sms: 100,
  },
  {
    date: "2025-10-01",
    number: "102",
    net: 148_710,
    roaming: 8_710,
  },

  {
    date: "2025-09-30",
    number: "183",
    amount: 1.95, //
    net: 2_350, //
    roaming: 5_230,
    min: "69:21",
    sms: 121,
  },
  {
    date: "2025-09-30",
    number: "938",
    amount: 11.08, //
    net: 1_470,
    roaming: 0,
    min: "26:54",
    sms: 184,
  },
  {
    date: "2025-09-30",
    number: "379",
    amount: 3.34, //
    net: 376,
    roaming: 7_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-09-30",
    number: "818",
    amount: 7.11,
    net: 4_640, //
    roaming: 2_910,
    min: 265,
    sms: 142,
  },
  {
    date: "2025-09-30",
    number: "828",
    amount: 1.48, //
    net: 1_530, //
    roaming: 4_070,
    min: "59:51",
    sms: 47, //
  },
  {
    date: "2025-09-30",
    number: "796",
    amount: 10, // traci ważność za 5 dni
    net: 301_090,
    roaming: 1_450,
    min: 10,
    sms: 100,
  },
  {
    date: "2025-09-30",
    number: "102",
    net: 148_710,
    roaming: 8_710,
  },

  {
    date: "2025-09-25",
    number: "183",
    // amount: 10.95, //
    amount: 1.95, //
    // net: 475,
    net: 2_460, //
    roaming: 2_610,
    min: "69:21",
    sms: 121,
  },
  {
    date: "2025-09-25",
    number: "938",
    amount: 11.08, //
    net: 1_480,
    roaming: 0,
    min: "45:26",
    sms: 184,
  },
  {
    date: "2025-09-25",
    number: "379",
    amount: 3.34, //
    net: 2_410,
    roaming: 7_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-09-25",
    number: "818",
    amount: 7.11,
    net: 5_070, //
    roaming: 2_910,
    min: 265,
    sms: 142,
  },
  {
    date: "2025-09-25",
    number: "828",
    amount: 1.48, //
    net: 1_890, //
    roaming: 4_070,
    min: "61:15",
    sms: 47, //
  },
  {
    date: "2025-09-25",
    number: "796",
    // amount: 0, //
    amount: 10, // ważne do 10.10
    net: 301_090,
    roaming: 1_450,
    min: 10,
    sms: 100,
  },
  {
    date: "2025-09-25",
    number: "102",
    net: 148_900,
    roaming: 8_710,
  },

  {
    date: "2025-09-20",
    number: "183",
    amount: 10.95, //
    net: 1_680,
    roaming: 5_520,
    min: "69:21",
    sms: 121,
  },
  {
    date: "2025-09-20",
    number: "938",
    amount: 11.08, //
    net: 1_510,
    roaming: 0,
    min: "46:15",
    sms: 184,
  },
  {
    date: "2025-09-20",
    number: "379",
    amount: 3.34, //
    net: 4_310,
    roaming: 7_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-09-20",
    number: "818",
    amount: 7.11,
    net: 5_270, //
    roaming: 2_910,
    min: 265,
    sms: 142,
  },
  {
    date: "2025-09-20",
    number: "828",
    // amount: 0.48, //
    // amount: 10.48, //
    amount: 1.48, //
    // net: 147, //
    net: 2_140, //
    roaming: 4_070,
    min: "61:15",
    sms: 78, //
  },
  {
    date: "2025-09-20",
    number: "796",
    // amount: 0,
    // amount: 5, //
    amount: 0, // ważne do 25.09
    // net: 300_090,
    net: 301_090, //
    roaming: 1_450,
    min: 10,
    sms: 100,
  },
  {
    date: "2025-09-20",
    number: "102",
    net: 149_430,
    roaming: 8_710,
  },

  {
    date: "2025-09-15",
    number: "183",
    amount: 10.95, //
    net: 1_850,
    roaming: 5_520,
    min: "69:21",
    sms: 121,
  },
  {
    date: "2025-09-15",
    number: "938",
    amount: 11.08, //
    net: 1_510,
    roaming: 0,
    min: "73:58",
    sms: 184,
  },
  {
    date: "2025-09-15",
    number: "379",
    amount: 3.34, //
    net: 8_680,
    roaming: 7_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-09-15",
    number: "818",
    amount: 7.11,
    net: 5_720, //
    roaming: 2_910,
    min: 265,
    sms: 142,
  },
  {
    date: "2025-09-15",
    number: "828",
    amount: 0.48, //
    net: 484, //
    roaming: 1_450,
    min: "61:53",
    sms: 79, //
  },
  {
    date: "2025-09-15",
    number: "796",
    amount: 0,
    net: 329_970,
    roaming: 8_720,
    min: 0,
    sms: 0,
  },
  {
    date: "2025-09-15",
    number: "102",
    net: 149_500,
    roaming: 8_710,
  },

  {
    date: "2025-09-10",
    number: "183",
    amount: 10.95, //
    net: 2_010,
    roaming: 5_520,
    min: "69:21",
    sms: 123,
  },
  {
    date: "2025-09-10",
    number: "938",
    amount: 11.08, //
    net: 1_530,
    roaming: 0,
    min: "95:11",
    sms: 184,
  },
  {
    date: "2025-09-10",
    number: "379",
    amount: 3.34, //
    net: 10_090,
    roaming: 7_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-09-10",
    number: "818",
    amount: 7.11,
    net: 6_570, //
    roaming: 2_910,
    min: 265,
    sms: 142,
  },
  {
    date: "2025-09-10",
    number: "828",
    amount: 0.48, //
    net: 922, //
    roaming: 1_450,
    min: "70:51",
    sms: 90, //
  },
  {
    date: "2025-09-10",
    number: "796",
    amount: 0,
    net: 330_010,
    roaming: 8_720,
    min: 0,
    sms: 0,
  },
  {
    date: "2025-09-10",
    number: "102",
    net: 149_570,
    roaming: 8_710,
  },

  {
    date: "2025-09-05",
    number: "183",
    // amount: 0.95,
    amount: 10.95, //
    net: 2_180,
    roaming: 5_520,
    min: "98:57",
    sms: 130,
  },
  {
    date: "2025-09-05",
    number: "938",
    // amount: 6.08,
    amount: 11.08, //
    net: 1_580,
    roaming: 0,
    min: "97:33",
    sms: 184,
  },
  {
    date: "2025-09-05",
    number: "379",
    // amount: 3.34,
    amount: 28.34, //
    net: 3_960,
    roaming: 7_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-09-05",
    number: "818",
    // amount: 12.11,
    amount: 7.11,
    // net: 5_740,
    net: 6_730, //
    roaming: 2_910,
    min: 265,
    sms: 143,
  },
  {
    date: "2025-09-05",
    number: "828",
    // amount: 0.48,
    // amount: 10.48, //
    amount: 0.48, //
    // net: 130, // ?
    net: 1_120, //
    roaming: 1_450,
    min: "70:51",
    // sms: 4, // ?
    sms: 104, //
  },
  {
    date: "2025-09-05",
    number: "796",
    amount: 0,
    net: 330_010,
    roaming: 8_720,
    min: 0,
    sms: 0,
  },
  {
    date: "2025-09-05",
    number: "102",
    net: 150_000,
    roaming: 8_710,
  },

  {
    date: "2025-08-30",
    number: "183",
    amount: 0.95, //
    net: 2_330, //
    roaming: 3_290,
    min: "98:57",
    sms: 132,
  },
  {
    date: "2025-08-30",
    number: "938",
    amount: 6.08, //
    net: 1_580,
    roaming: 0,
    min: 112,
    sms: 185,
  },
  {
    date: "2025-08-30",
    number: "379",
    amount: 3.34, //
    net: 5_260,
    roaming: 5_280,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-08-30",
    number: "818",
    amount: 12.11,
    net: 6_110, //
    roaming: 1_450,
    min: 265,
    sms: 143,
  },
  {
    date: "2025-08-30",
    number: "828",
    amount: 0.48, //
    net: 3_720, //
    roaming: 2_900,
    min: "73:01",
    sms: 28, //
  },
  {
    date: "2025-08-30",
    number: "796",
    amount: 0,
    net: 330_010, //
    roaming: 8_720,
    min: 0,
    sms: 0,
  },
  {
    date: "2025-08-30",
    number: "102",
    net: 143_840,
    roaming: 8_710,
  },

  {
    date: "2025-08-28",
    number: "183",
    amount: 0.95, //
    net: 3_610, //
    roaming: 4_510,
    min: 100,
    sms: 132,
  },
  {
    date: "2025-08-28",
    number: "379",
    amount: 3.34, //
    net: 6_150,
    roaming: 6_030,
    min: "1:22",
    sms: 130,
  },

  {
    date: "2025-08-25",
    number: "183",
    amount: 0.95, //
    net: 3_970, //
    roaming: 4_870,
    min: 100,
    sms: 132,
  },
  {
    date: "2025-08-25",
    number: "938",
    amount: 6.08, //
    net: 1_590,
    roaming: 0,
    min: 112,
    sms: 185,
  },
  {
    date: "2025-08-25",
    number: "379",
    amount: 3.34, //
    net: 6_550,
    roaming: 6_420,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-08-25",
    number: "818",
    amount: 12.11,
    net: 6_110, //
    roaming: 1_450,
    min: 265,
    sms: 143,
  },
  {
    date: "2025-08-25",
    number: "828",
    amount: 0.48, //
    net: 3_740, //
    roaming: 2_900,
    min: "73:01",
    sms: 30, //
  },
  {
    date: "2025-08-25",
    number: "796",
    amount: 0,
    net: 330_010, //
    roaming: 8_720,
    min: 0,
    sms: 0,
  },
  {
    date: "2025-08-25",
    number: "102",
    net: 143_840,
    roaming: 8_710,
  },

  {
    date: "2025-08-24",
    number: "183",
    amount: 0.95, //
    net: 4_300, //
    roaming: 5_020,
    min: 101,
    sms: 132,
  },

  {
    date: "2025-08-23",
    number: "183",
    amount: 10.95, //
    net: 498, //
    roaming: 2_470,
    min: 101,
    sms: 132,
  },

  {
    date: "2025-08-20",
    number: "183",
    amount: 10.95, //
    net: 960,
    roaming: 2_610,
    min: 102,
    sms: 139,
  },
  {
    date: "2025-08-20",
    number: "938",
    amount: 6.08, //
    net: 1_620,
    roaming: 0,
    min: 219,
    sms: 185,
  },
  {
    date: "2025-08-20",
    number: "379",
    amount: 3.34, //
    net: 7_850,
    roaming: 7_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-08-20",
    number: "818",
    amount: 12.11,
    net: 6_120, //
    roaming: 1_450,
    min: 265,
    sms: 143,
  },
  {
    date: "2025-08-20",
    number: "828",
    amount: 0.48, //
    net: 3_760, //
    roaming: 2_900,
    min: 111,
    sms: 54, //
  },
  {
    date: "2025-08-20",
    number: "796",
    amount: 0,
    net: 330_090, //
    roaming: 8_720,
    min: 0,
    sms: 0,
  },
  {
    date: "2025-08-20",
    number: "102",
    net: 143_840,
    roaming: 8_710,
  },

  {
    date: "2025-08-15",
    number: "183",
    amount: 10.95, //
    net: 1_110,
    roaming: 2_610,
    min: 102,
    sms: 139,
  },
  {
    date: "2025-08-15",
    number: "938",
    amount: 6.08, //
    net: 1_620,
    roaming: 0,
    min: 220,
    sms: 185,
  },
  {
    date: "2025-08-15",
    number: "379",
    amount: 3.34, //
    net: 8_700,
    roaming: 7_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-08-15",
    number: "818",
    amount: 12.11,
    net: 6_130, //
    roaming: 1_450,
    min: 265,
    sms: 143,
  },
  {
    date: "2025-08-15",
    number: "828",
    amount: 0.48, //
    net: 3_810, //
    roaming: 2_900,
    min: 114,
    sms: 74, //
  },
  {
    date: "2025-08-15",
    number: "102",
    net: 143_840,
    roaming: 8_710,
  },

  {
    date: "2025-08-10",
    number: "183",
    amount: 10.95, //
    net: 1_300,
    roaming: 2_610,
    min: 104,
    sms: 139,
  },
  {
    date: "2025-08-10",
    number: "938",
    amount: 6.08, //
    net: 1_640,
    roaming: 0,
    min: 220,
    sms: 185,
  },
  {
    date: "2025-08-10",
    number: "379",
    amount: 3.34, //
    net: 10_190,
    roaming: 7_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-08-10",
    number: "818",
    amount: 12.11,
    net: 6_130, //
    roaming: 0,
    min: 265,
    sms: 143,
  },
  {
    date: "2025-08-10",
    number: "828",
    amount: 0.48, //
    net: 4_030, //
    roaming: 2_900,
    min: 114,
    sms: 103, //
  },
  {
    date: "2025-08-10",
    number: "102",
    net: 146_270,
    roaming: 8_710,
  },

  {
    date: "2025-08-05",
    number: "183",
    // amount: 0.95,
    amount: 10.95, //
    net: 1_470,
    roaming: 5_230,
    min: 104,
    sms: 143,
  },
  {
    date: "2025-08-05",
    number: "938",
    // amount: 1.08,
    amount: 6.08, //
    net: 1_670,
    roaming: 0,
    min: 220,
    sms: 185,
  },
  {
    date: "2025-08-05",
    number: "379",
    // amount: 3.34, //
    amount: 28.34, //
    net: 5_480,
    roaming: 7_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-08-05",
    number: "818",
    // amount: 17.11,
    amount: 12.11,
    // net: 5_140,
    net: 6_140, //
    roaming: 0,
    min: 265,
    sms: 143,
  },
  {
    date: "2025-08-05",
    number: "828",
    // amount: 0.48, //
    // amount: 5.48, //
    // amount: 10.48, //
    amount: 0.48, //
    // net: 129, // ?
    net: 4_120, //
    roaming: 0,
    min: 114,
    // sms: 16, // ?
    sms: 116, //
  },
  {
    date: "2025-08-05",
    number: "102",
    net: 146_380,
    roaming: 8_710,
  },

  {
    date: "2025-08-01",
    number: "183",
    amount: 0.95,
    net: 1_540,
    roaming: 5_230,
    min: 104,
    sms: 143,
  },
  {
    date: "2025-08-01",
    number: "938",
    amount: 1.08,
    net: 1_670,
    roaming: 0,
    min: 220,
    sms: 185,
  },
  {
    date: "2025-08-01",
    number: "379",
    amount: 3.34,
    net: 6_140,
    roaming: 7_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-08-01",
    number: "818",
    amount: 17.11,
    net: 5_150,
    roaming: 0,
    min: 265,
    sms: 143,
  },
  {
    date: "2025-08-01",
    number: "828",
    amount: 0.48,
    net: 3_370,
    roaming: 2_900,
    min: 114,
    sms: 16, // ?
  },
  {
    date: "2025-08-01",
    number: "102",
    net: 147_130,
    roaming: 8_710,
  },

  {
    date: "2025-07-30",
    number: "183",
    amount: 0.95, //
    net: 1_550, //
    roaming: 5_230,
    min: 104, //
    sms: 143,
  },
  {
    date: "2025-07-30",
    number: "938",
    amount: 1.08,
    net: 1_680,
    roaming: 0,
    min: 220,
    sms: 185, //
  },
  {
    date: "2025-07-30",
    number: "379",
    amount: 3.34,
    net: 6_160, //
    roaming: 7_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-07-30",
    number: "818",
    amount: 17.11, //
    net: 5_150,
    roaming: 0,
    min: 265,
    sms: 143,
  },
  {
    date: "2025-07-30",
    number: "828",
    amount: 0.48,
    net: 3_380, //
    roaming: 2_900,
    min: 114,
    sms: 16, // ?
  },
  {
    date: "2025-07-30",
    number: "102",
    net: 147_130,
    roaming: 8_710,
  },

  {
    date: "2025-07-25",
    number: "183",
    amount: 0.95, //
    net: 1_750, //
    roaming: 5_230,
    min: 104, //
    sms: 143,
  },
  {
    date: "2025-07-25",
    number: "938",
    amount: 1.08,
    net: 1_720,
    roaming: 0,
    min: 221,
    sms: 185, //
  },
  {
    date: "2025-07-25",
    number: "379",
    // amount: 0.34,
    amount: 3.34,
    net: 6_170, //
    roaming: 7_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-07-25",
    number: "818",
    amount: 17.11, //
    net: 5_150,
    roaming: 0,
    min: 265,
    sms: 143,
  },
  {
    date: "2025-07-25",
    number: "828",
    amount: 0.48,
    net: 3_380, //
    roaming: 4_360,
    min: 114,
    sms: 16, // ?
  },
  {
    date: "2025-07-25",
    number: "102",
    net: 147_130,
    roaming: 8_710,
  },

  {
    date: "2025-07-20",
    number: "183",
    amount: 0.95, //
    net: 1_750, //
    roaming: 5_230,
    min: 104, //
    sms: 143,
  },
  {
    date: "2025-07-20",
    number: "938",
    amount: 1.08,
    net: 1_720,
    roaming: 0,
    min: 221,
    sms: 185, //
  },
  {
    date: "2025-07-20",
    number: "379",
    amount: 0.34,
    net: 8_070, //
    roaming: 7_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-07-20",
    number: "818",
    amount: 17.11, //
    net: 5_160,
    roaming: 0,
    min: 265,
    sms: 143,
  },
  {
    date: "2025-07-20",
    number: "828",
    amount: 0.48,
    net: 3_480, //
    roaming: 4_360,
    min: 115,
    sms: 63, // ?
  },
  {
    date: "2025-07-20",
    number: "102",
    net: 147_130,
    roaming: 8_710,
  },

  {
    date: "2025-07-15",
    number: "183",
    // amount: 4.95,
    // amount: 9.95,
    amount: 0.95, //
    // net: 579,
    net: 2_560, //
    roaming: 4_070,
    min: 108, //
    sms: 147,
  },
  {
    date: "2025-07-15",
    number: "938",
    amount: 1.08,
    net: 1_730,
    roaming: 0,
    min: 222,
    sms: 186, //
  },
  {
    date: "2025-07-15",
    number: "379",
    amount: 0.34,
    net: 9_510, //
    roaming: 7_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-07-15",
    number: "818",
    amount: 17.11, //
    net: 5_160,
    roaming: 0,
    min: 265,
    sms: 143,
  },
  {
    date: "2025-07-15",
    number: "828",
    amount: 0.48,
    net: 3_500, //
    roaming: 4_360,
    min: 116,
    sms: 68, // ?
  },
  {
    date: "2025-07-15",
    number: "102",
    net: 147_130,
    roaming: 8_710,
  },

  {
    date: "2025-07-10",
    number: "183",
    amount: 4.95,
    net: 2_470,
    roaming: 6_970,
    min: 109, //
    sms: 148,
  },
  {
    date: "2025-07-10",
    number: "938",
    amount: 1.08,
    net: 1_750,
    roaming: 0,
    min: 222,
    sms: 186, //
  },
  {
    date: "2025-07-10",
    number: "379",
    amount: 0.34,
    net: 10_190, //
    roaming: 7_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-07-10",
    number: "818",
    amount: 17.11, //
    net: 5_190,
    roaming: 0,
    min: 265,
    sms: 143,
  },
  {
    date: "2025-07-10",
    number: "828",
    amount: 0.48,
    net: 3_780, //
    roaming: 5_810,
    min: 116,
    sms: 77, // ?
  },
  {
    date: "2025-07-10",
    number: "102",
    net: 147_130,
    roaming: 8_710,
  },

  {
    date: "2025-07-05",
    number: "183",
    // amount: 4.95,
    // amount: 19.95, //
    amount: 4.95,
    net: 2_790,
    roaming: 6_970,
    // min: "11:02", // ?
    min: 111, //
    sms: 149,
  },
  {
    date: "2025-07-05",
    number: "938",
    // amount: 12.4,
    amount: 7.4,
    net: 2_310,
    roaming: 1_450,
    min: 222,
    // sms: 86, // ?
    sms: 186, //
  },
  {
    date: "2025-07-05",
    number: "379",
    // amount: 0.34,
    amount: 25.34, //
    net: 916, // ?
    roaming: 7_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-07-05",
    number: "818",
    // amount: 12.11,
    amount: 17.11, //
    net: 5_200,
    roaming: 1_450,
    min: 265,
    sms: 143,
  },
  {
    date: "2025-07-05",
    number: "828",
    // amount: 0.48,
    // amount: 10.48, //
    amount: 0.48,
    // net: 214,
    net: 4_200, //
    roaming: 5_810,
    min: 117,
    sms: 85, // ?
  },
  {
    date: "2025-07-05",
    number: "102",
    net: 150_000,
    roaming: 8_710,
  },

  {
    date: "2025-07-01",
    number: "183",
    amount: 4.95,
    net: 3_120,
    roaming: 6_970,
    min: "20:16", // ?
    sms: 163,
  },
  {
    date: "2025-07-01",
    number: "938",
    amount: 12.4,
    net: 2_320,
    roaming: 1_450,
    min: 222,
    sms: 86, // ?
  },
  {
    date: "2025-07-01",
    number: "379",
    amount: 0.34,
    net: 1_130, // ?
    roaming: 7_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-07-01",
    number: "818",
    amount: 12.11,
    net: 5_210,
    roaming: 1_450,
    min: 265,
    sms: 143,
  },
  {
    date: "2025-07-01",
    number: "828",
    amount: 0.48,
    net: 1_300,
    roaming: 5_810,
    min: 117,
    sms: 85, // ?
  },
  {
    date: "2025-07-01",
    number: "102",
    net: 150_000,
    roaming: 8_710,
  },

  {
    date: "2025-06-30",
    number: "183",
    amount: 4.95, //
    net: 3_140, //
    roaming: 6_970,
    min: "23:39", // ?
    sms: 163,
  },
  {
    date: "2025-06-30",
    number: "938",
    amount: 12.4, //
    net: 2_330,
    roaming: 1_450,
    min: 222,
    sms: 88, // ?
  },
  {
    date: "2025-06-30",
    number: "379",
    amount: 0.34, //
    net: 1_480,
    roaming: 7_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-06-30",
    number: "818",
    amount: 12.11, //
    net: 5_210,
    roaming: 1_450,
    min: 265,
    sms: 143,
  },
  {
    date: "2025-06-30",
    number: "828",
    amount: 0.48, //
    net: 1_510, //
    roaming: 5_810,
    min: 117,
    sms: 85, //
  },
  {
    date: "2025-06-30",
    number: "102",
    net: 149_920,
    roaming: 8_710,
  },

  {
    date: "2025-06-25",
    number: "183",
    amount: 4.95, //
    net: 3_470, //
    roaming: 6_970,
    min: "25:23", // ?
    sms: 163,
  },
  {
    date: "2025-06-25",
    number: "938",
    amount: 12.4, //
    net: 2_360,
    roaming: 1_450,
    min: 222,
    sms: 88, // ?
  },
  {
    date: "2025-06-25",
    number: "379",
    amount: 0.34, //
    net: 1_700,
    roaming: 7_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-06-25",
    number: "818",
    amount: 12.11, //
    net: 5_240,
    roaming: 1_450,
    min: 265,
    sms: 143,
  },
  {
    date: "2025-06-25",
    number: "828",
    amount: 0.48, //
    net: 2_430, //
    roaming: 5_810,
    min: 117,
    sms: 85, //
  },
  {
    date: "2025-06-25",
    number: "102",
    net: 149_920,
    roaming: 8_710,
  },

  {
    date: "2025-06-22",
    number: "183",
    amount: 4.95, //
    net: 3_570, //
    roaming: 6_970,
    min: "25:23", // ?
    sms: 163,
  },
  {
    date: "2025-06-22",
    number: "938",
    amount: 12.4, //
    net: 2_370,
    roaming: 1_450,
    min: 224,
    sms: 88, // ?
  },
  {
    date: "2025-06-22",
    number: "379",
    amount: 0.34, //
    net: 2_900,
    roaming: 7_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-06-22",
    number: "818",
    amount: 12.11, //
    net: 5_260,
    roaming: 1_450,
    min: 265,
    sms: 143,
  },
  {
    date: "2025-06-22",
    number: "828",
    amount: 0.48, //
    net: 2_500, //
    roaming: 5_810,
    min: 117,
    sms: 94, //
  },
  {
    date: "2025-06-22",
    number: "102",
    net: 149_920,
    roaming: 8_710,
  },

  {
    date: "2025-06-15",
    number: "183",
    amount: 4.95, //
    net: 4_420, //
    roaming: 6_970,
    min: "33:29", // ?
    sms: 164,
  },
  {
    date: "2025-06-15",
    number: "938",
    amount: 12.4, //
    net: 2_410,
    roaming: 1_450,
    min: 224,
    sms: 88, // ?
  },
  {
    date: "2025-06-15",
    number: "379",
    amount: 0.34, //
    net: 5_960,
    roaming: 7_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-06-15",
    number: "818",
    amount: 12.11, //
    net: 5_290,
    roaming: 1_450,
    min: 265,
    sms: 143,
  },
  {
    date: "2025-06-15",
    number: "828",
    amount: 0.48, //
    net: 3_200, //
    roaming: 5_810,
    min: 121,
    sms: 103, //
  },
  {
    date: "2025-06-15",
    number: "102",
    net: 149_920,
    roaming: 8_710,
  },

  {
    date: "2025-06-10",
    number: "183",
    // amount: 14.95, //
    amount: 4.95, //
    // net: 914,
    net: 4_890, //
    // roaming: 5_520,
    roaming: 8_430,
    min: "37:22", // ?
    sms: 164,
  },
  {
    date: "2025-06-10",
    number: "938",
    amount: 12.4, //
    net: 2_430,
    roaming: 1_450,
    min: 224,
    sms: 88, // ?
  },
  {
    date: "2025-06-10",
    number: "379",
    amount: 0.34, //
    net: 10_190,
    roaming: 7_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-06-10",
    number: "818",
    amount: 12.11, //
    net: 5_450,
    roaming: 1_450,
    min: 265,
    sms: 143,
  },
  {
    date: "2025-06-10",
    number: "828",
    amount: 0.48, //
    net: 3_710, //
    roaming: 5_810,
    min: 125,
    sms: 122, //
  },
  {
    date: "2025-06-10",
    number: "102",
    net: 149_920,
    roaming: 8_710,
  },

  {
    date: "2025-06-05",
    number: "183",
    // amount: 4.95,
    amount: 14.95, //
    net: 1_010,
    roaming: 5_520,
    min: "39:28", // ?
    sms: 164,
  },
  {
    date: "2025-06-05",
    number: "938",
    // amount: 7.4,
    amount: 12.4, //
    net: 2_440,
    roaming: 1_450,
    min: 224,
    sms: 88,
  },
  {
    date: "2025-06-05",
    number: "379",
    // amount: 0.34,
    amount: 25.34,
    net: 2_370,
    roaming: 7_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-06-05",
    number: "818",
    // amount: 7.11,
    amount: 12.11, //
    net: 5_470,
    roaming: 1_450,
    min: 265,
    sms: 143,
  },
  {
    date: "2025-06-05",
    number: "828",
    // amount: 0.48,
    // amount: 15.48, //
    amount: 0.48, //
    // net: 122, // ?
    net: 4_100, //
    roaming: 2_910,
    min: 126,
    // sms: 27, // ?
    sms: 127, //
  },
  {
    date: "2025-06-05",
    number: "102",
    net: 150_000,
    roaming: 8_710,
  },

  {
    date: "2025-06-01",
    number: "183",
    amount: 4.95,
    net: 1_120,
    roaming: 5_520,
    min: "75:08",
    sms: 164,
  },
  {
    date: "2025-06-01",
    number: "938",
    amount: 7.4,
    net: 2_460,
    roaming: 1_450,
    min: 226,
    sms: 88,
  },
  {
    date: "2025-06-01",
    number: "379",
    amount: 0.34,
    net: 3_650,
    roaming: 3_530,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-06-01",
    number: "818",
    amount: 7.11,
    net: 5_510,
    roaming: 2_910,
    min: 265,
    sms: 143,
  },
  {
    date: "2025-06-01",
    number: "828",
    amount: 0.48,
    net: 282, // ?
    roaming: 5_520,
    min: 128,
    sms: 30, // ?
  },
  {
    date: "2025-06-01",
    number: "102",
    net: 150_000,
    roaming: 8_710,
  },

  {
    date: "2025-05-30",
    number: "183",
    amount: 4.95, //
    net: 1_320, //
    roaming: 5_520,
    min: "75:08",
    sms: 164,
  },
  {
    date: "2025-05-30",
    number: "938",
    amount: 7.4, //
    net: 2_480,
    roaming: 1_450,
    min: 228,
    sms: 88,
  },
  {
    date: "2025-05-30",
    number: "379",
    amount: 0.34, //
    net: 3_650,
    roaming: 7_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-05-30",
    number: "818",
    amount: 7.11, //
    net: 5_530,
    roaming: 2_910,
    min: 265,
    sms: 143,
  },
  {
    date: "2025-05-30",
    number: "828",
    amount: 0.48,
    net: 323,
    roaming: 5_520,
    min: 128, //
    sms: 38, // ?
  },
  {
    date: "2025-05-30",
    number: "102",
    net: 150_000,
    roaming: 8_710,
  },

  {
    date: "2025-05-25",
    number: "183",
    amount: 4.95, //
    net: 1_510, //
    roaming: 5_520,
    min: "81:02",
    sms: 164,
  },
  {
    date: "2025-05-25",
    number: "938",
    amount: 7.4, //
    net: 2_490,
    roaming: 1_450,
    min: 228,
    sms: 88,
  },
  {
    date: "2025-05-25",
    number: "379",
    amount: 0.34, //
    net: 5_130,
    roaming: 7_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-05-25",
    number: "818",
    amount: 7.11, //
    net: 6_120,
    roaming: 2_910,
    min: 265,
    sms: 144,
  },
  {
    date: "2025-05-25",
    number: "828",
    amount: 0.48,
    net: 462,
    roaming: 5_520,
    min: 129, //
    sms: 40, // ?
  },
  {
    date: "2025-05-25",
    number: "102",
    net: 150_000,
    roaming: 8_710,
  },

  {
    date: "2025-05-20",
    number: "183",
    amount: 4.95, //
    net: 1_750, //
    roaming: 5_520,
    min: "83:08",
    sms: 174,
  },
  {
    date: "2025-05-20",
    number: "938",
    amount: 7.4, //
    net: 2_510,
    roaming: 1_450,
    min: 233,
    sms: 88,
  },
  {
    date: "2025-05-20",
    number: "379",
    amount: 0.34, //
    net: 5_570,
    roaming: 7_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-05-20",
    number: "818",
    amount: 7.11, //
    net: 6_160,
    roaming: 2_910,
    min: 265,
    sms: 144,
  },
  {
    date: "2025-05-20",
    number: "828",
    amount: 0.48,
    net: 638,
    roaming: 5_520,
    min: 129, //
    sms: 50, // ?
  },
  {
    date: "2025-05-20",
    number: "102",
    net: 150_000,
    // roaming: 8_710,
  },

  {
    date: "2025-05-15",
    number: "183",
    amount: 4.95, //
    net: 2_050, //
    roaming: 5_520,
    min: "83:08",
    sms: 175,
  },
  {
    date: "2025-05-15",
    number: "938",
    amount: 7.4, //
    net: 2_520,
    roaming: 1_450,
    min: 242,
    sms: 88,
  },
  {
    date: "2025-05-15",
    number: "379",
    amount: 0.34, //
    net: 8_480,
    roaming: 7_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-05-15",
    number: "818",
    amount: 7.11, //
    net: 6_200,
    roaming: 2_910,
    min: 265,
    sms: 146,
  },
  {
    date: "2025-05-15",
    number: "828",
    amount: 0.48,
    net: 849,
    roaming: 5_520,
    min: 129, //
    sms: 64, // ?
  },
  {
    date: "2025-05-15",
    number: "102",
    net: 150_000,
    roaming: 8_710,
  },

  {
    date: "2025-05-10",
    number: "183",
    // amount: 13.95, //
    amount: 4.95, //
    // net: 511,
    // net: 188,
    net: 2_180, //
    roaming: 5_520,
    min: "88:36",
    sms: 175,
  },
  {
    date: "2025-05-10",
    number: "938",
    amount: 7.4, //
    net: 2_540,
    roaming: 1_450,
    min: 242,
    sms: 88,
  },
  {
    date: "2025-05-10",
    number: "379",
    // amount: 25.34, //
    amount: 0.34, //
    net: 10_140,
    roaming: 7_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-05-10",
    number: "818",
    amount: 7.11, //
    net: 6_240,
    roaming: 2_910,
    min: 265,
    sms: 146,
  },
  {
    date: "2025-05-10",
    number: "828",
    amount: 0.48,
    net: 1_012,
    roaming: 5_520,
    min: 137, //
    sms: 87,
  },
  {
    date: "2025-05-10",
    number: "102",
    net: 150_000,
    roaming: 8_710,
  },

  {
    date: "2025-05-05",
    number: "183",
    // amount: 3.95,
    amount: 13.95, //
    net: 511,
    roaming: 2_910,
    min: "88:36",
    sms: 176,
  },
  {
    date: "2025-05-05",
    number: "938",
    // amount: 2.4,
    amount: 7.4, //
    // net: 2_590,
    net: 2_560,
    roaming: 1_450,
    min: 242,
    sms: 88,
  },
  {
    date: "2025-05-05",
    number: "379",
    // amount: 0.34,
    amount: 25.34, //
    // net: 4_110,
    net: 4_030,
    roaming: 7_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-05-05",
    number: "818",
    // amount: 2.11,
    amount: 7.11, //
    net: 6_410,
    roaming: 2_910,
    min: 265,
    sms: 146,
  },
  {
    date: "2025-05-05",
    number: "828",
    // amount: 1.27,
    // amount: 16.27, //
    amount: 1.27,
    net: 1_070,
    roaming: 8_140,
    // min: "37:49", // ?
    min: 137, //
    sms: 92,
  },
  {
    date: "2025-05-05",
    number: "102",
    net: 150_000,
    roaming: 8_710,
  },

  {
    date: "2025-05-01",
    number: "183",
    amount: 3.95,
    net: 729,
    roaming: 2_810,
    min: "90:21",
    sms: 176,
  },
  {
    date: "2025-05-01",
    number: "938",
    amount: 2.4,
    net: 2_590,
    roaming: 1_450,
    min: 242,
    sms: 88,
  },
  {
    date: "2025-05-01",
    number: "379",
    amount: 0.34,
    net: 4_230,
    roaming: 7_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-05-01",
    number: "818",
    amount: 2.11,
    net: 6_430,
    roaming: 2_910,
    min: 265,
    sms: 146,
  },
  {
    date: "2025-05-01",
    number: "828",
    amount: 1.27,
    net: 1_090,
    roaming: 8_140,
    min: "37:49", // ?
    sms: 100,
  },
  {
    date: "2025-05-01",
    number: "102",
    net: 150_000,
    roaming: 8_710,
  },

  {
    date: "2025-04-30",
    number: "183",
    amount: 3.95, //
    net: 748, //
    roaming: 2_820,
    min: "90:21",
    sms: 176,
  },
  {
    date: "2025-04-30",
    number: "938",
    amount: 2.4,
    net: 2_590, //
    roaming: 1_410,
    min: 242,
    sms: 88,
  },
  {
    date: "2025-04-30",
    number: "379",
    amount: 0.34, //
    net: 4_270,
    roaming: 7_050,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-04-30",
    number: "818",
    amount: 2.11,
    net: 6_430, //
    roaming: 2_820,
    min: 265,
    sms: 146,
  },
  {
    date: "2025-04-30",
    number: "828",
    // amount: 1.27, //
    // amount: 11.27,
    // amount: 6.27,
    amount: 1.27, //
    // net: 95, // ?
    net: 1_090, //
    roaming: 6_490,
    min: "37:49", // ?
    // sms: 0, // ?
    sms: 100, //
  },
  {
    date: "2025-04-30",
    number: "102",
    net: 146_370,
    roaming: 8_450,
  },

  {
    date: "2025-04-25",
    number: "183",
    amount: 3.95, //
    net: 1_040, //
    roaming: 2_820,
    min: "90:21",
    sms: 176,
  },
  {
    date: "2025-04-25",
    number: "938",
    amount: 2.4,
    net: 2_620, //
    roaming: 1_410,
    min: 242,
    sms: 88,
  },
  {
    date: "2025-04-25",
    number: "379",
    amount: 0.34, //
    net: 6_960,
    roaming: 7_050,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-04-25",
    number: "818",
    amount: 2.11,
    net: 6_500, //
    roaming: 2_820,
    min: 265,
    sms: 146,
  },
  {
    date: "2025-04-25",
    number: "828",
    amount: 1.27, //
    net: 317, // ?
    roaming: 6_490,
    min: "37:49", // ?
    sms: 31, // ?
  },
  {
    date: "2025-04-25",
    number: "102",
    net: 146_370,
    roaming: 8_450,
  },

  {
    date: "2025-04-20",
    number: "183",
    amount: 3.95, //
    net: 1_290, //
    roaming: 2_820,
    min: "91:00",
    sms: 176,
  },
  {
    date: "2025-04-20",
    number: "938",
    amount: 2.4,
    net: 2_650, //
    roaming: 1_410,
    min: 242,
    sms: 88,
  },
  {
    date: "2025-04-20",
    number: "379",
    amount: 0.34, //
    net: 8_080,
    roaming: 7_050,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-04-20",
    number: "818",
    amount: 2.11,
    net: 6_530, //
    roaming: 2_820,
    min: 265,
    sms: 146,
  },
  {
    date: "2025-04-20",
    number: "828",
    amount: 1.27, //
    net: 559, //
    roaming: 6_490,
    min: "38:29", // ?
    sms: 52, // ?
  },
  {
    date: "2025-04-20",
    number: "102",
    net: 146_370,
    roaming: 8_450,
  },

  {
    date: "2025-04-18",
    number: "183",
    // amount: 8.95, //
    amount: 3.95, //
    net: 1_410, //
    roaming: 2_820,
    min: "91:00",
    sms: 176,
  },

  {
    date: "2025-04-15",
    number: "183",
    amount: 8.95, //
    net: 668, // ?
    roaming: 1_410,
    min: "93:21",
    sms: 176,
  },
  {
    date: "2025-04-15",
    number: "938",
    amount: 2.4,
    net: 2_670, //
    roaming: 1_410,
    min: 242,
    sms: 116,
  },
  {
    date: "2025-04-15",
    number: "379",
    amount: 0.34, //
    net: 9_580,
    roaming: 7_050,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-04-15",
    number: "818",
    amount: 2.11,
    net: 6_570, //
    roaming: 2_820,
    min: 265,
    sms: 146,
  },
  {
    date: "2025-04-15",
    number: "828",
    amount: 1.27, //
    net: 1_120, //
    roaming: 6_490,
    min: "38:49", // ?
    sms: 68, // ?
  },
  {
    date: "2025-04-15",
    number: "102",
    net: 147_910,
    roaming: 8_450,
  },

  {
    date: "2025-04-10",
    number: "183",
    amount: 8.95, //
    net: 1_100,
    roaming: 952,
    min: 104,
    sms: 176,
  },
  {
    date: "2025-04-10",
    number: "938",
    amount: 2.4,
    net: 2_710, //
    roaming: 1_410,
    min: 242,
    sms: 116,
  },
  {
    date: "2025-04-10",
    number: "379",
    amount: 0.34, //
    net: 10_190,
    roaming: 7_050,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-04-10",
    number: "818",
    amount: 2.11,
    net: 6_590, //
    roaming: 2_820,
    min: 265,
    sms: 146,
  },
  {
    date: "2025-04-10",
    number: "828",
    // amount: 1.27, //
    // amount: 6.27, //
    amount: 1.27, //
    // net: 194,
    net: 1_180, //
    roaming: 5_070,
    min: "39:28", // ?
    sms: 70, //
  },
  {
    date: "2025-04-10",
    number: "102",
    net: 147_910,
    roaming: 8_450,
  },

  {
    date: "2025-04-05",
    number: "183",
    amount: 8.95, //
    net: 1_100,
    roaming: 1_410,
    min: 104,
    sms: 176,
  },
  {
    date: "2025-04-05",
    number: "938",
    // amount: 7.4,
    amount: 2.4,
    // net: 1_720,
    net: 2_720, //
    roaming: 1_410,
    min: 242,
    sms: 116,
  },
  {
    date: "2025-04-05",
    number: "379",
    // amount: 0.34,
    amount: 25.34, //
    // net: 2_560,
    net: 2_420,
    roaming: 7_050,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-04-05",
    number: "818",
    // amount: 7.11,
    amount: 2.11,
    // net: 5_600,
    net: 6_600, //
    roaming: 2_820,
    min: 265,
    sms: 146,
  },
  {
    date: "2025-04-05",
    number: "828",
    amount: 1.27, //
    net: 491,
    roaming: 7_610,
    min: "40:08", // ?
    sms: 96, //
  },
  {
    date: "2025-04-05",
    number: "102",
    net: 150_000,
    roaming: 8_450,
  },

  {
    date: "2025-04-01",
    number: "183",
    // amount: 3.95,
    amount: 8.95, //
    net: 1_500,
    min: 106,
    sms: 177,
  },
  {
    date: "2025-04-01",
    number: "938",
    amount: 7.4,
    net: 1_740,
    min: 242,
    sms: 116,
  },
  {
    date: "2025-04-01",
    number: "379",
    amount: 0.34,
    net: 3_380,
    roaming: 7_050,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-04-01",
    number: "818",
    amount: 7.11,
    net: 5_660,
    roaming: 1_410,
    min: 265,
    sms: 146,
  },
  {
    date: "2025-04-01",
    number: "828",
    // amount: 1.27,
    // amount: 6.27,
    amount: 1.27,
    net: 978,
    roaming: 7_610,
    min: "40:12", // ?
    // sms: 19,
    sms: 119, //
  },
  {
    date: "2025-04-01",
    number: "102",
    net: 150_000,
    roaming: 8_450,
  },

  {
    date: "2025-03-30",
    number: "183",
    amount: 3.95, //
    net: 1_500, //
    min: 106,
    sms: 177,
  },
  {
    date: "2025-03-30",
    number: "938",
    amount: 7.4, //
    net: 1_740,
    min: 261,
    sms: 116,
  },
  {
    date: "2025-03-30",
    number: "379",
    amount: 0.34, //
    net: 4_400,
    roaming: 7_050,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-03-30",
    number: "818",
    amount: 7.11,
    net: 5_670, //
    roaming: 1_410,
    min: 265,
    sms: 146,
  },
  {
    date: "2025-03-30",
    number: "828",
    amount: 1.27, //
    net: 1_030, //
    roaming: 7_610,
    min: "41:43", // ?
    sms: 20, // ?
  },
  {
    date: "2025-03-30",
    number: "102",
    net: 150_000,
    roaming: 8_450,
  },

  {
    date: "2025-03-25",
    number: "183",
    amount: 3.95, //
    net: 1_700, //
    min: 107,
    sms: 177,
  },
  {
    date: "2025-03-25",
    number: "938",
    amount: 7.4, //
    net: 1_770,
    min: 261,
    sms: 116,
  },
  {
    date: "2025-03-25",
    number: "379",
    amount: 0.34, //
    net: 5_110,
    roaming: 7_050,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-03-25",
    number: "818",
    amount: 7.11,
    net: 5_750, //
    roaming: 1_410,
    min: 265,
    sms: 146,
  },
  {
    date: "2025-03-25",
    number: "828",
    amount: 1.27, //
    net: 1_380, //
    roaming: 7_610,
    min: "43:37", // ?
    sms: 34, // ?
  },
  {
    date: "2025-03-25",
    number: "102",
    net: 150_000,
    roaming: 8_450,
  },

  {
    date: "2025-03-20",
    number: "183",
    amount: 3.95, //
    net: 1_900, //
    min: 107,
    sms: 177,
  },
  {
    date: "2025-03-20",
    number: "938",
    amount: 7.4, //
    net: 1_790,
    min: 261,
    sms: 116,
  },
  {
    date: "2025-03-20",
    number: "379",
    amount: 0.34, //
    net: 5_840,
    roaming: 7_050,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-03-20",
    number: "818",
    amount: 7.11,
    net: 5_780, //
    roaming: 1_410,
    min: 265,
    sms: 146,
  },
  {
    date: "2025-03-20",
    number: "828",
    amount: 1.27, //
    net: 1_640, //
    roaming: 7_610,
    min: "43:42", // ?
    sms: 59, // ?
  },
  {
    date: "2025-03-20",
    number: "102",
    net: 150_000,
    roaming: 8_450,
  },

  {
    date: "2025-03-15",
    number: "183",
    // amount: 8.95,
    amount: 3.95, //
    // net: 1_140,
    net: 2_140, //
    min: 109,
    sms: 177,
  },
  {
    date: "2025-03-15",
    number: "938",
    amount: 7.4, //
    net: 1_820,
    min: 261,
    sms: 116,
  },
  {
    date: "2025-03-15",
    number: "379",
    // amount: 25.34, //
    amount: 0.34, //
    net: 9_440,
    roaming: 7_050,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-03-15",
    number: "818",
    amount: 7.11,
    net: 5_820, //
    roaming: 1_410,
    min: 265,
    sms: 146,
  },
  {
    date: "2025-03-15",
    number: "828",
    amount: 2.06, //
    net: 1_700, //
    roaming: 7_610,
    min: "44:02", // ?
    sms: 78, // ?
  },
  {
    date: "2025-03-15",
    number: "102",
    net: 150_000,
    roaming: 8_450,
  },

  {
    date: "2025-03-10",
    number: "183",
    amount: 8.95,
    net: 1_230,
    min: 109,
    sms: 177,
  },
  {
    date: "2025-03-10",
    number: "938",
    amount: 7.4, //
    net: 1_830,
    min: 261,
    sms: 116,
  },
  {
    date: "2025-03-10",
    number: "379",
    // amount: 25.34, //
    amount: 0.34, //
    net: 10_190,
    roaming: 7_050,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-03-10",
    number: "818",
    amount: 7.11,
    net: 5_860, //
    roaming: 1_410,
    min: 265,
    sms: 155,
  },
  {
    date: "2025-03-10",
    number: "828",
    amount: 2.06, //
    net: 1_980, //
    roaming: 7_610,
    min: "44:02", // ?
    sms: 85, // ?
  },
  {
    date: "2025-03-10",
    number: "102",
    net: 150_000,
    roaming: 8_450,
  },

  {
    date: "2025-03-05",
    number: "183",
    amount: 8.95,
    net: 3_940,
    roaming: 2_820,
    min: 109,
    sms: 177,
  },
  {
    date: "2025-03-05",
    number: "938",
    // amount: 2.4,
    amount: 7.4, //
    net: 1_830,
    min: 261,
    sms: 117,
  },
  {
    date: "2025-03-05",
    number: "379",
    // amount: 0.34,
    amount: 25.34, //
    net: 6_080,
    roaming: 7_050,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-03-05",
    number: "818",
    // amount: 12.11,
    amount: 7.11,
    // net: 4_880,
    net: 5_880, //
    roaming: 0,
    min: 265,
    sms: 155,
  },
  {
    date: "2025-03-05",
    number: "828",
    // amount: 1.06,
    // amount: 11.06,
    amount: 2.06, //
    // net: 291,
    net: 2_280, //
    roaming: 5_070,
    min: "44:02", // ?
    sms: 89, // ?
  },
  {
    date: "2025-03-05",
    number: "102",
    net: 150_000,
    roaming: 8_450,
  },

  {
    date: "2025-03-01",
    number: "183",
    amount: 8.95,
    net: 4_000,
    roaming: 2_820,
    min: 109,
    sms: 177,
  },
  {
    date: "2025-03-01",
    number: "938",
    amount: 2.4,
    net: 1_850,
    min: 261,
    sms: 118,
  },
  {
    date: "2025-03-01",
    number: "379",
    amount: 0.34,
    net: 6_380,
    roaming: 7_050,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-03-01",
    number: "818",
    amount: 12.11,
    net: 4_910,
    roaming: 2_530,
    min: 265,
    sms: 155,
  },
  {
    date: "2025-03-01",
    number: "828",
    amount: 1.06,
    net: 835,
    roaming: 7_610,
    min: "44:54", // ?
    sms: 94,
  },
  {
    date: "2025-03-01",
    number: "102",
    net: 150_000,
    roaming: 8_450,
  },

  {
    date: "2025-02-25",
    number: "183",
    amount: 8.95,
    net: 4_270, //
    roaming: 2_790,
    min: 109,
    sms: 177, //
  },
  {
    date: "2025-02-25",
    number: "938",
    amount: 2.4,
    net: 1_880,
    min: 261, //
    sms: 118,
  },
  {
    date: "2025-02-25",
    number: "379",
    amount: 0.34, //
    net: 7_020,
    roaming: 6_390,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-02-25",
    number: "818",
    amount: 12.11, //
    net: 4_940,
    roaming: 2_530,
    min: 265,
    sms: 155,
  },
  {
    date: "2025-02-25",
    number: "828",
    amount: 1.06,
    net: 1_000,
    roaming: 7_610,
    min: "46:25", // ?
    sms: 95,
  },
  {
    date: "2025-02-25",
    number: "102",
    net: 149_310,
    roaming: 8_450,
  },

  {
    date: "2025-02-20",
    number: "183",
    amount: 8.95,
    net: 4_490, //
    roaming: 2_790,
    min: 109,
    sms: 177, //
  },
  {
    date: "2025-02-20",
    number: "938",
    amount: 2.4,
    net: 1_900,
    min: 261, //
    sms: 118,
  },
  {
    date: "2025-02-20",
    number: "379",
    amount: 0.34, //
    net: 8_420,
    roaming: 6_390,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-02-20",
    number: "818",
    amount: 12.11, //
    net: 4_970,
    roaming: 2_530,
    min: 265,
    sms: 155,
  },
  {
    date: "2025-02-20",
    number: "828",
    amount: 1.06,
    net: 1_270,
    roaming: 7_610,
    min: "46:25", // ?
    sms: 95,
  },
  {
    date: "2025-02-20",
    number: "102",
    net: 149_310,
    roaming: 8_450,
  },

  {
    date: "2025-02-15",
    number: "183",
    amount: 8.95,
    net: 4_820, //
    roaming: 5_170,
    min: 110,
    sms: 177, //
  },
  {
    date: "2025-02-15",
    number: "938",
    amount: 2.4,
    net: 1_910,
    min: 261, //
    sms: 118,
  },
  {
    date: "2025-02-15",
    number: "379",
    amount: 0.34, //
    net: 9_580,
    roaming: 6_400,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-02-15",
    number: "818",
    amount: 12.11, //
    net: 4_990,
    roaming: 2_530,
    min: 265,
    sms: 155,
  },
  {
    date: "2025-02-15",
    number: "828",
    amount: 1.06,
    net: 2_000,
    roaming: 7_610,
    min: "47:33", // ?
    sms: 98,
  },
  {
    date: "2025-02-15",
    number: "102",
    net: 149_310,
    roaming: 8_450,
  },

  {
    date: "2025-02-09",
    number: "183",
    amount: 8.95,
    net: 5_130, //
    roaming: 5_170,
    min: 119,
    sms: 178, //
  },
  {
    date: "2025-02-09",
    number: "938",
    amount: 2.4,
    net: 1_920,
    min: 261, //
    sms: 118,
  },
  {
    date: "2025-02-09",
    number: "379",
    amount: 25.34, //
    net: 4_210,
    roaming: 7_050,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-02-09",
    number: "818",
    amount: 12.11, //
    net: 4_990,
    roaming: 2_530,
    min: 265,
    sms: 155,
  },
  {
    date: "2025-02-09",
    number: "828",
    amount: 1.06,
    net: 2_000,
    roaming: 7_610,
    min: "47:33", // ?
    sms: 103,
  },
  {
    date: "2025-02-09",
    number: "102",
    net: 150_000,
    roaming: 8_450,
  },

  {
    date: "2025-02-08",
    number: "183",
    amount: 8.95,
    net: 5_300, //
    roaming: 5_340,
    min: 122,
    sms: 178, //
  },
  {
    date: "2025-02-08",
    number: "938",
    amount: 2.4,
    net: 1_920,
    min: 261, //
    sms: 118,
  },
  {
    date: "2025-02-08",
    number: "379",
    amount: 25.34, //
    net: 4_210,
    roaming: 7_050,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-02-08",
    number: "818",
    amount: 12.11, //
    net: 4_990,
    roaming: 2_530,
    min: 265,
    sms: 155,
  },
  {
    date: "2025-02-08",
    number: "828",
    amount: 1.06,
    net: 2_000,
    roaming: 7_610,
    min: "47:33", // ?
    sms: 103,
  },
  {
    date: "2025-02-08",
    number: "102",
    net: 150_000,
    roaming: 8_450,
  },

  {
    date: "2025-02-05",
    number: "183",
    // amount: 8.95,
    // amount: 18.95,
    amount: 8.95,
    // net: 1_430,
    net: 5_420, //
    min: 123,
    sms: 178, //
  },
  {
    date: "2025-02-05",
    number: "938",
    amount: 2.4,
    net: 1_920,
    min: 278, //
    sms: 118,
  },
  {
    date: "2025-02-05",
    number: "379",
    amount: 25.34, //
    net: 4_740,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-02-05",
    number: "818",
    // amount: 7.11,
    amount: 12.11, //
    net: 5_010,
    min: 265,
    sms: 155,
  },
  {
    date: "2025-02-05",
    number: "828",
    // amount: 0.06,
    // amount: 10.06, //
    amount: 1.06,
    // net: 160, // ?
    net: 2_150,
    min: "47:33", // ?
    sms: 111,
  },
  {
    date: "2025-02-05",
    number: "102",
    net: 150_000,
  },

  {
    date: "2025-02-01",
    number: "183",
    // amount: 3.95,
    // amount: 13.95, //
    amount: 8.95,
    net: 2_790,
    min: 123,
    // sms: 79,
    sms: 179, //
  },
  {
    date: "2025-02-01",
    number: "938",
    // amount: 17.4,
    amount: 2.4,
    net: 1_930,
    // min: 185,
    min: 285, //
    sms: 118,
  },
  {
    date: "2025-02-01",
    number: "379",
    // amount: 0.34,
    amount: 25.34, //
    net: 5_740,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-02-01",
    number: "818",
    amount: 7.11,
    net: 5_100,
    min: 265,
    sms: 155,
  },
  {
    date: "2025-02-01",
    number: "828",
    amount: 0.06,
    net: 311, // ?
    min: "47:33", // ?
    sms: 112,
  },
  {
    date: "2025-02-01",
    number: "102",
    net: 150_000,
  },

  {
    date: "2025-01-30",
    number: "183",
    amount: 3.95,
    net: 2_870,
    min: 123,
    sms: 79, // ?
  },
  {
    date: "2025-01-30",
    number: "938",
    amount: 17.4,
    net: 1_940,
    min: 185,
    sms: 118,
  },
  {
    date: "2025-01-30",
    number: "379",
    amount: 0.34,
    net: 5_950,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-01-30",
    number: "818",
    amount: 7.11,
    net: 5_110,
    min: 265,
    sms: 155,
  },
  {
    date: "2025-01-30",
    number: "828",
    amount: 0.06,
    net: 652, // ?
    min: "47:33", // ?
    sms: 112,
  },
  {
    date: "2025-01-30",
    number: "102",
    net: 142_020,
  },

  {
    date: "2025-01-25",
    number: "183",
    amount: 3.95,
    net: 3_830,
    min: 123,
    sms: 79, // ?
  },
  {
    date: "2025-01-25",
    number: "938",
    amount: 17.4,
    net: 1_950,
    min: 185,
    sms: 118,
  },
  {
    date: "2025-01-25",
    number: "379",
    amount: 0.34,
    net: 7_490,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-01-25",
    number: "818",
    amount: 7.11,
    net: 5_160,
    min: 265,
    sms: 155,
  },
  {
    date: "2025-01-25",
    number: "828",
    amount: 0.06,
    net: 1_040,
    min: "61:10",
    sms: 124,
  },
  {
    date: "2025-01-25",
    number: "102",
    net: 143_510,
  },

  {
    date: "2025-01-20",
    number: "183",
    amount: 3.95,
    net: 4_870,
    min: 127,
    sms: 79, // ?
  },
  {
    date: "2025-01-20",
    number: "938",
    amount: 17.4,
    net: 1_980,
    min: 185,
    sms: 118,
  },
  {
    date: "2025-01-20",
    number: "379",
    amount: 0.34,
    net: 8_360,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-01-20",
    number: "818",
    amount: 7.11,
    net: 5_200,
    min: 265,
    sms: 155,
  },
  {
    date: "2025-01-20",
    number: "828",
    amount: 0.06,
    net: 1_440,
    min: "61:24",
    sms: 126,
  },
  {
    date: "2025-01-20",
    number: "102",
    net: 143_740,
  },

  {
    date: "2025-01-15",
    number: "183",
    amount: 3.95,
    net: 5_080,
    min: 137,
    sms: 93, // ?
  },
  {
    date: "2025-01-15",
    number: "938",
    amount: 17.4,
    net: 1_990,
    min: 185,
    sms: 118,
  },
  {
    date: "2025-01-15",
    number: "379",
    amount: 0.34,
    net: 8_820,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-01-15",
    number: "818",
    amount: 7.11,
    net: 5_220,
    min: 265,
    sms: 161,
  },
  {
    date: "2025-01-15",
    number: "828",
    amount: 0.85,
    net: 1_850,
    min: "67:01",
    sms: 143,
  },
  {
    date: "2025-01-15",
    number: "102",
    net: 148_970,
  },

  {
    date: "2025-01-10",
    number: "183",
    amount: 3.95,
    net: 5_420,
    min: 137,
    sms: 95, // ?
  },
  {
    date: "2025-01-10",
    number: "938",
    amount: 17.4,
    net: 2_050,
    min: 185,
    sms: 118,
  },
  {
    date: "2025-01-10",
    number: "379",
    // amount: 25.34,
    amount: 0.34,
    net: 9_970,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-01-10",
    number: "818",
    amount: 7.11,
    net: 5_240,
    min: 265,
    sms: 161,
  },
  {
    date: "2025-01-10",
    number: "828",
    amount: 0.85,
    net: 1_910,
    min: "67:58",
    sms: 158,
  },

  {
    date: "2025-01-05",
    number: "183",
    // amount: 13.95,
    amount: 3.95,
    // net: 1_440,
    // net: 5_440,
    net: 5_420,
    min: 139,
    sms: 103,
  },
  {
    date: "2025-01-05",
    number: "938",
    amount: 17.4,
    net: 2_300,
    min: 185,
    sms: 132,
  },
  {
    date: "2025-01-05",
    number: "379",
    amount: 25.34,
    net: 6_430,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-01-05",
    number: "818",
    // amount: 2.11,
    amount: 7.11,
    net: 5_360,
    min: 265,
    sms: 162,
  },
  {
    date: "2025-01-05",
    number: "828",
    // amount: 0.64,
    // amount: 10.64,
    amount: 1.64,
    // net: 207,
    net: 2_200,
    min: "68:47",
    sms: 158,
  },

  {
    date: "2025-01-04",
    number: "183",
    amount: 13.95,
    net: 2_140,
    min: 139,
    sms: 108,
  },
  {
    date: "2025-01-04",
    number: "938",
    amount: 17.4,
    net: 2_670,
    min: 185,
    sms: 132,
  },
  {
    date: "2025-01-04",
    number: "379",
    amount: 25.34,
    net: 7_020,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-01-04",
    number: "818",
    amount: 2.11,
    net: 5_370,
    min: 265,
    sms: 162,
  },
  {
    date: "2025-01-04",
    number: "828",
    amount: 0.64,
    net: 463,
    min: "68:47",
    sms: 158,
  },

  {
    date: "2025-01-01",
    number: "183",
    // amount: 3.95,
    amount: 13.95,
    net: 2_220,
    min: 139,
    sms: 113,
  },
  {
    date: "2025-01-01",
    number: "938",
    // amount: 12.4,
    amount: 17.4,
    net: 2_680,
    min: 187,
    sms: 132,
  },
  {
    date: "2025-01-01",
    number: "379",
    // amount: 0.34,
    amount: 25.34,
    net: 7_410,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2025-01-01",
    number: "818",
    amount: 2.11,
    net: 5_370,
    min: 265,
    sms: 162,
  },
  {
    date: "2025-01-01",
    number: "828",
    amount: 0.64,
    net: 465,
    min: "68:47",
    sms: 158,
  },

  {
    date: "2024-12-30",
    number: "183",
    amount: 3.95,
    net: 2_400,
    min: 139,
    sms: 113,
  },
  {
    date: "2024-12-30",
    number: "938",
    amount: 12.4,
    net: 2_680,
    min: 187,
    sms: 133,
  },
  {
    date: "2024-12-30",
    number: "379",
    amount: 0.34,
    net: 7_490,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-12-30",
    number: "818",
    amount: 2.11,
    net: 5_380,
    min: 265,
    sms: 162,
  },
  {
    date: "2024-12-30",
    number: "828",
    amount: 1.43,
    net: 467,
    min: "68:47",
    sms: 162,
  },

  {
    date: "2024-12-25",
    number: "183",
    amount: 3.95,
    net: 3_030,
    min: 139,
    sms: 113,
  },
  {
    date: "2024-12-25",
    number: "938",
    amount: 12.4,
    net: 2_680,
    min: 187,
    sms: 133,
  },
  {
    date: "2024-12-25",
    number: "379",
    amount: 0.34,
    net: 8_280,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-12-25",
    number: "818",
    amount: 2.11,
    net: 5_390,
    min: 265,
    sms: 162,
  },
  {
    date: "2024-12-25",
    number: "828",
    amount: 1.43,
    net: 648,
    min: "68:47",
    sms: 165,
  },

  {
    date: "2024-12-20",
    number: "183",
    amount: 3.95,
    net: 3_380,
    min: 141,
    sms: 114,
  },
  {
    date: "2024-12-20",
    number: "938",
    amount: 13.19,
    net: 2_690,
    min: 188,
    sms: 143,
  },
  {
    date: "2024-12-20",
    number: "379",
    amount: 0.34,
    net: 8_670,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-12-20",
    number: "818",
    amount: 2.11,
    net: 5_400,
    min: 265,
    sms: 162,
  },
  {
    date: "2024-12-20",
    number: "828",
    amount: 1.43,
    net: 664,
    min: "69:43",
    sms: 165,
  },

  {
    date: "2024-12-15",
    number: "183",
    amount: 3.95,
    net: 4_760,
    min: 142,
    sms: 115,
  },
  {
    date: "2024-12-15",
    number: "938",
    amount: 13.19,
    net: 2_690,
    min: 203,
    sms: 143,
  },
  {
    date: "2024-12-15",
    number: "379",
    amount: 0.34,
    net: 9_250,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-12-15",
    number: "818",
    amount: 2.11,
    net: 5_450,
    min: 265,
    sms: 162,
  },
  {
    date: "2024-12-15",
    number: "828",
    amount: 1.43,
    net: 780,
    min: "69:43",
    sms: 165,
  },

  {
    date: "2024-12-10",
    number: "183",
    amount: 3.95,
    net: 5_040,
    min: 143,
    sms: 115,
  },
  {
    date: "2024-12-10",
    number: "938",
    amount: 13.19,
    net: 2_690,
    min: 209,
    sms: 143,
  },
  {
    date: "2024-12-10",
    number: "379",
    amount: 0.34,
    net: 10_190,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-12-10",
    number: "818",
    amount: 2.11,
    net: 5_510,
    min: 265,
    sms: 162,
  },
  {
    date: "2024-12-10",
    number: "828",
    amount: 1.43,
    net: 944,
    min: "74:51",
    sms: 165,
  },

  {
    date: "2024-12-05",
    number: "183",
    // amount: 13.95,
    amount: 3.95,
    // net: 1_420,
    net: 5_420,
    min: 144,
    sms: 115,
  },
  {
    date: "2024-12-05",
    number: "938",
    amount: 13.19,
    net: 2_700,
    min: 209,
    sms: 143,
  },
  {
    date: "2024-12-05",
    number: "379",
    amount: 25.34,
    net: 4_190,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-12-05",
    number: "818",
    amount: 2.11,
    net: 5_540,
    min: 265,
    sms: 162,
  },
  {
    date: "2024-12-05",
    number: "828",
    amount: 1.43,
    net: 969,
    min: "74:51",
    sms: 165,
  },

  {
    date: "2024-12-01",
    number: "183",
    // amount: 3.95,
    amount: 13.95,
    net: 2_150,
    min: 146,
    sms: 115,
  },
  {
    date: "2024-12-01",
    number: "938",
    // amount: 8.19,
    amount: 13.19,
    net: 2_700,
    min: 209,
    sms: 143,
  },
  {
    date: "2024-12-01",
    number: "379",
    // amount: 5.34,
    amount: 25.34,
    net: 5_010,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-12-01",
    number: "818",
    // amount: 11.11,
    amount: 2.11,
    // net: 3_630,
    net: 5_630,
    min: 265,
    sms: 162,
  },
  {
    date: "2024-12-01",
    number: "828",
    // amount: 5.43,
    // amount: 10.43,
    amount: 1.43,
    // net: 153, // !
    net: 2_130,
    min: "76:12",
    sms: 165,
  },

  {
    date: "2024-11-25",
    number: "183",
    amount: 3.95,
    net: 2_350,
    min: 146,
    sms: 115,
  },
  {
    date: "2024-11-25",
    number: "938",
    amount: 8.19,
    net: 2_720,
    min: 209,
    sms: 143,
  },
  {
    date: "2024-11-25",
    number: "379",
    amount: 5.34,
    net: 6_380,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-11-25",
    number: "818",
    amount: 11.11,
    net: 3_670,
    min: 265,
    sms: 162,
  },
  {
    date: "2024-11-25",
    number: "828",
    amount: 5.43,
    net: 676,
    min: "82:37",
    sms: 166,
  },

  {
    date: "2024-11-20",
    number: "183",
    amount: 3.95,
    net: 2_570,
    min: 146,
    sms: 115,
  },
  {
    date: "2024-11-20",
    number: "938",
    amount: 8.19,
    net: 2_720,
    min: 209,
    sms: 143,
  },
  {
    date: "2024-11-20",
    number: "379",
    amount: 5.34,
    net: 7_830,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-11-20",
    number: "818",
    amount: 11.11,
    net: 3_740,
    min: 265,
    sms: 162,
  },
  {
    date: "2024-11-20",
    number: "828",
    amount: 5.43,
    net: 990,
    min: "84:36",
    sms: 166,
  },

  {
    date: "2024-11-15",
    number: "183",
    // amount: 12.95,
    amount: 3.95,
    // net: 661,
    net: 2_640,
    min: 146,
    sms: 115,
  },
  {
    date: "2024-11-15",
    number: "938",
    amount: 8.19,
    net: 2_730,
    min: 209,
    sms: 143,
  },
  {
    date: "2024-11-15",
    number: "379",
    amount: 5.34,
    net: 8_540,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-11-15",
    number: "818",
    amount: 11.11,
    net: 3_770,
    min: 265,
    sms: 162,
  },
  {
    date: "2024-11-15",
    number: "828",
    amount: 5.43,
    net: 1_100,
    min: "87:30",
    sms: 166,
  },

  {
    date: "2024-11-10",
    number: "183",
    amount: 7.95,
    net: 827,
    min: 146,
    sms: 116,
  },
  {
    date: "2024-11-10",
    number: "938",
    amount: 8.19,
    net: 2_730,
    min: 209,
    sms: 143,
  },
  {
    date: "2024-11-10",
    number: "379",
    amount: 0.34,
    net: 10_190,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-11-10",
    number: "818",
    amount: 11.11,
    net: 3_800,
    min: 265,
    sms: 162,
  },
  {
    date: "2024-11-10",
    number: "828",
    amount: 5.43,
    net: 1_710,
    min: "87:42",
    sms: 166,
  },

  {
    date: "2024-11-05",
    number: "183",
    amount: 7.95,
    net: 1_010,
    min: 148,
    sms: 116,
  },
  {
    date: "2024-11-05",
    number: "938",
    amount: 8.19,
    net: 2_730,
    min: 209,
    sms: 143,
  },
  {
    date: "2024-11-05",
    number: "379",
    amount: 25.34,
    net: 4_160,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-11-05",
    number: "818",
    amount: 11.11,
    net: 3_850,
    min: 265,
    sms: 162,
  },
  {
    date: "2024-11-05",
    number: "828",
    amount: 5.43,
    net: 2_000,
    min: "88:18",
    sms: 166,
  },

  {
    date: "2024-11-01",
    number: "183",
    // amount: 12.95,
    // amount: 22.95,
    amount: 7.95,
    net: 1_200,
    // min: "48:23",
    min: 148,
    sms: 116,
  },
  {
    date: "2024-11-01",
    number: "938",
    // amount: 17.19,
    amount: 8.19,
    // net: 769,
    net: 2_750,
    min: 209,
    sms: 143,
  },
  {
    date: "2024-11-01",
    number: "379",
    // amount: 0.34,
    amount: 25.34,
    net: 4_720,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-11-01",
    number: "818",
    // amount: 6.11,
    amount: 11.11,
    net: 3_870,
    min: 265,
    sms: 162,
  },
  {
    date: "2024-11-01",
    number: "828",
    // amount: 0.43,
    amount: 5.43,
    net: 2_260,
    min: "88:18",
    sms: 166,
  },

  {
    date: "2024-10-30",
    number: "183",
    amount: 12.95,
    net: 1_260,
    min: "49:26", // ?
    sms: 116,
  },
  {
    date: "2024-10-30",
    number: "938",
    amount: 17.19,
    net: 779,
    min: 209,
    sms: 143,
  },
  {
    date: "2024-10-30",
    number: "379",
    amount: 0.34,
    net: 5_940,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-10-30",
    number: "818",
    amount: 6.11,
    net: 3_870,
    min: 265,
    sms: 162,
  },
  {
    date: "2024-10-30",
    number: "828",
    amount: 0.43,
    net: 2_570,
    min: "94:36",
    sms: 166,
  },

  {
    date: "2024-10-25",
    number: "183",
    amount: 12.95,
    net: 1_880,
    min: "58:09",
    sms: 116,
  },
  {
    date: "2024-10-25",
    number: "938",
    amount: 17.19,
    net: 1_070,
    min: 214,
    sms: 143,
  },
  {
    date: "2024-10-25",
    number: "379",
    amount: 0.34,
    net: 6_640,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-10-25",
    number: "818",
    amount: 6.11,
    net: 3_920,
    min: 265,
    sms: 162,
  },
  {
    date: "2024-10-25",
    number: "828",
    amount: 0.43,
    net: 3_040,
    min: 103,
    sms: 166,
  },

  {
    date: "2024-10-20",
    number: "183",
    amount: 12.95,
    net: 1_880,
    min: "58:14",
    sms: 116,
  },
  {
    date: "2024-10-20",
    number: "938",
    amount: 17.19,
    net: 1_080,
    min: 220,
    sms: 143,
  },
  {
    date: "2024-10-20",
    number: "379",
    amount: 0.34,
    net: 7_760,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-10-20",
    number: "818",
    amount: 6.11,
    net: 3_960,
    min: 265,
    sms: 162,
  },
  {
    date: "2024-10-20",
    number: "828",
    amount: 0.43,
    net: 3_620,
    min: 103,
    sms: 166,
  },

  {
    date: "2024-10-15",
    number: "183",
    amount: 12.95,
    // net: 1_990,
    net: 1_940,
    // min: "76:57",
    min: "58:14",
    sms: 116,
  },
  {
    date: "2024-10-15",
    number: "938",
    // amount: 17.98,
    amount: 17.19,
    net: 1_080,
    min: 222,
    sms: 143,
  },
  {
    date: "2024-10-15",
    number: "379",
    amount: 0.34,
    // net: 9_270,
    net: 9_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-10-15",
    number: "818",
    amount: 6.11,
    // net: 4_000,
    net: 3_990,
    min: 265,
    sms: 162,
  },
  {
    date: "2024-10-15",
    number: "828",
    amount: 0.43,
    net: 3_670,
    min: 104,
    sms: 166,
  },

  {
    date: "2024-10-10",
    number: "183",
    amount: 12.95,
    net: 2_100,
    min: "93:49",
    sms: 117,
  },
  {
    date: "2024-10-10",
    number: "938",
    amount: 17.98,
    net: 1_140,
    min: 222,
    sms: 143,
  },
  {
    date: "2024-10-10",
    number: "379",
    amount: 0.34,
    net: 6_050,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-10-10",
    number: "818",
    amount: 6.11,
    net: 4_030,
    min: 265,
    sms: 162,
  },
  {
    date: "2024-10-10",
    number: "828",
    amount: 0.43,
    net: 3_720,
    min: 104,
    sms: 166,
  },

  {
    date: "2024-10-05",
    number: "183",
    // amount: 2.95,
    amount: 12.95,
    net: 2_200,
    min: "98:24",
    sms: 117,
  },
  {
    date: "2024-10-05",
    number: "938",
    // amount: 12.98,
    amount: 17.98,
    net: 1_140,
    min: 222,
    sms: 143,
  },
  {
    date: "2024-10-05",
    number: "379",
    // amount: 2.34,
    amount: 25.34,
    net: 6_050,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-10-05",
    number: "818",
    // amount: 11.11,
    amount: 6.11,
    // net: 3_110,
    net: 4_110,
    min: 265,
    sms: 162,
  },
  {
    date: "2024-10-05",
    number: "828",
    // amount: 4.43,
    // amount: 9.43,
    amount: 0.43,
    // net: 1_800,
    net: 3_800,
    min: 104,
    sms: 166,
  },

  {
    date: "2024-10-01",
    number: "183",
    amount: 2.95,
    net: 2_260,
    min: "98:24",
    sms: 118,
  },
  {
    date: "2024-10-01",
    number: "938",
    amount: 12.98,
    net: 1_140,
    min: 224,
    sms: 144,
  },
  {
    date: "2024-10-01",
    number: "379",
    amount: 2.34,
    net: 6_730,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-10-01",
    number: "818",
    amount: 11.11,
    net: 3_130,
    min: 265,
    sms: 162,
  },
  {
    date: "2024-10-01",
    number: "828",
    amount: 4.43,
    net: 1_850,
    min: 104,
    sms: 166,
  },

  {
    date: "2024-09-25",
    number: "183",
    // amount: 11.95,
    amount: 2.95,
    // net: 581,
    net: 2_560,
    min: "98:24",
    sms: 118,
  },
  {
    date: "2024-09-25",
    number: "938",
    amount: 12.98,
    net: 1_150,
    min: 226,
    sms: 144,
  },
  {
    date: "2024-09-25",
    number: "379",
    amount: 2.34,
    net: 8_140,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-09-25",
    number: "818",
    amount: 11.11,
    net: 3_240,
    min: 266,
    sms: 162,
  },
  {
    date: "2024-09-25",
    number: "828",
    // amount: 3.43,
    // amount: 13.43,
    amount: 4.43,
    // net: 53,
    // net: 38,
    net: 2_030,
    min: 104,
    sms: 166,
  },

  {
    date: "2024-09-20",
    number: "183",
    amount: 11.95,
    net: 708,
    min: "98:24",
    sms: 118,
  },
  {
    date: "2024-09-20",
    number: "938",
    amount: 12.98,
    net: 1_150,
    min: 226,
    sms: 144,
  },
  {
    date: "2024-09-20",
    number: "379",
    amount: 2.34,
    net: 8_730,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-09-20",
    number: "818",
    amount: 11.11,
    net: 3_270,
    min: 266,
    sms: 162,
  },
  {
    date: "2024-09-20",
    number: "828",
    // amount: 3.45,
    // amount: 8.45,
    amount: 3.43,
    // net: 0,
    net: 1_000,
    min: 107,
    sms: 166,
  },

  {
    date: "2024-09-15",
    number: "183",
    amount: 11.95,
    net: 819,
    min: "98:51",
    sms: 118,
  },
  {
    date: "2024-09-15",
    number: "938",
    amount: 12.98,
    net: 1_160,
    min: 226,
    sms: 144,
  },
  {
    date: "2024-09-15",
    number: "379",
    amount: 2.34,
    net: 9_690,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-09-15",
    number: "818",
    amount: 11.11,
    net: 3_570,
    min: 266,
    sms: 162,
  },
  {
    date: "2024-09-15",
    number: "828",
    amount: 12.21,
    net: 753,
    min: 107,
    sms: 166,
  },

  {
    date: "2024-09-10",
    number: "183",
    amount: 11.95,
    net: 1_009,
    min: "98:51",
    sms: 118,
  },
  {
    date: "2024-09-10",
    number: "938",
    amount: 12.98,
    net: 1_170,
    min: 226,
    sms: 144,
  },
  {
    date: "2024-09-10",
    number: "379",
    amount: 2.34,
    net: 10_110,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-09-10",
    number: "818",
    amount: 11.11,
    net: 3_620,
    min: 266,
    sms: 162,
  },
  {
    date: "2024-09-10",
    number: "828",
    amount: 12.21,
    net: 888,
    min: 108,
    sms: 166,
  },

  {
    date: "2024-09-05",
    number: "183",
    amount: 11.95,
    net: 4_080,
    min: "98:51",
    sms: 118,
  },
  {
    date: "2024-09-05",
    number: "938",
    amount: 12.98,
    net: 1_180,
    min: 226,
    sms: 144,
  },
  {
    date: "2024-09-05",
    number: "379",
    // amount: 27.72,
    // amount: 22.34,
    amount: 27.34,
    // net: 0,
    net: 937,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-09-05",
    number: "818",
    amount: 11.11,
    net: 3_670,
    min: 266,
    sms: 162,
  },
  {
    date: "2024-09-05",
    number: "828",
    amount: 12.21,
    net: 1_013,
    min: 112,
    sms: 166,
  },

  {
    date: "2024-09-01",
    number: "183",
    // amount: 1.95,
    amount: 11.95,
    net: 4_150,
    min: 107,
    sms: 118,
  },
  {
    date: "2024-09-01",
    number: "938",
    // amount: 7.98,
    amount: 12.98,
    net: 1_180,
    min: 226,
    sms: 144,
  },
  {
    date: "2024-09-01",
    number: "379",
    // amount: 2.72,
    amount: 27.72,
    // net: 884,
    net: 879,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-09-01",
    number: "818",
    // amount: 16.11,
    amount: 11.11,
    // net: 2_720,
    net: 3_720,
    min: 266,
    sms: 162,
  },
  {
    date: "2024-09-01",
    number: "828",
    // amount: 7.21,
    amount: 12.21,
    net: 1_080,
    min: 116,
    sms: 166,
  },

  {
    date: "2024-08-30",
    number: "183",
    amount: 1.95,
    net: 4_190,
    min: 107,
    sms: 118,
  },
  {
    date: "2024-08-30",
    number: "938",
    amount: 7.98,
    net: 1_180,
    min: 226,
    sms: 144,
  },
  {
    date: "2024-08-30",
    number: "379",
    amount: 2.72,
    net: 1_120,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-08-30",
    number: "818",
    amount: 16.11,
    net: 2_720,
    min: 266,
    sms: 162,
  },
  {
    date: "2024-08-30",
    number: "828",
    amount: 7.21,
    net: 1_090,
    min: 116,
    sms: 166,
  },

  {
    date: "2024-08-25",
    number: "183",
    amount: 1.95,
    net: 4_320,
    min: 107,
    sms: 118,
  },
  {
    date: "2024-08-25",
    number: "938",
    amount: 7.98,
    net: 1_190,
    min: 226,
    sms: 144,
  },
  {
    date: "2024-08-25",
    number: "379",
    amount: 2.72,
    net: 4_680,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-08-25",
    number: "818",
    amount: 16.11,
    net: 2_740,
    min: 266,
    sms: 162,
  },
  {
    date: "2024-08-25",
    number: "828",
    amount: 7.21,
    net: 1_130,
    min: 116,
    sms: 166,
  },

  {
    date: "2024-08-20",
    number: "183",
    amount: 1.95,
    net: 4_570,
    min: 110,
    sms: 118,
  },
  {
    date: "2024-08-20",
    number: "938",
    amount: 7.98,
    net: 1_190,
    min: 226,
    sms: 144,
  },
  {
    date: "2024-08-20",
    number: "379",
    amount: 2.72,
    net: 6_480,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-08-20",
    number: "818",
    amount: 16.11,
    net: 2_840,
    min: 266,
    sms: 162,
  },
  {
    date: "2024-08-20",
    number: "828",
    amount: 7.21,
    net: 1_310,
    min: 116,
    sms: 166,
  },

  {
    date: "2024-08-15",
    number: "183",
    amount: 1.95,
    net: 4_710,
    min: 110,
    sms: 122,
  },
  {
    date: "2024-08-15",
    number: "938",
    amount: 7.98,
    net: 1_200,
    min: 226,
    sms: 144,
  },
  {
    date: "2024-08-15",
    number: "379",
    amount: 2.72,
    net: 7_970,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-08-15",
    number: "818",
    amount: 16.11,
    net: 2_840,
    min: 266,
    sms: 162,
  },
  {
    date: "2024-08-15",
    number: "828",
    amount: 7.21,
    net: 1_370,
    min: 116,
    sms: 166,
  },

  {
    date: "2024-08-10",
    number: "183",
    // amount: 6.95,
    // amount: 11.95,
    amount: 1.95,
    // net: 988,
    net: 4_960,
    min: 110,
    sms: 128,
  },
  {
    date: "2024-08-10",
    number: "938",
    amount: 7.98,
    net: 1_210,
    min: 226,
    sms: 144,
  },
  {
    date: "2024-08-10",
    number: "379",
    amount: 2.72,
    net: 10_540,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-08-10",
    number: "818",
    amount: 16.11,
    net: 2_840,
    min: 266,
    sms: 162,
  },
  {
    date: "2024-08-10",
    number: "828",
    amount: 7.21,
    net: 1_630,
    min: 116,
    sms: 166,
  },

  {
    date: "2024-08-05",
    number: "183",
    amount: 6.95,
    net: 1_290,
    min: 110,
    sms: 128,
  },
  {
    date: "2024-08-05",
    number: "938",
    amount: 7.98,
    net: 1_240,
    min: 226,
    sms: 144,
  },
  {
    date: "2024-08-05",
    number: "379",
    amount: 27.72,
    net: 1_140,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-08-05",
    number: "818",
    amount: 16.11,
    net: 2_870,
    min: 266,
    sms: 162,
  },
  {
    date: "2024-08-05",
    number: "828",
    amount: 7.21,
    net: 1_720,
    min: 116,
    sms: 166,
  },

  {
    date: "2024-08-02",
    number: "183",
    amount: 6.95,
    net: 1_420,
    min: 110,
    sms: 128,
  },
  {
    date: "2024-08-02",
    number: "938",
    amount: 7.98,
    net: 1_240,
    min: 228,
    sms: 144,
  },
  {
    date: "2024-08-02",
    number: "379",
    // amount: 27.72,
    // amount: 22.72,
    amount: 27.72,
    // net: 198, // ?
    net: 1_190,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-08-02",
    number: "818",
    amount: 16.11,
    net: 2_870,
    min: 266,
    sms: 162,
  },
  {
    date: "2024-08-02",
    number: "828",
    amount: 7.21,
    net: 1_730,
    min: 116,
    sms: 166,
  },

  {
    date: "2024-08-01",
    number: "183",
    // amount: 1.95,
    // amount: 11.95,
    amount: 6.95,
    net: 1_660,
    min: 111,
    // sms: 28, // ?
    sms: 128,
  },
  {
    date: "2024-08-01",
    number: "938",
    // amount: 2.98,
    amount: 7.98,
    net: 1_240,
    min: 228,
    sms: 144,
  },
  {
    date: "2024-08-01",
    number: "379",
    // amount: 2.72,
    amount: 27.72,
    // net: 419, // ?
    // net: 398, // ?
    net: 373, // ?
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-08-01",
    number: "818",
    // amount: 11.11,
    amount: 16.11,
    net: 2_900,
    min: 266,
    sms: 162,
  },
  {
    date: "2024-08-01",
    number: "828",
    // amount: 2.21,
    amount: 7.21,
    net: 1_730,
    min: 116,
    sms: 166,
  },

  {
    date: "2024-07-30",
    number: "183",
    amount: 1.95,
    net: 3_250,
    min: 112,
    sms: 28, // ?
  },
  {
    date: "2024-07-30",
    number: "938",
    amount: 2.98,
    net: 1_260,
    min: 228,
    sms: 144,
  },
  {
    date: "2024-07-30",
    number: "379",
    amount: 2.72,
    net: 567, // ?
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-07-30",
    number: "818",
    amount: 11.11,
    net: 2_950,
    min: 266,
    sms: 162,
  },
  {
    date: "2024-07-30",
    number: "828",
    amount: 2.21,
    net: 1_730,
    min: 116,
    sms: 166,
  },

  {
    date: "2024-07-25",
    number: "183",
    amount: 1.95,
    net: 3_400,
    min: 112,
    sms: 28, // ?
  },
  {
    date: "2024-07-25",
    number: "938",
    amount: 2.98,
    net: 1_280,
    min: 230,
    sms: 144,
  },
  {
    date: "2024-07-25",
    number: "379",
    amount: 2.72,
    net: 899,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-07-25",
    number: "818",
    amount: 11.11,
    net: 3_150,
    min: 266,
    sms: 162,
  },
  {
    date: "2024-07-25",
    number: "828",
    amount: 2.21,
    net: 1_760,
    min: 116,
    sms: 166,
  },

  {
    date: "2024-07-20",
    number: "183",
    amount: 1.95,
    net: 3_460,
    min: 112,
    sms: 28, // ?
  },
  {
    date: "2024-07-20",
    number: "938",
    amount: 2.98,
    net: 1_280,
    min: 230,
    sms: 144,
  },
  {
    date: "2024-07-20",
    number: "379",
    // amount: 2.72,
    // amount: 7.72,
    amount: 2.72,
    // net: 82,
    net: 1_080,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-07-20",
    number: "818",
    amount: 11.11,
    net: 3_160,
    min: 266,
    sms: 162,
  },
  {
    date: "2024-07-20",
    number: "828",
    // amount: 2.21,
    // amount: 7.21,
    amount: 2.21,
    // net: 793,
    net: 1_770,
    min: 116,
    sms: 166,
  },

  {
    date: "2024-07-15",
    number: "183",
    amount: 1.95,
    net: 3_880,
    min: 112,
    sms: 33, // ?
  },
  {
    date: "2024-07-15",
    number: "938",
    amount: 2.98,
    net: 1_490,
    min: 230,
    sms: 144,
  },
  {
    date: "2024-07-15",
    number: "379",
    amount: 2.72,
    net: 2_570,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-07-15",
    number: "818",
    amount: 11.11,
    net: 3_220,
    min: 266,
    sms: 162,
  },
  {
    date: "2024-07-15",
    number: "828",
    amount: 2.21,
    net: 1_300,
    min: 116,
    sms: 166,
  },

  {
    date: "2024-07-11",
    number: "183",
    amount: 1.95,
    net: 5_010,
    min: 113,
    sms: 33, // ?
  },
  {
    date: "2024-07-11",
    number: "938",
    amount: 2.98,
    net: 1_510,
    min: 230,
    sms: 144,
  },
  {
    date: "2024-07-11",
    number: "379",
    amount: 2.72,
    net: 8_560,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-07-11",
    number: "818",
    amount: 11.11,
    net: 3_360,
    min: 266,
    sms: 162,
  },
  {
    date: "2024-07-11",
    number: "828",
    amount: 7.21,
    net: 1_450,
    min: 116,
    sms: 166,
  },

  {
    date: "2024-07-05",
    number: "183",
    amount: 1.95,
    net: 5_530,
    min: 117,
    sms: 33, // ?
  },
  {
    date: "2024-07-05",
    number: "938",
    amount: 2.98,
    net: 1_590,
    min: 230,
    sms: 144,
  },
  {
    date: "2024-07-05",
    number: "379",
    amount: 27.72,
    net: 5_530,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-07-05",
    number: "818",
    amount: 11.11,
    net: 3_440,
    min: 266,
    sms: 162,
  },
  {
    date: "2024-07-05",
    number: "828",
    amount: 7.21,
    net: 2_740,
    min: 116,
    sms: 166,
  },

  {
    date: "2024-07-01",
    number: "183",
    // amount: 1.95,
    // amount: 11.95,
    amount: 1.95,
    // net: 1_630,
    net: 5_630,
    min: 117,
    sms: 33, // ?
  },
  {
    date: "2024-07-01",
    number: "938",
    // amount: 2.98,
    // amount: 7.98,
    amount: 2.98,
    // net: 653,
    net: 1_630,
    min: 230,
    sms: 144,
  },
  {
    date: "2024-07-01",
    number: "379",
    // amount: 2.72,
    amount: 27.72,
    net: 6_590,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-07-01",
    number: "818",
    // amount: 6.11,
    amount: 11.11,
    net: 3_450,
    min: 266,
    sms: 162,
  },
  {
    date: "2024-07-01",
    number: "828",
    // amount: 2.21,
    amount: 7.21,
    net: 2_750,
    min: 116,
    sms: 166,
  },

  {
    date: "2024-06-30",
    number: "183",
    amount: 1.95,
    net: 1_870,
    min: 117,
    sms: 33, // ?
  },
  {
    date: "2024-06-30",
    number: "938",
    amount: 2.98,
    net: 654,
    min: 230,
    sms: 144,
  },
  {
    date: "2024-06-30",
    number: "379",
    amount: 2.72,
    net: 6_730,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-06-30",
    number: "818",
    amount: 6.11,
    net: 3_450,
    min: 266,
    sms: 162,
  },
  {
    date: "2024-06-30",
    number: "828",
    amount: 2.21,
    net: 2_750,
    min: 116,
    sms: 166,
  },

  {
    date: "2024-06-25",
    number: "183",
    amount: 1.95,
    net: 1_980,
    min: 118,
    sms: 36, // ?
  },
  {
    date: "2024-06-25",
    number: "938",
    amount: 2.98,
    net: 1_011,
    min: 230,
    sms: 144,
  },
  {
    date: "2024-06-25",
    number: "379",
    amount: 2.72,
    net: 7_300,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-06-25",
    number: "818",
    amount: 6.11,
    net: 3_460,
    min: 266,
    sms: 162,
  },
  {
    date: "2024-06-25",
    number: "828",
    // amount: 2.21,
    // amount: 12.21,
    amount: 2.21,
    // net: 945,
    net: 4_920,
    min: 116,
    sms: 166,
  },

  {
    date: "2024-06-20",
    number: "183",
    amount: 1.95,
    net: 2_100,
    min: 119,
    sms: 36, // ?
  },
  {
    date: "2024-06-20",
    number: "938",
    amount: 5.35,
    net: 1_090,
    min: 236,
    sms: 147,
  },
  {
    date: "2024-06-20",
    number: "379",
    amount: 2.72,
    net: 8_590,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-06-20",
    number: "818",
    amount: 6.11,
    net: 3_490,
    min: 266,
    sms: 167,
  },
  {
    date: "2024-06-20",
    number: "828",
    amount: 2.21,
    net: 2_390,
    min: 116,
    sms: 166,
  },

  {
    date: "2024-06-15",
    number: "183",
    amount: 1.95,
    net: 2_250,
    min: 119,
    sms: 36, // ?
  },
  {
    date: "2024-06-15",
    number: "938",
    amount: 5.35,
    net: 1_090,
    min: 236,
    sms: 148,
  },
  {
    date: "2024-06-15",
    number: "379",
    amount: 2.72,
    net: 9_380,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-06-15",
    number: "818",
    amount: 6.11,
    net: 3_540,
    min: 266,
    sms: 167,
  },
  {
    date: "2024-06-15",
    number: "828",
    amount: 2.21,
    net: 2_610,
    min: 116,
    sms: 166,
  },

  {
    date: "2024-06-10",
    number: "183",
    // amount: 6.95,
    // amount: 16.95,
    amount: 1.95,
    net: 2_280,
    // min: "19:07", // ?
    min: 119,
    sms: 36, // ?
  },
  {
    date: "2024-06-10",
    number: "938",
    amount: 5.35,
    net: 1_390,
    min: 236,
    sms: 149,
  },
  {
    date: "2024-06-10",
    number: "379",
    amount: 2.72,
    net: 9_970,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-06-10",
    number: "818",
    amount: 6.11,
    net: 3_580,
    min: 266,
    sms: 167,
  },
  {
    date: "2024-06-10",
    number: "828",
    amount: 2.21,
    net: 2_890,
    min: 116,
    sms: 166,
  },

  {
    date: "2024-06-05",
    number: "183",
    amount: 6.95,
    net: 2_520,
    min: "25:49", // ?
    sms: 36, // ?
  },
  {
    date: "2024-06-05",
    number: "938",
    amount: 5.35,
    net: 1_600,
    min: 236,
    sms: 149,
  },
  {
    date: "2024-06-05",
    number: "379",
    amount: 27.72,
    net: 3_300,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-06-05",
    number: "818",
    amount: 6.11,
    net: 3_620,
    min: 266,
    sms: 167,
  },
  {
    date: "2024-06-05",
    number: "828",
    amount: 2.21,
    net: 3_010,
    min: 116,
    sms: 166,
  },

  {
    date: "2024-06-01",
    number: "183",
    // amount: 15.95,
    amount: 6.95,
    // net: 629, // ?
    net: 2_610,
    min: "65:16",
    sms: 36, // ?
  },
  {
    date: "2024-06-01",
    number: "938",
    // amount: 0.35,
    amount: 5.35,
    net: 1_600,
    min: 236,
    sms: 149,
  },
  {
    date: "2024-06-01",
    number: "379",
    // amount: 2.72,
    amount: 27.72,
    net: 4_870,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-06-01",
    number: "818",
    // amount: 1.11,
    amount: 6.11,
    net: 3_620,
    min: 266,
    sms: 167,
  },
  {
    date: "2024-06-01",
    number: "828",
    // amount: 11.21,
    amount: 2.21,
    // net: 1_010,
    net: 3_010,
    min: 116,
    sms: 167,
  },

  {
    date: "2024-05-30",
    number: "183",
    amount: 15.95,
    net: 713,
    min: "65:16",
    sms: 36, // ?
  },
  {
    date: "2024-05-30",
    number: "938",
    amount: 0.35,
    net: 1_600,
    min: 236,
    sms: 149,
  },
  {
    date: "2024-05-30",
    number: "379",
    amount: 2.72,
    net: 5_280,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-05-30",
    number: "818",
    amount: 1.11,
    net: 3_630,
    min: 266,
    sms: 167,
  },
  {
    date: "2024-05-30",
    number: "828",
    amount: 11.21,
    net: 1_320,
    min: 118,
    sms: 167,
  },

  {
    date: "2024-05-25",
    number: "183",
    amount: 15.95,
    net: 914,
    min: "81:50",
    sms: 37, // ?
  },
  {
    date: "2024-05-25",
    number: "938",
    amount: 0.35,
    net: 1_600,
    min: 236,
    sms: 149,
  },
  {
    date: "2024-05-25",
    number: "379",
    amount: 2.72,
    net: 6_150,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-05-25",
    number: "818",
    amount: 1.11,
    net: 3_640,
    min: 266,
    sms: 167,
  },
  {
    date: "2024-05-25",
    number: "828",
    amount: 11.21,
    net: 1_370,
    min: 120,
    sms: 167,
  },

  {
    date: "2024-05-20",
    number: "183",
    amount: 15.95,
    net: 1_005,
    min: "82:00",
    sms: 37, // ?
  },
  {
    date: "2024-05-20",
    number: "938",
    amount: 0.35,
    net: 1_600,
    min: 236,
    sms: 150,
  },
  {
    date: "2024-05-20",
    number: "379",
    amount: 2.72,
    net: 6_890,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-05-20",
    number: "818",
    amount: 1.11,
    net: 3_720,
    min: 266,
    sms: 167,
  },
  {
    date: "2024-05-20",
    number: "828",
    amount: 11.21,
    net: 1_630,
    min: 122,
    sms: 167,
  },

  {
    date: "2024-05-15",
    number: "183",
    amount: 15.95,
    net: 1_240,
    min: "95:49",
    sms: 39, // ?
  },
  {
    date: "2024-05-15",
    number: "938",
    amount: 0.35,
    net: 1_600,
    min: 236,
    sms: 150,
  },
  {
    date: "2024-05-15",
    number: "379",
    amount: 2.72,
    net: 7_960,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-05-15",
    number: "818",
    amount: 1.11,
    net: 3_740,
    min: 266,
    sms: 167,
  },
  {
    date: "2024-05-15",
    number: "828",
    amount: 11.21,
    net: 1_690,
    min: 122,
    sms: 167,
  },

  {
    date: "2024-05-10",
    number: "183",
    amount: 15.95,
    net: 1_430,
    min: "95:49",
    sms: 50, // ?
  },
  {
    date: "2024-05-10",
    number: "938",
    amount: 0.35,
    net: 1_600,
    min: 238,
    sms: 152,
  },
  {
    date: "2024-05-10",
    number: "379",
    amount: 2.72,
    net: 10_020,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-05-10",
    number: "818",
    amount: 1.11,
    net: 3_760,
    min: 266,
    sms: 167,
  },
  {
    date: "2024-05-10",
    number: "828",
    amount: 11.21,
    net: 1_740,
    min: 122,
    sms: 167,
  },

  {
    date: "2024-05-05",
    number: "183",
    amount: 15.95,
    net: 1_540,
    min: "95:49",
    sms: 50, // ?
  },
  {
    date: "2024-05-05",
    number: "938",
    amount: 0.35,
    net: 1_600,
    min: 243,
    sms: 152,
  },
  {
    date: "2024-05-05",
    number: "379",
    amount: 27.72,
    net: 2_780,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-05-05",
    number: "818",
    amount: 1.11,
    net: 3_810,
    min: 266,
    sms: 167,
  },
  {
    date: "2024-05-05",
    number: "828",
    amount: 11.21,
    net: 1_900,
    min: 123,
    sms: 167,
  },

  {
    date: "2024-05-01",
    number: "183",
    // amount: 5.95,
    amount: 15.95,
    net: 1_670,
    min: "95:49",
    sms: 51, // ?
  },
  {
    date: "2024-05-01",
    number: "938",
    // amount: 15.35,
    amount: 0.35,
    net: 1_600,
    // min: 143,
    min: 243,
    sms: 162,
  },
  {
    date: "2024-05-01",
    number: "379",
    // amount: 2.72,
    amount: 27.72,
    net: 3_630,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-05-01",
    number: "818",
    // amount: 16.11,
    amount: 1.11,
    net: 3_820,
    // min: 166,
    min: 266,
    sms: 167,
  },
  {
    date: "2024-05-01",
    number: "828",
    // amount: 1.21,
    amount: 11.21,
    net: 1_920,
    min: 123,
    sms: 167,
  },

  {
    date: "2024-04-30",
    number: "183",
    amount: 5.95,
    net: 1_750,
    min: "95:49",
    sms: 51, // ?
  },
  {
    date: "2024-04-30",
    number: "938",
    amount: 15.35,
    net: 1_600,
    min: 143,
    sms: 162,
  },
  {
    date: "2024-04-30",
    number: "379",
    amount: 2.72,
    net: 4_280,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-04-30",
    number: "818",
    amount: 16.11,
    net: 3_820,
    min: 166,
    sms: 167,
  },
  {
    date: "2024-04-30",
    number: "828",
    amount: 1.21,
    net: 1_930,
    min: 123,
    sms: 167,
  },

  {
    date: "2024-04-25",
    number: "183",
    amount: 5.95,
    net: 1_980,
    min: "97:20",
    sms: 54,
  },
  {
    date: "2024-04-25",
    number: "938",
    amount: 15.35,
    net: 1_600,
    min: 143,
    sms: 162,
  },
  {
    date: "2024-04-25",
    number: "379",
    amount: 2.72,
    net: 5_110,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-04-25",
    number: "818",
    amount: 16.11,
    net: 3_950,
    min: 166,
    sms: 167,
  },
  {
    date: "2024-04-25",
    number: "828",
    amount: 1.21,
    net: 2_020,
    min: 123,
    sms: 167,
  },

  {
    date: "2024-04-20",
    number: "183",
    amount: 5.95,
    net: 2_280,
    min: 113,
    sms: 54,
  },
  {
    date: "2024-04-20",
    number: "938",
    amount: 15.35,
    net: 1_600,
    min: 144,
    sms: 162,
  },
  {
    date: "2024-04-20",
    number: "379",
    amount: 2.72,
    net: 7_150,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-04-20",
    number: "818",
    amount: 16.11,
    net: 4_010,
    min: 166,
    sms: 167,
  },
  {
    date: "2024-04-20",
    number: "828",
    amount: 1.21,
    net: 2_140,
    min: 123,
    sms: 167,
  },

  {
    date: "2024-04-15",
    number: "183",
    amount: 5.95,
    net: 2_330,
    min: 113,
    sms: 54,
  },
  {
    date: "2024-04-15",
    number: "938",
    amount: 15.35,
    net: 1_600,
    min: 147,
    sms: 162,
  },
  {
    date: "2024-04-15",
    number: "379",
    amount: 2.72,
    net: 9_100,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-04-15",
    number: "818",
    amount: 16.11,
    net: 4_040,
    min: 166,
    sms: 167,
  },
  {
    date: "2024-04-15",
    number: "828",
    amount: 1.21,
    net: 2_220,
    min: 123,
    sms: 167,
  },

  {
    date: "2024-04-10",
    number: "183",
    // amount: 14.95,
    amount: 5.95,
    // net: 411, // ?
    net: 2_390,
    min: 114,
    sms: 54,
  },
  {
    date: "2024-04-10",
    number: "938",
    amount: 15.35,
    net: 1_600,
    min: 156,
    sms: 162,
  },
  {
    date: "2024-04-10",
    number: "379",
    amount: 2.72,
    net: 9_890,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-04-10",
    number: "818",
    amount: 16.11,
    net: 4_260,
    min: 166,
    sms: 167,
  },
  {
    date: "2024-04-10",
    number: "828",
    // amount: 10.21,
    amount: 1.21,
    // net: 363, // ?
    net: 2_340,
    min: 124,
    sms: 167,
  },

  {
    date: "2024-04-05",
    number: "183",
    amount: 14.95,
    net: 871, // ?
    min: 121,
    sms: 54,
  },
  {
    date: "2024-04-05",
    number: "938",
    amount: 15.35,
    net: 1_600,
    min: 156,
    sms: 162,
  },
  {
    date: "2024-04-05",
    number: "379",
    amount: 27.72,
    net: 2_630,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-04-05",
    number: "818",
    amount: 16.11,
    net: 4_300,
    min: 166,
    sms: 167,
  },
  {
    date: "2024-04-05",
    number: "828",
    amount: 10.21,
    net: 463, // ?
    min: 124,
    sms: 167,
  },

  {
    date: "2024-04-01",
    number: "183",
    // amount: 4.95,
    amount: 14.95,
    net: 962,
    min: 121,
    sms: 54,
  },
  {
    date: "2024-04-01",
    number: "938",
    // amount: 10.35,
    amount: 15.35,
    net: 1_600,
    min: 156,
    sms: 162,
  },
  {
    date: "2024-04-01",
    number: "379",
    // amount: 2.72,
    amount: 27.72,
    net: 3_810,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-04-01",
    number: "818",
    // amount: 11.11,
    amount: 16.11,
    net: 4_320,
    min: 166,
    sms: 167,
  },
  {
    date: "2024-04-01",
    number: "828",
    // amount: 0.21,
    amount: 10.21,
    net: 506, // ?
    min: 124,
    sms: 167,
  },

  {
    date: "2024-03-30",
    number: "183",
    amount: 4.95,
    net: 1_460,
    min: 125,
    sms: 54, // ?
  },
  {
    date: "2024-03-30",
    number: "938",
    amount: 10.35,
    net: 1_600,
    min: 157,
    sms: 172,
  },
  {
    date: "2024-03-30",
    number: "379",
    amount: 2.72,
    net: 4_090,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-03-30",
    number: "818",
    amount: 11.11,
    net: 4_320,
    min: 166,
    sms: 167,
  },
  {
    date: "2024-03-30",
    number: "828",
    // amount: 5.21,
    amount: 0.21,
    // net: 258,
    net: 1_250,
    min: 124,
    sms: 167,
  },

  {
    date: "2024-03-25",
    number: "183",
    amount: 4.95,
    net: 1_770,
    min: 125,
    sms: 54, // ?
  },
  {
    date: "2024-03-25",
    number: "938",
    amount: 10.35,
    net: 1_600,
    min: 157,
    sms: 172,
  },
  {
    date: "2024-03-25",
    number: "379",
    amount: 2.72,
    net: 5_520,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-03-25",
    number: "818",
    amount: 11.11,
    net: 4_360,
    min: 166,
    sms: 167,
  },
  {
    date: "2024-03-25",
    number: "828",
    amount: 5.21,
    net: 514, // ?
    min: 125,
    sms: 167,
  },

  {
    date: "2024-03-20",
    number: "183",
    amount: 4.95,
    net: 2_070,
    min: 131,
    sms: 55,
  },
  {
    date: "2024-03-20",
    number: "938",
    amount: 10.35,
    net: 1_600,
    min: 157,
    sms: 172,
  },
  {
    date: "2024-03-20",
    number: "379",
    amount: 2.72,
    net: 7_350,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-03-20",
    number: "818",
    amount: 11.11,
    net: 4_410,
    min: 166,
    sms: 167,
  },
  {
    date: "2024-03-20",
    number: "828",
    amount: 5.21,
    net: 632,
    min: 126,
    sms: 167,
  },

  {
    date: "2024-03-15",
    number: "183",
    amount: 4.95,
    net: 2_310,
    min: 131,
    sms: 56,
  },
  {
    date: "2024-03-15",
    number: "938",
    amount: 10.35,
    net: 1_600,
    min: 157,
    sms: 172,
  },
  {
    date: "2024-03-15",
    number: "379",
    amount: 2.72,
    net: 9_210,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-03-15",
    number: "818",
    amount: 11.11,
    net: 4_440,
    min: 166,
    sms: 167,
  },
  {
    date: "2024-03-15",
    number: "828",
    amount: 5.21,
    net: 730,
    min: 128,
    sms: 167,
  },

  {
    date: "2024-03-10",
    number: "183",
    // amount: 13.95,
    amount: 4.95,
    // net: 475,
    net: 2_460,
    min: 143,
    sms: 59,
  },
  {
    date: "2024-03-10",
    number: "938",
    amount: 10.35,
    net: 1_600,
    min: 160,
    sms: 172,
  },
  {
    date: "2024-03-10",
    number: "379",
    amount: 2.72,
    net: 10_020,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-03-10",
    number: "818",
    amount: 11.11,
    net: 4_510,
    min: 166,
    sms: 167,
  },
  {
    date: "2024-03-10",
    number: "828",
    amount: 5.21,
    net: 1_060,
    min: 128,
    sms: 167,
  },

  {
    date: "2024-03-05",
    number: "183",
    amount: 13.95,
    net: 677,
    min: 150,
    sms: 60,
  },
  {
    date: "2024-03-05",
    number: "938",
    amount: 10.35,
    net: 1_600,
    min: 160,
    sms: 172,
  },
  {
    date: "2024-03-05",
    number: "379",
    amount: 27.72,
    net: 2_930,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-03-05",
    number: "818",
    amount: 11.11,
    net: 4_560,
    min: 166,
    sms: 167,
  },
  {
    date: "2024-03-05",
    number: "828",
    amount: 5.21,
    net: 1_160,
    min: 128,
    sms: 167,
  },

  {
    date: "2024-03-01",
    number: "183",
    // amount: 3.95,
    amount: 13.95,
    net: 788,
    min: 150,
    sms: 60,
  },
  {
    date: "2024-03-01",
    number: "938",
    // amount: 5.35,
    amount: 10.35,
    net: 1_610,
    min: 160,
    sms: 173,
  },
  {
    date: "2024-03-01",
    number: "379",
    // amount: 2.72,
    amount: 27.72,
    net: 4_020,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-03-01",
    number: "818",
    // amount: 16.11,
    amount: 11.11,
    // net: 3_580,
    net: 4_580,
    min: 166,
    sms: 167,
  },
  {
    date: "2024-03-01",
    number: "828",
    // amount: 0.21,
    amount: 5.21,
    net: 1_170,
    min: 128,
    sms: 167,
  },

  {
    date: "2024-02-25",
    number: "183",
    amount: 3.95,
    net: 875,
    min: 150,
    sms: 60,
  },
  {
    date: "2024-02-25",
    number: "938",
    amount: 5.35,
    net: 1_630,
    min: 160,
    sms: 173,
  },
  {
    date: "2024-02-25",
    number: "379",
    amount: 2.72,
    net: 5_860,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-02-25",
    number: "818",
    amount: 16.11,
    net: 3_600,
    min: 166,
    sms: 167,
  },
  {
    date: "2024-02-25",
    number: "828",
    amount: 0.21,
    net: 1_420,
    min: 128,
    sms: 167,
  },

  {
    date: "2024-02-20",
    number: "183",
    amount: 3.95,
    net: 1_110,
    min: 150,
    sms: 60,
  },
  {
    date: "2024-02-20",
    number: "938",
    amount: 5.35,
    net: 1_650,
    min: 160,
    sms: 173,
  },
  {
    date: "2024-02-20",
    number: "379",
    amount: 2.72,
    net: 7_380,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-02-20",
    number: "818",
    amount: 16.11,
    net: 3_660,
    min: 166,
    sms: 167,
  },
  {
    date: "2024-02-20",
    number: "828",
    amount: 0.21,
    net: 1_530,
    min: 128,
    sms: 167,
  },

  {
    date: "2024-02-15",
    number: "183",
    // amount: 8.95,
    amount: 3.95,
    // net: 183,
    net: 1_170,
    min: 150,
    sms: 60,
  },
  {
    date: "2024-02-15",
    number: "938",
    amount: 5.35,
    net: 1_670,
    min: 160,
    sms: 175,
  },
  {
    date: "2024-02-15",
    number: "379",
    amount: 2.72,
    net: 8_640,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-02-15",
    number: "818",
    amount: 16.11,
    net: 3_710,
    min: 166,
    sms: 167,
  },
  {
    date: "2024-02-15",
    number: "828",
    // amount: 5.21,
    amount: 0.21,
    // net: 568,
    net: 1_550,
    min: 132,
    sms: 167,
  },

  {
    date: "2024-02-10",
    number: "183",
    amount: 8.95,
    net: 488,
    min: 150,
    sms: 60,
  },
  {
    date: "2024-02-10",
    number: "938",
    amount: 5.35,
    net: 1_700,
    min: 160,
    sms: 175,
  },
  {
    date: "2024-02-10",
    number: "379",
    // amount: 27.72,
    amount: 2.72,
    net: 10_020,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-02-10",
    number: "818",
    amount: 16.11,
    net: 3_780,
    min: 166,
    sms: 167,
  },
  {
    date: "2024-02-10",
    number: "828",
    amount: 5.21,
    net: 640,
    min: 132,
    sms: 172,
  },

  {
    date: "2024-02-05",
    number: "183",
    amount: 8.95,
    net: 567,
    min: 151,
    sms: 60,
  },
  {
    date: "2024-02-05",
    number: "938",
    amount: 5.35,
    net: 1_710,
    min: 161,
    sms: 175,
  },
  {
    date: "2024-02-05",
    number: "379",
    amount: 27.72,
    net: 4_290,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-02-05",
    number: "818",
    amount: 16.11,
    net: 3_830,
    min: 166,
    sms: 167,
  },
  {
    date: "2024-02-05",
    number: "828",
    amount: 5.21,
    net: 979,
    min: 133,
    sms: 172,
  },

  {
    date: "2024-02-01",
    number: "183",
    // amount: 13.95,
    // amount: 23.95,
    amount: 8.95,
    net: 625,
    // min: "54:29",
    min: 154,
    sms: 61,
  },
  {
    date: "2024-02-01",
    number: "938",
    // amount: 0.35,
    amount: 5.35,
    net: 1_720,
    min: 162,
    sms: 175,
  },
  {
    date: "2024-02-01",
    number: "379",
    // amount: 2.72,
    amount: 27.72,
    net: 5_110,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-02-01",
    number: "818",
    // amount: 11.11,
    amount: 16.11,
    net: 3_830,
    min: 166,
    sms: 167,
  },
  {
    date: "2024-02-01",
    number: "828",
    // amount: 0.21,
    amount: 5.21,
    // net: 987,
    net: 986,
    min: 133,
    sms: 172,
  },

  {
    date: "2024-01-30",
    number: "183",
    amount: 13.95,
    net: 666,
    min: "54:29",
    sms: 61,
  },
  {
    date: "2024-01-30",
    number: "938",
    amount: 0.35,
    net: 1_720,
    min: 162,
    sms: 175,
  },
  {
    date: "2024-01-30",
    number: "379",
    amount: 2.72,
    net: 5_390,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-01-30",
    number: "818",
    amount: 11.11,
    net: 3_850,
    min: 166,
    sms: 167,
  },
  {
    date: "2024-01-30",
    number: "828",
    amount: 0.21,
    net: 993,
    min: 133,
    sms: 172,
  },

  {
    date: "2024-01-25",
    number: "183",
    amount: 13.95,
    net: 1_860,
    min: "54:29",
    sms: 61,
  },
  {
    date: "2024-01-25",
    number: "938",
    amount: 0.35,
    net: 1_730,
    min: 162,
    sms: 175,
  },
  {
    date: "2024-01-25",
    number: "379",
    amount: 2.72,
    net: 6_350,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-01-25",
    number: "818",
    amount: 11.11,
    net: 3_870,
    min: 166,
    sms: 169,
  },
  {
    date: "2024-01-25",
    number: "828",
    amount: 0.21,
    net: 1_080,
    min: 133,
    sms: 172,
  },

  {
    date: "2024-01-20",
    number: "183",
    amount: 13.95,
    net: 2_440,
    min: "55:50",
    sms: 66,
  },
  {
    date: "2024-01-20",
    number: "938",
    amount: 0.35,
    net: 1_750,
    min: 162,
    sms: 175,
  },
  {
    date: "2024-01-20",
    number: "379",
    amount: 2.72,
    net: 7_350,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-01-20",
    number: "818",
    amount: 11.11,
    net: 3_890,
    min: 166,
    sms: 169,
  },
  {
    date: "2024-01-20",
    number: "828",
    amount: 0.21,
    net: 1_270,
    min: 133,
    sms: 180,
  },

  {
    date: "2024-01-15",
    number: "183",
    amount: 13.95,
    net: 2_620,
    min: "55:50",
    sms: 66,
  },
  {
    date: "2024-01-15",
    number: "938",
    amount: 0.35,
    net: 1_780,
    min: 162,
    sms: 175,
  },
  {
    date: "2024-01-15",
    number: "379",
    amount: 2.72,
    net: 8_450,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-01-15",
    number: "818",
    amount: 11.11,
    net: 3_930,
    min: 166,
    sms: 169,
  },
  {
    date: "2024-01-15",
    number: "828",
    // amount: 0.21,
    // amount: 5.21,
    amount: 0.21,
    // net: 335,
    net: 1_320,
    min: 133,
    sms: 180,
  },

  {
    date: "2024-01-10",
    number: "183",
    amount: 13.95,
    net: 3_340,
    min: "64:40",
    sms: 66,
  },
  {
    date: "2024-01-10",
    number: "938",
    amount: 0.35,
    net: 1_790,
    min: 162,
    sms: 176,
  },
  {
    date: "2024-01-10",
    number: "379",
    // amount: 27.72,
    amount: 2.72,
    net: 10_000,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-01-10",
    number: "818",
    amount: 11.11,
    net: 3_970,
    min: 166,
    sms: 169,
  },
  {
    date: "2024-01-10",
    number: "828",
    amount: 0.21,
    net: 726,
    min: 133,
    sms: 180,
  },

  {
    date: "2024-01-05",
    number: "183",
    amount: 13.95,
    net: 3_880,
    min: "69:49",
    sms: 67,
  },
  {
    date: "2024-01-05",
    number: "938",
    amount: 0.35,
    net: 1_820,
    min: 162,
    sms: 188,
  },
  {
    date: "2024-01-05",
    number: "379",
    amount: 27.72,
    net: 4_170,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-01-05",
    number: "818",
    amount: 11.11,
    net: 4_020,
    min: 166,
    sms: 169,
  },
  {
    date: "2024-01-05",
    number: "828",
    amount: 0.21,
    net: 832,
    min: 133,
    sms: 180,
  },

  {
    date: "2024-01-02",
    number: "183",
    // amount: 3.95,
    amount: 13.95,
    net: 3_880,
    min: "70:05",
    sms: 82,
  },
  {
    date: "2024-01-02",
    number: "938",
    // amount: 5.94,
    amount: 0.94,
    // net: 852,
    net: 1_830,
    min: 162,
    sms: 188,
  },
  {
    date: "2024-01-02",
    number: "379",
    // amount: 2.72,
    amount: 27.72,
    net: 4_870,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2024-01-02",
    number: "818",
    // amount: 16.11,
    amount: 11.11,
    // net: 3_040,
    net: 4_040,
    min: 166,
    sms: 169,
  },
  {
    date: "2024-01-02",
    number: "828",
    // amount: 5.21,
    // amount: 15.21,
    amount: 0.21,
    net: 924,
    // min: "33:45",
    min: 133,
    sms: 180,
  },

  {
    date: "2023-12-30",
    number: "183",
    amount: 3.95,
    net: 4_370,
    min: "70:05",
    sms: 90,
  },
  {
    date: "2023-12-30",
    number: "938",
    amount: 5.94,
    net: 888,
    min: 164,
    sms: 192,
  },
  {
    date: "2023-12-30",
    number: "379",
    amount: 2.72,
    net: 6_300,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-12-30",
    number: "818",
    amount: 16.11,
    net: 3_050,
    min: 166,
    sms: 169,
  },
  {
    date: "2023-12-30",
    number: "828",
    amount: 5.21,
    net: 1_020,
    min: "33:45",
    sms: 180,
  },

  {
    date: "2023-12-26",
    number: "183",
    // amount: 13.95,
    amount: 3.95,
    // net: 656,
    net: 4_640,
    min: "70:05",
    sms: 90,
  },
  {
    date: "2023-12-26",
    number: "938",
    amount: 5.94,
    net: 898,
    min: 164,
    sms: 192,
  },
  {
    date: "2023-12-26",
    number: "379",
    amount: 2.72,
    net: 6_540,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-12-26",
    number: "818",
    amount: 16.11,
    net: 3_050,
    min: 166,
    sms: 169,
  },
  {
    date: "2023-12-26",
    number: "828",
    amount: 5.21,
    net: 1_310,
    min: "33:45",
    sms: 180,
  },

  {
    date: "2023-12-20",
    number: "183",
    amount: 13.95,
    net: 1_090,
    min: "70:05",
    sms: 90,
  },
  {
    date: "2023-12-20",
    number: "938",
    amount: 5.94,
    net: 958,
    min: 165,
    sms: 208,
  },
  {
    date: "2023-12-20",
    number: "379",
    amount: 2.72,
    net: 8_330,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-12-20",
    number: "818",
    amount: 16.11,
    net: 3_130,
    min: 166,
    sms: 169,
  },
  {
    date: "2023-12-20",
    number: "828",
    amount: 5.21,
    net: 1_560,
    min: "74:29",
    sms: 180,
  },

  {
    date: "2023-12-15",
    number: "183",
    amount: 13.95,
    net: 1_170,
    min: "70:05",
    sms: 90,
  },
  {
    date: "2023-12-15",
    number: "938",
    amount: 5.94,
    net: 976,
    min: 165,
    sms: 208,
  },
  {
    date: "2023-12-15",
    number: "379",
    amount: 2.72,
    net: 8_560,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-12-15",
    number: "818",
    amount: 16.11,
    net: 3_240,
    min: 166,
    sms: 169,
  },
  {
    date: "2023-12-15",
    number: "828",
    amount: 5.8,
    net: 1_610,
    min: 102,
    sms: 180,
  },

  {
    date: "2023-12-10",
    number: "183",
    amount: 13.95,
    net: 1_460,
    min: "77:56",
    sms: 90,
  },
  {
    date: "2023-12-10",
    number: "938",
    amount: 5.94,
    net: 1_000,
    min: 166,
    sms: 208,
  },
  {
    date: "2023-12-10",
    number: "379",
    amount: 2.72,
    net: 10_020,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-12-10",
    number: "818",
    amount: 16.11,
    net: 3_270,
    min: 166,
    sms: 169,
  },
  {
    date: "2023-12-10",
    number: "828",
    amount: 5.8,
    net: 1_710,
    min: 102,
    sms: 180,
  },

  {
    date: "2023-12-05",
    number: "183",
    amount: 13.95,
    net: 1_700,
    min: "83:08",
    sms: 90,
  },
  {
    date: "2023-12-05",
    number: "938",
    amount: 5.94,
    net: 1_010,
    min: 166,
    sms: 208,
  },
  {
    date: "2023-12-05",
    number: "379",
    amount: 27.72,
    net: 2_890,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-12-05",
    number: "818",
    amount: 16.11,
    net: 3_290,
    min: 166,
    sms: 169,
  },
  {
    date: "2023-12-05",
    number: "828",
    amount: 5.8,
    net: 1_990,
    min: 102,
    sms: 180,
  },

  {
    date: "2023-12-01",
    number: "183",
    // amount: 3.95,
    amount: 13.95,
    net: 1_910,
    min: "83:40",
    sms: 90,
  },
  {
    date: "2023-12-01",
    number: "938",
    // amount: 0.94,
    amount: 5.94,
    net: 1_020,
    min: 166,
    sms: 208,
  },
  {
    date: "2023-12-01",
    number: "379",
    // amount: 2.72,
    amount: 27.72,
    net: 4_090,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-12-01",
    number: "818",
    // amount: 11.11,
    amount: 16.11,
    net: 3_300,
    min: 166,
    sms: 169,
  },
  {
    date: "2023-12-01",
    number: "828",
    // amount: 0.8,
    amount: 5.8,
    net: 2_020,
    min: 103,
    sms: 180,
  },

  {
    date: "2023-11-25",
    number: "183",
    amount: 3.95,
    net: 1_990,
    min: "85:49",
    sms: 90,
  },
  {
    date: "2023-11-25",
    number: "938",
    amount: 0.94,
    net: 1_060,
    min: 168,
    sms: 208,
  },
  {
    date: "2023-11-25",
    number: "379",
    amount: 2.72,
    net: 5_430,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-11-25",
    number: "818",
    amount: 11.11,
    net: 3_320,
    min: 166,
    sms: 169,
  },
  {
    date: "2023-11-25",
    number: "828",
    // amount: 4.8,
    // amount: 9.8,
    // amount: 4.8,
    amount: 0.8,
    // net: 80,
    net: 2_070,
    min: 103,
    sms: 180,
  },

  {
    date: "2023-11-20",
    number: "183",
    amount: 3.95,
    net: 2_340,
    min: "85:49",
    sms: 90,
  },
  {
    date: "2023-11-20",
    number: "938",
    amount: 0.94,
    net: 1_070,
    min: 168,
    sms: 208,
  },
  {
    date: "2023-11-20",
    number: "379",
    amount: 2.72,
    net: 7_600,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-11-20",
    number: "818",
    amount: 11.11,
    net: 3_360,
    min: 166,
    sms: 169,
  },
  {
    date: "2023-11-20",
    number: "828",
    amount: 4.8,
    net: 792,
    min: 103,
    sms: 180,
  },

  {
    date: "2023-11-15",
    number: "183",
    // amount: 12.95,
    amount: 3.95,
    // net: 532,
    net: 2_520,
    min: "85:49",
    sms: 90,
  },
  {
    date: "2023-11-15",
    number: "938",
    amount: 0.94,
    net: 1_120,
    min: 168,
    sms: 208,
  },
  {
    date: "2023-11-15",
    number: "379",
    amount: 2.72,
    net: 9_120,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-11-15",
    number: "818",
    amount: 11.11,
    net: 3_380,
    min: 166,
    sms: 169,
  },
  {
    date: "2023-11-15",
    number: "828",
    amount: 4.8,
    net: 916,
    min: 103,
    sms: 180,
  },

  {
    date: "2023-11-10",
    number: "183",
    amount: 12.95,
    net: 861,
    min: "87:08",
    sms: 93,
  },
  {
    date: "2023-11-10",
    number: "938",
    amount: 0.94,
    net: 1_130,
    min: 168,
    sms: 208,
  },
  {
    date: "2023-11-10",
    number: "379",
    // amount: 27.72,
    amount: 2.72,
    net: 10_000,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-11-10",
    number: "818",
    amount: 11.11,
    net: 3_410,
    min: 166,
    sms: 169,
  },
  {
    date: "2023-11-10",
    number: "828",
    amount: 4.8,
    net: 1_021,
    min: 104,
    sms: 180,
  },

  {
    date: "2023-11-01",
    number: "183",
    // amount: 2.95,
    amount: 12.95,
    net: 1_420,
    min: "97:55",
    sms: 106,
  },
  {
    date: "2023-11-01",
    number: "938",
    // amount: 15.94,
    amount: 0.94,
    net: 1_170,
    // min: "74:08",
    min: 174,
    sms: 208,
  },
  {
    date: "2023-11-01",
    number: "379",
    // amount: 2.72,
    amount: 27.72,
    net: 6_190,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-11-01",
    number: "818",
    // amount: 6.11,
    amount: 11.11,
    net: 3_540,
    min: 166,
    sms: 169,
  },
  {
    date: "2023-11-01",
    number: "828",
    // amount: 0.98,
    amount: 5.98,
    net: 1_260,
    min: 116,
    sms: 180,
  },

  {
    date: "2023-10-30",
    number: "183",
    amount: 2.95,
    net: 1_460,
    min: "97:55",
    sms: 106,
  },
  {
    date: "2023-10-30",
    number: "938",
    amount: 15.94,
    net: 1_170,
    min: "74:08",
    sms: 208,
  },
  {
    date: "2023-10-30",
    number: "379",
    amount: 2.72,
    net: 6_200,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-10-30",
    number: "818",
    amount: 6.11,
    net: 3_560,
    min: 166,
    sms: 169,
  },
  {
    date: "2023-10-30",
    number: "828",
    amount: 0.98,
    net: 1_260,
    min: 117,
    sms: 180,
  },

  {
    date: "2023-10-25",
    number: "183",
    amount: 2.95,
    net: 1_870,
    min: "99:13",
    sms: 106,
  },
  {
    date: "2023-10-25",
    number: "938",
    amount: 15.94,
    net: 1_200,
    min: "74:08",
    sms: 208,
  },
  {
    date: "2023-10-25",
    number: "379",
    amount: 2.72,
    net: 8_060,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-10-25",
    number: "818",
    amount: 7.29,
    net: 3_570,
    min: 166,
    sms: 170,
  },
  {
    date: "2023-10-25",
    number: "828",
    amount: 0.98,
    net: 1_370,
    min: 118,
    sms: 180,
  },

  {
    date: "2023-10-20",
    number: "183",
    amount: 2.95,
    net: 2_290,
    min: 103,
    sms: 106,
  },
  {
    date: "2023-10-20",
    number: "938",
    amount: 15.94,
    net: 1_200,
    min: "82:33",
    sms: 208,
  },
  {
    date: "2023-10-20",
    number: "379",
    amount: 2.72,
    net: 10_000,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-10-20",
    number: "818",
    amount: 7.29,
    net: 3_600,
    min: 166,
    sms: 170,
  },
  {
    date: "2023-10-20",
    number: "828",
    amount: 0.98,
    net: 1_410,
    min: 119,
    sms: 180,
  },

  {
    date: "2023-10-15",
    number: "183",
    amount: 2.95,
    net: 2_480,
    min: 103,
    sms: 106,
  },
  {
    date: "2023-10-15",
    number: "938",
    amount: 15.94,
    net: 1_230,
    min: "88:25",
    sms: 208,
  },
  {
    date: "2023-10-15",
    number: "379",
    amount: 2.72,
    net: 10_000,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-10-15",
    number: "818",
    amount: 7.29,
    net: 3_630,
    min: 166,
    sms: 170,
  },
  {
    date: "2023-10-15",
    number: "828",
    // amount: 5.98,
    amount: 0.98,
    // net: 525,
    net: 1_510,
    min: 119,
    sms: 180,
  },

  {
    date: "2023-10-10",
    number: "183",
    // amount: 1.95,
    // amount: 11.95,
    amount: 2.95,
    // net: 567,
    net: 2_550,
    min: 103,
    sms: 106,
  },
  {
    date: "2023-10-10",
    number: "938",
    amount: 15.94,
    net: 1_250,
    min: "88:25",
    sms: 208,
  },
  {
    date: "2023-10-10",
    number: "379",
    amount: 2.72,
    net: 10_020,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-10-10",
    number: "818",
    amount: 7.29,
    net: 3_660,
    min: 166,
    sms: 170,
  },
  {
    date: "2023-10-10",
    number: "828",
    amount: 5.98,
    net: 764,
    min: 120,
    sms: 180,
  },

  {
    date: "2023-10-05",
    number: "183",
    amount: 1.95,
    net: 786,
    min: 105,
    sms: 108,
  },
  {
    date: "2023-10-05",
    number: "938",
    amount: 15.94,
    net: 1_270,
    min: "88:25",
    sms: 208,
  },
  {
    date: "2023-10-05",
    number: "379",
    amount: 27.72,
    net: 4_960,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-10-05",
    number: "818",
    amount: 7.29,
    net: 3_700,
    min: 166,
    sms: 170,
  },
  {
    date: "2023-10-05",
    number: "828",
    amount: 5.99,
    net: 905,
    min: 121,
    sms: 180,
  },

  {
    date: "2023-10-01",
    number: "183",
    // amount: 1.95,
    // amount: 16.95,
    amount: 1.95,
    net: 1_080,
    // min: "7:56",
    min: 107,
    sms: 113,
  },
  {
    date: "2023-10-01",
    number: "938",
    // amount: 10.94,
    amount: 15.94,
    net: 1_290,
    min: "88:25",
    sms: 208,
  },
  {
    date: "2023-10-01",
    number: "379",
    // amount: 2.72,
    amount: 27.72,
    net: 6_220,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-10-01",
    number: "818",
    // amount: 16.29,
    amount: 7.29,
    // net: 1_730,
    net: 3_730,
    min: 166,
    sms: 170,
  },
  {
    date: "2023-10-01",
    number: "828",
    // amount: 0.99,
    amount: 5.99,
    net: 1_160,
    min: 121,
    sms: 182,
  },

  {
    date: "2023-09-30",
    number: "183",
    // amount: 6.95,
    amount: 1.95,
    // net: 187,
    net: 1_180,
    min: "7:56",
    sms: 113,
  },
  {
    date: "2023-09-30",
    number: "938",
    amount: 10.94,
    net: 1_300,
    min: "88:25",
    sms: 208,
  },
  {
    date: "2023-09-30",
    number: "379",
    amount: 2.72,
    net: 6_530,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-09-30",
    number: "818",
    amount: 16.29,
    net: 1_730,
    min: 166,
    sms: 170,
  },
  {
    date: "2023-09-30",
    number: "828",
    amount: 0.99,
    net: 1_160,
    min: 121,
    sms: 182,
  },

  {
    date: "2023-09-25",
    number: "183",
    amount: 6.95,
    net: 267,
    min: "8:02",
    sms: 113,
  },
  {
    date: "2023-09-20",
    number: "938",
    amount: 10.94,
    net: 1_310,
    min: "90:15",
    sms: 208,
  },
  {
    date: "2023-09-25",
    number: "379",
    amount: 2.72,
    net: 7_160,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-09-25",
    number: "818",
    amount: 16.29,
    net: 1_770,
    min: 166,
    sms: 170,
  },
  {
    date: "2023-09-25",
    number: "828",
    amount: 0.99,
    net: 1_270,
    min: 121,
    sms: 183,
  },

  {
    date: "2023-09-20",
    number: "183",
    amount: 6.95,
    net: 898,
    min: "16:58",
    sms: 115,
  },
  {
    date: "2023-09-20",
    number: "938",
    amount: 10.94,
    net: 1_330,
    min: 100,
    sms: 208,
  },
  {
    date: "2023-09-20",
    number: "379",
    amount: 2.72,
    net: 8_710,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-09-20",
    number: "818",
    amount: 16.29,
    net: 1_810,
    min: 166,
    sms: 173,
  },
  {
    date: "2023-09-20",
    number: "828",
    amount: 0.99,
    net: 1_330,
    min: 123,
    sms: 183,
  },

  {
    date: "2023-09-15",
    number: "183",
    amount: 6.95,
    net: 1_190,
    min: "27:52",
    sms: 115,
  },
  {
    date: "2023-09-15",
    number: "938",
    amount: 10.94,
    net: 1_350,
    min: 104,
    sms: 208,
  },
  {
    date: "2023-09-15",
    number: "379",
    amount: 2.72,
    net: 9_480,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-09-15",
    number: "818",
    // amount: 18.65,
    amount: 16.29,
    net: 1_860,
    min: 166,
    sms: 174,
  },
  {
    date: "2023-09-15",
    number: "828",
    amount: 0.99,
    net: 1_500,
    min: 128,
    sms: 183,
  },

  {
    date: "2023-09-10",
    number: "183",
    amount: 6.95,
    net: 1_280,
    min: "27:52",
    sms: 115,
  },
  {
    date: "2023-09-10",
    number: "938",
    amount: 10.94,
    net: 1_390,
    min: 104,
    sms: 208,
  },
  {
    date: "2023-09-10",
    number: "379",
    amount: 2.72,
    net: 10_020,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-09-10",
    number: "818",
    amount: 18.65,
    net: 1_880,
    min: 166,
    sms: 176,
  },
  {
    date: "2023-09-10",
    number: "828",
    amount: 0.99,
    net: 1_880,
    min: 128,
    sms: 183,
  },

  {
    date: "2023-09-05",
    number: "183",
    amount: 6.95,
    net: 1_410,
    min: "29:43",
    sms: 115,
  },
  {
    date: "2023-09-05",
    number: "938",
    amount: 10.94,
    net: 1_400,
    min: 104,
    sms: 208,
  },
  {
    date: "2023-09-05",
    number: "379",
    amount: 27.72,
    net: 7_090,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-09-05",
    number: "818",
    amount: 18.65,
    net: 1_900,
    min: 166,
    sms: 176,
  },
  {
    date: "2023-09-05",
    number: "828",
    amount: 0.99,
    net: 1_910,
    min: 130,
    sms: 183,
  },

  {
    date: "2023-09-01",
    number: "183",
    // amount: 1.95,
    // amount: 10.95,
    amount: 6.95,
    // net: 738,
    net: 1_720,
    min: "31:25",
    sms: 115,
  },
  {
    date: "2023-09-01",
    number: "938",
    // amount: 5.94,
    amount: 10.94,
    net: 1_420,
    min: 104,
    sms: 208,
  },
  {
    date: "2023-09-01",
    number: "379",
    // amount: 2.72,
    amount: 27.72,
    net: 7_730,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-09-01",
    number: "818",
    // amount: 13.65,
    amount: 18.65,
    net: 1_920,
    min: 166,
    sms: 176,
  },
  {
    date: "2023-09-01",
    number: "828",
    // amount: 0,
    // amount: 10,
    amount: 0.99,
    // net: 0,
    net: 2_000,
    min: 131,
    sms: 183,
  },

  {
    date: "2023-08-30",
    number: "183",
    amount: 1.95,
    net: 2_530,
    min: "42:22",
    sms: 115,
  },
  {
    date: "2023-08-30",
    number: "938",
    amount: 5.94,
    net: 1_420,
    min: 104,
    sms: 209,
  },
  {
    date: "2023-08-30",
    number: "379",
    amount: 2.72,
    net: 7_750,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-08-30",
    number: "818",
    amount: 13.65,
    net: 1_920,
    min: 166,
    sms: 176,
  },
  {
    date: "2023-08-30",
    number: "828",
    amount: 0,
    net: 0,
    min: 132,
    sms: 183,
  },

  {
    date: "2023-08-25",
    number: "183",
    amount: 1.95,
    net: 2_910,
    min: "42:22",
    sms: 115,
  },
  {
    date: "2023-08-25",
    number: "938",
    amount: 5.94,
    net: 1_450,
    min: 104,
    sms: 209,
  },
  {
    date: "2023-08-25",
    number: "379",
    amount: 2.72,
    net: 8_020,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-08-25",
    number: "818",
    amount: 13.65,
    net: 1_980,
    min: 166,
    sms: 176,
  },
  {
    date: "2023-08-25",
    number: "828",
    amount: 0,
    net: 1_390,
    min: 132,
    sms: 183,
  },

  {
    date: "2023-08-20",
    number: "183",
    amount: 1.95,
    net: 3_280,
    min: "43:02",
    sms: 117,
  },
  {
    date: "2023-08-20",
    number: "938",
    amount: 5.94,
    net: 1_470,
    min: 104,
    sms: 209,
  },
  {
    date: "2023-08-20",
    number: "379",
    amount: 2.72,
    net: 8_850,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-08-20",
    number: "818",
    amount: 13.65,
    net: 2_000,
    min: 166,
    sms: 176,
  },
  {
    date: "2023-08-20",
    number: "828",
    amount: 0,
    net: 2_750,
    min: 132,
    sms: 183,
  },

  {
    date: "2023-08-15",
    number: "183",
    amount: 1.95,
    net: 3_380,
    min: "48:28",
    sms: 117,
  },
  {
    date: "2023-08-15",
    number: "938",
    amount: 5.94,
    net: 1_500,
    min: 105,
    sms: 209,
  },
  {
    date: "2023-08-15",
    number: "379",
    amount: 2.72,
    net: 9_000,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-08-15",
    number: "818",
    amount: 13.65,
    net: 2_020,
    min: 166,
    sms: 176,
  },
  {
    date: "2023-08-15",
    number: "828",
    amount: 0,
    net: 3_730,
    min: 132,
    sms: 183,
  },

  {
    date: "2023-08-10",
    number: "183",
    amount: 1.95,
    net: 4_060,
    min: "48:28",
    sms: 117,
  },
  {
    date: "2023-08-10",
    number: "938",
    amount: 5.94,
    net: 1_540,
    min: 118,
    sms: 209,
  },
  {
    date: "2023-08-10",
    number: "379",
    // amount: 27.72,
    amount: 2.72,
    net: 10_020,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-08-10",
    number: "818",
    amount: 13.65,
    net: 2_040,
    min: 166,
    sms: 176,
  },
  {
    date: "2023-08-10",
    number: "828",
    amount: 0,
    net: 3_970,
    min: 132,
    sms: 184,
  },

  {
    date: "2023-08-05",
    number: "183",
    amount: 1.95,
    net: 4_670,
    min: "48:55",
    sms: 117,
  },
  {
    date: "2023-08-05",
    number: "938",
    amount: 5.94,
    net: 1_580,
    min: 118,
    sms: 209,
  },
  {
    date: "2023-08-05",
    number: "379",
    amount: 27.72,
    net: 6_260,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-08-05",
    number: "818",
    // amount: 18.65,
    amount: 13.65,
    net: 2_090,
    min: 166,
    sms: 176,
  },
  {
    date: "2023-08-05",
    number: "828",
    amount: 0,
    net: 3_990,
    min: 132,
    sms: 184,
  },

  {
    date: "2023-08-01",
    number: "183",
    // amount: 1.95,
    // amount: 11.95,
    amount: 1.95,
    // net: 715,
    net: 4_690,
    min: "55:12",
    sms: 117,
  },
  {
    date: "2023-08-01",
    number: "938",
    // amount: 10.94,
    amount: 5.94,
    net: 1_590,
    min: 118,
    // sms: 109,
    sms: 209,
  },
  {
    date: "2023-08-01",
    number: "379",
    // amount: 2.72,
    amount: 27.72,
    net: 6_440,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-08-01",
    number: "818",
    amount: 18.65,
    // net: 1_090,
    net: 2_090,
    min: 166,
    sms: 176,
  },
  {
    date: "2023-08-01",
    number: "828",
    // amount: 0,
    // amount: 10,
    amount: 0,
    // net: 0,
    net: 4_000,
    min: 132,
    sms: 184,
  },

  {
    date: "2023-07-30",
    number: "183",
    amount: 1.95,
    net: 815,
    min: "55:49",
    sms: 117,
  },
  {
    date: "2023-07-30",
    number: "938",
    amount: 10.94,
    net: 1_600,
    min: 118,
    sms: 109,
  },
  {
    date: "2023-07-30",
    number: "379",
    amount: 2.72,
    net: 6_540,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-07-30",
    number: "818",
    amount: 18.65,
    net: 1_100,
    min: 166,
    sms: 176,
  },
  {
    date: "2023-07-30",
    number: "828",
    amount: 0.61,
    net: 405,
    min: 132,
    sms: 184,
  },

  {
    date: "2023-07-25",
    number: "183",
    amount: 1.95,
    net: 1_100,
    min: "59:03",
    sms: 118,
  },
  {
    date: "2023-07-25",
    number: "938",
    amount: 10.94,
    net: 1_650,
    min: 120,
    sms: 111,
  },
  {
    date: "2023-07-25",
    number: "379",
    amount: 2.72,
    net: 7_140,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-07-25",
    number: "818",
    amount: 18.65,
    net: 1_120,
    min: 166,
    sms: 176,
  },
  {
    date: "2023-07-25",
    number: "828",
    amount: 0.61,
    net: 1_040,
    min: 132,
    sms: 184,
  },

  {
    date: "2023-07-20",
    number: "183",
    amount: 1.95,
    net: 1_390,
    min: "60:19",
    sms: 119,
  },
  {
    date: "2023-07-20",
    number: "938",
    amount: 10.94,
    net: 1_650,
    min: 148,
    sms: 111,
  },
  {
    date: "2023-07-20",
    number: "379",
    amount: 2.72,
    net: 7_690,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-07-20",
    number: "818",
    amount: 18.65,
    net: 1_150,
    min: 166,
    sms: 176,
  },
  {
    date: "2023-07-20",
    number: "828",
    // amount: 0.61,
    // amount: 5.61,
    amount: 0.61,
    net: 1_050,
    min: 132,
    sms: 184,
  },

  {
    date: "2023-07-15",
    number: "183",
    // amount: 0.95,
    // amount: 10.95,
    amount: 1.95,
    net: 1_880,
    min: "60:40",
    sms: 119,
  },
  {
    date: "2023-07-15",
    number: "938",
    amount: 10.94,
    net: 1_660,
    min: 148,
    sms: 111,
  },
  {
    date: "2023-07-15",
    number: "379",
    amount: 2.72,
    net: 8_870,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-07-15",
    number: "818",
    amount: 18.65,
    net: 1_160,
    min: 166,
    sms: 176,
  },
  {
    date: "2023-07-15",
    number: "828",
    amount: 0.61,
    net: 708,
    min: 132,
    sms: 184,
  },

  {
    date: "2023-07-10",
    number: "183",
    // amount: 5.95,
    amount: 0.95,
    // net: 186,
    net: 1_180,
    min: "74:37",
    sms: 121,
  },
  {
    date: "2023-07-10",
    number: "938",
    amount: 10.94,
    net: 1_680,
    min: 148,
    sms: 111,
  },
  {
    date: "2023-07-10",
    number: "379",
    // amount: 27.72,
    amount: 2.72,
    // net: 23,
    net: 10_200,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-07-10",
    number: "818",
    amount: 18.65,
    net: 1_190,
    min: 166,
    sms: 176,
  },
  {
    date: "2023-07-10",
    number: "828",
    // amount: 5.61,
    amount: 0.61,
    net: 708,
    min: 132,
    // sms: 84,
    sms: 184,
  },

  {
    date: "2023-07-05",
    number: "183",
    amount: 5.95,
    net: 908,
    min: "75:18",
    sms: 126,
  },
  {
    date: "2023-07-05",
    number: "938",
    amount: 10.94,
    net: 1_710,
    min: 148,
    sms: 111,
  },
  {
    date: "2023-07-05",
    number: "379",
    // amount: 2.72,
    amount: 27.72,
    net: 6_420,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-07-05",
    number: "818",
    amount: 18.65,
    net: 1_220,
    min: 166,
    sms: 176,
  },
  {
    date: "2023-07-05",
    number: "828",
    // amount: 5.61,
    amount: 0.61,
    net: 1_030,
    min: 132,
    // sms: 84,
    sms: 184,
  },

  {
    date: "2023-07-01",
    number: "183",
    // amount: 0.95,
    amount: 5.95,
    net: 1_020,
    min: "75:18",
    sms: 126,
  },
  {
    date: "2023-07-01",
    number: "938",
    // amount: 5.94,
    amount: 10.94,
    net: 1_720,
    min: 148,
    sms: 111,
  },
  {
    date: "2023-07-01",
    number: "379",
    // amount: 2.72,
    amount: 27.72,
    net: 7_380,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-07-01",
    number: "818",
    // amount: 13.65,
    amount: 18.65,
    net: 1_220,
    min: 166,
    sms: 176,
  },
  {
    date: "2023-07-01",
    number: "828",
    // amount: 0.61,
    amount: 5.61,
    net: 1_330,
    min: 132,
    sms: 102,
  },

  {
    date: "2023-06-26",
    number: "183",
    amount: 0.95,
    net: 1_460,
    min: "75:18",
    sms: 127,
  },
  {
    date: "2023-06-26",
    number: "938",
    amount: 5.94,
    net: 1_720,
    min: 150,
    sms: 111,
  },
  {
    date: "2023-06-26",
    number: "379",
    amount: 2.72,
    net: 7_940,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-06-26",
    number: "818",
    amount: 13.65,
    net: 1_250,
    min: 166,
    sms: 176,
  },
  {
    date: "2023-06-26",
    number: "828",
    // amount: 0.61,
    // amount: 5.61,
    amount: 0.61,
    net: 1_630,
    min: 132,
    // sms: 2,
    sms: 102,
  },

  {
    date: "2023-06-21",
    number: "183",
    amount: 0.95,
    net: 1_460,
    min: "75:18",
    sms: 127,
  },
  {
    date: "2023-06-21",
    number: "938",
    amount: 5.94,
    net: 1_720,
    min: 155,
    sms: 111,
  },
  {
    date: "2023-06-21",
    number: "379",
    amount: 2.72,
    net: 8_690,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-06-21",
    number: "818",
    amount: 13.65,
    net: 1_270,
    min: 166,
    sms: 176,
  },
  {
    date: "2023-06-21",
    number: "828",
    amount: 0.61,
    net: 2_230,
    min: 133,
    sms: 92,
  },

  {
    date: "2023-06-15",
    number: "183",
    amount: 0.95,
    net: 1_590,
    min: "77:12",
    sms: 127,
  },
  {
    date: "2023-06-15",
    number: "938",
    amount: 5.94,
    net: 1_750,
    min: 158,
    sms: 111,
  },
  {
    date: "2023-06-15",
    number: "379",
    amount: 2.72,
    net: 9_110,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-06-15",
    number: "818",
    amount: 13.65,
    net: 1_670,
    min: 166,
    sms: 176,
  },
  {
    date: "2023-06-15",
    number: "828",
    amount: 4.61,
    // amount: 9.61,
    // amount: 0.61,
    net: 286,
    // net: 2_280,
    min: 133,
    sms: 94,
  },

  {
    date: "2023-06-11",
    number: "183",
    amount: 0.95,
    net: 1_680,
    min: "77:12",
    sms: 129,
  },
  {
    date: "2023-06-11",
    number: "938",
    amount: 5.94,
    net: 1_780,
    min: 158,
    sms: 111,
  },
  {
    date: "2023-06-11",
    number: "379",
    amount: 2.72,
    net: 9_800,
    min: "1:22",
    sms: 130,
  },
  {
    date: "2023-06-11",
    number: "818",
    amount: 13.65,
    net: 2_590,
    min: 166,
    sms: 176,
  },
  {
    date: "2023-06-11",
    number: "828",
    amount: 4.61,
    net: 323,
    min: 133,
    sms: 109,
  },

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
];
