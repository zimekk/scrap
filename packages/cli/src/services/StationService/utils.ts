import { parse } from "node-html-parser";

export const fromHtml = (html: string) =>
  (($root) => ({
    address: $root.querySelector("div.right-side > a:first-child")?.text,
    petrol_list: $root.querySelectorAll("ul.petrol-list > li").map(($li) => ({
      type: $li.childNodes[0].text,
      price: $li.childNodes[1].text,
    })),
  }))(parse(html));
