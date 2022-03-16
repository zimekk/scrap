import { RequestHandler } from "express";
import { productItems } from "@dev/api/products";

export const getProductsData: RequestHandler = (_req, res) =>
  productItems.find({}).then((results) => res.json({ results }));
