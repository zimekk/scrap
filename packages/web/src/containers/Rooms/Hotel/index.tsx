import React, {
  type ChangeEventHandler,
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
            ({ minAge, maxAge }) => minAge <= age && age <= maxAge
          ) >= 0
      )
    )
  );
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

export function Hotel({
  checked,
  setChecked,
  filter,
  item,
}: {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<string[]>>;
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

      {checked && (
        <div>
          <Json>{filter}</Json>

          {availability[availabilityKey] &&
            availability[availabilityKey]?.map(
              ({ occupancy, proposals }, key) => (
                <div key={key}>
                  <Json>{occupancy}</Json>
                  <Json>{proposals}</Json>
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
                          <td>{proposal.OfferID}</td>
                          <td>{proposal.RoomID}</td>
                          <td>{proposal.occupancy.adults}</td>
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
                            {proposal.discounts
                              .map(({ amount }) => amount)
                              .join(", ") || "-"}
                          </td>
                          <td>{roomCount || "-"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
            )}

          {availability[availabilityKey] && data.offers && (
            <div>
              <Json>{data.offers}</Json>
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
                  </tr>
                  {data.offers
                    .filter(({ id }) =>
                      availability[availabilityKey]
                        ?.map(({ proposals }) =>
                          proposals.map(({ proposal }) => proposal.OfferID)
                        )
                        .flat()
                        .includes(id)
                    )
                    .map((offer, key) => (
                      <tr key={key}>
                        <td>{offer.id}</td>
                        <td>
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
                        <td>{offer.attributes.minimumNights || "-"}</td>
                        <td>
                          {
                            offer.translations
                              .find(({ locale }) => locale === "pl")
                              ?.messages.find(
                                ({ fieldName }) => fieldName === "name"
                              )?.value
                          }
                        </td>
                        <td>{offer.attributes.mealPlanType}</td>
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
            </div>
          )}

          {data.rooms && (
            <div>
              <Json>{data.rooms}</Json>
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
                  {data.rooms.map(
                    ({ id, attributes, limits, totalRooms, standard }, key) =>
                      limits ? (
                        <tr key={key}>
                          <td>{id}</td>
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
                          <td>{totalRooms}</td>
                        </tr>
                      ) : (
                        <tr key={key}>
                          <th>{id}</th>
                          <td colSpan={3}>-</td>
                          <td>{totalRooms}</td>
                        </tr>
                      )
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
