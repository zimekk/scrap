import Big from "big.js";

export const convert = ({
  price,
  quote,
  commission = "2.5",
}: {
  price: string;
  quote: string;
  commission?: string;
}) => {
  const signs =
    new Big(quote).gt(1000) || quote.split(".")[1].length > 4 ? 8 : 6;
  const total = new Big(price).div(quote).round(signs, 0);
  const fee = total.mul(new Big(commission).div("100")).round(signs, 0);

  return {
    // total: total.toFixed(signs),
    value: total.sub(fee).toFixed(signs),
    fee: fee.toFixed(signs),
  };
};
