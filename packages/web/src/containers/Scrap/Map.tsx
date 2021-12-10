import React, { useEffect, useMemo, useState } from "react";
import L from "leaflet";
import { CircleMarker, MapContainer, TileLayer, Popup } from "react-leaflet";
import { Gallery } from "../../components/Gallery";
import { Link } from "../../components/Link";
import {
  DisplayPosition,
  DraggableMarker,
  LocateControl,
} from "../../components/Map";
import Tabs, { Tab, TabList, TabPanel } from "../../components/Tabs";
import { KIND_TYPES } from "./constants";
import cx from "classnames";
import styles from "./Map.module.scss";

function Summary({
  description_short,
  description = description_short,
  our_title,
  title,
  images,
  id,
  name,
  center,
  position,
}: any) {
  return (
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
      <Gallery className={styles.Gallery} images={images} />
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </section>
  );
}

function Details({
  kind,
  type,
  location_user,
  offerowner_name,
  f,
  format,
  format_specific,
  created,
  changed,
  id,
}: any) {
  return (
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

export default function Map({ bounds, center, setCenter, list }: any) {
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
              <Tabs>
                <TabList>
                  <Tab>Summary</Tab>
                  <Tab>Details</Tab>
                </TabList>
                <TabPanel>
                  <Summary
                    id={id}
                    name={name}
                    center={center}
                    position={position}
                    {...item}
                  />
                </TabPanel>
                <TabPanel>
                  <Details id={id} {...item} />
                </TabPanel>
              </Tabs>
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
