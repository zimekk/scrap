import { z } from "zod";

export const PhotoSchema = z
  .object({
    Url: z.string(),
    ThumbnailUrl: z.string(),
    UrlTemplate: z.string().nullable(),
  })
  .passthrough();

export const ProductSchema = z
  .object({
    Photos: PhotoSchema.array(),
    // Comments: [],
    // OnlineAvailability: [Object],
    // DepartmentsAvailability: [Array],
    // ShipmentCosts: [Array],
    ProductDescription: z.string(),
    // Features: [Array],
    // SubstituteProducts: null,
    // ComplementaryProducts: [Array],
    // PromotionTypes: null,
    // Eans: null,
    // Banners: [Array],
    // AlternativeProducts: null,
    // AdditionalServices: null,
    // AdditionalServicesDetails: null,
    // IsExtendedConfiguration: false,
    // IsAvailableInDepartments: false,
    // LeasingInfo: [Array],
    // ProductMarksExtended: [],
    // Movies: [],
    // Photos3D: null,
    // CommentsPhotos: [],
    // GalleryItemsCount: 5,
    // SaleInfo: null,
    // HasPromotionPrices: false,
    // CommentStatistics: [Object],
    // EnergyLabel: null,
    // ProductLimitation: null,
    // CommentsRating: 0,
    // CommentsCount: 0,
    // FeatureSummary: [Array],
    // FeatureSummaryStructured: [Array],
    AvailabilityStatus: z.enum(["Available"]),
    ProducerCode: z.string(),
    // FreeShipment: false,
    // InstallmentMinimum: null,
    // Marks: null,
    // AlternativeGroupID: null,
    // AlternativeProductItems: null,
    Id: z.string(),
    Name: z.string(),
    Price: z.number(),
    // OldPrice: null,
    // PriceInfo: [Object],
    // Producer: [Object],
    // Category: [Object],
    // SecondaryCategory: [],
    MainPhoto: PhotoSchema,
    WebUrl: z.string(),
    IsEsd: z.boolean(),
    // EsdType: 'NotDefined'
  })
  .passthrough();

export const ItemSchema = z
  .object({
    Id: z.string(),
    Product: ProductSchema,
    Price: z.number(),
    OldPrice: z.number(),
    PromotionGainText: z.string(),
    PromotionGainTextLines: z.string().array(),
    PromotionGainValue: z.number(),
    PromotionTotalCount: z.number(),
    SaleCount: z.number(),
    MaxBuyCount: z.number(),
    PromotionName: z.string(),
    PromotionEnd: z.string(),
    // HtmlContent: null,
    PromotionPhoto: PhotoSchema,
    IsActive: z.boolean(),
    // IsSuspended: false,
    // MinimumInstallmentValue: null
  })
  .passthrough();

export type ItemType = z.infer<typeof ItemSchema> & {
  id: string;
  _created: number;
  _checked: number;
};
