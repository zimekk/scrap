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
// import { format } from "date-fns";
import type { RoomsType } from "@dev/cli/src/services/RoomsService/types";
// import { Gallery } from "../../components/Gallery";
import { Image } from "../../components/Image";
import { Json } from "../../components/Json";
import { Link } from "../../components/Link";
import Map from "./Map";
import styles from "./styles.module.scss";

interface FiltersState {
  search: string;
}

const asset = createAsset(async (version) => {
  const res = await fetch(`api/rooms/data.json?${version}`);
  return await res.json().then((results) => results);
});

function Hotel({ item }: { item: RoomsType }) {
  return (
    <div>
      <Link
        href={`https://booking.profitroom.com/pl/${item.id}/home?currency=${item.defaultCurrency.code}`}
      >
        {item.id}
      </Link>
      {item.logo && (
        <Image
          className={styles.Logo}
          src={`https://r.profitroom.pl/${item.id}/images/thumbs/0x50/${item.logo.fileName}`}
        />
      )}
      <table className={styles.Table}>
        <tbody>
          {(item.translations || [])
            .find(({ locale }) => locale === item.defaultLocale)
            ?.messages.map(({ fieldName, value }, key) => (
              <tr key={key}>
                <th>{fieldName}</th>
                <td>
                  <div dangerouslySetInnerHTML={{ __html: value }} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Json>{item}</Json>
    </div>
  );
}

function Rooms({ rooms }: { rooms: RoomsType[] }) {
  const [showMap] = useState(() => true);
  console.log({ rooms });

  const locations = useMemo(
    () => rooms.map(({ id, address }) => ({ ...address, name: id })),
    [rooms]
  );

  return (
    <div>
      Rooms
      {showMap && <Map list={locations} />}
      {rooms.map((item, key) => (
        <Hotel key={key} item={item} />
      ))}
    </div>
  );
}

function Results({
  results,
  queries,
}: {
  results: RoomsType[];
  queries: FiltersState;
}) {
  return (
    <Rooms
      rooms={results.filter(
        (item) =>
          queries.search === "" || item.city.toLowerCase().match(queries.search)
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
  const results = asset.read(version) as RoomsType[];

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
      <h2>Rooms</h2>
      <Filters filters={filters} setFilters={setFilters} />
      <Results results={results} queries={queries} />
    </div>
  );
}
