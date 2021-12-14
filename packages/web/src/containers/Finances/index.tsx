import React, { useCallback, useEffect, useState } from "react";
import Big from "big.js";
import styles from "./styles.module.scss";

const TAR_RV_DEV = require("./assets/tarRvDev.json");

const METADATA = Object.assign(
  {
    taxes: 0.23,
    brand: "bmw",
    brandId: 1,
    stockType: "car",
    stockCategory: "used",
    calculator: {
      yucAgeLimit: 25,
      ageLimit: 85,
      mileageLimit: 150000,
      residualValueAdjust: 0.15,
      residualValueAdjustLimit: 1,
      tarRvDevVersion: 1618561672,
    },
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

class Product {
  get interactive() {
    return true;
  }
  get vehicle() {
    return METADATA.vehicle;
  }
  get taxesFactor() {
    return Big()(METADATA.taxes).plus(1).toNumber();
  }
  get vehicleAge() {
    return this.vehicle.age;
  }
  get transactionalPriceGross() {
    return this.vehicle.transactionalPrice;
  }
  get transactionalPrice() {
    return this.toNet(this.transactionalPriceGross);
  }
  get interestRate() {
    var t = this.lastIndexLessOrEqual(
      this.product.interestRates,
      "term",
      this.term
    );
    return this.product.interestRates[t].value;
  }
  get interestRatePerMonth() {
    return Big()(this.interestRate).div(12).toNumber();
  }
  get downPaymentMinGross() {
    return Big()(this.transactionalPriceGross)
      .times(this.product.downPaymentLimits.min)
      .div(this.downPaymentStepGross)
      .round(0, 3)
      .times(this.downPaymentStepGross)
      .toNumber();
  }
  get downPaymentStepGross() {
    var t = this.product.downPaymentLimits.step || 1;
    return t < 1 ? Big()(this.transactionalPriceGross).times(t).toNumber() : t;
  }
  get downPaymentDefaultGross() {
    return Big()(this.transactionalPriceGross)
      .times(this.product.downPaymentLimits.default)
      .div(this.downPaymentStepGross)
      .round(0, 1)
      .times(this.downPaymentStepGross)
      .toNumber();
  }
  get downPayment() {
    return this.toNet(this.downPaymentGross);
  }
  get termMin() {
    return Big()(this.product.termLimits.min)
      .div(this.termStep)
      .round(0, 3)
      .times(this.termStep)
      .toNumber();
  }
  get termStep() {
    return this.product.termLimits.step || 1;
  }
  get termDefault() {
    var t = Big()(this.product.termLimits.default)
      .div(this.termStep)
      .round(0, 3)
      .times(this.termStep);
    return t.gt(this.termMax) ? this.termMax : t.toNumber();
  }
  get financedAmount() {
    return Big()(this.transactionalPrice).minus(this.downPayment).toNumber();
  }
  get installment() {
    var t = Big()(this.interestRatePerMonth),
      e = Big()(this.financedAmount);
    if (t.eq(0)) return e.plus(this.residualValue).div(this.term).toNumber();
    var n = t.plus(1).pow(this.term);
    return e
      .times(n)
      .minus(this.residualValue)
      .times(t)
      .div(n.minus(1))
      .toNumber();
  }
  get installmentGross() {
    return this.toGross(this.installment);
  }
  lastIndexLessOrEqual(t, e, n) {
    var r = 0;
    if (t[r][e] > n) return r;
    var i,
      o = t.length - 1;
    if (t[o][e] < n) return o;
    for (; r < o; ) {
      var a = r + o,
        s = t[(i = (a >> 1) + (1 & a))][e];
      if (s === n) return i;
      s > n ? (o = i - 1) : s < n && (r = i);
    }
    return r;
  }
  toNet(t) {
    return Big()(t).div(this.taxesFactor).toNumber();
  }
  toGross(t) {
    return Big()(t).times(this.taxesFactor).toNumber();
  }
  toPercent(t, e, n) {
    if (void 0 === e) return Big()(t).times(100).toNumber();
    if (void 0 === n)
      return 0 === e ? 0 : Big()(t).div(e).times(100).toNumber();
    if (n === e) return 0;
    var r = Big()(e).minus(n);
    return Big()(t).minus(n).div(r).times(100).toNumber();
  }
}

class ComfortLeaseProduct extends Product {
  downPaymentGross = this.downPaymentDefaultGross;
  term = this.termDefault;
  annualMileage = this.annualMileageDefault;
  tarRvDevRows = null;

  tarRvDevGet() {
    // this.interactive &&
    //   storage.get(
    //     METADATA.calculator.tarRvDevVersion,
    //     this.product.tarRvMod.carSegmentId,
    //     this.totalTerm
    //   ).then((e) => {
    //     this.tarRvDevRows = e;
    //   });
  }
  getData() {
    return {
      type: "comfort_lease",
      downPaymentGross: this.downPaymentGross,
      term: this.term,
      annualMileage: this.annualMileage,
      installmentGross: this.installmentGross,
    };
  }
  get product() {
    return this.vehicle.comfortLeaseProduct;
  }
  get isApplicable() {
    return (
      this.vehicleAge <= METADATA.calculator.ageLimit &&
      this.vehicle.mileage <= METADATA.calculator.mileageLimit &&
      this.vehicleAge <=
        this.product.totalAgeLimit - this.product.termLimits.min &&
      null !== this.accessoriesPrice &&
      this.accessoryLimit > -1 &&
      this.rvValue > -1
    );
  }
  get vehicleType() {
    return "new" === METADATA.stockCategory
      ? "new"
      : this.vehicle.isYUC
      ? "young_used"
      : "used";
  }
  get storagePeriod() {
    return "new" === this.vehicleType
      ? new Date().getFullYear() - this.vehicle.productionYear
      : new Date(this.vehicle.registration).getFullYear() -
          this.vehicle.productionYear;
  }
  get newPrice() {
    return this.toNet(this.vehicle.newPrice);
  }
  get optionsPrice() {
    return this.toNet(this.vehicle.optionsPrice);
  }
  get basePrice() {
    return Big()(this.newPrice).minus(this.optionsPrice).toNumber();
  }
  get accessoriesPrice() {
    return "accessoriesPrice" in this.vehicle
      ? this.toNet(this.vehicle.accessoriesPrice)
      : null;
  }
  get accessoryLimit() {
    return "tarRvMod" in this.product
      ? this.product.tarRvMod.accessoryLimit
      : -1;
  }
  get rvValue() {
    return "tarRvMod" in this.product
      ? "rv_based" === this.product.calculationMode
        ? "used" === this.vehicleType
          ? this.product.tarRvMod.rvValueUsed
          : this.product.tarRvMod.rvValue
        : "used" === this.vehicleType
        ? this.product.tarRvMod.brvValueUsed
        : this.product.tarRvMod.brvValue
      : -1;
  }
  get downPaymentMaxGross() {
    const t = Big()(this.transactionalPriceGross).times(
        this.product.downPaymentLimits.max
      ),
      e = Big()(this.transactionalPriceGross).minus(this.residualValueGross);
    return (e.lt(t) ? e : t)
      .div(this.downPaymentStepGross)
      .round(0, 0)
      .times(this.downPaymentStepGross)
      .toNumber();
  }
  get termMax() {
    const t =
        "young_used" === this.vehicleType
          ? this.product.termLimits.max - this.vehicleAge
          : this.product.termLimits.max,
      e = this.product.totalAgeLimit - this.vehicleAge;
    return Big()(Math.min(t, e))
      .div(this.termStep)
      .round(0, 0)
      .times(this.termStep)
      .toNumber();
  }
  get annualMileageMin() {
    return Big()(this.product.annualMileageLimits.min)
      .div(this.annualMileageStep)
      .round(0, 3)
      .times(this.annualMileageStep)
      .toNumber();
  }
  get annualMileageMax() {
    if (null === this.tarRvDevRows)
      return Big()(this.product.annualMileageLimits.max)
        .div(this.annualMileageStep)
        .round(0, 3)
        .times(this.annualMileageStep)
        .toNumber();
    for (
      var t = "new" === this.vehicleType ? "rvDev" : "rvDevUsed",
        e = this.tarRvDevRows.length - 1;
      this.tarRvDevRows[e][t] <= -1;

    )
      e--;
    var n = this.tarRvDevRows[e].totalMileage;
    return (
      "young_used" === this.vehicleType &&
        (n = Big()(n)
          .times(this.totalTerm)
          .div(12)
          .minus(this.vehicle.mileage)
          .times(12)
          .div(this.term)),
      Big()(Math.min(this.product.annualMileageLimits.max, n))
        .div(this.annualMileageStep)
        .round(0, 3)
        .times(this.annualMileageStep)
        .toNumber()
    );
  }
  get annualMileageStep() {
    return this.product.annualMileageLimits.step || 1;
  }
  get annualMileageDefault() {
    return Big()(this.product.annualMileageLimits.default)
      .div(this.annualMileageStep)
      .round(0, 1)
      .times(this.annualMileageStep)
      .toNumber();
  }
  get totalMileage() {
    return "young_used" === this.vehicleType
      ? Big()(this.annualMileage)
          .times(this.term)
          .div(12)
          .plus(this.vehicle.mileage)
          .times(12)
          .div(this.totalTerm)
          .toNumber()
      : this.annualMileage;
  }
  get totalTerm() {
    return "young_used" === this.vehicleType
      ? Big()(this.term).plus(this.vehicleAge).toNumber()
      : this.term;
  }
  get tarRvDev() {
    if (!this.interactive) return this.product.tarRvDev;
    if (null !== this.tarRvDevRows) {
      var t = this.lastIndexLessOrEqual(
          this.tarRvDevRows,
          "totalMileage",
          this.totalMileage
        ),
        e = this.tarRvDevRows[t];
      return this.totalMileage === e.totalMileage ||
        t === this.tarRvDevRows.length - 1
        ? e
        : this.tarRvDevRows[t + 1];
    }
    return null;
  }
  get rvDev() {
    return null === this.tarRvDev
      ? -1
      : "new" === this.vehicleType
      ? this.tarRvDev.rvDev
      : this.tarRvDev.rvDevUsed;
  }
  get residualValueBase() {
    if ("used" === this.vehicleType)
      return Big()(this.transactionalPrice)
        .minus(this.accessoriesPrice)
        .toNumber();
    if (this.accessoryLimit <= -1) return this.newPrice;
    var t = Big()(this.basePrice),
      e = t.times(this.accessoryLimit);
    return e.gte(this.optionsPrice) ? this.newPrice : t.plus(e).toNumber();
  }

  get residualValue() {
    if (this.rvValue <= -1 || this.rvDev <= -1) return 0;

    const t = Big()(this.rvValue)
      .plus(this.rvDev)
      .times(this.residualValueBase);

    return this.storagePeriod > METADATA.calculator.rvAdjustLimit
      ? Big()(1).minus(METADATA.calculator.rvAdjust).times(t).toNumber()
      : t.toNumber();
  }
  get residualValueGross() {
    return this.toGross(this.residualValue);
  }
}

class LeaseProduct extends Product {
  downPaymentGross = this.downPaymentDefaultGross;
  term = this.termDefault;
  residualValueGross = this.residualValueDefaultGross;

  getData() {
    return {
      type: "lease",
      downPaymentGross: this.downPaymentGross,
      term: this.term,
      residualValueGross: this.residualValueGross,
      installmentGross: this.installmentGross,
    };
  }
  get product() {
    return this.vehicle.leaseProduct;
  }
  get isApplicable() {
    return (
      this.vehicleAge <= METADATA.calculator.ageLimit &&
      this.vehicleAge <=
        this.product.totalAgeLimit - this.product.termLimits.min
    );
  }
  get downPaymentMaxGross() {
    return Big()(this.transactionalPriceGross)
      .times(this.product.downPaymentLimits.max)
      .div(this.downPaymentStepGross)
      .round(0, 0)
      .times(this.downPaymentStepGross)
      .toNumber();
  }
  get termMax() {
    var t = this.product.totalAgeLimit - this.vehicleAge;
    return Big()(Math.min(this.product.termLimits.max, t))
      .div(this.termStep)
      .round(0, 0)
      .times(this.termStep)
      .toNumber();
  }
  get residualValueFactorLimits() {
    var t = this.lastIndexLessOrEqual(
      this.product.residualValueFactorLimits,
      "term",
      this.term
    );
    return this.product.residualValueFactorLimits[t];
  }
  get residualValueMinGross() {
    return Big()(this.transactionalPriceGross)
      .times(this.residualValueFactorLimits.min)
      .div(this.residualValueStepGross)
      .round(0, 3)
      .times(this.residualValueStepGross)
      .toNumber();
  }
  get residualValueMaxGross() {
    return Big()(this.transactionalPriceGross)
      .times(this.residualValueFactorLimits.max)
      .div(this.residualValueStepGross)
      .round(0, 0)
      .times(this.residualValueStepGross)
      .toNumber();
  }
  get residualValueStepGross() {
    var t = this.product.residualValueStep || 1;
    return t < 1 ? Big()(this.transactionalPriceGross).times(t).toNumber() : t;
  }
  get residualValueDefaultGross() {
    return "max" === this.product.residualValueDefault
      ? this.residualValueMaxGross
      : this.residualValueMinGross;
  }
  get residualValue() {
    return this.toNet(this.residualValueGross);
  }
}

enum ProductTypes {
  COMFORT_LEASE = "COMFORT_LEASE",
  LEASE = "LEASE",
}

function Calculator({ productType }: { productType: ProductTypes }) {
  const [calculator] = useState(
    () =>
      new {
        [ProductTypes.COMFORT_LEASE]: ComfortLeaseProduct,
        [ProductTypes.LEASE]: LeaseProduct,
      }[productType]()
  );

  const [criteria, setCriteria] = useState(() =>
    Object.assign(
      {
        downPaymentGross: calculator.downPaymentGross,
        term: calculator.term,
      },
      productType === ProductTypes.COMFORT_LEASE
        ? {
            annualMileage: calculator.annualMileage,
          }
        : {
            residualValueGross: calculator.residualValueGross,
          }
    )
  );

  useEffect(() => {
    if (productType === ProductTypes.COMFORT_LEASE) {
      setCriteria((criteria) => ({
        ...criteria,
        tarRvDevRows: (({ columns, rows }) =>
          rows
            .map((item) =>
              Object.entries(columns).reduce(
                (list, [key, index]) =>
                  Object.assign(list, {
                    [key]: item[index],
                  }),
                {}
              )
            )
            .filter((item) => item.term === criteria.term)
            .map((item) =>
              Object.assign(item, {
                carSegmentId_term: `${calculator.product.tarRvMod.carSegmentId}_${item.term}`,
              })
            ))(TAR_RV_DEV),
      }));
    }
  }, [TAR_RV_DEV, criteria.term]);

  Object.assign(calculator, criteria);

  console.log({
    calculator,
    criteria,
  });

  return (
    <div>
      <fieldset>
        <div>
          <label>
            <span>Opłata wstępna</span>
            <input
              type="range"
              min={calculator.downPaymentMinGross}
              max={calculator.downPaymentMaxGross}
              step={calculator.downPaymentStepGross}
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
            <span>{`${calculator.downPaymentGross} zł`}</span>
          </label>
        </div>
        <div>
          <label>
            <span>Okres</span>
            <input
              type="range"
              min={calculator.termMin}
              max={calculator.termMax}
              step={calculator.termStep}
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
        {productType === ProductTypes.COMFORT_LEASE && (
          <div>
            <label>
              <span>Roczny przebieg</span>
              <input
                type="range"
                min={calculator.annualMileageMin}
                max={calculator.annualMileageMax}
                step={calculator.annualMileageStep}
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
        {productType === ProductTypes.LEASE && (
          <div>
            <label>
              <span>Wartość końcowa</span>
              <input
                type="range"
                min={calculator.residualValueMinGross}
                max={calculator.residualValueMaxGross}
                step={calculator.residualValueStepGross}
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
      <div>{`${calculator.product.type} (${
        calculator.product.calculationMode ?? "-"
      })`}</div>
      <ul>
        <li>{`Cena: ${
          calculator.transactionalPriceGross
        } zł (netto ${Math.round(calculator.transactionalPrice)} zł)`}</li>
        <li>{`Opłata wstępna: ${calculator.downPaymentGross} zł (${
          Math.round(
            (calculator.downPaymentGross / calculator.transactionalPriceGross) *
              100 *
              100
          ) / 100
        }%)`}</li>
        <li>{`Okres: ${calculator.term} Miesiące`}</li>
        {calculator.annualMileage !== undefined && (
          <li>{`Roczny przebieg: ${criteria.annualMileage}km`}</li>
        )}
        <li>{`Wartość końcowa: ${
          Math.round(calculator.residualValueGross * 100) / 100
        } zł (${
          Math.round(
            (calculator.residualValueGross /
              calculator.transactionalPriceGross) *
              100 *
              100
          ) / 100
        }%)`}</li>
        <li>{`Miesięczna rata: ${Math.round(
          calculator.installmentGross
        )} zł (netto ${Math.round(calculator.installment)} zł)`}</li>
      </ul>
    </div>
  );
}

export default function Section() {
  return (
    <div className={styles.Section}>
      <h2>Finances</h2>
      <Calculator productType={ProductTypes.COMFORT_LEASE} />
      <Calculator productType={ProductTypes.LEASE} />
    </div>
  );
}
