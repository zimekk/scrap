import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { createAsset } from "use-asset";
import Chart from "./ZoomableLineChart";
import styles from "./styles.module.scss";

import type { Meta, Item } from "@dev/cli/src/services/QuotesService/types";

// https://github.com/pmndrs/use-asset#dealing-with-async-assets
const asset = createAsset(async (version) => {
  const res = await fetch(`api/quotes/data.json?${version}`);
  return await res.json();
});

function Data({ version = "v1" }) {
  const { metas, objects: results } = asset.read(version) as {
    metas: Meta[];
    objects: Item[];
  };

  const options = useMemo(
    () => ({
      investment: metas
        .map(({ id, name }) => ({ id, name }))
        .sort((a, b) => a.name.localeCompare(b.name)),
    }),
    [results]
  );

  const [filters, setFilters] = useState(() => ({
    investment: options.investment[0].id,
    search: "",
  }));

  const [queries, setQueries] = useState(() => filters);

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

  const list = useMemo(
    () =>
      results.reduce(
        (list: any, item) =>
          Object.assign(list, {
            [item.investment_id]: (list[item.investment_id] || []).concat(item),
          }),
        {}
      ),
    [results]
  );

  return (
    <div>
      <fieldset>
        <label>
          <span>Investment</span>
          <select
            value={filters.investment}
            onChange={useCallback(
              ({ target }) =>
                setFilters((filters) => ({
                  ...filters,
                  investment: Number(target.value),
                })),
              []
            )}
          >
            {options.investment.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
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
      </fieldset>
      <Chart
        list={list[queries.investment]}
        // data={[
        //   {name:'a',value:1},
        //   {name:'b',value:3},
        //   {name:'c',value:2}
        // ]}
        //  data={Object.entries(list)
        // .reduce((data, [name, list]) => list.reduce((data, item) => Object.assign(data, {
        // }) data), {})
        // .map(([name, list]) => ({name, list: list.map(item => ({
        //   ...item,
        //   date: new Date(item.price_timestamp).getTime()
        // }))}))}
      />
      {/* <Chart2 list={list} /> */}
      {options.investment.map(({ id, name }) => (
        <div key={id}>
          <h3>{name}</h3>
          {/* <Chart list={list[id]} /> */}
        </div>
      ))}
      <pre>{JSON.stringify(metas, null, 2)}</pre>
      <pre>{JSON.stringify(list[queries.investment].slice(0, 5), null, 2)}</pre>
    </div>
  );
}

export default function Section() {
  return (
    <div className={styles.Section}>
      <h2>Quotes</h2>
      <Data />
    </div>
  );
}
