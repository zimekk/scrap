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
              url: `https://najlepszeoferty.bmw.pl/uzywane/api/v1/ems/${$type}-pl_PL/search`,
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

  async process(item = {}): Promise<any> {
    return VehicleItem.parseAsync(item)
      .then((item) =>
        vehicleItems.findOne({ id: item.id }).then((last: any) => {
          if (last) {
            const diff = diffItem(last, item);
            if (diff || last._removed) {
              console.log(`[${last.id}]`, diff);
              delete last._removed;
              this.summary.updated.push(item.id);
              return vehicleItems.update({
                ...updateItem(last, item),
                _checked: _time,
              });
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
        fetch(href).then((response: any) =>
          Boolean(console.log(href, response.status)) || response.status === 404
            ? { ...item, _removed: _time }
            : response.text().then((html: string) => ({
                ...scrapOptions(item, html),
                _checked: _time,
              }))
        )
      )
      .then((item) => {
        this.summary[item._removed ? "removed" : "checked"].push(item.id);

        return vehicleItems.update(item).then(() => item);
      });
  }
}
