import Queue from "bull";
import { minutes } from "milliseconds";
import { resolve } from "path";
import { Entities } from "@dev/api/src/entities";
import { browser } from "@dev/cli/src/request";
import {
  scrapPropertyOtodomList,
  scrapPropertyOtodomItem,
} from "@dev/cli/src/services/PropertyService/Otodom/utils";

type Summary = {
  request: Record<string, { number?: number; length?: number }>;
};

const propertyItems = new Entities(
  resolve(__dirname, "../temp/property-items.db")
);

const { OTODOM_URL, STORE_ALTO_URL, STORE_URL } = process.env;

const queue = new Queue("scrap")
  .on("progress", ({ id, name, processedOn }, progress) =>
    console.log(["progress"], progress, { id, name, processedOn })
  )
  .on("completed", ({ id, name, data, opts, finishedOn }, result) =>
    console.log(["completed"], result, { id, name, data, opts, finishedOn })
  );

const JOB_ID = "broker";

export const broker = async () => {
  console.log(["broker"]);

  // await queue
  //   .add({
  //     type: "get-hot-shot:goracy-strzal",
  //   })
  //   .then(({ id, data }) => console.log(["add"], { id, data }));

  // await queue
  //   .add({
  //     type: "get-hot-shot-alto:goracy-strzal",
  //   })
  //   .then(({ id, data }) => console.log(["add"], { id, data }));

  await Promise.all(
    (
      await queue.getRepeatableJobs()
    ).map(
      async ({ key }) =>
        Boolean(console.log(["removeRepeatableByKey"], { key })) ||
        (await queue.removeRepeatableByKey(key))
    )
  );

  await queue
    .add(
      {
        type: "otodom:sprzedaz/dom/cala-polska",
      },
      {
        jobId: JOB_ID,
        repeat: { every: minutes(15) },
      }
    )
    .then(({ id, data }) => console.log(["add"], { id, data }));

  await queue.close().then(() => console.log(["close"]));
};

const ERA = 24 * 3600 * 1000;

export const timestamp = (mktime: number, period = ERA) =>
  mktime - (mktime % period);

const summary = {
  created: [],
  checked: [],
  updated: [],
  request: {},
} as Summary & Record<"created" | "checked" | "updated", string[]>;

enum Types {
  HOTSHOT = "get-hot-shot",
  HOTSHOTALTO = "get-hot-shot-alto",
  OTODOM = "otodom",
}

export const worker = async () => {
  console.log(["worker"]);

  queue.process(async (job, done) => {
    console.log(["process"], job.data);

    const _time = Date.now();

    const mk = timestamp(_time, 1 * 3600 * 1000); // every hour

    const [site, type] = job.data.type.split(":") as [Types, string];

    const id = [site, mk, type].join("-");

    const html = await {
      [Types.HOTSHOT]: () =>
        browser(
          {
            id,
            url: `${STORE_URL}${type}`,
          },
          summary,
          {}
        ),
      [Types.HOTSHOTALTO]: () =>
        browser(
          {
            id,
            url: `${STORE_ALTO_URL}${type}`,
          },
          summary,
          {}
        ),
      [Types.OTODOM]: () => {
        const url = `${OTODOM_URL}oferty/${type}`;
        return browser(
          {
            id,
            url,
          },
          summary
        )
          .then((html) =>
            scrapPropertyOtodomList(
              { id, url, canonicalURL: new URL(url).pathname },
              html
            )
          )
          .then(async ({ items, nextPage }) => {
            await Promise.all(
              items.slice(0, 2).map(
                async (item) =>
                  await propertyItems
                    .findOne({ id: item.id })
                    .then((last: any) => {
                      console.log({
                        item,
                        last: last ? { _id: last._id } : last,
                      });
                      if (last) {
                        summary.checked.push(last.id);
                        return null;
                      }
                      const { id, name, href } = item;

                      return browser(
                        {
                          id: ["otodom-item", mk, id].join("-"),
                          url: `${OTODOM_URL}oferta/${href}`,
                        },
                        summary
                      ).then((html) =>
                        // saveProductHtml(href, html) ||
                        // ["otodom-63400761"].includes(id) &&
                        html
                          ? Promise.resolve(
                              scrapPropertyOtodomItem({ id }, html)
                            ).then((item) => {
                              console.log(item);
                              if (item) {
                                summary.created.push(item.id);
                                return propertyItems.insert({
                                  ...item,
                                  _created: _time,
                                });
                              }
                            })
                          : null
                      );
                    })
              )
            );

            return null;
          });
      },
    }[site]();
    console.log(summary);
    return done(null, { html });
  });
};
