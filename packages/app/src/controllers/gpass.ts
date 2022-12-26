import { RequestHandler } from "express";
import { gpass } from "@dev/api";
import type { GpassType } from "@dev/cli/src/services/GpassService/types";

export const getGpassData: RequestHandler = (_req, res) =>
  Promise.all([gpass.find({}) as Promise<GpassType[]>])
    // .then(([results]) => results.sort((a, b) => Number(b.id) - Number(a.id)))
    .then(([results]) => res.json(results));
