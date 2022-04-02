import { resolve } from "path";
import { Entities } from "./entities";

export const requests = new Entities(resolve(__dirname, "../temp/requests.db"));

export const requestsHtml = new Entities(
  resolve(__dirname, "../temp/requests-html.db"),
  { autocompactionInterval: 5 * 60 * 1000 }
);
