import React, {
  type ChangeEventHandler,
  type Dispatch,
  type SetStateAction,
  useCallback,
} from "react";
import { intervalToDuration } from "date-fns";
import { type OccupancyType } from "@dev/cli/src/services/RoomsService/types";

export interface FiltersState {
  checkIn: string;
  checkOut: string;
  search: string;
  filter: string[];
}

export type FilterType = {
  checkIn: string;
  checkOut: string;
  occupancy: OccupancyType[];
};

export const FILTER = [
  {
    adults: 2,
    children: [6, 10, 16],
  },
  {
    adults: 3,
    children: [6, 10],
  },
  {
    adults: 2,
    children: [10, 12],
  },
  {
    adults: 1,
    children: [6, 10],
  },
  {
    adults: 1,
    children: [16],
  },
  {
    adults: 2,
  },
] as OccupancyType[];

export const formatOccupancy = ({ adults, children }: OccupancyType) =>
  `${adults} adults${children ? ` + ${children?.join(", ")} children` : ""}`;

export function Filters({
  filters,
  setFilters,
}: {
  filters: FiltersState;
  setFilters: Dispatch<SetStateAction<FiltersState>>;
}) {
  return (
    <div>
      <fieldset>
        <legend>Period</legend>
        <label>
          <span>CheckIn</span>
          <input
            type="date"
            value={filters.checkIn}
            onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
              ({ target }) =>
                setFilters(({ checkOut, ...filters }) => {
                  const checkIn = target.value;
                  return {
                    ...filters,
                    checkIn,
                    checkOut: checkOut < checkIn ? checkIn : checkOut,
                  };
                }),
              []
            )}
          />
        </label>
        <label>
          <span>CheckOut</span>
          <input
            type="date"
            value={filters.checkOut}
            onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
              ({ target }) =>
                setFilters(({ checkIn, ...filters }) => {
                  const checkOut = target.value;
                  return {
                    ...filters,
                    checkIn: checkOut > checkIn ? checkIn : checkOut,
                    checkOut,
                  };
                }),
              []
            )}
          />
          {/* <pre>{JSON.stringify(filters,null,2)}</pre> */}
          <span>{`${
            intervalToDuration({
              end: new Date(filters.checkOut),
              start: new Date(filters.checkIn),
            }).days
          } nights`}</span>
        </label>
      </fieldset>
      <fieldset>
        <legend>Occupancy</legend>
        {FILTER.map((value) => ({ key: JSON.stringify(value), value })).map(
          ({ key, value }) => (
            <div key={key}>
              <label>
                <input
                  type="checkbox"
                  checked={filters.filter.includes(key)}
                  onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
                    ({ target }) =>
                      setFilters(({ filter, ...filters }) => ({
                        ...filters,
                        filter: target.checked
                          ? filter.concat(key)
                          : filter.filter((_key) => _key !== key),
                      })),
                    []
                  )}
                />
                <span>{formatOccupancy(value)}</span>
              </label>
            </div>
          )
        )}
        {/* <label>
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
      </label> */}
      </fieldset>
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
    </div>
  );
}
