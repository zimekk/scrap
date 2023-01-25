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
import styles from "./styles.module.scss";

interface FiltersState {
  search: string;
}

const asset = createAsset(async (version) => {
  const res = await fetch(`api/plots/data.json?${version}`);
  return await res.json();
});

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
          <FontAwesomeIcon icon={faMapMarkerAlt} /> {item.location.pathName}
        </div>
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
          <Item item={item} />
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
      list={results.filter(
        (item) =>
          queries.search === "" ||
          item.title.toLowerCase().match(queries.search)
      )}
    />
  );
}

function Filters({
  filters,
  setFilters,
}: {
  filters: FiltersState;
  setFilters: Dispatch<SetStateAction<FiltersState>>;
}) {
  return (
    <fieldset>
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
    </fieldset>
  );
}

export default function Section({ version = "v1" }) {
  const results = asset.read(version) as ItemType[];

  const [filters, setFilters] = useState<FiltersState>(() => ({
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

  console.log({ results, filters, queries });

  return (
    <div className={styles.Section}>
      <h2>Plots</h2>
      <Filters filters={filters} setFilters={setFilters} />
      <Results results={results} queries={queries} />
    </div>
  );
}
