import React, { useCallback, useMemo, useState } from "react";
import { format } from "date-fns";
import { createAsset } from "use-asset";
import useDebounce from "../useDebounce";
import { Gallery } from "../../components/Gallery";
import { Link } from "../../components/Link";
import styles from "./styles.module.scss";

const SORT_BY = {
  id: 1,
  price: 1,
  title: 1,
  _area: 1,
  _created: -1,
};

const PRICE_LIST = [
  0, 100000, 200000, 300000, 400000, 500000, 1000000, 1500000, 2000000,
];

const AREA_LIST = [0, 500, 1000, 1500, 2000, 2500, 5000];

// https://github.com/pmndrs/use-asset#dealing-with-async-assets
const asset = createAsset(async (version) => {
  const res = await fetch(`api/properties/data.json?${version}`);
  return await res.json().then(({ results }) => ({
    results: results.map((item: { parameters: any; address: any }) =>
      Object.assign(item, {
        _area: Number(
          item.parameters
            .find(({ label }: { label: string }) =>
              ["Powierzchnia działki w m2"].includes(label)
            )
            ?.value.replace(/^([\d\s]+) m2$/g, "$1")
            .replace(/\s/, "")
        ),
        _address: item.address
          ? [
              "lokalizacja_kraj",
              "lokalizacja_region",
              "lokalizacja_powiat",
              "lokalizacja_gmina",
              "lokalizacja_miejscowosc",
            ]
              .map((key) => item.address[key])
              .filter(Boolean)
          : null,
        location: item.parameters.find(({ label }: { label: string }) =>
          ["Lokalizacja"].includes(label)
        )?.value,
        road: item.parameters.find(({ label }: { label: string }) =>
          ["Droga dojazdowa"].includes(label)
        )?.value,
        building: item.parameters.find(({ label }: { label: string }) =>
          ["Typ budynku"].includes(label)
        )?.value,
      })
    ),
  }));
});

const unify = (item: { title: string; price: number; parameters: any[] }) => ({
  ...item,
  categories: [],
  _filter: item.title.toLowerCase(),
  _price: item.price,
});

function Data({ version = "v1" }) {
  const { results } = asset.read(version); // As many cache keys as you need

  const options = useMemo(
    () => ({
      category: [""],
      location: [""].concat(
        results
          .map(({ location }: any) => location)
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
  }));

  const [filter] = useDebounce(filters.search);

  const [sortBy, setSortBy] = useState(() => Object.keys(SORT_BY)[0]);

  const onChangeSortBy = useCallback(
    ({ target }) => setSortBy(target.value),
    []
  );

  console.log({ options, filters, results });

  const list = useMemo(
    () =>
      results
        .map(unify)
        .filter(
          (item: {
            id: string;
            categories: string[];
            location: string;
            road: string;
            building: string;
            _filter: string;
            _price: number;
            _area: number;
          }) =>
            (!filters.category || item.categories.includes(filters.category)) &&
            (!filters.location || [item.location].includes(filters.location)) &&
            (!filters.road || [item.road].includes(filters.road)) &&
            (!filters.building || [item.building].includes(filters.building)) &&
            (item._filter.match(filter) || filter.trim() === String(item.id)) &&
            (filters.areaTo === AREA_LIST[0] ||
              (filters.areaFrom <= item._area &&
                item._area <= filters.areaTo)) &&
            (filters.priceTo === PRICE_LIST[0] ||
              (filters.priceFrom <= item._price &&
                item._price <= filters.priceTo))
        ),
    [results, filter, filters]
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
