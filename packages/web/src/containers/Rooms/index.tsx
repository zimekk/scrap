import React, {
  type ChangeEventHandler,
  type Dispatch,
  type MouseEventHandler,
  type SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { createAsset } from "use-asset";
// import { format } from "date-fns";
// import { stringify } from "qs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import {
  Data,
  type DataType,
  type RoomsType,
  // getOccupancy,
} from "@dev/cli/src/services/RoomsService/types";
import { Gallery } from "../../components/Gallery";
import { Image } from "../../components/Image";
import { Json } from "../../components/Json";
import { Link } from "../../components/Link";
import { type FilterType, Availability, getData } from "./Availability";
import { Hotel } from "./Hotel";
import Map, { getDirectionsLink } from "./Map";
import styles from "./styles.module.scss";

interface FiltersState {
  search: string;
  filter: number;
}

const FILTER = [
  {
    checkIn: "2023-02-12",
    checkOut: "2023-02-17",
    occupancy: {
      adults: 2,
      children: [6, 10, 16],
    },
  },
  {
    checkIn: "2023-02-12",
    checkOut: "2023-02-17",
    occupancy: {
      adults: 3,
      children: [6, 10],
    },
  },
  {
    checkIn: "2023-02-12",
    checkOut: "2023-02-17",
    occupancy: {
      adults: 2,
      children: [10, 12],
    },
  },
  {
    checkIn: "2023-02-12",
    checkOut: "2023-02-17",
    occupancy: {
      adults: 1,
      children: [10],
    },
  },
  {
    checkIn: "2023-02-12",
    checkOut: "2023-02-17",
    occupancy: {
      adults: 1,
      children: [6, 16],
    },
  },
  {
    checkIn: "2023-02-12",
    checkOut: "2023-02-17",
    occupancy: {
      adults: 2,
    },
  },
] as FilterType[];

const asset = createAsset(async (version) => {
  const res = await fetch(`api/rooms/data.json?${version}`);
  return await res.json().then((results) => results);
});

const origin = { lat: 52.1793, lng: 21.0498 };

export function _Hotel({
  filter,
  item,
}: {
  filter: FilterType;
  item: RoomsType;
}) {
  const [data, setData] = useState<DataType>(() => item._cache || {});

  return (
    <div>
      <Link
        href={`https://booking.profitroom.com/pl/${item.id}/home?currency=${item.defaultCurrency.code}`}
      >
        {item.id}
      </Link>
      {item.address.coordinates && (
        <Link
          href={getDirectionsLink(item.address.coordinates, origin)}
          rel=""
          target="map"
          style={{ margin: "0 .25em" }}
        >
          <FontAwesomeIcon icon={faCrosshairs} />
        </Link>
      )}
      {item.logo && (
        <Image
          className={styles.Logo}
          src={`https://r.profitroom.pl/${item.id}/images/thumbs/0x50/${item.logo.fileName}`}
        />
      )}
      <div>
        <Link
          onClick={useCallback<MouseEventHandler>(
            (e) =>
              (e.preventDefault(),
              getData(`api/rooms/${item.id}/gallery`)).then((gallery) =>
                setData((data) => ({ ...data, gallery }))
              ),
            []
          )}
        >
          gallery
        </Link>
        {data.gallery && (
          <Gallery
            className={styles.Gallery}
            images={data.gallery.images.map(
              ({ fileName }) =>
                `https://r.profitroom.pl/${item.id}/images/gallery/thumbs/700x0/${fileName}`
            )}
          />
        )}
      </div>
      <div>
        <Link
          onClick={useCallback<MouseEventHandler>(
            (e) =>
              (e.preventDefault(),
              getData(`api/rooms/${item.id}/person-types`)).then(
                (personTypes) => setData((data) => ({ ...data, personTypes }))
              ),
            []
          )}
        >
          person-types
        </Link>
      </div>
      <div>
        <Link
          onClick={useCallback<MouseEventHandler>(
            (e) =>
              (e.preventDefault(), getData(`api/rooms/${item.id}/rooms`)).then(
                (rooms) => (
                  Data.parse({ rooms }), setData((data) => ({ ...data, rooms }))
                )
              ),
            []
          )}
        >
          rooms
        </Link>
      </div>
      <div>
        <Link
          onClick={useCallback<MouseEventHandler>(
            (e) =>
              (e.preventDefault(),
              getData(`api/rooms/${item.id}/vouchers`)).then(
                (vouchers) => (
                  Data.parse({ vouchers }),
                  setData((data) => ({ ...data, vouchers }))
                )
              ),
            []
          )}
        >
          vouchers
        </Link>
      </div>
      <div>
        <Link
          onClick={useCallback<MouseEventHandler>(
            (e) =>
              (e.preventDefault(),
              getData(`api/rooms/${item.id}/policies`)).then(
                (policies) => (
                  Data.parse({ policies }),
                  setData((data) => ({ ...data, policies }))
                )
              ),
            []
          )}
        >
          policies
        </Link>
      </div>
      <div>
        <Link
          onClick={useCallback<MouseEventHandler>(
            (e) =>
              (e.preventDefault(),
              getData(`api/rooms/${item.id}/extra-beds`)).then(
                (extraBeds) => (
                  Data.parse({ extraBeds }),
                  setData((data) => ({ ...data, extraBeds }))
                )
              ),
            []
          )}
        >
          extra-beds
        </Link>
      </div>
      <div>
        <Link
          onClick={useCallback<MouseEventHandler>(
            (e) =>
              (e.preventDefault(), getData(`api/rooms/${item.id}/offers`)).then(
                (offers) => (
                  Data.parse({ offers }),
                  setData((data) => ({ ...data, offers }))
                )
              ),
            []
          )}
        >
          offers
        </Link>
      </div>
      {data.personTypes && (
        <div>
          <table className={styles.Table}>
            <tbody>
              <tr>
                <th>type</th>
                <th>minAge</th>
                <th>maxAge</th>
              </tr>
              {data.personTypes.map(({ type, minAge, maxAge }, key) => (
                <tr key={key}>
                  <th>{type}</th>
                  <td>{minAge}</td>
                  <td>{maxAge}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {data.rooms && (
        <table className={styles.Table}>
          <tbody>
            <tr>
              <th rowSpan={2}>id</th>
              <th colSpan={3}>min</th>
              <th colSpan={3}>max</th>
              <th rowSpan={2}>totalRooms</th>
            </tr>
            <tr>
              <th>numberOfPeople</th>
              <th>adults</th>
              <th>children</th>
              <th>numberOfPeople</th>
              <th>adults</th>
              <th>children</th>
            </tr>
            {data.rooms.map(({ id, limits, totalRooms }, key) =>
              limits ? (
                <tr key={key}>
                  <th>{id}</th>
                  <td>{limits.min.numberOfPeople}</td>
                  <td>{limits.min.occupancy.adults}</td>
                  <td>
                    {limits.min.occupancy.children.map(({ count }) => count)}
                  </td>
                  <td>{limits.max.numberOfPeople}</td>
                  <td>{limits.max.occupancy.adults}</td>
                  <td>
                    {limits.max.occupancy.children.map(({ count }) => count)}
                  </td>
                  <td>{totalRooms}</td>
                </tr>
              ) : (
                <tr key={key}>
                  <th>{id}</th>
                  <td colSpan={6}>-</td>
                  <td>{totalRooms}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      )}
      <Availability data={data} filter={filter} item={item} />
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
      <Json>{data}</Json>
      <Json>{item}</Json>
    </div>
  );
}

function Rooms({
  checked,
  setChecked,
  filter,
  rooms,
}: {
  checked: string[];
  setChecked: Dispatch<SetStateAction<string[]>>;
  filter: number;
  rooms: RoomsType[];
}) {
  const [showMap, setShowMap] = useState(() => false);
  console.log({ rooms });

  const locations = useMemo(
    () => rooms.map(({ id, address }) => ({ ...address, name: id })),
    [rooms]
  );

  return (
    <div>
      Rooms
      {showMap ? (
        <Map origin={origin} list={locations} />
      ) : (
        <Link onClick={(e) => (e.preventDefault(), setShowMap(true))}>
          Show map
        </Link>
      )}
      {rooms.map((item) => (
        <Hotel
          key={item.id}
          checked={checked.includes(item.id)}
          setChecked={setChecked}
          filter={FILTER[filter]}
          item={item}
        />
      ))}
    </div>
  );
}

function Results({
  checked,
  setChecked,
  results,
  queries,
}: {
  checked: string[];
  setChecked: Dispatch<SetStateAction<string[]>>;
  results: RoomsType[];
  queries: FiltersState;
}) {
  return (
    <Rooms
      checked={checked}
      setChecked={setChecked}
      filter={queries.filter}
      rooms={results.filter(
        (item) =>
          queries.search === "" || item.id.toLowerCase().match(queries.search)
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
        <span>Occupancy</span>
        <select
          value={filters.filter}
          onChange={useCallback<ChangeEventHandler<HTMLSelectElement>>(
            ({ target }) =>
              setFilters((filters) => ({
                ...filters,
                filter: Number(target.value),
              })),
            []
          )}
        >
          {FILTER.map(
            ({ checkIn, checkOut, occupancy: { adults, children } }, key) => (
              <option key={key} value={key}>
                {`${checkIn}-${checkOut} / ${adults} adults${
                  children ? ` + ${children?.join(", ")} children` : ""
                }`}
              </option>
            )
          )}
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
    </fieldset>
  );
}

function Checked({
  results,
  checked,
  setChecked,
}: {
  results: { id: string }[];
  checked: string[];
  setChecked: Dispatch<SetStateAction<string[]>>;
}) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={results.length > 0 && checked.length === results.length}
          disabled={results.length === 0}
          onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
            ({ target }) =>
              setChecked(target.checked ? results.map(({ id }) => id) : []),
            [results]
          )}
        />
      </label>
      <span>{`${checked.length} / ${results.length}`}</span>{" "}
    </div>
  );
}

export default function Section({ version = "v1" }) {
  const results = asset.read(version) as RoomsType[];

  const [filters, setFilters] = useState<FiltersState>(() => ({
    search: "",
    filter: 0,
  }));

  const [queries, setQueries] = useState(() => filters);

  const [checked, setChecked] = useState<string[]>(() => []);

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
      <Checked results={results} checked={checked} setChecked={setChecked} />
      <Results
        results={results}
        queries={queries}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
}
