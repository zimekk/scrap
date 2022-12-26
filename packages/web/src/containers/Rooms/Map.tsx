import React, { useEffect, useMemo, useState } from "react";
import L, { Icon, LatLng, LatLngBounds } from "leaflet";
import { Marker, MapContainer, TileLayer, Tooltip } from "react-leaflet";
import { DraggableMarker, LocateControl } from "../../components/Map";
import cx from "classnames";
import styles from "./Map.module.scss";

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

function getDirections({
  origin,
  destination,
}: {
  origin: LatLng;
  destination: LatLng;
}) {
  const travelmode: "driving" | "walking" | "bicycling" | "transit" = "driving";
  const link = `//www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    (({ lat, lng }) => `${lat},${lng}`)(origin)
  )}&destination=${encodeURIComponent(
    (({ lat, lng }) => `${lat},${lng}`)(destination)
  )}&travelmode=${encodeURIComponent(travelmode)}&hl=pl`;

  window.open(link, "_blank");
}

export function useBounds(list: { position: LatLng }[]) {
  return useMemo(
    () =>
      L.featureGroup(
        list.map(({ position: { lat, lng } }) => L.marker([lat, lng]))
      ).getBounds(),
    []
  );
}

export default function Map({
  list,
  zoom = 6,
}: {
  list: Location[];
  zoom?: number;
}) {
  // https://stackoverflow.com/questions/40719689/how-to-include-leaflet-css-in-a-react-app-with-webpack
  useEffect(() => {
    Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png").default,
      iconUrl: require("leaflet/dist/images/marker-icon.png").default,
      shadowUrl: require("leaflet/dist/images/marker-shadow.png").default,
    });
  }, []);

  const middle = useBounds([
    { position: { lat: 52.1793, lng: 21.0498 } as LatLng },
  ]);

  const [center, setCenter] = useState(() => middle.getCenter());

  const nearby = useMemo(
    () =>
      list.map(({ coordinates, ...address }) => ({
        ...address,
        position: new LatLng(coordinates.latitude, coordinates.longitude),
      })),
    [list]
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
    [list, center]
  );

  // https://react-leaflet.js.org/docs/start-setup/
  return <div className={cx(styles.Layout)}>{displayMap}</div>;
}
