import fetch from "isomorphic-fetch";
import slug from "slug";
import { requests, requestsHtml } from "@dev/api/requests";
import {
  openChromeBrowser,
  openPage,
  navigateAndGetPageSource,
  getPageScreenshot,
} from "./chrome";

require("dotenv").config();

const ERA = 24 * 3600 * 1000;
const _time = Date.now();
const _past = _time - ERA;

const timeout =
  (timeout = Math.random() * 3000) =>
  (data: any) =>
    new Promise((resolve) => setTimeout(() => resolve(data), timeout));

const requestLimit = 1000;

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

type Summary = {
  request: Record<string, { number?: number; length?: number }>;
};

const collect = (url: string, data: string, summary: Summary) => {
  const { host } = new URL(url);
  Object.assign(summary.request, {
    [host]: (({ number = 0, length = 0 } = {}) => ({
      number: number + 1,
      length: length + (data.length || 0),
    }))(summary.request[host]),
  });
};

export const request = (
  {
    id,
    url,
    params,
    html = false,
  }: { id: string; url: string; params?: object; html?: boolean },
  summary: Summary
) =>
  requests
    .findOne({ id })
    .then((data: any) =>
      data
        ? Promise.resolve(data)
        : fetch(url, params)
            .then(async (response: any) => {
              // console.log(["request"], id, requestLimit--);
              console.log({
                url,
                response: {
                  ok: response.ok,
                  status: response.status,
                  statusText: response.statusText,
                },
              });
              if (requestLimit < 0) {
                throw new Error("Request limit has been exceeded");
              }
              if (response.status >= 400) {
                throw new Error("Bad response from server");
              }
              return html
                ? response.text()
                : JSON.stringify(await response.json());
            })
            .then((json: any) =>
              requests.insert({
                id,
                json,
                _created: _time,
              })
            )
            .then((item: any) => {
              if (summary) {
                collect(url, item.json, summary);
              }
              return item;
            })
            .then(timeout())
    )
    .then(({ json }: any) => (html ? json : JSON.parse(json)));

export const browser = (
  { id, url }: { id: string; url: string },
  summary: Summary,
  json: any = null
) =>
  requestsHtml
    .findOne({ id })
    .then((data: any) =>
      data
        ? Promise.resolve(data)
        : Promise.resolve(url)
            .then(async (url) => {
              // const NEW_PAGE_TIMEOUT_MS = 5000;
              // console.log({ url });

              const browser = await openChromeBrowser();

              // const timeoutPromise = new Promise((resolve) =>
              //   setTimeout(resolve, NEW_PAGE_TIMEOUT_MS)
              // );
              // const [completed, page] = await Promise.race(
              //   [timeoutPromise, openPage(browser)].map((promise) =>
              //     promise.then((result) => [promise, result])
              //   )
              // );
              // if (completed === timeoutPromise) {
              //   await browser.close();
              //   throw new Error(
              //     `timeout of ${NEW_PAGE_TIMEOUT_MS} exceeded opening new page`
              //   );
              // }

              const page = await openPage(browser, json);

              const { text, ...response } = await navigateAndGetPageSource(
                url,
                page
              );

              if (0) {
                const screenshot = await getPageScreenshot(slug(id), page);
                console.log({ id, screenshot });
              }

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
              requestsHtml.insert(
                Object.assign(
                  { id, html, _created: _time },
                  json ? { json: JSON.stringify(json) } : {}
                )
              )
            )
            .then(timeout())
    )
    .then(({ html, json }: any) => (json ? JSON.parse(json) : html))
    .catch(console.error);
