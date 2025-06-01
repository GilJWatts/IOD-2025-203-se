const express = require("express");
const axios = require("axios");
const app = express();
const port = 4000;

const fakeStoreRoutes = require("./routes/fakeStoreRoutes");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(
    "Fake Store Backend is running! Access the frontend via http://localhost:4000/"
  );
});

app.use("/api", fakeStoreRoutes);

app.listen(port, () => {
  console.log(`Fake Store Backend running at http://localhost:${port}`);
  console.log(`Access the Fake Store UI at: http://localhost:${port}/`);
  console.log(
    `Frontend will now fetch data from: http://localhost:${port}/api`
  );
});
