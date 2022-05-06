import { RequestHandler } from "express";
import fetch from "isomorphic-fetch";
import path from "path";
import { constants, promises } from "fs";
import { z } from "zod";
import {
  vehicleItems,
  vehicle2Items,
  vehicle3Items,
  vehicle4Items,
} from "@dev/api/vehicles";

require("dotenv").config();

const { NEARBY_LAT = "52.1530829", NEARBY_LNG = "21.1104411" } =
  process.env as {
    NEARBY_LAT: string;
    NEARBY_LNG: string;
  };

const Options = z.object({ id: z.number(), label: z.string() });

export const getVehicleImage: RequestHandler = (req, res) =>
  Promise.resolve(req.params).then(({ id, image: i }) =>
    Promise.resolve({
      size: "322/255b28ffdad35cd984ff32f30da17158",
    })
      .then(({ size }) => ({
        href: `https://najlepszeoferty.bmw.pl/uzywane/api/v1/ems/bmw-used-pl_PL/vehicle/${size}/${id}-${i}`,
        path: path.resolve(
          process.env.TEMP as string,
          `vehicles/${id}-${i}.jpeg`
        ),
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
  );

export const getVehiclesData: RequestHandler = (_req, res) =>
  false
    ? res.json(require("../../web/src/assets/api/vehicles/data.json"))
    : Promise.all([
        vehicleItems
          .find({})
          .then((vehicleBasic: any) => vehicleBasic.slice(0, 5000))
          .then(
            (list) =>
              z
                .array(
                  z
                    .object({
                      _id: z.string(),
                      _created: z.number().default(0),
                      _updated: z.number().default(0),
                      _history: z
                        .record(z.string(), z.object({}).passthrough())
                        .optional(),
                      _removed: z.number().default(0),
                      id: z.number(),
                      type: z.enum(["CAR"]),
                      isNew: z.boolean(),
                      modelCode: z.string().optional(),
                      title: z.string(),
                      brand: Options,
                      series: Options.optional(),
                      bodyType: Options,
                      seriesCode: z.string().optional(),
                      productionYear: z.number(),
                      mileage: z.number().optional(),
                      fuel: Options,
                      consumptionFuel: z.number().optional(),
                      emission: z.number().optional(),
                      emissionStandard: Options.optional(),
                      powerKW: z.number(),
                      powerHP: z.number(),
                      capacity: z.number().optional(),
                      transmission: Options,
                      color: z.object({
                        code: z.string(),
                        id: z.number(),
                        label: z.string(),
                      }),
                      images: z.number(),
                      imagesLastChanged: z.string(),
                      exterior360: z.boolean(),
                      interior360: z.boolean(),
                      warranty: z.number(),
                      usedBrand: z.boolean(),
                      reservable: z.boolean(),
                      vatReclaimable: z.boolean(),
                      leasable: z.boolean(),
                      leaseProduct: z
                        .object({
                          type: z.enum(["lease"]),
                          label: z.string(),
                          // downPaymentLimits: z.object({
                          //   min: z.number(),
                          //   max: z.number(),
                          //   step: z.number(),
                          //   default: z.number(),
                          // }),
                          // termLimits: z.object({
                          //   min: z.number(),
                          //   max: z.number(),
                          //   step: z.number(),
                          //   default: z.number(),
                          // }),
                          totalAgeLimit: z.number(),
                          // residualValueFactorLimits: z.array(z.array(z.null())),
                          // residualValueStep: z.number(),
                          // residualValueDefault: z.string(),
                          // interestRates: z.array(z.array(z.null())),
                        })
                        .passthrough()
                        .optional(),
                      comfortLeaseProduct: z
                        .object({
                          type: z.enum(["comfort_lease"]),
                          label: z.string(),
                          calculationMode: z.string(),
                          // downPaymentLimits: z.object({
                          //   min: z.number(),
                          //   max: z.number(),
                          //   step: z.number(),
                          //   default: z.number(),
                          // }),
                          // termLimits: z.object({
                          //   min: z.number(),
                          //   max: z.number(),
                          //   step: z.number(),
                          //   default: z.number(),
                          // }),
                          totalAgeLimit: z.number(),
                          // annualMileageLimits: z.object({
                          //   min: z.number(),
                          //   max: z.number(),
                          //   step: z.number(),
                          //   default: z.number(),
                          // }),
                          // interestRates: z.array(z.array(z.null())),
                          // tarRvMod: z.object({
                          //   id: z.number(),
                          //   tmdate: z.string(),
                          //   accessoryLimit: z.number(),
                          //   rvValue: z.number(),
                          //   brvValue: z.number(),
                          //   rvValueUsed: z.number(),
                          //   brvValueUsed: z.number(),
                          //   carSegmentId: z.string(),
                          // }),
                          // tarRvDev: z.object({
                          //   term: z.number(),
                          //   totalMileage: z.number(),
                          //   rvDev: z.number(),
                          //   rvDevUsed: z.number(),
                          // }),
                        })
                        .passthrough()
                        .optional(),
                      newPrice: z.number().optional(),
                      optionsPrice: z.number().optional(),
                      accessoriesPrice: z.number().optional(),
                      transactionalPrice: z.number(),
                      dealer: z.object({
                        id: z.number(),
                        buno: z.string(),
                        owner: z.string(),
                        ownerName: z.string(),
                        name: z.string(),
                        legalName: z.string(),
                        street: z.string(),
                        zip: z.string(),
                        city: z.string(),
                        lat: z.number(),
                        lng: z.number(),
                      }),
                      created: z.string(),
                      age: z.number().optional(),
                      isYUC: z.boolean().optional(),
                      reserved: z.boolean(),
                    })
                    .passthrough()
                    .transform(
                      (
                        item,
                        _ctx,
                        base = item.isNew
                          ? [
                              "https://najlepszeoferty.bmw.pl/nowe/wyszukaj/opis-szczegolowy",
                              "https://najlepszeoferty.bmw.pl/nowe/api/v1/ems/bmw-new-pl_PL/vehicle",
                            ]
                          : [
                              "https://najlepszeoferty.bmw.pl/uzywane/wyszukaj/opis-szczegolowy",
                              "https://najlepszeoferty.bmw.pl/uzywane/api/v1/ems/bmw-used-pl_PL/vehicle",
                            ],
                        size = [
                          "1920/2011206437498402f4e346eb5574dcb0",
                          "322/255b28ffdad35cd984ff32f30da17158",
                        ]
                      ) => ({
                        ...item,
                        href: `${base[0]}/${item.id}`,
                        images: [...Array(item.images)].map((_, i, _list) =>
                          i < 3
                            ? `api/vehicles/${item.id}/images/${i}`
                            : `${base[1]}/${size[size.length - 1]}/${
                                item.id
                              }-${i}`
                        ),
                        srcSet: [...Array(item.images)].map((_, i, _list) =>
                          size
                            .map((size) => size.split("/"))
                            .map(
                              ([size, hash]) =>
                                `${base[1]}/${size}/${hash}/${item.id}-${i} ${size}w`
                            )
                            .join(", ")
                        ),
                      })
                    )
                )
                .parse(list)
            /*
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
              */
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
                    id: source.meta.seller?.name || source.description?.seller,
                    name:
                      source.meta.seller?.name || source.description?.seller,
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
        .then((results: any) => [].concat(...results))
        // .then((results) => [].concat(results[0]))
        .then((list) => list.sort((a: any, b: any) => (a._id > b._id ? 1 : -1)))
        // .then((list) =>
        //   list.filter(
        //     ({ transactionalPrice }) => transactionalPrice >= 700000
        //   )
        // )
        .then((results) => res.json({ results }))
        .catch(console.error);

export const getVehicles2Data: RequestHandler = (_req, res) =>
  vehicle2Items.find({}).then((vehicleBasic) => res.json({ vehicleBasic }));
