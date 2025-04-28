// 5. Decimal number operations in JavaScript can lead to unexpected results, as in the following:
let twentyCents = 0.2;
let tenCents = 0.1;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);
// 0.2 + 0.1 = 0.30000000000000004

// We can sometimes avoid this using the toFixed function to force the number of decimal
// places as below, but it’s not always useful:
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen); //why is this not working?

// a) Explain why the above code returns the wrong answer
//toFixed() returns a string, not a number.

// b) Create a function currencyAddition(float1, float2) which safely adds the two
// decimal numbers float1 and float2 and returns the correct float result.
function currencyAddition(float1, float2) {
  const factor = 100; // For two decimal places
  const temp1 = Math.round(float1 * factor);
  const temp2 = Math.round(float2 * factor);
  return (temp1 + temp2) / factor;
}

console.log(`0.20 + 0.10 = ${currencyAddition(0.2, 0.1)}`);
console.log(`1.55 + 0.22 = ${currencyAddition(1.55, 0.22)}`);
console.log(`10.00 + 5.75 = ${currencyAddition(10.0, 5.75)}`);
console.log(`0.1 + 0.2 = ${currencyAddition(0.1, 0.2)}`);

// c) Create a function currencyOperation(float1, float2, operation) which safely performs the
// given operation (either +, -, / or *) on the two numbers and returns the correct float result.
function currencyOperation(float1, float2, operation) {
  const factor = 100;

  const adjustedFloat1 = Math.round(float1 * factor);
  const adjustedFloat2 = Math.round(float2 * factor);

  let result;

  switch (operation) {
    case "+":
      result = adjustedFloat1 + adjustedFloat2;
      break;
    case "-":
      result = adjustedFloat1 - adjustedFloat2;
      break;
    case "*":
      result = adjustedFloat1 * adjustedFloat2;
      break;
    case "/":
      result = adjustedFloat1 / adjustedFloat2;
      break;
    default:
      return "Invalid operation";
  }

  return result / factor;
}

console.log(`0.20 + 0.10 = ${currencyOperation(0.2, 0.1, "+")}`);
console.log(`1.55 - 0.22 = ${currencyOperation(1.55, 0.22, "-")}`);
console.log(`10.00 * 0.05 = ${currencyOperation(10.0, 0.05, "*")}`);
console.log(`1.00 / 0.25 = ${currencyOperation(1.0, 0.25, "/")}`);
console.log(`0.1 + 0.2 == 0.3 is ${0.3 == currencyOperation(0.1, 0.2, "+")}`);
console.log(`Invalid op: ${currencyOperation(1, 2, "%")}`);

// d) (Extension) Extend the above function to include a fourth argument numDecimals
// which allows the operation to support different amounts of decimal places from 1 to 10.
// HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
// different values as well as the below:
function currencyOperation(float1, float2, operation, numDecimals = 2) {
  if (numDecimals < 1 || numDecimals > 10 || !Number.isInteger(numDecimals)) {
    return "Invalid number of decimal places (must be an integer between 1 and 10)";
  }

  const factor = Math.pow(10, numDecimals);

  const adjustedFloat1 = Math.round(float1 * factor);
  const adjustedFloat2 = Math.round(float2 * factor);

  let result;

  switch (operation) {
    case "+":
      result = adjustedFloat1 + adjustedFloat2;
      break;
    case "-":
      result = adjustedFloat1 - adjustedFloat2;
      break;
    case "*":
      result = adjustedFloat1 * adjustedFloat2;
      break;
    case "/":
      result = adjustedFloat1 / adjustedFloat2;
      break;
    default:
      return "Invalid operation";
  }

  return result / factor;
}

console.log(`0.20 + 0.10 (2 dec) = ${currencyOperation(0.2, 0.1, "+", 2)}`);
console.log(
  `1.555 + 0.222 (3 dec) = ${currencyOperation(1.555, 0.222, "+", 3)}`
);
console.log(`10 * 0.05 (1 dec) = ${currencyOperation(10, 0.05, "*", 1)}`);
console.log(`1 / 3 (5 dec) = ${currencyOperation(1, 3, "/", 5)}`);
console.log(`Invalid decimals: ${currencyOperation(1, 2, "+", 0)}`);
console.log(`Invalid decimals: ${currencyOperation(1, 2, "+", 11)}`);
console.log(`Invalid decimals: ${currencyOperation(1, 2, "+", 2.5)}`);

console.log(0.3 == currencyAddition(0.1, 0.2)); // true
console.log(0.3 == currencyOperation(0.1, 0.2, "+")); // true
