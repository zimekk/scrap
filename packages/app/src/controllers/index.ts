import { RequestHandler } from "express";
import { headingDistanceTo } from "geolocation-utils";
import { items } from "@dev/api";
import { gameItems, productItems } from "@dev/api";
import { stationItems } from "@dev/api/stations";
import type { StationItem } from "@dev/cli/src/services/StationService/types";

export * from "./properties";
export * from "./vehicles";

const {
  NEARBY_LAT = "52.1530829",
  NEARBY_LNG = "21.1104411",
  NEARBY_RADIUS = "25014.985524846034",
} = process.env as {
  NEARBY_LAT: string;
  NEARBY_LNG: string;
  NEARBY_RADIUS: string;
};

const CENTER = { lat: Number(NEARBY_LAT), lng: Number(NEARBY_LNG) };
const RADIUS = Number(NEARBY_RADIUS);

export const getData: RequestHandler = (_req, res) =>
  items.find({}).then((results) => res.json({ results }));

export const getGamesData: RequestHandler = (_req, res) =>
  gameItems.find({}).then((Products) => res.json({ Products }));

export const getProductsData: RequestHandler = (_req, res) =>
  productItems.find({}).then((results) => res.json({ results }));

export const getStationsData: RequestHandler = (_req, res) =>
  stationItems
    .find({})
    // .then((results: any) =>
    //   results.filter((item: any) => Object.keys(item._history || {}).length)
    // )
    .then((results) =>
      (results as StationItem[]).filter(
        (item) =>
          // Object.keys(item._history || {}).length &&
          headingDistanceTo(CENTER, { lat: item.x, lng: item.y }).distance <
          RADIUS
      )
    )
    .then((results) => res.json({ results }));
