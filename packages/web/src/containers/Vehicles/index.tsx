import React, {
  ReactChild,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { format } from "date-fns";
import { createAsset } from "use-asset";
import createKDTree from "static-kdtree";
import createPersistedState from "use-persisted-state";
import update from "immutability-helper";
import { Gallery } from "../../components/Gallery";
import { Link } from "../../components/Link";
import { Calculator, ProductTypes } from "../../components/Calculator";
import Chart from "./Chart";
import Map, { useBounds } from "./Map";
import cx from "classnames";
import styles from "./styles.module.scss";

const GROUP_BY = {
  "": "",
  brand: "Brand",
  modelCode: "Model Code",
  seriesCode: "Series Code",
  productionYear: "Production Year",
  _removed: "Sold",
};
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
  _removed: -1,
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

const formatNumber = (value: number) => new Intl.NumberFormat().format(value);

const formatAmount = (value: number) => `${formatNumber(value)} pln`;

const useCriterion = createPersistedState("criterion-vehicles");
const useFavorites = createPersistedState("favorites-vehicles");

const priceHistory = ({ _history = {}, ...item }) =>
  [item.transactionalPrice]
    .concat(Object.values(_history).map((item) => item.transactionalPrice))
    .filter(
      (value: any, index: number, array: any[]) =>
        array.indexOf(value) === index
    );

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

function Toggle({ children, ...props }: { children: ReactChild }) {
  return (
    <label>
      <input type="checkbox" {...props} />
      <span>{children}</span>
    </label>
  );
}

function Color({ color }: { color: { code: string; label: string } }) {
  return (
    <a
      className={styles.Color}
      style={{ backgroundColor: color.code }}
      title={color.label}
    ></a>
  );
}

const createCriteria =
  ({ search, options }: { search: string; options: object }) =>
  (defaults = {}) =>
    Object.assign(
      {
        filter: search,
        groupBy: Object.keys(GROUP_BY)[0],
        sortBy: Object.keys(SORT_BY)[13],
        type: Object.keys(TYPES)[0],
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

        options: "",

        removed: "0",
        changedPrice: false,
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
      const getPoint = (item: any) => [
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
          .knn(getPoint(results.find((item: any) => item._id === _id)), 10)
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

  const list = useMemo(() => {
    const criteriaOptions = criteria.options
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
    console.log({ criteriaOptions });
    return results
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
      .filter(({ item }) =>
        ((labels) =>
          labels.includes(String(item.id)) ||
          ((item.title.toLowerCase().match(criteria.filter) ||
            labels.includes(
              typeof item.seriesCode === "object"
                ? item.seriesCode.label
                : item.seriesCode
            ) ||
            labels.includes(
              typeof item.modelCode === "object"
                ? item.modelCode.label
                : item.modelCode
            )) &&
            ["", item.isNew ? "N" : "U"].includes(criteria.type) &&
            (criteria.removed == "" ||
              criteria.removed === ((item._removed || 0) > 0 ? "1" : "0")) &&
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
            (!criteria.changedPrice || priceHistory(item).length > 1) &&
            (!criteriaOptions.length ||
              criteriaOptions.every((option) =>
                (item.options || []).includes(option)
              )) &&
            Object.entries(criteria.entries).findIndex(
              ([prop, value]) =>
                ![
                  String(
                    typeof item[prop] === "object" ? item[prop].id : item[prop]
                  ),
                  "",
                ].includes(value)
            ) === -1))(
          (criteria.filter as string).split(",").map((s) => s.trim())
        )
      );
  }, [results, criteria]);

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
        ({ position }: { position: { lat: number; lng: number } }) =>
          center.distanceTo(position) < criteria.radius * 1000
      ),
    [list, center, criteria.radius]
  );

  const sorted = useMemo(
    () =>
      list.sort(
        (a, b) =>
          SORT_BY[criteria.sortBy as keyof typeof SORT_BY] *
          (a.item[criteria.sortBy] === b.item[criteria.sortBy]
            ? 0
            : (a.item[criteria.sortBy] || 0) > (b.item[criteria.sortBy] || 0)
            ? 1
            : -1)
      ),
    [list, criteria.sortBy]
  );

  const grouped = useMemo(
    () =>
      sorted.reduce(
        (grouped: Record<string, object[]>, item: any) =>
          ((group) =>
            Object.assign(grouped, {
              [group]: (grouped[group] || []).concat(item),
            }))(
            typeof item.item[criteria.groupBy] === "object"
              ? item.item[criteria.groupBy].label
              : item.item[criteria.groupBy] || ""
          ),
        {}
      ),
    [sorted, criteria.groupBy]
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

  const [expand, setExpand] = useState(() => ({ map: false, chart: false }));

  return (
    <div>
      <div>
        <Link
          onClick={(e) => (
            e.preventDefault(),
            setExpand((expand) => ({ ...expand, map: !expand.map }))
          )}
        >
          {expand.map ? "Hide map" : "Show map"}
        </Link>{" "}
        {expand.map && (
          <Map
            bounds={bounds}
            center={center}
            setCenter={setCenter}
            list={nearby}
          />
        )}
      </div>
      <div>
        <Link
          onClick={(e) => (
            e.preventDefault(),
            setExpand((expand) => ({ ...expand, chart: !expand.chart }))
          )}
        >
          {expand.chart ? "Hide chart" : "Show chart"}
        </Link>{" "}
        {expand.chart && (
          <Chart list={list} onSelect={(id: number) => setSearch(String(id))} />
        )}
      </div>
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
      <Favorite
        favorites={favorites}
        setFavorites={setFavorites}
        setSearch={setSearch}
      />
      <Summary list={list} results={results} />
      {Object.entries(grouped).map(([group, sorted]) => (
        <section key={group}>
          {group && <h3>{group}</h3>}
          <ol>
            {sorted
              .slice(0, 100)
              .map(({ item }) => item)
              .map(
                (
                  {
                    id,
                    images,
                    srcSet,
                    ...item
                  }: { id: string; images: string[]; srcSet: string[] },
                  key: number
                ) => (
                  <li key={key} className={styles.Row}>
                    <Gallery
                      className={styles.Gallery}
                      images={images}
                      srcSet={srcSet}
                    />
                    <Details
                      item={{ id, ...item }}
                      onClickCompare={onClickCompare}
                      favorites={favorites}
                      setFavorites={setFavorites}
                      setSearch={setSearch}
                    />
                  </li>
                )
              )}
          </ol>
        </section>
      ))}
    </div>
  );
}

const sortByKey = (list: object) =>
  Object.entries(list)
    .sort(([a], [b]) => (a < b ? 1 : -1))
    .reduce((list, [key, item]) => Object.assign(list, { [key]: item }), {});

function Summary({
  list,
  results,
}: {
  list: { item: { _created?: number; _updated?: number; _removed?: number } }[];
  results: {
    item: { _created?: number; _updated?: number; _removed?: number };
  }[];
}) {
  const [expand, setExpand] = useState(false);
  const summary = useMemo(
    () =>
      update(
        list.reduce(
          (summary, { item }) =>
            Object.assign(
              summary,
              item._created
                ? {
                    created: update(summary.created, {
                      [format(item._created, "yyyy-MM-dd")]: {
                        $apply: (count = 0) => count + 1,
                      },
                    }),
                  }
                : {},
              item._updated
                ? {
                    updated: update(summary.updated, {
                      [format(item._updated, "yyyy-MM-dd")]: {
                        $apply: (count = 0) => count + 1,
                      },
                    }),
                  }
                : {},
              item._removed
                ? {
                    removed: update(summary.removed, {
                      [format(item._removed, "yyyy-MM-dd")]: {
                        $apply: (count = 0) => count + 1,
                      },
                    }),
                  }
                : {}
            ),
          {
            created: {},
            updated: {},
            removed: {},
          }
        ),
        {
          created: {
            $apply: sortByKey,
          },
          updated: {
            $apply: sortByKey,
          },
          removed: {
            $apply: sortByKey,
          },
        }
      ),
    [list]
  );
  return (
    <div>
      <div>
        {`Found ${list.length} vehicles out of a total of ${results.length}`}{" "}
        <Link
          onClick={(e) => (e.preventDefault(), setExpand((expand) => !expand))}
        >
          {expand ? "Hide summary" : "Show summary"}
        </Link>
      </div>
      {expand && <pre>{JSON.stringify(summary, null, 2)}</pre>}
    </div>
  );
}

function Favorite({
  favorites,
  setFavorites,
  setSearch,
}: {
  favorites: string[];
  setFavorites: Function;
  setSearch: Function;
}) {
  return favorites.length > 0 ? (
    <div>
      {`Your favorites: `}
      {favorites.map((favorite, key) => (
        <IdLink key={key} setSearch={setSearch}>
          {favorite}
        </IdLink>
      ))}{" "}
      <Link
        onClick={(e) => (e.preventDefault(), setSearch(favorites.join(`, `)))}
      >
        search
      </Link>{" "}
      |{" "}
      <Link onClick={(e) => (e.preventDefault(), setFavorites([]))}>clear</Link>
    </div>
  ) : (
    <div>{`You don't have favorites`}</div>
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
        <select
          value={criterion.selected}
          onChange={useCallback(
            ({ target }) =>
              setCriterion((criterion) => ({
                ...criterion,
                selected: target.value,
              })),
            [criterion]
          )}
        >
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
  groupBy,
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
      {groupBy && (
        <div>
          <span>GroupBy</span> <span>{groupBy}</span>
        </div>
      )}
      <div>
        <span>Radius</span> <span>{`max ${radius} km`}</span>
      </div>
      <div>
        <span>Year</span> <span>{`${yearFrom} - ${yearTo}`}</span>
      </div>
      <div>
        <span>Mileage</span>{" "}
        <span>{`${formatNumber(mileageFrom)} - ${formatNumber(
          mileageTo
        )} km`}</span>
      </div>
      <div>
        <span>Price</span>{" "}
        <span>{`${formatNumber(priceFrom)} - ${formatAmount(priceTo)}`}</span>
      </div>
      <div>
        <span>Power</span> <span>{`${powerFrom} - ${powerTo} hp`}</span>
      </div>
      <div>
        <span>Created</span> <span>{`${createdFrom} - ${createdTo}`}</span>
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
  groupBy,
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
  removed,
  changedPrice,
  ...criteria
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
    <fieldset className={styles.Filters}>
      <div>
        <label>
          <span>Type</span>
          <select
            value={type}
            onChange={useCallback(
              ({ target }) =>
                setCriteria((criteria) => ({
                  ...criteria,
                  type: target.value,
                })),
              []
            )}
          >
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
          <select
            value={sortBy}
            onChange={useCallback(
              ({ target }) =>
                setCriteria((criteria) => ({
                  ...criteria,
                  sortBy: target.value,
                })),
              []
            )}
          >
            {Object.entries(SORT_BY).map(([value]) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>GroupBy</span>
          <select
            value={groupBy}
            onChange={useCallback(
              ({ target }) =>
                setCriteria((criteria) => ({
                  ...criteria,
                  groupBy: target.value,
                })),
              []
            )}
          >
            {Object.entries(GROUP_BY).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
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
          <span>{`${yearFrom} - ${yearTo}`}</span>
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
          <span>{`${mileageFrom} - ${mileageTo} km`}</span>
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
                    ? formatAmount(value)
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
          <span>{`${formatNumber(priceFrom)} - ${formatAmount(priceTo)}`}</span>
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
          <span>{`${powerFrom} - ${powerTo} hp`}</span>
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
      <div>
        <label>
          <span>Sold</span>
          <select
            value={removed}
            onChange={useCallback(
              ({ target }) =>
                setCriteria((criteria) => ({
                  ...criteria,
                  removed: target.value,
                })),
              []
            )}
          >
            {["", "0", "1"].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <Toggle
          checked={changedPrice}
          onChange={() =>
            setCriteria(
              ({ changedPrice, ...criteria }: { changedPrice: boolean }) => ({
                ...criteria,
                changedPrice: !changedPrice,
              })
            )
          }
        >
          Changed Price
        </Toggle>
      </div>
      <div className={styles.Textarea}>
        <textarea
          value={criteria.options}
          onChange={({ target }) =>
            setCriteria(({ ...criteria }) => ({
              ...criteria,
              options: target.value,
            }))
          }
          rows={4}
        />
      </div>
    </fieldset>
  );
}

function IdLink({
  children: id,
  setSearch,
}: {
  children: string;
  setSearch: Function;
}) {
  return (
    <>
      [
      <Link
        onClick={(e) => (
          e.preventDefault(),
          setSearch((search: string) =>
            (e.metaKey ? search.split(",").map((s) => s.trim()) : [])
              .concat(String(id))
              .filter((s) => s.length > 0)
              .join(", ")
          )
        )}
      >
        {id}
      </Link>
      ]
    </>
  );
}

function Details({
  _time,
  item,
  onClickCompare,
  prev,
  favorites,
  setFavorites,
  setSearch,
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
    productionYear,
    transactionalPrice,
    newPrice,
  } = item;

  const changed = (prop) => item && prev && item[prop] !== prev[prop];

  return (
    <ul className={styles.Details}>
      {!prev && (
        <li>
          <Color color={item.color} />
          <IdLink setSearch={setSearch}>{id}</IdLink>{" "}
          <Link href={href}>{title}</Link>{" "}
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
      )}
      {!prev && (
        <li>
          <IdLink setSearch={setSearch}>
            {typeof seriesCode === "object" ? seriesCode.label : seriesCode}
          </IdLink>{" "}
          {brand.label} {series.label} {bodyType.label} {item.fuel.label}{" "}
          {item.transmission.label}
        </li>
      )}
      {!prev && (
        <li>
          <IdLink setSearch={setSearch}>
            {typeof modelCode === "object" ? modelCode.label : modelCode}
          </IdLink>{" "}
          {item.capacity && <span>capacity: {item.capacity}</span>}{" "}
          {item.powerHP && <span>powerHP: {item.powerHP}</span>}{" "}
          {item.consumptionFuel && (
            <span>consumptionFuel: {item.consumptionFuel}</span>
          )}{" "}
          {item.emission && <span>emission: {item.emission}</span>}
        </li>
      )}
      <li>
        <span
          className={cx(
            styles.Compare,
            changed("productionYear") && styles.changed
          )}
        >
          productionYear: {productionYear}
        </span>{" "}
        {Boolean(newPrice) && (
          <span
            className={cx(
              styles.Compare,
              changed("newPrice") && styles.changed
            )}
          >
            newPrice: {formatAmount(newPrice)}
          </span>
        )}{" "}
        {Boolean(item.optionsPrice) && (
          <span
            className={cx(
              styles.Compare,
              changed("optionsPrice") && styles.changed
            )}
          >
            optionsPrice: {formatAmount(item.optionsPrice)}
          </span>
        )}{" "}
        {Boolean(item.accessoriesPrice) && (
          <span
            className={cx(
              styles.Compare,
              changed("accessoriesPrice") && styles.changed
            )}
          >
            accessoriesPrice: {formatAmount(item.accessoriesPrice)}
          </span>
        )}
      </li>
      {Boolean(item.registration || item.age || item.mileage) && (
        <li>
          {item.registration && (
            <span
              className={cx(
                styles.Compare,
                changed("registration") && styles.changed
              )}
            >
              registration: {item.registration.split("T")[0]}
            </span>
          )}{" "}
          {Boolean(item.age) && (
            <span
              className={cx(styles.Compare, changed("age") && styles.changed)}
            >
              age: {item.age}
            </span>
          )}{" "}
          {Boolean(item.mileage) && (
            <span
              className={cx(
                styles.Compare,
                changed("mileage") && styles.changed
              )}
            >
              mileage: {formatNumber(item.mileage)} km
            </span>
          )}
        </li>
      )}
      <li>
        <span
          className={cx(
            styles.Compare,
            changed("transactionalPrice") && styles.changed
          )}
        >
          transactionalPrice: {formatAmount(transactionalPrice)}
          {Boolean(newPrice) && (
            <span> ({Math.round((100 * transactionalPrice) / newPrice)}%)</span>
          )}
        </span>{" "}
        {Boolean(item.transactionalPriceUpdated) && (
          <span
            className={cx(
              styles.Compare,
              changed("transactionalPriceUpdated") && styles.changed
            )}
            title={item.transactionalPriceUpdated.split("+")[0]}
          >
            transactionalPriceUpdated:{" "}
            {item.transactionalPriceUpdated.split("T")[0]}
          </span>
        )}{" "}
        {Boolean(item.vatReclaimable) && (
          <span
            className={cx(
              styles.Compare,
              changed("vatReclaimable") && styles.changed
            )}
          >
            vatReclaimable
          </span>
        )}{" "}
        {Boolean(item.warranty) && (
          <span
            className={cx(
              styles.Compare,
              changed("warranty") && styles.changed
            )}
          >
            warranty: {item.warranty}
          </span>
        )}
      </li>
      {(_time || item.imagesLastChanged) && (
        <li>
          [{_time ? format(Number(_time), "yyyy-MM-dd HH:mm") : "-"}]{" "}
          <span
            className={cx(styles.Compare, changed("created") && styles.changed)}
            title={item.created.split("+")[0]}
          >
            created: {item.created.split("T")[0]}
          </span>{" "}
          {item.imagesLastChanged && (
            <span
              className={cx(
                styles.Compare,
                changed("imagesLastChanged") && styles.changed
              )}
              title={item.imagesLastChanged.split("+")[0]}
            >
              imagesLastChanged: {item.imagesLastChanged.split("T")[0]}
            </span>
          )}
        </li>
      )}
      {(item._created || item._updated || item._removed) && (
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
          {Boolean(item._removed) && (
            <span className={cx(styles.Compare)}>
              _removed: {format(Number(item._removed), "yyyy-MM-dd HH:mm")}{" "}
            </span>
          )}
        </li>
      )}
      {!prev && item.leasable && (
        <li>
          <Leasing item={item} />
        </li>
      )}
      {!prev && item.options && (
        <li>
          <Options options={item.options} />
        </li>
      )}
      {!prev && item._history && (
        <li>
          <History item={item} />
        </li>
      )}
    </ul>
  );
}

function History({ item }) {
  const [expand, setExpand] = useState(false);

  const { id } = item;

  return (
    <div>
      <div>
        <Link
          onClick={(e) => (e.preventDefault(), setExpand((expand) => !expand))}
        >
          {expand ? "Hide history" : "Show history"}
        </Link>{" "}
        ({Object.keys(item._history).length})
      </div>
      {expand &&
        Object.entries(item._history || {})
          .reverse()
          .map(([_time, _item], key, list) => (
            <Details
              key={_time}
              _time={_time}
              item={{ id, ..._item }}
              prev={key ? list[key - 1][1] : item}
            />
          ))}
    </div>
  );
}

function Leasing({ item }) {
  const [expand, setExpand] = useState(false);

  return (
    <div>
      <div>
        <Link
          onClick={(e) => (e.preventDefault(), setExpand((expand) => !expand))}
        >
          {expand ? "Hide leasing" : "Show leasing"}
        </Link>{" "}
        {item.comfortLeaseProduct &&
          (({ label, type, calculationMode }) => (
            <span>{`${label} (${[type, calculationMode]
              .filter(Boolean)
              .join(" / ")})`}</span>
          ))(item.comfortLeaseProduct)}{" "}
        {item.leaseProduct &&
          (({ label, type, calculationMode }) => (
            <span>{`${label} (${[type, calculationMode]
              .filter(Boolean)
              .join(" / ")})`}</span>
          ))(item.leaseProduct)}
      </div>
      {expand && item.comfortLeaseProduct && (
        <Calculator productType={ProductTypes.COMFORT_LEASE} vehicle={item} />
      )}
      {expand && item.leaseProduct && (
        <Calculator productType={ProductTypes.LEASE} vehicle={item} />
      )}
    </div>
  );
}

function Options({ options }: { options: string[] }) {
  const [expand, setExpand] = useState(false);

  return (
    <div className={styles.Options}>
      <Link
        onClick={(e) => (e.preventDefault(), setExpand((expand) => !expand))}
      >
        {expand ? "Hide options" : "Show options"}
      </Link>{" "}
      {expand && (
        <div className={styles.Textarea}>
          <textarea
            value={options.join("\n")}
            rows={options.length}
            onFocus={({ target }) => target.select()}
            readOnly
          />
        </div>
      )}
    </div>
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
