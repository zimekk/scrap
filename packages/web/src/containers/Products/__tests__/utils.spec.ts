import { getPrice } from "../utils";

describe("utils", () => {
  it("getPrice", () =>
    [
      {
        price: ["8 559,00 zł"],
        equal: 8559,
      },
      {
        price: ["613,60 PLN"],
        equal: 613.6,
      },
      {
        price: ["Oszczędź 100,00 zł ", "599,00 zł", "499,00 zł"],
        equal: 499,
      },
    ].forEach(({ price, equal }) => expect(getPrice(price)).toEqual(equal)));
});
