import React, { Suspense, useCallback, useMemo, useState } from "react";
import { createAsset } from "use-asset";
import createKDTree from "static-kdtree";
import { useInView } from "react-intersection-observer";
import createPersistedState from "use-persisted-state";
import cx from "classnames";
import Chart from "./Chart";
import Map, { useBounds } from "./Map";
import { Spinner } from "../../components/Spinner";
import useDebounce from "../useDebounce";
import styles from "./styles.module.scss";

const SORT_BY = {
  created: -1,
  registration: -1,
  transactionalPrice: 1,
  mileage: 1,
  consumptionFuel: 1,
  productionYear: -1,
  powerHP: -1,
  newPrice: -1,
  optionsPrice: -1,
  accessoriesPrice: -1,
  warranty: -1,
  modelCode: 1,
  seriesCode: 1,
  title: 1,
};
const RADIUS_LIST = [1, 3, 5, 10, 20, 50, 100, 500];
const PRICE_LIST = [
  0, 100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000,
  1000000,
];
const POWER_LIST = [0, 100, 150, 200, 250, 300, 400, 500, 600, 700, 800, 900];
const TYPES = {
  "": "",
  N: "New",
  U: "Used",
};
const YEAR_LIST = [...Array(15)]
  .map((_, i) => new Date().getFullYear() - i)
  .reverse();

const useFavorites = createPersistedState("favorites-vehicles");

// https://github.com/pmndrs/use-asset#dealing-with-async-assets
const asset = createAsset(async (version) => {
  const res = await fetch(`api/vehicles/data.json?${version}`);
  return await res
    .json()
    .then(({ $list }) => $list)
    .then((list) => ({
      results: list,
      options: list.reduce(
        (options, item) =>
          [
            "dealer",
            "bodyType",
            "brand",
            "color",
            "emissionStandard",
            "fuel",
            "series",
            "seriesCode",
            "modelCode",
            "transmission",
            "warranty",
          ].reduce(
            (options, prop) => ({
              ...options,
              [prop]: Object.assign(
                {},
                options[prop],
                typeof item[prop] === "object"
                  ? {
                      [item[prop].id]: item[prop].label || item[prop].name,
                    }
                  : {
                      [item[prop]]: item[prop],
                    }
              ),
            }),
            options
          ),
        {}
      ),
    }))
    .then(({ options, ...rest }) => {
      Object.keys(options).forEach((key) =>
        Object.assign(options, {
          [key]: Object.entries(options[key])
            .sort(([a], [b]) => (String(a) > String(b) ? 1 : -1))
            .reduce(
              (result, [key, value]) => Object.assign(result, { [key]: value }),
              {}
            ),
        })
      );
      return { options, ...rest };
    });
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
  const [ref, inView] = useInView({ delay: 100, triggerOnce: true });

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

function Button({ ...props }) {
  return <button {...props} />;
}

function Toggle({ children, ...props }) {
  return (
    <label>
      <input type="checkbox" {...props} />
      <span>{children}</span>
    </label>
  );
}

function Color({ color }) {
  return (
    <a
      className={styles.Color}
      style={{ backgroundColor: color.code }}
      title={color.label}
    ></a>
  );
}

function Link({ href = "#", ...props }) {
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
  const { results, options } = asset.read(version); // As many cache keys as you need

  const [search, setSearch] = useState("");
  const [filter] = useDebounce(search);

  const onChangeSearch = useCallback(
    ({ target }) => setSearch(target.value),
    []
  );

  const [criteria, setCriteria] = useState(() =>
    Object.keys(options).reduce(
      (criteria, prop) =>
        Object.assign(criteria, {
          [prop]: "",
        }),
      {}
    )
  );

  const onChangeCriteria = useCallback(
    ({ target }) =>
      setCriteria((criteria) => ({
        ...criteria,
        [target.name]: target.value,
      })),
    []
  );

  const [sortBy, setSortBy] = useState("transactionalPrice");

  const onChangeSortBy = useCallback(
    ({ target }) => setSortBy(target.value),
    []
  );

  const [type, setType] = useState("");

  const onChangeType = useCallback(({ target }) => setType(target.value), []);

  const [radius, setRadius] = useState(RADIUS_LIST[RADIUS_LIST.length - 1]);

  const onChangeRadius = useCallback(
    ({ target }) => setRadius(Number(target.value)),
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

  const [powerFrom, setPowerFrom] = useState(POWER_LIST[0]);
  const [powerTo, setPowerTo] = useState(POWER_LIST[POWER_LIST.length - 1]);

  const onChangePowerFrom = useCallback(
    ({ target }) =>
      setPowerTo((to) => {
        const from = Number(target.value);
        setPowerFrom(from);
        return to < from ? from : to;
      }),
    []
  );

  const onChangePowerTo = useCallback(
    ({ target }) =>
      setPowerFrom((from) => {
        const to = Number(target.value);
        setPowerTo(to);
        return to > from ? from : to;
      }),
    []
  );

  const [yearFrom, setYearFrom] = useState(YEAR_LIST[0]);
  const [yearTo, setYearTo] = useState(YEAR_LIST[YEAR_LIST.length - 1]);

  const onChangeYearFrom = useCallback(
    ({ target }) =>
      setYearTo((to) => {
        const from = Number(target.value);
        setYearFrom(from);
        return to < from ? from : to;
      }),
    []
  );

  const onChangeYearTo = useCallback(
    ({ target }) =>
      setYearFrom((from) => {
        const to = Number(target.value);
        setYearTo(to);
        return to > from ? from : to;
      }),
    []
  );

  const onClickCompare = useCallback(({ target }) => {
    const id = Number(target.value);
    const getPoint = (item) => [
      item.capacity,
      item.powerHP,
      item.consumptionFuel,
      item.emission,
      item.newPrice,
      item.optionsPrice,
      item.productionYear,
      item.age,
      item.mileage,
      item.transactionalPrice,
      item.warranty,
    ];

    const tree = createKDTree(results.map(getPoint));

    console.table(
      tree
        .knn(
          getPoint(
            results.find((item) => item.id === id),
            10
          )
        )
        .slice(0, 10)
        .map((index) => results[index])
        .map((item) => [
          item.id,
          item.title,
          item.capacity,
          item.powerHP,
          item.consumptionFuel,
          item.emission,
          item.newPrice,
          item.optionsPrice,
          item.productionYear,
          item.age,
          item.mileage,
          item.transactionalPrice,
          item.warranty,
        ])
    );
  }, []);

  console.log({ options, results });

  const list = useMemo(
    () =>
      results
        .map((item, i) => {
          const {
            id,
            dealer: { name, lat, lng },
          } = item;
          return {
            i,
            id,
            position: { lat, lng },
            name,
            item,
          };
        })
        .filter(
          ({ item }) =>
            (item.title.toLowerCase().match(filter) ||
              filter
                .split(",")
                .map((s) => s.trim())
                .includes(String(item.id))) &&
            ["", item.isNew ? "N" : "U"].includes(type) &&
            priceFrom <= item.transactionalPrice &&
            item.transactionalPrice <= priceTo &&
            powerFrom <= item.powerHP &&
            item.powerHP <= powerTo &&
            yearFrom <= item.productionYear &&
            item.productionYear <= yearTo &&
            Object.entries(criteria).findIndex(
              ([prop, value]) =>
                ![
                  String(
                    typeof item[prop] === "object" ? item[prop].id : item[prop]
                  ),
                  "",
                ].includes(value)
            ) === -1
        ),
    [
      results,
      filter,
      type,
      criteria,
      yearFrom,
      yearTo,
      priceFrom,
      priceTo,
      powerFrom,
      powerTo,
    ]
  );

  const bounds = useBounds(
    list.length ? list : [{ position: { lat: 52.232855, lng: 20.921111 } }]
  );
  const [center, setCenter] = useState(() => bounds.getCenter());

  const nearby = useMemo(
    () =>
      list.filter(
        ({ position }) => center.distanceTo(position) < radius * 1000
      ),
    [list, center, radius]
  );

  const sorted = useMemo(
    () =>
      list.sort(
        (a, b) => SORT_BY[sortBy] * (a.item[sortBy] > b.item[sortBy] ? 1 : -1)
      ),
    [list, sortBy]
  );

  const [favorites, setFavorites] = useFavorites([]);

  return (
    <div>
      <Map
        bounds={bounds}
        center={center}
        setCenter={setCenter}
        list={nearby}
      />
      <Chart list={list} />
      <fieldset>
        <div>
          <label>
            <span>Type</span>
            <select value={type} onChange={onChangeType}>
              {Object.entries(TYPES).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
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
          <label>
            <span>Radius</span>
            <input
              type="range"
              list="range-list"
              min={RADIUS_LIST[0]}
              max={RADIUS_LIST[RADIUS_LIST.length - 1]}
              value={radius}
              onChange={onChangeRadius}
            />
            <datalist id="range-list">
              {RADIUS_LIST.map((value) => (
                <option
                  key={value}
                  value={value}
                  label={
                    [1, 25, 100].includes(value) ? `${value} km` : undefined
                  }
                ></option>
              ))}
            </datalist>
            <span>{`max ${radius} km`}</span>
          </label>
        </div>
        <div>
          <label>
            <span>Year From</span>
            <input
              type="range"
              list="year-list"
              min={YEAR_LIST[0]}
              max={YEAR_LIST[YEAR_LIST.length - 1]}
              value={yearFrom}
              onChange={onChangeYearFrom}
            />
            <datalist id="year-list">
              {YEAR_LIST.map((value) => (
                <option
                  key={value}
                  value={value}
                  label={
                    [0, 2010, 2015, 2020].includes(value)
                      ? `${value}`
                      : undefined
                  }
                ></option>
              ))}
            </datalist>
          </label>
          <label>
            <span>Year To</span>
            <input
              type="range"
              list="year-list"
              min={YEAR_LIST[0]}
              max={YEAR_LIST[YEAR_LIST.length - 1]}
              value={yearTo}
              onChange={onChangeYearTo}
            />
            <span>{`${yearFrom}-${yearTo}`}</span>
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
        <div>
          <label>
            <span>Power From</span>
            <input
              type="range"
              list="power-list"
              min={POWER_LIST[0]}
              max={POWER_LIST[POWER_LIST.length - 1]}
              value={powerFrom}
              onChange={onChangePowerFrom}
            />
            <datalist id="power-list">
              {POWER_LIST.map((value) => (
                <option
                  key={value}
                  value={value}
                  label={POWER_LIST.includes(value) ? `${value} hp` : undefined}
                ></option>
              ))}
            </datalist>
          </label>
          <label>
            <span>Power To</span>
            <input
              type="range"
              list="power-list"
              min={POWER_LIST[0]}
              max={POWER_LIST[POWER_LIST.length - 1]}
              value={powerTo}
              onChange={onChangePowerTo}
            />
            <span>{`${powerFrom}-${powerTo} hp`}</span>
          </label>
        </div>
        {Object.entries(criteria).map(([name, value], key) => (
          <div key={key}>
            <label>
              <span>{name}</span>
              <select name={name} value={value} onChange={onChangeCriteria}>
                <option value={""}>--</option>
                {Object.entries(options[name]).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        ))}
      </fieldset>
      {favorites.length > 0 ? (
        <div>
          {`Your favorites: ${favorites
            .map((favorite) => `[${favorite}]`)
            .join(", ")}`}{" "}
          <Link
            onClick={(e) => (
              e.preventDefault(), setSearch(favorites.join(`, `))
            )}
          >
            search
          </Link>{" "}
          |{" "}
          <Link onClick={(e) => (e.preventDefault(), setFavorites([]))}>
            clear
          </Link>
        </div>
      ) : (
        <div>{`You don't have favorites`}</div>
      )}
      <div>{`Found ${list.length} vehicles out of a total of ${results.length}`}</div>
      <ol>
        {sorted
          .slice(0, 100)
          .map(({ item }) => item)
          .map(({ id, images, ...item }, key: number) => (
            <li key={key} className={styles.Row}>
              <Gallery
                images={[...Array(images)]
                  .slice(0, 3)
                  .map(
                    (
                      _,
                      i,
                      _list,
                      size = "322/255b28ffdad35cd984ff32f30da17158"
                    ) =>
                      `//najlepszeoferty.bmw.pl/uzywane/api/v1/ems/bmw-used-pl_PL/vehicle/${size}/${id}-${i}`
                  )}
              />
              <Details
                item={{ id, ...item }}
                onClickCompare={onClickCompare}
                favorites={favorites}
                setFavorites={setFavorites}
              />
              {Object.entries(item._history || {})
                .reverse()
                .map(([_time, _item], key, list) => (
                  <Details
                    key={_time}
                    _time={_time}
                    item={{ id, ..._item }}
                    prev={key ? list[key - 1][1] : item}
                  />
                ))}
            </li>
          ))}
      </ol>
    </div>
  );
}

function Details({
  _time,
  item,
  onClickCompare,
  prev,
  favorites,
  setFavorites,
}) {
  const {
    id,
    title,
    brand,
    series = {},
    seriesCode,
    bodyType,
    modelCode,
    fuel,
    color,
    transmission,
    capacity,
    consumptionFuel,
    emissionStandard,
    emissionMeasurementStandard,
    emission,
    powerHP,
    productionYear,
    registration,
    age,
    mileage,
    transactionalPrice,
    newPrice,
    warranty,
    created,
    imagesLastChanged,
  } = item;

  const changed = (prop) => item && prev && item[prop] !== prev[prop];

  return (
    <ul className={styles.Details}>
      <li>
        <Color color={color} />
        <Link
          href={`//najlepszeoferty.bmw.pl/uzywane/wyszukaj/opis-szczegolowy/${id}/`}
        >{`[${id}] ${title}`}</Link>
        {onClickCompare && (
          <Button onClick={onClickCompare} value={id}>
            Compare
          </Button>
        )}
        {setFavorites && (
          <Toggle
            checked={favorites.includes(id)}
            onChange={(e) =>
              setFavorites((favorites) =>
                e.target.checked
                  ? favorites.concat(id)
                  : favorites.filter((favorite) => favorite !== id)
              )
            }
          >
            Favorite
          </Toggle>
        )}
      </li>
      <li>
        [{seriesCode}] {brand.label} {series.label} {bodyType.label}{" "}
        {fuel.label} {transmission.label}
      </li>
      <li>
        [{modelCode}] capacity: {capacity} powerHP: {powerHP} consumptionFuel:{" "}
        {consumptionFuel && <span>{consumptionFuel}</span>} emissionStandard:{" "}
        {emissionStandard.label} {emissionMeasurementStandard}{" "}
        {emission && <span>{emission}</span>}
      </li>
      <li>
        productionYear: {productionYear} newPrice: {newPrice}{" "}
        {Boolean(item.optionsPrice) && (
          <span>optionsPrice: {item.optionsPrice}</span>
        )}{" "}
        {Boolean(item.accessoriesPrice) && (
          <span>accessoriesPrice: {item.accessoriesPrice}</span>
        )}
      </li>
      <li>
        <span
          className={cx(
            styles.Compare,
            changed("transactionalPrice") && styles.changed
          )}
        >
          transactionalPrice: {transactionalPrice}
        </span>{" "}
        registration: {registration ? registration.split("T")[0] : "-"}{" "}
        <span className={cx(styles.Compare, changed("age") && styles.changed)}>
          age: {age}
        </span>{" "}
        <span
          className={cx(styles.Compare, changed("mileage") && styles.changed)}
        >
          mileage: {mileage}
        </span>{" "}
        <span
          className={cx(styles.Compare, changed("warranty") && styles.changed)}
        >
          warranty: {warranty}
        </span>
      </li>
      <li>
        [{_time ? new Date(Number(_time)).toISOString() : "-"}] {created}{" "}
        (imagesLastChanged: {imagesLastChanged})
      </li>
    </ul>
  );
}

export default function Section() {
  return (
    <div className={styles.Section}>
      <h2>Vehicles</h2>
      <Data />
    </div>
  );
}
