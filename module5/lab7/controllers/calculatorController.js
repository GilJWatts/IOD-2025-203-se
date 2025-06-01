const calculator = require("../lib/calculator"); // Path adjusted: goes up to root, then into lib

const add = (req, res) => {
  try {
    const sum = calculator.add(req.parsedNum1, req.parsedNum2);
    res.status(200).json({ result: sum });
  } catch (error) {
    res.status(500).json({ error: "Internal server error during addition." });
  }
};

const subtract = (req, res) => {
  try {
    const difference = calculator.subtract(req.parsedNum1, req.parsedNum2);
    res.status(200).json({ result: difference });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error during subtraction." });
  }
};

const multiply = (req, res) => {
  try {
    const product = calculator.multiply(req.parsedNum1, req.parsedNum2);
    res.status(200).json({ result: product });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error during multiplication." });
  }
};

const divide = (req, res) => {
  try {
    const quotient = calculator.divide(req.parsedNum1, req.parsedNum2);
    res.status(200).json({ result: quotient });
  } catch (error) {
    if (error.message === "Division by zero is not allowed.") {
      return res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: "Internal server error during division." });
  }
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
