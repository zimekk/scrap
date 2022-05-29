import React, { useMemo, useState } from "react";
import { format } from "date-fns";
import update from "immutability-helper";
import { Link } from "../../components/Link";

const sortByKey = (list: object) =>
  Object.entries(list)
    .sort(([a], [b]) => (a < b ? 1 : -1))
    .reduce((list, [key, item]) => Object.assign(list, { [key]: item }), {});

export default function Summary({
  list,
  results,
}: {
  list: { item: { _created?: number; _updated?: number; _removed?: number } }[];
  results: {
    item: { _created?: number; _updated?: number; _removed?: number };
  }[];
}) {
  const [expand, setExpand] = useState(false);
  const summary = useMemo(
    () =>
      update(
        list.reduce(
          (summary, { item }) =>
            Object.assign(
              summary,
              item._created
                ? {
                    created: update(summary.created, {
                      [format(item._created, "yyyy-MM-dd")]: {
                        $apply: (count = 0) => count + 1,
                      },
                    }),
                  }
                : {},
              item._updated
                ? {
                    updated: update(summary.updated, {
                      [format(item._updated, "yyyy-MM-dd")]: {
                        $apply: (count = 0) => count + 1,
                      },
                    }),
                  }
                : {},
              item._removed
                ? {
                    removed: update(summary.removed, {
                      [format(item._removed, "yyyy-MM-dd")]: {
                        $apply: (count = 0) => count + 1,
                      },
                    }),
                  }
                : {}
            ),
          {
            created: {},
            updated: {},
            removed: {},
          }
        ),
        {
          created: {
            $apply: sortByKey,
          },
          updated: {
            $apply: sortByKey,
          },
          removed: {
            $apply: sortByKey,
          },
        }
      ),
    [list]
  );
  return (
    <div>
      <div>
        {`Found ${list.length} vehicles out of a total of ${results.length}`}{" "}
        <Link
          onClick={(e) => (e.preventDefault(), setExpand((expand) => !expand))}
        >
          {expand ? "Hide summary" : "Show summary"}
        </Link>
      </div>
      {expand && <pre>{JSON.stringify(summary, null, 2)}</pre>}
    </div>
  );
}
