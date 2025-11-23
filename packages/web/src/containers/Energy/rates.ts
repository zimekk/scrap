import { type Rates, getRates } from "./utils";

// kab
export const RATES_1: Rates = {
  "Sprzedaż energii elektrycznej": {
    "Energia czynna": {
      value: ({ value }) => value,
      rates: getRates({
        "2019-10-20": {
          price: 0.2762,
          vat: 0.23,
        },
        "2020-01-01": {
          price: 0.3195,
          vat: 0.23,
        },
        "2021-02-01": {
          price: 0.33,
          vat: 0.23,
        },
        "2022-01-01": {
          price: 0.4346,
          vat: 0.05,
        },
        "2022-06-01": {
          price: 0.4522,
          vat: 0.05,
        },
        "2023-01-01": {
          price: 0.414,
          vat: 0.23,
        },
        // "2023-08-01": {
        //   price: 0.698,
        //   vat: 0.23,
        // },
        // "2024-01-01": {
        //   price: 0.414,
        //   vat: 0.23,
        // },
        "2024-07-01": {
          price: 0.505,
          vat: 0.23,
        },
        "2099-01-01": {
          price: 0.505,
          vat: 0.23,
        },
      }),
    },
    "Opłata handlowa": {
      value: ({ count }) => count,
      rates: getRates({
        "2019-10-20": {
          price: 4.29,
          vat: 0.23,
        },
        "2020-01-01": {
          price: 6.25,
          vat: 0.23,
        },
        "2022-01-01": {
          price: 7.8,
          vat: 0.05,
        },
        "2022-06-01": {
          price: 8.38, // ?
          vat: 0.05,
        },
        "2023-01-01": {
          price: 8.38,
          vat: 0.23,
        },
        "2023-03-01": {
          price: 0,
          vat: 0.23,
        },
        "2099-01-01": {
          price: 0,
          vat: 0.23,
        },
      }),
    },
  },
  "Dystrybucja energii elektrycznej": {
    "Opłata jakościowa": {
      value: ({ value }) => value,
      rates: getRates({
        "2019-10-20": {
          price: 0.013,
          vat: 0.23,
        },
        "2020-01-01": {
          price: 0.0133,
          vat: 0.23,
        },
        "2021-02-01": {
          price: 0.0102,
          vat: 0.23,
        },
        "2022-01-01": {
          price: 0.0095,
          vat: 0.05,
        },
        "2023-01-01": {
          price: 0.0095,
          vat: 0.23,
        },
        // "2023-08-01": {
        //   price: 0.0242,
        //   vat: 0.23,
        // },
        "2024-07-01": {
          price: 0.0314,
          vat: 0.23,
        },
        "2025-01-01": {
          price: 0.0321,
          vat: 0.23,
        },
        "2099-01-01": {
          price: 0.0321,
          vat: 0.23,
        },
      }),
    },
    "Opłata OZE": {
      value: ({ value }) => value,
      rates: getRates({
        "2020-01-01": {
          price: 0.0,
          vat: 0.23,
        },
        "2021-01-01": {
          price: 0.0022,
          vat: 0.23,
        },
        "2022-01-01": {
          price: 0.0009,
          vat: 0.05,
        },
        "2023-01-01": {
          price: 0.0,
          vat: 0.23,
        },
        "2024-01-01": {
          price: 0.0,
          vat: 0.23,
        },
        "2025-01-01": {
          price: 0.0035,
          vat: 0.23,
        },
        "2099-01-01": {
          price: 0.0035,
          vat: 0.23,
        },
      }),
    },
    "Opłata sieciowa zmienna": {
      value: ({ value }) => value,
      rates: getRates({
        "2019-10-20": {
          price: 0.1349,
          vat: 0.23,
        },
        "2020-01-01": {
          price: 0.1372,
          vat: 0.23,
        },
        "2021-02-01": {
          price: 0.1391,
          vat: 0.23,
        },
        "2022-01-01": {
          price: 0.1459,
          vat: 0.05,
        },
        "2023-01-01": {
          price: 0.1459,
          vat: 0.23,
        },
        // "2023-08-01": {
        //   price: 0.2244,
        //   vat: 0.23,
        // },
        "2024-07-01": {
          price: 0.226,
          vat: 0.23,
        },
        "2025-01-01": {
          price: 0.2233,
          vat: 0.23,
        },
        "2099-01-01": {
          price: 0.2233,
          vat: 0.23,
        },
      }),
    },
    "Opłata kogeneracyjna": {
      value: ({ value }) => value,
      rates: getRates({
        "2019-10-20": {
          price: 0.00158,
          vat: 0.23,
        },
        "2020-01-01": {
          price: 0.00139,
          vat: 0.23,
        },
        "2021-01-01": {
          price: 0.0,
          vat: 0.23,
        },
        "2022-01-01": {
          price: 0.00406,
          vat: 0.05,
        },
        "2023-01-01": {
          price: 0.00496,
          vat: 0.23,
        },
        "2024-01-01": {
          price: 0.00618,
          vat: 0.23,
        },
        "2025-01-01": {
          price: 0.003,
          vat: 0.23,
        },
        "2099-01-01": {
          price: 0.003,
          vat: 0.23,
        },
      }),
    },
    "Opłata sieciowa stała": {
      value: ({ count }) => count,
      rates: getRates({
        "2019-10-20": {
          price: 10.29,
          vat: 0.23,
        },
        "2020-01-01": {
          price: 10.55,
          vat: 0.23,
        },
        "2021-02-01": {
          price: 10.7,
          vat: 0.23,
        },
        "2022-01-01": {
          price: 11.32,
          vat: 0.05,
        },
        "2023-01-01": {
          price: 11.32,
          vat: 0.23,
        },
        // "2023-08-01": {
        //   price: 17.53,
        //   vat: 0.23,
        // },
        "2024-07-01": {
          price: 17.71,
          vat: 0.23,
        },
        "2025-01-01": {
          price: 17.59,
          vat: 0.23,
        },
        "2099-01-01": {
          price: 17.59,
          vat: 0.23,
        },
      }),
    },
    "Opłata przejściowa": {
      value: ({ count }) => count,
      rates: getRates({
        "2020-01-01": {
          price: 0.1,
          vat: 0.05,
        },
        "2022-01-01": {
          price: 0.1,
          vat: 0.05,
        },
        "2022-04-01": {
          price: 0.1,
          vat: 0.05,
        },
        "2023-01-01": {
          price: 0.1,
          vat: 0.23,
        },
        "2024-07-01": {
          price: 0.1,
          vat: 0.23,
        },
        "2025-01-01": {
          price: 0.1,
          vat: 0.23,
        },
        "2099-01-01": {
          price: 0.1,
          vat: 0.23,
        },
      }),
    },
    "Opłata mocowa": {
      value: ({ count }) => count,
      rates: getRates({
        "2021-01-01": {
          price: 4.48,
          vat: 0.23,
        },
        "2022-01-01": {
          price: 5.68,
          vat: 0.05,
        },
        "2022-04-01": {
          price: 5.68,
          vat: 0.05,
        },
        "2023-01-01": {
          price: 5.72,
          vat: 0.23,
        },
        "2024-01-01": {
          price: 6.39,
          vat: 0.23,
        },
        "2024-07-01": {
          price: 0,
          vat: 0.23,
        },
        "2025-01-01": {
          price: 0,
          vat: 0.23,
        },
        "2099-01-01": {
          price: 0,
          vat: 0.23,
        },
      }),
    },
    "Opłata abonamentowa": {
      value: ({ count }) => count,
      rates: getRates({
        "2019-10-20": {
          price: 0.4,
          vat: 0.23,
        },
        "2020-01-01": {
          price: 0.42,
          vat: 0.23,
        },
        "2022-01-01": {
          price: 0.42,
          vat: 0.05,
        },
        "2023-01-01": {
          price: 0.42,
          vat: 0.23,
        },
        // "2023-08-01": {
        //   price: 0.46,
        //   vat: 0.23,
        // },
        "2024-07-01": {
          price: 0.48,
          vat: 0.23,
        },
        "2099-01-01": {
          price: 0.48,
          vat: 0.23,
        },
      }),
    },
  },
  "Rozporządzenie MKiS z 09.09.2023 r.": {
    "Obniżka należności za 2023 r.": {
      value: () => 1,
      rates: getRates({
        "2023-08-10": {
          price: -101.9,
          vat: 0.23,
        },
      }),
    },
  },
};

// wil
export const RATES_2: Rates = {
  "Sprzedaż energii elektrycznej": {
    ...RATES_1["Sprzedaż energii elektrycznej"],
    "Energia czynna": {
      value: ({ value }) => value,
      rates: getRates({
        "2019-10-20": {
          price: 0.2762,
          vat: 0.23,
        },
        "2020-01-01": {
          price: 0.3195,
          vat: 0.23,
        },
        "2021-02-01": {
          price: 0.33,
          vat: 0.23,
        },
        "2022-01-01": {
          price: 0.4346,
          vat: 0.05,
        },
        "2022-06-01": {
          price: 0.4522,
          vat: 0.05,
        },
        "2023-01-01": {
          price: 0.414,
          vat: 0.23,
        },
        "2023-08-01": {
          price: 0.698,
          vat: 0.23,
        },
        "2024-01-01": {
          price: 0.414,
          // price: 0.698,
          vat: 0.23,
        },
        "2024-07-01": {
          price: 0.505,
          vat: 0.23,
        },
        "2099-01-01": {
          price: 0.505,
          vat: 0.23,
        },
      }),
    },
  },
  "Dystrybucja energii elektrycznej": {
    ...RATES_1["Dystrybucja energii elektrycznej"],
    "Opłata jakościowa": {
      value: ({ value }) => value,
      rates: getRates({
        "2019-10-20": {
          price: 0.013,
          vat: 0.23,
        },
        "2020-01-01": {
          price: 0.0133,
          vat: 0.23,
        },
        "2021-02-01": {
          price: 0.0102,
          vat: 0.23,
        },
        "2022-01-01": {
          price: 0.0095,
          vat: 0.05,
        },
        "2023-01-01": {
          price: 0.0095,
          vat: 0.23,
        },
        "2023-08-01": {
          price: 0.0242,
          vat: 0.23,
        },
        "2024-01-01": {
          price: 0.0095,
          vat: 0.23,
        },
        "2024-07-01": {
          price: 0.0314,
          // price: 0.0095,
          vat: 0.23,
        },
        "2025-01-01": {
          price: 0.0321,
          vat: 0.23,
        },
        "2099-01-01": {
          price: 0.0321,
          vat: 0.23,
        },
      }),
    },
    "Opłata sieciowa zmienna": {
      value: ({ value }) => value,
      rates: getRates({
        "2019-10-20": {
          price: 0.1349,
          vat: 0.23,
        },
        "2020-01-01": {
          price: 0.1372,
          vat: 0.23,
        },
        "2021-02-01": {
          price: 0.1391,
          vat: 0.23,
        },
        "2022-01-01": {
          price: 0.1459,
          vat: 0.05,
        },
        "2023-01-01": {
          price: 0.1459,
          vat: 0.23,
        },
        "2023-08-01": {
          price: 0.2244,
          vat: 0.23,
        },
        "2024-01-01": {
          price: 0.1459,
          vat: 0.23,
        },
        "2024-07-01": {
          price: 0.226,
          // price: 0.1459,
          vat: 0.23,
        },
        "2025-01-01": {
          price: 0.2233,
          vat: 0.23,
        },
        "2099-01-01": {
          price: 0.2233,
          vat: 0.23,
        },
      }),
    },
    "Opłata sieciowa stała": {
      value: ({ count }) => count,
      rates: getRates({
        "2019-10-20": {
          price: 10.29,
          vat: 0.23,
        },
        "2020-01-01": {
          price: 10.55,
          vat: 0.23,
        },
        "2021-02-01": {
          price: 10.7,
          vat: 0.23,
        },
        "2022-01-01": {
          price: 11.32,
          vat: 0.05,
        },
        "2023-01-01": {
          price: 11.32,
          vat: 0.23,
        },
        "2023-08-01": {
          price: 17.53,
          vat: 0.23,
        },
        "2024-01-01": {
          price: 11.32,
          vat: 0.23,
        },
        "2024-07-01": {
          price: 17.71,
          // price: 11.32,
          vat: 0.23,
        },
        "2025-01-01": {
          price: 17.59,
          vat: 0.23,
        },
        "2099-01-01": {
          price: 17.59,
          vat: 0.23,
        },
      }),
    },
    "Opłata przejściowa": {
      value: ({ count }) => count,
      rates: getRates({
        "2019-10-20": {
          price: 0.33,
          vat: 0.23,
        },
        "2022-01-01": {
          price: 0.33,
          vat: 0.05,
        },
        "2022-04-01": {
          price: 0.33,
          // price: 0.33, // ?
          vat: 0.05,
        },
        "2023-01-01": {
          price: 0.33,
          vat: 0.23,
        },
        "2024-01-01": {
          price: 0.33,
          vat: 0.23,
        },
        "2024-07-01": {
          price: 0.33,
          vat: 0.23,
        },
        "2025-01-01": {
          price: 0.33,
          vat: 0.23,
        },
        "2099-01-01": {
          price: 0.33,
          vat: 0.23,
        },
      }),
    },
    "Opłata mocowa": {
      value: ({ count }) => count,
      rates: getRates({
        "2021-01-01": {
          price: 4.48,
          vat: 0.23,
        },
        "2021-04-04": {
          price: 10.46,
          vat: 0.23,
        },
        "2022-01-01": {
          price: 13.25,
          vat: 0.05,
        },
        "2022-04-01": {
          price: 13.25,
          vat: 0.05,
        },
        "2023-01-01": {
          price: 13.35,
          vat: 0.23,
        },
        "2024-01-01": {
          price: 14.9,
          vat: 0.23,
        },
        "2024-07-01": {
          price: 0,
          vat: 0.23,
        },
        "2025-07-01": {
          price: 16.01,
          vat: 0.23,
        },
        "2099-01-01": {
          price: 16.01,
          vat: 0.23,
        },
      }),
    },
    "Opłata abonamentowa": {
      value: ({ count }) => count,
      rates: getRates({
        "2019-10-20": {
          price: 0.4,
          vat: 0.23,
        },
        "2020-01-01": {
          price: 0.42,
          vat: 0.23,
        },
        "2022-01-01": {
          price: 0.42,
          vat: 0.05,
        },
        "2023-01-01": {
          price: 0.42,
          vat: 0.23,
        },
        "2023-08-01": {
          price: 0.46,
          vat: 0.23,
        },
        "2024-01-01": {
          price: 0.42,
          vat: 0.23,
        },
        "2024-07-01": {
          price: 0.48,
          vat: 0.23,
        },
        "2099-01-01": {
          price: 0.48,
          vat: 0.23,
        },
      }),
    },
  },
  "Rozporządzenie MKiS z 09.09.2023 r.": {
    "Obniżka należności za 2023 r.": {
      value: () => 1,
      rates: getRates({
        "2023-10-17": {
          price: -101.9,
          vat: 0.23,
        },
      }),
    },
  },
};
