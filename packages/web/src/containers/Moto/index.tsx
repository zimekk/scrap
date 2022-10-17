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
import type { ItemType } from "@dev/cli/src/services/MotoService/types";
import { Gallery } from "../../components/Gallery";
import { Link } from "../../components/Link";
import styles from "./styles.module.scss";

interface FiltersState {
  search: string;
}

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
  const { results } = asset.read(version) as {
    results: ItemType[];
  };

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
      <h2>Moto</h2>
      <Filters filters={filters} setFilters={setFilters} />
      <Results results={results} queries={queries} />
    </div>
  );
}
