import { resolve } from "path";
import { Entities } from "./entities";

export const gameItems = new Entities(
  resolve(__dirname, "../temp/game-items.db")
);
