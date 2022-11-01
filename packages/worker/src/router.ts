import Queue from "bull";
import { Router } from "express";
import { createBullBoard } from "@bull-board/api";
import { BullAdapter } from "@bull-board/api/bullAdapter";
import { ExpressAdapter } from "@bull-board/express";

const queue = new Queue("scrap")
  .on("progress", ({ id, name, processedOn }, progress) =>
    console.log(["progress"], progress, { id, name, processedOn })
  )
  .on("completed", ({ id, name, data, opts, finishedOn }, result) =>
    console.log(["completed"], result, { id, name, data, opts, finishedOn })
  );

const BASE_PATH = "/board";

export const router = () => {
  const serverAdapter = new ExpressAdapter();
  serverAdapter.setBasePath(BASE_PATH);

  createBullBoard({
    queues: [new BullAdapter(queue)],
    serverAdapter,
  });

  return Router().use(BASE_PATH, serverAdapter.getRouter());
};
