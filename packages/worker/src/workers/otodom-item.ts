import { ProcessCallbackFunction } from "bull";
import { resolve } from "path";
import { Entities } from "@dev/api/src/entities";
import { browser } from "@dev/cli/src/request";
import { scrapPropertyOtodomItem } from "@dev/cli/src/services/PropertyService/Otodom/utils";

type Summary = {
  request: Record<string, { number?: number; length?: number }>;
};

const summary = {
  created: [],
  checked: [],
  updated: [],
  request: {},
} as Summary & Record<"created" | "checked" | "updated", string[]>;

const propertyItems = new Entities(
  resolve(__dirname, "../../temp/property-items.db")
);

const { OTODOM_URL } = process.env;

const ERA = 24 * 3600 * 1000;

export const timestamp = (mktime: number, period = ERA) =>
  mktime - (mktime % period);

export default (async function (job, done) {
  const { name, data } = job;
  console.log(["process"], { name, data });

  const _time = Date.now();
  const mk = timestamp(_time, 1 * 3600 * 1000); // every hour

  await propertyItems.findOne({ id: data.id }).then((last: any) => {
    if (last) {
      summary.checked.push(last.id);
      return null;
    }
    const { id, type, name, href } = data;

    return browser(
      {
        id: [type, mk, id].join("-"),
        url: `${OTODOM_URL}oferta/${href}`,
      },
      summary
    ).then((html) =>
      html
        ? Promise.resolve(scrapPropertyOtodomItem({ id }, html)).then(
            (item) => {
              console.log(item);
              if (item) {
                summary.created.push(item.id);
                return propertyItems.insert({
                  ...item,
                  _created: _time,
                });
              }
            }
          )
        : null
    );
  });

  done();
} as ProcessCallbackFunction<any>);
