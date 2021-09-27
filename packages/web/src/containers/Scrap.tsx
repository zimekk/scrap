import React, { useCallback, useMemo, useState } from "react";
import { createAsset } from "use-asset";
import Map, { useBounds } from "./Map";
import useDebounce from "./useDebounce";
import usePlace from "./usePlace";
import styles from "./Scrap.module.scss";

// https://github.com/pmndrs/use-asset#dealing-with-async-assets
const asset = createAsset(async (version) => {
  const res = await fetch(`api/data.json?${version}`);
  return await res.json();
});

function Data({ version = "v1" }) {
  const { total_found, results } = asset.read(version); // As many cache keys as you need
  const link = usePlace(
    results.map(
      ({ latitude, longitude, our_url }) =>
        `${latitude},${longitude}|${our_url}`
    )
  );

  const [search, setSearch] = useState("");
  const [filter] = useDebounce(search);

  const onChangeSearch = useCallback(
    ({ target }) => setSearch(target.value),
    []
  );

  const [radius, setRadius] = useState(15);

  const onChangeRadius = useCallback(
    ({ target }) => setRadius(Number(target.value)),
    []
  );

  const list = useMemo(
    () =>
      results
        .filter(({ description_short }) =>
          description_short.toLowerCase().match(filter)
        )
        .map((item, i) => {
          const { latitude: lat, longitude: lng, our_url: name } = item;
          return {
            i,
            position: { lat, lng },
            name,
            item,
          };
        }),
    [results, filter]
  );

  const bounds = useBounds(list);
  const [center, setCenter] = useState(() => bounds.getCenter());

  const nearby = useMemo(
    () =>
      list.filter(
        ({ position }) => center.distanceTo(position) < radius * 1000
      ),
    [list, center, radius]
  );

  return (
    <div>
      <Map
        bounds={bounds}
        center={center}
        setCenter={setCenter}
        list={nearby}
      />
      [{total_found}]
      <fieldset>
        <input type="search" value={search} onChange={onChangeSearch} />
        <input
          type="range"
          min={0}
          max={100}
          value={radius}
          onChange={onChangeRadius}
        />
        <span>{`${radius} km`}</span>
      </fieldset>
      <ol>
        {list
          .map(({ item }) => item)
          .map(
            (
              {
                latitude,
                longitude,
                kind,
                type,
                format,
                area_m2,
                price,
                price_per_m2_pln,
                description_short,
                our_url,
                created,
                changed,
              },
              key: number
            ) => (
              <li key={key}>
                <ul>
                  <li>
                    <a href={link}>{`${latitude},${longitude}|${our_url}`}</a>
                  </li>
                  <li>{kind}</li>
                  <li>{type}</li>
                  <li>{format}</li>
                  <li>{area_m2}</li>
                  <li>{price}</li>
                  <li>{price_per_m2_pln}</li>
                  <li>{description_short}</li>
                  <li>{created}</li>
                  <li>{changed}</li>
                </ul>
              </li>
            )
          )}
      </ol>
    </div>
  );
}

export default function Scrap() {
  return (
    <div className={styles.Scrap}>
      <h2>Scrap</h2>
      <Data />
    </div>
  );
}
