import express, { Express, Router } from "express";
import http from "http";
import * as controllers from "./controllers";

require("dotenv").config();

// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes#create_the_route-handler_callback_functions
export const middleware = Router()
  .use("/api/data.json", controllers.getData)
  .use("/api/directions/data.json", controllers.getDirectionsData)
  .use("/api/exchange/data.json", controllers.getRatesData)
  .use("/api/games/data.json", controllers.getGamesData)
  .use("/api/gpass/data.json", controllers.getGpassData)
  .use("/api/holidays/data.json", controllers.getHolidaysData)
  .use(
    "/api/holidays/offers/data.json",
    controllers.getHollidaysHotelOffersData
  )
  .use("/api/hot-shots/data.json", controllers.getHotShotsData)
  .use("/api/leclerc/data.json", controllers.getLeclercData)
  .use("/api/moto/data.json", controllers.getMotoData)
  .use("/api/products/data.json", controllers.getProductsData)
  .use("/api/promo/data.json", controllers.getPromoData)
  .use("/api/properties/data.json", controllers.getPropertiesData)
  .use("/api/properties/hide.json", controllers.hideProperty)
  .use("/api/properties/like.json", controllers.likeProperty)
  .use("/api/properties/remove.json", controllers.removeProperty)
  .use("/api/quotes/data.json", controllers.getQuotesData)
  .use("/api/rooms/data.json", controllers.getRoomsData)
  .use("/api/rooms", controllers.getRooms)
  .use("/api/stations/data.json", controllers.getStationsData)
  .use("/api/vehicles/:id/images/:image", controllers.getVehicleImage)
  .use("/api/vehicles/data.json", controllers.getVehiclesData)
  .use("/api/vehicles2/data.json", controllers.getVehiclesData);

export function serve() {
  const { PORT: port = 8080, PUBLIC = "public" } = process.env;
  const middlewares = [
    require("morgan")("combined"),
    middleware,
    express.static(require("path").resolve(process.cwd(), PUBLIC)),
  ];
  const server = http.createServer(
    middlewares.reduce(
      (app, middleware) => app.use(middleware),
      express()
    ) as Express
  );
  server.listen({ port }, () => {
    console.info(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
}

if (process.mainModule?.filename === __filename) {
  serve();
}
