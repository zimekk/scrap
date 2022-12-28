import { z } from "zod";

export const AvailabilityQuery = z.object({
  checkIn: z.string(),
  checkOut: z.string(),
  occupancy: z
    .object({
      adults: z.coerce.number(),
      children: z
        .object({
          minAge: z.coerce.number(),
          maxAge: z.coerce.number(),
          count: z.coerce.number(),
        })
        .array()
        .optional(),
    })
    .array(),
});

export const OffersQuery = z.object({
  status: z.coerce.number().default(1),
});

const PersonTypes = z
  .object({
    type: z.string(),
    minAge: z.number().nullable(),
    maxAge: z.number().nullable(),
  })
  .array();

export const Data = z.object({
  gallery: z
    .object({
      title: z.string(),
      description: z.string().nullable(),
      featured: z.string().nullable(),
      images: z
        .object({
          title: z.string().nullable(),
          description: z.string().nullable(),
          fileName: z.string(),
          orderIndex: z.number(),
        })
        .array(),
    })
    .optional(),
  personTypes: PersonTypes.optional(),
  policies: z.any().optional(),
  vouchers: z.any().optional(),
  extraBeds: z.any().optional(),
  rooms: z
    .object({
      id: z.number(),
      gallery: z.object({
        title: z.string().nullable(),
        description: z.null(),
        featured: z.object({
          title: z.null(),
          description: z.null(),
          fileName: z.string(),
          orderIndex: z.null(),
        }),
        images: z
          .object({
            title: z.null(),
            description: z.null(),
            fileName: z.string(),
            orderIndex: z.number(),
          })
          .array(),
      }),
      attributes: z.object({
        area: z.string().nullable(),
        maxOccupancy: z
          .object({ people: z.number(), extraBeds: z.number().nullable() })
          .nullable(),
        bedsConfiguration: z
          .object({
            total: z.number().nullable(),
            singleBeds: z.number().nullable(),
            doubleBeds: z.number().nullable(),
            foldingBeds: z.number().nullable(),
            splitBeds: z.number().nullable(),
          })
          .nullable(),
        layout: z
          .object({
            rooms: z.number().nullable(),
            bathrooms: z.number().nullable(),
            kitchen: z.boolean(),
          })
          .nullable(),
        facilities: z
          .object({
            wifi: z.number(),
            airConditioning: z.number(),
            balcony: z.number(),
            television: z.number(),
            parkingLot: z.number(),
          })
          .nullable(),
      }),
      address: z.null(),
      translations: z
        .object({
          locale: z.string(),
          messages: z
            .object({ fieldName: z.string(), value: z.string() })
            .array(),
        })
        .array(),
      orderIndex: z.number(),
      standard: z.object({
        kind: z.string(),
        type: z.string(),
        standard: z.string(),
      }),
      limits: z
        .object({
          min: z.object({
            numberOfPeople: z.number(),
            occupancy: z.object({
              adults: z.number(),
              children: z
                .object({
                  minAge: z.number(),
                  maxAge: z.number(),
                  count: z.number(),
                })
                .array(),
            }),
          }),
          max: z.object({
            numberOfPeople: z.number(),
            occupancy: z.object({
              adults: z.number(),
              children: z
                .object({
                  minAge: z.number(),
                  maxAge: z.number(),
                  count: z.number(),
                })
                .array(),
            }),
          }),
        })
        .nullable(),
      totalRooms: z.number().nullable(),
      category: z
        .object({
          id: z.number(),
          orderIndex: z.number().nullable(),
          translations: z
            .object({
              locale: z.string(),
              messages: z
                .object({ fieldName: z.string(), value: z.string() })
                .array(),
            })
            .array(),
        })
        .nullable(),
      offerIds: z.number().array(),
    })
    .array()
    .optional(),
  offers: z
    .object({
      id: z.number(),
      type: z.string(),
      status: z.number(),
      profiles: z
        .object({
          type: z.string(),
          methods: z.number().array(),
          deposit: z
            .object({
              percentage: z.number().nullable(),
              nights: z.number().nullable(),
            })
            .nullable(),
          params: z
            .object({
              cancelTime: z.string().nullable(),
              cancelUnit: z.string().nullable(),
              arrivalTime: z.null(),
              schedule: z
                .object({
                  daysOffset: z.number(),
                  type: z.string(),
                  value: z.number(),
                })
                .array()
                .nullable(),
            })
            .nullable(),
          dateRanges: z
            .object({ from: z.string(), to: z.string() })
            .array()
            .nullable(),
          translations: z
            .object({
              locale: z.string(),
              messages: z
                .object({ fieldName: z.string(), value: z.string() })
                .array(),
            })
            .array()
            .nullable(),
        })
        .array(),
      attributes: z.object({
        mealPlanType: z.number(),
        dateRange: z.object({ from: z.string(), to: z.string() }).nullable(),
        minimumNights: z.number().nullable(),
        numberNights: z.number().nullable(),
        kind: z.string().nullable(),
        isHiddenPromoCodes: z.boolean(),
      }),
      gallery: z.object({
        title: z.string().nullable(),
        description: z.null(),
        featured: z.object({
          title: z.null(),
          description: z.null(),
          fileName: z.string(),
          orderIndex: z.null(),
        }),
        images: z.array(z.unknown()),
      }),
      translations: z.array(
        z.object({
          locale: z.string(),
          messages: z
            .object({ fieldName: z.string(), value: z.string() })
            .array(),
        })
      ),
      restrictions: z.object({
        availableFrom: z.string().nullable(),
        availableTo: z.string(),
        minNights: z.number().nullable(),
        fixedNights: z.number().nullable(),
        checkInWeekDays: z.array(z.unknown()),
        availableWeekDays: z.array(z.unknown()),
        shutsDates: z.array(z.unknown()),
        checkInDates: z.array(z.unknown()),
      }),
      tags: z.number().array(),
      orderIndex: z.number(),
      channelIds: z.number().array(),
      roomIds: z.number().array(),
    })
    .array()
    .optional(),
  availability: z
    .object({
      occupancy: z.object({
        adults: z.number(),
        children: z
          .object({
            minAge: z.number(),
            maxAge: z.number(),
            count: z.number(),
          })
          .array(),
      }),
      proposals: z
        .object({
          proposal: z.object({
            OfferID: z.number(),
            RoomID: z.number(),
            occupancyOption: z.object({
              id: z.string(),
              arrangementID: z.number().nullable(),
              extraBedsIDs: z.array(z.unknown()),
            }),
            price: z.object({ amount: z.number(), currency: z.string() }),
            originalPrice: z
              .object({ amount: z.number(), currency: z.string() })
              .nullable(),
            simulatedPrice: z
              .object({ amount: z.number(), currency: z.string() })
              .nullable(),
            stay: z.object({ from: z.string(), to: z.string() }),
            occupancy: z.object({
              adults: z.number(),
              children: z
                .object({
                  minAge: z.number(),
                  maxAge: z.number(),
                  count: z.number(),
                })
                .array(),
            }),
            attributes: z
              .object({
                breakfast: z.object({
                  name: z.string(),
                  description: z.string().nullable(),
                  rate: z.object({
                    calculationType: z.string(),
                    prices: z
                      .object({
                        price: z.number(),
                        type: z.string(),
                        minAge: z.number().nullable(),
                        maxAge: z.number().nullable(),
                      })
                      .array(),
                  }),
                }),
              })
              .nullable(),
            offerDates: z.null(),
            discounts: z
              .object({ amount: z.number(), availableTo: z.null() })
              .array(),
          }),
          roomCount: z.number().nullable(),
        })
        .array(),
    })
    .array()
    .optional(),
});

export type DataType = z.infer<typeof Data>;

export const Details = z.object({
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
      .object({
        locale: z.string(),
        messages: z
          .object({ fieldName: z.string(), value: z.string() })
          .array(),
      })
      .array()
      .nullable(),
    discount: z.object({ amount: z.number(), method: z.string() }).nullable(),
  }),
  guestMessageTranslations: z
    .array(
      z.object({
        locale: z.string(),
        messages: z
          .object({ fieldName: z.string(), value: z.string() })
          .array(),
      })
    )
    .nullable(),
  hasVouchers: z.boolean(),
  translations: z
    .object({
      locale: z.string(),
      messages: z.array(z.object({ fieldName: z.string(), value: z.string() })),
    })
    .array(),
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

export const Rooms = Details.extend({
  id: z.string(),
});

export type RoomsType = z.infer<typeof Rooms> & {
  _created: number;
  _checked: number;
  _updated: number;
  _cache?: Record<string, any>;
};

export type OccupancyType = {
  adults: number;
  children?: number[];
};

export const getOccupancyList = (
  personTypes: z.infer<typeof PersonTypes>,
  occupancy: OccupancyType[]
) => occupancy.map((occupancy) => getOccupancy(personTypes, occupancy));

export function getOccupancy(
  personTypes: z.infer<typeof PersonTypes>,
  { adults, children }: OccupancyType
) {
  return {
    adults,
    children: personTypes
      .map(({ minAge, maxAge }) => ({
        minAge,
        maxAge,
        count:
          minAge === null || maxAge === null || children === undefined
            ? 0
            : children.filter((age) => minAge <= age && age <= maxAge).length,
      }))
      .filter(({ count }) => count > 0),
  };
}
