import React, {
  ChangeEvent,
  ChangeEventHandler,
  ReactChild,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrosshairs,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import Truncate from "react-truncate";
import { format } from "date-fns";
import { createAsset } from "use-asset";
import { Gallery } from "../../components/Gallery";
import { Link } from "../../components/Link";
import Map, { useBounds } from "./Map";
import { prepareItem } from "./utils";
import cx from "classnames";
import styles from "./styles.module.scss";

const RADIUS_LIST = [1, 3, 5, 10, 20, 50, 100, 500];

const SORT_BY = {
  id: 1,
  price: 1,
  title: 1,
  _area: 1,
  _terrain_area: 1,
  _created: -1,
  _updated: -1,
};

const PRICE_LIST = [
  0, 100000, 200000, 300000, 400000, 500000, 1000000, 1500000, 2000000, 2500000,
  3000000, 4000000, 5000000,
];

const AREA_LIST = [
  0, 50, 100, 150, 200, 250, 300, 400, 500, 600, 700, 800, 900,
];

const TERRAIN_AREA_LIST = [
  0, 250, 500, 750, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 5000,
];

// https://github.com/pmndrs/use-asset#dealing-with-async-assets
const asset = createAsset(async (version) => {
  const res = await fetch(`api/properties/data.json?${version}`);
  return await res.json().then(({ hide, like, results }) => ({
    hide,
    like,
    results: results
      // .filter((item: { canonical: string }) => item.canonical.match(/otodom/))
      // .filter((item: any) => Object.keys(item._history || {}).length > 1)
      .map((item: object) => ({ ...item, ...prepareItem(item) })),
  }));
});

const unify = (item: {
  coordinates: {
    latitude: number;
    longitude: number;
  } | null;
  title: string;
  price: number;
  parameters: any[];
  _updated?: number;
}) => ({
  ...item,
  position: item.coordinates
    ? {
        lat: item.coordinates.latitude,
        lng: item.coordinates.longitude,
      }
    : null,
  _search: item.title.toLowerCase(),
  _price: item.price,
  _updated: item._updated || 0,
});

function Data({ version = "v1" }) {
  const { results, hide: initialHide, like: initialLike } = asset.read(version); // As many cache keys as you need

  const options = useMemo(
    () => ({
      category: [""].concat(
        results
          .map(({ category }: any) => category)
          .filter(Boolean)
          .filter(
            (value: any, index: number, array: any[]) =>
              array.indexOf(value) === index
          )
          .sort((a: string, b: string) => a.localeCompare(b))
      ),
      location: [""].concat(
        results
          .map(({ _location }: any) => _location)
          .filter(Boolean)
          .filter(
            (value: any, index: number, array: any[]) =>
              array.indexOf(value) === index
          )
          .sort((a: string, b: string) => a.localeCompare(b))
      ),
      road: [""].concat(
        results
          .map(({ road }: any) => road)
          .filter(
            (value: any, index: number, array: any[]) =>
              value !== undefined && array.indexOf(value) === index
          )
          .sort((a: string, b: string) => a.localeCompare(b))
      ),
      building: [""].concat(
        results
          .map(({ building }: any) => building)
          .filter(
            (value: any, index: number, array: any[]) =>
              value !== undefined && array.indexOf(value) === index
          )
          .sort((a: string, b: string) => a.localeCompare(b))
      ),
    }),
    [results]
  );

  const [filters, setFilters] = useState(() => ({
    category: options.category[0],
    location: options.location[0],
    road: options.road[0],
    building: options.building[0],
    search: "",
    showHide: true,
    onlyLike: false,
    priceFrom: PRICE_LIST[0],
    priceTo: PRICE_LIST[PRICE_LIST.length - 4],
    areaFrom: AREA_LIST[0],
    areaTo: AREA_LIST[AREA_LIST.length - 1],
    terrainAreaFrom: TERRAIN_AREA_LIST[0],
    terrainAreaTo: TERRAIN_AREA_LIST[TERRAIN_AREA_LIST.length - 1],
    radius: RADIUS_LIST[RADIUS_LIST.length - 1],
  }));

  const [queries, setQueries] = useState(() => filters);

  const [sortBy, setSortBy] = useState(() => Object.keys(SORT_BY)[5]);

  const onChangeSortBy = useCallback(
    ({ target }) => setSortBy(target.value),
    []
  );

  const search$ = useMemo(() => new Subject<any>(), []);

  useEffect(() => {
    const subscription = search$
      .pipe(
        map(({ search, ...filters }) =>
          JSON.stringify({ ...queries, ...filters, search: search.trim() })
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

  console.log({ options, filters, results });

  const [hide, setHide] = useState<string[]>(initialHide);
  const [like, setLike] = useState<string[]>(initialLike);

  const list = useMemo(
    () =>
      results
        .map(unify)
        .filter(
          (item: {
            id: string;
            category: string;
            road: string;
            building: string;
            _area: number;
            _terrain_area: number;
            _location: string;
            _price: number;
            _search: string;
          }) =>
            (!queries.category || [item.category].includes(queries.category)) &&
            (!queries.location ||
              [item._location].includes(queries.location)) &&
            (!queries.road || [item.road].includes(queries.road)) &&
            (!queries.building || [item.building].includes(queries.building)) &&
            (!queries.onlyLike || like.includes(item.id)) &&
            (queries.showHide || !hide.includes(item.id)) &&
            (item._search.match(queries.search) ||
              queries.search === String(item.id)) &&
            (queries.areaTo === AREA_LIST[0] ||
              (queries.areaFrom <= item._area &&
                item._area <= queries.areaTo)) &&
            (queries.terrainAreaTo === TERRAIN_AREA_LIST[0] ||
              (queries.terrainAreaFrom <= item._terrain_area &&
                item._terrain_area <= queries.terrainAreaTo)) &&
            (queries.priceTo === PRICE_LIST[0] ||
              (queries.priceFrom <= item._price &&
                item._price <= queries.priceTo))
        ),
    [results, queries]
  );

  const sorted = useMemo(
    () =>
      list.sort(
        (a: any, b: any) =>
          (SORT_BY as any)[sortBy] * (a[sortBy] > b[sortBy] ? 1 : -1)
      ),
    [list, sortBy]
  );

  const points = useMemo(
    () => list.filter(({ position }) => Boolean(position)),
    [list]
  );

  const bounds = useBounds(
    // points.length
    false
      ? points
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
      points
        .filter(
          ({ position }: { position: { lat: number; lng: number } }) =>
            center.distanceTo(position) < queries.radius * 1000
        )
        .map((item: { id: string }) => ({
          ...item,
          _like: like.includes(item.id),
          _hide: hide.includes(item.id),
        })),
    [points, center, queries.radius, like, hide]
  );

  const [expand, setExpand] = useState(() => ({ map: false }));
  console.log({ points, center, queries, nearby });
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
            onSelect={(search: string) =>
              setFilters((filters) => ({
                ...filters,
                search,
              }))
            }
          />
        )}
      </div>
      <fieldset>
        <label>
          <span>Category</span>
          <select
            value={filters.category}
            onChange={useCallback(
              ({ target }) =>
                setFilters((filters) => ({
                  ...filters,
                  category: target.value,
                })),
              []
            )}
          >
            {options.category.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Search</span>
          <input
            type="search"
            value={filters.search}
            onChange={useCallback(
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
          <select value={sortBy} onChange={onChangeSortBy}>
            {Object.entries(SORT_BY).map(([value]) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.showHide}
            onChange={useCallback(
              ({ target }) =>
                setFilters((filters) => ({
                  ...filters,
                  showHide: target.checked,
                })),
              []
            )}
          />
          <span>Show hidden</span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.onlyLike}
            onChange={useCallback(
              ({ target }) =>
                setFilters((filters) => ({
                  ...filters,
                  onlyLike: target.checked,
                })),
              []
            )}
          />
          <span>Only likes</span>
        </label>
        <div>
          <label>
            <span>Location</span>
            <select
              value={filters.location}
              onChange={useCallback(
                ({ target: { value } }) =>
                  setFilters((filters) => ({
                    ...filters,
                    location: value,
                  })),
                []
              )}
            >
              {options.location.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            <span>Road</span>
            <select
              value={filters.road}
              onChange={useCallback(
                ({ target: { value } }) =>
                  setFilters((filters) => ({
                    ...filters,
                    road: value,
                  })),
                []
              )}
            >
              {options.road.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            <span>Building</span>
            <select
              value={filters.building}
              onChange={useCallback(
                ({ target: { value } }) =>
                  setFilters((filters) => ({
                    ...filters,
                    building: value,
                  })),
                []
              )}
            >
              {options.building.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            <span>Area From</span>
            <input
              type="range"
              list="area-list"
              min={AREA_LIST[0]}
              max={AREA_LIST[AREA_LIST.length - 1]}
              value={filters.areaFrom}
              onChange={useCallback(
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
              onChange={useCallback(
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
            <span>Terrain Area From</span>
            <input
              type="range"
              list="terrain-area-list"
              min={TERRAIN_AREA_LIST[0]}
              max={TERRAIN_AREA_LIST[TERRAIN_AREA_LIST.length - 1]}
              value={filters.terrainAreaFrom}
              onChange={useCallback(
                ({ target }) =>
                  setFilters(({ terrainAreaTo, ...criteria }) => {
                    const terrainAreaFrom = Number(target.value);
                    return {
                      ...criteria,
                      terrainAreaFrom,
                      terrainAreaTo:
                        terrainAreaTo < terrainAreaFrom
                          ? terrainAreaFrom
                          : terrainAreaTo,
                    };
                  }),
                []
              )}
            />
            <datalist id="terrain-area-list">
              {TERRAIN_AREA_LIST.map((value) => (
                <option key={value} value={value}></option>
              ))}
            </datalist>
          </label>
          <label>
            <span>Terrain Area To</span>
            <input
              type="range"
              list="terrain-area-list"
              min={TERRAIN_AREA_LIST[0]}
              max={TERRAIN_AREA_LIST[TERRAIN_AREA_LIST.length - 1]}
              value={filters.terrainAreaTo}
              onChange={useCallback(
                ({ target }) =>
                  setFilters(({ terrainAreaFrom, ...criteria }) => {
                    const terrainAreaTo = Number(target.value);
                    return {
                      ...criteria,
                      terrainAreaFrom:
                        terrainAreaTo > terrainAreaFrom
                          ? terrainAreaFrom
                          : terrainAreaTo,
                      terrainAreaTo,
                    };
                  }),
                []
              )}
            />
            <span>{`${new Intl.NumberFormat().format(
              filters.terrainAreaFrom
            )} - ${new Intl.NumberFormat().format(
              filters.terrainAreaTo
            )} m2`}</span>
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
              onChange={useCallback(
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
              onChange={useCallback(
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
      <div>{`Found ${list.length} properties out of a total of ${results.length}`}</div>
      <ol>
        {sorted
          .slice(0, 100)
          .map(
            (item: {
              id: string;
              images: string[];
              canonical: string;
              title: string;
              price: number;
              description: string[];
              parameters: [{ label: string; value: string }];
              coordinates: { latitude: number; longitude: number };
              _address: string[];
              _created: number;
              _history: Record<number, { price: number }>;
            }) => (
              <li
                key={item.id}
                className={cx(
                  styles.Row,
                  like.includes(item.id) && styles.Like,
                  hide.includes(item.id) && styles.Hide
                )}
              >
                {!hide.includes(item.id) && (
                  <Gallery className={styles.Gallery} images={item.images} />
                )}
                <Summary
                  {...item}
                  hide={hide}
                  setHide={setHide}
                  like={like}
                  setLike={setLike}
                />
                {!hide.includes(item.id) && <Details {...item} />}
                {Object.entries(item._history || {})
                  .reverse()
                  .map(([_updated, item]) => (
                    <History
                      key={_updated}
                      _updated={Number(_updated)}
                      {...item}
                    />
                  ))}
              </li>
            )
          )}
      </ol>
    </div>
  );
}

// https://developers.google.com/maps/documentation/urls/get-started#search-examples
function Location({ coordinates: { latitude, longitude } }: any) {
  // const link = usePlace([`${latitude},${longitude}|${canonical}`]);
  // https://stackoverflow.com/questions/2660201/what-parameters-should-i-use-in-a-google-maps-url-to-go-to-a-lat-lon
  const link = `//www.google.pl/maps?t=k&q=loc:${latitude}+${longitude}&hl=pl`;

  return (
    <Link href={link} rel="" target="map" style={{ margin: "0 .25em" }}>
      <FontAwesomeIcon icon={faMapMarkerAlt} />
    </Link>
  );
}

// https://developers.google.com/maps/documentation/urls/get-started#directions-examples
function Directions({ coordinates: { latitude, longitude } }: any) {
  const origin = `${latitude},${longitude}`;
  const destination = "52.2268,20.9921";
  const travelmode: "driving" | "walking" | "bicycling" | "transit" = "driving";
  const link = `//www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    origin
  )}&destination=${encodeURIComponent(
    destination
  )}&travelmode=${encodeURIComponent(travelmode)}&hl=pl`;

  return (
    <Link href={link} rel="" target="map" style={{ margin: "0 .25em" }}>
      <FontAwesomeIcon icon={faCrosshairs} />
    </Link>
  );
}

function Toggle({
  children,
  ...props
}: {
  children: ReactChild;
  checked: boolean;
  onChange: ChangeEventHandler;
}) {
  return (
    <label>
      <input type="checkbox" {...props} />
      <span>{children}</span>
    </label>
  );
}

function Summary({
  id,
  canonical,
  coordinates,
  price,
  title,
  hide,
  setHide,
  like,
  setLike,
  _address,
  _created,
  _updated = 0,
  _checked = 0,
}: {
  id: string;
  canonical: string;
  coordinates: { latitude: number; longitude: number };
  price: number;
  title: string;
  hide: string[];
  setHide: Function;
  like: string[];
  setLike: Function;
  _address: string[];
  _created: number;
  _updated: number;
  _checked: number;
}) {
  return (
    <div className={styles.Summary}>
      <div>
        <div className={styles.Sidebar}>
          <Toggle
            checked={like.includes(id)}
            onChange={(e: ChangeEvent<HTMLInputElement>) => (
              fetch(`api/properties/like.json?id=${id}`),
              setLike((like: string[]) =>
                e.target.checked
                  ? like.concat(id)
                  : like.filter((like: string) => like !== id)
              )
            )}
          >
            Like
          </Toggle>
          <Toggle
            checked={hide.includes(id)}
            onChange={(e: ChangeEvent<HTMLInputElement>) => (
              fetch(`api/properties/hide.json?id=${id}`),
              setHide((hide: string[]) =>
                e.target.checked
                  ? hide.concat(id)
                  : hide.filter((hide: string) => hide !== id)
              )
            )}
          >
            Hide
          </Toggle>
        </div>
        <div>
          {format(_created, "yyyy-MM-dd HH:mm")}
          {_updated > 0 && ` updated: ${format(_updated, "yyyy-MM-dd HH:mm")}`}
          {_checked > 0 && ` checked: ${format(_checked, "yyyy-MM-dd HH:mm")}`}
        </div>
      </div>
      <div style={{ clear: "right" }}>
        <h4>{`${new Intl.NumberFormat().format(price)} PLN`}</h4>
        <h3>
          <Link href={canonical}>{title}</Link>{" "}
          {coordinates && <Location coordinates={coordinates} />}
          {coordinates && <Directions coordinates={coordinates} />}
        </h3>
      </div>
      {_address && <h6>{_address.join(" / ")}</h6>}
    </div>
  );
}

function Details({
  description,
  parameters,
}: {
  description: string[];
  parameters: [{ label: string; value: string }];
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.Details}>
      <Truncate
        ellipsis={
          <a href="#" onClick={(e) => (e.preventDefault(), setExpanded(true))}>
            ...
          </a>
        }
        lines={!expanded && 3}
      >
        {description.map((paragraph, key) => (
          <p key={key}>{paragraph}</p>
        ))}
      </Truncate>
      <ul>
        {parameters.map(({ label, value }, key) => (
          <li key={key}>
            {label}: <b>{value}</b>
          </li>
        ))}
      </ul>
    </div>
  );
}

function History({ price, _updated }: { price: number; _updated: number }) {
  return (
    <div className={styles.History}>
      <div>
        <div className={styles.Sidebar}>
          <h5>{`${new Intl.NumberFormat().format(price)} PLN`}</h5>
        </div>
        <div>{format(_updated, "yyyy-MM-dd HH:mm")}</div>
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <div className={styles.Section}>
      <h2>Properties</h2>
      <Data />
    </div>
  );
}
