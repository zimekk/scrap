import { z } from "zod";

const ResultSchema = z.object({
  listingUrlSlug: z.string(),
  meta: z.object({
    title: z.string(),
    seller: z.object({
      porschePartnerNumber: z.string(),
      name: z.string(),
      address: z.string(),
      formattedCity: z.string(),
      websiteUrl: z.string(),
    }),
    imageUrl: z.string(),
    condition: z.string(),
    priceCurrency: z.string(),
    priceValue: z.number(),
    numberOfPreviousOwners: z.number(),
    firstRegistration: z.string(),
    mileage: z.string(),
    model: z.string(),
    interiorColor: z.string(),
    color: z.string(),
    transmission: z.string(),
    warranty: z.number(),
    productionDate: z.string(),
    modelDate: z.string(),
  }),
  dataLayerListingMeta: z.object({
    car: z.object({
      listingId: z.string(),
      type: z.string(),
      realcarStatus: z.string(),
      isPorscheApproved: z.boolean(),
      modelRangeName: z.string(),
      modelCode: z.string(),
      modelName: z.string(),
      modelModelYear: z.number(),
      exteriorColorName: z.string(),
      interiorColorName: z.string(),
      priceTotalTotal: z.number(),
      mileage: z.number(),
      mileageUnit: z.string(),
    }),
    partner: z.object({ companyId: z.string() }),
  }),
  gallery: z.object({
    imageIds: z.array(z.string()),
    imagesType: z.string(),
  }),
  description: z.object({
    price: z.string(),
    salesIncentives: z.array(z.unknown()),
    title: z.string(),
    subtitle: z.string(),
    seller: z.object({ name: z.string(), city: z.string() }),
    configuration: z.array(z.string()),
    characteristics: z.array(
      z.union([
        z.object({ value: z.string() }),
        z.object({ value: z.string(), greyOut: z.boolean() }),
      ])
    ),
    consumptionEmission: z.string(),
    listingId: z.string(),
    onlineOrderableState: z.string(),
    externalReference: z.object({
      system: z.string(),
      id: z.string(),
    }),
  }),
});

export const JsonSchema = z.object({
  url: z.string(),
  data: z.object({
    pages: z.object({
      activePage: z.number(),
      totalPages: z.number(),
      totalPagesUnknown: z.boolean(),
    }),
    count: z.string(),
    results: z.object({}).passthrough().array(),
  }),
});

export const ItemSchema = ResultSchema.transform((item) => ({
  id: `macan-${item.description.listingId}`,
  ...item,
}));

export const DiffSchema = ResultSchema.extend({
  id: z.string(),
});

export type ItemType = z.infer<typeof ItemSchema> & {
  _id: string;
  _created: number;
  _checked: number;
  _updated: number;
  _history: Record<string, object>;
};
