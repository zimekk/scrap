import React, { Suspense, lazy, useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import history from "history/browser";
import styles from "./App.module.scss";

const Spinner = () => <span>Loading...</span>;

const PAGES = {
  configure: lazy(() => import("./Configure")),
  finances: lazy(() => import("./Finances")),
  games: lazy(() => import("./Games")),
  scrap: lazy(() => import("./Scrap")),
  products: lazy(() => import("./Products")),
  properties: lazy(() => import("./Properties")),
  stations: lazy(() => import("./Stations")),
  vehicles: lazy(() => import("./Vehicles")),
  reader: lazy(() => import("./Reader")),
  hello: lazy(() => import("./Hello")),
};

const getPage = (location: { hash: string }) => {
  const [path, hash = Object.keys(PAGES)[0]] =
    decodeURI(location.hash).match(/^#([-\w]+)/) || [];
  return hash;
};

function App() {
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

export default hot(App);
