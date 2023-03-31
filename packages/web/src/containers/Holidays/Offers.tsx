import React, {
  type MouseEventHandler,
  Suspense,
  useCallback,
  useMemo,
  useState,
} from "react";
import { createAsset } from "use-asset";
import { Link } from "../../components/Link";
import styles from "./Offers.module.scss";

import type {
  HotelOffersQueryType,
  HotelOffersType,
} from "@dev/cli/src/services/HolidaysService/types";

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("pl-PL", {
    minimumFractionDigits: 2,
  }).format(price);

const createParams = ({
  Hotel_OfferUrlWithOfferCode,
  Merlin_Id,
  Query_AdditionalFiltersQueryString,
  Query_AdultsChildenQueryString,
}) => ({
  hotelSlug: Hotel_OfferUrlWithOfferCode.match(/\/([^\/]+)\?/)[1],
  offercode: Merlin_Id,
  airports: Query_AdditionalFiltersQueryString.From,
  Dates: [
    Query_AdditionalFiltersQueryString.DateOfDeparture,
    Query_AdditionalFiltersQueryString.DateOfReturn,
  ].join(":"),
  ...Query_AdultsChildenQueryString,
});

const asset = createAsset(async (params: HotelOffersQueryType) => {
  console.log({ params });
  const res = await fetch(
    `api/holidays/offers/data.json?${new URLSearchParams(params)}`
  );
  return (await res.json()) as Promise<HotelOffersType>;
});

const Spinner = () => <span>Loading...</span>;

function Table({ item, version = 1 }: { item: any; version?: number }) {
  const [expanded, setExpanded] = useState<number[]>([]);
  const { HotelOffers, OffersToLoad, IsThereMoreOffers, PageSize } = asset.read(
    createParams(item)
  );

  console.log({ HotelOffers, OffersToLoad, IsThereMoreOffers, PageSize });

  const list = useMemo(() => HotelOffers, [HotelOffers]);

  return (
    <table>
      <tbody>
        <tr>
          <th>PRZELOT</th>
          <th>TERMINY</th>
          <th>POBYT</th>
          <th>POKOJE</th>
          <th>WYŻYWIENIE</th>
          <th>CENA</th>
        </tr>
        {list.map((item, i) =>
          [
            <tr key={i}>
              <td>
                <a
                  href="#"
                  onClick={useCallback<MouseEventHandler>(
                    (e) => (
                      e.preventDefault(),
                      setExpanded((expanded) =>
                        expanded.includes(i)
                          ? expanded.filter((n) => n !== i)
                          : expanded.concat(i)
                      )
                    ),
                    []
                  )}
                >
                  {item.FlightFrom} / {item.ParsedDepartureTime} &#10142;{" "}
                  {item.ReturnFlightTo} / {item.ParsedReturnArrivalTime}
                </a>
              </td>
              <td>{item.ParsedTripDateWithDays}</td>
              <td>{item.Duration}</td>
              <td>{item.DescriptionOfRoom}</td>
              <td>{item.BoardStandardDesc}</td>
              <td align="right">
                <Link href={`${item.HotelUrl}${item.Id}${item.FilterData}`}>
                  {formatPrice(item.AdultPriceInt)}
                </Link>
              </td>
            </tr>,
          ].concat(
            expanded.includes(i)
              ? [
                  <tr key={`${i}-details`}>
                    <td></td>
                    <td colSpan={5}>
                      <pre>{JSON.stringify(item, null, 2)}</pre>
                    </td>
                  </tr>,
                ]
              : []
          )
        )}
      </tbody>
    </table>
  );
}

export default function Offers({ item }: { item: any }) {
  const [expand, setExpand] = useState(false);

  return (
    <div className={styles.Offers}>
      <Link
        onClick={(e) => (e.preventDefault(), setExpand((expand) => !expand))}
      >
        {expand ? "Hide offers" : "Show offers"}
      </Link>
      {expand && (
        <Suspense fallback={<Spinner />}>
          <Table item={item} />
        </Suspense>
      )}
    </div>
  );
}
