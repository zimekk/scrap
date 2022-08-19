import { z } from "zod";

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
    tradeInNc: z.boolean(),
    tradeInUc: z.boolean(),
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
          priceOriginal: z.number().optional(),
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
        isAffiliateCompany: z.boolean(),
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
