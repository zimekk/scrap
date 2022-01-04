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
  _created: -1,
};

const PRICE_LIST = [
  0, 100000, 200000, 300000, 400000, 500000, 1000000, 2000000, 5000000,
  15000000,
];

// https://github.com/pmndrs/use-asset#dealing-with-async-assets
const asset = createAsset(async (version) => {
  const res = await fetch(`api/properties/data.json?${version}`);
  return await res.json(); //.then(({ Products }) => ({ results: Products }));
});

const unify = (item: { title: string; price: number }) => ({
  ...item,
  categories: [],
  _filter: item.title.toLowerCase(),
  _price: item.price,
});

function Data({ version = "v1" }) {
  const { results } = asset.read(version); // As many cache keys as you need

  const options = useMemo(
    () => ({
      category: [],
    }),
    [results]
  );

  const [filters, setFilters] = useState(() => ({
    category: "",
    search: "",
    priceFrom: PRICE_LIST[0],
    priceTo: PRICE_LIST[PRICE_LIST.length - 1],
  }));

  const [filter] = useDebounce(filters.search);

  const [sortBy, setSortBy] = useState(() => Object.keys(SORT_BY)[0]);

  const onChangeSortBy = useCallback(
    ({ target }) => setSortBy(target.value),
    []
  );

  const onChangePriceFrom = useCallback(
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
  );

  const onChangePriceTo = useCallback(
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
  );

  console.log({ options, filters, results });

  const list = useMemo(
    () =>
      results
        .map(unify)
        .filter(
          (item: {
            id: string;
            categories: [string];
            _filter: string;
            _price: number;
          }) =>
            (!filters.category || item.categories.includes(filters.category)) &&
            (item._filter.match(filter) || filter.trim() === String(item.id)) &&
            filters.priceFrom <= item._price &&
            item._price <= filters.priceTo
        ),
    [results, filter, filters.category, filters.priceFrom, filters.priceTo]
  );

  const sorted = useMemo(
    () =>
      list.sort(
        (a: any, b: any) => SORT_BY[sortBy] * (a[sortBy] > b[sortBy] ? 1 : -1)
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
            <span>Price From</span>
            <input
              type="range"
              list="price-list"
              min={PRICE_LIST[0]}
              max={PRICE_LIST[PRICE_LIST.length - 1]}
              value={filters.priceFrom}
              onChange={onChangePriceFrom}
            />
            <datalist id="price-list">
              {PRICE_LIST.map((value) => (
                <option
                  key={value}
                  value={value}
                  label={
                    PRICE_LIST.includes(value) ? `${value} PLN` : undefined
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
              value={filters.priceTo}
              onChange={onChangePriceTo}
            />
            <span>{`${filters.priceFrom}-${filters.priceTo} pln`}</span>
          </label>
        </div>
      </fieldset>
      <div>{`Found ${list.length} products out of a total of ${results.length}`}</div>
      <ol>
        {sorted.slice(0, 100).map((item: { id: string; images: [string] }) => (
          <li key={item.id} className={styles.Row}>
            <Gallery className={styles.Gallery} images={item.images} />
            <Summary {...item} />
            <Details {...item} />
          </li>
        ))}
      </ol>
    </div>
  );
}

function Summary({
  canonical,
  price,
  title,
  _created,
}: {
  canonical: string;
  price: number;
  title: string;
  _created: number;
}) {
  return (
    <div className={styles.Summary}>
      <div>{format(_created, "yyyy-MM-dd HH:mm")}</div>
      <h4>{`${price} PLN`}</h4>
      <h3>
        <Link href={canonical}>{title}</Link>
      </h3>
    </div>
  );
}

function Details({
  description,
  parameters,
}: {
  description: string;
  parameters: [{ label: string; value: string }];
}) {
  return (
    <div className={styles.Details}>
      <p>{description}</p>
      <ul>
        {parameters.map(({ label, value }, key) => (
          <li key={key}>
            <b>{label}</b>: {value}
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
