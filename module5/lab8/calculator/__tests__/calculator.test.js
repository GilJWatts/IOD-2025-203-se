const { add, subtract, multiply, divide } = require("../lib/calculator");

const logger = require("../lib/logger");
jest.mock("../lib/logger", () => ({
  logMessage: jest.fn(),
}));

// Test Suite for Addition
describe("Addition", () => {
  test("adds two positive numbers correctly", () => {
    expect(add(1, 2)).toBe(3);
    expect(logger.logMessage).toHaveBeenCalledWith(
      expect.stringContaining("ADD: 1 + 2 = 3")
    );
  });

  test("adds a positive and a negative number correctly", () => {
    expect(add(5, -3)).toBe(2);
    expect(logger.logMessage).toHaveBeenCalledWith(
      expect.stringContaining("ADD: 5 + -3 = 2")
    );
  });

  afterEach(() => {
    logger.logMessage.mockClear();
  });
});

// Test Suite for Subtraction
describe("Subtraction", () => {
  test("subtracts two positive numbers correctly", () => {
    expect(subtract(10, 5)).toBe(5);
    expect(logger.logMessage).toHaveBeenCalledWith(
      expect.stringContaining("SUBTRACT: 10 - 5 = 5")
    );
  });

  afterEach(() => {
    logger.logMessage.mockClear();
  });
});

// Test Suite for Multiplication
describe("Multiplication", () => {
  test("multiplies two positive numbers correctly", () => {
    expect(multiply(2, 4)).toBe(8);
    expect(logger.logMessage).toHaveBeenCalledWith(
      expect.stringContaining("MULTIPLY: 2 * 4 = 8")
    );
  });

  afterEach(() => {
    logger.logMessage.mockClear();
  });
});

// Test Suite for Division
describe("Division", () => {
  test("divides two positive numbers correctly", () => {
    expect(divide(10, 2)).toBe(5);
    expect(logger.logMessage).toHaveBeenCalledWith(
      expect.stringContaining("DIVIDE: 10 / 2 = 5")
    );
  });

  test("handles division by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
    expect(logger.logMessage).toHaveBeenCalledWith(
      expect.stringContaining("ERROR: Division by zero attempted with 10 / 0")
    );
  });

  afterEach(() => {
    logger.logMessage.mockClear();
  });
});

// Tests for different scenarios (negative numbers, decimals, zero)
describe("Addition (additional cases)", () => {
  test("adds two negative numbers correctly", () => {
    expect(add(-5, -3)).toBe(-8);
  });
  test("adds zero correctly", () => {
    expect(add(10, 0)).toBe(10);
  });
  test("adds decimal numbers correctly", () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });
  afterEach(() => {
    logger.logMessage.mockClear();
  });
});

describe("Subtraction (additional cases)", () => {
  test("subtracts a negative number from a positive number correctly", () => {
    expect(subtract(5, -3)).toBe(8);
  });
  test("subtracts two negative numbers correctly", () => {
    expect(subtract(-5, -3)).toBe(-2);
  });
  test("subtracts zero correctly", () => {
    expect(subtract(10, 0)).toBe(10);
  });
  test("subtracts decimal numbers correctly", () => {
    expect(subtract(0.5, 0.1)).toBeCloseTo(0.4);
  });
  afterEach(() => {
    logger.logMessage.mockClear();
  });
});

describe("Multiplication (additional cases)", () => {
  test("multiplies a positive and a negative number correctly", () => {
    expect(multiply(5, -2)).toBe(-10);
  });
  test("multiplies two negative numbers correctly", () => {
    expect(multiply(-3, -4)).toBe(12);
  });
  test("multiplies by zero correctly", () => {
    expect(multiply(7, 0)).toBe(0);
  });
  test("multiplies decimal numbers correctly", () => {
    expect(multiply(2.5, 2)).toBe(5);
  });
  afterEach(() => {
    logger.logMessage.mockClear();
  });
});

describe("Division (additional cases)", () => {
  test("divides a positive by a negative number correctly", () => {
    expect(divide(10, -2)).toBe(-5);
  });
  test("divides a negative by a positive number correctly", () => {
    expect(divide(-10, 2)).toBe(-5);
  });
  test("divides two negative numbers correctly", () => {
    expect(divide(-10, -2)).toBe(5);
  });
  test("divides decimal numbers correctly", () => {
    expect(divide(5, 2)).toBe(2.5);
    expect(divide(0.7, 0.1)).toBeCloseTo(7);
  });
  afterEach(() => {
    logger.logMessage.mockClear();
  });
});
