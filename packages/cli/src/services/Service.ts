export const _time = Date.now();

const ERA = 24 * 3600 * 1000;
const _past = _time - ERA;

export const timestamp = (mktime: number, period = ERA) =>
  mktime - (mktime % period);

type Summary = {
  created: any[];
  checked: any[];
  removed: any[];
  updated: any[];
  request: Record<string, { number?: number; length?: number }>;
};

export const updateItem = (
  {
    _id,
    _created = _past,
    _updated = _created,
    _history = {},
    ...last
  }: { _id: string; _created: number; _updated: number; _history: {} },
  item: {}
) => ({
  ...item,
  _id,
  _created,
  _updated: _time,
  _history: {
    ..._history,
    [_updated]: last,
  },
});

export default class {
  mk = timestamp(_time);
  summary: Summary;
  constructor({ summary }: any) {
    this.summary = summary;
  }
}
