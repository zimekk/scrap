import { parse } from "date-fns";
import { z } from "zod";

export const now = Date.now();

export const parseTransaction = (s: string) =>
  z
    .tuple([
      z.literal("Tytuł przelewu"),
      z.string(),
      z.literal("Kwota operacji"),
      z
        .string()
        .transform((s) =>
          (([_, z = "", g]) => Number(`${z.replace(" ", "")}.${g}`))(
            s.match(/^([\d ]+),([\d]+) PLN/) || []
          )
        ),
      z.literal("Data operacji"),
      z.string().transform((d) => parse(d, "dd.MM.yyyy", now)),
    ])
    .transform(([k1, title, k2, amount, k3, date]) => ({
      [k1]: title,
      [k2]: amount,
      [k3]: date,
    }))
    .parse(s.split("\n"));
