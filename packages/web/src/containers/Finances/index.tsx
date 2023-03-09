import React from "react";
import { Calculator, ProductTypes } from "../../components/Calculator";
import Deposits from "./Deposits";
import Elixir from "./Elixir";
import styles from "./styles.module.scss";

const METADATA = Object.assign({
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
});

export default function Section() {
  return (
    <div className={styles.Section}>
      <Elixir />
      <Deposits />
      <h2>Finances</h2>
      <Calculator
        productType={ProductTypes.COMFORT_LEASE}
        vehicle={METADATA.vehicle}
      />
      <Calculator productType={ProductTypes.LEASE} vehicle={METADATA.vehicle} />
    </div>
  );
}
