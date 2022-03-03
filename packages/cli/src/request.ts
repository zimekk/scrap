import fetch from "isomorphic-fetch";
import { requests, requestsHtml } from "@dev/api/requests";
import {
  openChromeBrowser,
  openPage,
  navigateAndGetPageSource,
} from "./chrome";

require("dotenv").config();

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
      url: `https://scs.audi.de/api/v2/search/filter/${$type}/pl?svd=svd-2021-11-15t01_48_13_593-23&sort=${$sort}&from=${$from}&size=${$size}`,
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
      url: `https://najlepszeoferty.bmw.pl/uzywane/api/v1/ems/${$type}-pl_PL/search`,
      params: {
        method: "POST",
        body: JSON.stringify({
          $match,
          $skip,
          $limit,
        }),
      },
    };
  },
  "mercedes-benz": ({ $time = Date.now(), currentPage = 0, pageSize = 12 }) => {
    const mk = timestamp($time);

    return {
      id: ["mercedes-benz", mk, pageSize, currentPage].join("-"),
      url: `https://shop.mercedes-benz.com/cars-backend/dcp-api/v2/mpvehicles-pl/products/search?lang=pl&query=%3Aprice-asc%3AallCategories%3Ampvehicles-pl-vehicles&currentPage=${currentPage}&pageSize=${pageSize}&fields=FULL`,
    };
  },
  porsche: ({ $time = Date.now(), page = 1 }) => {
    const mk = timestamp($time);

    return {
      id: ["porsche", mk, page].join("-"),
      url: `https://finder.porsche.com/api/pl/pl-PL/search?${
        page > 1 ? `page=${page}&` : ``
      }orderBy=recommended_desc&distanceUnit=kilometer`,
    };
  },
  vw: ({ $time = Date.now(), page = 1, per_page = 100 }) => {
    const mk = timestamp($time);

    return {
      id: ["vw", mk, per_page, page].join("-"),
      url: `https://admin.od-reki.volkswagen.pl/api/cars?page=${page}&per_page=${per_page}`,
      params: {
        headers: {
          "x-app-id": "VW_DCP_C",
        },
      },
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

const collect = (
  url: string,
  data: string,
  summary: { request: Record<string, number> }
) => {
  const { host } = new URL(url);
  Object.assign(summary.request, {
    [host]: ((counter = 0) => counter + 1)(summary.request[host]),
  });
};

export const request = (
  args: any,
  summary?: { request: Record<string, number> }
) => {
  const { id, url, params } = args.url
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
        : fetch(url, params)
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
            .then((json: any) => {
              if (summary) {
                collect(url, json, summary);
              }
              // Boolean(console.log({ id, json })) ||
              return requests.insert({
                id,
                json: JSON.stringify(json),
                _created: _time,
              });
            })
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
        return config[site]({ type, kind, ...rest });
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
                collect(url, text, summary);
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
