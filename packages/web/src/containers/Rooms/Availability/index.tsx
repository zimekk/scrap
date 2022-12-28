import React, {
  type MouseEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { stringify } from "qs";
import {
  Data,
  type DataType,
  type RoomsType,
  getOccupancy,
} from "@dev/cli/src/services/RoomsService/types";
import { Json } from "../../../components/Json";
import { Link } from "../../../components/Link";
import styles from "./styles.module.scss";

export type FilterType = {
  checkIn: string;
  checkOut: string;
  occupancy: {
    adults: number;
    children?: number[];
  };
};

export const getData = (path: string, data?: object) =>
  fetch(path, {
    method: data ? "POST" : "GET",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data ? JSON.stringify(data) : null,
  }).then((res) => res.json());

export const formatPrice = ({
  amount,
  currency,
}: {
  amount: number;
  currency: string;
}) => `${amount} ${currency}`;

export function Availability({
  filter,
  item,
  data,
}: {
  filter: FilterType;
  item: RoomsType;
  data: DataType;
}) {
  const [availability, setAvailability] = useState<
    Record<string, DataType["availability"]>
  >(() => ({}));
  const filterKey = useMemo(() => JSON.stringify(filter), [filter]);

  return (
    <div>
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
                  setAvailability((data) => ({
                    ...data,
                    [filterKey]: availability,
                  }))
                )
              ),
            [filter, data.personTypes]
          )}
        >
          availability
        </button>
      </div>
      {availability[filterKey] &&
        availability[filterKey]?.map(({ occupancy, proposals }, key) => (
          <div key={key}>
            <Json>{occupancy}</Json>
            <Json>{proposals}</Json>
            <table className={styles.Table}>
              <tbody>
                <tr>
                  <th rowSpan={2}>hotel</th>
                  <th colSpan={10}>proposal</th>
                  <th rowSpan={2}>roomCount</th>
                </tr>
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
                </tr>
                {proposals.map(({ proposal, roomCount }, key) => (
                  <tr key={key}>
                    {/* <td><pre>{JSON.stringify(proposal, null, 2)}</pre></td> */}
                    <td>
                      {item.url ? <Link href={item.url}>{item.url}</Link> : "-"}
                    </td>
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
                    <td>{roomCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}

      {availability[filterKey] &&
        data.offers &&
        data.offers
          .filter(({ id }) =>
            availability[filterKey]
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
    </div>
  );
}
