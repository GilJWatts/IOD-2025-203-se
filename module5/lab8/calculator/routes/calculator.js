const express = require("express");
const router = express.Router();

// Import the calculator controller functions
const calculatorController = require("../controllers/calculatorController");

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

// Route for addition, using the controller function
router.get("/add", parseNumbers, calculatorController.add);

// Route for subtraction, using the controller function
router.get("/subtract", parseNumbers, calculatorController.subtract);

// Route for multiplication, using the controller function
router.get("/multiply", parseNumbers, calculatorController.multiply);

// Route for division, using the controller function
router.get("/divide", parseNumbers, calculatorController.divide);

module.exports = router;
