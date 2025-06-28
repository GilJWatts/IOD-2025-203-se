import React, { useState, useEffect } from "react";
import { getAllTasks, addTask, updateTask, deleteTask } from "../services/api";

const AllTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const fetchTasks = () => {
    getAllTasks()
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => console.error("Failed to fetch tasks:", error));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async () => {
    if (newTask.trim() === "") return;
    try {
      await addTask(newTask);
      setNewTask("");
      fetchTasks();
    } catch (error) {
      console.error("Failed to add task:", error);
    }
  };

  const handleToggleComplete = async (task) => {
    try {
      await updateTask(task.id, !task.completed);
      fetchTasks();
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  // Handler for deleting a task
  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      fetchTasks(); // Refresh the task list
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  return (
    <div>
      <h1>My To-Do List</h1>
      <div className="input-section">
        <input
          type="text"
          id="newTask"
          placeholder="Add new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleAddTask()}
        />
        <button id="addTaskBtn" onClick={handleAddTask}>
          Add
        </button>
      </div>
      <ul id="taskList">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={task.completed ? "task-item--completed" : ""}
          >
            <span className={`task-text ${task.completed ? "completed" : ""}`}>
              {task.text}
            </span>
            <div>
              <button
                className="complete-btn"
                onClick={() => handleToggleComplete(task)}
              >
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDeleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTasks;
