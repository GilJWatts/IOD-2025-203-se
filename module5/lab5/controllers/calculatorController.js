// Function for addition
const add = (req, res) => {
  const sum = req.parsedNum1 + req.parsedNum2;
  console.log(`Calculation: ${req.parsedNum1} + ${req.parsedNum2} = ${sum}`);
  res.status(200).json({ result: sum });
};

// Function for subtraction
const subtract = (req, res) => {
  const difference = req.parsedNum1 - req.parsedNum2;
  console.log(
    `Calculation: ${req.parsedNum1} - ${req.parsedNum2} = ${difference}`
  );
  res.status(200).json({ result: difference });
};

// Function for multiplication
const multiply = (req, res) => {
  const product = req.parsedNum1 * req.parsedNum2;
  console.log(
    `Calculation: ${req.parsedNum1} * ${req.parsedNum2} = ${product}`
  );
  res.status(200).json({ result: product });
};

// Function for division
const divide = (req, res) => {
  if (req.parsedNum2 === 0) {
    return res.status(400).json({ error: "Division by zero is not allowed." });
  }
  const quotient = req.parsedNum1 / req.parsedNum2;
  console.log(
    `Calculation: ${req.parsedNum1} / ${req.parsedNum2} = ${quotient}`
  );
  res.status(200).json({ result: quotient });
};

// Export all the controller functions
module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
