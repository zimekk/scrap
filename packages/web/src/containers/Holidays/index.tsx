import React, {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { createAsset } from "use-asset";
import { z } from "zod";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Gallery } from "../../components/Gallery";
import { Link } from "../../components/Link";
import styles from "./styles.module.scss";

const GROUP_BY = {
  "": "",
  Hotel_Standard_Stars_Css: "Hotel_Standard_Stars_Css",
  Hotel_Location_Name: "Hotel_Location_Name",
  Hotel_Name: "Hotel_Name",
  Merlin_ParsedStartDate: "Merlin_ParsedStartDate",
  Merlin_Duration: "Merlin_Duration",
};

const SORT_BY = {
  Merlin_FullPriceParsed: 1,
  Merlin_AdultPrice: 1,
  Hotel_AverageRating: -1,
  Merlin_Duration: 1,
  _created: -1,
  _updated: -1,
  _removed: -1,
};

const PRICE_LIST = [0, 10000, 15000, 20000, 25000, 30000, 100000];

const formatPrice = (price: number) =>
  new Intl.NumberFormat("pl-PL", {
    minimumFractionDigits: 2,
  }).format(price);

const asset = createAsset(async (version) => {
  const res = await fetch(`api/holidays/data.json?${version}`);
  return await res
    .json()
    .then((data) =>
      z
        .object({
          Query_AdultsChildenQueryString: z
            .string()
            .transform((query) =>
              [...new URLSearchParams(query).entries()].reduce(
                (result, [key, value]) =>
                  Object.assign(result, { [key]: value }),
                {}
              )
            ),
          Query_AdditionalFiltersQueryString: z
            .string()
            .transform((query) =>
              [...new URLSearchParams(query).entries()].reduce(
                (result, [key, value]) =>
                  Object.assign(result, { [key]: value }),
                {}
              )
            ),
        })
        .passthrough()
        .transform((item) => ({
          Children: item.Query_AdultsChildenQueryString.Children,
          ...item,
        }))
        .array()
        .parseAsync(data)
    )
    .then((data) => ({
      data,
      options: data.reduce(
        (options, item) =>
          [
            "Hotel_Standard_Stars_Css",
            "Hotel_Location_Name",
            "Merlin_ParsedStartFullDate",
            "Merlin_BoardStandardDesc",
            "Children",
          ].reduce(
            (options, prop) => ({
              ...options,
              [prop]: Object.assign({}, options[prop], {
                [item[prop]]: item[prop],
              }),
            }),
            options
          ),
        {}
      ),
    }));
});

function Location({ coordinates: { latitude, longitude } }: any) {
  const link = `//www.google.pl/maps?t=k&q=loc:${latitude}+${longitude}&hl=pl`;

  return (
    <Link href={link} rel="" target="map" style={{ margin: "0 .25em" }}>
      <FontAwesomeIcon icon={faMapMarkerAlt} />
    </Link>
  );
}

const createFilters =
  ({ options }: { options: object }) =>
  (defaults = {}) =>
    Object.assign(
      {
        search: "",

        groupBy: Object.keys(GROUP_BY)[0],
        sortBy: Object.keys(SORT_BY)[0],

        priceFrom: PRICE_LIST[0],
        priceTo: PRICE_LIST[PRICE_LIST.length - 1],

        Children: "",
        Hotel_Standard_Stars_Css: "",
        Merlin_BoardStandardDesc: "",
        Merlin_ParsedStartFullDate: "",
      },
      defaults
    );

function Data({ version = "v1" }) {
  const { data, options } = asset.read(version);

  console.log({ options });

  const [filters, setFilters] = useState(createFilters({ options }));

  const list = useMemo(
    () =>
      data.filter(
        (item) =>
          filters.priceFrom <= item.Merlin_FullPriceParsed &&
          item.Merlin_FullPriceParsed <= filters.priceTo &&
          ["", item.Children].includes(filters.Children) &&
          ["", item.Hotel_Standard_Stars_Css].includes(
            filters.Hotel_Standard_Stars_Css
          ) &&
          ["", item.Merlin_BoardStandardDesc].includes(
            filters.Merlin_BoardStandardDesc
          ) &&
          ["", item.Merlin_ParsedStartFullDate].includes(
            filters.Merlin_ParsedStartFullDate
          ) &&
          item.Hotel_Name.toLowerCase().match(filters.search)
      ),
    [data, filters]
  );

  console.log(list);

  const search$ = useMemo(() => new Subject<any>(), []);

  useEffect(() => {
    const subscription = search$
      .pipe(distinctUntilChanged(), debounceTime(400))
      .subscribe((filters) => console.log(filters));
    return () => subscription.unsubscribe();
  }, [search$]);

  useEffect(() => {
    search$.next(filters);
  }, [filters]);

  const sorted = useMemo(
    () =>
      list.sort(
        (a, b) =>
          SORT_BY[filters.sortBy as keyof typeof SORT_BY] *
          (a[filters.sortBy] === b[filters.sortBy]
            ? 0
            : (a[filters.sortBy] || 0) > (b[filters.sortBy] || 0)
            ? 1
            : -1)
      ),
    [list, filters.sortBy]
  );

  const grouped = useMemo(
    () =>
      sorted.reduce(
        (grouped: Record<string, object[]>, item: any) =>
          ((group) =>
            Object.assign(grouped, {
              [group]: (grouped[group] || []).concat(item),
            }))(item[filters.groupBy] || ""),
        {}
      ),
    [sorted, filters.groupBy]
  );
  console.log({ grouped });
  return (
    <div>
      <Filters filters={filters} setFilters={setFilters} options={options} />
      <div>
        {`Found ${list.length} holidays out of a total of ${data.length}`}{" "}
      </div>
      {Object.entries(grouped).map(([group, items]) => (
        <section key={group}>
          {group && <h3>{group}</h3>}
          <ol>
            {items.map((item, key) => (
              <li key={key} className={styles.Row}>
                <Gallery
                  className={styles.Gallery}
                  images={[item.Hotel_ListingImageUrl]}
                />
                <Details className={styles.Details} item={item} />
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}

function Filters({ filters, setFilters, options }) {
  const onChangePriceFrom = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) =>
      setFilters(({ priceTo, ...filters }) => {
        const priceFrom = Number(target.value);
        return {
          ...filters,
          priceFrom,
          priceTo: priceTo < priceFrom ? priceFrom : priceTo,
        };
      }),
    []
  );
  const onChangePriceTo = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target }) =>
      setFilters(({ priceFrom, ...filters }) => {
        const priceTo = Number(target.value);
        return {
          ...filters,
          priceFrom: priceTo > priceFrom ? priceFrom : priceTo,
          priceTo,
        };
      }),
    []
  );

  return (
    <fieldset className={styles.Filters}>
      <div>
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
                  sortBy: target.value,
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
        <label>
          <span>GroupBy</span>
          <select
            value={filters.groupBy}
            onChange={useCallback<ChangeEventHandler<HTMLSelectElement>>(
              ({ target }) =>
                setFilters((filters) => ({
                  ...filters,
                  groupBy: target.value,
                })),
              []
            )}
          >
            {Object.entries(GROUP_BY).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
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
            onChange={onChangePriceFrom}
          />
          <datalist id="price-list">
            {PRICE_LIST.map((value) => (
              <option
                key={value}
                value={value}
                label={
                  [0, 10000, 20000, 30000, 40000, 50000].includes(value)
                    ? formatPrice(value)
                    : undefined
                }
              ></option>
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
            onChange={onChangePriceTo}
          />
          <span>{`${formatPrice(filters.priceFrom)} - ${formatPrice(
            filters.priceTo
          )}`}</span>
        </label>
      </div>
      <div>
        <label>
          <span>Children</span>
          <select
            value={filters.Children}
            onChange={useCallback<ChangeEventHandler<HTMLSelectElement>>(
              ({ target }) =>
                setFilters((filters) => ({
                  ...filters,
                  Children: target.value,
                })),
              []
            )}
          >
            {[""].concat(Object.values(options.Children)).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          <span>Hotel_Standard_Stars_Css</span>
          <select
            value={filters.Hotel_Standard_Stars_Css}
            onChange={useCallback<ChangeEventHandler<HTMLSelectElement>>(
              ({ target }) =>
                setFilters((filters) => ({
                  ...filters,
                  Hotel_Standard_Stars_Css: target.value,
                })),
              []
            )}
          >
            {[""]
              .concat(Object.values(options.Hotel_Standard_Stars_Css))
              .map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          <span>Merlin_BoardStandardDesc</span>
          <select
            value={filters.Merlin_BoardStandardDesc}
            onChange={useCallback<ChangeEventHandler<HTMLSelectElement>>(
              ({ target }) =>
                setFilters((filters) => ({
                  ...filters,
                  Merlin_BoardStandardDesc: target.value,
                })),
              []
            )}
          >
            {[""]
              .concat(Object.values(options.Merlin_BoardStandardDesc))
              .map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          <span>Merlin_ParsedStartFullDate</span>
          <select
            value={filters.Merlin_ParsedStartFullDate}
            onChange={useCallback<ChangeEventHandler<HTMLSelectElement>>(
              ({ target }) =>
                setFilters((filters) => ({
                  ...filters,
                  Merlin_ParsedStartFullDate: target.value,
                })),
              []
            )}
          >
            {[""]
              .concat(Object.values(options.Merlin_ParsedStartFullDate))
              .map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
          </select>
        </label>
      </div>
    </fieldset>
  );
}

function Details({ item, ...props }) {
  const [expand, setExpand] = useState(() => ({ json: false }));

  return (
    <div {...props}>
      <Link
        href={`${item.Hotel_OfferUrlWithOfferCode}${item.Merlin_Id}`}
      >{`${item.Hotel_Name} (${item.Hotel_Location_Name}) / ${item.Hotel_TextCategory} / ${item.Merlin_FlightFrom}, ${item.Merlin_ParsedStartFullDate}, ${item.Merlin_ParsedDepartureTime}`}</Link>
      <Location
        coordinates={{
          latitude: item.Hotel_GPS_Latitude,
          longitude: item.Hotel_GPS_Longitude,
        }}
      />
      <ul>
        <li>
          Hotel_Type_Name: {item.Hotel_Type_Name} (
          {item.Merlin_BoardStandardDesc})
        </li>
        <li>
          Hotel_Standard_Stars_Css: {item.Hotel_Standard_Stars_Css} (
          {item.Hotel_LocalStandard}: {item.Hotel_Local_Standard_Stars_Css})
        </li>
        <li>
          Merlin_FlightFrom: {item.Merlin_FlightFrom},{" "}
          {item.Merlin_ParsedStartFullDate}, {item.Merlin_ParsedDepartureTime} (
          {item.Merlin_Duration} dni)
        </li>
        {(({ Adults, Children }) => (
          <li>
            Adults: {Adults}, Children: {Children}
          </li>
        ))(item.Query_AdultsChildenQueryString)}
        <li>
          Merlin_FullPriceParsed: {formatPrice(item.Merlin_FullPriceParsed)} (
          {formatPrice(item.Merlin_AdultPrice)})
          {item.Merlin_OfferTypeSitecore && (
            <span>
              {item.Merlin_OfferTypeSitecore.Name} (
              {item.Merlin_OfferTypeSitecore.ShortName})
            </span>
          )}
        </li>
        <li>
          _created: {format(item._created, "yyyy-MM-dd HH:mm")}
          {item._updated && (
            <span>_updated: {format(item._updated, "yyyy-MM-dd HH:mm")}</span>
          )}
        </li>
      </ul>
      <Link
        onClick={(e) => (
          e.preventDefault(),
          setExpand((expand) => ({ ...expand, json: !expand.json }))
        )}
      >
        {expand.json ? "Hide json" : "Show json"}
      </Link>
      {expand.json && <pre>{JSON.stringify(item, null, 2)}</pre>}
    </div>
  );
}

export default function Section() {
  return (
    <div className={styles.Section}>
      <h2>Holidays</h2>
      <Data />
    </div>
  );
}
