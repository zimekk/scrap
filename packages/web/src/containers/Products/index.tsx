import React, { useCallback, useMemo, useState } from "react";
import { createAsset } from "use-asset";
import useDebounce from "../useDebounce";
import styles from "./styles.module.scss";

const SORT_BY = {
  title: 1,
  brand: 1,
  _price: 1,
  _stars: -1,
  _created: -1,
};

const PRICE_LIST = [
  0, 100, 200, 300, 400, 500, 1000, 1500, 2000, 3000, 4000, 5000,
];

// https://github.com/pmndrs/use-asset#dealing-with-async-assets
const asset = createAsset(async (version) => {
  const res = await fetch(`api/products/data.json?${version}`);
  return await res.json();
});

function Gallery({ images }) {
  return images.length ? (
    <div className={styles.Gallery}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image #${index + 1}`}
          referrerPolicy="no-referrer"
        />
      ))}
    </div>
  ) : null;
}

function Link({ href, ...props }) {
  const hash = href[0] === "#";

  return (
    <a
      href={href}
      target={hash ? undefined : "_blank"}
      rel={hash ? undefined : "noopener noreferrer"}
      {...props}
    />
  );
}

function Data({ version = "v1" }) {
  const { results } = asset.read(version); // As many cache keys as you need

  const [search, setSearch] = useState("");
  const [filter] = useDebounce(search);

  const onChangeSearch = useCallback(
    ({ target }) => setSearch(target.value),
    []
  );

  const [sortBy, setSortBy] = useState("transactionalPrice");

  const onChangeSortBy = useCallback(
    ({ target }) => setSortBy(target.value),
    []
  );

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

  console.log({ results });

  const list = useMemo(
    () =>
      results
        .map((item: any) => ({
          _image: item.image.filter((src) => src.match(/small/)),
          _title: item.title.toLowerCase(),
          _price: Number(
            item.price
              .reverse()[0]
              .replace(/[^0-9,]/g, "")
              .replace(",", ".")
          ),
          _stars: Number(item.stars.replace(/[^0-9]/g, "")),
          ...item,
        }))
        .filter(
          (item: any) =>
            (item._title.match(filter) || filter.trim() === String(item.id)) &&
            priceFrom <= item._price &&
            item._price <= priceTo
        ),
    [results, filter, priceFrom, priceTo]
  );

  const sorted = useMemo(
    () =>
      list.sort((a, b) => SORT_BY[sortBy] * (a[sortBy] > b[sortBy] ? 1 : -1)),
    [list, sortBy]
  );

  return (
    <div>
      <fieldset>
        <label>
          <span>Search</span>
          <input type="search" value={search} onChange={onChangeSearch} />
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
              value={priceFrom}
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
              value={priceTo}
              onChange={onChangePriceTo}
            />
            <span>{`${priceFrom}-${priceTo} pln`}</span>
          </label>
        </div>
      </fieldset>
      <div>{`Found ${list.length} products out of a total of ${results.length}`}</div>
      <ol>
        {sorted.slice(0, 100).map(({ id, _image, ...item }, key: number) => (
          <li key={key} className={styles.Row}>
            <Gallery images={_image} />
            <h3>
              <Link href={`${process.env.STORE_URL}p/${id}`}>{item.title}</Link>
            </h3>
            <h4>{item.brand}</h4>
            <h5>{item.price.join(" ")}</h5>
            <div>{item.stars}</div>
            <div>{item.label.join(" | ")}</div>
            {item.proms && <div>{item.proms.join(" | ")}</div>}
            <ul>
              {item.links.map((link, key) => (
                <li key={key}>{link.join(" | ")}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
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
