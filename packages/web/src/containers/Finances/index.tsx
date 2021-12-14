import React, { useCallback, useMemo, useState } from "react";
import styles from "./styles.module.scss";

const METADATA = Object.assign(
  {
    env: "prod",
    marketId: 1,
    country: "PL",
    language: "pl",
    taxes: 0.23,
    brand: "bmw",
    brandId: 1,
    stockType: "car",
    stockCategory: "used",
    basePath: "/uzywane",
    endpoint: "/uzywane/api/v1/",
    stage: "bmw-used-pl_PL",
    gmApiKey: "AIzaSyAF9anKNFdmMr9std0B7sJuiT9f5-MjzVY",
    currency: { iso: "PLN", sign: "z\u0142", prepend: false, separate: true },
    numbers: { thousandsSeparator: "\u00a0", decimalSeparator: "," },
    translations: {
      toast: { close: "Zamknij" },
      gallery: {
        close: "Zamknij",
        fullscreenEnter: "Pe\u0142ny ekran",
        fullscreenExit: "Wyjd\u017a z trybu pe\u0142nego ekranu",
        slideshowPause: "Wy\u0142\u0105cz pokaz slajd\u00f3w",
        slideshowStart: "W\u0142\u0105cz pokaz slajd\u00f3w",
        thumbs: "Miniatury",
        zoomIn: "Powi\u0119ksz",
        zoomOut: "Pomniejsz",
        slideNext: "dalej",
        slidePrev: "wstecz",
      },
    },
    calculator: {
      yucAgeLimit: 25,
      ageLimit: 85,
      mileageLimit: 150000,
      residualValueAdjust: 0.15,
      residualValueAdjustLimit: 1,
      tarRvDevVersion: 1618561672,
    },
    version: "1fma0146h",
    contentId: "101-9453",
    user: { loginState: "not logged in", id: "" },
  },
  {
    vehicle: {
      id: 9453,
      productionYear: 2019,
      registration: "2019-09-04T00:00:00+00:00",
      registrationYear: "2019",
      mileage: 88901,
      age: 26,
      isYUC: false,
      newPrice: 239800,
      optionsPrice: 0,
      accessoriesPrice: 0,
      transactionalPrice: 239800,
      leaseProduct: {
        type: "lease",
        label: "LO U",
        downPaymentLimits: { min: 0, max: 0.45, step: 1000, default: 0 },
        termLimits: { min: 24, max: 60, step: 1, default: 48 },
        totalAgeLimit: 120,
        residualValueFactorLimits: [
          { term: 24, min: 0.187, max: 0.35 },
          { term: 25, min: 0.17, max: 0.35 },
          { term: 26, min: 0.155, max: 0.35 },
          { term: 27, min: 0.14, max: 0.35 },
          { term: 28, min: 0.12, max: 0.35 },
          { term: 29, min: 0.105, max: 0.35 },
          { term: 30, min: 0.09, max: 0.3 },
          { term: 31, min: 0.07, max: 0.3 },
          { term: 32, min: 0.055, max: 0.3 },
          { term: 33, min: 0.04, max: 0.3 },
          { term: 34, min: 0.02, max: 0.3 },
          { term: 35, min: 0.01, max: 0.3 },
          { term: 36, min: 0.005, max: 0.25 },
          { term: 37, min: 0.005, max: 0.25 },
          { term: 42, min: 0.005, max: 0.2 },
          { term: 48, min: 0.005, max: 0.15 },
          { term: 54, min: 0.005, max: 0.1 },
        ],
        residualValueStep: 0.005,
        residualValueDefault: "max",
        interestRates: [
          { term: 0, value: 0.105 },
          { term: 26, value: 0.1011 },
          { term: 38, value: 0.0966 },
          { term: 50, value: 0.0944 },
        ],
      },
      comfortLeaseProduct: {
        type: "comfort_lease",
        label: "CL U",
        calculationMode: "brv_based",
        downPaymentLimits: { min: 0, max: 0.35, step: 1000, default: 0.15 },
        termLimits: { min: 24, max: 60, step: 1, default: 36 },
        totalAgeLimit: 96,
        annualMileageLimits: {
          min: 10000,
          max: 50000,
          step: 5000,
          default: 15000,
        },
        interestRates: [
          { term: 0, value: 0.105 },
          { term: 26, value: 0.105 },
          { term: 38, value: 0.105 },
          { term: 50, value: 0.105 },
        ],
        tarRvMod: {
          id: 77632,
          tmdate: "21/10/11",
          accessoryLimit: 0.3,
          rvValue: 0.441,
          brvValue: 0.441,
          rvValueUsed: 0.49,
          brvValueUsed: 0.441,
          carSegmentId: "2",
        },
        tarRvDev: {
          term: 36,
          totalMileage: 15000,
          rvDev: 0.024,
          rvDevUsed: 0.024,
        },
      },
      title: "X3 xDrive30d ZA",
      seriesCode: "G01",
      series: "Seria X",
      bodyType: "SAV ",
      transmission: "automatic",
      modelCode: "TX75",
      color: "BLACK SAPPHIRE METALLIC",
      newPriceNet: "194959",
      taxes: "44841",
      fuel: "D",
      stock: "used car",
      classification: "used car",
    },
    dealer: { id: 10, name: "Inchcape Pozna\u0144" },
  }
);

console.log({ METADATA });

function Calculator({
  product: {
    type,
    label,
    downPaymentLimits,
    termLimits,
    totalAgeLimit,
    residualValueFactorLimits,
    residualValueStep,
    residualValueDefault,
    interestRates,
    annualMileageLimits,
  },
}) {
  const { taxes } = METADATA;
  const { transactionalPrice } = METADATA.vehicle;

  console.log({
    type,
    label,
    downPaymentLimits,
    termLimits,
    totalAgeLimit,
    residualValueFactorLimits,
    residualValueStep,
    residualValueDefault,
    interestRates,
  });

  const [criteria, setCriteria] = useState(
    Object.assign(
      {
        downPaymentGross: downPaymentLimits.default * transactionalPrice,
        // downPayment: 0,
        term: termLimits.default,
        // installmentGross: 0,
        // installment: 0,
      },
      annualMileageLimits
        ? {
            annualMileage: annualMileageLimits.default,
          }
        : {},
      residualValueFactorLimits
        ? {
            residualValueGross:
              residualValueFactorLimits
                .filter(({ term }) => term <= termLimits.default)
                .at(-1)[residualValueDefault] * transactionalPrice,
            // residualValue: 0,
          }
        : {}
    )
  );
  console.log(criteria);
  const downPayment = useMemo(
    () => (100 * criteria.downPaymentGross) / transactionalPrice,
    [criteria.downPaymentGross, transactionalPrice]
  );
  const residualValueLimits = useMemo(
    () =>
      residualValueFactorLimits
        ? residualValueFactorLimits
            .filter(({ term }) => term <= criteria.term)
            .at(-1)
        : undefined,
    [criteria.term, residualValueFactorLimits]
  );
  const residualValue = useMemo(
    () => (100 * criteria.residualValueGross) / transactionalPrice,
    [criteria.residualValueGross, transactionalPrice]
  );
  const interestRate = useMemo(
    () =>
      interestRates.filter(({ term }) => term <= criteria.term).at(-1).value,
    [criteria.term, interestRates]
  );
  const installment = useMemo(() => {
    // const interestRate = interestRates.filter(({term}) => term <= criteria.term).at(-1);
    const interestRatePerMonth = interestRate / 12;
    const financedAmount = transactionalPrice - criteria.downPaymentGross;
    console.log({ interestRate, interestRatePerMonth, financedAmount });
    if (interestRatePerMonth === 0) {
      return (financedAmount + residualValue) / criteria.term;
    }
    const n = Math.pow(interestRatePerMonth + 1, criteria.term);
    console.log({ n, residualValue });
    return (
      ((financedAmount * n - (residualValue || 0)) * interestRatePerMonth) /
      (n - 1)
    );
  }, [
    criteria.downPaymentGross,
    criteria.term,
    transactionalPrice,
    residualValue,
    interestRate,
  ]);
  const installmentGross = useMemo(
    () => (taxes + 1) * installment,
    [installment, taxes]
  );
  return (
    <div>
      <fieldset>
        <div>
          <label>
            <span>Opłata wstępna</span>
            <input
              type="range"
              min={downPaymentLimits.min * transactionalPrice}
              max={downPaymentLimits.max * transactionalPrice}
              step={downPaymentLimits.step}
              value={criteria.downPaymentGross}
              onChange={useCallback(
                ({ target }) =>
                  setCriteria((criteria) => ({
                    ...criteria,
                    downPaymentGross: Number(target.value),
                  })),
                []
              )}
            />
            <span>{`${criteria.downPaymentGross} zł`}</span>
          </label>
        </div>
        <div>
          <label>
            <span>Okres</span>
            <input
              type="range"
              min={termLimits.min}
              max={termLimits.max}
              step={termLimits.step}
              value={criteria.term}
              onChange={useCallback(
                ({ target }) =>
                  setCriteria((criteria) => ({
                    ...criteria,
                    term: Number(target.value),
                  })),
                []
              )}
            />
            <span>{`${criteria.term} Miesiące`}</span>
          </label>
        </div>
        {annualMileageLimits && (
          <div>
            <label>
              <span>Roczny przebieg</span>
              <input
                type="range"
                min={annualMileageLimits.min}
                max={annualMileageLimits.max}
                step={annualMileageLimits.step}
                value={criteria.annualMileage}
                onChange={useCallback(
                  ({ target }) =>
                    setCriteria((criteria) => ({
                      ...criteria,
                      annualMileage: Number(target.value),
                    })),
                  []
                )}
              />
              <span>{`${criteria.annualMileage} km`}</span>
            </label>
          </div>
        )}
        {residualValueLimits && (
          <div>
            <label>
              <span>Wartość końcowa</span>
              <input
                type="range"
                min={residualValueLimits.min * transactionalPrice}
                max={residualValueLimits.max * transactionalPrice}
                step={residualValueStep * transactionalPrice}
                value={criteria.residualValueGross}
                onChange={useCallback(
                  ({ target }) =>
                    setCriteria((criteria) => ({
                      ...criteria,
                      residualValueGross: Number(target.value),
                    })),
                  []
                )}
              />
              <span>{`${criteria.residualValueGross} zł`}</span>
            </label>
          </div>
        )}
      </fieldset>
      <div>{type}</div>
      <ul>
        <li>{`Opłata wstępna: ${criteria.downPaymentGross} zł (${
          Math.round(downPayment * 100) / 100
        }%)`}</li>
        <li>{`Okres: ${criteria.term} Miesiące`}</li>
        {criteria.annualMileage !== undefined && (
          <li>{`Roczny przebieg: ${criteria.annualMileage}km`}</li>
        )}
        {criteria.residualValueGross !== undefined && (
          <li>{`Wartość końcowa: ${criteria.residualValueGross} zł (${residualValue}%)`}</li>
        )}
        <li>{`Miesięczna rata: ${installmentGross} zł (netto ${installment} zł)`}</li>
      </ul>
    </div>
  );
}

export default function Section() {
  return (
    <div className={styles.Section}>
      <h2>Finances</h2>
      <Calculator product={METADATA.vehicle.comfortLeaseProduct} />
      <Calculator product={METADATA.vehicle.leaseProduct} />
    </div>
  );
}
