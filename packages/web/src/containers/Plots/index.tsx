import React, {
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import Truncate from "react-truncate";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { createAsset } from "use-asset";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import type { ItemType } from "@dev/cli/src/services/PlotsService/types";
import { Gallery } from "../../components/Gallery";
import { Json } from "../../components/Json";
import { Link } from "../../components/Link";
import { DistanceAndDuration, getDirectionsLink } from "../Properties/Location";
import styles from "./styles.module.scss";
import { useSubscription } from "observable-hooks";

const SORT_BY = {
  _created: -1,
  _updated: -1,
} as const;

interface OptionsState {
  type: Record<string, string>;
}

interface FiltersState {
  type: string;
  search: string;
  sortBy: keyof typeof SORT_BY;
  areaFrom: number;
  areaTo: number;
  priceFrom: number;
  priceTo: number;
}

const asset = createAsset(async (version) => {
  const res = await fetch(`api/plots/data.json?${version}`);
  return await res.json();
});

function getDirectionsHref({ lat, lon }: { lat: number; lon: number }) {
  const origin = `${lat},${lon}`;
  return getDirectionsLink(origin);
}

function Item({ item }: { item: ItemType }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.Item}>
      {item.photos && (
        <Gallery className={styles.Gallery} images={item.photos} />
      )}
      <div className={styles.Right}>
        <div>{format(new Date(item._created), "yyyy-MM-dd HH:mm")}</div>
        <span className={styles.Price}>{`${new Intl.NumberFormat("pl-PL", {
          minimumFractionDigits: 2,
        }).format(item.price.regularPrice.value)} ${
          item.price.regularPrice.currencySymbol
        }`}</span>
      </div>
      <Link href={item.url}>{`[${item.id}] ${item.title}`}</Link>
      {item.location && (
        <div className={styles.Location}>
          <Link href={getDirectionsHref(item.map)}>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {item.location.pathName}
          </Link>
        </div>
      )}
      {item.location && (
        <DistanceAndDuration
          coordinates={{ latitude: item.map.lat, longitude: item.map.lon }}
          travelmode="driving"
        />
      )}
      {item.location && (
        <DistanceAndDuration
          coordinates={{ latitude: item.map.lat, longitude: item.map.lon }}
          travelmode="transit"
        />
      )}
      {item.params && (
        <ul className={styles.Parameters}>
          {item.params.map(({ key, name, value }) => (
            <li key={key}>
              {name}: {value}
            </li>
          ))}
        </ul>
      )}
      {item.description && (
        <div className={styles.Description}>
          <Truncate
            ellipsis={
              <a
                href="#"
                onClick={(e) => (e.preventDefault(), setExpanded(true))}
              >
                ...
              </a>
            }
            lines={!expanded && 3}
          >
            <div dangerouslySetInnerHTML={{ __html: item.description }} />
          </Truncate>
        </div>
      )}
      <Json>{item}</Json>
    </div>
  );
}

const LIMIT = 25;

function List({ list }: { list: ItemType[] }) {
  const [limit, setLimit] = useState(() => LIMIT);

  return (
    <div>
      <div>{`Found ${list.length} plots`}</div>
      {useMemo(() => list.slice(0, limit), [limit, list]).map((item, key) => (
        <div key={key} className={styles.Row}>
          <Item key={item.id} item={item} />
        </div>
      ))}
      {list.length > limit && (
        <Link
          onClick={(e) => (e.preventDefault(), setLimit((limit) => limit + 25))}
        >
          {`${list.length - limit} więcej...`}
        </Link>
      )}
    </div>
  );
}

function Results({
  results,
  queries,
}: {
  results: (ItemType & {
    _area: number;
    _price: number;
  })[];
  queries: FiltersState;
}) {
  return (
    <List
      list={useMemo(
        () =>
          results
            .filter(
              (item) =>
                (queries.type === "" ||
                  item.params.find(
                    (param) => param.normalizedValue === queries.type
                  )) &&
                (queries.search === "" ||
                  item.title.toLowerCase().match(queries.search)) &&
                (queries.areaTo === AREA_LIST[0] ||
                  (queries.areaFrom <= item._area &&
                    item._area <= queries.areaTo)) &&
                (queries.priceTo === PRICE_LIST[0] ||
                  (queries.priceFrom <= item._price &&
                    item._price <= queries.priceTo))
            )
            .sort(
              (a: any, b: any) =>
                SORT_BY[queries.sortBy] *
                (a[queries.sortBy] > b[queries.sortBy] ? 1 : -1)
            ),
        [results, queries]
      )}
    />
  );
}

const AREA_LIST = [
  0, 250, 500, 750, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 5000,
] as const;

const PRICE_LIST = [
  0, 200000, 500000, 1000000, 1500000, 2000000, 2500000, 3000000, 4000000,
  5000000,
] as const;

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
        <span>Type</span>
        <select
          value={filters.type}
          onChange={useCallback<ChangeEventHandler<HTMLSelectElement>>(
            ({ target }) =>
              setFilters((filters) => ({
                ...filters,
                type: target.value,
              })),
            []
          )}
        >
          {[[""]]
            .concat(Object.entries(options.type))
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
      <label>
        <span>Sort</span>
        <select
          value={filters.sortBy}
          onChange={useCallback<ChangeEventHandler<HTMLSelectElement>>(
            ({ target }) =>
              setFilters((filters) => ({
                ...filters,
                sortBy: target.value as (typeof filters)["sortBy"],
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
      <div>
        <label>
          <span>Area From</span>
          <input
            type="range"
            list="area-list"
            min={AREA_LIST[0]}
            max={AREA_LIST[AREA_LIST.length - 1]}
            value={filters.areaFrom}
            onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
              ({ target }) =>
                setFilters(({ areaTo, ...criteria }) => {
                  const areaFrom = Number(target.value);
                  return {
                    ...criteria,
                    areaFrom,
                    areaTo: areaTo < areaFrom ? areaFrom : areaTo,
                  };
                }),
              []
            )}
          />
          <datalist id="area-list">
            {AREA_LIST.map((value) => (
              <option key={value} value={value}></option>
            ))}
          </datalist>
        </label>
        <label>
          <span>Area To</span>
          <input
            type="range"
            list="area-list"
            min={AREA_LIST[0]}
            max={AREA_LIST[AREA_LIST.length - 1]}
            value={filters.areaTo}
            onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
              ({ target }) =>
                setFilters(({ areaFrom, ...criteria }) => {
                  const areaTo = Number(target.value);
                  return {
                    ...criteria,
                    areaFrom: areaTo > areaFrom ? areaFrom : areaTo,
                    areaTo,
                  };
                }),
              []
            )}
          />
          <span>{`${new Intl.NumberFormat().format(
            filters.areaFrom
          )} - ${new Intl.NumberFormat().format(filters.areaTo)} m2`}</span>
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
  const results = asset.read(version) as ItemType[];

  const options = useMemo(
    () =>
      results.reduce(
        (options, item) =>
          item.params
            .filter((param) => ["type"].includes(param.key))
            .reduce(
              (options: any, param) =>
                Object.assign(options, {
                  [param.key]: Object.assign(options[param.key], {
                    [param.normalizedValue]: param.value,
                  }),
                }),
              options
            ),
        { type: {} }
      ),
    [results]
  );

  const [filters, setFilters] = useState<FiltersState>(() => ({
    type: "dzialki-budowlane",
    search: "",
    sortBy: Object.keys(SORT_BY)[0] as FiltersState["sortBy"],
    areaFrom: AREA_LIST[2],
    areaTo: AREA_LIST[AREA_LIST.length - 1],
    priceFrom: PRICE_LIST[1],
    priceTo: PRICE_LIST[4],
  }));

  const [queries, setQueries] = useState(() => filters);

  const search$ = useMemo(() => new Subject<any>(), []);

  useSubscription(
    search$.pipe(
      map(({ search, ...filters }) =>
        JSON.stringify({
          ...queries,
          ...filters,
          search: search.toLowerCase().trim(),
        })
      ),
      distinctUntilChanged(),
      debounceTime(400)
    ),
    (filters) =>
      setQueries((queries) => ({ ...queries, ...JSON.parse(filters) }))
  );

  useEffect(() => {
    search$.next(filters);
  }, [filters]);

  console.log({ results, filters, queries });

  return (
    <div className={styles.Section}>
      <h2>Plots</h2>
      <Filters options={options} filters={filters} setFilters={setFilters} />
      <Results
        results={useMemo(
          () =>
            results.map((item) =>
              Object.assign(item, {
                _area: Number(
                  item.params.find((param) => param.key === "m")
                    ?.normalizedValue
                ),
                _price: item.price.regularPrice.value,
              })
            ),
          []
        )}
        queries={queries}
      />
    </div>
  );
}
