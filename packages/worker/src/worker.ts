import Queue from "bull";
import { minutes } from "milliseconds";
import { Names } from "./constants";

type Summary = {
  request: Record<string, { number?: number; length?: number }>;
};

const queue = new Queue("scrap", {
  limiter: {
    max: 1, // Max number of jobs processed
    duration: 5000, // per duration in milliseconds
  },
})
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

  // await queue
  //   .add(
  //     {
  //       type: "otodom:sprzedaz/dom/cala-polska",
  //     },
  //     {
  //       jobId: JOB_ID,
  //       repeat: { every: minutes(1) },
  //     }
  //   )
  //   .then(({ id, data }) => console.log(["add"], { id, data }));

  await queue
    .add(
      Names.HOTSHOT,
      {
        type: "get-hot-shot:goracy-strzal",
      },
      {
        repeat: { cron: "1 10,22 * * *" },
      }
    )
    .then(({ id, data }) => console.log(["add"], { id, data }));

  await queue
    .add(
      Names.HOTSHOT,
      {
        type: "get-hot-shot-alto:goracy-strzal",
      },
      {
        repeat: { cron: "1 9,21 * * *" },
      }
    )
    .then(({ id, data }) => console.log(["add"], { id, data }));

  await queue
    .add(
      Names.OTODOM,
      {
        type: "otodom:sprzedaz/dom/cala-polska",
      },
      {
        repeat: { every: minutes(15) },
      }
    )
    .then(({ id, data }) => console.log(["add"], { id, data }));

  await queue
    .addBulk(
      [
        "otodom:sprzedaz/dom/komorow_5600",
        "otodom:sprzedaz/dom/michalowice_62659",
        "otodom:sprzedaz/dom/stare-babice",
      ].map((type) => ({
        name: Names.PROPERTY_OTODOM,
        data: { type },
        opts: {},
      }))
    )
    .then((jobs) =>
      console.log(
        ["add"],
        jobs.map(({ id }) => id)
      )
    );

  await queue.close().then(() => console.log(["close"]));
};

const summary = {
  created: [],
  checked: [],
  updated: [],
  request: {},
} as Summary & Record<"created" | "checked" | "updated", string[]>;

export const worker = async () => {
  console.log(["worker"]);

  queue.process(Names.HOTSHOT, require("./workers/hotshot").default);
  queue.process(Names.OTODOM_ITEM, require("./workers/otodom-item").default);
  queue.process(Names.OTODOM, require("./workers/otodom").default);
  queue.process(
    Names.PROPERTY_OTODOM_ITEM,
    require("./workers/properties/otodom-item").default
  );
  queue.process(
    Names.PROPERTY_OTODOM,
    require("./workers/properties/otodom").default
  );

  queue.process(async (job, done) => {
    console.log(["process"], job.data);
    console.log(summary);
    done();
    // return done(null, { html });
  });
};
