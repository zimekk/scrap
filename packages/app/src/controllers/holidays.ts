import { RequestHandler } from "express";
import { holidaysItems } from "@dev/api/holidays";

export const getHolidaysData: RequestHandler = (_req, res) =>
  // Promise.resolve(require('@dev/web/src/assets/api/holidays/data'))
  holidaysItems.find({}).then((json) => res.json(json));
