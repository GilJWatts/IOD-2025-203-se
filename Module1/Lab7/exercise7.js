// Function: add
function add(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
//  Unit Tests for add()
console.log("---Unit Tests for add()---");
console.log(
  "Test 1: Positive numbers (5 + 3), Expected: 8, Result: ",
  add(5, 3) === 8
);
console.log(
  "Test 2: Negative numbers (-5 + 3), Expected: -2, Result: ",
  add(-5, 3) === -2
);
console.log("Test 3: Zero (0 + 10), Expected: 10, Result: ", add(0, 10) === 10);
console.log(
  "Test 4: Decimal numbers (2.5 + 2.5), Expected: 5, Result: ",
  add(2.5, 2.5) === 5
);

// Function: subtract
function subtract(num1, num2) {
  const difference = num1 - num2;
  return difference;
}
//  Unit Tests for subtract()
console.log("---Unit Tests for subtract()---");
console.log(
  "Test 1: Positive numbers (10 - 5), Expected: 5, Result: ",
  subtract(10, 5) === 5
);
console.log(
  "Test 2: Negative numbers (5 - 10), Expected: -5, Result: ",
  subtract(5, 10) === -5
);
console.log(
  "Test 3: Zero (0 - 5), Expected: -5, Result: ",
  subtract(0, 5) === -5
);
console.log(
  "Test 4: Subtracting a negative number (5 - -5), Expected: 10, Result: ",
  subtract(5, -5) === 10
);

// Function: multiply
function multiply(num1, num2) {
  const product = num1 * num2;
  return product;
}
//  Unit Tests for multiply()
console.log("---Unit Tests for multiply()---");
console.log(
  "Test 1: Positive numbers (5 * 4), Expected: 20, Result: ",
  multiply(5, 4) === 20
);
console.log(
  "Test 2: Negative numbers (-5 * 4), Expected: -20, Result: ",
  multiply(-5, 4) === -20
);
console.log(
  "Test 3: Zero (5 * 0), Expected: 0, Result: ",
  multiply(5, 0) === 0
);
console.log(
  "Test 4: Negative numbers (-5 * -5), Expected: 25, Result: ",
  multiply(-5, -5) === 25
);

// Function: divide
function divide(num1, num2) {
  if (num2 === 0) {
    return Infinity; // Or you might want to throw an error, depending on your needs
  }
  const quotient = num1 / num2;
  return quotient;
}
//  Unit Tests for divide()
console.log("---Unit Tests for divide()---");
console.log(
  "Test 1: Positive numbers (10 / 2), Expected: 5, Result: ",
  divide(10, 2) === 5
);
console.log(
  "Test 2: Negative numbers (-10 / 2), Expected: -5, Result: ",
  divide(-10, 2) === -5
);
console.log("Test 3: Zero (0 / 5), Expected: 0, Result: ", divide(0, 5) === 0);
console.log(
  "Test 4: Division by zero (10 / 0), Expected: Infinity, Result: ",
  divide(10, 0) === Infinity
);
console.log(
  "Test 5: Decimal division (10 / 4), Expected: 2.5, Result: ",
  divide(10, 4) === 2.5
);
