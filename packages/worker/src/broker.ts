import { minutes } from "milliseconds";
import { Names } from "./constants";
import { queue } from "./worker";

// const JOB_ID = "broker";

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
    (await queue.getRepeatableJobs()).map(
      async ({ key }) =>
        Boolean(console.log(["removeRepeatableByKey"], { key })) ||
        (await queue.removeRepeatableByKey(key)),
    ),
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
      },
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
      },
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
      },
    )
    .then(({ id, data }) => console.log(["add"], { id, data }));

  await queue
    .add(
      Names.PROMO,
      {
        type: "get-promo:promocje",
      },
      {
        repeat: { every: minutes(15) },
      },
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
      })),
    )
    .then((jobs) =>
      console.log(
        ["add"],
        jobs.map(({ id }) => id),
      ),
    );

  await queue.close().then(() => console.log(["close"]));
};
