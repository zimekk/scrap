import { RATES_1 as RATES } from "../rates";
import { getMatch, getRates } from "../utils";

describe("utils", () => {
  it("match", () =>
    [
      {
        item: [
          {
            from: "2020-08-07",
            to: "2020-12-31",
            start: 5479.41,
            value: 5748.76,
            estimated: true,
          },
          {
            from: "2021-01-01",
            to: "2021-01-31",
            start: 5748.76,
            value: 5816.55,
            estimated: true,
          },
        ],
        list: RATES,
        result: {
          "Sprzedaż energii elektrycznej": {
            "Energia czynna": [
              {
                from: "2020-08-07",
                to: "2020-12-31",
                count: 269,
                price: 0.3195,
                value: 85.95,
                vat: 0.23,
                tax: 19.77,
                total: 105.72,
              },
              {
                from: "2021-01-01",
                to: "2021-01-31",
                count: 68,
                price: 0.3195,
                value: 21.73,
                vat: 0.23,
                tax: 5,
                total: 26.73,
              },
            ],
            "Opłata handlowa": [
              {
                from: "2020-08-07",
                to: "2020-12-31",
                count: 4,
                price: 6.25,
                value: 25,
                vat: 0.23,
                tax: 5.75,
                total: 30.75,
              },
              {
                from: "2021-01-01",
                to: "2021-01-31",
                count: 1,
                price: 6.25,
                value: 6.25,
                vat: 0.23,
                tax: 1.44,
                total: 7.69,
              },
            ],
          },
          "Dystrybucja energii elektrycznej": {
            "Opłata OZE": [
              {
                count: 269,
                from: "2020-08-07",
                price: 0,
                tax: 0,
                to: "2020-12-31",
                total: 0,
                value: 0,
                vat: 0.23,
              },
              {
                count: 68,
                from: "2021-01-01",
                price: 0.0022,
                tax: 0.03,
                to: "2021-01-31",
                total: 0.18,
                value: 0.15,
                vat: 0.23,
              },
            ],
            "Opłata abonamentowa": [
              {
                count: 5,
                from: "2020-08-07",
                price: 0.42,
                tax: 0.48,
                to: "2021-01-31",
                total: 2.58,
                value: 2.1,
                vat: 0.23,
              },
            ],
            "Opłata jakościowa": [
              {
                from: "2020-08-07",
                to: "2021-01-31",
                count: 337,
                price: 0.0133,
                vat: 0.23,
                tax: 1.03,
                value: 4.48,
                total: 5.51,
              },
            ],
            "Opłata kogeneracyjna": [
              {
                count: 269,
                from: "2020-08-07",
                price: 0.00139,
                tax: 0.09,
                to: "2020-12-31",
                total: 0.46,
                value: 0.37,
                vat: 0.23,
              },
              {
                count: 68,
                from: "2021-01-01",
                price: 0,
                tax: 0,
                to: "2021-01-31",
                total: 0,
                value: 0,
                vat: 0.23,
              },
            ],
            "Opłata mocowa": [
              {
                count: 1,
                from: "2021-01-01",
                price: 4.48,
                tax: 1.03,
                to: "2021-01-31",
                total: 5.51,
                value: 4.48,
                vat: 0.23,
              },
            ],
            "Opłata przejściowa": [
              {
                count: 5,
                from: "2020-08-07",
                price: 0.1,
                tax: 0.03,
                to: "2021-01-31",
                total: 0.53,
                value: 0.5,
                vat: 0.05,
              },
            ],
            "Opłata sieciowa stała": [
              {
                from: "2020-08-07",
                to: "2021-01-31",
                count: 5,
                price: 10.55,
                value: 52.75,
                vat: 0.23,
                tax: 12.13,
                total: 64.88,
              },
            ],
            "Opłata sieciowa zmienna": [
              {
                count: 337,
                from: "2020-08-07",
                price: 0.1372,
                tax: 10.64,
                to: "2021-01-31",
                total: 56.88,
                value: 46.24,
                vat: 0.23,
              },
            ],
          },
        },
      },
      {
        item: [
          {
            from: "2021-02-01",
            to: "2021-02-02",
            start: 5816.55,
            value: 5820.63,
          },
        ],
        list: RATES,
        result: {
          "Sprzedaż energii elektrycznej": {
            "Energia czynna": [
              {
                from: "2021-02-01",
                to: "2021-02-02",
                count: 4,
                price: 0.33,
                value: 1.32,
                vat: 0.23,
                tax: 0.3,
                total: 1.62,
              },
            ],
            "Opłata handlowa": [
              {
                from: "2021-02-01",
                to: "2021-02-02",
                count: 1,
                price: 6.25,
                value: 6.25,
                vat: 0.23,
                tax: 1.44,
                total: 7.69,
              },
            ],
          },
          "Dystrybucja energii elektrycznej": {
            "Opłata jakościowa": [
              {
                from: "2021-02-01",
                to: "2021-02-02",
                count: 4,
                price: 0.0102,
                value: 0.04,
                vat: 0.23,
                tax: 0.01,
                total: 0.05,
              },
            ],
            "Opłata OZE": [
              {
                count: 4,
                from: "2021-02-01",
                price: 0.0022,
                tax: 0.0,
                to: "2021-02-02",
                total: 0.01,
                value: 0.01,
                vat: 0.23,
              },
            ],
            "Opłata abonamentowa": [
              {
                count: 1,
                from: "2021-02-01",
                price: 0.42,
                tax: 0.1,
                to: "2021-02-02",
                total: 0.52,
                value: 0.42,
                vat: 0.23,
              },
            ],
            "Opłata kogeneracyjna": [
              {
                count: 4,
                from: "2021-02-01",
                price: 0,
                tax: 0,
                to: "2021-02-02",
                total: 0,
                value: 0,
                vat: 0.23,
              },
            ],
            "Opłata mocowa": [
              {
                count: 1,
                from: "2021-02-01",
                price: 4.48,
                tax: 1.03,
                to: "2021-02-02",
                total: 5.51,
                value: 4.48,
                vat: 0.23,
              },
            ],
            "Opłata przejściowa": [
              {
                count: 1,
                from: "2021-02-01",
                price: 0.1,
                tax: 0.01,
                to: "2021-02-02",
                total: 0.11,
                value: 0.1,
                vat: 0.05,
              },
            ],
            "Opłata sieciowa stała": [
              {
                from: "2021-02-01",
                to: "2021-02-02",
                count: 1,
                price: 10.7,
                value: 10.7,
                vat: 0.23,
                tax: 2.46,
                total: 13.16,
              },
            ],
            "Opłata sieciowa zmienna": [
              {
                count: 4,
                from: "2021-02-01",
                price: 0.1391,
                tax: 0.13,
                to: "2021-02-02",
                total: 0.69,
                value: 0.56,
                vat: 0.23,
              },
            ],
          },
        },
      },
    ].forEach(({ item, list, result }) =>
      expect(getMatch(item, list)).toEqual(result),
    ));

  it("rates", () =>
    [
      {
        item: {
          "2020-08-07": {
            price: 0.3195,
            vat: 0.23,
          },
          "2021-02-01": {
            price: 0.33,
            vat: 0.23,
          },
        },
        result: [
          {
            from: "2020-08-07",
            to: "2021-01-31",
            price: 0.3195,
            vat: 0.23,
          },
          {
            from: "2021-02-01",
            to: "2021-02-28",
            price: 0.33,
            vat: 0.23,
          },
        ],
      },
    ].forEach(({ item, result }) => expect(getRates(item)).toEqual(result)));
});
