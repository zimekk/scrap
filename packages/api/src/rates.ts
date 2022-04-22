import { resolve } from "path";
import { Entities } from "./entities";

export const ratesItems = new Entities(
  resolve(__dirname, "../temp/rates-items.db")
);
