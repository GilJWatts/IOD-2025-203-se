const express = require("express");
const router = express.Router();

const parseNumbers = (req, res, next) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({
      error: "Invalid input. Please provide valid numbers for num1 and num2.",
    });
  }

  req.parsedNum1 = num1;
  req.parsedNum2 = num2;
  next();
};

router.get("/add", parseNumbers, (req, res) => {
  const sum = req.parsedNum1 + req.parsedNum2;
  console.log(`Calculation: ${req.parsedNum1} + ${req.parsedNum2} = ${sum}`);
  res.status(200).json({ result: sum });
});

router.get("/subtract", parseNumbers, (req, res) => {
  const difference = req.parsedNum1 - req.parsedNum2;
  console.log(
    `Calculation: ${req.parsedNum1} - ${req.parsedNum2} = ${difference}`
  );
  res.status(200).json({ result: difference });
});

router.get("/multiply", parseNumbers, (req, res) => {
  const product = req.parsedNum1 * req.parsedNum2;
  console.log(
    `Calculation: ${req.parsedNum1} * ${req.parsedNum2} = ${product}`
  );
  res.status(200).json({ result: product });
});

router.get("/divide", parseNumbers, (req, res) => {
  if (req.parsedNum2 === 0) {
    return res.status(400).json({ error: "Division by zero is not allowed." });
  }
  const quotient = req.parsedNum1 / req.parsedNum2;
  console.log(
    `Calculation: ${req.parsedNum1} / ${req.parsedNum2} = ${quotient}`
  );
  res.status(200).json({ result: quotient });
});

module.exports = router;
