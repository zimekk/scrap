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

export const VehicleItem = z
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
  .passthrough();
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

export const Vehicle2Data = z.object({
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
});
// .strict()

export const Vehicle2Item = z
  .object({
    id: z.string(),
    bodyType: z.object({ code: z.string() }).optional(),
    decodedCarId: z.string(),
    mbvHandbook: z.object({}),
    buyableOnline: z.boolean(),
    employeeVehicle: z.boolean(),
    hideRenderImages: z.boolean(),
    used: z
      .object({
        numPreviousOwners: z.number().optional(),
        mileageUnit: z.string(),
        mileageFormatted: z.string(),
        pictureUrls: z.array(z.string()).optional(),
        warrantyTypes: z
          .array(
            z.object({ code: z.string(), description: z.string() }).strict()
          )
          .optional(),
        remarks: z.string().optional(),
        initialRegistration: z.string(),
        initialRegistrationDate: z.number(),
        mileage: z.number(),
      })
      .strict()
      .optional(),
    gearType: z.object({ code: z.string(), description: z.string() }),
    type: z.string(),
    dateOffer: z.number(),
    availableFrom: z.string(),
    symbolicCarline: z.object({ description: z.string() }),
    investorSharedVehicle: z.boolean(),
    availableFromDate: z.number(),
    envkvIOData: z.object({}),
    emissionClass: z
      .object({ code: z.string(), description: z.string() })
      .optional(),
    modelCode: z.object({ code: z.string() }),
    leasingCar: z.boolean(),
    model: z.object({ code: z.string(), description: z.string() }),
    rawDealerId: z.string(),
    vtpDataStoreUrl: z.string(),
    brand: z.object({ code: z.string() }),
    tilesPictures: z
      .array(
        z.object({
          originalKey: z.string(),
          type: z.string(),
          key: z.string(),
          url: z.string(),
        })
      )
      .optional(),
    threesixtyDegrees: z.boolean(),
    symbolicCarlineGroup: z
      .object({ code: z.string(), description: z.string() })
      .optional(),
    io: z.object({ hasWltp: z.boolean(), hasNedc: z.boolean() }),
    entryUrl: z.string(),
    exhaust: z.string().optional(),
    vat: z.object({ code: z.string(), description: z.string() }).optional(),
    intColor: z.object({ code: z.string() }),
    modelYear: z.number(),
    commissionNumber: z.string(),
    fallbackPictures: z.array(
      z.object({
        originalKey: z.string(),
        type: z.string(),
        key: z.string(),
        url: z.string(),
      })
    ),
    carId: z.string(),
    symbolicMarketId: z.string(),
    efficiencyClass: z.string().optional(),
    vehicleDataVersion: z.string(),
    weblink: z.string(),
    gearBox: z
      .object({ code: z.string(), description: z.string().optional() })
      .optional(),
    modelVersion: z.number().nullable(),
    langCode: z.string(),
    upholsteryColor: z.object({ code: z.string() }),
    productionYear: z.number(),
    vlsEnergyProvision: z.object({
      hasWltp: z.boolean(),
      hasNedc: z.boolean(),
    }),
    upholsteryType: z.object({ description: z.string() }),
    pictures: z
      .array(
        z.object({
          originalKey: z.string(),
          type: z.string(),
          key: z.string(),
          url: z.string(),
        })
      )
      .optional(),
    liveConsulting: z.boolean(),
    hasCampaigns: z.boolean(),
    topColor: z.object({ code: z.string() }),
    audiCode: z.string(),
    caeSource: z.array(z.string()),
    offerType: z.string(),
    powerDisplay: z.string().optional(),
    modelExtensions: z.array(z.string()).optional(),
    countryCode: z.string(),
    financing: z
      .object({
        calculationDisclaimer: z.string(),
        product: z.object({ id: z.string(), label: z.string() }),
        // productDisclaimer: z.string(),
        domain: z.string(),
        name: z.string(),
        dealer: z.object({}),
        // parameters: z.array(z.unknown()),
        vehicle: z.object({
          year: z.string(),
          priceOriginal: z.number(),
          priceTotal: z.number(),
          priceModel: z.number(),
          type: z.string(),
          key: z.string(),
        }),
      })
      .optional(),
    extColor: z.object({ code: z.string() }),
    warrantyPlus: z.boolean(),
    typedPrices: z.array(
      z.object({
        amount: z.number(),
        formatted: z.string(),
        type: z.string(),
        currencyCode: z.string(),
      })
    ),
    driveType: z.object({ code: z.string(), description: z.string() }),
    tyreLabels: z
      .array(
        z.object({
          prNumber: z.string(),
          labels: z.array(z.object({})).optional(),
        })
      )
      .optional(),
    nationWideSelling: z.boolean(),
    deleted: z.boolean(),
    envkvData: z.object({}).strict().optional(),
    prString: z.string(),
    dealer: z
      .object({
        zipCode: z.string(),
        dealerContextLinkData: z.array(
          z
            .object({
              dealerPersonIds: z.array(z.string()).optional(),
              hasDealerAddressData: z.boolean(),
              geoLocation: z.object({ lon: z.number(), lat: z.number() }),
              dealerId: z.string(),
              context: z.string(),
            })
            .strict()
        ),
        dealerPersons: z
          .array(
            z
              .object({
                firstname: z.string().optional(),
                lastname: z.string(),
              })
              .strict()
          )
          .optional(),
        city: z.string(),
        geoLocation: z.object({ lon: z.number(), lat: z.number() }),
        street: z.string(),
        name: z.string(),
        id: z.string(),
        email: z.string(),
        phoneNumbers: z.array(
          z
            .object({
              number: z.string(),
              type: z.string(),
            })
            .strict()
        ),
        trackingId: z.string(),
      })
      .strict(),
    lastChange: z.number(),
    mbvMarket: z.string(),
    vatReclaimable: z.boolean(),
    footnotes: z.object({}).strict(),
  })
  .strict();

export const Vehicle3Data = z
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
  .strict();

export const Vehicle3Item = z
  .object({
    id: z.string(),
  })
  .passthrough();

export const Vehicle4Data = z.object({
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
});
// .strict()

export const Vehicle4Item = z
  .object({
    id: z.string(),
  })
  .passthrough();

export const Vehicle5Data = z
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
            vbc: z
              .object({
                data: z.object({
                  price_net: z.number(),
                  installment: z.number(),
                  repurchase_quota: z.number(),
                }),
                km_limit: z.number(),
                own_payment: z.string(),
                funding_period: z.number(),
              })
              .optional(),
            credit_easy_drive: z
              .object({
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
              })
              .optional(),
            leasing_easy_drive: z
              .object({
                data: z.object({
                  price_net: z.number(),
                  installment: z.number(),
                  repurchase_quota: z.number(),
                }),
                km_limit: z.number(),
                own_payment: z.string(),
                funding_period: z.number(),
              })
              .optional(),
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
          render_gallery: z
            .record(
              z.object({
                original: z.string(),
                xlarge: z.string(),
                large: z.string(),
                medium: z.string(),
                small: z.string(),
                tiny: z.string(),
                adform_small: z.string(),
                adform_medium: z.string(),
                facebook_xlarge: z.string(),
              })
            )
            .nullable(),
        })
        .passthrough()
    ),
  })
  .strict();

export const Vehicle5Item = z
  .object({
    id: z.string(),
  })
  .passthrough();
