import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { format } from "date-fns";
import { createAsset } from "use-asset";
import { Gallery } from "../../components/Gallery";
import { Link } from "../../components/Link";
import { prepareItem } from "./utils";
import styles from "./styles.module.scss";

const SORT_BY = {
  id: 1,
  price: 1,
  title: 1,
  _area: 1,
  _terrain_area: 1,
  _created: -1,
};

const PRICE_LIST = [
  0, 100000, 200000, 300000, 400000, 500000, 1000000, 1500000, 2000000,
];

const AREA_LIST = [0, 100, 200, 300, 400, 500, 600];

const TERRAIN_AREA_LIST = [0, 500, 1000, 1500, 2000, 2500, 5000];

// https://github.com/pmndrs/use-asset#dealing-with-async-assets
const asset = createAsset(async (version) => {
  const res = await fetch(`api/properties/data.json?${version}`);
  return await res.json().then(({ results }) => ({
    results: results
      // .filter((item: { canonical: string }) => item.canonical.match(/otodom/))
      .map((item: object) => ({ ...item, ...prepareItem(item) })),
  }));
});

const unify = (item: { title: string; price: number; parameters: any[] }) => ({
  ...item,
  categories: [],
  _search: item.title.toLowerCase(),
  _price: item.price,
});

function Data({ version = "v1" }) {
  const { results } = asset.read(version); // As many cache keys as you need

  const options = useMemo(
    () => ({
      category: [""],
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
    priceTo: PRICE_LIST[PRICE_LIST.length - 2],
    areaFrom: AREA_LIST[0],
    areaTo: AREA_LIST[AREA_LIST.length - 1],
    terrainAreaFrom: TERRAIN_AREA_LIST[0],
    terrainAreaTo: TERRAIN_AREA_LIST[TERRAIN_AREA_LIST.length - 1],
  }));

  const [queries, setQueries] = useState(() => filters);

  const [sortBy, setSortBy] = useState(() => Object.keys(SORT_BY)[0]);

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

  console.log({ options, filters, results });

  const list = useMemo(
    () =>
      results
        .map(unify)
        .filter(
          (item: {
            id: string;
            categories: string[];
            road: string;
            building: string;
            _area: number;
            _terrain_area: number;
            _location: string;
            _price: number;
            _search: string;
          }) =>
            (!queries.category || item.categories.includes(queries.category)) &&
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
              _address: string[];
              _created: number;
            }) => (
              <li key={item.id} className={styles.Row}>
                <Gallery className={styles.Gallery} images={item.images} />
                <Summary {...item} />
                <Details {...item} />
              </li>
            )
          )}
      </ol>
    </div>
  );
}

function Summary({
  canonical,
  price,
  title,
  _address,
  _created,
}: {
  canonical: string;
  price: number;
  title: string;
  _address: string[];
  _created: number;
}) {
  return (
    <div className={styles.Summary}>
      <div>{format(_created, "yyyy-MM-dd HH:mm")}</div>
      <h4>{`${new Intl.NumberFormat().format(price)} PLN`}</h4>
      <h3>
        <Link href={canonical}>{title}</Link>
      </h3>
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
