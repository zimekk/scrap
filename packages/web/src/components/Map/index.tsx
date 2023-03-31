import React, {
  type MouseEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type L from "leaflet";
import { Marker, Tooltip, useMap } from "react-leaflet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";
// import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import cx from "classnames";
import styles from "./styles.module.scss";

export function DisplayPosition({ map }: { map: L.Map }) {
  const [initial] = useState(() => ({
    position: map.getCenter(),
    zoom: map.getZoom(),
  }));
  const [position, setPosition] = useState(map.getCenter());

  const onClick = useCallback(() => {
    map.setView(initial.position, initial.zoom);
  }, [map]);

  const onMove = useCallback(() => {
    setPosition(map.getCenter());
  }, [map]);

  const onLocationFound = useCallback((event) => {
    const { latlng, radius } = event;
    console.log({ latlng, radius });
  }, []);

  useEffect(() => {
    map.on("locationfound", onLocationFound).on("move", onMove);
    return () => {
      map.off("locationfound", onLocationFound).off("move", onMove);
    };
  }, [map, onMove]);

  return (
    <div className={cx(styles.DisplayPosition)}>
      latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{" "}
      <button onClick={onClick}>Reset</button>
      <button
        onClick={() =>
          map.locate({
            setView: true,
          })
        }
      >
        Locate
      </button>
    </div>
  );
}

export function DraggableMarker({
  position,
  children,
  setPosition,
}: {
  position: L.LatLng;
  children: React.ReactNode;
  setPosition: Function;
}) {
  const markerRef = useRef<L.Marker>(null);
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

export function LocateControl() {
  const map = useMap();

  const onLocate = useCallback<MouseEventHandler>(
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
