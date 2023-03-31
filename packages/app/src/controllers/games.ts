import { type RequestHandler } from "express";
import { gameItems } from "@dev/api/games";

export const getGamesData: RequestHandler = (_req, res) =>
  gameItems.find({}).then((Products) => res.json({ Products }));
