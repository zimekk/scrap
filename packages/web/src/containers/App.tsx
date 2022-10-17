import React, { Suspense, lazy, useEffect, useState } from "react";
import history from "history/browser";
import styles from "./App.module.scss";

const Spinner = () => <span>Loading...</span>;

const PAGES = {
  builder: lazy(() => import("./Builder")),
  configure: lazy(() => import("./Configure")),
  energy: lazy(() => import("./Energy")),
  exchange: lazy(() => import("./Exchange")),
  finances: lazy(() => import("./Finances")),
  games: lazy(() => import("./Games")),
  holidays: lazy(() => import("./Holidays")),
  "hot-shots": lazy(() => import("./HotShots")),
  // scrap: lazy(() => import("./Scrap")),
  products: lazy(() => import("./Products")),
  promos: lazy(() => import("./Promos")),
  properties: lazy(() => import("./Properties")),
  quotes: lazy(() => import("./Quotes")),
  stations: lazy(() => import("./Stations")),
  vehicles: lazy(() => import("./Vehicles")),
  moto: lazy(() => import("./Moto")),
  // reader: lazy(() => import("./Reader")),
  hello: lazy(() => import("./Hello")),
};

const getPage = (location: { hash: string }) => {
  const [path, hash = Object.keys(PAGES)[0]] =
    decodeURI(location.hash).match(/^#([-\w]+)/) || [];
  return hash;
};

export default function App() {
  const [page, setPage] = useState(getPage(history.location));

  useEffect(() =>
    // location is an object like window.location
    history.listen(({ location, action, ...rest }) =>
      setPage(getPage(location))
    )
  );

  const Page = PAGES[page] || null;

  return (
    <section className={styles.App}>
      <h1 className={styles.Nav}>
        Scrap
        {Object.keys(PAGES).map((page) => (
          <a key={page} href={`#${page}`}>
            {page}
          </a>
        ))}
        [{page}]
      </h1>
      <Suspense fallback={<Spinner />}>
        <Page />
      </Suspense>
    </section>
  );
}
