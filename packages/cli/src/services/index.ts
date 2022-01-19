import { diffString } from "json-diff";
import { z } from "zod";
import {
  gameItems,
  //   productItems,
  //   propertyItems,
  //   stationItems,
  vehicleItems,
  //   vehicle2Items,
  //   vehicle3Items,
  //   vehicle4Items,
} from "@dev/api/stations";
import { request } from "../request";

const ERA = 24 * 3600 * 1000;
const _time = Date.now();
const _past = _time - ERA;

const createItem = (item: {}) => ({ ...item, _created: _time });
const diffItem = (
  {
    lastChange,
    comfortLeaseProduct,
    vehicleDataVersion,
    _id,
    _created,
    _updated,
    _checked,
    _removed,
    _history,
    options,
    ..._item
  }: {
    lastChange?: any;
    comfortLeaseProduct?: any;
    vehicleDataVersion?: any;
    _id: string;
    _created: number;
    _updated: number;
    _checked: number;
    _removed: number;
    _history: {};
    options: string[];
  },
  {
    lastChange: _lastChange,
    comfortLeaseProduct: _comfortLeaseProduct,
    vehicleDataVersion: _vehicleDataVersion,
    ...item
  }: { lastChange?: any; comfortLeaseProduct?: any; vehicleDataVersion?: any }
) => diffString(_item, item);
const updateItem = (
  {
    _id,
    _created = _past,
    _updated = _created,
    _history = {},
    ..._item
  }: { _id: string; _created: number; _updated: number; _history: {} },
  item: {}
) => ({
  ...item,
  _id,
  _created,
  _updated: _time,
  _history: {
    ..._history,
    [_updated]: _item,
  },
});

export class VehicleList {
  async request(
    type: string,
    args = {}
  ): Promise<{
    type: string;
    list: any[];
    next: any;
  }> {
    return z
      .object({
        $type: z.string().default(type),
        $skip: z.number().default(0),
        $limit: z.number().default(100),
      })
      .parseAsync(args)
      .then(({ $type, $skip, $limit }) =>
        request({ $type, $skip, $limit }).then((data) =>
          z
            .object({
              $list: z.array(
                z
                  .object({
                    id: z.number(),
                  })
                  .passthrough()
              ),
              $count: z.object({
                $total: z.number(),
              }),
              // .passthrough()
            })
            .transform(({ $list, $count: { $total } }) => ({
              type,
              list: $list,
              next: (($next) =>
                $next < $total ? { $type, $skip: $next, $limit } : null)(
                $skip + $limit
              ),
            }))
            .parseAsync(data)
        )
      );
  }
}

export class VehicleItem {
  async process(item = {}, summary: any): Promise<any> {
    return (
      z
        .object({
          id: z.number(),
          type: z.string(),
          isNew: z.boolean(),
          modelCode: z.string(),
          title: z.string(),
          // brand: z.object({ id: z.number(), label: z.string() }),
          // series: z.object({ id: z.number(), label: z.string() }),
          // bodyType: z.object({ id: z.number(), label: z.string() }),
          // seriesCode: z.string(),
          // productionYear: z.number(),
          // mileage: z.number(),
          // fuel: z.object({ id: z.number(), label: z.string() }),
          // consumptionFuel: z.number(),
          // emission: z.number(),
          // emissionStandard: z.object({ id: z.number(), label: z.string() }),
          // powerKW: z.number(),
          // powerHP: z.number(),
          // capacity: z.number(),
          // transmission: z.object({ id: z.number(), label: z.string() }),
          // color: z.object({ code: z.string(), id: z.number(), label: z.string() }),
          // images: z.number(),
          // imagesLastChanged: z.string(),
          // exterior360: z.boolean(),
          // interior360: z.boolean(),
          // warranty: z.number(),
          // usedBrand: z.boolean(),
          // reservable: z.boolean(),
          // vatReclaimable: z.boolean(),
          // leasable: z.boolean(),
          leaseProduct: z
            .object({
              // type: z.string(),
              // label: z.string(),
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
              // totalAgeLimit: z.number(),
              // residualValueFactorLimits: z.array(z.array(z.null())),
              // residualValueStep: z.number(),
              // residualValueDefault: z.string(),
              // interestRates: z.array(z.array(z.null())),
            })
            .passthrough()
            .optional(),
          comfortLeaseProduct: z
            .object({
              // type: z.string(),
              // label: z.string(),
              // calculationMode: z.string(),
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
              // totalAgeLimit: z.number(),
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
          // newPrice: z.number(),
          // optionsPrice: z.number(),
          // accessoriesPrice: z.number(),
          // transactionalPrice: z.number(),
          // dealer: z.object({
          //   id: z.number(),
          //   buno: z.string(),
          //   owner: z.string(),
          //   ownerName: z.string(),
          //   name: z.string(),
          //   legalName: z.string(),
          //   street: z.string(),
          //   zip: z.string(),
          //   city: z.string(),
          //   lat: z.number(),
          //   lng: z.number(),
          // }),
          // created: z.string(),
          // age: z.number(),
          // isYUC: z.boolean(),
          // reserved: z.boolean(),
        })
        .passthrough()
        // {
        //   id: 25847,
        //   type: 'CAR',
        //   isNew: true,
        //   modelCode: '31AX',
        //   title: 'BMW 420d xDrive Gran Coupe',
        //   brand: { id: 1, label: 'BMW' },
        //   series: { id: 4, label: 'Seria 4' },
        //   bodyType: { id: 2, label: 'Coupé' },
        //   seriesCode: 'G26',
        //   productionYear: 2021,
        //   mileage: 10,
        //   fuel: { id: 2, label: 'Diesel' },
        //   consumptionFuel: 5.3,
        //   emission: 139,
        //   emissionStandard: { id: 6, label: 'EURO 6' },
        //   powerKW: 140,
        //   powerHP: 190,
        //   capacity: 1995,
        //   transmission: { id: 0, label: 'Automatyczna' },
        //   color: { code: '#808080', id: 6, label: 'Szary Brooklyn M' },
        //   images: 10,
        //   imagesLastChanged: '2021-12-20T15:33:16+00:00',
        //   exterior360: true,
        //   interior360: true,
        //   warranty: 0,
        //   usedBrand: false,
        //   reservable: false,
        //   vatReclaimable: true,
        //   leasable: true,
        //   leaseProduct: {
        //     type: 'lease',
        //     label: 'LO',
        //     downPaymentLimits: { min: 0, max: 0.45, step: 1000, default: 0 },
        //     termLimits: { min: 24, max: 60, step: 1, default: 48 },
        //     totalAgeLimit: 120,
        //     residualValueFactorLimits: [
        //       [Object], [Object],
        //       [Object], [Object],
        //       [Object], [Object],
        //       [Object], [Object],
        //       [Object], [Object],
        //       [Object], [Object],
        //       [Object], [Object],
        //       [Object], [Object],
        //       [Object]
        //     ],
        //     residualValueStep: 0.005,
        //     residualValueDefault: 'max',
        //     interestRates: [ [Object], [Object], [Object], [Object] ]
        //   },
        //   comfortLeaseProduct: {
        //     type: 'comfort_lease',
        //     label: 'CL',
        //     calculationMode: 'brv_based',
        //     downPaymentLimits: { min: 0, max: 0.35, step: 1000, default: 0.05 },
        //     termLimits: { min: 24, max: 60, step: 1, default: 24 },
        //     totalAgeLimit: 96,
        //     annualMileageLimits: { min: 10000, max: 50000, step: 5000, default: 15000 },
        //     interestRates: [ [Object], [Object], [Object], [Object] ],
        //     tarRvMod: {
        //       id: 77253,
        //       tmdate: '21/10/11',
        //       accessoryLimit: 0.3,
        //       rvValue: 0.489,
        //       brvValue: 0.489,
        //       rvValueUsed: 0.502,
        //       brvValueUsed: 0.489,
        //       carSegmentId: '2'
        //     },
        //     tarRvDev: { term: 24, totalMileage: 15000, rvDev: 0.0967, rvDevUsed: 0.0967 }
        //   },
        //   newPrice: 258400,
        //   optionsPrice: 33900,
        //   accessoriesPrice: 0,
        //   transactionalPrice: 258400,
        //   dealer: {
        //     id: 28,
        //     buno: '34238',
        //     owner: '016',
        //     ownerName: 'Zdunek Auto Premium Sp. z.o.o.',
        //     name: 'Zdunek Premium Sp. z o.o.',
        //     legalName: 'Zdunek Premium Sp. z o.o.',
        //     street: 'Mialki Szlak 59',
        //     zip: '80-717',
        //     city: 'Gdańsk',
        //     lat: 54.3481995,
        //     lng: 18.6891094
        //   },
        //   created: '2021-12-20T16:00:02+00:00',
        //   age: 0,
        //   isYUC: false,
        //   reserved: false
        // }
        .parseAsync(item)
        .then((item) =>
          vehicleItems.findOne({ id: item.id }).then((exists: any) => {
            if (exists) {
              const diff = diffItem(exists, item);
              if (diff) {
                console.log(`[${exists.id}]`);
                console.log(diff);
                summary.updated.push(item.id);
                return vehicleItems.update(updateItem(exists, item));
              } else {
                summary.checked.push(item.id);
                return vehicleItems.update({ ...exists, _checked: _time });
              }
            } else {
              summary.created.push(item.id);
              return vehicleItems.insert(createItem(item));
            }
          })
        )
    );
  }
}

export class GameService {
  async request(
    type: string,
    args = {}
  ): Promise<{
    type: string;
    list: any[];
    next: any;
  }> {
    return z
      .object({
        $type: z.string().default(type),
      })
      .parseAsync(args)
      .then(({ $type }) =>
        request({ $type }).then((data) =>
          z
            .object({
              Products: z.array(
                z
                  .object({
                    ProductId: z.string(),
                    LocalizedProperties: z.array(
                      z.object({
                        DeveloperName: z.string(),
                        Images: z.array(
                          z.object({
                            Uri: z.string(),
                            Width: z.number(),
                          })
                        ),
                        ProductTitle: z.string(),
                        PublisherName: z.string(),
                      })
                    ),
                  })
                  .passthrough()
              ),
            })
            .transform(({ Products }) => ({
              type,
              list: Products,
              next: null,
            }))
            .parseAsync(data)
        )
      );
  }

  async process(item = {}, summary: any): Promise<any> {
    return z
      .object({
        ProductId: z.string(),
      })
      .passthrough()
      .transform((Product) => ({ id: Product.ProductId, ...Product }))
      .parseAsync(item)
      .then((item) =>
        gameItems.findOne({ id: item.id }).then((last: any) => {
          if (last) {
            const {
              _id,
              _created = _past,
              _updated = _created,
              _history = {},
              ...rest
            } = last;
            const diff = diffString(rest, item);
            if (diff) {
              console.log(`[${last.id}]`);
              console.log(diff);

              const update = {
                _id,
                ...item,
                _created,
                _updated: _time,
                _history: Object.assign({
                  ..._history,
                  [_updated]: rest,
                }),
              };
              summary.updated.push(item.id);
              gameItems.update(update);
            } else {
              summary.checked.push(item.id);
            }
          } else {
            summary.created.push(item.id);
            gameItems.insert({ ...item, _created: _time });
          }
        })
      );
  }
}
