import React, { useCallback, useMemo, useState } from "react";
import { createAsset } from "use-asset";
import Map, { useBounds } from "./Map";
import useDebounce from "../useDebounce";
import styles from "./styles.module.scss";

const RADIUS_LIST = [1, 3, 5, 10, 20, 50, 100, 500];
const PRICE_LIST = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TYPES = {
  pb: "pb",
  on: "on",
  "on+": "on+",
  lpg: "lpg",
};

// https://github.com/pmndrs/use-asset#dealing-with-async-assets
const asset = createAsset(async (version) => {
  const res = await fetch(`api/stations/data.json?${version}`);
  return await res.json();
});

function Data({ version = "v1" }) {
  const { results } = asset.read(version); // As many cache keys as you need

  const [search, setSearch] = useState("");
  const [filter] = useDebounce(search);

  const onChangeSearch = useCallback(
    ({ target }) => setSearch(target.value),
    []
  );

  const [radius, setRadius] = useState(RADIUS_LIST[RADIUS_LIST.length - 1]);

  const onChangeRadius = useCallback(
    ({ target }) => setRadius(Number(target.value)),
    []
  );

  const [type, setType] = useState(() => Object.keys(TYPES)[0]);

  const onChangeType = useCallback(({ target }) => setType(target.value), []);

  const [priceFrom, setPriceFrom] = useState(PRICE_LIST[0]);
  const [priceTo, setPriceTo] = useState(PRICE_LIST[PRICE_LIST.length - 1]);

  const onChangePriceFrom = useCallback(
    ({ target }) =>
      setPriceTo((to) => {
        const from = Number(target.value);
        setPriceFrom(from);
        return to < from ? from : to;
      }),
    []
  );

  const onChangePriceTo = useCallback(
    ({ target }) =>
      setPriceFrom((from) => {
        const to = Number(target.value);
        setPriceTo(to);
        return to > from ? from : to;
      }),
    []
  );

  const list = useMemo(
    () =>
      results
        .map((item, i) => {
          const { station_id: id, x: lat, y: lng, network_name: name } = item;
          return {
            i,
            id,
            position: { lat, lng },
            name,
            item,
          };
        })
        .filter(
          ({ name, item: { petrol_list } }) =>
            name.toLowerCase().match(filter) &&
            ((item) =>
              Boolean(item) &&
              priceFrom <= item.price &&
              item.price <= priceTo)(
              petrol_list.find((item) => item.type === type)
            )
        ),
    [results, filter, type, priceFrom, priceTo]
  );

  const bounds = useBounds(list);
  const [center, setCenter] = useState(() => bounds.getCenter());

  return (
    <div>
      <Map bounds={bounds} center={center} setCenter={setCenter} list={list} />
      <fieldset>
        <div>
          <label>
            <span>Search</span>
            <input type="search" value={search} onChange={onChangeSearch} />
          </label>
          <label>
            <span>Radius</span>
            <input
              type="range"
              list="range-list"
              min={RADIUS_LIST[0]}
              max={RADIUS_LIST[RADIUS_LIST.length - 1]}
              value={radius}
              onChange={onChangeRadius}
            />
            <datalist id="range-list">
              {RADIUS_LIST.map((value) => (
                <option
                  key={value}
                  value={value}
                  label={
                    [1, 25, 100].includes(value) ? `${value} km` : undefined
                  }
                ></option>
              ))}
            </datalist>
            <span>{`max ${radius} km`}</span>
          </label>
        </div>
        <div>
          <label>
            <span>Type</span>
            <select value={type} onChange={onChangeType}>
              {Object.entries(TYPES).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            <span>Price From</span>
            <input
              type="range"
              list="price-list"
              min={PRICE_LIST[0]}
              max={PRICE_LIST[PRICE_LIST.length - 1]}
              value={priceFrom}
              onChange={onChangePriceFrom}
            />
            <datalist id="price-list">
              {PRICE_LIST.map((value) => (
                <option
                  key={value}
                  value={value}
                  label={
                    [0, 1, 2, 3, 4, 5].includes(value)
                      ? `${value} pln/l`
                      : undefined
                  }
                ></option>
              ))}
            </datalist>
          </label>
          <label>
            <span>Price To</span>
            <input
              type="range"
              list="price-list"
              min={PRICE_LIST[0]}
              max={PRICE_LIST[PRICE_LIST.length - 1]}
              value={priceTo}
              onChange={onChangePriceTo}
            />
            <span>{`${priceFrom}-${priceTo} pln/l`}</span>
          </label>
        </div>
      </fieldset>
    </div>
  );
}

export default function Section() {
  return (
    <div className={styles.Section}>
      <h2>Stations</h2>
      <Data />
    </div>
  );
}
