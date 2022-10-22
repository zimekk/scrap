import Queue from "bull";
import { browser } from "@dev/cli/src/request";

const { STORE_ALTO_URL, STORE_URL } = process.env;

const queue = new Queue("scrap")
  .on("progress", ({ id, name, processedOn }, progress) =>
    console.log(["progress"], progress, { id, name, processedOn })
  )
  .on("completed", ({ id, name, opts, finishedOn }, result) =>
    console.log(["completed"], result, { id, name, opts, finishedOn })
  );

export const broker = async () => {
  console.log(["broker"]);

  await queue
    .add({
      type: "get-hot-shot:goracy-strzal",
    })
    .then(({ id, data }) => console.log(["add"], { id, data }));

  await queue
    .add({
      type: "get-hot-shot-alto:goracy-strzal",
    })
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
};

enum Types {
  HOTSHOT = "get-hot-shot",
  HOTSHOTALTO = "get-hot-shot-alto",
}

export const worker = async () => {
  console.log(["worker"]);

  queue.process(async (job, done) => {
    console.log(["process"], job.data);

    const _time = Date.now();

    const mk = timestamp(_time, 1 * 3600 * 1000); // every hour

    const [site, type] = job.data.type.split(":") as [Types, string];

    const html = await browser(
      {
        id: [site, mk, type].join("-"),
        url: {
          [Types.HOTSHOT]: `${STORE_URL}${type}`,
          [Types.HOTSHOTALTO]: `${STORE_ALTO_URL}${type}`,
        }[site],
      },
      summary,
      {}
    );
    console.log(summary);
    return done(null, { html });
  });
};
