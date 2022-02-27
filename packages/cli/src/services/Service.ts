import fetch from "isomorphic-fetch";

const ERA = 24 * 3600 * 1000;
const _time = Date.now();

const timestamp = (mktime: number, period = ERA) => mktime - (mktime % period);

export default class {
  mk = timestamp(_time);
  summary: {
    created: any[];
    checked: any[];
    updated: any[];
    request: Record<string, number>;
  };
  constructor({ summary }: any) {
    this.summary = summary;
  }
  fetch(url: string) {
    const { host } = new URL(url);
    Object.assign(this.summary.request, {
      [host]: ((counter = 0) => counter + 1)(this.summary.request[host]),
    });
    console.log(["fetch"], { url });
    return fetch(url);
  }
}
