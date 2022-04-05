import { convert } from "..";

describe("utils", () => {
  it("convert", () =>
    [
      {
        price: "10",
        quote: "600.0187", // 1 SOL = 600,0187 zł
        fee: "0.000416",
        value: "0.016250",
      },
      {
        price: "10",
        quote: "549.8328", // 1 SOL = 549,8328 zł
        fee: "0.000454",
        value: "0.017733",
      },
      {
        commission: "2.4",
        price: "5",
        // quote: ('14.9800'), // 1 CRV = 14,9800 zł
        quote: "14.97999", // 1 CRV = 14,9800 zł
        fee: "0.00801068",
        value: "0.32576791",
      },
      {
        price: "100.00",
        quote: "191214.4238", // 1 BTC = 191 214,4238 zł
        fee: "0.00001307",
        value: "0.00050990",
      },
      {
        commission: "2.63",
        price: "0.01583",
        quote: "998.344488", // 1 BTC = 998,344488 ATOM
        fee: "0.00000041", // 0.00000039
        value: "0.00001544", // 0.00001546
      },
      {
        commission: "2.63",
        price: "0.497684",
        quote: "27773.82772", // 1 BTC = 27773.82772 ADA
        fee: "0.00000047", // 0.00000044
        value: "0.00001744", // 0.00001747
      },
      {
        commission: "2.63",
        price: "0.023746",
        quote: "996.959274", // 1 BTC = 996,959274 ATOM
        fee: "0.00000062", // 0.00000059
        value: "0.00002319", // 0.00002322
      },
      {
        price: "10.00",
        quote: "159959.4704", // 1 BTC = 159 959,4704 zł
        fee: "0.00000156",
        value: "0.00006095",
      },
    ].forEach(({ value, fee, ...params }) =>
      expect(convert(params)).toEqual({ value, fee })
    ));
});
