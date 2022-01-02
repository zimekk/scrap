import React, { useCallback, useMemo, useState } from "react";
import { format } from "date-fns";
import { createAsset } from "use-asset";
import slug from "slug";
import useDebounce from "../useDebounce";
import { Gallery } from "../../components/Gallery";
import { Link } from "../../components/Link";
import styles from "./styles.module.scss";

const SORT_BY = {
  LastModifiedDate: -1,
  OriginalReleaseDate: -1,
  ProductTitle: 1,
  PublisherName: 1,
  _price: 1,
  _rating: -1,
  _created: -1,
};

const PRICE_LIST = [0, 100, 200, 300, 400, 500, 1000];

// https://github.com/pmndrs/use-asset#dealing-with-async-assets
const asset = createAsset(async (version) => {
  const res = await fetch(`api/games/data.json?${version}`);
  return await res.json().then(({ Products }) => ({ results: Products }));
});

const createHref = ({
  ProductId,
  ProductTitle,
}: {
  ProductId: string;
  ProductTitle: string;
}) =>
  `https://www.xbox.com/pl-pl/games/store/${slug(ProductTitle)}/${ProductId}`;

const unify = ({
  DisplaySkuAvailabilities: [
    {
      Availabilities: [
        {
          OrderManagementData: { Price },
        },
      ],
    },
  ],
  LocalizedProperties: [
    { Images, ProductDescription, ProductTitle, PublisherName },
  ],
  LastModifiedDate,
  MarketProperties: [{ OriginalReleaseDate, UsageData }],
  ProductId,
  Properties: { Categories },
}: any) => ({
  _filter: ProductTitle.toLowerCase(),
  _price: Price.MSRP,
  _rating: UsageData[UsageData.length - 1].AverageRating,
  Categories,
  Images: Images.sort((a: any, b: any) => a.Width - b.Width)
    .slice(0, 1)
    .map(({ Uri }: { Uri: string }) => Uri),
  LastModifiedDate: new Date(LastModifiedDate),
  OriginalReleaseDate: new Date(OriginalReleaseDate),
  Price,
  ProductDescription,
  ProductId,
  ProductTitle,
  PublisherName,
  UsageData,
});

function Data({ version = "v1" }) {
  const { results } = asset.read(version); // As many cache keys as you need

  const options = useMemo(
    () => ({
      category: Object.keys(
        results.reduce(
          (
            result: object,
            {
              Properties: { Categories },
            }: { Properties: { Categories: [string] } }
          ) =>
            Object.assign(
              result,
              (Categories || []).reduce(
                (result, Category) =>
                  Object.assign(result, { [Category]: Category }),
                {}
              )
            ),
          { "": "" }
        )
      ).sort((a, b) => a.localeCompare(b)),
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
        .map(({ _history = {}, ...item }: any) => ({
          _history: [item]
            .concat(Object.values(_history).reverse())
            .map(unify)
            .filter(
              (item, i, list) =>
                i === 0 || JSON.stringify(item) !== JSON.stringify(list[i - 1])
            ),
          ...unify(item),
        }))
        .filter(
          (item: any) =>
            (!filters.category ||
              (item.Categories || []).includes(filters.category)) &&
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
        {sorted.slice(0, 100).map(
          (
            {
              Images,
              _history,
              ...rest
            }: {
              Categories: [string];
              Images: string[];
              LastModifiedDate: Date;
              OriginalReleaseDate: Date;
              Price: any;
              ProductId: string;
              ProductTitle: string;
              PublisherName: string;
              UsageData: [
                {
                  AggregateTimeSpan: string;
                  AverageRating: number;
                  RatingCount: number;
                }
              ];
              _history: any;
            },
            key: number
          ) => (
            <li key={rest.ProductId} className={styles.Row}>
              <Gallery className={styles.Gallery} images={Images} />
              <Summary {...rest} />
              <History history={_history} />
            </li>
          )
        )}
      </ol>
    </div>
  );
}

const HISTORY_LIMIT = 2;

function History({ history }: { history: any[] }) {
  const [more, setMore] = useState(() =>
    history.length > HISTORY_LIMIT ? false : true
  );

  return (
    <div className={styles.History}>
      {(more ? history : history.slice(0, HISTORY_LIMIT)).map(
        (item: any, key: number) => (
          <Details key={key} {...item} />
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

function Summary({
  Categories,
  OriginalReleaseDate,
  // LastModifiedDate,
  ProductId,
  ProductTitle,
  PublisherName,
}: {
  Categories: [string];
  OriginalReleaseDate: Date;
  // LastModifiedDate: Date;
  ProductId: string;
  ProductTitle: string;
  PublisherName: string;
}) {
  return (
    <div className={styles.Summary}>
      {OriginalReleaseDate && (
        <h6>
          <span>OriginalReleaseDate: </span>
          {format(OriginalReleaseDate, "yyyy-MM-dd")}
        </h6>
      )}
      <h3>
        <Link href={createHref({ ProductId, ProductTitle })}>
          {ProductTitle}
        </Link>
      </h3>
      <h4>{PublisherName}</h4>
      {Categories && (
        <h5>
          <span>Categories: </span>
          {Categories.join(", ")}
        </h5>
      )}
      {/* <div>{format(LastModifiedDate, "yyyy-MM-dd HH:mm")}</div> */}
    </div>
  );
}

function Details({
  LastModifiedDate,
  Price,
  UsageData,
}: {
  LastModifiedDate: Date;
  Price: {
    CurrencyCode: string;
    ListPrice: number;
    MSRP: number;
    WholesaleCurrencyCode: string;
    WholesalePrice: number;
  };
  UsageData: [
    {
      AggregateTimeSpan: string;
      AverageRating: number;
      RatingCount: number;
    }
  ];
}) {
  return (
    <div className={styles.Details}>
      <h5>
        {Price.ListPrice < Price.MSRP ? (
          <span className={styles.Sale}>
            <s>{[Price.MSRP, Price.CurrencyCode].join(" ")}</s>
          </span>
        ) : (
          <span>{[Price.MSRP, Price.CurrencyCode].join(" ")}</span>
        )}
        {" / "}
        <span>{[Price.ListPrice, Price.CurrencyCode].join(" ")}</span>
        {" / "}
        <span>
          {[Price.WholesalePrice, Price.WholesaleCurrencyCode].join(" ")}
        </span>
      </h5>
      <div>
        <span>{format(LastModifiedDate, "yyyy-MM-dd HH:mm")}</span>
        {UsageData && (
          <span>
            {" -- "}
            <span>AverageRating: </span>
            {UsageData.map(
              ({ AggregateTimeSpan, AverageRating, RatingCount }, key) => (
                <span key={key}>
                  {AverageRating} ({RatingCount}/{AggregateTimeSpan}){" "}
                </span>
              )
            )}
          </span>
        )}
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <div className={styles.Section}>
      <h2>Games</h2>
      <Data />
    </div>
  );
}
