import { resolve } from "path";
import { Entities } from "./entities";

export const items = new Entities(resolve(__dirname, "../temp/items.db"));

export const motoItems = new Entities(
  resolve(__dirname, "../temp/moto-items.db")
);

export const profilesItems = new Entities(
  resolve(__dirname, "../temp/profiles-items.db")
);

export const propertyItems = new Entities(
  resolve(__dirname, "../temp/property-items.db")
);

export const rooms = new Entities(resolve(__dirname, "../temp/rooms.db"));
