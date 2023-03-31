import { type RequestHandler } from "express";
import { quotesItems, quotesMetas } from "@dev/api/quotes";
import type { Item, Meta } from "@dev/cli/src/services/QuotesService/types";

export const getQuotesData: RequestHandler = (_req, res) =>
  Promise.all([
    quotesMetas.find({}) as Promise<Meta[]>,
    quotesItems.find({}) as Promise<Item[]>,
  ]).then(([metas, objects]) =>
    res.json({
      metas,
      objects,
      // objects: objects.filter((item) => item.date > "2018-01-01"),
    })
  );
