import { type RequestHandler } from "express";
import { motoItems } from "@dev/api";
import type { ItemType } from "@dev/cli/src/services/MotoService/types";

export const getMotoData: RequestHandler = (_req, res) =>
  Promise.all([motoItems.find({}) as Promise<ItemType[]>])
    .then(([results]) => results.sort((a, b) => Number(b.id) - Number(a.id)))
    .then((results) =>
      res.json({
        results,
      })
    );
