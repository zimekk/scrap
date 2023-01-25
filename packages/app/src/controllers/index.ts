import { RequestHandler } from "express";
import { directions, items, plots } from "@dev/api";

export * from "./exchange";
export * from "./games";
export * from "./gpass";
export * from "./holidays";
export * from "./leclerc";
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

export const getDirectionsData: RequestHandler = (_req, res) =>
  Promise.all([directions.find({})]).then(([results]) => res.json(results));

export const getPlotsData: RequestHandler = (_req, res) =>
  Promise.all([plots.find({})]).then(([results]) => res.json(results));
