import fetch from "isomorphic-fetch";
import chunk from "chunk";
import { z } from "zod";

const { SYNC_URL } = process.env;

const post = (path: string, data?: object) =>
  fetch(`${SYNC_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : null,
  });

export const dedupe = async (type = "") => {
  const summary = {
    created: [],
    checked: [],
    updated: [],
    request: {},
  };

  console.log(["dedupe"], { type });

  const ProcessSchema = z.object({
    id: z.string(),
    type: z.string(),
    data: z.object({
      url: z.string(),
    }),
    opts: z.object({
      delay: z.number().optional(),
      timestamp: z.number(),
    }),
  });

  const r: Record<string, object> = {};
  const counter = {
    total: 0,
    hosts: 0,
    clean: 0,
  };

  for (let start = 0, limit = 1000; ; start += limit) {
    const items = await post("entries", {
      data: true,
      type,
      start,
      limit: limit + 1,
    }).then((response) => response.json());
    const entries = items.slice(0, limit);
    console.log(["process"], start, start + entries.length);
    counter.total += entries.length;
    await ProcessSchema.transform(({ id, data, opts, type }) => {
      // console.log({ id, data, opts });
      if (!["GPASS", "HOTSHOT", "UNKNOWN"].includes(type)) {
        Object.assign(r, {
          [data.url]: Object.assign(r[data.url] || {}, {
            [id]: opts.timestamp,
          }),
        });
      }
      return id;
    })
      .array()
      .parseAsync(entries);
    if (!(items.length > limit) || start + limit >= 6000) {
      break;
    }
  }

  counter.hosts += Object.keys(r).length;

  const t = Object.entries(r);
  // console.log(t);

  const s = t
    .map(([id, it]) => [
      id,
      Object.entries(it)
        .sort((a, b) => b[1] - a[1])
        .splice(1),
    ])
    .map(([_, it]) => it)
    .flat();

  counter.clean += s.length;

  const c = chunk(
    s.map(([id]) => id),
    50
  );
  console.log(c);

  console.log(counter);

  await c
    .reduce(
      (promise, selected, k, { length }) =>
        promise
          .then(() =>
            (console.log({ selected }),
            post("entries/delete", { selected })).then((response) =>
              response.text()
            )
          )
          .then((status) => console.log({ status }, k + 1, length)),
      Promise.resolve()
    )
    .catch(console.error);

  console.log(summary);
};
