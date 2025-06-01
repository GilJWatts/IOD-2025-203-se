const {
  _add,
  _subtract,
  _multiply,
  _divide,
} = require("../controllers/calculatorController");

// Test Suite for Addition
describe("Addition", () => {
  test("adds two positive numbers correctly", () => {
    expect(_add(1, 2)).toBe(3);
  });

  test("adds a positive and a negative number correctly", () => {
    expect(_add(5, -3)).toBe(2);
  });

  test("adds two negative numbers correctly", () => {
    expect(_add(-5, -3)).toBe(-8);
  });

  test("adds zero correctly", () => {
    expect(_add(10, 0)).toBe(10);
  });

  test("adds decimal numbers correctly", () => {
    expect(_add(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

// Test Suite for Subtraction
describe("Subtraction", () => {
  test("subtracts two positive numbers correctly", () => {
    expect(_subtract(10, 5)).toBe(5);
  });

  test("subtracts a negative number from a positive number correctly", () => {
    expect(_subtract(5, -3)).toBe(8);
  });

  test("subtracts two negative numbers correctly", () => {
    expect(_subtract(-5, -3)).toBe(-2);
  });

  test("subtracts zero correctly", () => {
    expect(_subtract(10, 0)).toBe(10);
  });

  test("subtracts decimal numbers correctly", () => {
    expect(_subtract(0.5, 0.1)).toBeCloseTo(0.4);
  });
});

// Test Suite for Multiplication
describe("Multiplication", () => {
  test("multiplies two positive numbers correctly", () => {
    expect(_multiply(2, 4)).toBe(8);
  });

  test("multiplies a positive and a negative number correctly", () => {
    expect(_multiply(5, -2)).toBe(-10);
  });

  test("multiplies two negative numbers correctly", () => {
    expect(_multiply(-3, -4)).toBe(12);
  });

  test("multiplies by zero correctly", () => {
    expect(_multiply(7, 0)).toBe(0);
  });

  test("multiplies decimal numbers correctly", () => {
    expect(_multiply(2.5, 2)).toBe(5);
  });
});

// Test Suite for Division
describe("Division", () => {
  test("divides two positive numbers correctly", () => {
    expect(_divide(10, 2)).toBe(5);
  });

  test("divides a positive by a negative number correctly", () => {
    expect(_divide(10, -2)).toBe(-5);
  });

  test("divides a negative by a positive number correctly", () => {
    expect(_divide(-10, 2)).toBe(-5);
  });

  test("divides two negative numbers correctly", () => {
    expect(_divide(-10, -2)).toBe(5);
  });

  test("handles division by zero", () => {
    // Expecting the function to throw an error
    expect(() => _divide(10, 0)).toThrow("Division by zero is not allowed.");
  });

  test("divides decimal numbers correctly", () => {
    expect(_divide(5, 2)).toBe(2.5);
    expect(_divide(0.7, 0.1)).toBeCloseTo(7);
  });
});
