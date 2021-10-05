import fetch from "isomorphic-fetch";
import cheerio from "cheerio";
import { BehaviorSubject, Subject, from, interval } from "rxjs";
import { distinct, filter, map, mergeMap, take, tap } from "rxjs/operators";
import { items, requests } from "@dev/api";
import { stationItems, stationRequests } from "@dev/api/stations";

require("dotenv").config();

const { URL, STATIONS_URL } = process.env;

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
  items = 20,
  page = 1,
}) => {
  const mk = timestamp(time);
  const id = [mk, lat, lng, circle, items, page].join("-");
  console.log({ id });
  return requests.findOne({ id }).then((data: any) =>
    data
      ? Promise.resolve(data.json).then((json) =>
          prepare(json)({ items, page })
        )
      : fetch(
          `${URL}?dump=list&type=1&kind=4&id=0&lat=${lat}&lng=${lng}&circle=${circle}&page=${page}&items=${items}&sort=default&cat=4,8`
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

  fetchPages$.subscribe(({ next_page }: any) => {
    if (next_page && requestLimit > 0) {
      pages$.next(next_page);
    }
  });

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
