import React, {
  // Component,
  // Fragment,
  // forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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
// import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import cx from "classnames";
import { KIND_TYPES } from "./constants";
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

function DisplayPosition({ map }) {
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

function Link({ href, ...props }) {
  const hash = href[0] === "#";
  return (
    <a
      href={href}
      target={hash ? undefined : "_blank"}
      rel={hash ? undefined : "noopener noreferrer"}
      {...props}
    />
  );
}

// https://stackoverflow.com/questions/41071779/template-literal-trapped-in-a-string-variable
const evalTemplate = (s, params) =>
  Function(...Object.keys(params), `return \`${s}\``)(...Object.values(params));

export function useBounds(list) {
  return useMemo(
    () =>
      L.featureGroup(
        list.map(({ position: { lat, lng } }) => L.marker([lat, lng]))
      ).getBounds(),
    []
  );
}

export default function Map({ bounds, center, setCenter, list }) {
  // https://stackoverflow.com/questions/40719689/how-to-include-leaflet-css-in-a-react-app-with-webpack
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png").default,
      iconUrl: require("leaflet/dist/images/marker-icon.png").default,
      shadowUrl: require("leaflet/dist/images/marker-shadow.png").default,
    });
  }, []);

  const [map, setMap] = useState(null);

  const displayMap = useMemo(
    () => (
      <MapContainer
        bounds={bounds}
        whenCreated={setMap}
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
              {(({
                description_short,
                description = description_short,
                our_title,
                title,
              }) => (
                <section>
                  <header>
                    <Link
                      href={evalTemplate(process.env.HREF_TEMPLATE, {
                        id,
                        name,
                      })}
                    >
                      {title || our_title}
                    </Link>{" "}
                    ({`${center.distanceTo(position).toFixed(0) / 1000} km`})
                  </header>
                  <p dangerouslySetInnerHTML={{ __html: description }} />
                </section>
              ))(item)}
              {(({
                kind,
                type,
                location_user,
                offerowner_name,
                f,
                format,
                format_specific,
                created,
                changed,
              }) => (
                <table>
                  <tbody>
                    <tr>
                      <th>Format:</th>
                      <td>{format}</td>
                    </tr>
                    <tr>
                      <th>Typ nieruchomości:</th>
                      <td>{KIND_TYPES[kind][type]}</td>
                    </tr>
                    <tr>
                      <th>Dodano:</th>
                      <td>{created}</td>
                    </tr>
                    <tr>
                      <th>Ostatnia aktualizacja:</th>
                      <td>{changed}</td>
                    </tr>
                    <tr>
                      <th>Powierzchnia:</th>
                      <td>
                        {f.area_m2} m² ({f.area_m2_4} {f.area_m2_4t})
                      </td>
                    </tr>
                    <tr>
                      <th>Cena:</th>
                      <td>{f.p_pln} zł</td>
                    </tr>
                    <tr>
                      <th>Cena za m²:</th>
                      <td>{f.pp_m2_pln_wz} zł</td>
                    </tr>
                    <tr>
                      <th>Cena za ar:</th>
                      <td>{f.pp_m2_pln_4} zł</td>
                    </tr>
                    <tr>
                      <th>Lokalizacja:</th>
                      <td>{location_user}</td>
                    </tr>
                    {format_specific && (
                      <tr>
                        <th>Dojazd:</th>
                        <td>{format_specific.id_dojazd}</td>
                      </tr>
                    )}
                    {format_specific && (
                      <tr>
                        <th>Agent prowadzący:</th>
                        <td>{format_specific.kontakt_osoba}</td>
                      </tr>
                    )}
                    {format_specific && (
                      <tr>
                        <th>Rodzaj działki:</th>
                        <td>{format_specific.id_rodzaj_dzialki}</td>
                      </tr>
                    )}
                    <tr>
                      <th>Pośrednik:</th>
                      <td>{offerowner_name}</td>
                    </tr>
                    <tr>
                      <th>Nr ogłoszenia:</th>
                      <td>{id}</td>
                    </tr>
                  </tbody>
                </table>
              ))(item)}
            </Popup>
          </CircleMarker>
        ))}
        <LocateControl />
      </MapContainer>
    ),
    [list, center]
  );

  // https://react-leaflet.js.org/docs/start-setup/
  return (
    <div className={cx(styles.Layout)}>
      {map ? <DisplayPosition map={map} /> : null}
      {displayMap}
    </div>
  );
}
