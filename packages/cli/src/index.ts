import fetch from "isomorphic-fetch";
import cheerio from "cheerio";
import { BehaviorSubject, Subject, from, interval } from "rxjs";
import { distinct, filter, map, mergeMap, take, tap } from "rxjs/operators";
import { diffString } from "json-diff";
import { items, requests } from "@dev/api";
import {
  stationItems,
  stationRequests,
  vehicleItems,
  vehicle2Items,
} from "@dev/api/stations";

require("dotenv").config();

const { URL, STATIONS_URL } = process.env;
const ERA = 24 * 3600 * 1000;
const _time = Date.now();
const _past = _time - ERA;

const timeout =
  (timeout = Math.random() * 5000) =>
  (data: any) =>
    new Promise((resolve) => setTimeout(() => resolve(data), timeout));

const prepare =
  (data: any) =>
  ({ items, page }: any) => ({
    ...data,
    next_page:
      Math.ceil(Number(data.total_found) / items) > page ? page + 1 : null,
  });

const timestamp = (mktime: number, period = 1000 * 3600 * 24) =>
  mktime - (mktime % period);

const request = ({
  time = Date.now(),
  lat = 52.1530829,
  lng = 21.1104411,
  circle = 25014.985524846034,
  kind = 4,
  type = 1, // dzialki/do-sprzedania
  // kind = 2, type = 1, // domy/do-sprzedania
  // kind = 1, type = 2, // mieszkania/do-wynajecia
  items = 20,
  page = 1,
}) => {
  const mk = timestamp(time);
  const id = [mk, lat, lng, circle, kind, type, items, page].join("-");
  console.log({ id });
  return requests.findOne({ id }).then((data: any) =>
    data
      ? Promise.resolve(data.json).then((json) =>
          prepare(json)({ items, page })
        )
      : fetch(
          `${URL}?dump=list&type=${type}&kind=${kind}&id=0&lat=${lat}&lng=${lng}&circle=${circle}&page=${page}&items=${items}&sort=default&cat=4,8`
        )
          .then((response: any) => {
            console.log(["request"], id, requestLimit--);
            if (requestLimit < 0) {
              throw new Error("Request limit has been exceeded");
            }
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
          })
          .then((json: any) => requests.insert({ id, json }))
          .then(timeout())
          .then(({ json }: any) => prepare(json)({ items, page }))
  );
};

let requestLimit = 100;

export default function () {
  // https://dev.to/jacobgoh101/simple--customizable-web-scraper-using-rxjs-and-node-1on7
  const pages$ = new BehaviorSubject(1);

  const uniquePages$ = pages$.pipe(
    filter((page: number) => page > 0),
    map((page: number) => page),
    distinct()
  );

  const fetchPages$ = uniquePages$.pipe(
    mergeMap((page: any) => {
      return from(
        request({ page }).then((data: any) =>
          Promise.all(
            data.results.map((item: any) =>
              items
                .findOne({ id: item.id })
                .then((exists: any) => exists || items.insert(item))
            )
          ).then(() => data)
        )
      ).pipe(
        map(({ results, total_found, next_page }) => ({
          page,
          results,
          total_found,
          next_page,
        }))
      );
    })
  );

  // fetchPages$.subscribe(({ next_page }: any) => {
  //   if (next_page && requestLimit > 0) {
  //     pages$.next(next_page);
  //   }
  // });

  enum Method {
    GetStations = "stations-get-stations",
    GetStation = "stations-get-station",
  }

  const stations$ = new BehaviorSubject(Method.GetStations);

  const stationRequest = ({
    method,
    station_id,
  }: {
    method: Method;
    station_id?: number;
  }) => {
    const id = [method, station_id].filter(Boolean).join("-");
    console.log({ id });
    return stationRequests.findOne({ id }).then((data: any) =>
      data
        ? Promise.resolve(data.json)
        : fetch(
            {
              [Method.GetStations]: `${STATIONS_URL}stations-get-stations?zoom=6`,
              [Method.GetStation]: `${STATIONS_URL}stations-get-station?station_id=${station_id}`,
            }[method]
          )
            .then((response: any) => {
              console.log(["request"], id, requestLimit--);
              if (requestLimit < 0) {
                throw new Error("Request limit has been exceeded");
              }
              if (response.status >= 400) {
                throw new Error("Bad response from server");
              }
              return response.json();
            })
            .then((json: any) => stationRequests.insert({ id, json }))
            .then(timeout())
            .then(({ json }: any) => json)
    );
  };

  const fetchStations$ = stations$.pipe(
    mergeMap((method) => {
      return from(stationRequest({ method }));
    }),
    mergeMap((data: any) => {
      return data;
    }),
    // take(100),
    map((data: any) => {
      return data;
    }),
    mergeMap((data: any) => {
      const { station_id } = data;
      return from(
        stationRequest({ method: Method.GetStation, station_id })
      ).pipe(
        map(({ html }: any) => {
          const $ = cheerio.load(html);
          return {
            html,
            petrol_list: $("ul.petrol-list > li")
              .map((_i, $el) => {
                return {
                  type: $($el.children[0]).text(),
                  price: $($el.children[1]).text(),
                };
              })
              .get(),
          };
        }),
        map(({ html, petrol_list }) => ({ ...data, html, petrol_list })),
        map(({ station_id, x, y, network_name, petrol_list }) => ({
          id: station_id,
          station_id,
          x,
          y,
          network_name,
          petrol_list,
        }))
      );
    }, 1)
  );

  const config = {
    "scs.audi.de": ({
      $time = Date.now(),
      // $type = 'pluc',
      $type = "pl",
      $from = 0,
      $size = 100,
      $sort = "prices.retail%3Aasc",
    }) => {
      const mk = timestamp($time, 1000 * 3600);

      return {
        id: ["scs", mk, $type, $size, $from].join("-"),
        request: () =>
          fetch(
            `https://scs.audi.de/api/v2/search/filter/${$type}/pl?svd=svd-2021-11-15t01_48_13_593-23&sort=${$sort}&from=${$from}&size=${$size}`
          ),
      };
    },
    "najlepszeoferty.bmw.pl": ({
      $time = Date.now(),
      // $type = 'bmw-used',
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
      $skip = 0,
      $limit = 250,
    }) => {
      const mk = timestamp($time, 1000 * 3600);

      return {
        id: ["najlepszeoferty", mk, $type, $limit, $skip].join("-"),
        //  https://najlepszeoferty.mini.com.pl/nowe//api/v1/ems/mini-new-pl_PL/search
        request: () =>
          fetch(
            `https://najlepszeoferty.bmw.pl/uzywane/api/v1/ems/${$type}-pl_PL/search`,
            {
              method: "POST",
              body: JSON.stringify({
                $match,
                $skip,
                $limit,
              }),
            }
          ),
      };
    },
  };

  const vehicleRequest = ({ $type, ...rest }: any) => {
    const [site, type] = $type.split(":");
    // @ts-ignore
    const { id, request } = config[site]({ $type: type, ...rest });
    return requests
      .findOne({ id })
      .then((data: any) =>
        data
          ? Promise.resolve(data)
          : request()
              .then((response: any) => {
                console.log(["request"], id, requestLimit--);
                if (requestLimit < 0) {
                  throw new Error("Request limit has been exceeded");
                }
                if (response.status >= 400) {
                  throw new Error("Bad response from server");
                }
                return response.json();
              })
              .then(
                (json: any) =>
                  Boolean(console.log({ id, json })) ||
                  requests.insert({ id, json: JSON.stringify(json) })
              )
              .then(timeout())
      )
      .then(({ json }: any) => JSON.parse(json));
  };

  const vehicles$ = new Subject<{
    $type: string;
    $skip?: number;
    $limit?: number;
  }>();

  vehicles$
    .pipe(
      mergeMap(({ $type, $skip = 0, $limit = 100 }) =>
        from(vehicleRequest({ $type, $skip, $limit })).pipe(
          map(({ $list, $count }) => ({
            $type,
            $skip,
            $limit,
            $list,
            $count,
          })),
          tap(({ $type, $skip, $limit, $count: { $total } }) => {
            const $next = $skip + $limit;
            console.log({ $type, $skip, $limit, $next, $total });
            if ($next < $total) {
              vehicles$.next({ $type, $skip: $next, $limit });
            }
          })
        )
      ),
      mergeMap(({ $list }) => $list)
    )
    .subscribe((item: any) => {
      // console.log({item})
      vehicleItems
        .findOne({ id: item.id })
        // .then((exists: any) => exists || vehicleItems.insert(item));
        .then((exists: any) => {
          if (exists) {
            const diff = diffItem(exists, item);
            if (diff) {
              console.log(`[${exists.id}]`);
              console.log(diff);
              vehicleItems.update(updateItem(exists, item));
            }
          } else {
            vehicleItems.insert(createItem(item));
          }
        });
    });

  const createItem = (item: {}) => ({ ...item, _created: _time });
  const diffItem = (
    {
      lastChange,
      comfortLeaseProduct,
      _id,
      _created,
      _updated,
      _history,
      ..._item
    }: {
      lastChange?: any;
      comfortLeaseProduct?: any;
      _id: string;
      _created: number;
      _updated: number;
      _history: {};
    },
    {
      lastChange: _lastChange,
      comfortLeaseProduct: _comfortLeaseProduct,
      ...item
    }: { lastChange?: any; comfortLeaseProduct?: any }
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

  const vehicles2$ = new Subject<{
    $type: string;
    $from?: number;
    $size?: number;
  }>();

  vehicles2$
    .pipe(
      mergeMap(({ $type, $from = 0, $size = 100 }) =>
        from(vehicleRequest({ $type, $from, $size })).pipe(
          map(({ vehicleBasic, totalCount }) => ({
            $type,
            $from,
            $size,
            vehicleBasic,
            totalCount,
          })),
          tap(({ $type, $from, $size, totalCount }) => {
            const $next = $from + $size;
            console.log({ $type, $from, $size, $next, totalCount });
            if ($next < totalCount) {
              vehicles2$.next({ $type, $from: $next, $size });
            }
          })
        )
      ),
      mergeMap(({ vehicleBasic }) => vehicleBasic)
    )
    .subscribe((item: any) => {
      // console.log({item})
      vehicle2Items
        .findOne({ id: item.id })
        // .then((exists: any) => exists || vehicle2Items.insert(item));
        .then((exists: any) => {
          if (exists) {
            const diff = diffItem(exists, item);
            if (diff) {
              console.log(`[${exists.id}]`);
              console.log(diff);
              vehicle2Items.update(updateItem(exists, item));
            }
          } else {
            vehicle2Items.insert(createItem(item));
          }
        });
    });

  from([
    "najlepszeoferty.bmw.pl:bmw-new",
    "najlepszeoferty.bmw.pl:bmw-used",
    "najlepszeoferty.bmw.pl:mini-new",
  ]).subscribe(($type) => {
    console.log({ $type });
    vehicles$.next({ $type });
  });

  from(["scs.audi.de:pluc", "scs.audi.de:pl"]).subscribe(($type) => {
    console.log({ $type });
    vehicles2$.next({ $type });
  });

  // fetchStations$.subscribe(({ ...item }: any) => {
  //   // console.log({item})
  //   stationItems
  //     .findOne({ id: item.id })
  //     .then((exists: any) => exists || stationItems.insert(item));
  // });

  // interval(200).pipe(
  //   take(10),
  //   map(n => n*2),
  //   mergeMap((n) => {
  //     console.log({n})
  //     return [1,2,3]
  //   })
  // ).subscribe(console.log)

  // items.findOne({ id: 355583 }).then(console.log);
}
