import { ProcessCallbackFunction } from "bull";
import { PromoService } from "@dev/cli/src/services";
import { Names } from "../constants";

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
  const { name, data, queue } = job;
  console.log(["process"], { name, data });
  await Promise.resolve(PromoService)
    .then((Service) => new Service({ summary }))
    .then((service) =>
      service.request(data.type).then(({ type, list, next }) =>
        Promise.all(
          list.slice(0, 5).map((item) => {
            return queue.add(Names.PROMO_ITEM, item);
          })
        )
      )
    );
  console.log(summary);
  done();
} as ProcessCallbackFunction<any>);
