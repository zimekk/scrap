import React, { useCallback, useEffect, useMemo, useRef } from "react";
import L from "leaflet";
import {
  CircleMarker,
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  useMap,
} from "react-leaflet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import cx from "classnames";
import styles from "./Map.module.scss";

function DraggableMarker({ position, children, setPosition }) {
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      },
    }),
    []
  );

  return (
    <Marker
      draggable
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    >
      <Tooltip>{children}</Tooltip>
    </Marker>
  );
}

function LocateControl() {
  const map = useMap();

  const onLocate = useCallback(
    (event) => {
      event.preventDefault();
      map.locate({
        setView: true,
      });
    },
    [map]
  );

  return (
    <div className="leaflet-top leaflet-left" style={{ top: 80, fontSize: 16 }}>
      <div className="leaflet-control-locate leaflet-bar leaflet-control">
        <a
          className="leaflet-bar-part leaflet-bar-part-single"
          title="Locate"
          href="#"
          onClick={onLocate}
        >
          <FontAwesomeIcon icon={faCrosshairs} />
        </a>
      </div>
    </div>
  );
}

function Table({ data }) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td></td>
            {Object.keys(data.header).map((name, key) => (
              <th key={key}>{name}</th>
            ))}
          </tr>
          {data.rows
            .sort((a, b) => b.date - a.date)
            .map(({ date, list }, key) => (
              <tr key={key}>
                <th>{new Date(date).toISOString().split("T")[0]}</th>
                {Object.keys(data.header).map((name, key) => (
                  <td key={key}>{list[name]}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export function useBounds(list) {
  return useMemo(
    () =>
      L.featureGroup(
        list.map(({ position: { lat, lng } }) => L.marker([lat, lng]))
      ).getBounds(),
    []
  );
}

export default function Map({ bounds, center, setCenter, list, zoom = 12 }) {
  // https://stackoverflow.com/questions/40719689/how-to-include-leaflet-css-in-a-react-app-with-webpack
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png").default,
      iconUrl: require("leaflet/dist/images/marker-icon.png").default,
      shadowUrl: require("leaflet/dist/images/marker-shadow.png").default,
    });
  }, []);

  const displayMap = useMemo(
    () => (
      <MapContainer
        bounds={bounds}
        center={center}
        zoom={zoom}
        className={cx(styles.Map)}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <DraggableMarker position={center} setPosition={setCenter}>
          {`${center.lat},${center.lng}`}
        </DraggableMarker>
        {list.map(({ i, id, position, name, item }: any) => (
          <CircleMarker
            key={i}
            center={position}
            pathOptions={{ color: "purple" }}
          >
            <Popup minWidth={90}>
              <section>
                <header>
                  {`[${id}] ${[name].concat(item.address || []).join(" - ")} (${
                    center.distanceTo(position).toFixed(0) / 1000
                  } km)`}
                </header>
                <Table
                  data={Object.entries(
                    Object.assign(
                      {
                        [item._updated || item._created]:
                          item.petrol_list.reduce(
                            (list, { type, price }) =>
                              Object.assign(list, { [type]: price }),
                            {}
                          ),
                      },
                      item._history
                    )
                  ).reduce(
                    (table, [time, list]: any) =>
                      Object.assign(table, {
                        header: Object.keys(list).reduce(
                          (header, item) =>
                            Object.assign(header, { [item]: item }),
                          table.header
                        ),
                        rows: table.rows.concat([
                          {
                            date: Number(time),
                            list,
                          },
                        ]),
                      }),
                    {
                      header: {},
                      rows: [],
                    }
                  )}
                />
              </section>
            </Popup>
          </CircleMarker>
        ))}
        <LocateControl />
      </MapContainer>
    ),
    [list, center]
  );

  // https://react-leaflet.js.org/docs/start-setup/
  return <div className={cx(styles.Layout)}>{displayMap}</div>;
}
