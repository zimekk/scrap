import React, {
  type ChangeEventHandler,
  type Dispatch,
  type SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { createAsset } from "use-asset";
import { format } from "date-fns";
import update from "immutability-helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import type { ItemType } from "@dev/cli/src/services/MotoService/types";
import { Gallery } from "../../components/Gallery";
import { Link } from "../../components/Link";
import styles from "./styles.module.scss";

interface OptionsState {
  make: Record<string, string>;
  engine_capacity: number[];
  fuel_type: Record<string, string>;
  year: number[];
}

interface FiltersState {
  make: string;
  fuel_type: string;
  capacityFrom: number;
  capacityTo: number;
  yearFrom: number;
  yearTo: number;
  priceFrom: number;
  priceTo: number;
  mileageFrom: number;
  mileageTo: number;
  search: string;
}

const MILEAGE_LIST = [
  0, 10000, 20000, 30000, 50000, 70000, 100000, 150000, 200000, 300000, 500000,
] as const;

const PRICE_LIST = [
  0, 25000, 50000, 100000, 150000, 200000, 250000, 300000, 400000, 500000,
  600000,
] as const;

const asset = createAsset(async (version) => {
  const res = await fetch(`api/moto/data.json?${version}`);
  return await res
    .json()
    .then(
      (list) =>
        list as {
          results: ItemType[];
        }
    )
    .then(({ results }) => ({
      results: results.sort((a, b) => b._created - a._created),
    }));
});

function Vehicle({ item }: { item: ItemType }) {
  return (
    <div className={styles.Vehicle}>
      {item.thumbnail && (
        <Gallery className={styles.Gallery} images={[item.thumbnail]} />
      )}
      <div className={styles.Right}>
        <div>{format(new Date(item._created), "yyyy-MM-dd HH:mm")}</div>
        <span className={styles.Price}>{`${new Intl.NumberFormat("pl-PL", {
          minimumFractionDigits: 2,
        }).format(item.price)} ${item.priceCurrency || "PLN"}`}</span>
      </div>
      <Link href={item.url}>{`[${item.id}] ${item.title}`}</Link>
      {item.parameters && (
        <ul className={styles.Parameters}>
          {item.parameters.map(({ key, displayValue }) => (
            <li key={key}>{displayValue}</li>
          ))}
        </ul>
      )}
      {item.shortDescription && (
        <div className={styles.Description}>{item.shortDescription}</div>
      )}
      {item.location && (
        <div className={styles.Location}>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> {item.location.city.name} (
          {item.location.region.name})
        </div>
      )}
      {/* <pre>{JSON.stringify(item, null, 2)}</pre> */}
    </div>
  );
}

const LIMIT = 25;

function Vehicles({ vehicles }: { vehicles: ItemType[] }) {
  const [limit, setLimit] = useState(() => LIMIT);

  return (
    <div>
      {useMemo(() => vehicles.slice(0, limit), [limit, vehicles]).map(
        (item, key) => (
          <div key={key} className={styles.Row}>
            <Vehicle item={item} />
          </div>
        )
      )}
      {vehicles.length > limit && (
        <Link
          onClick={(e) => (e.preventDefault(), setLimit((limit) => limit + 25))}
        >
          {`${vehicles.length - limit} więcej...`}
        </Link>
      )}
    </div>
  );
}

function Results({
  results,
  queries,
}: {
  results: ItemType[];
  queries: FiltersState;
}) {
  const vehicles = useMemo(
    () =>
      results.filter(
        (item) =>
          (queries.make === "" ||
            (item.parameters || []).findIndex(
              ({ key, value }) => key === "make" && value === queries.make
            ) >= 0) &&
          (queries.fuel_type === "" ||
            (item.parameters || []).findIndex(
              ({ key, value }) =>
                key === "fuel_type" && value === queries.fuel_type
            ) >= 0) &&
          ((parameter) =>
            !parameter ||
            (({ value }) =>
              queries.yearFrom <= Number(value) &&
              Number(value) <= queries.yearTo)(parameter))(
            (item.parameters || []).find(({ key }) => key === "year")
          ) &&
          ((parameter) =>
            !parameter ||
            (({ value }) =>
              queries.capacityFrom <= Number(value) &&
              Number(value) <= queries.capacityTo)(parameter))(
            (item.parameters || []).find(({ key }) => key === "engine_capacity")
          ) &&
          ((parameter) =>
            !parameter ||
            (({ value }) =>
              queries.mileageFrom <= Number(value) &&
              Number(value) <= queries.mileageTo)(parameter))(
            (item.parameters || []).find(({ key }) => key === "mileage")
          ) &&
          (queries.priceFrom === PRICE_LIST[0] ||
            (queries.priceFrom <= item.price &&
              item.price <= queries.priceTo)) &&
          (queries.search === "" ||
            item.title.toLowerCase().match(queries.search) ||
            item.shortDescription?.toLowerCase().match(queries.search))
      ),
    [results, queries]
  );
  return (
    <div>
      <div>{`Found ${vehicles.length} vehicles out of a total of ${results.length}`}</div>
      <Vehicles vehicles={vehicles} />
    </div>
  );
}

function Filters({
  options,
  filters,
  setFilters,
}: {
  options: OptionsState;
  filters: FiltersState;
  setFilters: Dispatch<SetStateAction<FiltersState>>;
}) {
  const CAPACITY_LIST = options.engine_capacity;
  const YEAR_LIST = options.year;

  return (
    <fieldset>
      <label>
        <span>Make</span>
        <select
          value={filters.make}
          onChange={useCallback<ChangeEventHandler<HTMLSelectElement>>(
            ({ target }) =>
              setFilters((filters) => ({
                ...filters,
                make: target.value,
              })),
            []
          )}
        >
          {[[""]]
            .concat(Object.entries(options.make))
            .map(([value, label = "-"]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
        </select>
      </label>
      <label>
        <span>Fuel</span>
        <select
          value={filters.fuel_type}
          onChange={useCallback<ChangeEventHandler<HTMLSelectElement>>(
            ({ target }) =>
              setFilters((filters) => ({
                ...filters,
                fuel_type: target.value,
              })),
            []
          )}
        >
          {[[""]]
            .concat(Object.entries(options.fuel_type))
            .map(([value, label = "-"]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
        </select>
      </label>
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
      </label>
      <div>
        <label>
          <span>Capacity From</span>
          <input
            type="range"
            list="capacity-list"
            min={CAPACITY_LIST[0]}
            max={CAPACITY_LIST[CAPACITY_LIST.length - 1]}
            value={filters.capacityFrom}
            onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
              ({ target }) =>
                setFilters(({ capacityTo, ...criteria }) => {
                  const capacityFrom = Number(target.value);
                  return {
                    ...criteria,
                    capacityFrom,
                    capacityTo:
                      capacityTo < capacityFrom ? capacityFrom : capacityTo,
                  };
                }),
              []
            )}
          />
          <datalist id="capacity-list">
            {CAPACITY_LIST.map((value) => (
              <option key={value} value={value}></option>
            ))}
          </datalist>
        </label>
        <label>
          <span>Capacity To</span>
          <input
            type="range"
            list="capacity-list"
            min={CAPACITY_LIST[0]}
            max={CAPACITY_LIST[CAPACITY_LIST.length - 1]}
            value={filters.capacityTo}
            onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
              ({ target }) =>
                setFilters(({ capacityFrom, ...criteria }) => {
                  const capacityTo = Number(target.value);
                  return {
                    ...criteria,
                    capacityFrom:
                      capacityTo > capacityFrom ? capacityFrom : capacityTo,
                    capacityTo,
                  };
                }),
              []
            )}
          />
          <span>{`${new Intl.NumberFormat().format(
            filters.capacityFrom
          )} - ${new Intl.NumberFormat().format(
            filters.capacityTo
          )} cm3`}</span>
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
            value={filters.yearFrom}
            onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
              ({ target }) =>
                setFilters(({ yearTo, ...criteria }) => {
                  const yearFrom = Number(target.value);
                  return {
                    ...criteria,
                    yearFrom,
                    yearTo: yearTo < yearFrom ? yearFrom : yearTo,
                  };
                }),
              []
            )}
          />
          <datalist id="year-list">
            {YEAR_LIST.map((value) => (
              <option key={value} value={value}></option>
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
            value={filters.yearTo}
            onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
              ({ target }) =>
                setFilters(({ yearFrom, ...criteria }) => {
                  const yearTo = Number(target.value);
                  return {
                    ...criteria,
                    yearFrom: yearTo > yearFrom ? yearFrom : yearTo,
                    yearTo,
                  };
                }),
              []
            )}
          />
          <span>{`${new Intl.NumberFormat().format(
            filters.yearFrom
          )} - ${new Intl.NumberFormat().format(filters.yearTo)}`}</span>
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
            value={filters.mileageFrom}
            onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
              ({ target }) =>
                setFilters(({ mileageTo, ...criteria }) => {
                  const mileageFrom = Number(target.value);
                  return {
                    ...criteria,
                    mileageFrom,
                    mileageTo:
                      mileageTo < mileageFrom ? mileageFrom : mileageTo,
                  };
                }),
              []
            )}
          />
          <datalist id="mileage-list">
            {MILEAGE_LIST.map((value) => (
              <option key={value} value={value}></option>
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
            value={filters.mileageTo}
            onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
              ({ target }) =>
                setFilters(({ mileageFrom, ...criteria }) => {
                  const mileageTo = Number(target.value);
                  return {
                    ...criteria,
                    mileageFrom:
                      mileageTo > mileageFrom ? mileageFrom : mileageTo,
                    mileageTo,
                  };
                }),
              []
            )}
          />
          <span>{`${new Intl.NumberFormat().format(
            filters.mileageFrom
          )} - ${new Intl.NumberFormat().format(filters.mileageTo)} km`}</span>
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
            value={filters.priceFrom}
            onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
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
            )}
          />
          <datalist id="price-list">
            {PRICE_LIST.map((value) => (
              <option key={value} value={value}></option>
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
            onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
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
            )}
          />
          <span>{`${new Intl.NumberFormat().format(
            filters.priceFrom
          )} - ${new Intl.NumberFormat().format(filters.priceTo)} PLN`}</span>
        </label>
      </div>
    </fieldset>
  );
}

export default function Section({ version = "v1" }) {
  const { results } = asset.read(version);

  const options = useMemo(
    () =>
      update(
        results.reduce(
          (options, item) =>
            (item.parameters || []).reduce(
              (options: any, { key, value, displayValue }) =>
                Object.assign(options, {
                  [key]: Object.assign(
                    options[key] || {},
                    ["engine_capacity", "fuel_type", "make", "year"].includes(
                      key
                    )
                      ? {
                          [value]: displayValue.trim(),
                        }
                      : {}
                  ),
                }),
              options
            ),
          {} as OptionsState
        ),
        {
          engine_capacity: {
            $apply: (engine_capacity: object) =>
              Object.keys(engine_capacity)
                .map(Number)
                .sort((a, b) => a - b),
          },
          year: {
            $apply: (year: object) =>
              Object.keys(year)
                .map(Number)
                .sort((a, b) => a - b),
          },
        }
      ),
    [results]
  );

  const [filters, setFilters] = useState<FiltersState>(() => ({
    make: "",
    fuel_type: "",
    capacityFrom: options.engine_capacity[0],
    capacityTo: options.engine_capacity[options.engine_capacity.length - 1],
    yearFrom: options.year[0],
    yearTo: options.year[options.year.length - 1],
    mileageFrom: MILEAGE_LIST[0],
    mileageTo: MILEAGE_LIST[MILEAGE_LIST.length - 1],
    priceFrom: PRICE_LIST[0],
    priceTo: PRICE_LIST[PRICE_LIST.length - 1],
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

  console.log({ results, options, filters, queries });

  return (
    <div className={styles.Section}>
      <h2>Moto</h2>
      <Filters options={options} filters={filters} setFilters={setFilters} />
      <Results results={results} queries={queries} />
    </div>
  );
}
