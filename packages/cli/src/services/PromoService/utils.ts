import { parse } from "node-html-parser";
import { ListSchema } from "./types";

export const fromHtml = (html: string) => {
  const $root = parse(html);

  const list = $root
    .querySelectorAll("h3 + p")
    .map(($div: any) => $div.parentNode.parentNode)
    .map(($div: any) => ({
      name: $div.querySelector("h3").text,
      desc: $div.querySelector("p").text.replace(/\s+\n/, "\n"),
      href: $div.querySelector("a[href]")?.getAttribute("href"),
    }))
    .map((item) => ({
      ...item,
      ...(([_, code]) => (code ? { code } : {}))(
        item.desc.match(/Twój kod rabatowy: (.+)/) || []
      ),
    }))
    .slice(0, 50);

  const json = {
    list,
  };

  try {
    return ListSchema.parse(json);
  } catch (e) {
    console.log(json);
    throw e;
  }
};
