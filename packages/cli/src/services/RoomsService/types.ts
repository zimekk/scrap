import { z } from "zod";

export const Rooms = z.object({
  id: z.string(),
  defaultCurrency: z.object({
    code: z.string(),
    symbol: z.string(),
    orderIndex: z.null(),
  }),
  defaultLocale: z.string(),
  logo: z
    .object({
      title: z.null(),
      description: z.null(),
      fileName: z.string(),
      orderIndex: z.null(),
    })
    .nullable(),
  photo: z
    .object({
      title: z.null(),
      description: z.null(),
      fileName: z.string(),
      orderIndex: z.null(),
    })
    .nullable(),
  // config: z.record(z.string().or(z.string().array())),
  url: z.string().nullable(),
  maxOccupancy: z.number(),
  discountBox: z.object({
    translations: z
      .array(
        z.object({
          locale: z.string(),
          messages: z.array(
            z.object({ fieldName: z.string(), value: z.string() })
          ),
        })
      )
      .nullable(),
    discount: z.object({ amount: z.number(), method: z.string() }).nullable(),
  }),
  guestMessageTranslations: z
    .array(
      z.object({
        locale: z.string(),
        messages: z.array(
          z.object({ fieldName: z.string(), value: z.string() })
        ),
      })
    )
    .nullable(),
  hasVouchers: z.boolean(),
  translations: z.array(
    z.object({
      locale: z.string(),
      messages: z.array(z.object({ fieldName: z.string(), value: z.string() })),
    })
  ),
  address: z.object({
    name: z.null(),
    city: z.string(),
    street: z.string(),
    district: z.null(),
    postalCode: z.string(),
    coordinates: z.object({ latitude: z.number(), longitude: z.number() }),
    country: z.string(),
    description: z.null(),
  }),
  legalAddress: z.object({
    name: z.string(),
    city: z.string(),
    postalCode: z.string(),
    street: z.string(),
  }),
  timeZone: z.string(),
  defaultChannelId: z.number(),
  masterSiteKey: z.string().nullable(),
});

export type RoomsType = z.infer<typeof Rooms> & {
  _created: number;
  _checked: number;
  _updated: number;
};
