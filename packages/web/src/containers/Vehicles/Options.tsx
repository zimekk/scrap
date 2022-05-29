import React, { useMemo, useState } from "react";
import { Link } from "../../components/Link";
import { getDescription, optionsAsset } from "../Configure";
import styles from "./Options.module.scss";

function Details({
  labels,
  version = 1,
}: {
  labels: string[];
  version?: number;
}) {
  const { availableOptions, options } = optionsAsset.read(version);

  console.log({ availableOptions, options });

  const prices = useMemo(
    () =>
      ((prices) =>
        prices.concat(prices.reduce((sum, price) => sum + (price || 0), 0)))(
        labels.map(
          (label) =>
            availableOptions.find(({ optionCode }: { optionCode: string }) =>
              ((description) =>
                label.toLocaleLowerCase() === description.toLowerCase())(
                getDescription(options[optionCode])
              )
            )?.grossPrice
        )
      ),
    [availableOptions, labels, options]
  );

  return (
    <div className={styles.Textarea}>
      <textarea
        value={prices.join("\n")}
        rows={prices.length}
        onFocus={({ target }) => target.select()}
        readOnly
      />
      <textarea
        value={labels.join("\n")}
        rows={labels.length}
        onFocus={({ target }) => target.select()}
        readOnly
      />
    </div>
  );
}

export default function Options({ options }: { options: string[] }) {
  const [expand, setExpand] = useState(false);

  return (
    <div className={styles.Options}>
      <Link
        onClick={(e) => (e.preventDefault(), setExpand((expand) => !expand))}
      >
        {expand ? "Hide options" : "Show options"}
      </Link>{" "}
      {expand && <Details labels={options} />}
    </div>
  );
}
