import { resolve } from "path";
import { Entities } from "./entities";

export const quotesItems = new Entities(
  resolve(__dirname, "../temp/quotes-items.db")
);

export const quotesMetas = new Entities(
  resolve(__dirname, "../temp/quotes-metas.db")
);
