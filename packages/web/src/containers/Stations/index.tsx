import React, {
  type ChangeEventHandler,
  type MouseEventHandler,
  type ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { format } from "date-fns";
import { type LatLng } from "leaflet";
import { createAsset } from "use-asset";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import Chart from "../../components/ZoomableLineChart";
import { Link } from "../../components/Link";
import Calculator, { PRICE_LIST, useFilters } from "./Calculator";
import Leclerc from "./Leclerc";
import Map, { useBounds } from "./Map";
import useDebounce from "../useDebounce";
import cx from "classnames";
import styles from "./styles.module.scss";

import type { LeclercType } from "@dev/cli/src/services/LeclercService/types";
import type { StationItem } from "@dev/cli/src/services/StationService/types";

const RADIUS_LIST = [1, 3, 5, 10, 20, 50, 100, 500];
const SORT_BY = {
  _distance: 1,
  _petrol_pb: 1,
  "_petrol_pb+": 1,
  _petrol_on: 1,
  "_petrol_on+": 1,
  network_name: 1,
  address: 1,
  _created: -1,
  _updated: -1,
};
const TYPES = {
  "": "",
  pb: "pb",
  "pb+": "pb+",
  on: "on",
  "on+": "on+",
  lpg: "lpg",
  "lpg+": "lpg+",
} as const;

enum Compare {
  LT = "LT",
  GT = "GT",
  EQ = "EQ",
}

const compare = (history: any, k: number, p: number) => {
  if (history[k][1][p] && history[k + 1] && history[k + 1][1][p]) {
    const a = Number(history[k][1][p]);
    const b = Number(history[k + 1][1][p]);
    return a === b ? Compare.EQ : a > b ? Compare.GT : Compare.LT;
  }
  return null;
};

const LECLERC_TYPES = {
  on: "on",
  "on b7": "on",
  "on max": "on+",
  pb95: "pb",
  "pb95 e5": "pb",
};

const mapLeclercPriceList = ({
  type,
  price,
}: {
  type: string;
  price: string;
}) => ({
  type: LECLERC_TYPES[type as keyof typeof LECLERC_TYPES],
  price: price.replace(",", "."),
});

const reducePetrolList = (
  records: object,
  { type, price }: { type: string; price: string }
) =>
  Object.assign(records, {
    [type]: price,
  });

// https://github.com/pmndrs/use-asset#dealing-with-async-assets
const asset = createAsset(async (version) => {
  const leclercResults = await fetch(`api/leclerc/data.json?${version}`).then(
    (res) => res.json()
  );
  const res = await fetch(`api/stations/data.json?${version}`);
  return await res.json().then(({ results }: { results: StationItem[] }) => ({
    results: (
      leclercResults.map((item: LeclercType) => ({
        ...item,
        address: "Warszawa, Ciszewskiego 15",
        id: 0, //7810
        map_img:
          "/system/assets/images/fuel-station/network/map/no-map-45x60.png",
        network_id: 0, // 119
        network_name: "Leclerc",
        petrol: item.petrol_list
          .map(mapLeclercPriceList)
          .reduce(reducePetrolList, {}),
        petrol_list: item.petrol_list.map(mapLeclercPriceList),
        _history: Object.entries(item._history).reduce(
          (entries, [time, item]) =>
            Object.assign(entries, {
              [time]: item.petrol_list
                .map(mapLeclercPriceList)
                .reduce(reducePetrolList, {}),
            }),
          {}
        ),
        station_id: 0, // 7810
        x: 52.154332124889,
        y: 21.042253017076,
      })) as StationItem[]
    )
      .concat(results)
      .map(({ _history = {}, ...item }: StationItem) => ({
        ...item.petrol_list.reduce(
          (list, { type, price }) =>
            Object.assign(list, { [`_petrol_${type}`]: Number(price) || 0 }),
          {}
        ),
        _history,
        ...item,
      })),
  }));
});

// https://developers.google.com/maps/documentation/urls/get-started#directions-examples
export function Directions({
  children,
  origin,
  destination,
}: {
  children?: ReactNode;
  origin: LatLng;
  destination: LatLng;
}) {
  const travelmode: "driving" | "walking" | "bicycling" | "transit" = "driving";
  const link = `//www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    (({ lat, lng }) => `${lat},${lng}`)(origin)
  )}&destination=${encodeURIComponent(
    (({ lat, lng }) => `${lat},${lng}`)(destination)
  )}&travelmode=${encodeURIComponent(travelmode)}&hl=pl`;

  return (
    <Link href={link} rel="" target="map">
      <FontAwesomeIcon icon={faCrosshairs} />
      {children}
    </Link>
  );
}

function Data({ version = "v1" }) {
  const { results } = asset.read(version); // As many cache keys as you need
  const [toggle, setToggle] = useState<number[]>([]);

  const [search, setSearch] = useState("");
  const [filter] = useDebounce(search);

  const onChangeSearch = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) => setSearch(target.value),
    []
  );

  const [criteria, setCriteria] = useState(() => ({
    // search: "",
    type: Object.keys(TYPES)[1],
    radius: 5,
    priceFrom: PRICE_LIST[0],
    priceTo: PRICE_LIST[PRICE_LIST.length - 1],
    dateFrom: format(Date.now() - 1000 * 3600 * 24 * 30, "yyyy-MM-dd"),
    dateTo: format(Date.now(), "yyyy-MM-dd"),
    sortBy: Object.keys(SORT_BY)[0] as keyof typeof SORT_BY,
  }));

  const onChangePriceFrom = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) =>
      setCriteria(({ priceTo, ...criteria }) => {
        const priceFrom = Number(target.value);
        return {
          ...criteria,
          priceFrom,
          priceTo: priceTo < priceFrom ? priceFrom : priceTo,
        };
      }),
    []
  );
  const onChangePriceTo = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) =>
      setCriteria(({ priceFrom, ...criteria }) => {
        const priceTo = Number(target.value);
        return {
          ...criteria,
          priceFrom: priceTo > priceFrom ? priceFrom : priceTo,
          priceTo,
        };
      }),
    []
  );

  const onChangeCreatedFrom = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) =>
      setCriteria(({ dateTo, ...criteria }) => {
        const dateFrom = target.value;
        return {
          ...criteria,
          dateFrom,
          dateTo: dateTo < dateFrom ? dateFrom : dateTo,
        };
      }),
    []
  );
  const onChangeCreatedTo = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) =>
      setCriteria(({ dateFrom, ...criteria }) => {
        const dateTo = target.value;
        return {
          ...criteria,
          dateFrom: dateTo > dateFrom ? dateFrom : dateTo,
          dateTo,
        };
      }),
    []
  );

  console.log({ results });

  const list = useMemo(
    () =>
      results
        .map((item, i) => {
          const { station_id: id, x: lat, y: lng, network_name: name } = item;
          return {
            i,
            id,
            position: { lat, lng } as LatLng,
            name,
            item,
          };
        })
        .filter(
          ({
            name,
            item: { petrol_list, address = "", _created, _updated = _created },
          }) =>
            (name.toLowerCase().match(filter) ||
              address.toLowerCase().match(filter)) &&
            (criteria.type
              ? ((item) =>
                  item !== undefined &&
                  criteria.priceFrom <= Number(item.price) &&
                  Number(item.price) <= criteria.priceTo)(
                  petrol_list.find((item) => item.type === criteria.type)
                )
              : true) &&
            new Date(`${criteria.dateFrom} 00:00:00`).getTime() <= _updated &&
            _updated <= new Date(`${criteria.dateTo} 23:59:59`).getTime()
        ),
    [
      results,
      filter,
      criteria.type,
      criteria.priceFrom,
      criteria.priceTo,
      criteria.dateFrom,
      criteria.dateTo,
    ]
  );

  const middle = useBounds([
    { position: { lat: 52.1793, lng: 21.0498 } as LatLng },
  ]);

  const [center, setCenter] = useState(() => middle.getCenter());

  const nearby = useMemo(
    () =>
      list
        .map(({ position, item, ...rest }) => ({
          position,
          item: {
            ...item,
            _distance: center.distanceTo(position),
          },
          history: (item.petrol
            ? [[String(item._updated), item.petrol]]
                .concat(Object.entries(item._history).reverse())
                .map(([updated, petrol]) => [
                  updated,
                  Object.keys(TYPES)
                    .filter(Boolean)
                    .map((type) => petrol[type]),
                ])
            : []) as Array<[string, string[]]>,
          ...rest,
        }))
        .filter(({ item, history }) => item._distance < criteria.radius * 1000),
    [list, center, criteria.radius]
  );

  const sorted = useMemo(
    () =>
      nearby.sort(
        (a: any, b: any) =>
          SORT_BY[criteria.sortBy] *
          (a.item[criteria.sortBy] === b.item[criteria.sortBy]
            ? 0
            : (a.item[criteria.sortBy] || 0) > (b.item[criteria.sortBy] || 0)
            ? 1
            : -1)
      ),
    [nearby, criteria.sortBy]
  );

  const chart = useMemo(
    () =>
      nearby
        .map(({ history, item: { network_name, address } }) =>
          history.map(([date, values]) => ({
            group: `${network_name} | ${address}`,
            date: new Date(Number(date)),
            value: Number(
              values[Object.keys(TYPES).indexOf(criteria.type) - 1]
            ),
          }))
        )
        .flat()
        .filter(({ value }) => Boolean(value))
        .sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        ),
    [nearby, criteria.type]
  );

  const bounds = useBounds(nearby as any);

  const [filters, setFilters] = useFilters();

  return (
    <div>
      <Map
        bounds={bounds}
        center={center}
        setCenter={setCenter}
        list={nearby}
      />
      <Chart list={chart} />
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
              value={criteria.radius}
              onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
                ({ target }) =>
                  setCriteria((criteria) => ({
                    ...criteria,
                    radius: Number(target.value),
                  })),
                []
              )}
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
            <span>{`max ${criteria.radius} km`}</span>
          </label>
        </div>
        <div>
          <label>
            <span>Type</span>
            <select
              value={criteria.type}
              onChange={useCallback<ChangeEventHandler<HTMLSelectElement>>(
                ({ target }) =>
                  setCriteria((criteria) => ({
                    ...criteria,
                    type: target.value,
                  })),
                []
              )}
            >
              {Object.entries(TYPES).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>Sort</span>
            <select
              value={criteria.sortBy}
              onChange={useCallback<ChangeEventHandler<HTMLSelectElement>>(
                ({ target }) =>
                  setCriteria((criteria) => ({
                    ...criteria,
                    sortBy: target.value as keyof typeof SORT_BY,
                  })),
                []
              )}
            >
              {Object.entries(SORT_BY).map(([value]) => (
                <option key={value} value={value}>
                  {value}
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
              value={criteria.priceFrom}
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
              value={criteria.priceTo}
              onChange={onChangePriceTo}
            />
            <span>{`${criteria.priceFrom}-${criteria.priceTo} pln/l`}</span>
          </label>
        </div>
        <div>
          <label>
            <span>Date From</span>
            <input
              type="date"
              value={criteria.dateFrom}
              onChange={onChangeCreatedFrom}
            />
          </label>
          <label>
            <span>Date To</span>
            <input
              type="date"
              value={criteria.dateTo}
              onChange={onChangeCreatedTo}
            />
          </label>
        </div>
      </fieldset>
      <Calculator filters={filters} setFilters={setFilters} />
      <table className={styles.Table}>
        <tbody>
          <tr>
            <th style={{ textAlign: "right" }}>#</th>
            {Object.keys(TYPES).map((key) => (
              <th
                key={key}
                className={cx(key === criteria.type && styles.selected)}
              >
                {key ? (
                  <Link
                    onClick={useCallback<MouseEventHandler>(
                      (e) => (
                        e.preventDefault(),
                        setCriteria((criteria) => ({
                          ...criteria,
                          type: key,
                        }))
                      ),
                      []
                    )}
                  >
                    {key}
                  </Link>
                ) : (
                  <div>name</div>
                )}
              </th>
            ))}
            <th>updated</th>
            <th>checked</th>
            <th></th>
          </tr>
          {sorted.map(({ i, name, item, position, history }, key) =>
            history
              .slice(0, toggle.includes(i) ? Infinity : 1)
              .map(([updated, petrol], k) => (
                <tr key={`${key}-${k}`}>
                  <td style={{ textAlign: "right" }}>{k === 0 && i}</td>
                  {k === 0 && (
                    <td
                      rowSpan={toggle.includes(i) ? history.length : undefined}
                    >
                      <div className={styles.Station}>
                        <Link
                          onClick={(e) => (
                            e.preventDefault(),
                            setFilters((filters) => ({
                              ...filters,
                              distance:
                                Math.round((10 * item._distance) / 1000) / 10,
                              price: Number(
                                petrol[
                                  Object.keys(TYPES).indexOf(criteria.type) - 1
                                ]
                              ),
                            }))
                          )}
                        >
                          <strong>{name}</strong> [
                          {new Intl.NumberFormat("pl-PL", {
                            maximumFractionDigits: 1,
                          }).format(item._distance / 1000)}{" "}
                          km]
                        </Link>
                        <address>
                          <Directions
                            origin={center}
                            destination={position as LatLng}
                          >
                            {item.address}
                          </Directions>
                        </address>
                      </div>
                    </td>
                  )}
                  {petrol.map((price, p) => (
                    <td
                      key={p}
                      className={cx(
                        p === Object.keys(TYPES).indexOf(criteria.type) - 1 &&
                          styles.selected
                      )}
                    >
                      <div
                        className={cx(
                          styles.Price,
                          ((type) =>
                            type &&
                            {
                              [Compare.GT]: styles.gt,
                              [Compare.LT]: styles.lt,
                              [Compare.EQ]: styles.eq,
                            }[type])(compare(history, k, p))
                        )}
                      >
                        {price ?? "-"}
                      </div>
                    </td>
                  ))}
                  <td>{format(Number(updated), "yyyy-MM-dd")}</td>
                  <td>
                    {k === 0 &&
                      item._checked &&
                      format(item._checked, "yyyy-MM-dd")}
                  </td>
                  <td>
                    {history.length > 0 &&
                      k === 0 &&
                      (toggle.includes(i) ? (
                        <Link
                          onClick={(e) => (
                            e.preventDefault(),
                            setToggle((toggle) => toggle.filter((k) => i !== k))
                          )}
                        >
                          hide
                        </Link>
                      ) : (
                        <Link
                          onClick={(e) => (
                            e.preventDefault(),
                            setToggle((toggle) => toggle.concat(i))
                          )}
                        >
                          show
                        </Link>
                      ))}
                  </td>
                </tr>
              ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default function Section() {
  return (
    <div className={styles.Section}>
      <h2>Stations</h2>
      <Leclerc />
      <Data />
    </div>
  );
}
