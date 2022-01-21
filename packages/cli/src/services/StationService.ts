import cheerio from "cheerio";
import { headingDistanceTo } from "geolocation-utils";
import { diffString } from "json-diff";
import { z } from "zod";
import { stationItems } from "@dev/api/stations";
import { request } from "../request";

const ERA = 24 * 3600 * 1000;
const _time = Date.now();
const _past = _time - ERA;

export class StationService {
  async request(type: string): Promise<{
    type: string;
    list: any[];
    next: any;
  }> {
    return z
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
      }))
      .parseAsync(type.split(":"))
      .then(({ $type, $center, $radius }) =>
        request({ $type }).then((data) =>
          z
            .array(
              z
                .object({
                  x: z.number(),
                  y: z.number(),
                })
                .passthrough()
            )
            .transform((list) => ({
              type,
              list: list.filter(
                ({ x: lat, y: lng }: any) =>
                  headingDistanceTo($center, { lat, lng }).distance < $radius
              ),
              next: null,
            }))
            .parseAsync(data)
        )
      );
  }

  async process(item = {}, summary: any): Promise<any> {
    return z
      .object({
        station_id: z.number(),
      })
      .parseAsync(item)
      .then(({ station_id }) => station_id)
      .then(($station_id) =>
        request({ $type: "get-station", $station_id }).then(({ html }: any) => {
          const $ = cheerio.load(html);

          // console.log(item);

          return z
            .object({
              x: z.number(),
              y: z.number(),
              station_id: z.number(),
              network_id: z.number(),
              network_name: z.string(),
              // map_img: z.string(),
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
                network_id,
                network_name,
                petrol_list,
              }) => ({
                id: station_id,
                station_id,
                x,
                y,
                address,
                network_id,
                network_name,
                petrol_list,
                petrol: petrol_list.reduce(
                  (petrol: any, { type, price }: any) =>
                    Object.assign(petrol, { [type]: price }),
                  {}
                ),
              })
            )
            .parse({
              ...item,
              address: $("div.right-side > a:first-child").text(),
              petrol_list: $("ul.petrol-list > li")
                .map((_i, $el) => {
                  return {
                    type: $($el.children[0]).text(),
                    price: $($el.children[1]).text(),
                  };
                })
                .get(),
            });
        })
      )
      .then((item) =>
        stationItems
          .findOne({ id: item.id })
          .then(
            ({
              _id,
              _created = _past,
              _updated = _created,
              _history = {},
              ...last
            }: any) => {
              if (last) {
                const diff = diffString(last.petrol, item.petrol);
                if (diff) {
                  console.log(`[${last.id}]`);
                  console.log(diff);

                  if (!last.petrol) {
                    Object.assign(last, {
                      petrol: last.petrol_list.reduce(
                        (petrol: any, { type, price }: any) =>
                          Object.assign(petrol, { [type]: price }),
                        {}
                      ),
                    });
                  }

                  const update = {
                    _id,
                    ...item,
                    _created,
                    _updated: _time,
                    _history: Object.assign(
                      {
                        ..._history,
                      },
                      Object.keys(last.petrol).length
                        ? {
                            [_updated]: last.petrol,
                          }
                        : {}
                    ),
                  };
                  console.log(update);
                  summary.updated.push(item.id);
                  return stationItems.update(update);
                } else {
                  summary.checked.push(item.id);
                  return stationItems.update({ ...last, _checked: _time });
                }
              } else {
                summary.created.push(item.id);
                return stationItems.insert({ ...item, _created: _time });
              }
            }
          )
      );
  }
}
