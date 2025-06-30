import React, { useState } from "react";
import "./Calculator.css"; // Import the CSS file

function Calculator() {
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);

  const handleNumberClick = (num) => {
    setDisplayValue(displayValue === "0" ? String(num) : displayValue + num);
  };

  const handleOperatorClick = (op) => {
    setOperator(op);
    setPreviousValue(displayValue);
    setDisplayValue("0");
  };

  const handleEqualClick = () => {
    const prev = parseFloat(previousValue);
    const current = parseFloat(displayValue);

    if (operator === "+") setDisplayValue(String(prev + current));
    if (operator === "-") setDisplayValue(String(prev - current));
    if (operator === "*") setDisplayValue(String(prev * current));
    if (operator === "/") setDisplayValue(String(prev / current));

    setOperator(null);
    setPreviousValue(null);
  };

  const handleClear = () => {
    setDisplayValue("0");
    setOperator(null);
    setPreviousValue(null);
  };

  return (
    <div className="calculator-container">
      <div className="calculator-screen">{displayValue}</div>
      <div className="keypad">
        {/* Row 1 */}
        <button className="keypad-button" onClick={handleClear}>
          C
        </button>
        <button
          className="keypad-button operator-button"
          onClick={() => handleOperatorClick("/")}
        >
          /
        </button>
        <button
          className="keypad-button operator-button"
          onClick={() => handleOperatorClick("*")}
        >
          *
        </button>
        <button
          className="keypad-button operator-button"
          onClick={() => handleOperatorClick("-")}
        >
          -
        </button>

        {/* Row 2 */}
        <button className="keypad-button" onClick={() => handleNumberClick(7)}>
          7
        </button>
        <button className="keypad-button" onClick={() => handleNumberClick(8)}>
          8
        </button>
        <button className="keypad-button" onClick={() => handleNumberClick(9)}>
          9
        </button>
        <button
          className="keypad-button operator-button tall-button"
          onClick={() => handleOperatorClick("+")}
        >
          +
        </button>

        {/* Row 3 */}
        <button className="keypad-button" onClick={() => handleNumberClick(4)}>
          4
        </button>
        <button className="keypad-button" onClick={() => handleNumberClick(5)}>
          5
        </button>
        <button className="keypad-button" onClick={() => handleNumberClick(6)}>
          6
        </button>

        {/* Row 4 */}
        <button className="keypad-button" onClick={() => handleNumberClick(1)}>
          1
        </button>
        <button className="keypad-button" onClick={() => handleNumberClick(2)}>
          2
        </button>
        <button className="keypad-button" onClick={() => handleNumberClick(3)}>
          3
        </button>
        <button
          className="keypad-button tall-button"
          onClick={handleEqualClick}
        >
          =
        </button>

        {/* Row 5 */}
        <button
          className="keypad-button wide-button"
          onClick={() => handleNumberClick(0)}
        >
          0
        </button>
        <button
          className="keypad-button"
          onClick={() => handleNumberClick(".")}
        >
          .
        </button>
      </div>
    </div>
  );
}

export default Calculator;
