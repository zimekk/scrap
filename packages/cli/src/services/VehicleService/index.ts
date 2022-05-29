import { diffString } from "json-diff";
import { z } from "zod";
import {
  vehicleItems,
  vehicle2Items,
  vehicle3Items,
  vehicle4Items,
  vehicle5Items,
} from "@dev/api/vehicles";
import { request } from "../../request";
import Service from "../Service";
import {
  VehicleData,
  VehicleItem,
  Vehicle2Data,
  Vehicle2Item,
  Vehicle3Data,
  Vehicle3Item,
  Vehicle4Data,
  Vehicle4Item,
  Vehicle5Data,
  Vehicle5Item,
} from "./types";
import { scrapOptions } from "./utils";

const ERA = 24 * 3600 * 1000;
const _time = Date.now();
const _past = _time - ERA;

const createItem = (item: {}) => ({ ...item, _created: _time });
const diffItem = (
  {
    lastChange,
    comfortLeaseProduct,
    vehicleDataVersion,
    _id,
    _created,
    _updated,
    _checked,
    _removed,
    _history,
    options,
    ..._item
  }: {
    lastChange?: any;
    comfortLeaseProduct?: any;
    vehicleDataVersion?: any;
    _id: string;
    _created: number;
    _updated: number;
    _checked: number;
    _removed: number;
    _history: {};
    options: string[];
  },
  {
    lastChange: _lastChange,
    comfortLeaseProduct: _comfortLeaseProduct,
    vehicleDataVersion: _vehicleDataVersion,
    ...item
  }: { lastChange?: any; comfortLeaseProduct?: any; vehicleDataVersion?: any }
) => diffString(_item, item);
const updateItem = (
  {
    _id,
    _created = _past,
    _updated = _created,
    _history = {},
    ..._item
  }: { _id: string; _created: number; _updated: number; _history: {} },
  item: {}
) => ({
  ...item,
  _id,
  _created,
  _updated: _time,
  _history: {
    ..._history,
    [_updated]: _item,
  },
});

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

export class Vehicle2Service extends Service {
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
        $from: z.number().default(0),
        $size: z.number().default(100),
      })
      .parseAsync(args)
      .then(({ $type, $from, $size }) =>
        (({
          $type = "pluc",
          $from = 0,
          $size = 100,
          $sort = "prices.retail%3Aasc",
        }: any) =>
          request(
            {
              id: ["scs", this.mk, $type, $size, $from].join("-"),
              url: `https://scs.audi.de/api/v2/search/filter/${$type}/pl?svd=svd-2021-11-15t01_48_13_593-23&sort=${$sort}&from=${$from}&size=${$size}`,
            },
            this.summary
          ))({ $type: $type.split(":")[1] })
          .then((data) => Vehicle2Data.parse(data))
          .then(({ totalCount, vehicleBasic }) => ({
            type,
            list: vehicleBasic,
            next:
              $from + $size < totalCount
                ? {
                    $from: $from + $size,
                    $size,
                  }
                : null,
          }))
      );
  }

  async process(item = {}): Promise<any> {
    return Vehicle2Item.parseAsync(item)
      .then((item) =>
        vehicle2Items.findOne({ id: item.id }).then((last: any) => {
          if (last) {
            const diff = diffItem(last, item);
            if (diff) {
              console.log(`[${last.id}]`, diff);
              this.summary.updated.push(item.id);
              return vehicle2Items.update(updateItem(last, item));
            } else {
              this.summary.checked.push(item.id);
              return vehicle2Items.update({ ...last, _checked: _time });
            }
          } else {
            this.summary.created.push(item.id);
            return vehicle2Items.insert(createItem(item));
          }
        })
      )
      .catch((e) => console.log(e, item));
  }
}

export class Vehicle3Service extends Service {
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
        currentPage: z.number().default(0),
        pageSize: z.number().default(48),
      })
      .parseAsync(args)
      .then(({ $type, currentPage, pageSize }) =>
        request(
          {
            id: ["mercedes-benz", this.mk, pageSize, currentPage].join("-"),
            url: `https://shop.mercedes-benz.com/cars-backend/dcp-api/v2/mpvehicles-pl/products/search?lang=pl&query=%3Aprice-asc%3AallCategories%3Ampvehicles-pl-vehicles&currentPage=${currentPage}&pageSize=${pageSize}&fields=FULL`,
          },
          this.summary
        )
          .then((data) => Vehicle3Data.parse(data))
          .then(
            ({
              pagination: { currentPage, pageSize, totalPages },
              products,
            }) => ({
              type,
              list: products,
              next:
                currentPage + 1 < totalPages
                  ? {
                      $type,
                      currentPage: currentPage + 1,
                      pageSize,
                    }
                  : null,
            })
          )
      );
  }

  async process(item = {}): Promise<any> {
    return Vehicle3Item.parseAsync(item)
      .then((item: any) =>
        vehicle3Items.findOne({ id: item.id }).then((last: any) => {
          if (last) {
            const diff = diffItem(last, item);
            if (diff) {
              console.log(`[${last.id}]`, diff);
              this.summary.updated.push(item.id);
              return vehicle3Items.update(updateItem(last, item));
            } else {
              this.summary.checked.push(item.id);
              return vehicle3Items.update({ ...last, _checked: _time });
            }
          } else {
            this.summary.created.push(item.id);
            return vehicle3Items.insert(createItem(item));
          }
        })
      )
      .catch((e) => console.log(e, item));
  }
}

export class Vehicle4Service extends Service {
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
        page: z.number().default(1),
      })
      .parseAsync(args)
      .then(({ $type, page }) =>
        request(
          {
            id: ["porsche", this.mk, page].join("-"),
            url: `https://finder.porsche.com/api/pl/pl-PL/search?${
              page > 1 ? `page=${page}&` : ``
            }orderBy=recommended_desc&distanceUnit=kilometer`,
          },
          this.summary
        )
          .then((data) => Vehicle4Data.parse(data))
          .then(({ pages: { activePage, totalPages }, results }) => ({
            type,
            list: results,
            next:
              activePage < totalPages
                ? {
                    $type,
                    page: activePage + 1,
                  }
                : null,
          }))
      );
  }

  async process(item = {}): Promise<any> {
    return Vehicle4Item.parseAsync(item).then((item: any) =>
      vehicle4Items.findOne({ id: item.id }).then((last: any) => {
        if (last) {
          const diff = diffItem(last, item);
          if (diff) {
            console.log(`[${last.id}]`, diff);
            this.summary.updated.push(item.id);
            return vehicle4Items.update(updateItem(last, item));
          } else {
            this.summary.checked.push(item.id);
            return vehicle4Items.update({ ...last, _checked: _time });
          }
        } else {
          this.summary.created.push(item.id);
          return vehicle4Items.insert(createItem(item));
        }
      })
    );
  }
}

export class Vehicle5Service extends Service {
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
        page: z.number().default(1),
        per_page: z.number().default(100),
      })
      .parseAsync(args)
      .then(({ $type, page, per_page }) =>
        request(
          {
            id: ["vw", this.mk, per_page, page].join("-"),
            url: `https://admin.od-reki.volkswagen.pl/api/cars?page=${page}&per_page=${per_page}`,
            params: {
              headers: {
                "x-app-id": "VW_DCP_C",
              },
            },
          },
          this.summary
        )
          .then((data) => Vehicle5Data.parse(data))
          .then(({ count_all, records }) => ({
            type,
            list: records,
            next:
              page * per_page < count_all
                ? {
                    page: page + 1,
                    per_page,
                  }
                : null,
          }))
      );
  }

  async process(item = {}): Promise<any> {
    return Vehicle5Item.parseAsync(item)
      .then((item) =>
        vehicle5Items.findOne({ id: item.id }).then((last: any) => {
          if (last) {
            //   const diff = diffItem(last, item);
            //   if (diff) {
            //     console.log(`[${last.id}]`, diff);
            //     summary.updated.push(item.id);
            //     return vehicle5Items.update(updateItem(last, item));
            //   } else {
            this.summary.checked.push(item.id);
            return vehicle5Items.update({ ...last, _checked: _time });
            // }
          } else {
            this.summary.created.push(item.id);
            return vehicle5Items.insert(createItem(item));
          }
        })
      )
      .catch((e) => console.log(e, item));
  }
}
