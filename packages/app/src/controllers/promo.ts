import { RequestHandler } from "express";
import { hotShotItems, promoItems } from "@dev/api/promo";
import type { PromoType } from "@dev/cli/src/services/PromoService/types";
import type { ItemType } from "@dev/cli/src/services/HotShotService/types";

export const getHotShotsData: RequestHandler = (_req, res) =>
  Promise.all([hotShotItems.find({}) as Promise<ItemType[]>]).then(
    ([results]) =>
      res.json({
        results,
      })
  );

export const getPromoData: RequestHandler = (_req, res) =>
  Promise.all([promoItems.find({}) as Promise<PromoType[]>]).then(([promos]) =>
    res.json({
      promos,
    })
  );
