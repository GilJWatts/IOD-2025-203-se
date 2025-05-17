const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs").promises;
const path = require("path");
const cors = require("cors"); // Import the cors package

const app = express();
const port = 3000;
const TASKS_FILE = path.join(__dirname, "tasks.json");
app.use(cors()); // Enable CORS for all routes

const dataFilePath = path.join(__dirname, "tasks.json");

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Helper function to read tasks from the JSON file
async function readTasks() {
  try {
    const data = await fs.readFile(dataFilePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    // If the file doesn't exist or is empty/invalid JSON, return an empty array
    return [];
  }
}

// Helper function to write tasks to the JSON file
async function writeTasks(tasks) {
  try {
    await fs.writeFile(dataFilePath, JSON.stringify(tasks, null, 2), "utf8");
  } catch (error) {
    console.error("Error writing to tasks file:", error);
  }
}

// GET route to retrieve all tasks
app.get("/api/tasks", async (req, res) => {
  const tasks = await readTasks();
  res.json(tasks);
});

// POST route to add a new task
app.post("/api/tasks", async (req, res) => {
  const { text } = req.body;
  console.log("Received POST request to /api/tasks");
  console.log("Request body:", req.body);
  if (text) {
    const tasks = await readTasks();
    const newTask = { id: Date.now(), text: text, completed: false }; // use Date.now to generate unique id
    tasks.push(newTask);
    await writeTasks(tasks);
    res.status(201).json(newTask); // Respond with the newly created task and a 201 status
  } else {
    res.status(400).send("Task text is required.");
  }
});

// DELETE route to delete a task by ID
app.delete("/api/tasks/:id", async (req, res) => {
  const taskIdToDelete = parseInt(req.params.id);
  const tasks = await readTasks();
  const updatedTasks = tasks.filter((task) => task.id !== taskIdToDelete);
  await writeTasks(updatedTasks);
  res.sendStatus(204); // Respond with a 204 No Content status after successful deletion
});

// PUT route to update a task (e.g., mark as complete)
app.put("/api/tasks/:id", async (req, res) => {
  const taskIdToUpdate = parseInt(req.params.id);
  const { completed } = req.body;
  const tasks = await readTasks();
  const taskToUpdate = tasks.find((task) => task.id === taskIdToUpdate);

  if (taskToUpdate) {
    if (completed !== undefined) {
      taskToUpdate.completed = completed;
      await writeTasks(tasks);
      res.json(taskToUpdate);
    } else {
      res.status(400).send('Missing "completed" status in the request body.');
    }
  } else {
    res.status(404).send("Task not found.");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
