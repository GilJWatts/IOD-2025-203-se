//this got complicated and I got lost.

// 1. press a number - save the number
// 2. press the operator - save the operator
// 3. press a 2nd number - save the 2nd number
// 4. press the equal sign - make the calculation

let firstNumber;
let secondNumber;
let step = 0;
let operator;
let result = 0;

const display = document.getElementById("display");

function appendToDisplay(input) {
  // Check if we just finished a calculation (step 2) and are starting a new number
  if (step === 2) {
    display.value = input; // Start fresh with the new input
    step = 1; // Reset step to indicate we are entering the first number now
  } else {
    // Otherwise (step 0 or 1), append the input to the current display value
    display.value += input;
  }
  console.log("appendToDisplay called with input:", input);
  console.log("Current display value AFTER update:", display.value);
  console.log("Input type check: ", typeof input);
}

function getOperator(op) {
  if (step === 0 && display.value !== "") {
    // 1. Read the value from the display input
    const displayValue = display.value;
    // 2. Convert the display string to a number
    firstNumber = parseFloat(displayValue);
    if (isNaN(firstNumber)) {
      console.error(
        "Could not convert display value to a number:",
        displayValue
      );
      display.value = "Error";
      clearDisplay();
      return;
    }
    // 3. Save the operator that was clicked
    operator = op;
    // 4. Update the state
    step = 1;
    // 5. Clear the display so the user can enter the second number
    display.value = "";

    console.log("First number saved:", firstNumber);
    console.log("Operator saved:", operator);
  } else if (step === 1) {
    // If the user clicks another operator before entering the second number,
    // just update the operator.
    operator = op;
    console.log("Operator changed to:", operator);
  }
  display.value = op;
  console.log(
    "getOperator called with:",
    op,
    "Current step:",
    step,
    "Display:",
    display.value
  );
}

function calculate() {
  // Only calculate if we have a firstNumber, an operator, and are expecting secondNumber (step 1)
  if (step === 1 && operator && display.value !== "") {
    secondNumber = parseFloat(display.value); // Get and convert the second number

    if (isNaN(secondNumber)) {
      console.error("Invalid second number:", display.value);
      display.value = "Error";
      clearDisplay();
      return;
    }

    console.log("Calculating:", firstNumber, operator, secondNumber);

    if (operator === "+") {
      result = firstNumber + secondNumber;
    } else if (operator === "-") {
      result = firstNumber - secondNumber;
    } else if (operator === "*") {
      result = firstNumber * secondNumber;
    } else if (operator === "/") {
      if (secondNumber === 0) {
        result = "Error: Div by 0";
      } else {
        result = firstNumber / secondNumber;
      }
    } else {
      result = "Error: Invalid Op";
    }

    console.log("Result:", result);
    display.value = result;

    if (typeof result === "number") {
      firstNumber = result;
      step = 2;
    } else {
      clearDisplay();
      display.value = result;
    }
    secondNumber = undefined;
    operator = undefined;
  } else {
    console.warn("Calculation cannot proceed. State:", {
      step,
      operator,
      displayValue: display.value,
    });
  }
  console.log(result);
  console.log("Calculate called. State:", {
    step,
    operator,
    firstNumber,
    secondNumber,
    displayValue: display.value,
  });
}
function clearDisplay() {
  display.value = "";
  firstNumber = undefined;
  secondNumber = undefined;
  operator = undefined;
  step = 0;
  result = 0;
}
