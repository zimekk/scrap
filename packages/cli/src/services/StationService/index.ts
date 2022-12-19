import { z } from "zod";
import { headingDistanceTo } from "geolocation-utils";
import { diffString } from "json-diff";
import { stationItems } from "@dev/api/stations";
import { request } from "../../request";
import Service from "../Service";
import {
  ItemSchema,
  StationItemSchema,
  StationListSchema,
  StationTypeSchema,
} from "./types";
import { fromHtml } from "./utils";

const { STATIONS_URL } = process.env as {
  STATIONS_URL: string;
};

const _time = Date.now();

const updateItem = (last: any, item: any, updated = _time) =>
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
    return update;
  })(
    z
      .object({
        _id: z.string(),
        _created: z.number().default(updated),
        _updated: z.number().default(last._created || updated),
        _history: z.object({}).passthrough().default({}),
        petrol: z.object({}).passthrough().default({}),
        petrol_list: z.array(z.any()),
      })
      .passthrough()
      .parse(last),
    z.object({}).passthrough().parse(item)
  );

export class StationService extends Service {
  async fetcher(type: string, station_id = 0, zoom = 6) {
    return request(
      {
        "stations-get-stations": {
          id: [type, this.mk, zoom].join("-"),
          url: `${STATIONS_URL}${type}?zoom=${zoom}`,
        },
        "stations-get-station": {
          id: [type, this.mk, station_id].join("-"),
          url: `${STATIONS_URL}${type}?station_id=${station_id}`,
        },
      }[type] as { id: string; url: string },
      this.summary
    );
  }

  async request(type: string): Promise<{
    type: string;
    list: any[];
    next: any;
  }> {
    return StationTypeSchema.parseAsync(type.split(":")).then(
      ({ $center, $radius }) =>
        this.fetcher("stations-get-stations").then((data) =>
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

  async sync({ json: { html }, timestamp: _fetched, ...item }: any = {}) {
    return StationItemSchema.parseAsync({
      ...item,
      ...fromHtml(html),
    })
      .then((item) => this.processItem(item, { _fetched }))
      .catch((e) => console.log(e, item));
  }

  async processItem(item: any, { _fetched }: any = {}) {
    return stationItems.findOne({ id: item.id }).then((last: any) => {
      if (last) {
        if (
          _fetched &&
          (_fetched < last._checked ||
            _fetched < last._updated ||
            _fetched < last._created)
        ) {
          return;
        }
        // if (item.map_img) {
        //   return stationItems.update({ ...last, map_img: item.map_img });
        // }
        const diff = diffString(last.petrol, item.petrol);
        if (diff) {
          console.log(`[${last.id}]`, diff);
          this.summary.updated.push(item.id);
          return stationItems.update(updateItem(last, item));
        } else {
          this.summary.checked.push(item.id);
          return stationItems.update({ ...last, _checked: _time });
        }
      } else {
        this.summary.created.push(item.id);
        return stationItems.insert({ ...item, _created: _time });
      }
    });
  }

  async process(item = {}): Promise<any> {
    return ItemSchema.parseAsync(item)
      .then(({ station_id }) =>
        this.fetcher("stations-get-station", station_id).then(({ html }) =>
          StationItemSchema.parseAsync({
            ...item,
            ...fromHtml(html),
          })
        )
      )
      .then((item) => this.processItem(item))
      .catch((e) => console.log(e, item));
  }
}
