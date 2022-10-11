// https://github.com/calebj0seph/stock-checker/blob/master/src/chrome.js
import type { HTTPRequest, HTTPResponse } from "puppeteer";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import { resolve } from "path";

puppeteer.use(StealthPlugin());

export async function openChromeBrowser() {
  const config = {
    chrome: {
      path: "",
      args: [],
    },
  };

  // Open Chrome with the given command and arguments
  return await puppeteer.launch({
    executablePath: config.chrome.path,
    args: config.chrome.args,
    defaultViewport: {
      width: 2560,
      height: 1298,
      deviceScaleFactor: 1.5,
    },
  });
}

export async function openPage(browser: any, json: any) {
  // Change the user agent and set additional headers
  const page = await browser.newPage();
  const version = (await browser.version()).match(/Chrome\/(\d+)\./)[1];
  await page.setUserAgent((await browser.userAgent()).replace("Headless", ""));
  if (json === null) {
    await page.setExtraHTTPHeaders({
      "sec-ch-ua": `"Chromium";v="${version}", "Google Chrome";v="${version}", ";Not A Brand";v="99"`,
      "sec-ch-ua-mobile": "?0",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-origin",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
    });
  }
  // https://bretcameron.medium.com/how-to-build-a-web-scraper-using-javascript-11d7cd9f77f2
  await page.setRequestInterception(true);

  const match = new RegExp(
    "/get/(xkom|alto)/|/v1/(xkom|alto)/hotShots/current"
  );

  page
    .on("request", (req: HTTPRequest) => {
      // if (json !== null && req.url().match(match)) {
      //   console.log({
      //     req: req.url(),
      //     headers: req.headers(),
      //     resourceType: req.resourceType(),
      //   });
      // }
      if (["font", "image"].includes(req.resourceType())) {
        req.abort();
      } else {
        req.continue();
      }
    })
    .on("response", async (res: HTTPResponse) => {
      if (json !== null && res.url().match(match)) {
        console.log({
          res: res.url(),
          headers: res.headers(),
        });
        if (res.headers()["content-type"]?.match("/json|text/")) {
          Object.assign(json, await res.json());
        }
      }
    });

  return page;
}

export async function navigateAndGetPageSource(url: string, page: any) {
  // await page.setDefaultNavigationTimeout(0);

  const response = await page.goto(url, {
    waitUntil: "networkidle2",
    timeout: 0,
  });

  return {
    text: await response.text(),
    ok: response.ok(),
    status: response.status(),
    statusText: response.statusText(),
  };
}

export async function getPageScreenshot(id: string, page: any) {
  const path = resolve(__dirname, `../temp/${id}.png`);

  await page.waitForTimeout(1000);
  await page.screenshot({
    path,
    fullPage: true,
  });

  return path;
}
