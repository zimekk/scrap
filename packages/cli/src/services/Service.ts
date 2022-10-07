const ERA = 24 * 3600 * 1000;

export const _time = Date.now();

export const timestamp = (mktime: number, period = ERA) =>
  mktime - (mktime % period);

type Summary = {
  created: any[];
  checked: any[];
  removed: any[];
  updated: any[];
  request: Record<string, { number?: number; length?: number }>;
};

export default class {
  mk = timestamp(_time);
  summary: Summary;
  constructor({ summary }: any) {
    this.summary = summary;
  }
}
