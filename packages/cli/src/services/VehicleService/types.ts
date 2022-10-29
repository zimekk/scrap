import { z } from "zod";

export const VehicleData = z.object({
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
});

export const VehicleBase = z.object({
  id: z.number(),
  type: z.string(),
  isNew: z.boolean(),
  modelCode: z.string().optional(),
  title: z.string(),
  brand: z.object({ id: z.number(), label: z.string() }),
  series: z.object({ id: z.number(), label: z.string() }).optional(),
  bodyType: z.object({ id: z.number(), label: z.string() }),
  seriesCode: z.string().optional(),
  productionYear: z.number(),
  mileage: z.number().optional(),
  fuel: z.object({ id: z.number(), label: z.string() }),
  consumptionFuel: z.number().optional(),
  consumptionElectric: z.number().optional(),
  electricRange: z.number().optional(),
  emission: z.number().optional(),
  emissionStandard: z.object({ id: z.number(), label: z.string() }),
  powerKW: z.number(),
  powerHP: z.number(),
  capacity: z.number().optional(),
  transmission: z.object({ id: z.number(), label: z.string() }),
  color: z.object({ code: z.string(), id: z.number(), label: z.string() }),
  images: z.number(),
  // imagesLastChanged: z.string(),
  exterior360: z.boolean(),
  interior360: z.boolean(),
  warranty: z.number(),
  usedBrand: z.boolean(),
  reservable: z.boolean(),
  vatReclaimable: z.boolean(),
  leasable: z.boolean(),
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
  newPrice: z.number().optional(),
  optionsPrice: z.number().optional(),
  accessoriesPrice: z.number().optional(),
  transactionalPrice: z.number(),
  dealer: z
    .object({
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
    })
    .passthrough(),
  // created: z.string(),
  age: z.number().optional(),
  isYUC: z.boolean().optional(),
  reserved: z.boolean(),
  vin17: z.string().optional(),
  registration: z.string().optional(),
  emissionMeasurementStandard: z.string().optional(),
  panoramas: z.number().optional(),
  video: z.string().optional(),
  // transactionalPriceUpdated: z.string(),
  reservationFee: z.number().optional(),
  reservationStatus: z.string().optional(),
});

export const ExtendedItem = VehicleBase.extend({
  options: z.string().array().optional(),
  created: z.string(),
  imagesLastChanged: z.string().optional(),
  panoramasLastChanged: z.string().optional(),
  transactionalPriceUpdated: z.string().optional(),
});

export const VehicleItem = ExtendedItem.extend({
  // href: z.string().optional(),
  // srcSet: z.string().array().optional(),
}).strict();

export const VehicleDiff = VehicleBase;
