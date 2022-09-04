import { z } from "zod";
import { Category, Coordinates } from "../utils";

export const addressKlik = (
  location_path: { name: string; type: string }[],
  location_user: string
) =>
  ((
    address: any,
    [
      lokalizacja_kraj,
      lokalizacja_region,
      lokalizacja_powiat,
      lokalizacja_miejscowosc,
    ]
  ) =>
    Object.assign(
      {
        lokalizacja_kraj:
          lokalizacja_kraj.slice(0, 1) +
          lokalizacja_kraj.slice(1).toLocaleLowerCase(), //"Polska"
        lokalizacja_miejscowosc:
          address.miejsce ||
          lokalizacja_miejscowosc.slice(0, 1) +
            lokalizacja_miejscowosc.slice(1).toLocaleLowerCase(), //"Stare Babice"
        lokalizacja_powiat:
          {
            WARSZAWA: "warszawski",
            "Warszawa m.": "warszawski",
          }[lokalizacja_powiat] || lokalizacja_powiat.toLocaleLowerCase(), //"warszawski zachodni"
        lokalizacja_region: lokalizacja_region.toLocaleLowerCase(), //"mazowieckie"
      },
      address.miejsce2 ? { lokalizacja_dzielnica: address.miejsce2 } : {},
      address.dzielnica ? { lokalizacja_dzielnica: address.dzielnica } : {},
      address.ulica ? { lokalizacja_ulica: address.ulica } : {}
    ))(
    location_path.reduce(
      (address, { name, type }) => Object.assign(address, { [type]: name }),
      {}
    ),
    (
      {
        POLSKA: location_user,
        mazowieckie: `POLSKA, ${location_user}`,
      }[location_user.split(",")[0]] ||
      `POLSKA, MAZOWIECKIE, WARSZAWA,${location_user}`
    )
      .split(",")
      .map((s) => s.trim())
  );

export const scrapPropertyKlikItem = (item: any) =>
  z
    .object({
      id: z.string(),
      address: z
        .object({
          lokalizacja_gmina: z.string().optional(),
          lokalizacja_region: z.string(),
          lokalizacja_powiat: z.string(),
          lokalizacja_miejscowosc: z.string(),
          lokalizacja_kraj: z.string(),
          lokalizacja_ulica: z.string().optional(),
        })
        .passthrough(),
      canonical: z.string(),
      category: Category,
      coordinates: Coordinates,
      images: z.array(z.string()),
      location: z.array(z.string()),
      title: z.string(),
      // price: z.string().transform((value) => Number(value.replace(/\s+/g, ""))),
      price: z.number(),
      description: z.array(z.string()),
      parameters: z.array(
        z.object({
          label: z.string(),
          value: z.string().transform((value) => value.replace(/\s+/g, " ")),
        })
      ),
      created: z.string(),
      changed: z.string(),
    })
    .strict()
    .parse(
      z
        .object({
          // f: z.object({
          //   p: z.string(),
          //   p_pln: z.string(),
          //   pp_m2_pln: z.string(),
          //   pp_m2_pln_wz: z.string(),
          //   area_m2: z.string(),
          //   area_m2_4: z.string(),
          //   pp_m2_pln_4: z.string(),
          //   area_m2_4t: z.string(),
          // }),
          id: z.number(),
          // exists: z.number(),
          // is_active: z.boolean(),
          // is_active_merge: z.boolean(),
          // format: z.string(),
          // currency: z.string(),
          // price: z.number(),
          price_pln: z.number(),
          // price_per_m2_pln: z.number(),
          // area_m2: z.number(),
          latitude: z.number(),
          longitude: z.number(),
          description_short: z.string(),
          title: z.string(),
          location_path: z.array(
            z.object({
              name: z.string(),
              type: z.enum(["dzielnica", "miejsce", "miejsce2", "ulica"]),
            })
          ),
          // location_path_id: z.string(),
          location_user: z.string(),
          // location_owner_type_name: z.string(),
          // have_image: z.number(),
          our_title: z.string(),
          // our_desc: z.string(),
          // our_list: z.string(),
          our_url: z.string(),
          // contact_phone_merge: z.array(z.string()),
          type: z.number(), //.transform(type => z.enum(['1']).parse(String(type))),
          kind: z.number(), //.transform(kind => z.enum(['4']).parse(String(kind))),
          // kind: z.enum([4]),
          // offerowner_name: z.string(),
          images: z.array(z.string()),
          created: z.string(),
          changed: z.string(),
          // distance: z.number(),
          // distanceT: z.string(),
        })
        // .passthrough()
        .transform(
          ({
            id,
            description_short,
            images,
            latitude,
            longitude,
            location_path,
            location_user,
            our_title,
            our_url,
            price_pln,
            title,
            type,
            kind,
            created,
            changed,
          }) => ({
            id: `klik-${id}`,

            address: addressKlik(location_path, location_user),

            canonical: `https://www.klikmapa.pl/o/${our_url}-id${id}.html`,
            category: {
              "1": {
                "2": "domy",
                "4": "dzialki-grunty/budowlana",
              }[kind],
            }[type],
            coordinates: {
              latitude,
              longitude,
              // radius: z.number(),
              // zoomLevel: z.number(),
            },
            description: [description_short],
            images,
            location: location_user.split(",").map((s) => s.trim()),
            parameters: [],
            price: price_pln,
            title: title || our_title,
            created,
            changed,
          })
        )
        .parse(item)
    );
