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
import { stringify } from "qs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import {
  Data,
  type DataType,
  type RoomsType,
  getOccupancy,
} from "@dev/cli/src/services/RoomsService/types";
import { Gallery } from "../../components/Gallery";
import { Image } from "../../components/Image";
import { Json } from "../../components/Json";
import { Link } from "../../components/Link";
import Map, { getDirectionsLink } from "./Map";
import styles from "./styles.module.scss";

interface FiltersState {
  search: string;
}

const asset = createAsset(async (version) => {
  const res = await fetch(`api/rooms/data.json?${version}`);
  return await res.json().then((results) => results);
});

const origin = { lat: 52.1793, lng: 21.0498 };

const getData = (path: string, data?: object) =>
  fetch(path, {
    method: data ? "POST" : "GET",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data ? JSON.stringify(data) : null,
  }).then((res) => res.json());

const formatPrice = ({
  amount,
  currency,
}: {
  amount: number;
  currency: string;
}) => `${amount} ${currency}`;

function Hotel({ item }: { item: RoomsType }) {
  const [data, setData] = useState<DataType>(() => ({}));

  const filter = {
    checkIn: "2023-02-12",
    checkOut: "2023-02-17",
    occupancy: {
      adults: 2,
      children: [10, 12, 16],
    },
  };

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
      <div>
        <button
          disabled={!data.personTypes}
          onClick={useCallback<MouseEventHandler>(
            (e) =>
              (e.preventDefault(),
              getData(
                `api/rooms/${item.id}/availability?${stringify({
                  checkIn: filter.checkIn,
                  checkOut: filter.checkOut,
                  occupancy: data.personTypes && [
                    getOccupancy(data.personTypes, filter.occupancy),
                  ],
                })}`
              )).then(
                (availability) => (
                  Data.parse({ availability }),
                  setData((data) => ({ ...data, availability }))
                )
              ),
            [filter, data.personTypes]
          )}
        >
          availability
        </button>
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
      {data.availability &&
        data.availability.map(({ occupancy, proposals }, key) => (
          <div key={key}>
            <Json>{occupancy}</Json>
            <table className={styles.Table}>
              <tbody>
                <tr>
                  <th colSpan={8}>proposal</th>
                  <th rowSpan={2}>roomCount</th>
                </tr>
                <tr>
                  <th>OfferID</th>
                  <th>RoomID</th>
                  <th>from</th>
                  <th>to</th>
                  <th>price</th>
                  <th>originalPrice</th>
                  <th>simulatedPrice</th>
                  <th>discounts</th>
                </tr>
                {proposals.map(({ proposal, roomCount }, key) => (
                  <tr key={key}>
                    {/* <td><pre>{JSON.stringify(proposal, null, 2)}</pre></td> */}
                    <td>{proposal.OfferID}</td>
                    <td>{proposal.RoomID}</td>
                    <td>{proposal.stay.from}</td>
                    <td>{proposal.stay.to}</td>
                    <td>{formatPrice(proposal.price)}</td>
                    <td>
                      {proposal.originalPrice
                        ? formatPrice(proposal.originalPrice)
                        : "-"}
                    </td>
                    <td>
                      {proposal.simulatedPrice
                        ? formatPrice(proposal.simulatedPrice)
                        : "-"}
                    </td>
                    {/* <td><pre>{JSON.stringify(proposal.discounts, null, 2)}</pre></td> */}
                    <td>
                      {proposal.discounts ? proposal.discounts.amount : "-"}
                    </td>
                    <td>{roomCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}

      {data.availability &&
        data.offers &&
        data.offers
          .filter(({ id }) =>
            data.availability
              ?.map(({ proposals }) =>
                proposals.map(({ proposal }) => proposal.OfferID)
              )
              .flat()
              .includes(id)
          )
          .map((offer, key) => (
            <div key={key}>
              <Json>{offer}</Json>
              <table className={styles.Table}>
                <tbody>
                  <tr>
                    <th>id</th>
                    <td>{offer.id}</td>
                  </tr>
                  {offer.translations
                    .filter(({ locale }) => ["pl"].includes(locale))
                    .map(({ messages }) => messages)
                    .flat()
                    .map(({ fieldName, value }, key) => (
                      <tr key={key}>
                        <th>{fieldName}</th>
                        <td>
                          <div dangerouslySetInnerHTML={{ __html: value }} />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          ))}

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

function Rooms({ rooms }: { rooms: RoomsType[] }) {
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
          queries.search === "" ||
          item.address.city.toLowerCase().match(queries.search)
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
