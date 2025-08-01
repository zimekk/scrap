import React, { type Dispatch, type SetStateAction, useMemo } from "react";
import L, { Icon, type LatLng, type LatLngBounds } from "leaflet";
import { Marker, MapContainer, TileLayer, Popup } from "react-leaflet";
import { DraggableMarker, LocateControl } from "../../components/Map";
import cx from "classnames";
import styles from "./Map.module.scss";

export const getIconUrl = (url: string) =>
  new URL(url, "https://www.autocentrum.pl").toString();

function Table({
  data,
}: {
  data: {
    header: Record<string, string>;
    rows: {
      date: number;
      list: Record<string, string>;
    }[];
  };
}) {
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

export function useBounds(list: { position: LatLng }[]) {
  return useMemo(
    () =>
      L.featureGroup(
        list.map(({ position: { lat, lng } }) => L.marker([lat, lng])),
      ).getBounds(),
    [],
  );
}

export default function Map({
  bounds,
  center,
  setCenter,
  list,
  zoom = 12,
}: {
  bounds: LatLngBounds;
  center: LatLng;
  setCenter: Dispatch<SetStateAction<LatLng>>;
  list: {
    i: number;
    id: number;
    name: string;
    position: LatLng;
    item: {
      // _distance: number;
      // _id: string;
      _created: number;
      _updated: number;
      // id: number;
      // station_id: number;
      // x: number;
      // y: number;
      address: string;
      map_img: string;
      // network_id: number;
      // network_name: string;
      petrol_list: {
        type: string;
        price: string;
      }[];
      _history: Record<string, string>;
    };
  }[];
  zoom?: number;
}) {
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
        {list.map(({ i, id, position, name, item }) => (
          <Marker
            key={i}
            position={position}
            icon={
              new Icon({
                iconUrl: item.map_img
                  ? getIconUrl(item.map_img)
                  : require("leaflet/dist/images/marker-icon.png").default,
                iconSize: [30, 40],
              })
            }
          >
            <Popup minWidth={90}>
              <section>
                <header>
                  {`[${id}] ${[name].concat(item.address || []).join(" - ")} (${
                    Number(center.distanceTo(position).toFixed(0)) / 1000
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
                            {},
                          ),
                      },
                      item._history,
                    ),
                  ).reduce(
                    (table, [time, list]) =>
                      Object.assign(table, {
                        header: Object.keys(list).reduce(
                          (header, item) =>
                            Object.assign(header, { [item]: item }),
                          table.header,
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
                      rows: [] as {
                        date: number;
                        list: Record<string, string>;
                      }[],
                    },
                  )}
                />
              </section>
            </Popup>
          </Marker>
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
