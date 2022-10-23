import { diffString } from "json-diff";
import { parse } from "node-html-parser";

const ERA = 24 * 3600 * 1000;
export const _time = Date.now();
export const _past = _time - ERA;

export const createItem = (item: {}) => ({ ...item, _created: _time });

export const diffItem = (
  {
    lastChange,
    panoramasLastChanged,
    transactionalPriceUpdated,
    vehicleDataVersion,
    _id,
    _created,
    _updated,
    _checked,
    _removed,
    _history,
    options,
    ...last
  }: {
    lastChange?: any;
    panoramasLastChanged?: any;
    transactionalPriceUpdated?: any;
    vehicleDataVersion?: any;
    _id: string;
    _created: number;
    _updated: number;
    _checked: number;
    _removed: number;
    _history: {};
    options: string[];
  },
  {
    lastChange: _lastChange,
    panoramasLastChanged: _panoramasLastChanged,
    transactionalPriceUpdated: _transactionalPriceUpdated,
    vehicleDataVersion: _vehicleDataVersion,
    ...item
  }: any
) => diffString(last, item);

export const updateItem = (
  {
    _id,
    _created = _past,
    _updated = _created,
    _history = {},
    comfortLeaseProduct,
    emissionMeasurementStandard,
    leaseProduct,
    newPrice,
    reservationFee,
    ...last
  }: {
    _id: string;
    _created: number;
    _updated: number;
    _history: {};
    comfortLeaseProduct: any;
    emissionMeasurementStandard: any;
    leaseProduct: any;
    newPrice: any;
    reservationFee: any;
  },
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

export const scrapOptions = (item: object, html: string) => {
  const $root = parse(html);

  return {
    ...item,
    options: ([] as string[])
      .concat(
        $root.querySelectorAll("table.table-lg-columns tr").map(($el) =>
          $el
            .querySelectorAll("*")
            .map(($el) => $el.text.replace(/\s+/g, " ").trim())
            .join("\t")
        )
      )
      .concat(
        $root.querySelectorAll("ul.list-group li").map(($el) => $el.text.trim())
      ),
  };
};
