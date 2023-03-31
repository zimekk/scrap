import { type RequestHandler } from "express";
import { leclerc } from "@dev/api";
import type { LeclercType } from "@dev/cli/src/services/LeclercService/types";

export const getLeclercData: RequestHandler = (_req, res) =>
  Promise.all([leclerc.find({}) as Promise<LeclercType[]>])
    // .then(([results]) => results.sort((a, b) => Number(b.id) - Number(a.id)))
    .then(([results]) => res.json(results));
