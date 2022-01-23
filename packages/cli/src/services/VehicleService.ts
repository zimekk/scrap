// import fetch from "isomorphic-fetch";
import { diffString } from "json-diff";
import { z } from "zod";
import {
  vehicleItems,
  vehicle2Items,
  vehicle3Items,
  vehicle4Items,
  vehicle5Items,
} from "@dev/api/stations";
import { request } from "../request";
import { scrapOptions } from "../utils";

const ERA = 24 * 3600 * 1000;
const _time = Date.now();
const _past = _time - ERA;

const timeout =
  (timeout = Math.random() * 3000) =>
  (data: any) =>
    new Promise((resolve) => setTimeout(() => resolve(data), timeout));

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

export class VehicleService {
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

  async process(item = {}, summary: any): Promise<any> {
    return (
      z
        .object({
          id: z.number(),
          type: z.string(),
          isNew: z.boolean(),
          modelCode: z.string().optional(),
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

  async inspect(item = {}, summary: any): Promise<any> {
    return z
      .object({
        id: z.number(),
        isNew: z.boolean(),
      })
      .passthrough()
      .parseAsync(item)
      .then(({ id, isNew }) =>
        isNew
          ? `//najlepszeoferty.bmw.pl/nowe/wyszukaj/opis-szczegolowy/${id}/`
          : `//najlepszeoferty.bmw.pl/uzywane/wyszukaj/opis-szczegolowy/${id}/`
      )
      .then((href) =>
        fetch(href).then((response: any) =>
          Boolean(console.log(href, response.status)) || response.status === 404
            ? { ...item, _removed: _time }
            : response.text().then((html: string) => ({
                ...scrapOptions(item, html),
                _checked: _time,
              }))
        )
      )
      .then((item) => {
        summary[item._removed ? "removed" : "checked"].push(item.id);

        return vehicleItems
          .update(item)
          .then(timeout())
          .then(() => item);
      });
  }
}

export class Vehicle2Service {
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
        $from: z.number().default(0),
        $size: z.number().default(100),
      })
      .parseAsync(args)
      .then(({ $type, $from, $size }) =>
        request({ $type, $from, $size })
          .then((data) =>
            z
              .object({
                totalCount: z.number(),
                vehicleBasic: z.array(
                  z
                    .object({
                      id: z.string(),
                    })
                    .passthrough()
                ),
                // "header",
                // "entryUrl",
                // "maxScore",
                // "maxPossibleScore",
                // "scoringPercentage",
                // "displayPercentage",
                // "groups",
                // "filterOptions",
                // "items",
                // "debug"
              })
              // .strict()
              .parse(data)
          )
          .then(({ totalCount, vehicleBasic }) => ({
            type,
            list: vehicleBasic,
            next:
              $from + $size < totalCount
                ? {
                    $from: $from + $size,
                    $size,
                  }
                : null,
          }))
      );
  }

  async process(item = {}, summary: any): Promise<any> {
    return z
      .object({
        id: z.string(),
      })
      .passthrough()
      .parseAsync(item)
      .then((item: any) =>
        vehicle2Items.findOne({ id: item.id }).then((last: any) => {
          if (last) {
            const diff = diffItem(last, item);
            if (diff) {
              console.log(`[${last.id}]`);
              console.log(diff);
              summary.updated.push(item.id);
              return vehicle2Items.update(updateItem(last, item));
            } else {
              summary.checked.push(item.id);
              return vehicle2Items.update({ ...last, _checked: _time });
            }
          } else {
            summary.created.push(item.id);
            return vehicle2Items.insert(createItem(item));
          }
        })
      );
  }
}

export class Vehicle3Service {
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
        currentPage: z.number().default(0),
        pageSize: z.number().default(48),
      })
      .parseAsync(args)
      .then(({ $type, currentPage, pageSize }) =>
        request({ $type, currentPage, pageSize })
          .then((data) =>
            z
              .object({
                pagination: z.object({
                  currentPage: z.number(),
                  pageSize: z.number(),
                  totalPages: z.number(),
                }),
                products: z.array(
                  z
                    .object({
                      commissionNumber: z.string(),
                    })
                    .passthrough()
                    .transform((item) => ({
                      ...item,
                      id: item.commissionNumber,
                    }))
                ),
              })
              .strict()
              .parse(data)
          )
          .then(
            ({
              pagination: { currentPage, pageSize, totalPages },
              products,
            }) => ({
              type,
              list: products,
              next:
                currentPage + 1 < totalPages
                  ? {
                      $type,
                      currentPage: currentPage + 1,
                      pageSize,
                    }
                  : null,
            })
          )
      );
  }

  async process(item = {}, summary: any): Promise<any> {
    return z
      .object({
        id: z.string(),
      })
      .passthrough()
      .parseAsync(item)
      .then((item: any) =>
        vehicle3Items.findOne({ id: item.id }).then((last: any) => {
          if (last) {
            const diff = diffItem(last, item);
            if (diff) {
              console.log(`[${last.id}]`);
              console.log(diff);
              summary.updated.push(item.id);
              return vehicle3Items.update(updateItem(last, item));
            } else {
              summary.checked.push(item.id);
              return vehicle3Items.update({ ...last, _checked: _time });
            }
          } else {
            summary.created.push(item.id);
            return vehicle3Items.insert(createItem(item));
          }
        })
      );
  }
}

export class Vehicle4Service {
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
        page: z.number().optional(),
      })
      .parseAsync(args)
      .then(({ $type, page }) =>
        request({ $type, page })
          .then((data) =>
            z
              .object({
                pages: z.object({
                  activePage: z.number(),
                  totalPages: z.number(),
                }),
                results: z.array(
                  z
                    .object({
                      description: z
                        .object({
                          listingId: z.string(),
                        })
                        .passthrough(),
                    })
                    .passthrough()
                    .transform((item) => ({
                      ...item,
                      id: item.description.listingId,
                    }))
                ),
                // count: z.any(),
                // filterOptions: z.any(),
                // sortOptions: z.any(),
              })
              // .strict()
              .parse(data)
          )
          .then(({ pages: { activePage, totalPages }, results }) => ({
            type,
            list: results,
            next:
              activePage < totalPages
                ? {
                    $type,
                    page: activePage + 1,
                  }
                : null,
          }))
      );
  }

  async process(item = {}, summary: any): Promise<any> {
    return z
      .object({
        id: z.string(),
      })
      .passthrough()
      .parseAsync(item)
      .then((item: any) =>
        vehicle4Items.findOne({ id: item.id }).then((last: any) => {
          if (last) {
            const diff = diffItem(last, item);
            if (diff) {
              console.log(`[${last.id}]`);
              console.log(diff);
              summary.updated.push(item.id);
              return vehicle4Items.update(updateItem(last, item));
            } else {
              summary.checked.push(item.id);
              return vehicle4Items.update({ ...last, _checked: _time });
            }
          } else {
            summary.created.push(item.id);
            return vehicle4Items.insert(createItem(item));
          }
        })
      );
  }
}

export class Vehicle5Service {
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
        page: z.number().default(1),
        per_page: z.number().default(100),
      })
      .parseAsync(args)
      .then(({ $type, page, per_page }) =>
        request({ $type, page, per_page })
          .then((data) =>
            z
              .object({
                count_all: z.number(),
                records: z.array(
                  z
                    .object({
                      id: z.number().transform((id) => `vw-${id}`),
                      kt_number: z.number(),
                      price: z.number(),
                      final_price: z.number(),
                      savings: z.number().nullable(),
                      archived: z.boolean(),
                      discounts: z.object({
                        discount_quota: z.number().nullable(),
                        discount_percent: z.null(),
                        advantage_quota: z.null(),
                      }),
                      suggested_installments: z.object({
                        vbc: z.object({
                          data: z.object({
                            price_net: z.number(),
                            installment: z.number(),
                            repurchase_quota: z.number(),
                          }),
                          km_limit: z.number(),
                          own_payment: z.string(),
                          funding_period: z.number(),
                        }),
                        credit_easy_drive: z.object({
                          data: z.object({
                            price_net: z.number(),
                            installment: z.number(),
                            credit_amount: z.number(),
                            bank_commission: z.number(),
                            credit_insurance: z.number(),
                            repurchase_quota: z.number(),
                            cost_of_financing: z.number(),
                            vehicle_insurance: z.number(),
                          }),
                          km_limit: z.number(),
                          own_payment: z.string(),
                          funding_period: z.number(),
                        }),
                        leasing_easy_drive: z.object({
                          data: z.object({
                            price_net: z.number(),
                            installment: z.number(),
                            repurchase_quota: z.number(),
                          }),
                          km_limit: z.number(),
                          own_payment: z.string(),
                          funding_period: z.number(),
                        }),
                      }),
                      duplicates_count: z.number(),
                      tyres: z.array(z.unknown()),
                      car_model: z.object({
                        id: z.number(),
                        production_year: z.number(),
                        model_year: z.number(),
                        doors: z.number(),
                        seats: z.number(),
                        drivetrain: z.string(),
                        name: z.string(),
                        body: z.string(),
                        version: z.string(),
                        campaign_ids: z.array(z.unknown()),
                        bonus: z.null(),
                        engine: z.object({
                          id: z.number(),
                          name: z.string(),
                          capacity: z.string(),
                          fuel: z.string(),
                          hp_km: z.number(),
                          hp_kw: z.number(),
                        }),
                        transmission: z.object({
                          id: z.number(),
                          name: z.string(),
                          kind: z.string(),
                        }),
                      }),
                      color: z.object({
                        code: z.string(),
                        display_name: z.string(),
                        kind: z.string(),
                        color_shade: z.object({
                          name: z.string(),
                          icon_color: z.null(),
                        }),
                      }),
                      upholstery: z.object({
                        code: z.string(),
                        display_name: z.string(),
                      }),
                      dealer: z.object({
                        name: z.string(),
                        city: z.string(),
                        street: z.string(),
                        postal_code: z.string(),
                        region: z.string(),
                        phone: z.string(),
                        lat: z.string().transform(Number),
                        lng: z.string().transform(Number),
                        url: z.string().nullable(),
                        external_id: z.string(),
                      }),
                      render_gallery: z.null(),
                    })
                    .passthrough()
                ),
              })
              .strict()
              .parse(data)
          )
          .then(({ count_all, records }) => ({
            type,
            list: records,
            next:
              page * per_page < count_all
                ? {
                    page: page + 1,
                    per_page,
                  }
                : null,
          }))
      );
  }

  async process(item = {}, summary: any): Promise<any> {
    return z
      .object({
        id: z.string(),
      })
      .passthrough()
      .parseAsync(item)
      .then((item) =>
        vehicle5Items.findOne({ id: item.id }).then((last: any) => {
          if (last) {
            //   const diff = diffItem(last, item);
            //   if (diff) {
            //     console.log(`[${last.id}]`);
            //     console.log(diff);
            //     summary.updated.push(item.id);
            //     return vehicle5Items.update(updateItem(last, item));
            //   } else {
            summary.checked.push(item.id);
            return vehicle5Items.update({ ...last, _checked: _time });
            // }
          } else {
            summary.created.push(item.id);
            return vehicle5Items.insert(createItem(item));
          }
        })
      );
  }
}
