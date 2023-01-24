import { RequestHandler } from "express";
import { z } from "zod";
import { items } from "@dev/api";
import { profilesItems, propertyItems } from "@dev/api";

require("dotenv").config();

export const getData: RequestHandler = (_req, res) =>
  items.find({}).then((results) => res.json({ results }));

export const getPropertiesData: RequestHandler = (_req, res) =>
  Promise.all([
    profilesItems.findOne({ id: "property" }).then(
      (profiles) =>
        (profiles ? profiles : { hide: [], like: [] }) as {
          hide: string[];
          like: string[];
        }
    ),
    propertyItems.find({}).then((results) => results.splice(0, 100)),
  ]).then(([{ hide, like }, results]) => res.json({ hide, like, results }));

export const hideProperty: RequestHandler = (req, res) =>
  z
    .object({
      id: z.string(),
    })
    .parseAsync(req.query)
    .then(({ id }) =>
      profilesItems
        .findOne({ id: "property" })
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
            : profilesItems.insert({ id: "property", ...profiles })
        )
        .then(() => res.send({}))
    );

export const likeProperty: RequestHandler = (req, res) =>
  z
    .object({
      id: z.string(),
    })
    .parseAsync(req.query)
    .then(({ id }) =>
      profilesItems
        .findOne({ id: "property" })
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
            : profilesItems.insert({ id: "property", ...profiles })
        )
        .then(() => res.send({}))
    );

export const removeProperty: RequestHandler = (req, res) =>
  z
    .object({
      id: z.string(),
    })
    .parseAsync(req.query)
    .then(({ id }) =>
      profilesItems
        .findOne({ id: "property" })
        .then(
          (profiles) =>
            (profiles ? profiles : { hide: [], like: [] }) as {
              hide: string[];
              like: string[];
            }
        )
        .then((profiles) =>
          Object.assign(profiles, {
            hide: profiles.hide.filter((_id) => _id !== id),
            like: profiles.like.filter((_id) => _id !== id),
          })
        )
        .then((profiles: { id?: string; hide: string[]; like: string[] }) =>
          profiles.id
            ? profilesItems.update(profiles)
            : profilesItems.insert({ id: "property", ...profiles })
        )
        .then(() => propertyItems.remove({ id }))
        .then(() => res.send({}))
    );
