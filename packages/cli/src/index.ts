import fetch from "isomorphic-fetch";
import { BehaviorSubject, from } from "rxjs";
import { map, distinct, filter, mergeMap } from "rxjs/operators";
import { items, requests } from "@dev/api";

require("dotenv").config();

const { URL } = process.env;

const timeout =
  (timeout = 3000) =>
  (data: any) =>
    new Promise((resolve) => setTimeout(() => resolve(data), timeout));

const prepare =
  (data: any) =>
  ({ items, page }: any) => ({
    ...data,
    next_page:
      Math.ceil(Number(data.total_found) / items) > page ? page + 1 : null,
  });

const request = ({
  lat = 52.1530829,
  lng = 21.1104411,
  circle = 25014.985524846034,
  items = 20,
  page = 1,
}) => {
  const id = [lat, lng, circle, items, page].join("-");
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

let requestLimit = 50;

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

  fetchPages$.subscribe(({ page, next_page }: any) => {
    if (next_page && requestLimit > 0) {
      pages$.next(next_page);
    }
  });

  // items.findOne({ id: 355583 }).then(console.log);
}
