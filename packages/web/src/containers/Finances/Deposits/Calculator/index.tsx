import React, {
  type ChangeEventHandler,
  useCallback,
  useMemo,
  useState,
} from "react";
import { IntlMessageFormat } from "intl-messageformat";

const INTEREST_CAP = {
  END: "na koniec okresu",
};

// var calculateSummary = function (){
//   var initialPayment, monthlyPayment, paymentDuration, interest, interestCap, includeTax, $paidAmount, $interestAmount, paidAmount, interestAmount, $calculatedSummary, calculatedSummary, monthlyInterestRate, pso, taxAmount ;

//   initialPayment = commaToPoint($('#initial-payment').val());
//   monthlyPayment = commaToPoint($('#monthly-payment').val());
//   initialPayment = moneyToNumber(initialPayment);
//   monthlyPayment = moneyToNumber(monthlyPayment);
//   paymentDuration = $('#sim_val1').val();
//   interest = commaToPoint($('#sim_val2').val());
//   interestCap = $('#interest-capitalization').val();
//   includeTax = $('#include-tax').val();
//   $paidAmount = $('#savings-summary-paid-amount');
//   $interestAmount = $('#savings-summary-interest-amount');
//   $calculatedSummary = $('#calculated-summary');
//   paidAmount = moneyToNumber(initialPayment) + moneyToNumber(monthlyPayment) * moneyToNumber(paymentDuration);
//   interest = interest / 100;
//   if (includeTax === '1'){
//           taxAmount = 0.81;
//       } else{
//           taxAmount = 1;
//       }
//   if (interestCap === '1') {
//       //na koniec okresu
//      monthlyInterestRate = Math.pow(( 1 + interest / ( 12 / paymentDuration ) * taxAmount ), ( 1 / paymentDuration )) - 1;
//      interestAmount = initialPayment * ( interest * paymentDuration / 12 ) * taxAmount;
//   } else if (interestCap === '2') {
//       // roczna
//      monthlyInterestRate = Math.pow(( 1 + interest * taxAmount ), ( 1 / 12 )) - 1;
//      interestAmount = initialPayment * ( Math.pow(( 1 + interest * taxAmount ), ( paymentDuration / 12 )) - 1 );
//   } else if (interestCap === '3') {
//       // kwartalna
//      monthlyInterestRate = Math.pow(( 1 + interest / 4 * taxAmount ), ( 1 / 3 )) - 1;
//      interestAmount = initialPayment * ( Math.pow(( 1 + interest / 4 * taxAmount ), ( paymentDuration / 3 )) - 1 );
//   } else if (interestCap === '5') {
//       //dzienna
//      monthlyInterestRate = Math.pow(( 1 + interest / 360 * taxAmount ), 30) - 1;
//      interestAmount = initialPayment * ( Math.pow(( 1 + interest / 360 * taxAmount ), ( paymentDuration * 30 )) - 1 );
//   } else if (interestCap === '4'){
//       //miesieczna
//      monthlyInterestRate = interest / 12 * taxAmount;
//      interestAmount = initialPayment * (( Math.pow(( 1 + interest / 12 * taxAmount ), ( paymentDuration ))) - 1);
//   } else {
//       // handle error
//   }
//   pso =  (monthlyPayment * ( Math.pow(( 1 + monthlyInterestRate ), paymentDuration) - 1 ) / monthlyInterestRate * ( 1 + monthlyInterestRate ) ) - (monthlyPayment * paymentDuration);
//   interestAmount += pso;
//   $paidAmount.html(moneyFormat(paidAmount, true) + ' zł');
//   $interestAmount.html(moneyFormat(interestAmount, true) + ' zł');
//   calculatedSummary = interestAmount + paidAmount;
//   $calculatedSummary.html(moneyFormat(calculatedSummary, true) + ' zł');
// };

export function getInterestAmount({
  initialPayment = 0,
  paymentDuration = 1,
  interest = 0,
  taxAmount = 1,
}) {
  return initialPayment * ((interest * paymentDuration) / 12) * taxAmount;
}

export function useCriteria() {
  return useState(() => ({
    payment: 10000,
    duration: 3,
    interest: 7.5,
    interestCap: Object.keys(INTEREST_CAP)[0],
  }));
}

export function useCalculator({
  payment: initialPayment,
  duration: paymentDuration,
  interest: interest100,
}: {
  payment: number;
  duration: number;
  interest: number;
}) {
  return useMemo(() => {
    const interest = interest100 / 100;
    const brutto = getInterestAmount({
      initialPayment,
      paymentDuration,
      interest,
    });
    const taxAmount = 0.81;
    const netto = brutto * taxAmount;

    return {
      netto,
      brutto,
      tax: brutto - netto,
    };
  }, [initialPayment, paymentDuration, interest100]);
}

export default function Calculator() {
  const [criteria, setCriteria] = useCriteria();
  const calculation = useCalculator(criteria);

  return (
    <div>
      <fieldset>
        <div>
          <label>
            <span>Kwota</span>
            <input
              type="range"
              min={5000}
              max={100000}
              step={5000}
              value={criteria.payment}
              onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
                ({ target }) =>
                  setCriteria((criteria) => ({
                    ...criteria,
                    payment: Number(target.value),
                  })),
                []
              )}
            />
            <span>{`${criteria.payment} PLN`}</span>
          </label>
        </div>
        <div>
          <label>
            <span>Oprocentowanie</span>
            <input
              type="range"
              min={1}
              max={10}
              step={0.1}
              value={criteria.interest}
              onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
                ({ target }) =>
                  setCriteria((criteria) => ({
                    ...criteria,
                    interest: Number(target.value),
                  })),
                []
              )}
            />
            <span>{`${new Intl.NumberFormat("pl-PL", {}).format(
              criteria.interest
            )} %`}</span>
          </label>
        </div>
        <div>
          <label>
            <span>Okres</span>
            <input
              type="range"
              min={2}
              max={12}
              step={1}
              value={criteria.duration}
              onChange={useCallback<ChangeEventHandler<HTMLInputElement>>(
                ({ target }) =>
                  setCriteria((criteria) => ({
                    ...criteria,
                    duration: Number(target.value),
                  })),
                []
              )}
            />
            <span>
              {new IntlMessageFormat(
                `{duration, plural,
                one {# miesiąc}
                few {# miesiace}
                many {# miesięcy}
                other {# miesięcy}
              }`,
                "pl-PL"
              ).format(criteria)}
            </span>
          </label>
        </div>
        <div>
          <label>
            <span>Kapitalizacja</span>
            <select
              value={criteria.interestCap}
              onChange={useCallback<ChangeEventHandler<HTMLSelectElement>>(
                ({ target }) =>
                  setCriteria((criteria) => ({
                    ...criteria,
                    interestCap: target.value,
                  })),
                []
              )}
            >
              {Object.entries(INTEREST_CAP).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            <span>{`Zysk brutto: ${new Intl.NumberFormat("pl-PL", {}).format(
              calculation.brutto
            )} PLN (w tym ${new Intl.NumberFormat("pl-PL", {}).format(
              calculation.tax
            )} PLN podatku)`}</span>
          </label>
        </div>
        <div>
          <label>
            <span>{`Zysk netto: ${new Intl.NumberFormat("pl-PL", {}).format(
              calculation.netto
            )} PLN`}</span>
          </label>
        </div>
      </fieldset>
    </div>
  );
}
