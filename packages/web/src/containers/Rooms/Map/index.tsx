import React, { useMemo, useState } from "react";
import L, { LatLng } from "leaflet";
import { Marker, MapContainer, TileLayer, Tooltip } from "react-leaflet";
import { DraggableMarker, LocateControl } from "../../../components/Map";
import cx from "classnames";
import styles from "./styles.module.scss";

type Location = {
  // description: null;
  name: string;
  city: string;
  street: string;
  // district: null;
  postalCode: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  country: string;
};

export function getDirections({
  origin,
  destination,
}: {
  origin: LatLng;
  destination: LatLng;
}) {
  const travelmode: "driving" | "walking" | "bicycling" | "transit" = "driving";
  const link = `//www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    (({ lat, lng }) => `${lat},${lng}`)(origin),
  )}&destination=${encodeURIComponent(
    (({ lat, lng }) => `${lat},${lng}`)(destination),
  )}&travelmode=${encodeURIComponent(travelmode)}&hl=pl`;

  window.open(link, "_blank");
}

export function getDirectionsLink(
  coordinates: {
    latitude: number;
    longitude: number;
  },
  origin: { lat: number; lng: number },
) {
  const travelmode: "driving" | "walking" | "bicycling" | "transit" = "driving";
  return `//www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    (({ lat, lng }) => `${lat},${lng}`)(origin),
  )}&destination=${encodeURIComponent(
    (({ latitude: lat, longitude: lng }) => `${lat},${lng}`)(coordinates),
  )}&travelmode=${encodeURIComponent(travelmode)}&hl=pl`;
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
  origin,
  list,
  zoom = 6,
}: {
  origin: { lat: number; lng: number };
  list: Location[];
  zoom?: number;
}) {
  const middle = useMemo(
    () => useBounds([{ position: new LatLng(origin.lat, origin.lng) }]),
    [origin],
  );

  const [center, setCenter] = useState(() => middle.getCenter());

  const nearby = useMemo(
    () =>
      list.map(({ coordinates, ...address }) => ({
        ...address,
        position: new LatLng(coordinates.latitude, coordinates.longitude),
      })),
    [list],
  );

  const bounds = useBounds(nearby);

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
        {nearby.map(({ position, name, city, street }) => (
          <Marker
            key={name}
            position={position}
            eventHandlers={{
              click() {
                getDirections({ origin: center, destination: position });
              },
            }}
          >
            <Tooltip>{`${name} (${city}, ${street})`}</Tooltip>
          </Marker>
        ))}
        <LocateControl />
      </MapContainer>
    ),
    [list, center],
  );

  // https://react-leaflet.js.org/docs/start-setup/
  return <div className={cx(styles.Layout)}>{displayMap}</div>;
}
