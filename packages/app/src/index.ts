import express, { Router } from "express";
import fetch from "isomorphic-fetch";
// import cors from "cors";
import path from "path";
import { constants, promises } from "fs";
import { headingDistanceTo } from "geolocation-utils";
// import { diffString } from "json-diff";
import { items } from "@dev/api";
import {
  gameItems,
  productItems,
  propertyItems,
  stationItems,
  vehicleItems,
  vehicle2Items,
  vehicle3Items,
  vehicle4Items,
} from "@dev/api/stations";

require("dotenv").config();

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
  .use("/api/games/data.json", (_req, res) =>
    gameItems.find({}).then((Products) => res.json({ Products }))
  )
  .use("/api/products/data.json", (_req, res) =>
    productItems.find({}).then((results) => res.json({ results }))
  )
  .use("/api/properties/data.json", (_req, res) =>
    propertyItems.find({}).then((results) => res.json({ results }))
  )
  .use("/api/stations/data.json", (_req, res) =>
    stationItems
      .find({})
      // .then((results: any) =>
      //   results.filter((item: any) => Object.keys(item._history || {}).length)
      // )
      .then((results: any) =>
        results.filter(
          (item: any) =>
            // Object.keys(item._history || {}).length &&
            headingDistanceTo(CENTER, { lat: item.x, lng: item.y }).distance <
            RADIUS
        )
      )
      .then((results) => res.json({ results }))
  )
  .use("/api/vehicles/:id/images/:image", (req, res) =>
    Promise.resolve(req.params).then(({ id, image: i }) =>
      Promise.resolve({
        size: "322/255b28ffdad35cd984ff32f30da17158",
      })
        .then(({ size }) => ({
          href: `https://najlepszeoferty.bmw.pl/uzywane/api/v1/ems/bmw-used-pl_PL/vehicle/${size}/${id}-${i}`,
          path: path.resolve(__dirname, `../temp/vehicles/${id}-${i}.jpeg`),
        }))
        .then(({ href, path }) =>
          promises
            .access(path, constants.R_OK)
            .catch(() =>
              fetch(href)
                .then((res) => res.arrayBuffer())
                .then((body) => promises.writeFile(path, Buffer.from(body)))
            )
            .then(() => res.sendFile(path, { maxAge: "1d" }))
        )
    )
  )
  .use("/api/vehicles/data.json", (_req, res) =>
    false
      ? res.json(require("../../web/src/assets/api/vehicles/data.json"))
      : Promise.all([
          vehicleItems
            .find({})
            .then((vehicleBasic: any) => vehicleBasic.slice(0, 5000))
            .then((list) =>
              list.map(
                ({
                  _id,
                  _created,
                  _updated,
                  _history,
                  _removed = 0,
                  ...source
                }: any) =>
                  // Boolean(console.log(source))||
                  ({
                    _id,
                    _created,
                    _updated,
                    _history,
                    _removed,
                    // source,
                    options: source.options,
                    title: source.title,
                    ...(({
                      leasable,
                      leaseProduct,
                      comfortLeaseProduct,
                      age,
                    }) => ({
                      leasable,
                      leaseProduct,
                      comfortLeaseProduct,
                      age,
                    }))(source),
                    dealer: (({ dealer: { id, name, lat, lng } }) => ({
                      id,
                      name,
                      lat,
                      lng,
                    }))(source),
                    ...(({
                      id,
                      isNew,
                      vatReclaimable,
                      warranty,
                      productionYear,
                      newPrice,
                      optionsPrice,
                      accessoriesPrice,
                      transactionalPrice,
                      brand,
                      bodyType,
                      series,
                      seriesCode,
                      modelCode,
                      powerHP,
                      powerKW,
                      capacity,
                      fuel,
                      consumptionFuel,
                      transmission,
                      color,
                      images,
                    }) => ({
                      id,
                      href: isNew
                        ? `//najlepszeoferty.bmw.pl/nowe/wyszukaj/opis-szczegolowy/${id}/`
                        : `//najlepszeoferty.bmw.pl/uzywane/wyszukaj/opis-szczegolowy/${id}/`,
                      isNew,
                      newPrice,
                      optionsPrice,
                      accessoriesPrice,
                      vatReclaimable: Boolean(vatReclaimable) ? 1 : 0,
                      warranty: Boolean(warranty > 0) ? 1 : 0,
                      productionYear,
                      transactionalPrice,
                      brand,
                      bodyType,
                      series,
                      seriesCode,
                      modelCode,
                      powerHP,
                      powerKW,
                      capacity,
                      fuel,
                      consumptionFuel,
                      transmission,
                      color,
                      images: [...Array(images)].map(
                        (
                          _,
                          i,
                          _list,
                          size = "322/255b28ffdad35cd984ff32f30da17158"
                        ) =>
                          i < 3
                            ? `api/vehicles/${id}/images/${i}`
                            : `//najlepszeoferty.bmw.pl/uzywane/api/v1/ems/bmw-used-pl_PL/vehicle/${size}/${id}-${i}`
                      ),
                    }))(source),
                    ...(source.isNew
                      ? {}
                      : (({ mileage, registration }) => ({
                          registration,
                          mileage,
                        }))(source)),
                  })
              )
            ),
          vehicle2Items
            .find({})
            .then((list: any) => list.slice(0, 5000))
            .then((list) =>
              list.map(
                ({ _id, _created, _updated, ...source }: any) =>
                  Boolean(false && console.log(source.io.fuels)) || {
                    _id,
                    _created,
                    _updated,
                    // source,
                    title: source.model.description,
                    dealer: (({
                      dealer: {
                        id,
                        name,
                        geoLocation: { lat, lon: lng },
                      },
                    }) => ({
                      id,
                      name,
                      lat,
                      lng,
                    }))(source),
                    ...(({
                      id,
                      carId,
                      used,
                      vatReclaimable,
                      warrantyPlus,
                      productionYear,
                      typedPrices,
                      brand,
                      model,
                      symbolicCarline,
                      symbolicCarlineGroup,
                      bodyType,
                      driveType,
                      gearBox,
                      powerDisplay = "",
                      io: { fuels },
                      gearType,
                      extColor,
                      pictures = [],
                    }) => ({
                      id: carId,
                      href: `//www.audi.pl/pl/web/pl/wyszukiwarka-samochodow-uzywanych/details.sc_detail.${id}.html`,
                      isNew: !Boolean(used),
                      vatReclaimable: Boolean(vatReclaimable) ? 1 : 0,
                      warranty: warrantyPlus ? 1 : 0,
                      productionYear,
                      transactionalPrice: typedPrices[0].amount,
                      brand: (({ code, description = "Audi" }) => ({
                        id: code,
                        label: description,
                      }))(brand),

                      series: (({ code, description }) => ({
                        id: code,
                        label: description,
                      }))(symbolicCarlineGroup || {}),
                      seriesCode: (({ code, description }) => ({
                        id: code,
                        label: description,
                      }))(symbolicCarline),
                      modelCode: (({ code, description }) => ({
                        id: code,
                        label: description,
                      }))(model),

                      bodyType: (({ code, description }) => ({
                        id: code,
                        label: description,
                      }))(bodyType || {}),
                      driveType: (({ code, description }) => ({
                        id: code,
                        label: description,
                      }))(driveType || {}),
                      ...((m) =>
                        m
                          ? {
                              powerKW: Number(m[1]),
                              powerHP: Number(m[2]),
                            }
                          : {})(powerDisplay.match(/(\d+) kW \((\d+) KM\)/)),
                      ...(fuels
                        ? {
                            fuel:
                              // @ts-ignore
                              {
                                DIESEL: { id: 2, label: "Diesel" },
                                PETROL: { id: 1, label: "Benzyna" },
                                ELECTRICAL: { id: 3, label: "Elektryczny" },
                              }[fuels[0].fuel] || {},
                            consumptionFuel: (({
                              consumption: {
                                consolidated: { value },
                              },
                            }) =>
                              value
                                ? Number(value.replace(",", "."))
                                : undefined)(fuels[0]),
                          }
                        : { fuel: {} }),
                      gearBox: (({ code, description }) => ({
                        id: code,
                        label: description,
                      }))(gearBox || {}),
                      transmission: (({ code, description }) => ({
                        // @ts-ignore
                        id: {
                          ["gear-type.automatic"]: 0,
                          ["gear-type.null"]: 0,
                          ["gear-type.manual"]: 1,
                        }[code],
                        label: description,
                      }))(gearType),
                      color: (({ code, description }) => ({
                        id: code,
                        label: description,
                      }))(extColor),
                      images: used?.pictureUrls
                        ? used.pictureUrls
                        : pictures.map(({ url }: any) => url),
                    }))(source),
                    ...(source.type === "N"
                      ? {}
                      : (({
                          used: {
                            numPreviousOwners,
                            mileage,
                            initialRegistrationDate,
                          },
                        }) => ({
                          numPreviousOwners,
                          registration: new Date(
                            initialRegistrationDate
                          ).toISOString(),
                          mileage,
                        }))(source)),
                  }
              )
            ),
          vehicle3Items
            .find({})
            .then(($list: any) => $list.slice(0, 5000))
            .then((list) =>
              list.map(
                ({ _id, _created, _updated, ...source }: any) =>
                  Boolean(false && console.log(source)) || {
                    _id,
                    _created,
                    _updated,
                    // source,
                    id: source.id,
                    href: `https://shop.mercedes-benz.com/pl-pl/cars/pdp/${source.code}`,
                    title: source.name,
                    dealer: {
                      id: source.pointOfServiceDisplayName,
                      name: source.pointOfServiceDisplayName,
                      lat: NEARBY_LAT,
                      lng: NEARBY_LNG,
                    },
                    vatReclaimable: Boolean(source.vatReclaimable) ? 1 : 0,
                    // warranty:0,
                    productionYear: 2021,
                    // newPrice,
                    // optionsPrice,
                    // accessoriesPrice,
                    transactionalPrice: source.price.value,
                    brand: (({ code, description = "Mercedes" }: any) => ({
                      id: code,
                      label: description,
                    }))({}),
                    bodyType: (({ code, name }) => ({
                      id: code,
                      label: name,
                    }))(source.bodyType),
                    series: source.model,
                    seriesCode: source.name,
                    modelCode: source.modelDesignation,
                    powerHP: source.combustionPowerSecondary.value,
                    powerKW: source.combustionPower.value,
                    // capacity,
                    fuel: (({ code, name }) => ({
                      id: code,
                      label: name,
                    }))(source.fuelType),
                    // consumptionFuel,
                    transmission: (({ code, name }) => ({
                      id: code,
                      label: name,
                    }))(source.gearBox),
                    color: ((name) => ({
                      id: name,
                      label: name,
                    }))(source.colorGroup),
                    images: [].concat(
                      source.primaryImage ? source.primaryImage.url : []
                    ),
                  }
              )
            ),
          vehicle4Items
            .find({})
            .then((list: any) => list.slice(0, 5000))
            .then((list) =>
              list.map(
                ({ _id, _created, _updated, ...source }: any) =>
                  Boolean(false && console.log(source)) || {
                    _id,
                    _created,
                    _updated,
                    // source,
                    id: source.id,
                    href: `https://finder.porsche.com/pl/pl-PL/details/${source.listingUrlSlug}`,
                    title: source.description?.title || source.meta?.title,
                    dealer: {
                      id:
                        source.description?.seller || source.meta.seller?.name,
                      name:
                        source.description?.seller || source.meta.seller?.name,
                      lat: NEARBY_LAT,
                      lng: NEARBY_LNG,
                    },
                    isNew: source.meta.condition === "new",
                    // vatReclaimable: Boolean(source.vatReclaimable) ? 1 : 0,
                    warranty: source.meta.warranty ? 1 : 0,
                    productionYear: new Date(
                      source.meta.productionDate
                    ).getFullYear(),
                    // newPrice,
                    // optionsPrice,
                    // accessoriesPrice,
                    transactionalPrice: source.meta.priceValue,
                    brand: ((label) => ({
                      id: label,
                      label,
                    }))("Porsche"),
                    bodyType: ((label) => ({
                      id: label,
                      label,
                    }))("Porsche"),
                    // series: source.model,
                    seriesCode: source.meta.modelSeries,
                    modelCode: source.meta.model,
                    ...((m: any) =>
                      m
                        ? {
                            powerKW: Number(m[1]),
                            powerHP: Number(m[2]),
                          }
                        : {})(
                      (
                        source.description.characteristics
                          .map(({ value }: any) => value)
                          .find((value: any) =>
                            value.match(/(\d+) kW \/ (\d+) KM/)
                          ) || ""
                      ).match(/(\d+) kW \/ (\d+) KM/)
                    ),
                    // capacity,
                    ...((m) => ({
                      fuel: ((label) => ({
                        id: label,
                        label,
                      }))(m ? m[1] : ""),
                    }))(
                      source.description?.consumptionEmission?.match(
                        /^(\w+) · ([0-9,]+) l/
                      )
                    ),
                    // consumptionFuel,
                    transmission: ((label) => ({
                      id: label,
                      label,
                    }))(source.meta.transmission),
                    color: ((label) => ({
                      id: label,
                      label,
                    }))(source.meta.color),
                    images: [source.meta.imageUrl],
                    numPreviousOwners: source.meta.numberOfPreviousOwners,
                    registration: source.meta.firstRegistration,
                    mileage: Number(source.meta.mileage.split(" ")[0]),
                  }
              )
            ),
        ])
          .then((results) => [].concat(...results))
          // .then((results) => [].concat(results[0]))
          .then((list) =>
            list.sort((a: any, b: any) => (a._id > b._id ? 1 : -1))
          )
          // .then((list) =>
          //   list.filter(
          //     ({ transactionalPrice }) => transactionalPrice >= 700000
          //   )
          // )
          .then((results) => res.json({ results }))
          .catch(console.error)
  )
  .use("/api/vehicles2/data.json", (_req, res) =>
    vehicle2Items.find({}).then((vehicleBasic) => res.json({ vehicleBasic }))
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
