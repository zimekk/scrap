import { resolve } from "path";
import { Entities } from "./entities";

export const promoItems = new Entities(
  resolve(__dirname, "../temp/promo-items.db")
);
