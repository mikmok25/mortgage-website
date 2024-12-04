import React, { useEffect } from "react";
import "./MortgagePaymentCalculator.scss";

function MortgageAmortizationCalculator() {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => backToTop(), []);
  return (
    <div className="mortgage-amortization-calculator-container">
      <div className="container">
        <div className="calculator-heading">
          <h1>Mortgage Amortization Calculator</h1>
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
                  <label htmlFor="mortgage-amount">Mortgage Amount</label>
                  <input
                    type="number"
                    id="mortgage-amount"
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
                  <label htmlFor="interest-rate">Interest Rate</label>
                  <input
                    type="number"
                    id="interest-rate"
                    onWheel={(e) => e.target.blur()}
                  />
                </div>
              </div>

              <button type="submit">Calculate</button>
            </form>
          </div>
          <div className="calc-results-container">
            <div className="calc-result-header">Mortgage Interest Paid</div>

            <div className="calc-results-content">
              <div className="calc-values">
                <table aria-label="Your Calculated Maximum Home Price">
                  <tbody>
                    <tr aria-atomic="true" aria-live="polite">
                      <th>Estimated Monthly Payment</th>
                      <td>
                        <span id="maxMonthly">$0.00</span>
                      </td>
                    </tr>
                    <tr aria-atomic="true" aria-live="polite">
                      <th>Estimated Interest Paid</th>
                      <td>
                        <span id="maxInterest">$0.00</span>
                      </td>
                    </tr>
                    <tr aria-atomic="true" aria-live="polite">
                      <th>Total Principal Paid</th>
                      <td>
                        <span id="maxPrincipal">$0.00</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                The interest paid result above is an estimated total interest
                paid over the life of the mortgage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MortgageAmortizationCalculator;
