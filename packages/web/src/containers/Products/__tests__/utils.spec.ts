import { getBarcode, getPrice } from "../utils";

describe("utils", () => {
  it("getBarcode", () =>
    [
      {
        label: ["EAN: 56035373503", "Kod w sklepie: TORLOWFLIPSIDE300AWIII"],
        barcode: undefined,
      },
      {
        label: ["EAN: 619659170325", "Kod w sklepie: RAMSANSDXC128GB95PROF"],
        barcode: undefined,
      },
      {
        label: ["EAN: 8024221693133", "Kod w sklepie: TORMANMA2-BP-T"],
        barcode: "8024221693133",
      },
    ].forEach(({ label, barcode }) =>
      expect(getBarcode(label)).toEqual(barcode)
    ));

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
