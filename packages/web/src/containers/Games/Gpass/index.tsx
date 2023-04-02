import React, {
  type MouseEventHandler,
  useCallback,
  useMemo,
  useState,
} from "react";
import { format } from "date-fns";
import { createAsset } from "use-asset";
import { Json } from "../../../components/Json";
import { Link } from "../../../components/Link";
import styles from "./styles.module.scss";

import type {
  DetailsType,
  GpassType,
} from "@dev/cli/src/services/GpassService/types";

type ItemType = {
  updated: number;
  details: DetailsType[];
};

// https://github.com/pmndrs/use-asset#dealing-with-async-assets
const asset = createAsset(async (version) => {
  const res = await fetch(`api/gpass/data.json?${version}`);
  return await res.json().then<GpassType[]>((result) => result);
});

function Details({
  item,
  expanded,
  onExpand,
}: {
  item: ItemType;
  expanded: boolean;
  onExpand: () => void;
}) {
  const handleExpand = useCallback<MouseEventHandler<HTMLAnchorElement>>(
    (e) => (e.preventDefault(), onExpand()),
    []
  );

  return (
    <div className={styles.Details}>
      <div className={styles.Divider}>
        <Link onClick={handleExpand}>
          {format(item.updated, "yyyy-MM-dd HH:mm")}
        </Link>
      </div>
      {expanded && (
        <table>
          <tbody>
            <tr>
              {item.details.map(
                ({ intro, link, bullets, price, priceNumber }, key) => (
                  <td key={key}>
                    <h4>{intro}</h4>
                    <div>{priceNumber}</div>
                    <Link href={link.href}>{link.text}</Link>
                    <div>{price}</div>
                    <ul>
                      {bullets.map((text: string, key: number) => (
                        <li key={key}>{text}</li>
                      ))}
                    </ul>
                  </td>
                )
              )}
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

function History({ history }: { history: ItemType[] }) {
  const [expanded, onExpand] = useState([0]);

  return (
    <div className={styles.History}>
      {history.map((item, key) => (
        <Details
          key={key}
          item={item}
          expanded={expanded.includes(key)}
          onExpand={() =>
            onExpand((expanded) =>
              expanded.includes(key)
                ? expanded.filter((index) => index !== key)
                : expanded.concat(key)
            )
          }
        />
      ))}
    </div>
  );
}

function Data({ version = "v1" }) {
  const results = asset.read(version); // As many cache keys as you need

  const history = useMemo(
    () =>
      (([{ _updated, _history, ...item }]) =>
        Object.entries(_history)
          .map(([_updated, item]) => ({ updated: Number(_updated), ...item }))
          .concat({ updated: _updated, ...item })
          .sort((a, b) => b.updated - a.updated))(results),
    [results]
  );

  console.log({ results, history });

  return (
    <section className={styles.Section}>
      <History history={history} />
      <Json>{results}</Json>
    </section>
  );
}

export default function Section() {
  return <Data />;
}
