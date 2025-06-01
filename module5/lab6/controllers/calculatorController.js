// --- Pure Calculation Functions (for unit testing) ---
const _add = (num1, num2) => num1 + num2;
const _subtract = (num1, num2) => num1 - num2;
const _multiply = (num1, num2) => num1 * num2;
const _divide = (num1, num2) => {
  if (num2 === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return num1 / num2;
};

const add = (req, res) => {
  try {
    const sum = _add(req.parsedNum1, req.parsedNum2);
    console.log(`Calculation: ${req.parsed1} + ${req.parsedNum2} = ${sum}`);
    res.status(200).json({ result: sum });
  } catch (error) {
    res.status(500).json({ error: "Internal server error during addition." });
  }
};

const subtract = (req, res) => {
  try {
    const difference = _subtract(req.parsedNum1, req.parsedNum2);
    console.log(
      `Calculation: ${req.parsedNum1} - ${req.parsedNum2} = ${difference}`
    );
    res.status(200).json({ result: difference });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error during subtraction." });
  }
};

const multiply = (req, res) => {
  try {
    const product = _multiply(req.parsedNum1, req.parsedNum2);
    console.log(
      `Calculation: ${req.parsedNum1} * ${req.parsedNum2} = ${product}`
    );
    res.status(200).json({ result: product });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error during multiplication." });
  }
};

const divide = (req, res) => {
  try {
    const quotient = _divide(req.parsedNum1, req.parsedNum2);
    console.log(
      `Calculation: ${req.parsedNum1} / ${req.parsedNum2} = ${quotient}`
    );
    res.status(200).json({ result: quotient });
  } catch (error) {
    // Specifically catch the "Division by zero" error from _divide
    if (error.message === "Division by zero is not allowed.") {
      return res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: "Internal server error during division." });
  }
};

module.exports = {
  _add,
  _subtract,
  _multiply,
  _divide,
  add,
  subtract,
  multiply,
  divide,
};
