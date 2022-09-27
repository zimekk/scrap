import { resolve } from "path";
import { Entities } from "./entities";

export const hotShotItems = new Entities(
  resolve(__dirname, "../temp/hot-shot-items.db")
);

export const promoItems = new Entities(
  resolve(__dirname, "../temp/promo-items.db")
);
