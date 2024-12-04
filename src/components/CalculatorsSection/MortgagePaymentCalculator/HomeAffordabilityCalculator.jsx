import React, { useEffect } from "react";
import "./MortgagePaymentCalculator.scss";

function HomeAffordabilityCalculator() {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => backToTop(), []);
  return (
    <div className="home-affordability-calculator-container">
      <div className="container">
        <div className="calculator-heading">
          <h1>Mortgage Affordability Calculator</h1>
          <h4>
            Use this calculator to estimate what amount of home you can afford
          </h4>
          <p>Enter some basic information here:</p>
        </div>
        <div className="flex-row">
          <div className="form-container">
            <form action="submit">
              <div className="input-fields">
                <div className="input-field">
                  <label htmlFor="gross-income">Gross Income</label>
                  <input
                    type="number"
                    id="gross-income"
                    onWheel={(e) => e.target.blur()}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="down-payment">Down Payment</label>
                  <input
                    type="number"
                    id="down-payment"
                    onWheel={(e) => e.target.blur()}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="amortization">Amortization (Years)</label>
                  <input
                    type="number"
                    id="amortization"
                    placeholder="25"
                    onWheel={(e) => e.target.blur()}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="est-monthlyDebt">Est Monthly Debt</label>
                  <input
                    type="number"
                    id="down-payment"
                    onWheel={(e) => e.target.blur()}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="est-housingExpenses">
                    Est Housing Expenses
                  </label>
                  <input
                    type="number"
                    id="est-housingExpenses"
                    onWheel={(e) => e.target.blur()}
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
                        <span id="maxMortgage">$0.00</span>
                      </td>
                    </tr>
                    <tr aria-atomic="true" aria-live="polite">
                      <th>Estimated Monthly Payment</th>
                      <td>
                        <span id="maxMonthly">$0.00</span>
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

export default HomeAffordabilityCalculator;
