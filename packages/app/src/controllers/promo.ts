import { RequestHandler } from "express";
import { promoItems } from "@dev/api/promo";
import type { PromoType } from "@dev/cli/src/services/PromoService/types";

export const getPromoData: RequestHandler = (_req, res) =>
  Promise.all([promoItems.find({}) as Promise<PromoType[]>]).then(([promos]) =>
    res.json({
      promos,
    })
  );
