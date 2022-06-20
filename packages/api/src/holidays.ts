import { resolve } from "path";
import { Entities } from "./entities";

export const holidaysItems = new Entities(
  resolve(__dirname, "../temp/holidays-items.db")
);

export const holidaysTuiItems = new Entities(
  resolve(__dirname, "../temp/holidays-tui-items.db")
);
