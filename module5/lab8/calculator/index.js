const express = require("express");
const app = express();
const port = 3000;

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const calculatorRoutes = require("./routes/calculator");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(
    "You are viewing the root of the Express server. Access the calculator UI via the default served page or Swagger docs."
  );
});

app.use("/calculator", calculatorRoutes);

app.listen(port, () => {
  console.log(
    `Server-Side Calculator app listening at http://localhost:${port}`
  );
  console.log(`Access the calculator UI at: http://localhost:${port}/`);
  console.log(
    `Access the API documentation at: http://localhost:${port}/api-docs`
  );
});
