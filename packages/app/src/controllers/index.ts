import { RequestHandler } from "express";
import { items } from "@dev/api";

export * from "./exchange";
export * from "./games";
export * from "./holidays";
export * from "./moto";
export * from "./products";
export * from "./promo";
export * from "./properties";
export * from "./rooms";
export * from "./stations";
export * from "./quotes";
export * from "./vehicles";

export const getData: RequestHandler = (_req, res) =>
  items.find({}).then((results) => res.json({ results }));
