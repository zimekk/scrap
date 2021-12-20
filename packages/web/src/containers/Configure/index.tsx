import React, { Fragment, useCallback, useMemo, useState } from "react";
import { createAsset } from "use-asset";
import { Link } from "../../components/Link";
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

const optionsAsset = createAsset(async (version) => {
  return Promise.all([
    require("./assets/pricing-model-81dp.json"),
    require("./assets/localisations-81dp-options.json"),
  ]).then(([{ availableOptions, priceTreeNode }, options]) => ({
    availableOptions,
    priceTreeNode,
    options,
  }));
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
    enginePowerFrom: ENGINE_POWERS[7],
    enginePowerTo: ENGINE_POWERS[ENGINE_POWERS.length - 1],
    search: "",
  }));

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
      <fieldset>
        <div>
          <label>
            <span>search</span>
            <input
              type="search"
              value={criteria.search}
              onChange={useCallback(
                ({ target }) =>
                  setCriteria((criteria) => ({
                    ...criteria,
                    search: target.value,
                  })),
                []
              )}
            />
          </label>
        </div>
      </fieldset>
      <Options criteria={criteria} setCriteria={setCriteria} />
    </div>
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
  );
}

function TreeNode({ node, options }) {
  const {
    subNodes,
    key,
    category,
    effectivePrice: { grossPrice },
  } = node;
  return (
    <div>
      <div>
        {key && `[${key}]`} {category}{" "}
        {key && options[key] && options[key].phrases.longDescription} (
        {grossPrice})
      </div>
      <ul>
        {subNodes.map((node, key) => (
          <li key={key}>
            <TreeNode node={node} options={options} />
          </li>
        ))}
      </ul>
    </div>
  );
}

const getDescription = (details: {
  familyCode: string;
  phrases: { longDescription: string };
}) =>
  [details.phrases.longDescription]
    .concat(
      {
        MET: "Metalizowany",
      }[details.familyCode] || []
    )
    .join(" ");

function Options({ criteria, setCriteria, version = 1 }) {
  const [text, setText] = useState(`WYPOSAŻENIE
KOMUNIKACJA
Zestaw HiFi Harman Kardon Surround Sound
Hotspot Wi-Fi
Radio cyfrowe DAB+
Obsługa za pomocą gestów
Telefonia komfortowa
Usługi ConnectedDrive
Teleserwis
Cyfrowy zestaw wskaźników
Inteligentne połączenie alarmowe
Pakiet ConnectedDrive Plus
EDYCJE I PAKIETY
Pakiet Connected Professional
Pakiet dodatkowych schowków
M Shadowline o rozszerzonym zakresie
Obramowania M Shadowline czarne na wysoki połysk
Pakiet aerodynamiczny M
Pakiet Business Class
WYPOSAŻENIE ZEWNĘTRZNE
Szklany dach panoramiczny
21" aluminiowe obręcze M Double-spoke 718 Bicolor z ogumieniem Runflat
Sportowy układ hamulcowy M
Przyciemniana szyba tylna i tylne szyby boczne
Relingi dachowe M Shadowline czarne na wysoki połysk
Opony z funkcją jazdy awaryjnej Runflat
WYPOSAŻENIE WNĘTRZA
Sportowe fotele przednie
Elektryczna regulacja foteli przednich z pamięcią ustawień fotela kierowcy
Klimatyzacja automatyczna
Podparcie lędzwiowe przód
Pakiet dodatkowych funkcji lusterek
Lusterko wsteczne przyciemniane automatycznie
Kierownica sportowa M, skórzana
Dostęp komfortowy
Podsufitka M Anthracite
Panel deski rozdzielczej pokryty skórą ekologiczną Sensatec
Oświetlenie ambientowe
Ogrzewanie kierownicy
Ogrzewanie foteli przednich
Siatka oddzielająca bagażnik
Szyby przednie o zwiększonej izolacji akustycznej
Galwanizowane wykończenie elementów obsługi
Listwy ozdobne M Aluminium Rhombicle z listwą akcentową w perłowym chromie
Śruby zabezpieczające
Elektryczna regulacja szerokości oparcia
Dywaniki welurowe
OŚWIETLENIE
Reflektory laserowe
Asystent świateł drogowych
BEZPIECZEŃSTWO I OCHRONA
Active Guard
System bezpieczeństwa Active Protection
Kamera 360 stopni
Asystent parkowania Plus z systemem kamer 360
System alarmowy
Systemy asystujące kierowcy Professional
System monitorowania ciśnienia opon
Aktywna ochrona pieszych
BMW Drive Recorder
INNE
Zawieszenie adaptacyjne M
Zmienny, sportowy układ kierowniczy
Sportowa automatyczna skrzynia biegów z łopatkami
Sportowy dyferencjał M
Performance Control
Funkcja dezaktywacji poduszki powietrznej
Zwiększony bak paliwa
Mild Hybrid - permanentny system Start/Stop
`);
  const [checkedOptions, setCheckedOptions] = useState<string[]>([]);
  const { availableOptions, priceTreeNode, options } =
    optionsAsset.read(version);

  console.log({ availableOptions, priceTreeNode, options });

  const filter = useMemo(
    () => criteria.search.toLowerCase(),
    [criteria.search]
  );

  const list = useMemo(
    () =>
      availableOptions
        .map((item) => ({
          ...item,
          details: options[item.optionCode],
        }))
        .filter(
          ({
            optionCode,
            details: {
              familyCode,
              phrases: { longDescription },
            },
          }) =>
            ((labels) =>
              labels.findIndex(
                (label) =>
                  optionCode.toLowerCase().match(label) ||
                  familyCode.toLowerCase().match(label) ||
                  longDescription.toLowerCase().match(label)
              ) > -1)(filter.split(",").map((s) => s.trim()))
        ),
    [availableOptions, options, filter]
  );

  const setSearch = (set) =>
    setCriteria(({ search, ...criteria }) => ({
      ...criteria,
      search: set(search),
    }));

  const onToggleOption = useCallback(
    ({ target }) =>
      setCheckedOptions((checked) =>
        target.checked
          ? checked.concat(target.value)
          : checked.filter((value) => value !== target.value)
      ),
    []
  );

  const optionCode = useMemo(
    () =>
      availableOptions
        .filter(({ optionCode }: { optionCode: number }) =>
          checkedOptions.includes(optionCode)
        )
        .reduce((result, { grossPrice }) => result + grossPrice, 0)
        .toString(),
    [availableOptions, checkedOptions]
  );

  const textLabels = useMemo(
    () =>
      text
        .split("\n")
        .map((s) => s.split("\t"))
        .flat()
        .map((s) => s.toLowerCase().trim())
        .filter((s) => s.length > 0),
    [text]
  );

  const onSelectMatched = useCallback(
    () =>
      setCheckedOptions(
        availableOptions
          .filter(({ optionCode }) =>
            ((description) => textLabels.includes(description.toLowerCase()))(
              getDescription(options[optionCode])
            )
          )
          .map(({ optionCode }) => optionCode)
      ),
    [options, textLabels]
  );

  return (
    <div className={styles.Options}>
      <fieldset>
        <div>
          <textarea
            value={text}
            onChange={useCallback(({ target }) => setText(target.value), [])}
          />
        </div>
        <div>
          <input type="text" value={optionCode} readOnly />
          <button onClick={onSelectMatched}>select matched</button>
        </div>
      </fieldset>
      <ul>
        {list.map(({ optionCode, grossPrice, combinationPrices, details }) => (
          <li key={optionCode}>
            {grossPrice > 0 ? (
              <input
                type="checkbox"
                value={optionCode}
                onChange={onToggleOption}
                checked={checkedOptions.includes(optionCode)}
              />
            ) : (
              <input type="checkbox" value={optionCode} checked disabled />
            )}
            [<IdLink setSearch={setSearch}>{optionCode}</IdLink>
            {details.familyCode && (
              <>
                /<IdLink setSearch={setSearch}>{details.familyCode}</IdLink>
              </>
            )}
            ]{details.salesGroupCodes.join(", ")} - {details.optionType} -{" "}
            {((description) => (
              <span
                style={{
                  textDecoration: textLabels.includes(description.toLowerCase())
                    ? "underline"
                    : "none",
                }}
              >
                {description}
              </span>
            ))(getDescription(details))}{" "}
            (<strong>{grossPrice}</strong>)
            {details.causesAdditions &&
              details.causesAdditions.map((code, key) => (
                <Fragment key={key}>
                  [<IdLink setSearch={setSearch}>{code}</IdLink>]
                </Fragment>
              ))}
            {combinationPrices && (
              <ul>
                {combinationPrices.map(({ optionCode, grossPrice }, key) => (
                  <li key={key}>
                    {grossPrice > 0 ? (
                      <input
                        type="checkbox"
                        value={optionCode}
                        onChange={onToggleOption}
                        checked={checkedOptions.includes(optionCode)}
                      />
                    ) : (
                      <input
                        type="checkbox"
                        value={optionCode}
                        checked
                        disabled
                      />
                    )}
                    [<IdLink setSearch={setSearch}>{optionCode}</IdLink>]{" "}
                    {grossPrice}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <TreeNode node={priceTreeNode} options={options} />
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
