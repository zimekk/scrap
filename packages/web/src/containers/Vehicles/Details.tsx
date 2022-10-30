import React, {
  ComponentProps,
  Dispatch,
  MouseEventHandler,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { format } from "date-fns";
import { Link } from "../../components/Link";
import { Calculator, ProductTypes, Vehicle } from "../../components/Calculator";
import Options from "./Options";
import cx from "classnames";
import styles from "./Details.module.scss";

type Item = {
  id: number;
  _history: any[];
};

const formatNumber = (value: number) => new Intl.NumberFormat().format(value);

const formatAmount = (value: number) => `${formatNumber(value)} pln`;

function Button({ ...props }) {
  return <button {...props} />;
}

export function Toggle({
  children,
  ...props
}: ComponentProps<"input"> & { children: ReactNode }) {
  return (
    <label>
      <input type="checkbox" {...props} />
      <span>{children}</span>
    </label>
  );
}

function Color({ color }: { color: { code: string; label: string } }) {
  return (
    <a
      className={styles.Color}
      style={{ backgroundColor: color.code }}
      title={color.label}
    ></a>
  );
}

function IdLink({
  children: id,
  setSearch,
}: {
  children: string;
  setSearch: Function;
}) {
  return (
    <>
      [
      <Link
        onClick={(e) => (
          e.preventDefault(),
          setSearch((search: string) =>
            (e.metaKey ? search.split(",").map((s) => s.trim()) : [])
              .concat(String(id))
              .filter((s) => s.length > 0)
              .join(", ")
          )
        )}
      >
        {id}
      </Link>
      ]
    </>
  );
}

export function Favorite({
  favorites,
  setFavorites,
  setSearch,
}: {
  favorites: string[];
  setFavorites: Dispatch<SetStateAction<string[]>>;
  setSearch: Dispatch<SetStateAction<string>>;
}) {
  return favorites.length > 0 ? (
    <div>
      {`Your favorites: `}
      {favorites.map((favorite, key) => (
        <IdLink key={key} setSearch={setSearch}>
          {favorite}
        </IdLink>
      ))}{" "}
      <Link
        onClick={(e) => (e.preventDefault(), setSearch(favorites.join(`, `)))}
      >
        search
      </Link>{" "}
      |{" "}
      <Link onClick={(e) => (e.preventDefault(), setFavorites([]))}>clear</Link>
    </div>
  ) : (
    <div>{`You don't have favorites`}</div>
  );
}

export default function Details({
  _time,
  item,
  onClickCompare,
  prev,
  favorites,
  setFavorites,
  setSearch,
}: {
  _time?: string;
  item: any;
  onClickCompare?: MouseEventHandler;
  prev?: any;
  favorites?: string[];
  setFavorites?: Dispatch<SetStateAction<string[]>>;
  setSearch?: Dispatch<SetStateAction<string>>;
}) {
  const {
    id,
    href,
    title,
    brand,
    series = {},
    seriesCode,
    bodyType,
    modelCode,
    productionYear,
    transactionalPrice,
    newPrice,
  } = item;

  const changed = (prop: string) => item && prev && item[prop] !== prev[prop];

  return (
    <ul className={styles.Details}>
      {!prev && (
        <li>
          <Color color={item.color} />
          <IdLink setSearch={setSearch}>{id}</IdLink>{" "}
          <Link href={href}>{title}</Link>{" "}
          {onClickCompare && (
            <Button onClick={onClickCompare} value={item._id}>
              Compare
            </Button>
          )}
          {setFavorites && (
            <Toggle
              checked={favorites.includes(id)}
              onChange={(e) =>
                setFavorites((favorites) =>
                  e.target.checked
                    ? favorites.concat(id)
                    : favorites.filter((favorite) => favorite !== id)
                )
              }
            >
              Favorite
            </Toggle>
          )}
        </li>
      )}
      {!prev && (
        <li>
          <IdLink setSearch={setSearch}>
            {typeof seriesCode === "object" ? seriesCode.label : seriesCode}
          </IdLink>{" "}
          {brand.label} {series.label} {bodyType.label} {item.fuel.label}{" "}
          {item.transmission.label}
        </li>
      )}
      {!prev && (
        <li>
          <IdLink setSearch={setSearch}>
            {typeof modelCode === "object" ? modelCode.label : modelCode}
          </IdLink>{" "}
          {item.capacity && <span>capacity: {item.capacity}</span>}{" "}
          {item.powerHP && <span>powerHP: {item.powerHP}</span>}{" "}
          {item.consumptionFuel && (
            <span>consumptionFuel: {item.consumptionFuel}</span>
          )}{" "}
          {item.emission && <span>emission: {item.emission}</span>}
        </li>
      )}
      <li>
        <span
          className={cx(
            styles.Compare,
            changed("productionYear") && styles.changed
          )}
        >
          productionYear: {productionYear}
        </span>{" "}
        {Boolean(newPrice) && (
          <span
            className={cx(
              styles.Compare,
              changed("newPrice") && styles.changed
            )}
          >
            newPrice: {formatAmount(newPrice)}
          </span>
        )}{" "}
        {Boolean(item.optionsPrice) && (
          <span
            className={cx(
              styles.Compare,
              changed("optionsPrice") && styles.changed
            )}
          >
            optionsPrice: {formatAmount(item.optionsPrice)}
          </span>
        )}{" "}
        {Boolean(item.accessoriesPrice) && (
          <span
            className={cx(
              styles.Compare,
              changed("accessoriesPrice") && styles.changed
            )}
          >
            accessoriesPrice: {formatAmount(item.accessoriesPrice)}
          </span>
        )}
      </li>
      {Boolean(item.registration || item.age || item.mileage) && (
        <li>
          {item.registration && (
            <span
              className={cx(
                styles.Compare,
                changed("registration") && styles.changed
              )}
            >
              registration: {item.registration.split("T")[0]}
            </span>
          )}{" "}
          {Boolean(item.age) && (
            <span
              className={cx(styles.Compare, changed("age") && styles.changed)}
            >
              age: {item.age}
            </span>
          )}{" "}
          {Boolean(item.mileage) && (
            <span
              className={cx(
                styles.Compare,
                changed("mileage") && styles.changed
              )}
            >
              mileage: {formatNumber(item.mileage)} km
            </span>
          )}
        </li>
      )}
      <li>
        <span
          className={cx(
            styles.Compare,
            changed("transactionalPrice") && styles.changed
          )}
        >
          transactionalPrice: {formatAmount(transactionalPrice)}
          {Boolean(newPrice) && (
            <span> ({Math.round((100 * transactionalPrice) / newPrice)}%)</span>
          )}
        </span>{" "}
        {Boolean(item.transactionalPriceUpdated) && (
          <span
            className={cx(
              styles.Compare,
              changed("transactionalPriceUpdated") && styles.changed
            )}
            title={item.transactionalPriceUpdated.split("+")[0]}
          >
            transactionalPriceUpdated:{" "}
            {item.transactionalPriceUpdated.split("T")[0]}
          </span>
        )}{" "}
        {Boolean(item.vatReclaimable) && (
          <span
            className={cx(
              styles.Compare,
              changed("vatReclaimable") && styles.changed
            )}
          >
            vatReclaimable
          </span>
        )}{" "}
        {Boolean(item.warranty) && (
          <span
            className={cx(
              styles.Compare,
              changed("warranty") && styles.changed
            )}
          >
            warranty: {item.warranty}
          </span>
        )}
      </li>
      {(_time || item.imagesLastChanged) && (
        <li>
          [{_time ? format(Number(_time), "yyyy-MM-dd HH:mm") : "-"}]{" "}
          <span
            className={cx(styles.Compare, changed("created") && styles.changed)}
            title={item.created.split("+")[0]}
          >
            created: {item.created.split("T")[0]}
          </span>{" "}
          {item.imagesLastChanged && (
            <span
              className={cx(
                styles.Compare,
                changed("imagesLastChanged") && styles.changed
              )}
              title={item.imagesLastChanged.split("+")[0]}
            >
              imagesLastChanged: {item.imagesLastChanged.split("T")[0]}
            </span>
          )}
        </li>
      )}
      {(item._created || item._updated || item._removed) && (
        <li>
          {item._created > 0 && (
            <span className={cx(styles.Compare)}>
              _created: {format(Number(item._created), "yyyy-MM-dd HH:mm")}{" "}
            </span>
          )}
          {item._updated > 0 && (
            <span className={cx(styles.Compare)}>
              _updated: {format(Number(item._updated), "yyyy-MM-dd HH:mm")}{" "}
            </span>
          )}
          {item._removed > 0 && (
            <span className={cx(styles.Compare)}>
              _removed: {format(Number(item._removed), "yyyy-MM-dd HH:mm")}{" "}
            </span>
          )}
        </li>
      )}
      {!prev && item.leasable && (
        <li>
          <Leasing item={item} />
        </li>
      )}
      {!prev && item.options && (
        <li>
          <Options options={item.options} />
        </li>
      )}
      {!prev && item._history && (
        <li>
          <History item={item} />
        </li>
      )}
    </ul>
  );
}

function History({ item }: { item: Item }) {
  const [expand, setExpand] = useState(false);

  const { id } = item;

  return (
    <div>
      <div>
        <Link
          onClick={(e) => (e.preventDefault(), setExpand((expand) => !expand))}
        >
          {expand ? "Hide history" : "Show history"}
        </Link>{" "}
        ({Object.keys(item._history).length})
      </div>
      {expand &&
        Object.entries(item._history)
          .reverse()
          .map(([_time, _item], key, list) => (
            <Details
              key={_time}
              _time={_time}
              item={{ id, ..._item }}
              prev={key ? list[key - 1][1] : item}
            />
          ))}
    </div>
  );
}

function Leasing({ item }: { item: Vehicle }) {
  const [expand, setExpand] = useState(false);

  return (
    <div>
      <div>
        <Link
          onClick={(e) => (e.preventDefault(), setExpand((expand) => !expand))}
        >
          {expand ? "Hide leasing" : "Show leasing"}
        </Link>{" "}
        {item.comfortLeaseProduct &&
          (({ label, type, calculationMode }) => (
            <span>{`${label} (${[type, calculationMode]
              .filter(Boolean)
              .join(" / ")})`}</span>
          ))(item.comfortLeaseProduct)}{" "}
        {item.leaseProduct &&
          (({ label, type, calculationMode }) => (
            <span>{`${label} (${[type, calculationMode]
              .filter(Boolean)
              .join(" / ")})`}</span>
          ))(item.leaseProduct)}
      </div>
      {expand && item.comfortLeaseProduct && (
        <Calculator productType={ProductTypes.COMFORT_LEASE} vehicle={item} />
      )}
      {expand && item.leaseProduct && (
        <Calculator productType={ProductTypes.LEASE} vehicle={item} />
      )}
    </div>
  );
}
