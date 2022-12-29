import React, {
  type ChangeEventHandler,
  type ComponentProps,
  type Dispatch,
  type MouseEventHandler,
  type SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import {
  Data,
  type DataType,
  type RoomsType,
  getOccupancy,
} from "@dev/cli/src/services/RoomsService/types";
import { Json } from "../../../components/Json";
import { Link } from "../../../components/Link";
import { formatPrice, getData } from "../Availability";
import { type FilterType } from "../Filters";
import { getDirectionsLink } from "../Map";
import styles from "./styles.module.scss";
import { stringify } from "qs";

const origin = { lat: 52.1793, lng: 21.0498 };

function checkOccupacy({ occupancy }: FilterType, { personTypes }: DataType) {
  return (
    personTypes &&
    occupancy.every(({ children = [] }) =>
      children.every(
        (age) =>
          personTypes.findIndex(
            ({ minAge, maxAge }) =>
              minAge !== null &&
              maxAge !== null &&
              minAge <= age &&
              age <= maxAge
          ) >= 0
      )
    )
  );
}

function findLowestPrices(
  availability: DataType["availability"],
  offerId?: number
) {
  return (
    availability &&
    availability
      .map(({ proposals }) =>
        proposals.reduce(
          (
            result,
            { proposal: { price, originalPrice, simulatedPrice, OfferID } }
          ) =>
            !offerId || offerId === OfferID
              ? Object.entries({ price, originalPrice, simulatedPrice }).reduce(
                  (result, [key, price]) =>
                    Object.assign(
                      result,
                      price && (result[key]?.amount || Infinity) > price.amount
                        ? {
                            [key]: price,
                          }
                        : {}
                    ),
                  result
                )
              : result,
          {} as Record<string, { amount: number }>
        )
      )
      .map((prices) =>
        Object.entries(prices)
          .sort((a, b) => a[1].amount - b[1].amount)
          .slice(0, 1)
          .flat()
      )
      .filter(({ length }) => length > 0)
  );
}

function formatPrices(
  lowestPrices: Array<[string, { amount: number; currency: string }]>
) {
  return lowestPrices
    ?.concat(
      lowestPrices.length > 1
        ? [
            [
              "total",
              lowestPrices.reduce(
                (result, [_, { amount, currency }]) =>
                  Object.assign(result, {
                    amount: (result.amount || 0) + amount,
                    currency,
                  }),
                {}
              ),
            ],
          ]
        : []
    )
    .map(([key, price]) => `${key}: ${formatPrice(price)}`)
    .join(", ");
}

function getQueryParams(
  { checkIn, checkOut, occupancy }: FilterType,
  { defaultCurrency }: RoomsType,
  { personTypes }: DataType
) {
  return ([] as ReturnType<typeof getOccupancy>)
    .concat(personTypes ? getOccupancy(personTypes, occupancy) : [])
    .reduce(
      (result, { adults, children }, key) =>
        Object.assign(
          result,
          children.reduce(
            (result, { minAge, maxAge, count }) =>
              Object.assign(result, {
                [`r${key + 1}_child${minAge}-${maxAge}`]: count,
              }),
            {
              [`r${key + 1}_adults`]: adults,
            }
          )
        ),
      {
        "check-in": checkIn,
        "check-out": checkOut,
        currency: defaultCurrency.code,
      }
    );
}

export function Selectable(props: ComponentProps<"div">) {
  return (
    <div
      className={styles.Selectable}
      tabIndex={0}
      onFocus={(e) => {
        const range = document.createRange();
        range.selectNode(e.target);
        window.getSelection()?.removeAllRanges();
        window.getSelection()?.addRange(range);
      }}
      {...props}
    />
  );
}

function HotelSummary({
  checked,
  setChecked,
  filter,
  item,
  data,
  setData,
  availability,
  availabilityKey,
  availabilityQuery,
  setAvailability,
}: {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<string[]>>;
  filter: FilterType;
  item: RoomsType;
  data: DataType;
  setData: Dispatch<SetStateAction<DataType>>;
  availability: Record<string, DataType["availability"]>;
  availabilityKey: string;
  availabilityQuery: string;
  setAvailability: Dispatch<SetStateAction<typeof availability>>;
}) {
  const link = `https://booking.profitroom.com/pl/${item.id}`;

  return (
    <div>
      <label>
        <input
          type="checkbox"
          value={item.id}
          checked={checked}
          onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
            ({ target }) =>
              setChecked((checked) =>
                !target.checked
                  ? checked.filter((n) => n !== target.value)
                  : checked.concat(target.value)
              ),
            []
          )}
        />
      </label>
      <Link
        href={`${link}/home?${stringify(getQueryParams(filter, item, data))}`}
      >
        {link}
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
      <button
        disabled={Boolean(data.offers)}
        onClick={useCallback<MouseEventHandler>(
          (e) =>
            (e.preventDefault(), getData(`api/rooms/${item.id}/offers`)).then(
              (offers) => (
                Data.parse({ offers }), setData((data) => ({ ...data, offers }))
              )
            ),
          []
        )}
      >
        offers
      </button>
      <button
        disabled={Boolean(data.rooms)}
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
      </button>
      <button
        disabled={!checkOccupacy(filter, data)}
        onClick={useCallback<MouseEventHandler>(
          (e) =>
            (e.preventDefault(),
            getData(
              `api/rooms/${item.id}/availability?${availabilityQuery}`
            )).then(
              (availability) => (
                Data.parse({ availability }),
                setAvailability((data) => ({
                  ...data,
                  [availabilityKey]: availability,
                }))
              )
            ),
          [availabilityQuery, availabilityKey]
        )}
      >
        availability
      </button>
      [{formatPrices(findLowestPrices(availability[availabilityKey]))}]
    </div>
  );
}

function HotelDetails({
  filter,
  data,
  availability,
  availabilityKey,
}: {
  filter: FilterType;
  data: DataType;
  availability: Record<string, DataType["availability"]>;
  availabilityKey: string;
}) {
  const { offerIds, roomIds } = useMemo(
    () =>
      (availability[availabilityKey] || []).reduce(
        (result, { proposals }) =>
          proposals.reduce((result, { proposal: { OfferID, RoomID } }) => {
            result.offerIds.add(OfferID);
            result.roomIds.add(RoomID);
            return result;
          }, result),
        { offerIds: new Set<number>(), roomIds: new Set<number>() }
      ),
    [availability[availabilityKey]]
  );

  return (
    <div>
      <Json>{filter}</Json>
      {availability[availabilityKey] &&
        availability[availabilityKey]?.map(({ occupancy, proposals }, key) => (
          <div key={key}>
            <Json>{occupancy}</Json>
            <Json>{proposals}</Json>
            <Selectable>
              <table className={styles.Table}>
                <tbody>
                  {/* <tr>
            <th rowSpan={2}>hotel</th>
            <th colSpan={10}>proposal</th>
            <th rowSpan={2}>roomCount</th>
          </tr> */}
                  <tr>
                    <th>OfferID</th>
                    <th>RoomID</th>
                    <th>adults</th>
                    <th>children</th>
                    <th>from</th>
                    <th>to</th>
                    <th>price</th>
                    <th>originalPrice</th>
                    <th>simulatedPrice</th>
                    <th>discounts</th>
                    <th>roomCount</th>
                  </tr>
                  {proposals.map(({ proposal, roomCount }, key) => (
                    <tr key={key}>
                      {/* <td><pre>{JSON.stringify(proposal, null, 2)}</pre></td> */}
                      {/* <td>
                {item.url ? <Link href={item.url}>{item.url}</Link> : "-"}
              </td> */}
                      <td align="right">{proposal.OfferID}</td>
                      <td align="right">{proposal.RoomID}</td>
                      <td align="right">{proposal.occupancy.adults}</td>
                      <td>
                        {proposal.occupancy.children
                          .map(
                            ({ minAge, maxAge, count }) =>
                              `${count} (${minAge}-${maxAge})`
                          )
                          .join(", ")}
                      </td>
                      <td>{proposal.stay.from}</td>
                      <td>{proposal.stay.to}</td>
                      <td align="right">{formatPrice(proposal.price)}</td>
                      <td align="right">
                        {proposal.originalPrice
                          ? formatPrice(proposal.originalPrice)
                          : "-"}
                      </td>
                      <td align="right">
                        {proposal.simulatedPrice
                          ? formatPrice(proposal.simulatedPrice)
                          : "-"}
                      </td>
                      {/* <td><pre>{JSON.stringify(proposal.discounts, null, 2)}</pre></td> */}
                      <td align="right">
                        {proposal.discounts
                          .map(({ amount }) => amount)
                          .join(", ") || "-"}
                      </td>
                      <td align="right">{roomCount || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Selectable>
          </div>
        ))}

      {availability[availabilityKey] && data.offers && (
        <div>
          <Json>{data.offers}</Json>
          <Selectable>
            <table className={styles.Table}>
              <tbody>
                <tr>
                  <th>OfferID</th>
                  <th>deposit</th>
                  <th>from</th>
                  <th>to</th>
                  <th>minimumNights</th>
                  <th>name</th>
                  <th>mealPlanType</th>
                  <th>minimumPrice</th>
                </tr>
                {data.offers
                  .filter(({ id }) => offerIds.has(id))
                  .map((offer, key) => (
                    <tr key={key}>
                      <td align="right">{offer.id}</td>
                      <td align="right">
                        {offer.profiles
                          .map(({ deposit }) => deposit?.percentage)
                          .join(", ")}
                      </td>
                      <td>
                        {offer.attributes.dateRange
                          ? offer.attributes.dateRange.from
                          : "-"}
                      </td>
                      <td>
                        {offer.attributes.dateRange
                          ? offer.attributes.dateRange.to
                          : "-"}
                      </td>
                      <td align="right">
                        {offer.attributes.minimumNights || "-"}
                      </td>
                      <td>
                        {
                          offer.translations
                            .find(({ locale }) => locale === "pl")
                            ?.messages.find(
                              ({ fieldName }) => fieldName === "name"
                            )?.value
                        }
                      </td>
                      <td align="right">{offer.attributes.mealPlanType}</td>
                      <td>
                        {formatPrices(
                          findLowestPrices(
                            availability[availabilityKey],
                            offer.id
                          )
                        )}
                      </td>
                    </tr>
                  ))}
                {/* {offer.translations
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
              ))} */}
              </tbody>
            </table>
          </Selectable>
        </div>
      )}

      {data.rooms && (
        <div>
          <Json>{data.rooms}</Json>
          <Selectable>
            <table className={styles.Table}>
              <tbody>
                <tr>
                  <th>RoomID</th>
                  <th>kind</th>
                  <th>type</th>
                  <th>standard</th>
                  <th>area</th>
                  <th>rooms</th>
                  <th>numberOfPeople</th>
                  <th>adults</th>
                  <th>children</th>
                  <th>facilities</th>
                  <th>totalRooms</th>
                </tr>
                {data.rooms
                  .filter(({ id }) => roomIds.has(id))
                  .map(
                    ({ id, attributes, limits, totalRooms, standard }, key) =>
                      limits ? (
                        <tr key={key}>
                          <td align="right">{id}</td>
                          <td>{standard.kind}</td>
                          <td>{standard.type}</td>
                          <td>{standard.standard}</td>
                          <td>{attributes.area}</td>
                          <td>
                            {attributes.layout?.rooms || "-"}
                            {(attributes.layout?.bathrooms ||
                              attributes.layout?.kitchen) &&
                              ` (${([] as string[])
                                .concat(
                                  attributes.layout?.bathrooms
                                    ? `${attributes.layout?.bathrooms} bathrooms`
                                    : [],
                                  attributes.layout?.kitchen ? `kitchen` : []
                                )
                                .join(", ")})`}
                          </td>
                          <td>
                            {`${limits.min.numberOfPeople}-${limits.max.numberOfPeople}`}
                            {attributes.maxOccupancy?.extraBeds &&
                              ` (${attributes.maxOccupancy.extraBeds} extraBeds)`}
                          </td>
                          <td>{`${limits.min.occupancy.adults}-${limits.max.occupancy.adults}`}</td>
                          <td>
                            {limits.max.occupancy.children
                              .map(
                                ({ count, minAge, maxAge }) =>
                                  `${count} (${minAge}-${maxAge})`
                              )
                              .join(", ")}
                          </td>
                          <td>
                            {Object.entries(attributes.facilities || {})
                              .filter(([_, exists]) => Boolean(exists))
                              .map(([value]) => value)
                              .join(", ")}
                          </td>
                          <td align="right">{totalRooms}</td>
                        </tr>
                      ) : (
                        <tr key={key}>
                          <th align="right">{id}</th>
                          <td colSpan={3}>-</td>
                          <td align="right">{totalRooms}</td>
                        </tr>
                      )
                  )}
              </tbody>
            </table>
          </Selectable>
        </div>
      )}
    </div>
  );
}

export function Hotel({
  checked,
  setChecked,
  available,
  filter,
  item,
}: {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<string[]>>;
  available: boolean;
  filter: FilterType;
  item: RoomsType;
}) {
  const [data, setData] = useState<DataType>(() => item._cache || {});

  const [availability, setAvailability] = useState<
    Record<string, DataType["availability"]>
  >(() => item._cache?.availability || {});

  const availabilityQuery = useMemo(
    () =>
      stringify({
        checkIn: filter.checkIn,
        checkOut: filter.checkOut,
        occupancy:
          data.personTypes && getOccupancy(data.personTypes, filter.occupancy),
      }),
    [filter, data.personTypes]
  );

  const availabilityKey = useMemo(
    () => JSON.stringify(availabilityQuery),
    [availabilityQuery]
  );

  return !available ||
    (checkOccupacy(filter, data) &&
      (!availability[availabilityKey] ||
        availability[availabilityKey]?.find(
          ({ proposals }) => proposals.length > 0
        ))) ? (
    <div>
      <HotelSummary
        checked={checked}
        setChecked={setChecked}
        filter={filter}
        item={item}
        data={data}
        setData={setData}
        availability={availability}
        availabilityKey={availabilityKey}
        availabilityQuery={availabilityQuery}
        setAvailability={setAvailability}
      />
      {checked && (
        <HotelDetails
          filter={filter}
          data={data}
          availability={availability}
          availabilityKey={availabilityKey}
        />
      )}
    </div>
  ) : null;
}
