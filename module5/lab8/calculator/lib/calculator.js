const { logMessage } = require("./logger");
const crypto = require("crypto");

const generateOperationId = () => {
  return crypto.randomUUID();
};

const add = (num1, num2) => {
  const id = generateOperationId();
  const result = num1 + num2;
  logMessage(`Operation ID: ${id} - ADD: ${num1} + ${num2} = ${result}`);
  return result;
};

const subtract = (num1, num2) => {
  const id = generateOperationId();
  const result = num1 - num2;
  logMessage(`Operation ID: ${id} - SUBTRACT: ${num1} - ${num2} = ${result}`);
  return result;
};

const multiply = (num1, num2) => {
  const id = generateOperationId();
  const result = num1 * num2;
  logMessage(`Operation ID: ${id} - MULTIPLY: ${num1} * ${num2} = ${result}`);
  return result;
};

const divide = (num1, num2) => {
  const id = generateOperationId();
  if (num2 === 0) {
    logMessage(
      `Operation ID: ${id} - ERROR: Division by zero attempted with ${num1} / ${num2}`
    );
    throw new Error("Division by zero is not allowed.");
  }
  const result = num1 / num2;
  logMessage(`Operation ID: ${id} - DIVIDE: ${num1} / ${num2} = ${result}`);
  return result;
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
