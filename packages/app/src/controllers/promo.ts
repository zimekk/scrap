import { type RequestHandler } from "express";
import { hotShotItems, promoItems } from "@dev/api/promo";
import type { PromoType } from "@dev/cli/src/services/PromoService/types";
import type { ItemType } from "@dev/cli/src/services/HotShotService/types";

export const getHotShotsData: RequestHandler = (_req, res) =>
  Promise.all([hotShotItems.find({}) as Promise<ItemType[]>])
    .then(([results]) =>
      results.sort(
        (a, b) =>
          new Date(b.PromotionEnd).getTime() -
          new Date(a.PromotionEnd).getTime()
      )
    )
    .then((results) =>
      res.json({
        results,
      })
    );

export const getPromoData: RequestHandler = (_req, res) =>
  Promise.all([promoItems.find({}) as Promise<PromoType[]>])
    .then(([results]) =>
      results.sort(
        (a, b) =>
          new Date(b._created).getTime() - new Date(a._created).getTime()
      )
    )
    .then((promos) =>
      res.json({
        promos,
      })
    );
