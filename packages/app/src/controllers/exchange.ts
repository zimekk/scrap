import { RequestHandler } from "express";
import { ratesItems } from "@dev/api/rates";

export const getRatesData: RequestHandler = (_req, res) =>
  Promise.all([ratesItems.find({})]).then(([rates]) =>
    res.json({
      rates,
    })
  );
