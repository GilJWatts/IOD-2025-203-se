// 1. press a number - save the number
// 2. press the operator - save the operator
// 3. press a 2nd number - save the 2nd number
// 4. press the equal sign - make the calculation

let firstNumber;
let secondNumber;
let step = 0;
let operator;
let result = 0;

let numArray = [];
let secondNumArray = [];

const display = document.getElementById("display");

function appendToDisplay(input) {
  if (step === 0 || step === 1) {
    numArray.push(input);
    firstNumber = parseFloat(Number(numArray.join("")));
    display.value = firstNumber;
    step = 1;
  } else if (step === 2) {
    secondNumArray.push(input);
    secondNumber = parseFloat(Number(secondNumArray.join("")));
    display.value = secondNumber;
    step = 3;
    // can't figure out why I can't get the secondNumber to allow a decimal. it works with the firstNumber.
  }
  console.log("Current display value AFTER update:", display.value);
  console.log("appendToDisplay called with input:", firstNumber);
  console.log("appendToDisplay called with input:", secondNumber);
  console.log("Input type check: ", typeof firstNumber);
  console.log("Input type check: ", typeof secondNumber);
  console.log("Step: ", step);
}

function getOperator(op) {
  step = 2;
  operator = op;
  display.value = op;
  console.log("Current display value AFTER update:", display.value);
  console.log("Step: ", step);
}

function clearDisplay() {
  display.value = "";
  firstNumber = null;
  secondNumber = null;
  operator = null;
  step = 0;
  result = 0;
  numArray = [];
  secondNumArray = [];
}

function calculate() {
  step = 4;
  if (operator === "+") {
    result = firstNumber + secondNumber;
    display.value = result;
  } else if (operator === "-") {
    result = firstNumber - secondNumber;
    display.value = result;
  } else if (operator === "*") {
    result = firstNumber * secondNumber;
    display.value = result;
  } else if (operator === "/") {
    result = firstNumber / secondNumber;
    display.value = result;
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
