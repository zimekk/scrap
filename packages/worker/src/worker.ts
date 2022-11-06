import Queue from "bull";
import { Names } from "./constants";

type Summary = {
  request: Record<string, { number?: number; length?: number }>;
};

export const queue = new Queue("scrap", {
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
  queue.process(Names.PROMO_ITEM, require("./workers/promo-item").default);
  queue.process(Names.PROMO, require("./workers/promo").default);
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
