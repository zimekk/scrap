import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { format } from "date-fns";
import { createAsset } from "use-asset";
import createKDTree from "static-kdtree";
import createPersistedState from "use-persisted-state";
import update from "immutability-helper";
import { Gallery } from "../../components/Gallery";
import { Link } from "../../components/Link";
import Chart from "./Chart";
import Map, { useBounds } from "./Map";
import cx from "classnames";
import styles from "./styles.module.scss";

const SORT_BY = {
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
  _created: -1,
  _updated: -1,
};
const RADIUS_LIST = [1, 3, 5, 10, 20, 50, 100, 500];
const PRICE_LIST = [
  0, 100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000,
  1000000,
];
const MILEAGE_LIST = [
  0, 1000, 5000, 10000, 20000, 50000, 100000, 150000, 200000, 500000,
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

const useCriterion = createPersistedState("criterion-vehicles");
const useFavorites = createPersistedState("favorites-vehicles");

// https://github.com/pmndrs/use-asset#dealing-with-async-assets
const asset = createAsset(async (version) => {
  const res = await fetch(`api/vehicles/data.json?${version}`);
  return await res
    .json()
    .then(({ results }) => results) // 236 MB -> 26.1 MB
    .then((list) => ({
      results: list,
      options: list.reduce(
        (options, item) =>
          [
            "dealer",
            "bodyType",
            "driveType",
            "brand",
            "color",
            "fuel",
            "series",
            "seriesCode",
            "modelCode",
            "transmission",
            "gearBox",
            "vatReclaimable",
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

const createCriteria =
  ({ search, options }) =>
  (defaults = {}) =>
    Object.assign(
      {
        filter: search,
        sortBy: "transactionalPrice",
        type: "",
        radius: RADIUS_LIST[RADIUS_LIST.length - 1],

        priceFrom: PRICE_LIST[0],
        priceTo: PRICE_LIST[PRICE_LIST.length - 1],

        mileageFrom: MILEAGE_LIST[0],
        mileageTo: MILEAGE_LIST[MILEAGE_LIST.length - 1],

        powerFrom: POWER_LIST[0],
        powerTo: POWER_LIST[POWER_LIST.length - 1],

        yearFrom: YEAR_LIST[0],
        yearTo: YEAR_LIST[YEAR_LIST.length - 1],

        createdFrom: format(Date.now() - 1000 * 3600 * 24 * 30, "yyyy-MM-dd"),
        createdTo: format(Date.now(), "yyyy-MM-dd"),

        entries: Object.keys(options).reduce(
          (criteria, prop) =>
            Object.assign(criteria, {
              [prop]: "",
            }),
          {}
        ),
      },
      defaults
    );

function Data({ version = "v1" }) {
  const { results, options } = asset.read(version); // As many cache keys as you need

  const [search, setSearch] = useState("");

  const [criteria, setCriteria] = useState(createCriteria({ search, options }));

  const search$ = useMemo(() => new Subject<string>(), []);

  useEffect(() => {
    const subscription = search$
      .pipe(
        map((search) => search.trim()),
        distinctUntilChanged(),
        debounceTime(400)
      )
      .subscribe((filter) =>
        setCriteria((criteria) => ({ ...criteria, filter }))
      );
    return () => subscription.unsubscribe();
  }, [search$]);

  useEffect(() => {
    search$.next(search);
  }, [search]);

  const onClickCompare = useCallback(
    ({ target }) => {
      const _id = target.value;
      const getPoint = (item) => [
        // item.capacity,
        item.powerHP,
        // item.consumptionFuel,
        // item.emission,
        item.newPrice,
        item.optionsPrice,
        item.productionYear,
        // item.age,
        item.mileage,
        item.transactionalPrice,
        item.warranty,
      ];

      const tree = createKDTree(results.map(getPoint));

      console.table(
        tree
          .knn(getPoint(results.find((item) => item._id === _id)), 10)
          .slice(0, 10)
          .map((index) => results[index])
          .map((item) => [
            item.id,
            item.title,
            // item.capacity,
            item.powerHP,
            // item.consumptionFuel,
            // item.emission,
            item.newPrice,
            item.optionsPrice,
            item.productionYear,
            // item.age,
            item.mileage,
            item.transactionalPrice,
            item.warranty,
          ])
      );
    },
    [results]
  );

  console.log({ options, criteria, results });

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
            (item.title.toLowerCase().match(criteria.filter) ||
              criteria.filter
                .split(",")
                .map((s) => s.trim())
                .includes(String(item.id))) &&
            ["", item.isNew ? "N" : "U"].includes(criteria.type) &&
            criteria.priceFrom <= item.transactionalPrice &&
            item.transactionalPrice <= criteria.priceTo &&
            (item.mileage === undefined ||
              (criteria.mileageFrom <= item.mileage &&
                item.mileage <= criteria.mileageTo)) &&
            criteria.powerFrom <= item.powerHP &&
            item.powerHP <= criteria.powerTo &&
            criteria.yearFrom <= item.productionYear &&
            item.productionYear <= criteria.yearTo &&
            new Date(`${criteria.createdFrom} 00:00:00`).getTime() <=
              item._created &&
            item._created <=
              new Date(`${criteria.createdTo} 23:59:59`).getTime() &&
            Object.entries(criteria.entries).findIndex(
              ([prop, value]) =>
                ![
                  String(
                    typeof item[prop] === "object" ? item[prop].id : item[prop]
                  ),
                  "",
                ].includes(value)
            ) === -1
        ),
    [results, criteria]
  );

  const bounds = useBounds(
    list.length
      ? list
      : [
          {
            position: {
              lat: process.env.NEARBY_LAT,
              lng: process.env.NEARBY_LNG,
            },
          },
        ]
  );
  const [center, setCenter] = useState(() => bounds.getCenter());

  const nearby = useMemo(
    () =>
      list.filter(
        ({ position }) => center.distanceTo(position) < criteria.radius * 1000
      ),
    [list, center, criteria.radius]
  );

  const sorted = useMemo(
    () =>
      list.sort(
        (a, b) =>
          SORT_BY[criteria.sortBy] *
          (a.item[criteria.sortBy] === b.item[criteria.sortBy]
            ? 0
            : (a.item[criteria.sortBy] || 0) > (b.item[criteria.sortBy] || 0)
            ? 1
            : -1)
      ),
    [list, criteria.sortBy]
  );

  const [favorites, setFavorites] = useFavorites([]);

  const [criterion, setCriterion] = useCriterion(() => ({
    selected: "",
    list: [],
  }));

  useEffect(() => {
    if (criterion.selected !== "") {
      const { criteria } = criterion.list[criterion.selected];
      setCriteria(createCriteria({ search, options })(criteria));
      setSearch(criteria.filter);
    }
  }, [setCriteria, setSearch, criterion.selected]);

  return (
    <div>
      <Map
        bounds={bounds}
        center={center}
        setCenter={setCenter}
        list={nearby}
      />
      <Chart list={list} onSelect={(id: number) => setSearch(String(id))} />
      <Criteria
        {...criteria}
        options={options}
        setCriteria={setCriteria}
        search={search}
        setSearch={setSearch}
      />
      <CriteriaLabel {...criteria} options={options} />
      <SavedFilters
        criterion={criterion}
        setCriterion={setCriterion}
        criteria={criteria}
      />
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
              <Gallery className={styles.Gallery} images={images} />
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

function SavedFilters({ criterion, setCriterion, criteria }) {
  const onCreateFilter = useCallback(
    () =>
      setCriterion((criterion) => ({
        ...criterion,
        selected: String(criterion.list.length),
        list: criterion.list.concat([
          { label: prompt("Filter name:"), criteria },
        ]),
      })),
    [criterion, criteria]
  );

  const onUpdateFilter = useCallback(
    () =>
      setCriterion((criterion) =>
        update(criterion, {
          list: {
            [criterion.selected]: {
              criteria: {
                $apply: () => criteria,
              },
            },
          },
        })
      ),
    [criterion, criteria]
  );

  const onRenameFilter = useCallback(
    () =>
      setCriterion((criterion) =>
        update(criterion, {
          list: {
            [criterion.selected]: {
              label: {
                $apply: (label) => prompt("Rename filter:", label),
              },
            },
          },
        })
      ),
    [criterion]
  );

  const onRemoveFilter = useCallback(
    () =>
      setCriterion((criterion) => ({
        ...criterion,
        selected: "",
        list: criterion.list.filter(
          (_item, key) => String(key) !== criterion.selected
        ),
      })),
    [criterion]
  );

  const onChangeSelectedFilter = useCallback(
    ({ target }) =>
      setCriterion((criterion) => ({ ...criterion, selected: target.value })),
    [criterion]
  );
  const sameCriteria = useMemo(
    () =>
      criterion.selected !== "" &&
      JSON.stringify(criterion.list[criterion.selected].criteria) ===
        JSON.stringify(criteria),
    [criterion, criteria]
  );

  return (
    <div>
      <label>
        <span>Saved Filters</span>
        <select value={criterion.selected} onChange={onChangeSelectedFilter}>
          <option value="">--</option>
          {criterion.list.map(({ label }, value) => (
            <option key={value} value={String(value)}>
              {label}
            </option>
          ))}
        </select>
        {criterion.selected === "" ? (
          <button onClick={onCreateFilter}>Save as new criteria</button>
        ) : (
          <>
            <button onClick={onUpdateFilter} disabled={sameCriteria}>
              Update criteria
            </button>
            <button onClick={onRenameFilter}>Rename criteria</button>
            <button onClick={onRemoveFilter}>Remove criteria</button>
          </>
        )}
      </label>
    </div>
  );
}

function CriteriaLabel({
  filter,
  options,
  entries,
  type,
  yearFrom,
  yearTo,
  createdFrom,
  createdTo,
  priceFrom,
  priceTo,
  mileageFrom,
  mileageTo,
  powerFrom,
  powerTo,
  radius,
  sortBy,
}) {
  return (
    <fieldset>
      {type && (
        <div>
          <span>Type</span> <span>{TYPES[type]}</span>
        </div>
      )}
      {filter && (
        <div>
          <span>Search</span> <span>{filter}</span>
        </div>
      )}
      <div>
        <span>Sort</span> <span>{sortBy}</span>
      </div>
      <div>
        <span>Radius</span> <span>{`max ${radius} km`}</span>
      </div>
      <div>
        <span>Year</span> <span>{`${yearFrom}-${yearTo}`}</span>
      </div>
      <div>
        <span>Mileage</span> <span>{`${mileageFrom}-${mileageTo} km`}</span>
      </div>
      <div>
        <span>Price</span> <span>{`${priceFrom}-${priceTo} pln`}</span>
      </div>
      <div>
        <span>Power</span> <span>{`${powerFrom}-${powerTo} hp`}</span>
      </div>
      <div>
        <span>Created</span> <span>{`${createdFrom}-${createdTo}`}</span>
      </div>
      {Object.entries(entries)
        .filter(([, value]: any) => value !== "")
        .map(([name, value]: any, key) => (
          <div key={key}>
            <span>{name}</span> <span>{options[name][value]}</span>
          </div>
        ))}
    </fieldset>
  );
}

function Criteria({
  search,
  options,
  entries,
  type,
  yearFrom,
  yearTo,
  createdFrom,
  createdTo,
  priceFrom,
  priceTo,
  mileageFrom,
  mileageTo,
  powerFrom,
  powerTo,
  radius,
  setCriteria,
  setSearch,
  sortBy,
}) {
  const onChangeSearch = useCallback(
    ({ target }) => setSearch(target.value),
    []
  );

  const onChangeCriteria = useCallback(
    ({ target }) =>
      setCriteria(({ entries, ...criteria }: { entries: {} }) => ({
        ...criteria,
        entries: {
          ...entries,
          [target.name]: target.value,
        },
      })),
    []
  );

  const onChangeSortBy = useCallback(
    ({ target }) =>
      setCriteria((criteria) => ({ ...criteria, sortBy: target.value })),
    []
  );

  const onChangeType = useCallback(
    ({ target }) =>
      setCriteria((criteria) => ({ ...criteria, type: target.value })),
    []
  );

  const onChangeRadius = useCallback(
    ({ target }) =>
      setCriteria((criteria) => ({
        ...criteria,
        radius: Number(target.value),
      })),
    []
  );

  const onChangePriceFrom = useCallback(
    ({ target }) =>
      setCriteria(({ priceTo, ...criteria }) => {
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
      setCriteria(({ priceFrom, ...criteria }) => {
        const priceTo = Number(target.value);
        return {
          ...criteria,
          priceFrom: priceTo > priceFrom ? priceFrom : priceTo,
          priceTo,
        };
      }),
    []
  );

  const onChangeMileageFrom = useCallback(
    ({ target }) =>
      setCriteria(({ mileageTo, ...criteria }) => {
        const mileageFrom = Number(target.value);
        return {
          ...criteria,
          mileageFrom,
          mileageTo: mileageTo < mileageFrom ? mileageFrom : mileageTo,
        };
      }),
    []
  );
  const onChangeMileageTo = useCallback(
    ({ target }) =>
      setCriteria(({ mileageFrom, ...criteria }) => {
        const mileageTo = Number(target.value);
        return {
          ...criteria,
          mileageFrom: mileageTo > mileageFrom ? mileageFrom : mileageTo,
          mileageTo,
        };
      }),
    []
  );

  const onChangePowerFrom = useCallback(
    ({ target }) =>
      setCriteria(({ powerTo, ...criteria }) => {
        const powerFrom = Number(target.value);
        return {
          ...criteria,
          powerFrom,
          powerTo: powerTo < powerFrom ? powerFrom : powerTo,
        };
      }),
    []
  );
  const onChangePowerTo = useCallback(
    ({ target }) =>
      setCriteria(({ powerFrom, ...criteria }) => {
        const powerTo = Number(target.value);
        return {
          ...criteria,
          powerFrom: powerTo > powerFrom ? powerFrom : powerTo,
          powerTo,
        };
      }),
    []
  );

  const onChangeYearFrom = useCallback(
    ({ target }) =>
      setCriteria(({ yearTo, ...criteria }) => {
        const yearFrom = Number(target.value);
        return {
          ...criteria,
          yearFrom,
          yearTo: yearTo < yearFrom ? yearFrom : yearTo,
        };
      }),
    []
  );
  const onChangeYearTo = useCallback(
    ({ target }) =>
      setCriteria(({ yearFrom, ...criteria }) => {
        const yearTo = Number(target.value);
        return {
          ...criteria,
          yearFrom: yearTo > yearFrom ? yearFrom : yearTo,
          yearTo,
        };
      }),
    []
  );

  const onChangeCreatedFrom = useCallback(
    ({ target }) =>
      setCriteria(({ createdTo, ...criteria }) => {
        const createdFrom = target.value;
        return {
          ...criteria,
          createdFrom,
          createdTo: createdTo < createdFrom ? createdFrom : createdTo,
        };
      }),
    []
  );
  const onChangeCreatedTo = useCallback(
    ({ target }) =>
      setCriteria(({ createdFrom, ...criteria }) => {
        const createdTo = target.value;
        return {
          ...criteria,
          createdFrom: createdTo > createdFrom ? createdFrom : createdTo,
          createdTo,
        };
      }),
    []
  );

  return (
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
            {Object.entries(SORT_BY).map(([value]) => (
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
                label={[1, 25, 100].includes(value) ? `${value} km` : undefined}
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
                  [0, 2010, 2015, 2020].includes(value) ? `${value}` : undefined
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
          <span>Mileage From</span>
          <input
            type="range"
            list="mileage-list"
            min={MILEAGE_LIST[0]}
            max={MILEAGE_LIST[MILEAGE_LIST.length - 1]}
            value={mileageFrom}
            onChange={onChangeMileageFrom}
          />
          <datalist id="mileage-list">
            {MILEAGE_LIST.map((value) => (
              <option
                key={value}
                value={value}
                label={MILEAGE_LIST.includes(value) ? `${value}` : undefined}
              ></option>
            ))}
          </datalist>
        </label>
        <label>
          <span>Mileage To</span>
          <input
            type="range"
            list="mileage-list"
            min={MILEAGE_LIST[0]}
            max={MILEAGE_LIST[MILEAGE_LIST.length - 1]}
            value={mileageTo}
            onChange={onChangeMileageTo}
          />
          <span>{`${mileageFrom}-${mileageTo} km`}</span>
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
      <div>
        <label>
          <span>Created From</span>
          <input
            type="date"
            value={createdFrom}
            onChange={onChangeCreatedFrom}
          />
        </label>
        <label>
          <span>Created To</span>
          <input type="date" value={createdTo} onChange={onChangeCreatedTo} />
        </label>
      </div>
      {Object.entries(entries)
        .filter(([name]) => options[name])
        .map(([name, value], key) => (
          <div key={key}>
            <label>
              <span>{name}</span>
              <select name={name} value={value} onChange={onChangeCriteria}>
                <option value={""}>--</option>
                {Object.entries(options[name]).map(([value, label]: any) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        ))}
    </fieldset>
  );
}

function Details({
  _time,
  item,
  onClickCompare,
  prev,
  favorites,
  setFavorites,
}: any) {
  const {
    id,
    href,
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
    // emissionStandard,
    // emissionMeasurementStandard,
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
        <Link href={href}>{`[${id}] ${title}`}</Link>
        {onClickCompare && (
          <Button onClick={onClickCompare} value={item._id}>
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
        [{typeof seriesCode === "object" ? seriesCode.label : seriesCode}]{" "}
        {brand.label} {series.label} {bodyType.label} {fuel.label}{" "}
        {transmission.label}
      </li>
      <li>
        [{typeof modelCode === "object" ? modelCode.label : modelCode}]{" "}
        {capacity && <span>capacity: {capacity}</span>}{" "}
        {powerHP && <span>powerHP: {powerHP}</span>}{" "}
        {consumptionFuel && <span>consumptionFuel: {consumptionFuel}</span>}{" "}
        {emission && <span>emission: {emission}</span>}
      </li>
      <li>
        <span>productionYear: {productionYear}</span>{" "}
        {Boolean(newPrice) && <span>newPrice: {newPrice}</span>}{" "}
        {Boolean(item.optionsPrice) && (
          <span>optionsPrice: {item.optionsPrice}</span>
        )}{" "}
        {Boolean(item.accessoriesPrice) && (
          <span>accessoriesPrice: {item.accessoriesPrice}</span>
        )}
      </li>
      <li>
        {registration && (
          <span
            className={cx(
              styles.Compare,
              changed("registration") && styles.changed
            )}
          >
            registration: {registration.split("T")[0]}
          </span>
        )}{" "}
        {age && (
          <span
            className={cx(styles.Compare, changed("age") && styles.changed)}
          >
            age: {age}
          </span>
        )}{" "}
        {mileage && (
          <span
            className={cx(styles.Compare, changed("mileage") && styles.changed)}
          >
            mileage: {mileage}
          </span>
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
        <span
          className={cx(
            styles.Compare,
            changed("vatReclaimable") && styles.changed
          )}
        >
          vatReclaimable: {item.vatReclaimable}
        </span>{" "}
        <span
          className={cx(styles.Compare, changed("warranty") && styles.changed)}
        >
          warranty: {warranty}
        </span>
      </li>
      {(_time || imagesLastChanged) && (
        <li>
          [{_time ? format(Number(_time), "yyyy-MM-dd HH:mm") : "-"}] {created}{" "}
          {imagesLastChanged && (
            <span>imagesLastChanged: {imagesLastChanged}</span>
          )}
        </li>
      )}
      {(item._created || item._updated) && (
        <li>
          {item._created && (
            <span className={cx(styles.Compare)}>
              _created: {format(Number(item._created), "yyyy-MM-dd HH:mm")}{" "}
            </span>
          )}
          {item._updated && (
            <span className={cx(styles.Compare)}>
              _updated: {format(Number(item._updated), "yyyy-MM-dd HH:mm")}{" "}
            </span>
          )}
        </li>
      )}
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
