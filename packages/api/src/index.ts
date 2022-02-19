import { resolve } from "path";
import { Entities } from "./entities";

export const items = new Entities(resolve(__dirname, "../temp/items.db"));

export const productItems = new Entities(
  resolve(__dirname, "../temp/product-items.db")
);

export const profilesItems = new Entities(
  resolve(__dirname, "../temp/profiles-items.db")
);

export const propertyItems = new Entities(
  resolve(__dirname, "../temp/property-items.db")
);

export const gameItems = new Entities(
  resolve(__dirname, "../temp/game-items.db")
);
