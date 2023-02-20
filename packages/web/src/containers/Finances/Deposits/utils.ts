import { parse } from "date-fns";
import { z } from "zod";

export const now = Date.now();

export const parseTransaction = (s: string) =>
  z
    .union([
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
        })),
      z
        .tuple([
          z.literal("Tytuł"),
          z.string(),
          z.literal("Kwota"),
          z
            .string()
            .transform((s) =>
              (([_, z = "", g]) => Number(`${z.replace(" ", "")}.${g}`))(
                s.match(/^([-\d ]+),([\d]+) PLN/) || []
              )
            ),
          z.literal("Data przelewu"),
          z.string().transform((d) => parse(d, "dd.MM.yyyy", now)),
          z.literal("Data waluty"),
          z.string().transform((d) => parse(d, "dd.MM.yyyy", now)),
          z.literal("Rodzaj operacji"),
          z.enum(["Naliczenie odsetek", "Obciążenie", "Uznanie"]),
        ])
        .transform(([_k1, title, _k2, amount, _k3, date]) => ({
          "Tytuł przelewu": title,
          "Kwota operacji": Math.abs(amount),
          "Data operacji": date,
        })),
    ])
    .parse(s.split("\n").map((s) => s.trim()));
