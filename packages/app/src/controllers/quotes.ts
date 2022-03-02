import { RequestHandler } from "express";
import { quotesItems, quotesMetas } from "@dev/api/quotes";

export const getQuotesData: RequestHandler = (_req, res) =>
  Promise.all([quotesMetas.find({}), quotesItems.find({})]).then(
    ([metas, objects]) =>
      res.json({
        metas,
        objects,
      })
  );
