import { loadProductHtml } from "../../../utils";
import { fromHtml } from "../utils";

describe("ProductBotlandService", () => {
  xit("fromHtml", () =>
    [
      {
        html: loadProductHtml(
          "moduly-i-zestawy-raspberry-pi-4b-14647-raspberry-pi-4-model-b-wifi-dualband-bluetooth-4gb-ram-15ghz-765756931182"
        ),
        result: {
          brand: "Raspberry Pi",
          codes: [],
          id: "botland-RPI-14647",
          image: [
            "https://cdn3.botland.com.pl/68232-pdt_540/raspberry-pi-4-model-b-wifi-dualband-bluetooth-4gb-ram-15ghz.jpg",
            "https://cdn1.botland.com.pl/68232-small_default/raspberry-pi-4-model-b-wifi-dualband-bluetooth-4gb-ram-15ghz.jpg",
            "https://cdn3.botland.com.pl/59268-small_default/raspberry-pi-4-model-b-wifi-dualband-bluetooth-4gb-ram-15ghz.jpg",
            "https://cdn2.botland.com.pl/59267-small_default/raspberry-pi-4-model-b-wifi-dualband-bluetooth-4gb-ram-15ghz.jpg",
            "https://cdn1.botland.com.pl/59269-small_default/raspberry-pi-4-model-b-wifi-dualband-bluetooth-4gb-ram-15ghz.jpg",
            "https://cdn2.botland.com.pl/59480-small_default/raspberry-pi-4-model-b-wifi-dualband-bluetooth-4gb-ram-15ghz.jpg",
            "https://cdn3.botland.com.pl/59481-small_default/raspberry-pi-4-model-b-wifi-dualband-bluetooth-4gb-ram-15ghz.jpg",
            "https://cdn3.botland.com.pl/59482-small_default/raspberry-pi-4-model-b-wifi-dualband-bluetooth-4gb-ram-15ghz.jpg",
            "https://cdn1.botland.com.pl/59483-small_default/raspberry-pi-4-model-b-wifi-dualband-bluetooth-4gb-ram-15ghz.jpg",
            "https://cdn2.botland.com.pl/59484-small_default/raspberry-pi-4-model-b-wifi-dualband-bluetooth-4gb-ram-15ghz.jpg",
            "https://cdn1.botland.com.pl/59485-small_default/raspberry-pi-4-model-b-wifi-dualband-bluetooth-4gb-ram-15ghz.jpg",
            "https://cdn1.botland.com.pl/59486-small_default/raspberry-pi-4-model-b-wifi-dualband-bluetooth-4gb-ram-15ghz.jpg",
            "https://cdn1.botland.com.pl/59487-small_default/raspberry-pi-4-model-b-wifi-dualband-bluetooth-4gb-ram-15ghz.jpg",
            "https://cdn1.botland.com.pl/59488-small_default/raspberry-pi-4-model-b-wifi-dualband-bluetooth-4gb-ram-15ghz.jpg",
            "https://cdn3.botland.com.pl/59489-small_default/raspberry-pi-4-model-b-wifi-dualband-bluetooth-4gb-ram-15ghz.jpg",
            "https://cdn1.botland.com.pl/59490-small_default/raspberry-pi-4-model-b-wifi-dualband-bluetooth-4gb-ram-15ghz.jpg",
            "https://cdn1.botland.com.pl/59491-small_default/raspberry-pi-4-model-b-wifi-dualband-bluetooth-4gb-ram-15ghz.jpg",
            "https://cdn1.botland.com.pl/59492-small_default/raspberry-pi-4-model-b-wifi-dualband-bluetooth-4gb-ram-15ghz.jpg",
          ],
          label: ["sku: RPI-14647"],
          links: ["OutOfStock"],
          price: ["369,00 PLN"],
          proms: [],
          stars: "",
          title:
            "Raspberry Pi 4 model B WiFi DualBand Bluetooth 4GB RAM 1,5GHz",
          url: "//botland.com.pl/moduly-i-zestawy-raspberry-pi-4b/14647-raspberry-pi-4-model-b-wifi-dualband-bluetooth-4gb-ram-15ghz-765756931182.html",
        },
      },
    ].forEach(({ html, result }) => expect(fromHtml(html)).toEqual(result)));
});
