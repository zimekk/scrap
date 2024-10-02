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

export const getMatch = (
  item: Item[],
  list: Rates,
): Record<
  string,
  Record<
    string,
    (Item & {
      tax: number;
      count: number;
      price: number;
      vat: number;
      total: number;
    })[]
  >
> => {
  return Object.entries(list).reduce(
    (result, [name, value]) =>
      ((obj) =>
        Object.assign(
          result,
          Object.keys(obj).length
            ? {
                [name]: obj,
              }
            : {},
        ))(
        Object.entries(value).reduce(
          (result, [key, cost]) =>
            ((list) =>
              Object.assign(
                result,
                list.length
                  ? {
                      [key]: list,
                    }
                  : {},
              ))(
              item
                .map((item) =>
                  cost.rates
                    .filter(
                      (price) => price.from <= item.to && item.from <= price.to,
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
                              },
                            ),
                            new Date(from),
                          ),
                          days: differenceInDays(new Date(to), new Date(from)),
                        }),
                        price,
                        vat,
                      }))({
                        from: from > item.from ? from : item.from,
                        to: to < item.to ? to : item.to,
                        value: Math.round(item.value - item.start),
                      }),
                    ),
                )
                .flat()
                .reduce(
                  (result, item) => {
                    if (
                      ["Dystrybucja energii elektrycznej"].includes(name) &&
                      result.length > 0
                    ) {
                      const last = result[result.length - 1];
                      if (
                        item.price === last.price &&
                        item.vat === last.vat &&
                        format(
                          sub(new Date(item.from), { days: 1 }),
                          "yyyy-MM-dd",
                        ) === last.to
                      ) {
                        last.count += item.count;
                        last.to = item.to;
                        return result;
                      }
                    }
                    return result.concat(item);
                  },
                  [] as (Rate & { count: number })[],
                )
                .map((item) =>
                  ((value) => ({
                    ...item,
                    value,
                    tax: item.vat * value,
                    total: (1 + item.vat) * value,
                  }))(Math.round(100 * item.count * item.price) / 100),
                ),
            ),
          {},
        ),
      ),
    {},
  );
};

export const getRates = (
  item: Record<string, { price: number; vat: number }>,
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
              },
            ),
        { days: 1 },
      ),
      "yyyy-MM-dd",
    ),
  }));

export const getTitle = (item: Item[]) =>
  `Szczegóły rozliczenia za okres od ${format(
    new Date(item[0].from),
    "dd.MM.yyyy",
  )} do ${format(new Date(item[item.length - 1].to), "dd.MM.yyyy")}`;

export const getTitleSummary = (item: Item[], list: Rates) => {
  const { total } = Object.values(getMatch(item, list)).reduce(
    (result, line) =>
      Object.entries(line).reduce(
        (result, [_, list]) =>
          list.reduce(
            ({ total }, item) => ({
              total: total + item.total,
            }),
            result,
          ),
        result,
      ),
    {
      total: 0,
    },
  );

  const value = item.reduce(
    (result, { start, value }) => result + value - start,
    0,
  );

  const count = differenceInMonths(
    add(
      set(new Date(item[item.length - 1].to), {
        date: 1,
      }),
      {
        months: 1,
      },
    ),
    new Date(item[0].from),
  );

  return `${new Intl.NumberFormat("pl-PL", {
    minimumFractionDigits: 2,
  }).format(value)} kWh / ${count} ~ ${new Intl.NumberFormat("pl-PL", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(total / count)} zł/m`;
};
