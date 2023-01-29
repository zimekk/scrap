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
          show={false}
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
  results: ItemType[];
  queries: FiltersState;
}) {
  return (
    <List
      list={useMemo(
        () =>
          results
            .filter(
              (item) =>
                item.params.find(
                  (param) => param.normalizedValue === queries.type
                ) &&
                (queries.search === "" ||
                  item.title.toLowerCase().match(queries.search))
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
          {Object.entries(options.type).map(([value, label]) => (
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
    sortBy: Object.keys(SORT_BY)[0] as (typeof filters)["sortBy"],
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

  console.log({ results, filters, queries });

  return (
    <div className={styles.Section}>
      <h2>Plots</h2>
      <Filters options={options} filters={filters} setFilters={setFilters} />
      <Results results={results} queries={queries} />
    </div>
  );
}
