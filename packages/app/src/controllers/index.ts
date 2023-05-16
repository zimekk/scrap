import { type RequestHandler } from "express";
import { directions, items } from "@dev/api";

export * from "./exchange";
export * from "./games";
export * from "./gpass";
export * from "./holidays";
export * from "./leclerc";
export * from "./moto";
export * from "./plots";
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

export const processUrl: RequestHandler = ({ body }, res) =>
  fetch("https://robot.phpsolutions.pl/process", {
    method: Boolean(console.log({ body })) || "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((json) => res.json(json));
