import { z } from "zod";
import { parse } from "node-html-parser";

export const ItemSchema = z.object({
  name: z.string(),
  desc: z.string(),
  href: z.string(),
  code: z.string().optional(),
});

export const ListSchema = z.object({
  list: ItemSchema.array(),
});

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
