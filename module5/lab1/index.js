const express = require("express");

// --- Server 1 Configuration ---
const app1 = express();
const port1 = 3000;

app1.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to Server 1!</h1><p>Serving content on port " + port1 + "</p>"
  );
});

app1.get("/api/data", (req, res) => {
  res.json({ message: "Data from API Server 1", timestamp: new Date() });
});

// Listen for Server 1
app1.listen(port1, () => {
  console.log(`Server 1 running on http://localhost:${port1}`);
});

// --- Server 2 Configuration ---
const app2 = express();
const port2 = 3001;

app2.get("/", (req, res) => {
  res.send(
    "<h1>Hello from Server 2!</h1><p>Serving content on port " + port2 + "</p>"
  );
});

app2.get("/dashboard", (req, res) => {
  res.send("<h2>This is the Dashboard on Server 2</h2>");
});

// Listen for Server 2
app2.listen(port2, () => {
  console.log(`Server 2 running on http://localhost:${port2}`);
});
