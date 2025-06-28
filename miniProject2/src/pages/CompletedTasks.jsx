import React, { useState, useEffect } from "react";
import { getAllTasks } from "../services/api";

const CompletedTasks = () => {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllTasks()
      .then((response) => {
        const tasks = response.data;

        setCompletedTasks(tasks.filter((task) => task.completed));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch tasks:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      <h1>Completed Tasks</h1>
      <ul id="completedTaskList">
        {completedTasks.length > 0 ? (
          completedTasks.map((task) => <li key={task.id}>{task.text}</li>)
        ) : (
          <li>No tasks have been completed yet.</li>
        )}
      </ul>
    </div>
  );
};

export default CompletedTasks;
