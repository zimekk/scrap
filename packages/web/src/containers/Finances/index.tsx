import React, { useCallback, useState } from "react";
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

const PRODUCT_TYPES = {
  COMFORT_LEASE: "Comfort Lease",
  LEASE: "Leasing",
};

console.log({ METADATA });

function Calculator() {
  const [productType, setProductType] = useState(Object.keys(PRODUCT_TYPES)[0]);
  const [criteria, setCriteria] = useState({
    downPaymentGross: 0,
    downPayment: 0,
    term: 0,
    annualMileage: 0,
    residualValueGross: 0,
    residualValue: 0,
    installmentGross: 0,
    installment: 0,
  });

  return (
    <div>
      <fieldset>
        <label>
          <span>Product</span>
          <select
            value={productType}
            onChange={useCallback(
              ({ target }) => setProductType(target.value),
              []
            )}
          >
            {Object.entries(PRODUCT_TYPES).map(([value]) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <div>
          <label>
            <span>Opłata wstępna</span>
            <input
              type="range"
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
        <div>
          <label>
            <span>Roczny przebieg</span>
            <input
              type="range"
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
        <div>
          <label>
            <span>Wartość końcowa</span>
            <input
              type="range"
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
      </fieldset>
      <div>{PRODUCT_TYPES[productType]}</div>
      <ul>
        <li>{`Opłata wstępna: ${criteria.downPaymentGross} zł (${criteria.downPayment}%)`}</li>
        <li>{`Okres: ${criteria.term} Miesiące`}</li>
        <li>{`Roczny przebieg: ${criteria.annualMileage}km`}</li>
        <li>{`Wartość końcowa: ${criteria.residualValueGross} zł (${criteria.residualValue}%)`}</li>
        <li>{`Miesięczna rata: ${criteria.installmentGross} zł (netto ${criteria.installment} zł)`}</li>
      </ul>
    </div>
  );
}

export default function Section() {
  return (
    <div className={styles.Section}>
      <h2>Finances</h2>
      <Calculator />
    </div>
  );
}
