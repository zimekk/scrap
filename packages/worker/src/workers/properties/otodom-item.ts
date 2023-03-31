import { type ProcessCallbackFunction } from "bull";
import { PropertyOtodomService } from "@dev/cli/src/services";

type Summary = {
  request: Record<string, { number?: number; length?: number }>;
};

const summary = {
  created: [],
  checked: [],
  updated: [],
  request: {},
} as Summary & Record<"created" | "checked" | "updated", string[]>;

export default (async function (job, done) {
  const { name, data } = job;
  console.log(["process"], { name, data });
  await Promise.resolve(PropertyOtodomService)
    .then((Service) => new Service({ summary }))
    .then((service) => service.process(data));
  console.log(summary);
  done();
} as ProcessCallbackFunction<any>);
