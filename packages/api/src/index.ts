import { resolve } from "path";
import { Entities } from "./entities";

export const directions = new Entities(
  resolve(__dirname, "../temp/directions.db")
);

export const items = new Entities(resolve(__dirname, "../temp/items.db"));

export const gpass = new Entities(resolve(__dirname, "../temp/gpass.db"));

export const leclerc = new Entities(resolve(__dirname, "../temp/leclerc.db"));

export const motoItems = new Entities(
  resolve(__dirname, "../temp/moto-items.db")
);

export const plots = new Entities(resolve(__dirname, "../temp/plots.db"));

export const profilesItems = new Entities(
  resolve(__dirname, "../temp/profiles-items.db")
);

export const propertyItems = new Entities(
  resolve(__dirname, "../temp/property-items.db")
);

export const rooms = new Entities(resolve(__dirname, "../temp/rooms.db"));
