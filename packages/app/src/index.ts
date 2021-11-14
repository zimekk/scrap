import express, { Router } from "express";
// import cors from "cors";
import path from "path";
import { items } from "@dev/api";
import { stationItems, vehicleItems } from "@dev/api/stations";

const web =
  process.env.NODE_ENV === "development"
    ? (({ entry, ...config }) => {
        const compiler = require("webpack")({
          mode: "development",
          entry: ["webpack-hot-middleware/client"].concat(entry),
          ...config,
        });

        return Router()
          .use(
            require("webpack-dev-middleware")(compiler, {
              publicPath: config.output?.publicPath,
            })
          )
          .use(require(`webpack-hot-middleware`)(compiler, {}));
      })(require("@dev/web/webpack.config").default)
    : Router().use(
        express.static(
          path.resolve(
            path.dirname(require.resolve("@dev/web/package")),
            "public"
          )
        )
      );

const api = Router()
  .use("/api/data.json", (_req, res) =>
    items.find({}).then((results) => res.json({ results }))
  )
  .use("/api/stations/data.json", (_req, res) =>
    stationItems.find({}).then((results) => res.json({ results }))
  )
  .use("/api/vehicles/data.json", (_req, res) =>
    // res.json(require('../../web/src/assets/api/vehicles/data.json'))
    vehicleItems.find({}).then(($list) => res.json({ $list }))
  );

const PORT = 8080;

export default express()
  .use(require("morgan")("combined"))
  // .use(cors({ origin: '*'}))
  .use(api)
  .use(web)
  .listen(PORT, () =>
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
  );
