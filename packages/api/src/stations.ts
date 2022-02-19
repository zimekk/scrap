import { resolve } from "path";
import { Entities } from "./entities";

export const stationItems = new Entities(
  resolve(__dirname, "../temp/station-items.db")
);
