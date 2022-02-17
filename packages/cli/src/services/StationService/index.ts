import cheerio from "cheerio";
import { z } from "zod";
import { headingDistanceTo } from "geolocation-utils";
import { diffString } from "json-diff";
import { stationItems } from "@dev/api/stations";
import { request } from "../../request";
import {
  ItemSchema,
  StationItemSchema,
  StationListSchema,
  StationTypeSchema,
} from "./types";

const _time = Date.now();

export const updateItem = (last: any, item: any, updated = _time) =>
  (({ _updated, _history, ...last }, item) => {
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
      ...last,
      ...item,
      _updated: updated,
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
    return update;
  })(
    z
      .object({
        _id: z.string(),
        _created: z.number(),
        _updated: z.number().default(last._created),
        _history: z.object({}).passthrough().default({}),
        petrol: z.object({}).passthrough(),
        petrol_list: z.array(z.any()),
      })
      .passthrough()
      .parse(last),
    z.object({}).passthrough().parse(item)
  );

export const fromHtml = (html: string) =>
  (($) => ({
    address: $("div.right-side > a:first-child").text(),
    petrol_list: $("ul.petrol-list > li")
      .map((_i, $el) => {
        return {
          type: $($el.children[0]).text(),
          price: $($el.children[1]).text(),
        };
      })
      .get(),
  }))(cheerio.load(html));

export class StationService {
  async request(type: string): Promise<{
    type: string;
    list: any[];
    next: any;
  }> {
    return StationTypeSchema.parseAsync(type.split(":")).then(
      ({ $type, $center, $radius }) =>
        request({ $type }).then((data) =>
          StationListSchema.transform((list) => ({
            type,
            list: list.filter(
              ({ x: lat, y: lng }: any) =>
                headingDistanceTo($center, { lat, lng }).distance < $radius
            ),
            next: null,
          })).parseAsync(data)
        )
    );
  }

  async process(item = {}, summary: any): Promise<any> {
    return ItemSchema.parseAsync(item)
      .then(({ station_id }) => station_id)
      .then(($station_id) =>
        request({ $type: "get-station", $station_id }).then(({ html }) =>
          StationItemSchema.parse({
            ...item,
            ...fromHtml(html),
          })
        )
      )
      .then((item) =>
        stationItems.findOne({ id: item.id }).then((last: any) => {
          if (last) {
            const diff = diffString(last.petrol, item.petrol);
            if (diff) {
              console.log(`[${last.id}]`);
              console.log(diff);
              summary.updated.push(item.id);
              return stationItems.update(updateItem(last, item));
            } else {
              summary.checked.push(item.id);
              return stationItems.update({ ...last, _checked: _time });
            }
          } else {
            summary.created.push(item.id);
            return stationItems.insert({ ...item, _created: _time });
          }
        })
      );
  }
}
