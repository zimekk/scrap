import fetch from "isomorphic-fetch";
import { z } from "zod";
import { HotShotService } from "./services";

const { SYNC_URL } = process.env;

const post = (path: string, data?: object) =>
  fetch(`${SYNC_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : null,
  });

export const sync = async () => {
  const summary = {
    created: [],
    checked: [],
    updated: [],
    request: {},
  };

  console.log(["sync"]);

  post("entries")
    .then((response) => response.json())
    .then(
      z
        .object({
          data: z.object({
            url: z.string(),
          }),
          returnvalue: z
            .object({
              json: z.any(),
            })
            .transform(({ json }) => json),
        })
        .array().parseAsync
    )
    .then((data) =>
      Promise.all(
        data
          .map(({ returnvalue }) => returnvalue)
          .filter(({ Id }) => Boolean(Id))
          .map((item) => {
            const service = new HotShotService({ summary });
            return service.process(item);
          })
      )
    )
    .then(() => console.log(summary));
};
