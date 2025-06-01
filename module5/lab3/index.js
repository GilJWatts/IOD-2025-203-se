const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const calculatorRoutes = require("./routes/calculator");

app.use(cors());

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(
    "You are viewing the root of the Express server. Access the calculator UI via the default served page."
  );
});

app.use("/calculator", calculatorRoutes);

app.listen(port, () => {
  console.log(
    `Server-Side Calculator app listening at http://localhost:${port}`
  );
  console.log(`Access the calculator UI at: http://localhost:${port}/`);
});
