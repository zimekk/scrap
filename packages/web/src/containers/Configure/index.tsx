import React, { useCallback, useMemo, useState } from "react";
import { createAsset } from "use-asset";
import styles from "./styles.module.scss";

const asset = createAsset(async (version) => {
  return Promise.all([
    require("./assets/g01.json"),
    require("./assets/g31.json"),
  ]).then((data) =>
    data.reduce(
      (modelRanges, data) =>
        Object.values(data).reduce(
          (modelRanges, item) => Object.assign(modelRanges, item.modelRanges),
          modelRanges
        ),
      {}
    )
  );
});

function Configure({ version = "v1" }) {
  const modelRanges = asset.read(version);

  const FUEL_TYPES = useMemo(
    () =>
      Object.values(
        Object.values(modelRanges).reduce(
          (result, { models }) =>
            Object.values(models).reduce(
              (result, { fuelType }) =>
                Object.assign(result, { [fuelType]: fuelType }),
              result
            ),
          { "": "" }
        )
      ),
    [modelRanges]
  );
  const ENGINE_POWERS = useMemo(
    () =>
      Object.values(
        Object.values(modelRanges).reduce(
          (result, { models }) =>
            Object.values(models).reduce(
              (result, { technicalData: { enginePower } }) =>
                Object.assign(result, { [enginePower]: enginePower }),
              result
            ),
          {}
        )
      ).sort((a, b) => Number(a) - Number(b)),
    [modelRanges]
  );

  const [criteria, setCriteria] = useState(() => ({
    fuelType: "",
    enginePowerFrom: ENGINE_POWERS[0],
    enginePowerTo: ENGINE_POWERS[ENGINE_POWERS.length - 1],
  }));

  console.log({ FUEL_TYPES, ENGINE_POWERS });
  console.log({ modelRanges });

  return (
    <div>
      <fieldset>
        <div>
          <label>
            <span>fuelType</span>
            <select
              value={criteria.fuelType}
              onChange={useCallback(
                ({ target }) =>
                  setCriteria((criteria) => ({
                    ...criteria,
                    fuelType: target.value,
                  })),
                []
              )}
            >
              {FUEL_TYPES.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            <span>enginePower</span>
            <input
              type="range"
              list="engine-power-list"
              min={ENGINE_POWERS[0]}
              max={ENGINE_POWERS[ENGINE_POWERS.length - 1]}
              value={criteria.enginePowerFrom}
              onChange={useCallback(
                ({ target }) =>
                  setCriteria(({ enginePowerTo, ...criteria }) => {
                    const enginePowerFrom = Number(target.value);
                    return {
                      ...criteria,
                      enginePowerFrom,
                      enginePowerTo:
                        enginePowerTo < enginePowerFrom
                          ? enginePowerFrom
                          : enginePowerTo,
                    };
                  }),
                []
              )}
            />
            <datalist id="engine-power-list">
              {ENGINE_POWERS.map((value) => (
                <option key={value} value={value}></option>
              ))}
            </datalist>
          </label>
          <label>
            <input
              type="range"
              list="engine-power-list"
              min={ENGINE_POWERS[0]}
              max={ENGINE_POWERS[ENGINE_POWERS.length - 1]}
              value={criteria.enginePowerTo}
              onChange={useCallback(
                ({ target }) =>
                  setCriteria(({ enginePowerFrom, ...criteria }) => {
                    const enginePowerTo = Number(target.value);
                    return {
                      ...criteria,
                      enginePowerFrom:
                        enginePowerTo > enginePowerFrom
                          ? enginePowerFrom
                          : enginePowerTo,
                      enginePowerTo,
                    };
                  }),
                []
              )}
            />
            <span>{`${criteria.enginePowerFrom}-${criteria.enginePowerTo} kW`}</span>
          </label>
        </div>
      </fieldset>
      {Object.values(modelRanges).map((series, key) => (
        <Series key={key} criteria={criteria} {...series} />
      ))}
    </div>
  );
}

function Series({ criteria, additionalData, code, lines, models }) {
  return (
    <div className={styles.Series}>
      <h3>
        {additionalData.description.pl.longDescription} ({code})
      </h3>
      <h4>Lines</h4>
      <ul>
        {Object.entries(lines).map(
          (
            [
              code,
              {
                prices: { grossPrice },
              },
            ],
            key
          ) => (
            <li key={key}>
              <div>
                {grossPrice} ({code})
              </div>
            </li>
          )
        )}
      </ul>
      <h4>Models</h4>
      <ul>
        {Object.entries(models)
          .filter(
            ([
              ,
              {
                fuelType,
                technicalData: { enginePower },
              },
            ]) =>
              (!criteria.fuelType || criteria.fuelType === fuelType) &&
              criteria.enginePowerFrom <= enginePower &&
              enginePower <= criteria.enginePowerTo
          )
          .map(
            (
              [
                code,
                {
                  lines,
                  series,
                  modelRange,
                  modelCode,
                  phrases,
                  technicalData,
                  fuelType,
                  transmission,
                  configurationDates,
                  effectDate,
                },
              ],
              key
            ) => (
              <li key={key}>
                <div>
                  {phrases.pl.longDescription} ({code})
                </div>
                <ul>
                  <li>
                    {`series: ${series}`} {`modelRange: ${modelRange}`}{" "}
                    {`modelCode: ${modelCode}`}
                  </li>
                  <li>{`lines: ${Object.values(lines).join(", ") || "-"}`}</li>
                  <li>
                    {`fuelType: ${fuelType}`}{" "}
                    {`enginePower: ${technicalData.enginePower}`}{" "}
                    {`transmission: ${transmission}`}
                  </li>
                  <li>{`configurationDates.earliestOrderDate: ${configurationDates.earliestOrderDate}`}</li>
                  <li>{`configurationDates.earliestEffectDate: ${configurationDates.earliestEffectDate}`}</li>
                  <li>{`effectDate: ${effectDate}`}</li>
                </ul>
              </li>
            )
          )}
      </ul>
    </div>
  );
}

export default function Section() {
  return (
    <div className={styles.Section}>
      <h2>Configure</h2>
      <Configure />
    </div>
  );
}
