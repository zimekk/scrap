import { resolve } from "path";
import { Entities } from "./entities";

export const productItems = new Entities(
  resolve(__dirname, "../temp/product-items.db")
);
