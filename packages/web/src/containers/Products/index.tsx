import React, { useCallback, useMemo, useState } from "react";
import { format } from "date-fns";
import { createAsset } from "use-asset";
import { Gallery } from "../../components/Gallery";
import { Link } from "../../components/Link";
import useDebounce from "../useDebounce";
import cx from "classnames";
import styles from "./styles.module.scss";

import type {
  ProductItem,
  ReviewItem,
} from "@dev/cli/src/services/ProductService/types";

const SORT_BY = {
  title: 1,
  brand: 1,
  _price: 1,
  _stars: -1,
  _created: -1,
  _updated: -1,
};

const PRICE_LIST = [
  0, 100, 200, 500, 1000, 1500, 2000, 3000, 4000, 5000, 10000, 15000, 20000,
  25000,
];

// https://github.com/pmndrs/use-asset#dealing-with-async-assets
const asset = createAsset(async (version) => {
  // copy({results:temp1.results.filter(item=>[460088,682156,681208].includes(Number(item.id))).map(({_id,_history,...item }) => item)})
  const res = await fetch(`api/products/data.json?${version}`);
  return await res.json();
});

function Data({ version = "v1" }) {
  const { results } = asset.read(version) as { results: ProductItem[] };

  const options = useMemo(
    () => ({
      brand: [""].concat(
        results
          .map(({ brand }: any) => brand)
          .filter(Boolean)
          .filter(
            (value: any, index: number, array: any[]) =>
              array.indexOf(value) === index
          )
          .sort((a: string, b: string) => a.localeCompare(b))
      ),
    }),
    [results]
  );

  const [filters, setFilters] = useState(() => ({
    brand: options.brand[0],
    category: "",
    search: "",
    onlyPromoted: false,
    onlyReduced: false,
    priceFrom: PRICE_LIST[0],
    priceTo: PRICE_LIST[PRICE_LIST.length - 1],
  }));

  const [filter] = useDebounce(filters.search);

  const [sortBy, setSortBy] = useState(
    () => Object.keys(SORT_BY).pop() as keyof typeof SORT_BY
  );

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

  console.log({ filters, results });

  const list = useMemo(
    () =>
      results
        .map(({ _created, _updated = _created, ...item }) => ({
          _title: item.title.toLowerCase(),
          _price: Number(
            (item.price.length > 0 ? item.price : ["0"])
              .reverse()[0]
              .replace(/[^0-9,\.]/g, "")
              .replace(",", ".")
          ),
          _stars: Number(item.stars.replace(/[^0-9]/g, "")),
          _created,
          _updated,
          _history: {},
          ...item,
        }))
        // .filter((item: any) => (item.price.length > 1))
        .filter(
          (item: any) =>
            (item._title.match(filter) || filter.trim() === String(item.id)) &&
            filters.priceFrom <= item._price &&
            item._price <= filters.priceTo &&
            (!filters.brand || [item.brand].includes(filters.brand)) &&
            (!filters.onlyPromoted || item.proms.length > 0) &&
            (!filters.onlyReduced || item.price.length > 1)
        ),
    [
      results,
      filter,
      filters.brand,
      filters.priceFrom,
      filters.priceTo,
      filters.onlyPromoted,
      filters.onlyReduced,
    ]
  );

  const sorted = useMemo(
    () =>
      list.sort((a, b) =>
        a[sortBy] === b[sortBy]
          ? a._created > b._created
            ? 1
            : -1
          : SORT_BY[sortBy] * (a[sortBy] > b[sortBy] ? 1 : -1)
      ),
    [list, sortBy]
  );

  return (
    <div>
      <fieldset>
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
          <span>Brand</span>
          <select
            value={filters.brand}
            onChange={useCallback(
              ({ target }) =>
                setFilters((filters) => ({
                  ...filters,
                  brand: target.value,
                })),
              []
            )}
          >
            {options.brand.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Sort</span>
          <select value={sortBy} onChange={onChangeSortBy}>
            {Object.entries(SORT_BY).map(([value, label]) => (
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
                    [0, 100000, 200000, 300000, 400000, 500000].includes(value)
                      ? `${value} pln`
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
              value={filters.priceTo}
              onChange={onChangePriceTo}
            />
            <span>{`${filters.priceFrom}-${filters.priceTo} z??`}</span>
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.onlyPromoted}
              onChange={useCallback(
                ({ target }) =>
                  setFilters((filters) => ({
                    ...filters,
                    onlyPromoted: target.checked,
                  })),
                []
              )}
            />
            <span>Only Promoted</span>
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.onlyReduced}
              onChange={useCallback(
                ({ target }) =>
                  setFilters((filters) => ({
                    ...filters,
                    onlyReduced: target.checked,
                  })),
                []
              )}
            />
            <span>Only Reduced</span>
          </label>
        </div>
      </fieldset>
      <div>{`Found ${list.length} products out of a total of ${results.length}`}</div>
      <ol>
        {sorted.slice(0, 100).map(({ images, srcSet, ...item }) => (
          <li key={item.id} className={styles.Row}>
            {/* <pre>{JSON.stringify(item.price, null, 2)}</pre> */}
            <Gallery
              className={styles.Gallery}
              images={images}
              srcSet={srcSet}
            />
            <h3>
              <Link href={item.url}>{item.title}</Link>
            </h3>
            <h4>{item.brand}</h4>
            {item.label && <div>{item.label.join(" | ")}</div>}
            <Details item={item} />
            <History
              history={Object.entries(item._history).reverse()}
              item={item}
            />
            {item.reviews && <Reviews reviews={item.reviews} />}
          </li>
        ))}
      </ol>
    </div>
  );
}

const HISTORY_LIMIT = 1;

function History({ history, item }: { history: any[]; item: unknown }) {
  const [more, setMore] = useState(() =>
    history.length > HISTORY_LIMIT ? false : true
  );

  return (
    <div className={styles.History}>
      {(more ? history : history.slice(0, HISTORY_LIMIT)).map(
        ([time, prev], key, list) => (
          <Details
            key={key}
            item={prev}
            prev={key > 0 ? list[key - 1][1] : item}
            time={Number(time)}
          />
        )
      )}
      {more === false && (
        <Link onClick={(e) => (e.preventDefault(), setMore(true))}>
          Show more...
        </Link>
      )}
    </div>
  );
}

function Details({
  item,
  prev,
  time = item._updated || item._created,
}: {
  item: ProductItem;
  prev?: any;
  time?: number;
}) {
  return (
    <div className={cx(styles.Details, prev && styles.separator)}>
      <div className={styles.Sidebar}>
        {time && (
          <div className={styles.Date}>{format(time, "yyyy-MM-dd HH:mm")}</div>
        )}
        <h5>{item.price.join(" ")}</h5>
        <div
          className={cx(
            styles.Feature,
            prev && prev.stars !== item.stars && styles.changed
          )}
        >
          {item.stars}
        </div>
      </div>
      {item.proms && (
        <div
          className={cx(
            styles.Feature,
            prev && prev.proms !== item.proms && styles.changed
          )}
        >
          {item.proms.join(" | ")}
        </div>
      )}
      <ul
        className={cx(
          styles.Feature,
          prev &&
            prev.links.join(":") !== item.links.join(":") &&
            styles.changed
        )}
      >
        {item.links.map((link, key) => (
          <li key={key}>{link}</li>
        ))}
      </ul>
    </div>
  );
}

function Reviews({ reviews }: { reviews: ReviewItem[] }) {
  const [expand, setExpand] = useState(false);

  return (
    <div>
      <div>
        {/* {`Found ${list.length} vehicles out of a total of ${results.length}`}{" "} */}
        <Link
          onClick={(e) => (e.preventDefault(), setExpand((expand) => !expand))}
        >
          {expand ? "Hide reviews" : "Show reviews"}
        </Link>
      </div>
      {/* {expand && <pre>{JSON.stringify(reviews, null, 2)}</pre>} */}
      {expand && (
        <ul>
          {reviews.map(({ author, body, date, rating = "-" }, key) => (
            <li key={key}>
              <div>
                <b>
                  {date}, {author} ({rating})
                </b>
              </div>
              <div>{body}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Section() {
  return (
    <div className={styles.Section}>
      <h2>Products</h2>
      <Data />
    </div>
  );
}
