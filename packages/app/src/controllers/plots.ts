import { type RequestHandler } from "express";
import { z } from "zod";
import { plots, profilesItems } from "@dev/api";

require("dotenv").config();

const PROFILE_ID = "plot";

export const getPlotsData: RequestHandler = (_req, res) =>
  Promise.all([
    profilesItems.findOne({ id: PROFILE_ID }).then(
      (profiles) =>
        (profiles ? profiles : { hide: [], like: [] }) as {
          hide: string[];
          like: string[];
        }
    ),
    plots.find({}),
  ]).then(([{ hide, like }, results]) => res.json({ hide, like, results }));

export const hidePlot: RequestHandler = (req, res) =>
  z
    .object({
      id: z.string(),
    })
    .parseAsync(req.query)
    .then(({ id }) =>
      profilesItems
        .findOne({ id: PROFILE_ID })
        .then(
          (profiles) =>
            (profiles ? profiles : { hide: [], like: [] }) as {
              hide: string[];
              like: string[];
            }
        )
        .then(({ hide, ...profiles }) => ({
          ...profiles,
          hide: hide.includes(id)
            ? hide.filter((_id) => _id !== id)
            : hide.concat(id),
        }))
        .then((profiles: { id?: string; hide: string[]; like: string[] }) =>
          profiles.id
            ? profilesItems.update(profiles)
            : profilesItems.insert({ id: PROFILE_ID, ...profiles })
        )
        .then(() => res.send({}))
    );

export const likePlot: RequestHandler = (req, res) =>
  z
    .object({
      id: z.string(),
    })
    .parseAsync(req.query)
    .then(({ id }) =>
      profilesItems
        .findOne({ id: PROFILE_ID })
        .then(
          (profiles) =>
            (profiles ? profiles : { hide: [], like: [] }) as {
              hide: string[];
              like: string[];
            }
        )
        .then(({ like, ...profiles }) => ({
          ...profiles,
          like: like.includes(id)
            ? like.filter((_id) => _id !== id)
            : like.concat(id),
        }))
        .then((profiles: { id?: string; hide: string[]; like: string[] }) =>
          profiles.id
            ? profilesItems.update(profiles)
            : profilesItems.insert({ id: PROFILE_ID, ...profiles })
        )
        .then(() => res.send({}))
    );
