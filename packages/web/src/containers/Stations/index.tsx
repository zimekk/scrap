import React, { useCallback, useMemo, useState } from "react";
import { createAsset } from "use-asset";
import Map, { useBounds } from "./Map";
import styles from "./styles.module.scss";

// https://github.com/pmndrs/use-asset#dealing-with-async-assets
const asset = createAsset(async (version) => {
  const res = await fetch(`api/stations/data.json?${version}`);
  return await res.json();
});

function Data({ version = "v1" }) {
  const { results, stations } = asset.read(version); // As many cache keys as you need

  const list = useMemo(
    () =>
      results.map((item, i) => {
        const { station_id: id, x: lat, y: lng, network_name: name } = item;
        return {
          i,
          id,
          position: { lat, lng },
          name,
          item,
          html: stations[id].html,
        };
      }),
    [results, stations]
  );

  const bounds = useBounds(list);
  const [center, setCenter] = useState(() => bounds.getCenter());

  return (
    <div>
      <Map bounds={bounds} center={center} setCenter={setCenter} list={list} />
    </div>
  );
}

export default function Section() {
  return (
    <div className={styles.Section}>
      <h2>Stations</h2>
      <Data />
    </div>
  );
}
