import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import { createAsset } from "use-asset";
import { Gallery } from "../../components/Gallery";
import { Link } from "../../components/Link";
import usePlace from "../Scrap/usePlace";
import { prepareItem } from "./utils";
import cx from "classnames";
import styles from "./styles.module.scss";

const SORT_BY = {
  id: 1,
  price: 1,
  title: 1,
  _area: 1,
  _terrain_area: 1,
  _created: -1,
  _updated: -1,
};

const PRICE_LIST = [
  0, 100000, 200000, 300000, 400000, 500000, 1000000, 1500000, 2000000, 2500000,
  3000000, 4000000, 5000000,
];

const AREA_LIST = [
  0, 50, 100, 150, 200, 250, 300, 400, 500, 600, 700, 800, 900,
];

const TERRAIN_AREA_LIST = [
  0, 250, 500, 750, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 5000,
];

// https://github.com/pmndrs/use-asset#dealing-with-async-assets
const asset = createAsset(async (version) => {
  const res = await fetch(`api/properties/data.json?${version}`);
  return await res.json().then(({ hide, like, results }) => ({
    hide,
    like,
    results: results
      // .filter((item: { canonical: string }) => item.canonical.match(/otodom/))
      .map((item: object) => ({ ...item, ...prepareItem(item) })),
  }));
});

const unify = (item: { title: string; price: number; parameters: any[] }) => ({
  ...item,
  _search: item.title.toLowerCase(),
  _price: item.price,
});

function Data({ version = "v1" }) {
  const { results, hide: initialHide, like: initialLike } = asset.read(version); // As many cache keys as you need

  const options = useMemo(
    () => ({
      category: [""].concat(
        results
          .map(({ category }: any) => category)
          .filter(Boolean)
          .filter(
            (value: any, index: number, array: any[]) =>
              array.indexOf(value) === index
          )
          .sort((a: string, b: string) => a.localeCompare(b))
      ),
      location: [""].concat(
        results
          .map(({ _location }: any) => _location)
          .filter(Boolean)
          .filter(
            (value: any, index: number, array: any[]) =>
              array.indexOf(value) === index
          )
          .sort((a: string, b: string) => a.localeCompare(b))
      ),
      road: [""].concat(
        results
          .map(({ road }: any) => road)
          .filter(
            (value: any, index: number, array: any[]) =>
              value !== undefined && array.indexOf(value) === index
          )
          .sort((a: string, b: string) => a.localeCompare(b))
      ),
      building: [""].concat(
        results
          .map(({ building }: any) => building)
          .filter(
            (value: any, index: number, array: any[]) =>
              value !== undefined && array.indexOf(value) === index
          )
          .sort((a: string, b: string) => a.localeCompare(b))
      ),
    }),
    [results]
  );

  const [filters, setFilters] = useState(() => ({
    category: options.category[0],
    location: options.location[0],
    road: options.road[0],
    building: options.building[0],
    search: "",
    priceFrom: PRICE_LIST[0],
    priceTo: PRICE_LIST[PRICE_LIST.length - 4],
    areaFrom: AREA_LIST[0],
    areaTo: AREA_LIST[AREA_LIST.length - 1],
    terrainAreaFrom: TERRAIN_AREA_LIST[0],
    terrainAreaTo: TERRAIN_AREA_LIST[TERRAIN_AREA_LIST.length - 1],
  }));

  const [queries, setQueries] = useState(() => filters);

  const [sortBy, setSortBy] = useState(() => Object.keys(SORT_BY)[5]);

  const onChangeSortBy = useCallback(
    ({ target }) => setSortBy(target.value),
    []
  );

  const search$ = useMemo(() => new Subject<any>(), []);

  useEffect(() => {
    const subscription = search$
      .pipe(
        map(({ search, ...filters }) =>
          JSON.stringify({ ...queries, ...filters, search: search.trim() })
        ),
        distinctUntilChanged(),
        debounceTime(400)
      )
      .subscribe((filters) =>
        setQueries((queries) => ({ ...queries, ...JSON.parse(filters) }))
      );
    return () => subscription.unsubscribe();
  }, [search$]);

  useEffect(() => {
    search$.next(filters);
  }, [filters]);

  console.log({ initialLike, options, filters, results });

  const list = useMemo(
    () =>
      results
        .map(unify)
        .filter(
          (item: {
            id: string;
            category: string;
            road: string;
            building: string;
            _area: number;
            _terrain_area: number;
            _location: string;
            _price: number;
            _search: string;
          }) =>
            (!queries.category || [item.category].includes(queries.category)) &&
            (!queries.location ||
              [item._location].includes(queries.location)) &&
            (!queries.road || [item.road].includes(queries.road)) &&
            (!queries.building || [item.building].includes(queries.building)) &&
            (item._search.match(queries.search) ||
              queries.search === String(item.id)) &&
            (queries.areaTo === AREA_LIST[0] ||
              (queries.areaFrom <= item._area &&
                item._area <= queries.areaTo)) &&
            (queries.terrainAreaTo === TERRAIN_AREA_LIST[0] ||
              (queries.terrainAreaFrom <= item._terrain_area &&
                item._terrain_area <= queries.terrainAreaTo)) &&
            (queries.priceTo === PRICE_LIST[0] ||
              (queries.priceFrom <= item._price &&
                item._price <= queries.priceTo))
        ),
    [results, queries]
  );

  const sorted = useMemo(
    () =>
      list.sort(
        (a: any, b: any) =>
          (SORT_BY as any)[sortBy] * (a[sortBy] > b[sortBy] ? 1 : -1)
      ),
    [list, sortBy]
  );

  const [hide, setHide] = useState<string[]>(initialHide);
  const [like, setLike] = useState<string[]>(initialLike);

  return (
    <div>
      <fieldset>
        <label>
          <span>Category</span>
          <select
            value={filters.category}
            onChange={useCallback(
              ({ target }) =>
                setFilters((filters) => ({
                  ...filters,
                  category: target.value,
                })),
              []
            )}
          >
            {options.category.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Search</span>
          <input
            type="search"
            value={filters.search}
            onChange={useCallback(
              ({ target }) =>
                setFilters((filters) => ({
                  ...filters,
                  search: target.value,
                })),
              []
            )}
          />
        </label>
        <label>
          <span>Sort</span>
          <select value={sortBy} onChange={onChangeSortBy}>
            {Object.entries(SORT_BY).map(([value]) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <div>
          <label>
            <span>Location</span>
            <select
              value={filters.location}
              onChange={useCallback(
                ({ target: { value } }) =>
                  setFilters((filters) => ({
                    ...filters,
                    location: value,
                  })),
                []
              )}
            >
              {options.location.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            <span>Road</span>
            <select
              value={filters.road}
              onChange={useCallback(
                ({ target: { value } }) =>
                  setFilters((filters) => ({
                    ...filters,
                    road: value,
                  })),
                []
              )}
            >
              {options.road.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            <span>Building</span>
            <select
              value={filters.building}
              onChange={useCallback(
                ({ target: { value } }) =>
                  setFilters((filters) => ({
                    ...filters,
                    building: value,
                  })),
                []
              )}
            >
              {options.building.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
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
              value={filters.areaFrom}
              onChange={useCallback(
                ({ target }) =>
                  setFilters(({ areaTo, ...criteria }) => {
                    const areaFrom = Number(target.value);
                    return {
                      ...criteria,
                      areaFrom,
                      areaTo: areaTo < areaFrom ? areaFrom : areaTo,
                    };
                  }),
                []
              )}
            />
            <datalist id="area-list">
              {AREA_LIST.map((value) => (
                <option key={value} value={value}></option>
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
              value={filters.areaTo}
              onChange={useCallback(
                ({ target }) =>
                  setFilters(({ areaFrom, ...criteria }) => {
                    const areaTo = Number(target.value);
                    return {
                      ...criteria,
                      areaFrom: areaTo > areaFrom ? areaFrom : areaTo,
                      areaTo,
                    };
                  }),
                []
              )}
            />
            <span>{`${new Intl.NumberFormat().format(
              filters.areaFrom
            )} - ${new Intl.NumberFormat().format(filters.areaTo)} m2`}</span>
          </label>
        </div>
        <div>
          <label>
            <span>Terrain Area From</span>
            <input
              type="range"
              list="terrain-area-list"
              min={TERRAIN_AREA_LIST[0]}
              max={TERRAIN_AREA_LIST[TERRAIN_AREA_LIST.length - 1]}
              value={filters.terrainAreaFrom}
              onChange={useCallback(
                ({ target }) =>
                  setFilters(({ terrainAreaTo, ...criteria }) => {
                    const terrainAreaFrom = Number(target.value);
                    return {
                      ...criteria,
                      terrainAreaFrom,
                      terrainAreaTo:
                        terrainAreaTo < terrainAreaFrom
                          ? terrainAreaFrom
                          : terrainAreaTo,
                    };
                  }),
                []
              )}
            />
            <datalist id="terrain-area-list">
              {TERRAIN_AREA_LIST.map((value) => (
                <option key={value} value={value}></option>
              ))}
            </datalist>
          </label>
          <label>
            <span>Terrain Area To</span>
            <input
              type="range"
              list="terrain-area-list"
              min={TERRAIN_AREA_LIST[0]}
              max={TERRAIN_AREA_LIST[TERRAIN_AREA_LIST.length - 1]}
              value={filters.terrainAreaTo}
              onChange={useCallback(
                ({ target }) =>
                  setFilters(({ terrainAreaFrom, ...criteria }) => {
                    const terrainAreaTo = Number(target.value);
                    return {
                      ...criteria,
                      terrainAreaFrom:
                        terrainAreaTo > terrainAreaFrom
                          ? terrainAreaFrom
                          : terrainAreaTo,
                      terrainAreaTo,
                    };
                  }),
                []
              )}
            />
            <span>{`${new Intl.NumberFormat().format(
              filters.terrainAreaFrom
            )} - ${new Intl.NumberFormat().format(
              filters.terrainAreaTo
            )} m2`}</span>
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
              value={filters.priceFrom}
              onChange={useCallback(
                ({ target }) =>
                  setFilters(({ priceTo, ...criteria }) => {
                    const priceFrom = Number(target.value);
                    return {
                      ...criteria,
                      priceFrom,
                      priceTo: priceTo < priceFrom ? priceFrom : priceTo,
                    };
                  }),
                []
              )}
            />
            <datalist id="price-list">
              {PRICE_LIST.map((value) => (
                <option key={value} value={value}></option>
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
              value={filters.priceTo}
              onChange={useCallback(
                ({ target }) =>
                  setFilters(({ priceFrom, ...criteria }) => {
                    const priceTo = Number(target.value);
                    return {
                      ...criteria,
                      priceFrom: priceTo > priceFrom ? priceFrom : priceTo,
                      priceTo,
                    };
                  }),
                []
              )}
            />
            <span>{`${new Intl.NumberFormat().format(
              filters.priceFrom
            )} - ${new Intl.NumberFormat().format(filters.priceTo)} PLN`}</span>
          </label>
        </div>
      </fieldset>
      <div>{`Found ${list.length} products out of a total of ${results.length}`}</div>
      <ol>
        {sorted
          .slice(0, 100)
          .map(
            (item: {
              id: string;
              images: string[];
              canonical: string;
              title: string;
              price: number;
              description: string[];
              parameters: [{ label: string; value: string }];
              coordinates: { latitude: number; longitude: number };
              _address: string[];
              _created: number;
            }) => (
              <li
                key={item.id}
                className={cx(
                  styles.Row,
                  like.includes(item.id) && styles.Like,
                  hide.includes(item.id) && styles.Hide
                )}
              >
                {!hide.includes(item.id) && (
                  <Gallery className={styles.Gallery} images={item.images} />
                )}
                <Summary
                  {...item}
                  hide={hide}
                  setHide={setHide}
                  like={like}
                  setLike={setLike}
                />
                {!hide.includes(item.id) && <Details {...item} />}
              </li>
            )
          )}
      </ol>
    </div>
  );
}

function Location({ canonical, coordinates: { latitude, longitude } }) {
  const link = usePlace([`${latitude},${longitude}|${canonical}`]);

  return (
    <Link href={link}>
      <FontAwesomeIcon icon={faMapMarkerAlt} />
    </Link>
  );
}

function Toggle({ children, ...props }) {
  return (
    <label>
      <input type="checkbox" {...props} />
      <span>{children}</span>
    </label>
  );
}

function Summary({
  id,
  canonical,
  coordinates,
  price,
  title,
  hide,
  setHide,
  like,
  setLike,
  _address,
  _created,
}: {
  id: string;
  canonical: string;
  coordinates: { latitude: number; longitude: number };
  price: number;
  title: string;
  hide: string[];
  setHide: Function;
  like: string[];
  setLike: Function;
  _address: string[];
  _created: number;
}) {
  return (
    <div className={styles.Summary}>
      <div>
        <div className={styles.Sidebar}>
          <Toggle
            checked={like.includes(id)}
            onChange={(e) => (
              fetch(`api/properties/like.json?id=${id}`),
              setLike((like: string[]) =>
                e.target.checked
                  ? like.concat(id)
                  : like.filter((like: string) => like !== id)
              )
            )}
          >
            Like
          </Toggle>
          <Toggle
            checked={hide.includes(id)}
            onChange={(e) => (
              fetch(`api/properties/hide.json?id=${id}`),
              setHide((hide: string[]) =>
                e.target.checked
                  ? hide.concat(id)
                  : hide.filter((hide: string) => hide !== id)
              )
            )}
          >
            Hide
          </Toggle>
        </div>
        <div>{format(_created, "yyyy-MM-dd HH:mm")}</div>
      </div>
      <div style={{ clear: "right" }}>
        <h4>{`${new Intl.NumberFormat().format(price)} PLN`}</h4>
        <h3>
          <Link href={canonical}>{title}</Link>{" "}
          {coordinates && (
            <Location canonical={canonical} coordinates={coordinates} />
          )}
        </h3>
      </div>
      {_address && <h6>{_address.join(" / ")}</h6>}
    </div>
  );
}

function Details({
  description,
  parameters,
}: {
  description: string[];
  parameters: [{ label: string; value: string }];
}) {
  return (
    <div className={styles.Details}>
      {description.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <ul>
        {parameters.map(({ label, value }, key) => (
          <li key={key}>
            {label}: <b>{value}</b>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Section() {
  return (
    <div className={styles.Section}>
      <h2>Properties</h2>
      <Data />
    </div>
  );
}
