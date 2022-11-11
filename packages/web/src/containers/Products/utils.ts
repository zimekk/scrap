const EAN_RE = /^EAN: (\d{13}$)/;

export const getBarcode = (label: string[] = []) =>
  label.find((label) => label.match(EAN_RE))?.replace(EAN_RE, "$1");

export const getPrice = (price: string[]) =>
  Number(
    (price.filter((price) => !price.match(/Oszczędź/)).pop() || "0")
      .replace(/[^0-9,\.]/g, "")
      .replace(",", ".")
  );

export const getMinMaxPrices = ({ price, _history = {} }: any) =>
  Object.entries<any>({
    [Date.now()]: { price },
    ..._history,
  }).reduce(
    (result, [_date, { price }]) =>
      ((price) =>
        Object.assign(
          result,
          0 < price && price < result.priceMin ? { priceMin: price } : {},
          price > result.priceMax ? { priceMax: price } : {}
        ))(getPrice(price)),
    ((price) => ({
      priceNow: price,
      priceMin: price,
      priceMax: price,
    }))(getPrice(price))
  );
