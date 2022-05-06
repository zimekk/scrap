import { z } from "zod";

export const ItemSchema = z.object({
  station_id: z.number(),
});

export const StationItemSchema = z
  .object({
    x: z.number(),
    y: z.number(),
    station_id: z.number(),
    network_id: z.number(),
    network_name: z.string(),
    map_img: z.string(),
    address: z.string(),
    petrol_list: z.array(
      z.object({
        type: z.string(),
        price: z.string(),
      })
    ),
  })
  .transform(
    ({
      station_id,
      x,
      y,
      address,
      map_img,
      network_id,
      network_name,
      petrol_list,
    }) => ({
      id: station_id,
      station_id,
      x,
      y,
      address,
      map_img,
      network_id,
      network_name,
      petrol_list,
      petrol: petrol_list.reduce(
        (petrol: any, { type, price }: any) =>
          Object.assign(petrol, { [type]: price }),
        {}
      ),
    })
  );

export const StationListSchema = z.array(
  z
    .object({
      x: z.number(),
      y: z.number(),
    })
    .passthrough()
);

export const StationTypeSchema = z
  .tuple([
    z.string(),
    z.string().transform(Number),
    z.string().transform(Number),
    z.string().transform(Number),
  ])
  .transform(([$type, lat, lng, $radius]) => ({
    $type,
    $center: { lat, lng },
    $radius,
  }));

export type StationItem = {
  _id: string;
  _created: number;
  _updated: number;
  _history: Record<string, string>;
} & z.infer<typeof StationItemSchema>;
