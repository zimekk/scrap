import { diffString } from "json-diff";

export const _time = Date.now();

export const createItem = (item: {}) => ({ ...item, _created: _time });

export const diffItem = (
  {
    _id,
    _created,
    _updated,
    _checked,
    _removed,
    _history,
    viewers,
    ...last
  }: {
    _id: string;
    _created?: number;
    _updated?: number;
    _checked?: number;
    _removed?: number;
    _history?: {};
    viewers: any;
  },
  { viewers: _viewers, ...item }: any
) => diffString(last, item);

export const updateItem = (
  {
    _id,
    _created,
    _updated = _created,
    _history = {},
    ...last
  }: { _id: string; _created: number; _updated: number; _history: {} },
  item: {}
) => ({
  ...last,
  ...item,
  _id,
  _created,
  _updated: _time,
  _history: {
    ..._history,
    [_updated]: last,
  },
});
