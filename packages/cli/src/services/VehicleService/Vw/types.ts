import { z } from "zod";

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
              z.string(),
              z
                .object({
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
                .nullable(),
            )
            .nullable(),
        })
        .passthrough(),
    ),
  })
  .strict();

export const Vehicle5Item = z
  .object({
    id: z.string(),
  })
  .passthrough();
