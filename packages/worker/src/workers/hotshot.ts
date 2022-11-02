import { ProcessCallbackFunction } from "bull";
import { z } from "zod";
import { HotShotAltoService, HotShotService } from "@dev/cli/src/services";

export enum Types {
  HOTSHOT = "get-hot-shot",
  HOTSHOTALTO = "get-hot-shot-alto",
}

type Summary = {
  request: Record<string, { number?: number; length?: number }>;
};

const SERVICES = {
  [Types.HOTSHOT]: HotShotService,
  [Types.HOTSHOTALTO]: HotShotAltoService,
};

const summary = {
  created: [],
  checked: [],
  updated: [],
  request: {},
} as Summary & Record<"created" | "checked" | "updated", string[]>;

export default (async function (job, done) {
  const { name, data, queue } = job;
  console.log(["process"], job);

  await z
    .nativeEnum(Types)
    .parseAsync(data.type.split(":")[0])
    .then((type) => SERVICES[type])
    .then((Service) => new Service({ summary }))
    .then((service) =>
      service
        .request(data.type)
        .then(({ type, list, next }) =>
          Promise.all(list.map((item) => service.process(item)))
        )
    );

  console.log(summary);

  done();
} as ProcessCallbackFunction<any>);
