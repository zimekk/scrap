import { resolve } from "path";
import { Entities } from "./entities";

export const vehicleItems = new Entities(
  resolve(__dirname, "../temp/vehicle-items.db")
);

export const vehicle2Items = new Entities(
  resolve(__dirname, "../temp/vehicle2-items.db")
);

export const vehicle3Items = new Entities(
  resolve(__dirname, "../temp/vehicle3-items.db")
);

export const vehicle4Items = new Entities(
  resolve(__dirname, "../temp/vehicle4-items.db")
);

export const vehicle5Items = new Entities(
  resolve(__dirname, "../temp/vehicle5-items.db")
);
