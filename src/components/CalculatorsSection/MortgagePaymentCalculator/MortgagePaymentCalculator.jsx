import React, { useEffect, useState } from "react";
import "./MortgagePaymentCalculator.scss";

function MortgagePaymentCalculator() {
  const [grossIncome, setGrossIncome] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [amortization, setAmortization] = useState(0);
  const [monthlyDebt, setMonthlyDebt] = useState(0);
  const [housingExpenses, setHousingExpenses] = useState(0);
  const [maxMortgage, setMaxMortgage] = useState(0);
  const [maxMonthly, setMaxMonthly] = useState(0);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => backToTop(), []);

  const calculateMortgage = (e) => {
    e.preventDefault();

    const annualDebt = monthlyDebt * 12;
    const annualHousingExpenses = housingExpenses * 12;
    const maxDebtAllowed = grossIncome * 0.36; //Debt-to-income-ratio (36%)
    const maxHousingExpensesAllowed = grossIncome * 0.28; // Housing-to-income-ratio (28%)

    // Calculate maximum mortgage allowed

    const maxMortgageAmount = Math.min(
      (maxDebtAllowed - annualDebt) / 12, //Based on total debt ratio
      maxHousingExpensesAllowed / 12 // Based on housing expense ratio
    );

    const monthlyInterestRate = 0.05 / 12;
    const numberOfPayments = amortization * 12;

    // Calculate monthly payment
    const monthlyPayment =
      (maxMortgage *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
        Math.pow(1 + monthlyInterestRate, numberOfPayments) -
      1;

    setMaxMortgage(maxMortgageAmount + downPayment);
    setMaxMonthly(monthlyPayment);
  };
  return (
    <div className="mortgage-payment-calculator-container">
      <div className="container">
        <div className="calculator-heading">
          <h1>Mortgage Payment Calculator</h1>
          <h4>
            Use this calculator to estimate what amount of home you can afford
          </h4>
          <p>Enter some basic information here:</p>
        </div>
        <div className="flex-row">
          <div className="form-container">
            <form action="submit" onSubmit={calculateMortgage}>
              <div className="input-fields">
                <div className="input-field">
                  <label htmlFor="gross-income">Gross Income</label>
                  <input
                    type="number"
                    id="gross-income"
                    onWheel={(e) => e.target.blur()}
                    value={grossIncome}
                    onChange={(e) => setGrossIncome(Number(e.target.value))}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="down-payment">Down Payment</label>
                  <input
                    type="number"
                    id="down-payment"
                    onWheel={(e) => e.target.blur()}
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="amortization">Amortization (Years)</label>
                  <input
                    type="number"
                    id="amortization"
                    placeholder="25"
                    value={amortization}
                    onWheel={(e) => e.target.blur()}
                    onChange={(e) => setAmortization(Number(e.target.value))}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="est-monthlyDebt">Est Monthly Debt</label>
                  <input
                    type="number"
                    id="down-payment"
                    value={downPayment}
                    onWheel={(e) => e.target.blur()}
                    onChange={(e) => setMonthlyDebt(Number(e.target.value))}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="est-housingExpenses">
                    Est Housing Expenses
                  </label>
                  <input
                    type="number"
                    id="est-housingExpenses"
                    value={housingExpenses}
                    onWheel={(e) => e.target.blur()}
                    onChange={(e) => setHousingExpenses(Number(e.target.value))}
                  />
                </div>
              </div>

              <button type="submit">Calculate</button>
            </form>
          </div>
          <div className="calc-results-container">
            <div className="calc-result-header">Maximum Home Price</div>

            <div className="calc-results-content">
              <div className="calc-values">
                <table aria-label="Your Calculated Maximum Home Price">
                  <tbody>
                    <tr aria-atomic="true" aria-live="polite">
                      <th>Estimated Total Mortgage Amount</th>
                      <td>
                        <span id="maxMortgage">${maxMortgage.toFixed(2)}</span>
                      </td>
                    </tr>
                    <tr aria-atomic="true" aria-live="polite">
                      <th>Estimated Monthly Payment</th>
                      <td>
                        <span id="maxMonthly">${maxMonthly.toFixed(2)}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Closing cost are an additional 1-1.5% of the purchase price.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MortgagePaymentCalculator;
