import React, { useCallback, useMemo, useState } from "react";
import { createAsset } from "use-asset";
import { format } from "date-fns";
import Map, { useBounds } from "./Map";
import { Gallery } from "../../components/Gallery";
import { Link } from "../../components/Link";
import useDebounce from "../useDebounce";
import usePlace from "./usePlace";
import { KIND_TYPES } from "./constants";
import styles from "./styles.module.scss";

const getKindType = (kind: string, type: string) => [kind, type].join(":");

const TYPES = Object.entries(KIND_TYPES).reduce(
  (result, [kind, types]) =>
    Object.entries(types).reduce(
      (result, [type, name]) =>
        Object.assign(result, { [getKindType(kind, type)]: name }),
      result
    ),
  {}
);

const RADIUS_LIST = [1, 3, 5, 10, 15, 20, 25, 30, 40, 50, 75, 100];
const AREA_LIST = [
  0, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 5000,
  // 10000, 50000, 80000,
];
const PRICE_LIST = [
  0, 100, 200, 400, 800, 1000, 1200, 1400, 1600, 1800, 2000, 5000, 10000,
];
const TOTAL_LIST = [
  100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 1000000,
  1200000, 1500000, 2000000, 5000000,
];

// https://github.com/pmndrs/use-asset#dealing-with-async-assets
const asset = createAsset(async (version) => {
  const res = await fetch(`api/data.json?${version}`);
  return await res.json();
});

function Data({ version = "v1" }) {
  const { results } = asset.read(version); // As many cache keys as you need
  const link = usePlace(
    results.map(
      ({ latitude, longitude, our_url }) =>
        `${latitude},${longitude}|${our_url}`
    )
  );

  const [search, setSearch] = useState("");
  const [filter] = useDebounce(search);

  const onChangeSearch = useCallback(
    ({ target }) => setSearch(target.value),
    []
  );

  const [radius, setRadius] = useState(15);

  const onChangeRadius = useCallback(
    ({ target }) => setRadius(Number(target.value)),
    []
  );

  const [kindType, setType] = useState(() => Object.keys(TYPES)[3]);

  const onChangeType = useCallback(({ target }) => setType(target.value), []);

  const [dateFrom, setDateFrom] = useState(() =>
    format(Date.now() - 1000 * 3600 * 24 * 30, "yyyy-MM-dd")
  );
  const [dateTo, setDateTo] = useState(() => format(Date.now(), "yyyy-MM-dd"));

  const onChangeDateFrom = useCallback(
    ({ target }) =>
      setDateTo((to) => {
        const from = target.value;
        setDateFrom(from);
        return to < from ? from : to;
      }),
    []
  );

  const onChangeDateTo = useCallback(
    ({ target }) =>
      setDateFrom((from) => {
        const to = target.value;
        setDateTo(to);
        return to > from ? from : to;
      }),
    []
  );

  const [areaFrom, setAreaFrom] = useState(400);
  const [areaTo, setAreaTo] = useState(2000);

  const onChangeAreaFrom = useCallback(
    ({ target }) =>
      setAreaTo((to) => {
        const from = Number(target.value);
        setAreaFrom(from);
        return to < from ? from : to;
      }),
    []
  );

  const onChangeAreaTo = useCallback(
    ({ target }) =>
      setAreaFrom((from) => {
        const to = Number(target.value);
        setAreaTo(to);
        return to > from ? from : to;
      }),
    []
  );

  const [priceFrom, setPriceFrom] = useState(100);
  const [priceTo, setPriceTo] = useState(2000);

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

  const [price, setPrice] = useState(1000000);

  const onChangePrice = useCallback(
    ({ target }) => setPrice(Number(target.value)),
    []
  );

  const list = useMemo(
    () =>
      results
        .filter(
          ({
            description_short,
            area_m2,
            price: total,
            price_per_m2_pln,
            created,
            kind,
            type,
          }) =>
            description_short.toLowerCase().match(filter) &&
            kindType === getKindType(kind, type) &&
            `${dateFrom} 00:00:00` <= created &&
            created <= `${dateTo} 23:59:59` &&
            areaFrom <= area_m2 &&
            area_m2 <= areaTo &&
            priceFrom <= price_per_m2_pln &&
            price_per_m2_pln <= priceTo &&
            total <= price
        )
        .map((item, i) => {
          const { id, latitude: lat, longitude: lng, our_url: name } = item;
          return {
            i,
            id,
            position: { lat, lng },
            name,
            item,
          };
        }),
    [
      results,
      filter,
      kindType,
      dateFrom,
      dateTo,
      areaFrom,
      areaTo,
      priceFrom,
      priceTo,
      price,
    ]
  );

  const bounds = useBounds(
    list.length ? list : [{ position: { lat: 52.232855, lng: 20.921111 } }]
  );
  const [center, setCenter] = useState(() => bounds.getCenter());

  const nearby = useMemo(
    () =>
      list.filter(
        ({ position }) => center.distanceTo(position) < radius * 1000
      ),
    [list, center, radius]
  );

  console.log({ nearby });

  return (
    <div>
      <Map
        bounds={bounds}
        center={center}
        setCenter={setCenter}
        list={nearby}
      />
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
            <select value={kindType} onChange={onChangeType}>
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
            <span>Date From</span>
            <input type="date" value={dateFrom} onChange={onChangeDateFrom} />
          </label>
          <label>
            <span>Date To</span>
            <input type="date" value={dateTo} onChange={onChangeDateTo} />
          </label>
        </div>
        <div>
          <label>
            <span>Area From</span>
            <input
              type="range"
              list="area-list"
              min={AREA_LIST[0]}
              max={AREA_LIST[AREA_LIST.length - 1]}
              value={areaFrom}
              onChange={onChangeAreaFrom}
            />
            <datalist id="area-list">
              {AREA_LIST.map((value) => (
                <option
                  key={value}
                  value={value}
                  label={
                    [0, 1000, 2000, 5000].includes(value)
                      ? `${value} m2`
                      : undefined
                  }
                ></option>
              ))}
            </datalist>
          </label>
          <label>
            <span>Area To</span>
            <input
              type="range"
              list="area-list"
              min={AREA_LIST[0]}
              max={AREA_LIST[AREA_LIST.length - 1]}
              value={areaTo}
              onChange={onChangeAreaTo}
            />
            <span>{`${areaFrom}-${areaTo} m2`}</span>
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
                    [0, 1000, 2000, 5000].includes(value)
                      ? `${value} pln/m2`
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
            <span>{`${priceFrom}-${priceTo} pln/m2`}</span>
          </label>
        </div>
        <div>
          <label>
            <span>Price</span>
            <input
              type="range"
              list="total-list"
              min={TOTAL_LIST[0]}
              max={TOTAL_LIST[TOTAL_LIST.length - 1]}
              value={price}
              onChange={onChangePrice}
              style={{ width: 350 }}
            />
            <datalist id="total-list">
              {TOTAL_LIST.map((value) => (
                <option
                  key={value}
                  value={value}
                  label={
                    [100000, 1000000, 5000000].includes(value)
                      ? `${value} pln`
                      : undefined
                  }
                ></option>
              ))}
            </datalist>
            <span>{`max ${price} pln`}</span>
          </label>
        </div>
      </fieldset>
      <div>{`Found ${nearby.length} locations (out of ${list.length}) out of a total of ${results.length}`}</div>
      <ol>
        {list
          .map(({ item }) => item)
          .map(
            (
              {
                images,
                latitude,
                longitude,
                kind,
                type,
                format,
                area_m2,
                price,
                price_per_m2_pln,
                description_short,
                our_url,
                created,
                changed,
              },
              key: number
            ) => (
              <li key={key}>
                <ul>
                  <li>
                    <Gallery className={styles.Gallery} images={images} />
                    <Link
                      href={link}
                    >{`${latitude},${longitude}|${our_url}`}</Link>
                  </li>
                  <li>{kind}</li>
                  <li>{type}</li>
                  <li>{format}</li>
                  <li>{area_m2}</li>
                  <li>{price}</li>
                  <li>{price_per_m2_pln}</li>
                  <li>{description_short}</li>
                  <li>{created}</li>
                  <li>{changed}</li>
                </ul>
              </li>
            )
          )}
      </ol>
    </div>
  );
}

export default function Section() {
  return (
    <div className={styles.Section}>
      <h2>Scrap</h2>
      <Data />
    </div>
  );
}
