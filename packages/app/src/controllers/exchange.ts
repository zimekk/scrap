import { RequestHandler } from "express";
import { ratesItems } from "@dev/api/rates";
import type { Rate } from "@dev/cli/src/services/RatesService/types";

const compare = (
  prev: { date: string; time: string },
  next: { date: string; time: string }
) =>
  prev === undefined ||
  new Date(`${prev.date} ${prev.time}`).getTime() >
    new Date(`${next.date} ${next.time}`).getTime();

export const getRatesData: RequestHandler = (_req, res) =>
  Promise.all([
    ratesItems
      .find({})
      .then((list) =>
        Object.values(
          (list as Rate[])
            .filter((item) => item.date > "2008-01-01")
            .reduce(
              (result: Record<string, Rate>, item) =>
                ((key: string) =>
                  Object.assign(
                    result,
                    compare(result[key], item) ? { [key]: item } : {}
                  ))(`${item.code} ${item.date}`),
              {}
            )
        )
      ),
  ]).then(([rates]) =>
    res.json({
      rates,
    })
  );
