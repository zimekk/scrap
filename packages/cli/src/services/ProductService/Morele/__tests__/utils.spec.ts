import { loadProductHtml } from "../../../utils";
import { fromHtml } from "../utils";

describe("ProductMoreleService", () => {
  xit("fromHtml", () =>
    [
      {
        html: loadProductHtml(
          "wentylator-phanteks-t30-pwm-ph-f120t30-bg-9240982"
        ),
        result: {
          brand: "Phanteks",
          codes: [],
          id: "morele-9240982",
          image: ["https://images.morele.net/i300/9240982_0_i300.jpg"],
          label: ["sku: 9240982"],
          links: ["InStock"],
          price: ["149,84 PLN"],
          proms: [],
          stars: "",
          title: "Wentylator Phanteks T30 PWM (PH-F120T30_BG)",
          url: "https://www.morele.net/wentylator-phanteks-t30-pwm-ph-f120t30-bg-9240982/",
        },
      },
    ].forEach(({ html, result }) => expect(fromHtml(html)).toEqual(result)));
});
