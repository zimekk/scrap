import {
  add,
  differenceInDays,
  differenceInMonths,
  format,
  set,
  sub,
} from "date-fns";

interface Cost {
  value: (t: { value: number; count: number; days: number }) => number;
  rates: Rate[];
}

type Item = {
  from: string;
  to: string;
  start: number;
  value: number;
  estimated?: boolean;
};

interface Rate {
  from: string;
  to: string;
  price: number;
  vat: number;
}

export type Items = Item[];
export type Rates = Record<string, Record<string, Cost>>;

export const getMatch = (item: Item[], list: Rates) => {
  return Object.entries(list).reduce(
    (result, [key, value]) =>
      Object.assign(result, {
        [key]: Object.entries(value).reduce(
          (result, [key, cost]) =>
            Object.assign(result, {
              [key]: item
                .map((item) =>
                  cost.rates
                    .filter(
                      (price) => price.from <= item.to && item.from <= price.to
                    )
                    .map(({ from, to, price, vat }) =>
                      (({ from, to, value }) => ({
                        from,
                        to,
                        count: cost.value({
                          value,
                          count: differenceInMonths(
                            add(
                              set(new Date(to), {
                                date: 1,
                              }),
                              {
                                months: 1,
                              }
                            ),
                            new Date(from)
                          ),
                          days: differenceInDays(new Date(to), new Date(from)),
                        }),
                        price,
                        vat,
                      }))({
                        from: from > item.from ? from : item.from,
                        to: to < item.to ? to : item.to,
                        value: Math.round(item.value - item.start),
                      })
                    )
                    .map((item) =>
                      ((value) => ({
                        ...item,
                        value,
                        tax: item.vat * value,
                        total: (1 + item.vat) * value,
                      }))(Math.round(100 * item.count * item.price) / 100)
                    )
                )
                .flat(),
            }),
          {}
        ),
      }),
    {}
  );
};

export const getRates = (
  item: Record<string, { price: number; vat: number }>
) =>
  Object.entries(item).map(([from, item], i, list) => ({
    ...item,
    from,
    to: format(
      sub(
        list[i + 1]
          ? new Date(list[i + 1][0])
          : add(
              set(new Date(from), {
                date: 1,
              }),
              {
                months: 1,
              }
            ),
        { days: 1 }
      ),
      "yyyy-MM-dd"
    ),
  }));

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
        "2099-01-01": {
          price: 0.4522,
          vat: 0.05,
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
        "2099-01-01": {
          price: 8.38,
          vat: 0.05,
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
        "2099-01-01": {
          price: 0.0095,
          vat: 0.05,
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
        "2099-01-01": {
          price: 0.0009,
          vat: 0.05,
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
        "2099-01-01": {
          price: 0.1459,
          vat: 0.05,
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
        "2099-01-01": {
          price: 0.00406,
          vat: 0.05,
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
        "2099-01-01": {
          price: 11.32,
          vat: 0.05,
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
        "2099-01-01": {
          price: 0.1,
          vat: 0.05,
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
        "2099-01-01": {
          price: 5.68,
          vat: 0.05,
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
        "2099-01-01": {
          price: 0.42,
          vat: 0.05,
        },
      }),
    },
  },
};

export const RATES_2: Rates = {
  ...RATES_1,
  "Dystrybucja energii elektrycznej": {
    ...RATES_1["Dystrybucja energii elektrycznej"],
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
        "2099-01-01": {
          price: 0.33,
          vat: 0.05,
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
        "2024-04-01": {
          price: 13.25,
          vat: 0.05,
        },
      }),
    },
  },
};
