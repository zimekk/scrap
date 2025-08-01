import React, { useMemo } from "react";
import L from "leaflet";
import { CircleMarker, MapContainer, TileLayer, Popup } from "react-leaflet";
import { DraggableMarker, LocateControl } from "../../components/Map";
import cx from "classnames";
import styles from "./Map.module.scss";

export function useBounds(list: { position: L.LatLng }[]) {
  return useMemo(
    () =>
      L.featureGroup(
        list.map(({ position: { lat, lng } }) => L.marker([lat, lng])),
      ).getBounds(),
    [],
  );
}

export default function Map({ bounds, center, setCenter, list }) {
  // const [map, setMap] = useState<L.Map | null>(null);

  const displayMap = useMemo(
    () => (
      <MapContainer
        bounds={bounds}
        // whenCreated={setMap}
        zoom={13}
        className={cx(styles.Map)}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <DraggableMarker position={center} setPosition={setCenter}>
          {`${center.lat},${center.lng}`}
        </DraggableMarker>
        {list.map(({ i, id, position, name, item }) => (
          <CircleMarker
            key={i}
            center={position}
            pathOptions={{ color: "purple" }}
          >
            <Popup minWidth={90}>
              <section>
                <header>
                  {`[${id}] ${name} (${
                    center.distanceTo(position).toFixed(0) / 1000
                  } km)`}
                </header>
                {/* <table>
                  <tbody>
                    {item.petrol_list.map(({ type, price }, key) => (
                      <tr key={key}>
                        <th>{type}</th>
                        <td>{price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table> */}
              </section>
            </Popup>
          </CircleMarker>
        ))}
        <LocateControl />
      </MapContainer>
    ),
    [list, center],
  );

  // https://react-leaflet.js.org/docs/start-setup/
  return (
    <div
      className={cx(styles.Layout)}
      onClick={(e) =>
        ((a) => a && a.getAttribute("href") === "#close" && e.preventDefault())(
          (e.target as Element).closest("a"),
        )
      }
    >
      {displayMap}
    </div>
  );
}
