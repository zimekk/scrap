import React, { useEffect, useMemo } from "react";
import L from "leaflet";
import { Marker, MapContainer, TileLayer, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { format } from "date-fns";
import { DraggableMarker, LocateControl } from "../../components/Map";
import { Gallery } from "../../components/Gallery";
import { Link } from "../../components/Link";
import cx from "classnames";
import styles from "./Map.module.scss";

function Summary({
  id,
  onSelect,
  canonical,
  distance,
  price,
  title,
  images,
  _address,
  _created,
  _updated,
  _checked,
}: {
  id: string;
  onSelect: Function;
  canonical: string;
  distance: number;
  price: number;
  title: string;
  images: string[];
  _address: string[];
  _created: number;
  _updated?: number;
  _checked?: number;
}) {
  return (
    <div className={styles.Summary}>
      <Gallery className={styles.Gallery} images={images} />
      <h3>
        [<Link onClick={(e) => (e.preventDefault(), onSelect(id))}>{id}</Link>]{" "}
        <Link href={canonical}>{title}</Link> <span>({distance} km)</span>
      </h3>
      <div>
        {format(_created, "yyyy-MM-dd HH:mm")}
        {_updated && ` updated: ${format(_updated, "yyyy-MM-dd HH:mm")}`}
        {_checked && ` checked: ${format(_checked, "yyyy-MM-dd HH:mm")}`}
      </div>
      <h4>{`${new Intl.NumberFormat().format(price)} PLN`}</h4>
      {_address && <h6>{_address.join(" / ")}</h6>}
    </div>
  );
}

export function useBounds(list: { position: L.LatLng }[]) {
  return useMemo(
    () =>
      L.featureGroup(
        list.map(({ position: { lat, lng } }) => L.marker([lat, lng]))
      ).getBounds(),
    []
  );
}

export default function Map({ bounds, center, setCenter, list, onSelect }) {
  // https://stackoverflow.com/questions/40719689/how-to-include-leaflet-css-in-a-react-app-with-webpack
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png").default,
      iconUrl: require("leaflet/dist/images/marker-icon.png").default,
      shadowUrl: require("leaflet/dist/images/marker-shadow.png").default,
    });
  }, []);
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
        <MarkerClusterGroup chunkedLoading>
          {list.map(({ id, position, _like, _hide, ...item }) => (
            <Marker
              key={id}
              position={position}
              icon={
                new L.Icon({
                  iconUrl:
                    item.images.length > 0
                      ? item.images[0]
                      : require("leaflet/dist/images/marker-icon.png").default,
                  iconSize: [48, 48],
                })
              }
              // className={cx(
              //   styles.Circle,
              //   _like && styles.Like,
              //   _hide && styles.Hide
              // )}
            >
              <Popup minWidth={400}>
                <Summary
                  id={id}
                  onSelect={onSelect}
                  distance={center.distanceTo(position).toFixed(0) / 1000}
                  {...item}
                />
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
        {/* <MarkerCluster markers={list} /> */}
        <LocateControl />
      </MapContainer>
    ),
    [list, center]
  );

  // https://react-leaflet.js.org/docs/start-setup/
  return (
    <div
      className={cx(styles.Layout)}
      onClick={(e) =>
        ((a) => a && a.getAttribute("href") === "#close" && e.preventDefault())(
          (e.target as Element).closest("a")
        )
      }
    >
      {displayMap}
    </div>
  );
}
