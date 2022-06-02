import { loadProductHtml } from "../../../utils";
import { fromHtml } from "../utils";

describe("ProductTousService", () => {
  xit("fromHtml", () =>
    [
      {
        html: loadProductHtml(
          "tous-cool-joykolczyki-z-zoltego-srebra-vermeil-p-018153570"
        ),
        result: {
          brand: "TOUS",
          codes: [],
          id: "018153570",
          image: [
            "https://cloud-media.tous.com/medias/sys_master/images/h98/h2b/10823576485918/product_018153570-20211011160030/product-018153570-20211011160030.jpg_515Wx515H",
            "https://cloud-media.tous.com/medias/sys_master/images/h50/h3d/10823577403422/product_018153570_1-20211011160030/product-018153570-1-20211011160030.jpg_515Wx515H",
            "https://cloud-media.tous.com/medias/sys_master/images/h5e/h91/10967456710686/product_018153570_10-20220103200107/product-018153570-10-20220103200107.jpg_515Wx515H",
            "https://cloud-media.tous.com/medias/sys_master/images/he7/h30/10967457497118/product_018153570_11-20220103200107/product-018153570-11-20220103200107.jpg_515Wx515H",
          ],
          label: [],
          links: [],
          price: ["349"],
          proms: [],
          stars: "",
          title: "Tous Cool Joy - Kolczyki z żółtego srebra Vermeil",
          url: "https://www.tous.com/pl-pl/tous-cool-joykolczyki-z-zoltego-srebra-vermeil/p/018153570",
        },
      },
    ].forEach(({ html, result }) => expect(fromHtml(html)).toEqual(result)));
});
