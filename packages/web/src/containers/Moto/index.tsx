import React, {
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { createAsset } from "use-asset";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import type { ItemType } from "@dev/cli/src/services/MotoService/types";
import { Gallery } from "../../components/Gallery";
import { Link } from "../../components/Link";
import styles from "./styles.module.scss";

interface OptionsState {
  make: Record<string, string>;
  fuel_type: Record<string, string>;
  year: Record<string, string>;
}

interface FiltersState {
  make: string;
  fuel_type: string;
  year: string;
  priceFrom: number;
  priceTo: number;
  mileageFrom: number;
  mileageTo: number;
  search: string;
}

const PRICE_LIST = [
  0, 25000, 50000, 100000, 150000, 200000, 250000, 300000, 400000, 500000,
] as const;

const MILEAGE_LIST = [
  0, 10000, 20000, 30000, 50000, 70000, 100000, 150000, 200000, 300000,
] as const;

const asset = createAsset(async (version) => {
  const res = await fetch(`api/moto/data.json?${version}`);
  return await res.json().then((list) => list);
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
        }).format(item.price)} PLN`}</span>
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
  return (
    <Vehicles
      vehicles={results.filter(
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
          (queries.year === "" ||
            (item.parameters || []).findIndex(
              ({ key, value }) => key === "year" && value === queries.year
            ) >= 0) &&
          (item.parameters || []).findIndex(
            ({ key, value }) =>
              key === "mileage" &&
              queries.mileageFrom <= Number(value) &&
              Number(value) <= queries.mileageTo
          ) >= 0 &&
          (queries.priceTo === PRICE_LIST[0] ||
            (queries.priceFrom <= item.price &&
              item.price <= queries.priceTo)) &&
          (queries.search === "" ||
            item.title.toLowerCase().match(queries.search))
      )}
    />
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
        <span>Year</span>
        <select
          value={filters.year}
          onChange={useCallback<ChangeEventHandler<HTMLSelectElement>>(
            ({ target }) =>
              setFilters((filters) => ({
                ...filters,
                year: target.value,
              })),
            []
          )}
        >
          {[[""]]
            .concat(Object.entries(options.year))
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
  const { results } = asset.read(version) as {
    results: ItemType[];
  };

  const options = useMemo(
    () =>
      results.reduce(
        (options, item) =>
          (item.parameters || []).reduce(
            (options: any, { key, value, displayValue }) =>
              Object.assign(options, {
                [key]: Object.assign(
                  options[key] || {},
                  ["engine_capacity", "fuel_type", "make", "year"].includes(key)
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
    [results]
  );

  const [filters, setFilters] = useState<FiltersState>(() => ({
    make: "",
    fuel_type: "",
    year: "",
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
