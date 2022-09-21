import React, { useState } from "react";
import IntlMessageFormat from "intl-messageformat";
import { createAsset } from "use-asset";
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
            ).format((1 - item.price / item.previous_price) * 100)}%)`}</span>
          ) : null}
        </div>
        {/* <pre>{JSON.stringify(item, null, 2)}</pre> */}
      </span>
    </span>
  );
}

const PRODUCTS_LIMIT = 3;

function Products({ products }: { products: ProductType[] }) {
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
          more...
        </Link>
      )}
    </div>
  );
}

function Promos({ promos }: { promos: PromoType[] }) {
  return (
    <div>
      {promos.map(({ name, desc, href, data }, key) => (
        <div key={key}>
          <h4>
            <Link href={href}>{name}</Link>
          </h4>
          <p>{desc}</p>
          {data && <Products products={data.products} />}
        </div>
      ))}
    </div>
  );
}

export default function Section({ version = "v1" }) {
  const { promos } = asset.read(version) as {
    promos: PromoType[];
  };
  console.log({ promos });

  return (
    <div className={styles.Section}>
      <h2>Promos</h2>
      <Promos promos={promos} />
    </div>
  );
}
