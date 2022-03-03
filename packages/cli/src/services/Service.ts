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
}
