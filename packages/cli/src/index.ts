import fetch from "isomorphic-fetch";
import cheerio from "cheerio";
import { Subject, from, of } from "rxjs";
import { delay, distinct, map, mergeMap, take, tap } from "rxjs/operators";
import { diffString } from "json-diff";
import { parse } from "node-html-parser";
import { headingDistanceTo } from "geolocation-utils";
import { items, requests, requestsHtml } from "@dev/api";
import {
  gameItems,
  productItems,
  stationItems,
  vehicleItems,
  vehicle2Items,
  vehicle3Items,
  vehicle4Items,
} from "@dev/api/stations";
import {
  openChromeBrowser,
  openPage,
  navigateAndGetPageSource,
} from "./chrome";

require("dotenv").config();

const {
  NEARBY_LAT = "52.1530829",
  NEARBY_LNG = "21.1104411",
  NEARBY_RADIUS = "25014.985524846034",
  URL,
  STATIONS_URL,
  STORE_URL,
  STORE_ALTO_URL,
} = process.env as {
  NEARBY_LAT: string;
  NEARBY_LNG: string;
  NEARBY_RADIUS: string;
  URL: string;
  STATIONS_URL: string;
  STORE_URL: string;
  STORE_ALTO_URL: string;
};
const ERA = 24 * 3600 * 1000;
const _time = Date.now();
const _past = _time - ERA;

const timeout =
  (timeout = Math.random() * 5000) =>
  (data: any) =>
    new Promise((resolve) => setTimeout(() => resolve(data), timeout));

const timestamp = (mktime: number, period = 1000 * 3600 * 24) =>
  mktime - (mktime % period);

export const remove = () => {
  const check$ = new Subject<{
    id: number;
    isNew: boolean;
  }>();

  check$
    .pipe(
      take(100),
      mergeMap(
        (item) =>
          of(item).pipe(
            map(({ id, isNew }) =>
              isNew
                ? `//najlepszeoferty.bmw.pl/nowe/wyszukaj/opis-szczegolowy/${id}/`
                : `//najlepszeoferty.bmw.pl/uzywane/wyszukaj/opis-szczegolowy/${id}/`
            ),
            mergeMap((href) =>
              fetch(href)
                .then((response: any) =>
                  Boolean(console.log(href, response.status)) ||
                  response.status === 404
                    ? { ...item, _removed: _time }
                    : { ...item, _checked: _time }
                )
                .then((item) =>
                  vehicleItems
                    .update(item)
                    .then(timeout())
                    .then(() => item)
                )
            ),
            delay(100)
          ),
        1
      )
    )
    .subscribe((item: any) => {
      console.log({ item });
    });

  vehicleItems.find({}).then((list: any) =>
    // list
    //   .filter(({ id }: any) => id === undefined)
    //   .map((item: any) => vehicleItems.remove(item)) ||
    list
      .sort((a: any, b: any) => a._created - b._created)
      .filter(
        ({
          _checked = 0,
          _removed = 0,
        }: // isNew,
        {
          _checked: number;
          _removed: number;
          // isNew: boolean;
        }) => _checked < _past && _removed < _time
        // _removed > 0 && isNew
      )
      .slice(0, 1000)
      .map(({ _removed, ...item }: any, i: number, list: any[]) => {
        // console.log(`${i + 1}/${list.length}`);
        check$.next(item);
      })
  );
};

export const verify = () => {
  const unify = ({
    DisplaySkuAvailabilities: [
      {
        Availabilities: [
          {
            OrderManagementData: { Price },
          },
        ],
      },
    ],
    LocalizedProperties: [
      { Images, ProductDescription, ProductTitle, PublisherName },
    ],
    LastModifiedDate,
  }: any) => ({
    Images: Images.sort((a: any, b: any) => a.Width - b.Width)
      .slice(0, 1)
      .map(({ Uri }: { Uri: string }) => Uri),
    LastModifiedDate,
    Price,
    ProductDescription,
    ProductTitle,
    PublisherName,
  });

  gameItems.find({}).then((list: any) =>
    list.map((item: any) => {
      const {
        LocalizedProperties: [{ ProductTitle }],
        _history = {},
      } = item;

      console.log({ ProductTitle });

      [item]
        .concat(Object.values(_history))
        .map(unify)
        .filter(
          (item, i, list) =>
            i === 0 || JSON.stringify(item) !== JSON.stringify(list[i - 1])
        )
        .map((item, i, list) => i && diffString(item, list[i - 1]))
        .filter(Boolean)
        .map((diff) => console.log(diff));
    })
  );
};

export default function () {
  let requestLimit = 1000;

  const config = {
    klik: ({
      time = Date.now(),
      lat = Number(NEARBY_LAT),
      lng = Number(NEARBY_LNG),
      circle = 25014.985524846034,
      $type: type = 1,
      $kind: kind = 4,
      // kind = 4, type = 1, // dzialki/do-sprzedania
      // kind = 2, type = 1, // domy/do-sprzedania
      // kind = 1, type = 2, // mieszkania/do-wynajecia
      items = 20,
      page = 1,
    }) => {
      const mk = timestamp(time);

      return {
        id: ["klik", mk, lat, lng, circle, kind, type, items, page].join("-"),
        request: () =>
          fetch(
            `${URL}?dump=list&type=${type}&kind=${kind}&id=0&lat=${lat}&lng=${lng}&circle=${circle}&page=${page}&items=${items}&sort=default&cat=4,8`
          ),
      };
    },
    "scs.audi.de": ({
      $time = Date.now(),
      // $type = 'pluc',
      $type = "pl",
      $from = 0,
      $size = 100,
      $sort = "prices.retail%3Aasc",
    }) => {
      const mk = timestamp($time);

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
      const mk = timestamp($time);

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
    "get-stations": ({ $time = Date.now(), $zoom = 6 }) => {
      const mk = timestamp($time);

      return {
        id: ["get-stations", mk, $zoom].join("-"),
        request: () =>
          fetch(`${STATIONS_URL}stations-get-stations?zoom=${$zoom}`),
      };
    },
    "get-station": ({ $time = Date.now(), $station_id = 0 }) => {
      const mk = timestamp($time);

      return {
        id: ["get-station", mk, $station_id].join("-"),
        request: () =>
          fetch(
            `${STATIONS_URL}stations-get-station?station_id=${$station_id}`
          ),
      };
    },
    "mercedes-benz": ({
      $time = Date.now(),
      currentPage = 0,
      pageSize = 12,
    }) => {
      const mk = timestamp($time);

      return {
        id: ["mercedes-benz", mk, pageSize, currentPage].join("-"),
        request: () =>
          fetch(
            `https://shop.mercedes-benz.com/cars-backend/dcp-api/v2/mpvehicles-pl/products/search?lang=pl&query=%3Aprice-asc%3AallCategories%3Ampvehicles-pl-vehicles&currentPage=${currentPage}&pageSize=${pageSize}&fields=FULL`
          ),
      };
    },
    porsche: ({ $time = Date.now(), page = 1 }) => {
      const mk = timestamp($time);

      return {
        id: ["porsche", mk, page].join("-"),
        request: () =>
          fetch(
            `https://finder.porsche.com/api/pl/pl-PL/search?${
              page > 1 ? `page=${page}&` : ``
            }orderBy=recommended_desc&distanceUnit=kilometer`
          ),
      };
    },
    xbox: ({ $time = Date.now(), $type = "9NKX70BBCDRN" }) => {
      const mk = timestamp($time);

      return {
        id: ["displaycatalog", mk, $type].join("-"),
        request: () =>
          fetch(
            `https://displaycatalog.mp.microsoft.com/v7.0/products?bigIds=${$type}&market=PL&languages=pl-pl`
          ),
      };
    },
    "get-product-alto": ({ time = Date.now(), type = "0" }) => {
      const mk = timestamp(time);

      return {
        id: ["get-product-alto", mk, type].join("-"),
        url: `${STORE_ALTO_URL}p/${type}.html`,
      };
    },
    "get-product": ({ time = Date.now(), type = "0" }) => {
      const mk = timestamp(time);

      return {
        id: ["get-product", mk, type].join("-"),
        url: `${STORE_URL}p/${type}.html`,
      };
    },
  };

  const request = ({ $type, ...rest }: any) => {
    const [site, type, kind] = $type.split(":");
    console.log({ $type, site, type, kind });
    // @ts-ignore
    const { id, request } = config[site]({ $type: type, $kind: kind, ...rest });
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
              .then((json: any) =>
                // Boolean(console.log({ id, json })) ||
                requests.insert({ id, json: JSON.stringify(json) })
              )
              .then(timeout())
      )
      .then(({ json }: any) => JSON.parse(json));
  };

  const browser = ({ $type, ...rest }: any) => {
    const [site, type, kind] = $type.split(":");
    console.log({ $type, site, type, kind });
    // @ts-ignore
    const { id, url } = config[site]({ type, kind, ...rest });
    return requestsHtml
      .findOne({ id })
      .then((data: any) =>
        data
          ? Promise.resolve(data)
          : Promise.resolve(url)
              .then(async (url) => {
                const NEW_PAGE_TIMEOUT_MS = 5000;
                // console.log({ url });

                const browser = await openChromeBrowser();

                const timeoutPromise = new Promise((resolve) =>
                  setTimeout(resolve, NEW_PAGE_TIMEOUT_MS)
                );
                const [completed, page] = await Promise.race(
                  [timeoutPromise, openPage(browser)].map((promise) =>
                    promise.then((result) => [promise, result])
                  )
                );
                if (completed === timeoutPromise) {
                  await browser.close();
                  throw new Error(
                    `timeout of ${NEW_PAGE_TIMEOUT_MS} exceeded opening new page`
                  );
                }

                const { text, ...response } = await navigateAndGetPageSource(
                  url,
                  page
                );

                console.log({ url, response });

                if (!response.ok) {
                  console.error(text);
                }

                await page.close();
                await browser.close();

                return text;
              })
              .then((html: any) =>
                // Boolean(console.log({ id, html })) ||
                requestsHtml.insert({ id, html })
              )
              .then(timeout())
      )
      .then(({ html }: any) => html)
      .catch(console.error);
  };

  const pathToRoot = ($el: any) => {
    const $path = [];
    while ($el && $el.tagName !== "HTML") {
      $path.push(($el = $el.parentNode));
    }
    return $path;
  };

  const products$ = new Subject<{
    $type: string;
  }>();

  products$
    .pipe(
      mergeMap(
        ({ $type }: any) =>
          from(browser({ $type })).pipe(
            map((html) => {
              const id = $type.split(":")[1].split("-")[0];

              const $root = parse(html);

              const title = $root.querySelector("h1")?.text;
              const stars = $root
                .querySelector("h1")
                ?.parentNode?.nextElementSibling?.querySelector(
                  "div > a"
                )?.text;
              const brand = $root
                .querySelector("h1")
                ?.parentNode?.nextElementSibling?.querySelector(
                  "span > a"
                )?.text;
              const label = $root
                .querySelector("h1")
                ?.parentNode?.nextElementSibling?.querySelector("span > a")
                ?.parentNode?.parentNode?.text.split("|");

              const image = $root
                .querySelectorAll(
                  "div[order] > div > div > div + div + div img"
                )
                .map(($img: any) => $img.getAttribute("src"));

              const $cart = $root
                .querySelectorAll("div")
                .find(($div) =>
                  $div.text.match(
                    /^(Dodaj do koszyka|Powiadom o dostępności|Sprawdź inne produkty)$/
                  )
                );
              const price = pathToRoot($cart)
                .find(($div) => $div.rawText.match(/zł/))
                ?.querySelectorAll("*")
                .find(($div: any) => $div.text.match(/zł$/))
                ?.querySelectorAll("div")
                .filter(
                  ($div: any) =>
                    $div.childNodes.length > 0 &&
                    $div.childNodes[0].nodeType === 3
                )
                .map(($div: any) => $div.text);
              const links = pathToRoot($cart)
                .find(($div) => $div.rawText.match(/zł/))
                ?.querySelectorAll("button > span > span > span")
                .filter(($div: any) => $div.text)
                .map(($div: any) => $div.text)
                .filter(
                  (text: string) =>
                    Boolean(false && console.log({ text })) ||
                    !text.match(/Kup teraz|Zapłać w ciągu/)
                )
                .filter((array: any) => array.length > 0);

              const $prom = $root
                .querySelectorAll("h2")
                .find(($div: any) => $div.text.match(/^(Promocje|Promocja)$/));
              const proms =
                pathToRoot($prom)
                  .find(($div) => $div.querySelector("h3"))
                  ?.querySelectorAll("h3")
                  .map(($div: any) => $div.text) || [];
              const codes =
                pathToRoot($prom)
                  .find(($div) => $div.rawText.match(/Skopiowano kod/))
                  ?.querySelectorAll("p")
                  .filter(($div: any) =>
                    $div.text.match(/aktywuj kod rabatowy/)
                  )
                  .map(($div: any) => $div.nextElementSibling.text) || [];

              const url = $root
                .querySelector("link[rel=canonical]")
                ?.getAttribute("href");

              return {
                id,
                url,
                title,
                image,
                stars,
                brand,
                label,
                price,
                proms,
                codes,
                links,
              };
            })
          ),
        1
      )
    )
    .subscribe((item: any) => {
      // console.log({ item });
      productItems
        .findOne({ id: item.id })
        //   .then((exists: any) => exists || stationItems.insert(item));
        .then((last: any) => {
          if (last) {
            const {
              _id,
              _created = _past,
              _updated = _created,
              _history = {},
              ...rest
            } = last;
            const diff = diffString(rest, item);
            if (diff) {
              console.log(`[${last.id}]`);
              console.log(diff);

              const update = {
                _id,
                ...item,
                _created,
                _updated: _time,
                _history: Object.assign({
                  ..._history,
                  [_updated]: rest,
                }),
              };
              console.log(update);

              productItems.update(update);
            }
          } else {
            productItems.insert({ ...item, _created: _time });
          }
        });
    });

  const games$ = new Subject<{
    $type: string;
  }>();

  games$
    .pipe(
      mergeMap(
        ({ $type }) =>
          from(request({ $type }))
            .pipe
            // tap(console.log)
            (),
        1
      ),
      mergeMap(({ Products }) =>
        Products.map((Product: any) => ({ id: Product.ProductId, ...Product }))
      )
    )
    .subscribe((item: any) => {
      // console.log({ item });
      gameItems.findOne({ id: item.id }).then((last: any) => {
        if (last) {
          const {
            _id,
            _created = _past,
            _updated = _created,
            _history = {},
            ...rest
          } = last;
          const diff = diffString(rest, item);
          if (diff) {
            console.log(`[${last.id}]`);
            console.log(diff);

            const update = {
              _id,
              ...item,
              _created,
              _updated: _time,
              _history: Object.assign({
                ..._history,
                [_updated]: rest,
              }),
            };
            console.log(update);

            gameItems.update(update);
          }
        } else {
          gameItems.insert({ ...item, _created: _time });
        }
      });
    });

  interface LatLng {
    lat: number;
    lng: number;
  }

  const stations$ = new Subject<{
    $type: string;
    $center?: LatLng;
    $radius?: number;
  }>();

  stations$
    .pipe(
      mergeMap(
        ({
          $type,
          $center = { lat: Number(NEARBY_LAT), lng: Number(NEARBY_LNG) },
          $radius = Number(NEARBY_RADIUS),
        }) =>
          from(
            request({ $type }).then((list) =>
              list.filter(
                ({ x: lat, y: lng }: any) =>
                  headingDistanceTo($center, { lat, lng }).distance < $radius
              )
            )
          ),
        1
      ),
      mergeMap((list) => list),
      mergeMap(
        (item: any) =>
          from(
            request({ $type: "get-station", $station_id: item.station_id })
          ).pipe(
            map(({ html }: any) => {
              const $ = cheerio.load(html);
              return {
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
              };
            }),
            map(
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
          ),
        1
      )
    )
    .subscribe((item: any) => {
      // console.log({ item });
      stationItems
        .findOne({ id: item.id })
        //   .then((exists: any) => exists || stationItems.insert(item));
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

                stationItems.update(update);
              }
            } else {
              stationItems.insert({ ...item, _created: _time });
            }
          }
        );
    });

  // https://dev.to/jacobgoh101/simple--customizable-web-scraper-using-rxjs-and-node-1on7
  const pages$ = new Subject<{
    $type: string;
    items?: number;
    page?: number;
  }>();

  pages$
    .pipe(
      distinct(),
      mergeMap(
        ({ $type, items = 20, page = 1 }) =>
          from(request({ $type, items, page })).pipe(
            tap(({ total_found }) => {
              const next =
                Math.ceil(Number(total_found) / items) > page ? page + 1 : null;
              if (next) {
                pages$.next({ $type, page: next });
              }
            })
          ),
        1
      ),
      mergeMap(({ results }) => results)
    )
    .subscribe((item: any) => {
      // console.log({ item });
      items
        .findOne({ id: item.id })
        .then((exists: any) => exists || items.insert(item));
    });

  const vehicles$ = new Subject<{
    $type: string;
    $skip?: number;
    $limit?: number;
  }>();

  vehicles$
    .pipe(
      mergeMap(
        ({ $type, $skip = 0, $limit = 100 }) =>
          from(request({ $type, $skip, $limit })).pipe(
            map(({ $list, $count }) => ({
              $type,
              $skip,
              $limit,
              $list,
              $count,
            })),
            tap(({ $type, $skip, $limit, $count: { $total } }) => {
              const $next = $skip + $limit;
              // console.log({ $type, $skip, $limit, $next, $total });
              if ($next < $total) {
                vehicles$.next({ $type, $skip: $next, $limit });
              }
            })
          ),
        1
      ),
      mergeMap(({ $list }) => $list)
    )
    .subscribe((item: any) => {
      // console.log({ item });
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
      vehicleDataVersion,
      _id,
      _created,
      _updated,
      _history,
      ..._item
    }: {
      lastChange?: any;
      comfortLeaseProduct?: any;
      vehicleDataVersion?: any;
      _id: string;
      _created: number;
      _updated: number;
      _history: {};
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

  const vehicles2$ = new Subject<{
    $type: string;
    $from?: number;
    $size?: number;
  }>();

  vehicles2$
    .pipe(
      mergeMap(
        ({ $type, $from = 0, $size = 100 }) =>
          from(request({ $type, $from, $size })).pipe(
            map(({ vehicleBasic, totalCount }) => ({
              $type,
              $from,
              $size,
              vehicleBasic,
              totalCount,
            })),
            tap(({ $type, $from, $size, totalCount }) => {
              const $next = $from + $size;
              // console.log({ $type, $from, $size, $next, totalCount });
              if ($next < totalCount) {
                vehicles2$.next({ $type, $from: $next, $size });
              }
            })
          ),
        1
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

  const vehicles3$ = new Subject<{
    $type: string;
    currentPage?: number;
    pageSize?: number;
  }>();

  vehicles3$
    .pipe(
      mergeMap(
        ({ $type, currentPage = 0, pageSize = 48 }: any) =>
          from(request({ $type, currentPage, pageSize })).pipe(
            tap(({ pagination }) => {
              const { currentPage, pageSize, totalPages } = pagination;
              if (currentPage + 1 < totalPages) {
                vehicles3$.next({
                  $type,
                  currentPage: currentPage + 1,
                  pageSize,
                });
              }
            })
          ),
        1
      ),
      mergeMap(({ products }) =>
        products.map((item: any) => ({ id: item.commissionNumber, ...item }))
      )
    )
    .subscribe((item: any) => {
      // console.log({ item });
      vehicle3Items
        .findOne({ id: item.id })
        // .then((exists: any) => exists || vehicle3Items.insert(item));
        .then((last: any) => {
          if (last) {
            const {
              _id,
              _created = _past,
              _updated = _created,
              _history = {},
              ...rest
            } = last;
            const diff = diffString(rest, item);
            if (diff) {
              console.log(`[${last.id}]`);
              console.log(diff);

              const update = {
                _id,
                ...item,
                _created,
                _updated: _time,
                _history: Object.assign({
                  ..._history,
                  [_updated]: rest,
                }),
              };
              console.log(update);

              vehicle3Items.update(update);
            }
          } else {
            vehicle3Items.insert({ ...item, _created: _time });
          }
        });
    });

  const vehicles4$ = new Subject<{
    $type: string;
    page?: number;
  }>();

  vehicles4$
    .pipe(
      mergeMap(
        ({ $type, page }: any) =>
          from(request({ $type, page })).pipe(
            tap(({ pages }) => {
              const { activePage, totalPages } = pages;
              if (activePage < totalPages) {
                vehicles4$.next({
                  $type,
                  page: activePage + 1,
                });
              }
            })
          ),
        1
      ),
      mergeMap(({ results }) =>
        results.map((item: any) => ({
          id: item.description.listingId,
          ...item,
        }))
      )
    )
    .subscribe((item: any) => {
      // console.log({ item });
      vehicle4Items.findOne({ id: item.id }).then((last: any) => {
        if (last) {
          const {
            _id,
            _created = _past,
            _updated = _created,
            _history = {},
            ...rest
          } = last;
          const diff = diffString(rest, item);
          if (diff) {
            console.log(`[${last.id}]`);
            console.log(diff);

            const update = {
              _id,
              ...item,
              _created,
              _updated: _time,
              _history: Object.assign({
                ..._history,
                [_updated]: rest,
              }),
            };
            console.log(update);

            vehicle4Items.update(update);
          }
        } else {
          vehicle4Items.insert({ ...item, _created: _time });
        }
      });
    });

  from([
    "xbox:9NKX70BBCDRN,9Z1W36CRQ9DF,B4X7PC56X1VV,9MTLKM2DJMZ2,C08JXNK0VG5L",
    "xbox:9N9J38LPVSM3,9P6SRW1HVW9K,BVH2R2SBWL51,9PNJXVCVWD4K,9MZ0SR207MG8",
    "xbox:9P4SH7HLMLFS,9N1CS194W1Q6,9P1HX37NMJLT,BRZZLBF5T245,9P513P4MWC71",
    "xbox:C2MBDNDS3H5W,BWVBNCMF22ZK,9N6J02VPG635,BS5RXLL3WQ2J,C2HQVXVVLMKG",
    "xbox:BVJLKDG2TX8H,C4VKLMG1HLZW,9N04KQK2LBZL,9NMBJQ0265ZK,BSMZH25V6V46",
  ]).subscribe(($type) => {
    console.log({ $type });
    games$.next({ $type });
  });

  from([
    "get-product:681208-tablet-8-apple-new-ipad-mini-64gb-wi-fi-purple",
    "get-product:681280-etui-na-tablet-apple-etui-smart-folio-ipada-mini-6gen-angielska-lawenda",
    "get-product:681284-etui-na-tablet-apple-etui-smart-folio-ipada-mini-6gen-czarny",
    "get-product:460088-rysik-do-tabletu-apple-pencil-2-do-ipad-pro",
    "get-product:392666-rysik-do-tabletu-apple-pencil-tips",
    "get-product:464941-smartwatch-apple-watch-3-38-space-gray-aluminium-blacksport-gps",
    "get-product:516123-smartwatch-apple-watch-3-42-space-gray-black-sport-gps",
    "get-product:682156-smartwatch-apple-watch-se-40-gold-aluminium-starlight-sport-gps",
    "get-product:682191-smartwatch-lte-apple-watch-se-40-gold-aluminium-starlight-sport-lte",
    "get-product:681152-smartfon-telefon-apple-iphone-13-128gb-midnight",
    "get-product:592143-smartfon-telefon-apple-iphone-12-64gb-black-5g",
    "get-product:681136-smartfon-telefon-apple-iphone-13-mini-128gb-midnight",
    "get-product:592124-smartfon-telefon-apple-iphone-12-mini-64gb-black-5g",
    "get-product:602826-smartfon-telefon-apple-iphone-11-64gb-black",
    "get-product:602851-smartfon-telefon-apple-iphone-se-64gb-black",
    "get-product:567460-etui-obudowa-na-smartfona-apple-leather-case-do-iphone-7-8-se-nocny-blekit",
    "get-product:567459-etui-obudowa-na-smartfona-apple-leather-case-do-iphone-7-8-se-czarny",
    "get-product:530119-statyw-rode-psa1-studio-arm",
    "get-product:563133-dysk-ssd-kingston-1tb-m2-pcie-nvme-kc2500",
    "get-product:555076-kamera-ip-dahua-lite-hfw2231t-27-135mm-2mp-ir60-ip67-poe-ivs",
    "get-product:583534-hulajnoga-elektryczna-xiaomi-mi-electric-scooter-essential",
    "get-product:583538-hulajnoga-elektryczna-xiaomi-mi-electric-scooter-1s",
    "get-product:670611-inteligentny-glosnik-google-nest-hub-2-czarny",
    "get-product:640845-wideorejestrator-xblitz-s5-duo-full-hd-245-120",
    "get-product:489051-wideorejestrator-mio-mivue-c570-fullhd-150-2",
    "get-product:186950-akcesorium-sieciowe-ubiquiti-zasilacz-poe-24v-24w-1a",
    "get-product:645129-dron-dji-air-2s-mavic-air-2s",
    "get-product-alto:1022665-klocki-lego-lego-technic-42128-ciezki-samochod-pomocy-drogowej",
    "get-product-alto:576290-klocki-lego-lego-technic-42115-lamborghini-sian-fkp-37",
    "get-product-alto:467576-klocki-lego-lego-technic-42096-porsche-911-rsr",
    "get-product-alto:436955-klocki-lego-lego-technic-42083-bugatti-chiron",
    "get-product-alto:1012754-klocki-lego-lego-technic-42125-ferrari-488-gte-af-corse-51",
    "get-product-alto:532359-klocki-lego-lego-technic-42109-auto-wyscigowe-top-gear",
    "get-product-alto:608398-robot-lego-mindstorms-wynalazca-robotow",
    "get-product-alto:558550-robot-sprzatajacy-xiaomi-mi-robot-vacuum-mop-pro-white",
    "get-product-alto:1010924-robot-sprzatajacy-xiaomi-mi-robot-vacuum-mop-essential",
    "get-product-alto:1011153-oczyszczacz-powietrza-xiaomi-mi-air-purifier-pro-h",
    "get-product-alto:1017784-urzadzenie-do-dezynfekcji-rak-xiaomi-mi-automatic-foaming-soap-dispenser",
  ]).subscribe(($type) => {
    console.log({ $type });
    products$.next({ $type });
  });

  from(["get-stations"]).subscribe(($type) => {
    console.log({ $type });
    stations$.next({ $type });
  });

  from(["klik:1:4", "klik:1:2", "klik:2:1"]).subscribe(($type) => {
    console.log({ $type });
    pages$.next({ $type });
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

  from(["mercedes-benz:mpvehicles-pl-vehicle"]).subscribe(($type) => {
    console.log({ $type });
    // vehicles3$.next({ $type });
  });

  from(["porsche:search"]).subscribe(($type) => {
    console.log({ $type });
    vehicles4$.next({ $type });
  });
}
