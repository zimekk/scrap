import React, {
  type ChangeEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { IntlMessageFormat } from "intl-messageformat";
import { createAsset } from "use-asset";
import { format } from "date-fns";
import type {
  ProductType,
  PromoType,
} from "@dev/cli/src/services/PromoService/types";
import { Gallery } from "../../components/Gallery";
import { Link } from "../../components/Link";
import styles from "./styles.module.scss";

// https://github.com/pmndrs/use-asset#dealing-with-async-assets
const asset = createAsset(async (version) => {
  const res = await fetch(`api/promo/data.json?${version}`);
  return await res.json();
});

const getPercentage = ({
  price,
  previous_price = price,
}: {
  price: number;
  previous_price: number;
}) => (1 - price / previous_price) * 100;

function Product({ item }: { item: ProductType }) {
  return (
    <span className={styles.Product}>
      <Gallery className={styles.Gallery} images={[item.photo]} />
      <span>
        <Link href={item.url}>{`[${item.id}] ${item.name}`}</Link>
        <div>
          <span className={styles.Rates}>
            {item.rate_count
              ? `${new Intl.NumberFormat("pl-PL", {}).format(
                  item.rate
                )} (${new IntlMessageFormat(
                  `{rate_count, plural,
                one {# opinia}
                few {# opinie}
                many {# opinii}
                other {# opinii}
              }`,
                  "pl-PL"
                ).format(item)})`
              : `Brak opinii`}
          </span>
        </div>
        <div>
          {item.previous_price ? (
            <span className={styles.PreviousPrice}>{`${new Intl.NumberFormat(
              "pl-PL",
              {
                minimumFractionDigits: 2,
              }
            ).format(item.previous_price)} PLN`}</span>
          ) : null}
          <span className={styles.Price}>{`${new Intl.NumberFormat("pl-PL", {
            minimumFractionDigits: 2,
          }).format(item.price)} PLN`}</span>
          {item.previous_price ? (
            <span className={styles.Percentage}>{`(${new Intl.NumberFormat(
              "pl-PL",
              {
                maximumFractionDigits: 2,
              }
            ).format(getPercentage(item))}%)`}</span>
          ) : null}
        </div>
        {/* <pre>{JSON.stringify(item, null, 2)}</pre> */}
      </span>
    </span>
  );
}

function Products({ products }: { products: ProductType[] }) {
  const [limit, setLimit] = useState(() => 5);

  return (
    <div>
      {useMemo(() => products.slice(0, limit), [limit, products]).map(
        (item, key) => (
          <div key={key} className={styles.Row}>
            <Product item={item} />
          </div>
        )
      )}
      {products.length > limit && (
        <Link
          onClick={(e) => (e.preventDefault(), setLimit((limit) => limit + 25))}
        >
          {`${products.length - limit} więcej...`}
        </Link>
      )}
    </div>
  );
}

function Promos({ promos, queries }: { promos: PromoType[]; queries: any }) {
  return (
    <div>
      {promos
        .filter(
          (item) => (queries.search === "" && queries.reduce === 0) || item.data
        )
        .map(({ name, desc, href, data }, key) => (
          <div key={key}>
            <h4>
              <Link href={href}>{name}</Link>
              {data &&
                data.general &&
                (({ date_start, date_stop }) =>
                  ` (${format(
                    new Date(date_start),
                    "yyyy-MM-dd HH:mm"
                  )} - ${format(new Date(date_stop), "yyyy-MM-dd HH:mm")})`)(
                  data.general
                )}
            </h4>
            <p>{desc}</p>
            {data && (
              <Products
                products={data.products.filter(
                  (item) =>
                    (queries.search === "" ||
                      item.name.toLowerCase().match(queries.search)) &&
                    (queries.reduce === 0 ||
                      queries.reduce <= getPercentage(item))
                )}
              />
            )}
          </div>
        ))}
    </div>
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
  const { promos } = asset.read(version) as {
    promos: PromoType[];
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

  console.log({ promos, filters, queries });

  return (
    <div className={styles.Section}>
      <h2>Promos</h2>
      <Filters filters={filters} setFilters={setFilters} />
      <Promos promos={promos} queries={queries} />
    </div>
  );
}
