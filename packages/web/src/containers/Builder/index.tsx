import React, {
  ChangeEvent,
  ChangeEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { encode } from "@darthmaim/barcode";
import { Barcode } from "@darthmaim/react-barcode";
// import { createAsset } from "use-asset";
import { Gallery } from "../../components/Gallery";
import { Link } from "../../components/Link";
import { Shapes } from "../../components/Shapes";
import styles from "./styles.module.scss";

// https://github.com/pmndrs/use-asset#dealing-with-async-assets
// const asset = createAsset(async (version) => {
//   const res = await fetch(`api/games/data.json?${version}`);
//   return await res.json().then(({ Products }) => ({ results: Products }));
// });

function Filters() {
  const [filters, setFilters] = useState(() => ({
    search: "5060301699247",
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

  const barcode = useMemo(() => {
    try {
      encode(queries.search);
    } catch (e) {
      return null;
    }
    return queries.search;
  }, [queries.search]);

  // console.log({ filters, queries });

  return (
    <fieldset>
      <label>
        <span className={styles.EanLabel}>EAN</span>
        <input
          className={styles.EanValue}
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
      </label>
      {barcode && (
        <div className={styles.BarcodeContainer}>
          <Barcode value={barcode} />
        </div>
      )}
    </fieldset>
  );
}

function Select({
  name,
  checked,
  onChange,
}: {
  name: string;
  checked: boolean;
  onChange: ChangeEventHandler;
}) {
  return (
    <input type="radio" name={name} checked={checked} onChange={onChange} />
  );
}

// copy(JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent))

interface IProduct {
  name: string;
  productID: string;
  image: string[];
  brand: { name: string };
  offers: { price: number; priceCurrency: "PLN" };
}

function Product({ item }: { item: IProduct }) {
  return (
    <span className={styles.Product}>
      {item && (
        <span>
          <Gallery
            className={styles.Gallery}
            images={typeof item.image === "string" ? [item.image] : item.image}
          />
          <span>
            [
            <Link href={`https://www.x-kom.pl/szukaj?q=${item.productID}`}>
              {item.productID}
            </Link>
            ] <b>{item.name}</b>{" "}
            {`(${new Intl.NumberFormat("pl-PL", {
              minimumFractionDigits: 2,
            }).format(item.offers.price)} ${item.offers.priceCurrency})`}
          </span>
        </span>
      )}
    </span>
  );
}

function Builder({ products }: { products: IProduct[] }) {
  const productById = useMemo<Record<string, IProduct>>(
    () =>
      products.reduce(
        (result, item) => Object.assign(result, { [item.productID]: item }),
        {}
      ),
    [products]
  );
  const [parts] = useState([
    {
      name: "Obudowa",
      items: [703392, 623745, 585790, 613706],
    },
    {
      name: "Zasilacz",
      items: [660704, 421617, 335572, 578560, 625399, 575663],
    },
    {
      name: "Płyta główna",
      items: [
        1065857, 572284, 569337, 569339, 722483, 533018, 504430, 613674, 693244,
      ],
    },
    {
      name: "Procesor",
      items: [735703, 735696, 665238, 597430, 702238],
    },
    {
      name: "Karta graficzna",
      items: [
        507702, 699932, 332036, 676398, 662309, 541516, 733918, 715688, 717581,
        319739, 669592, 646267, 735397,
      ],
    },
    {
      name: "Pamięć RAM",
      items: [440686, 667295, 649156, 624120, 440683, 1043023],
    },
    {
      name: "Chłodzenie CPU",
      items: [691059, 453536],
    },
    {
      name: "Wentylator",
      items: [0, 290551],
    },
  ]);
  const [selected, setSelected] = useState<number[]>(() =>
    parts.map(({ items }) => items[0]).filter(Boolean)
  );

  return (
    <div>
      {parts.map(({ name, items }, key) => (
        <div key={key}>
          <h4>{name}</h4>
          {items.filter(Boolean).map((id) => (
            <div key={id} className={styles.Row}>
              <Select
                name={name}
                checked={selected.includes(id)}
                onChange={useCallback(
                  ({ target }: ChangeEvent<HTMLInputElement>) => {
                    setSelected((selected) =>
                      selected
                        .filter((id) => !items.includes(id))
                        .concat(target.checked ? [id] : [])
                    );
                  },
                  [items]
                )}
              />
              <Product item={productById[String(id)]} />
            </div>
          ))}
        </div>
      ))}
      <div>
        <h3>Summary</h3>
        <div>{`${new Intl.NumberFormat("pl-PL", {
          minimumFractionDigits: 2,
        }).format(
          selected
            .map((id) => productById[id])
            .filter(Boolean)
            .map((product) => product.offers.price)
            .reduce((sum, price) => sum + price, 0)
        )} PLN`}</div>
      </div>
    </div>
  );
}

export default function Section() {
  const [products] = useState<IProduct[]>(() => require("./products.json"));
  console.log({ products });

  return (
    <div className={styles.Section}>
      <h2>Builder</h2>
      <Shapes />
      <Filters />
      <Builder products={products} />
    </div>
  );
}
