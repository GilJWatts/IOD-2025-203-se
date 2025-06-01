const express = require("express");
const app = express();
const port = 3000;

const swaggerUi = require("swagger-ui-express");

const calculatorRoutes = require("./routes/calculator"); // Or './calculator' if you moved it

app.use(express.static("public"));

// --- Swagger Definition ---
// This object defines your API structure, routes, and parameters.
const swaggerSpec = {
  openapi: "3.0.0",
  info: {
    title: "Server-Side Calculator API",
    version: "1.0.0",
    description: "A simple Express.js API for basic arithmetic operations.",
  },
  servers: [
    {
      url: `http://localhost:${port}`,
      description: "Local Development Server",
    },
  ],
  paths: {
    "/calculator/add": {
      get: {
        summary: "Adds two numbers",
        operationId: "addNumbers",
        parameters: [
          {
            name: "num1",
            in: "query",
            description: "The first number",
            required: true,
            schema: { type: "number" },
          },
          {
            name: "num2",
            in: "query",
            description: "The second number",
            required: true,
            schema: { type: "number" },
          },
        ],
        responses: {
          200: {
            description: "Successful addition",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: { result: { type: "number" } },
                },
              },
            },
          },
          400: {
            description: "Invalid input",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: { error: { type: "string" } },
                },
              },
            },
          },
        },
      },
    },
    "/calculator/subtract": {
      get: {
        summary: "Subtracts two numbers",
        operationId: "subtractNumbers",
        parameters: [
          {
            name: "num1",
            in: "query",
            required: true,
            schema: { type: "number" },
          },
          {
            name: "num2",
            in: "query",
            required: true,
            schema: { type: "number" },
          },
        ],
        responses: {
          200: {
            description: "Successful subtraction",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: { result: { type: "number" } },
                },
              },
            },
          },
          400: {
            description: "Invalid input",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: { error: { type: "string" } },
                },
              },
            },
          },
        },
      },
    },
    "/calculator/multiply": {
      get: {
        summary: "Multiplies two numbers",
        operationId: "multiplyNumbers",
        parameters: [
          {
            name: "num1",
            in: "query",
            required: true,
            schema: { type: "number" },
          },
          {
            name: "num2",
            in: "query",
            required: true,
            schema: { type: "number" },
          },
        ],
        responses: {
          200: {
            description: "Successful multiplication",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: { result: { type: "number" } },
                },
              },
            },
          },
          400: {
            description: "Invalid input",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: { error: { type: "string" } },
                },
              },
            },
          },
        },
      },
    },
    "/calculator/divide": {
      get: {
        summary: "Divides two numbers",
        operationId: "divideNumbers",
        parameters: [
          {
            name: "num1",
            in: "query",
            required: true,
            schema: { type: "number" },
          },
          {
            name: "num2",
            in: "query",
            required: true,
            schema: { type: "number" },
          },
        ],
        responses: {
          200: {
            description: "Successful division",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: { result: { type: "number" } },
                },
              },
            },
          },
          400: {
            description: "Invalid input or division by zero",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: { error: { type: "string" } },
                },
              },
            },
          },
        },
      },
    },
  },
};

app.get("/", (req, res) => {
  res.send(
    "You are viewing the root of the Express server. Access the calculator UI via the default served page or Swagger docs."
  );
});

// Serve Swagger UI at the /api-docs endpoint
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Map the calculator routes to the app with the '/calculator' prefix
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
