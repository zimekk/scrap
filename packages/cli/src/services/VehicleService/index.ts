import { z } from "zod";
import { vehicleItems } from "@dev/api/vehicles";
import { request } from "../../request";
import Service from "../Service";
import { VehicleData, VehicleItem } from "./types";
import {
  _time,
  _past,
  createItem,
  diffItem,
  scrapOptions,
  updateItem,
} from "./utils";

const { BMW_URL, MINI_URL } = process.env;

export { VehicleAudiService } from "./Audi";
export { VehicleBenzService } from "./Benz";
export { VehiclePorscheService } from "./Porsche";
export { VehicleVwService } from "./Vw";

export class VehicleService extends Service {
  async request(
    type: string,
    args = {}
  ): Promise<{
    type: string;
    list: any[];
    next: any;
  }> {
    return z
      .object({
        $type: z.string().default(type),
        $skip: z.number().default(0),
        $limit: z.number().default(100),
      })
      .parseAsync(args)
      .then(({ $type, $skip, $limit }) =>
        (({
          $type = "bmw-new",
          // $type = 'mini-new',
          $match = {
            transactionalPrice: {
              $min: 0,
              $max: 1790000,
            },
            // brand: 1, // BMW
            // brand: 65, // MINI
            // series :5
          },
        }: any) =>
          request(
            {
              id: ["najlepszeoferty", this.mk, $type, $limit, $skip].join("-"),
              url: `${["mini-new"].includes($type) ? MINI_URL : BMW_URL}${
                ["bmw-used"].includes($type) ? "uzywane" : "nowe"
              }/api/v1/ems/${$type}-pl_PL/search`,
              params: {
                method: "POST",
                body: JSON.stringify({
                  $match,
                  $skip,
                  $limit,
                }),
              },
            },
            this.summary
          ))({
          $type: $type.split(":")[1],
        }).then((data) =>
          VehicleData.transform(({ $list, $count: { $total } }) => ({
            type,
            list: $list,
            next: (($next) =>
              $next < $total ? { $type, $skip: $next, $limit } : null)(
              $skip + $limit
            ),
          })).parseAsync(data)
        )
      );
  }

  async sync(data = {}, { timestamp: _fetched }: any = {}) {
    return VehicleData.transform(({ $list }) =>
      Promise.all($list.map((item) => this.process(item, { _fetched })))
    ).parseAsync(data);
  }

  async process(item = {}, { _fetched }: any = {}): Promise<any> {
    return VehicleItem.parseAsync(item)
      .then((item) =>
        vehicleItems.findOne({ id: item.id }).then((last: any) => {
          if (last) {
            if (
              _fetched &&
              (_fetched < last._checked ||
                _fetched < last._updated ||
                _fetched < last._created)
            ) {
              return;
            }
            const diff = diffItem(last, item);
            // console.log({item, last})
            if (diff || last._removed) {
              console.log(`[${last.id}]`, diff);
              delete last._removed;
              this.summary.updated.push(item.id);
              return vehicleItems.update(updateItem(last, item));
            } else if (last._checked < _past) {
              this.summary.checked.push(item.id);
              return vehicleItems.update({ ...last, _checked: _time });
            }
          } else {
            this.summary.created.push(item.id);
            return vehicleItems.insert(createItem(item));
          }
        })
      )
      .catch((e) => console.log(e, item));
  }

  async inspect(item = {}): Promise<any> {
    return z
      .object({
        id: z.number(),
        isNew: z.boolean(),
        brand: z.object({
          label: z.string(),
        }),
      })
      .passthrough()
      .parseAsync(item)
      .then(({ id, isNew, brand }) =>
        brand.label === "MINI"
          ? isNew
            ? `https://najlepszeoferty.mini.com.pl/nowe/wyszukaj/opis-szczegolowy/${id}/`
            : `https://najlepszeoferty.mini.com.pl/uzywane/wyszukaj/opis-szczegolowy/${id}/`
          : isNew
          ? `https://najlepszeoferty.bmw.pl/nowe/wyszukaj/opis-szczegolowy/${id}/`
          : `https://najlepszeoferty.bmw.pl/uzywane/wyszukaj/opis-szczegolowy/${id}/`
      )
      .then((href) =>
        fetch(href, {
          redirect: "manual",
        }).then((response: any) =>
          Boolean(console.log(response.url, response.status)) ||
          [302, 404].includes(response.status)
            ? { ...item, _removed: _time }
            : response.text().then((html: string) => ({
                ...scrapOptions(item, html),
                _checked: _time,
              }))
        )
      )
      .then((item) => {
        this.summary[item._removed ? "removed" : "checked"].push(item.id);
        return vehicleItems
          .update(item)
          .then(() => Object.assign(item, { _history: {} }));
      });
  }
}
