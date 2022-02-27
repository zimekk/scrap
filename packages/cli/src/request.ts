import fetch from "isomorphic-fetch";
import { requests, requestsHtml } from "@dev/api/requests";
import {
  openChromeBrowser,
  openPage,
  navigateAndGetPageSource,
} from "./chrome";

require("dotenv").config();

const {
  NEARBY_LAT = "52.1530829",
  NEARBY_LNG = "21.1104411",
  KLIK_URL,
  GRATKA_URL,
  OTODOM_URL,
} = process.env as {
  NEARBY_LAT: string;
  NEARBY_LNG: string;
  KLIK_URL: string;
  GRATKA_URL: string;
  OTODOM_URL: string;
};

const ERA = 24 * 3600 * 1000;
const _time = Date.now();
const _past = _time - ERA;

const timeout =
  (timeout = Math.random() * 3000) =>
  (data: any) =>
    new Promise((resolve) => setTimeout(() => resolve(data), timeout));

const timestamp = (mktime: number, period = ERA) => mktime - (mktime % period);

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
          `${KLIK_URL}?dump=list&type=${type}&kind=${kind}&id=0&lat=${lat}&lng=${lng}&circle=${circle}&page=${page}&items=${items}&sort=default&cat=4,8`
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
  "mercedes-benz": ({ $time = Date.now(), currentPage = 0, pageSize = 12 }) => {
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
  vw: ({ $time = Date.now(), page = 1, per_page = 100 }) => {
    const mk = timestamp($time);

    return {
      id: ["vw", mk, per_page, page].join("-"),
      request: () =>
        fetch(
          `https://admin.od-reki.volkswagen.pl/api/cars?page=${page}&per_page=${per_page}`,
          {
            headers: {
              "x-app-id": "VW_DCP_C",
            },
          }
        ),
    };
  },
  gratka: ({ time = Date.now(), type = "nieruchomosci", page = 1 }) => {
    const mk = timestamp(time);

    return {
      id: ["gratka", mk, type.replace(/\//g, "-"), page].join("-"),
      url: `${GRATKA_URL}${type}${page > 1 ? `?page=${page}` : ``}`,
    };
  },
  "gratka-item": ({
    time = Date.now(),
    name,
    href,
  }: {
    time: number;
    name: string;
    href: string;
  }) => {
    const mk = timestamp(time);

    return {
      id: ["gratka-item", mk, name].join("-"),
      url: href,
    };
  },
  otodom: ({ time = Date.now(), type = "nieruchomosci", page = 1 }) => {
    const mk = timestamp(time);

    return {
      id: ["otodom", mk, type.replace(/\//g, "-"), page].join("-"),
      url: `${OTODOM_URL}oferty/sprzedaz/${type}${
        page > 1 ? `?page=${page}` : ``
      }`,
    };
  },
  "otodom-item": ({
    time = Date.now(),
    name,
    href,
  }: {
    time: number;
    name: string;
    href: string;
  }) => {
    const mk = timestamp(time);

    return {
      id: ["otodom-item", mk, name].join("-"),
      url: `${OTODOM_URL}oferta/${href}`,
    };
  },
};

export const cleanup = async (_created = _past) => {
  await requests.count().then((count: number) =>
    requests
      .remove(
        {
          _created: { $lt: _created },
        },
        { multi: true }
      )
      .then((removed: number) => console.log({ requests: { count, removed } }))
  );

  await requestsHtml.count().then((count: number) =>
    requests
      .remove(
        {
          _created: { $lt: _created },
        },
        { multi: true }
      )
      .then((removed: number) =>
        console.log({ requestsHtml: { count, removed } })
      )
  );
};

export const request = (args: any) => {
  const { id, request } = args.request
    ? args
    : (({ $type, ...rest }) => {
        const [site, type, kind] = $type.split(":");
        console.log({ $type, site, type, kind });
        // @ts-ignore
        return config[site]({ $type: type, $kind: kind, ...rest });
      })(args);

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
              requests.insert({
                id,
                json: JSON.stringify(json),
                _created: _time,
              })
            )
            .then(timeout())
    )
    .then(({ json }: any) => JSON.parse(json));
};

export const browser = (
  args: any,
  summary?: { request: Record<string, number> }
) => {
  const { id, url } = args.url
    ? args
    : (({ $type, ...rest }) => {
        const [site, type, kind] = $type.split(":");
        console.log({ $type, site, type, kind });
        // @ts-ignore
        return config[site]({ $type: type, $kind: kind, ...rest });
      })(args);

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

              if (summary) {
                const { host } = new URL(url);
                Object.assign(summary.request, {
                  [host]: ((counter = 0) => counter + 1)(summary.request[host]),
                });
              }

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
              requestsHtml.insert({ id, html, _created: _time })
            )
            .then(timeout())
    )
    .then(({ html }: any) => html)
    .catch(console.error);
};
