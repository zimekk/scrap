import { ProductSchema } from "../base";

describe("base", () => {
  xit("Product2Schema", () =>
    [
      {
        json: require("./648813.json"),
        result: {
          brand: "Apple",
          codes: [],
          id: "648813",
          image: [
            "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2022/7/pr_2022_7_12_14_53_32_755_00.jpg",
          ],
          label: [
            "od: Apple",
            "kod producenta: MXH02MP/A",
            "kod x-kom: 648813",
          ],
          links: ["Dostępny"],
          price: ["899,00 zł"],
          proms: [],
          stars: "6 (10 opinii)",
          title: "Apple TV 4K 64GB (2021)",
          url: "https://www.x-kom.pl/p/648813",
        },
      },
    ].forEach(({ json, result }) =>
      expect(ProductSchema.parse(json)).toEqual(result)
    ));
});
