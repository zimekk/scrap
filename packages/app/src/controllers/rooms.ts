import { RequestHandler } from "express";
import { rooms } from "@dev/api";
import type { RoomsType } from "@dev/cli/src/services/RoomsService/types";

export const getRoomsData: RequestHandler = (_req, res) =>
  Promise.all([rooms.find({}) as Promise<RoomsType[]>])
    // .then(([results]) => results.sort((a, b) => Number(b.id) - Number(a.id)))
    .then(([results]) => res.json(results));
