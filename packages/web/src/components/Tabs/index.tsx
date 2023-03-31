import React, {
  createContext,
  type MouseEventHandler,
  useContext,
  useState,
} from "react";
import cx from "classnames";
import styles from "./styles.module.scss";

const TabsContext = createContext({});

export default function Tabs({
  children,
  initialIndex = 0,
}: {
  children: React.ReactChildren;
  initialIndex: number;
}) {
  const [index, setIndex] = useState(initialIndex);

  return (
    <TabsContext.Provider value={{ index, setIndex }}>
      <div className={styles.Tabs}>
        {
          React.Children.toArray(children).reduce(
            (result, element, i) => ({
              children: result.children.concat(
                element.type === TabList || result.sequence === index
                  ? React.cloneElement(element)
                  : []
              ),
              sequence:
                element.type === TabPanel
                  ? result.sequence + 1
                  : result.sequence,
            }),
            { children: [], sequence: 0 }
          ).children
        }
      </div>
    </TabsContext.Provider>
  );
}

export function TabPanel({ children }: { children: React.ReactChildren }) {
  return <div className={styles.TabPanel}>{children}</div>;
}

export function TabList({ children }: { children: React.ReactChildren }) {
  const { index, setIndex } = useContext(TabsContext);

  return (
    <div className={styles.TabList}>
      {React.Children.toArray(children).map((element, i) =>
        React.cloneElement(element, {
          selected: index === i,
          onSelect: () => setIndex(i),
        })
      )}
    </div>
  );
}

export function Tab({
  children,
  selected,
  onSelect,
}: {
  children: React.ReactNode;
  selected: boolean;
  onSelect: MouseEventHandler;
}) {
  return (
    <div
      className={cx(styles.Tab, selected && styles.selected)}
      onClick={onSelect}
    >
      {children}
    </div>
  );
}
