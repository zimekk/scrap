import React, {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { createAsset } from "use-asset";
import { format } from "date-fns";
import type { ItemType } from "@dev/cli/src/services/HotShotService/types";
import { Gallery } from "../../components/Gallery";
import { Link } from "../../components/Link";
import styles from "./styles.module.scss";

// https://github.com/pmndrs/use-asset#dealing-with-async-assets
const asset = createAsset(async (version) => {
  const res = await fetch(`api/hot-shots/data.json?${version}`);
  return await res.json().then((list) => list);
});

const getPercentage = ({
  Price,
  OldPrice = Price,
}: {
  Price: number;
  OldPrice: number;
}) => (1 - Price / OldPrice) * 100;

function Product({ item }: { item: ItemType }) {
  return (
    <div className={styles.Product}>
      <Gallery
        className={styles.Gallery}
        images={item.Product.Photos.map(({ ThumbnailUrl }) => ThumbnailUrl)}
        srcSet={item.Product.Photos.map(({ Url }) => Url)}
      />
      <div className={styles.Right}>
        <div>{format(new Date(item.PromotionEnd), "yyyy-MM-dd HH:mm")}</div>
        {item.OldPrice ? (
          <span className={styles.PreviousPrice}>{`${new Intl.NumberFormat(
            "pl-PL",
            {
              minimumFractionDigits: 2,
            }
          ).format(item.OldPrice)} PLN`}</span>
        ) : null}
        <span className={styles.Price}>{`${new Intl.NumberFormat("pl-PL", {
          minimumFractionDigits: 2,
        }).format(item.Price)} PLN`}</span>
        {item.OldPrice ? (
          <span className={styles.Percentage}>{`(${new Intl.NumberFormat(
            "pl-PL",
            {
              maximumFractionDigits: 2,
            }
          ).format(getPercentage(item))}%)`}</span>
        ) : null}
      </div>
      <div>
        <Link
          href={item.Product.WebUrl}
        >{`[${item.Product.Id}] ${item.Product.Name}`}</Link>
        <div>{item.Product.Producer.Name}</div>
        <div>{item.PromotionName}</div>
        <div>{item.PromotionGainText}</div>
        {/* <pre>{JSON.stringify(item, null, 2)}</pre> */}
      </div>
    </div>
  );
}

const PRODUCTS_LIMIT = 5;

function Products({ products }: { products: ItemType[] }) {
  const [more, setMore] = useState(() =>
    products.length > PRODUCTS_LIMIT ? false : true
  );

  return (
    <div>
      {(more ? products : products.slice(0, PRODUCTS_LIMIT)).map(
        (item, key) => (
          <div key={key} className={styles.Row}>
            <Product item={item} />
          </div>
        )
      )}
      {more === false && (
        <Link onClick={(e) => (e.preventDefault(), setMore(true))}>
          {`${products.length - PRODUCTS_LIMIT} więcej...`}
        </Link>
      )}
    </div>
  );
}

function Results({ results, queries }: { results: ItemType[]; queries: any }) {
  return (
    <Products
      products={results.filter(
        (item) =>
          (queries.search === "" ||
            item.PromotionName.toLowerCase().match(queries.search)) &&
          (queries.reduce === 0 || queries.reduce <= getPercentage(item))
      )}
    />
  );
}

const REDUCE_LIST = [0, 10, 20, 30, 50, 70, 90];

function Filters({ filters, setFilters }: { filters: any; setFilters: any }) {
  return (
    <fieldset>
      <label>
        <span>Search</span>
        <input
          type="search"
          value={filters.search}
          onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
            ({ target }) =>
              setFilters((filters) => ({
                ...filters,
                search: target.value,
              })),
            []
          )}
        />
      </label>{" "}
      <label>
        <span>Reduce</span>
        <input
          type="range"
          list="reduce-list"
          min={REDUCE_LIST[0]}
          max={[...REDUCE_LIST].pop()}
          value={filters.reduce}
          onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
            ({ target }) =>
              setFilters((filters) => ({
                ...filters,
                reduce: Number(target.value),
              })),
            []
          )}
        />
        <datalist id="reduce-list">
          {REDUCE_LIST.map((value) => (
            <option
              key={value}
              value={value}
              label={REDUCE_LIST.includes(value) ? `${value}%` : undefined}
            ></option>
          ))}
        </datalist>
        <span>{`${filters.reduce}%`}</span>
      </label>
    </fieldset>
  );
}

export default function Section({ version = "v1" }) {
  const { results } = asset.read(version) as {
    results: ItemType[];
  };

  const [filters, setFilters] = useState(() => ({
    reduce: REDUCE_LIST[0],
    search: "",
  }));

  const [queries, setQueries] = useState(() => filters);

  const search$ = useMemo(() => new Subject<any>(), []);

  useEffect(() => {
    const subscription = search$
      .pipe(
        map(({ search, ...filters }) =>
          JSON.stringify({
            ...queries,
            ...filters,
            search: search.toLowerCase().trim(),
          })
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

  console.log({ results, filters, queries });

  return (
    <div className={styles.Section}>
      <h2>HotShots</h2>
      <Filters filters={filters} setFilters={setFilters} />
      <Results results={results} queries={queries} />
    </div>
  );
}
