import { RATES_1 as RATES, getMatch, getRates } from "../utils";

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
                tax: 19.768500000000003,
                total: 105.7185,
              },
              {
                from: "2021-01-01",
                to: "2021-01-31",
                count: 68,
                price: 0.3195,
                value: 21.73,
                vat: 0.23,
                tax: 4.9979000000000005,
                total: 26.7279,
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
                tax: 1.4375,
                total: 7.6875,
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
                tax: 0.0345,
                to: "2021-01-31",
                total: 0.1845,
                value: 0.15,
                vat: 0.23,
              },
            ],
            "Opłata abonamentowa": [
              {
                count: 4,
                from: "2020-08-07",
                price: 0.42,
                tax: 0.3864,
                to: "2020-12-31",
                total: 2.0664,
                value: 1.68,
                vat: 0.23,
              },
              {
                count: 1,
                from: "2021-01-01",
                price: 0.42,
                tax: 0.0966,
                to: "2021-01-31",
                total: 0.5166,
                value: 0.42,
                vat: 0.23,
              },
            ],
            "Opłata jakościowa": [
              {
                from: "2020-08-07",
                to: "2020-12-31",
                count: 269,
                price: 0.0133,
                value: 3.58,
                vat: 0.23,
                tax: 0.8234,
                total: 4.4034,
              },
              {
                from: "2021-01-01",
                to: "2021-01-31",
                count: 68,
                price: 0.0133,
                value: 0.9,
                vat: 0.23,
                tax: 0.20700000000000002,
                total: 1.107,
              },
            ],
            "Opłata kogeneracyjna": [
              {
                count: 269,
                from: "2020-08-07",
                price: 0.00139,
                tax: 0.08510000000000001,
                to: "2020-12-31",
                total: 0.4551,
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
                tax: 1.0304000000000002,
                to: "2021-01-31",
                total: 5.510400000000001,
                value: 4.48,
                vat: 0.23,
              },
            ],
            "Opłata przejściowa": [
              {
                count: 4,
                from: "2020-08-07",
                price: 0.1,
                tax: 0.020000000000000004,
                to: "2020-12-31",
                total: 0.42000000000000004,
                value: 0.4,
                vat: 0.05,
              },
              {
                count: 1,
                from: "2021-01-01",
                price: 0.1,
                tax: 0.005000000000000001,
                to: "2021-01-31",
                total: 0.10500000000000001,
                value: 0.1,
                vat: 0.05,
              },
            ],
            "Opłata sieciowa stała": [
              {
                from: "2020-08-07",
                to: "2020-12-31",
                count: 4,
                price: 10.55,
                value: 42.2,
                vat: 0.23,
                tax: 9.706000000000001,
                total: 51.906000000000006,
              },
              {
                from: "2021-01-01",
                to: "2021-01-31",
                count: 1,
                price: 10.55,
                value: 10.55,
                vat: 0.23,
                tax: 2.4265000000000003,
                total: 12.976500000000001,
              },
            ],
            "Opłata sieciowa zmienna": [
              {
                count: 269,
                from: "2020-08-07",
                price: 0.1372,
                tax: 8.4893,
                to: "2020-12-31",
                total: 45.3993,
                value: 36.91,
                vat: 0.23,
              },
              {
                count: 68,
                from: "2021-01-01",
                price: 0.1372,
                tax: 2.1459,
                to: "2021-01-31",
                total: 11.4759,
                value: 9.33,
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
                tax: 0.30360000000000004,
                total: 1.6236000000000002,
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
                tax: 1.4375,
                total: 7.6875,
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
                tax: 0.0092,
                total: 0.0492,
              },
            ],
            "Opłata OZE": [
              {
                count: 4,
                from: "2021-02-01",
                price: 0.0022,
                tax: 0.0023,
                to: "2021-02-02",
                total: 0.0123,
                value: 0.01,
                vat: 0.23,
              },
            ],
            "Opłata abonamentowa": [
              {
                count: 1,
                from: "2021-02-01",
                price: 0.42,
                tax: 0.0966,
                to: "2021-02-02",
                total: 0.5166,
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
                tax: 1.0304000000000002,
                to: "2021-02-02",
                total: 5.510400000000001,
                value: 4.48,
                vat: 0.23,
              },
            ],
            "Opłata przejściowa": [
              {
                count: 1,
                from: "2021-02-01",
                price: 0.1,
                tax: 0.005000000000000001,
                to: "2021-02-02",
                total: 0.10500000000000001,
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
                tax: 2.461,
                total: 13.161,
              },
            ],
            "Opłata sieciowa zmienna": [
              {
                count: 4,
                from: "2021-02-01",
                price: 0.1391,
                tax: 0.12880000000000003,
                to: "2021-02-02",
                total: 0.6888000000000001,
                value: 0.56,
                vat: 0.23,
              },
            ],
          },
        },
      },
    ].forEach(({ item, list, result }) =>
      expect(getMatch(item, list)).toEqual(result)
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
