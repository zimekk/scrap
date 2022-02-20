import { z } from "zod";

export const DiffSchema = z.object({
  DisplaySkuAvailabilities: z.array(
    z.object({
      Availabilities: z.array(
        z.object({
          Conditions: z.any(),
          OrderManagementData: z.object({ Price: z.any() }),
        })
      ),
    })
  ),
  LastModifiedDate: z.string(),
});

export const ItemSchema = z.object({
  DisplaySkuAvailabilities: z.array(
    z.object({
      Availabilities: z.array(
        z.object({
          Conditions: z.any(),
          OrderManagementData: z.object({ Price: z.any() }),
        })
      ),
    })
  ),
  LastModifiedDate: z.string(),
  LocalizedProperties: z.array(
    z.object({
      DeveloperName: z.string(),
      Images: z.array(
        z.object({
          Uri: z.string(),
          Width: z.number(),
        })
      ),
      ProductDescription: z.string(),
      ProductTitle: z.string(),
      PublisherName: z.string(),
    })
  ),
  MarketProperties: z.array(
    z.object({
      OriginalReleaseDate: z.string(),
      UsageData: z.any(),
    })
  ),
  ProductId: z.string(),
  Properties: z.object({
    Categories: z.any(),
  }),
});

export type Item = {
  id: string;
  _created: number;
  _updated: number;
} & z.infer<typeof ItemSchema>;
