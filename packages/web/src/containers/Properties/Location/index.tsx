import React, { Suspense, useCallback, useMemo, useState } from "react";
import { createAsset } from "use-asset";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrosshairs,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Json } from "../../../components/Json";
import { Link } from "../../../components/Link";
import styles from "./styles.module.scss";

import type {
  DirectionsType,
  LatLng,
} from "@dev/cli/src/services/DirectionsService/types";

type TravelMode = "driving" | "walking" | "bicycling" | "transit";

// https://stackoverflow.com/questions/2660201/what-parameters-should-i-use-in-a-google-maps-url-to-go-to-a-lat-lon
export function getLocationLink(location: string, zoom = 0) {
  const [latitude, longitude] = location.split(",");
  return `//www.google.com/maps?t=k&q=loc:${latitude}+${longitude}&hl=pl${
    zoom ? `&z=${zoom}` : ""
  }`;
}

export function Location({
  children,
  coordinates: { latitude, longitude },
}: any) {
  // const link = usePlace([`${latitude},${longitude}|${canonical}`]);

  return (
    <Link
      href={getLocationLink(`${latitude},${longitude}`)}
      rel=""
      target="map"
      style={{ margin: "0 .25em" }}
    >
      <FontAwesomeIcon icon={faMapMarkerAlt} />
      {children}
    </Link>
  );
}

// https://developers.google.com/maps/documentation/urls/get-started#directions-examples
export function getDirectionsLink(
  origin: string,
  destination = "52.2268,20.9921",
  travelmode: TravelMode = "driving"
) {
  return `//www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    origin
  )}&destination=${encodeURIComponent(
    destination
  )}&travelmode=${encodeURIComponent(travelmode)}&hl=pl`;
}

export function Directions({ coordinates: { latitude, longitude } }: any) {
  const origin = `${latitude},${longitude}`;

  return (
    <Link
      href={getDirectionsLink(origin)}
      rel=""
      target="map"
      style={{ margin: "0 .25em" }}
    >
      <FontAwesomeIcon icon={faCrosshairs} />
    </Link>
  );
}

// https://github.com/pmndrs/use-asset#dealing-with-async-assets
const asset = createAsset(async (travelmode) => {
  const res = await fetch(
    `api/directions/data.json?${new URLSearchParams({ travelmode })}`
  );
  return await res.json().then<DirectionsType[]>((result) => result);
});

const formatKey = (n: number) => String(Math.round(n * 10000));

const createKey = ({
  travel_mode,
  start_location,
  end_location,
}: {
  travel_mode: string;
  start_location: LatLng;
  end_location: LatLng;
}) =>
  [travel_mode]
    .concat(
      [
        start_location.lat,
        start_location.lng,
        end_location.lat,
        end_location.lng,
      ].map(formatKey)
    )
    .join(":");

const normalize = (id: string) =>
  (([_, start_location, end_location, travel_mode]) =>
    [travel_mode]
      .concat(
        start_location.split(",").map(Number).map(formatKey),
        end_location.split(",").map(Number).map(formatKey)
      )
      .join(":"))(id.split(":"));

const processAsset = createAsset((url) =>
  fetch("api/process", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        url,
      },
      opts: {
        delay: 1000,
      },
    }),
  })
);

function ProcessUrl({ url }: { url: string }) {
  processAsset.read(url);

  return null;
}

export function DistanceAndDuration({
  coordinates: { latitude, longitude },
  travelmode = "driving",
}: {
  coordinates: { latitude: number; longitude: number };
  travelmode?: TravelMode;
}) {
  const [process, setProcess] = useState(false);
  const origin = `${latitude},${longitude}`;
  const destination = "52.2268,20.9921";
  const results = asset.read(travelmode); // As many cache keys as you need
  const records = useMemo(
    () =>
      results.reduce<Record<string, DirectionsType["directions"]>>(
        (records, { id, directions }) =>
          Object.assign(records, {
            [normalize(id)]: directions,
          }),
        {}
      ),
    [results]
  );
  const key = useMemo(
    () =>
      createKey({
        travel_mode: travelmode,
        start_location: (([lat, lng]) => ({ lat, lng }))(
          origin.split(",").map(Number)
        ),
        end_location: (([lat, lng]) => ({ lat, lng }))(
          destination.split(",").map(Number)
        ),
      }),
    [travelmode, origin, destination]
  );

  return key in records ? (
    <div className={styles.DistanceAndDuration}>
      {
        {
          // bicycling: <img alt="Na rowerze" src="//maps.gstatic.com/consumer/images/icons/2x/directions_bike_grey800_24dp.png" />,
          bicycling: (
            <img
              alt="Na rowerze"
              src="//maps.gstatic.com/consumer/images/icons/2x/directions_bike_blue900_24dp.png"
            />
          ),
          // driving: <img alt="Samochodem" src="//maps.gstatic.com/consumer/images/icons/2x/directions_car_grey800_24dp.png" />,
          driving: (
            <img
              alt="Samochodem"
              src="//maps.gstatic.com/consumer/images/icons/2x/directions_car_filled_blue900_24dp.png"
            />
          ),
          // transit: <img alt="Transportem publicznym" src="//maps.gstatic.com/consumer/images/icons/2x/directions_transit_grey800_24dp.png" />,
          transit: (
            <img
              alt="Transportem publicznym"
              src="//maps.gstatic.com/consumer/images/icons/2x/directions_transit_filled_blue900_24dp.png"
            />
          ),
          // walking: <img alt="Pieszo" src="//maps.gstatic.com/consumer/images/icons/2x/directions_walk_grey800_24dp.png" />,
          walking: (
            <img
              alt="Pieszo"
              src="//maps.gstatic.com/consumer/images/icons/2x/directions_walk_blue900_24dp.png"
            />
          ),
        }[travelmode]
      }
      <span>
        {(records[key] || [])
          .map(
            ({ distance, duration }) => `${distance.text} (${duration.text})`
          )
          .join(", ")}
      </span>
      <Json>{records[key]}</Json>
    </div>
  ) : (
    <div>
      <button disabled={process} onClick={() => setProcess(true)}>
        {process ? "Processing..." : "Get Directions"}
      </button>
      <Suspense>
        {process && (
          <ProcessUrl
            url={`https:${getDirectionsLink(origin, destination, travelmode)}`}
          />
        )}
      </Suspense>
    </div>
  );
}
