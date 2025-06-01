const express = require("express");
const app = express();
const port = 3000;

const calculatorRoutes = require("./routes/calculator");

app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to the Server-Side Calculator!</h1><p>Use routes like <code>/calculator/add?num1=10&num2=5</code></p>"
  );
});

app.use("/calculator", calculatorRoutes);

app.listen(port, () => {
  console.log(
    `Server-Side Calculator app listening at http://localhost:${port}`
  );
  console.log("Try these examples in your browser:");
  console.log(
    `  Addition: http://localhost:${port}/calculator/add?num1=10&num2=5`
  );
  console.log(
    `  Subtraction: http://localhost:${port}/calculator/subtract?num1=100&num2=25`
  );
  console.log(
    `  Multiplication: http://localhost:${port}/calculator/multiply?num1=7&num2=8`
  );
  console.log(
    `  Division: http://localhost:${port}/calculator/divide?num1=50&num2=10`
  );
  console.log(
    `  Division by Zero (Error): http://localhost:${port}/calculator/divide?num1=10&num2=0`
  );
  console.log(
    `  Invalid Input (Error): http://localhost:${port}/calculator/add?num1=abc&num2=5`
  );
});
