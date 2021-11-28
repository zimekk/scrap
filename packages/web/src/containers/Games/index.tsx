import React, {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createAsset } from "use-asset";
import useDebounce from "../useDebounce";
import { Spinner } from "../../components/Spinner";
import styles from "./styles.module.scss";

const SORT_BY = {
  LastModifiedDate: -1,
  ProductTitle: 1,
  PublisherName: 1,
  _price: 1,
  _created: -1,
};

const PRICE_LIST = [0, 100, 200, 300, 400, 500, 1000];

// https://github.com/pmndrs/use-asset#dealing-with-async-assets
const asset = createAsset(async (version) => {
  const res = await fetch(`api/games/data.json?${version}`);
  return await res.json().then(({ Products }) => ({ results: Products }));
});

const image = createAsset(async (src) => {
  return new Promise((onload) => {
    const img = new Image();
    Object.assign(img, {
      onload,
      src,
    });
  });
});

function Img({ src, ...props }) {
  image.read(src);

  return <img src={src} {...props} referrerPolicy="no-referrer" />;
}

function Loader() {
  return (
    <div className={styles.Loader}>
      <Spinner />
    </div>
  );
}

function Gallery({ images }: any) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleObserve = ([{ isIntersecting }]) => {
      if (isIntersecting) {
        setInView(true);
      }
    };
    if (ref.current instanceof HTMLElement) {
      const observer = new IntersectionObserver(handleObserve, {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      });
      observer.observe(ref.current);
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }
  }, [ref]);

  return images.length ? (
    <div ref={ref} className={styles.Gallery}>
      <Suspense fallback={<Loader />}>
        {inView &&
          images.map((image, index) => (
            <Img key={index} src={image} alt={`Image #${index + 1}`} />
          ))}
      </Suspense>
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

  const [sortBy, setSortBy] = useState(() => Object.keys(SORT_BY)[0]);

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
        .map(
          ({
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
          }: any) => ({
            _filter: ProductTitle.toLowerCase(),
            _price: Price.MSRP,
            _history: {},
            Images: Images.sort((a, b) => a.Width - b.Width)
              .slice(0, 1)
              .map(({ Uri }) => Uri),
            LastModifiedDate: new Date(LastModifiedDate),
            Price,
            ProductDescription,
            ProductTitle,
            PublisherName,
          })
        )
        .filter(
          (item: any) =>
            (item._filter.match(filter) || filter.trim() === String(item.id)) &&
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
              value={priceTo}
              onChange={onChangePriceTo}
            />
            <span>{`${priceFrom}-${priceTo} pln`}</span>
          </label>
        </div>
      </fieldset>
      <div>{`Found ${list.length} products out of a total of ${results.length}`}</div>
      <ol>
        {sorted
          .slice(0, 100)
          .map(
            (
              {
                Images,
                LastModifiedDate,
                Price,
                ProductDescription,
                ProductTitle,
                PublisherName,
              },
              key: number
            ) => (
              <li key={key} className={styles.Row}>
                <Gallery images={Images} />
                <h3>
                  <Link href={`#`}>{ProductTitle}</Link>
                </h3>
                <h4>{PublisherName}</h4>
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
                    {[Price.WholesalePrice, Price.WholesaleCurrencyCode].join(
                      " "
                    )}
                  </span>
                </h5>
                <div>{LastModifiedDate.toISOString().split("T")[0]}</div>
              </li>
            )
          )}
      </ol>
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
