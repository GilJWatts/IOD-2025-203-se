document.addEventListener("DOMContentLoaded", function () {
  const completedTaskList = document.getElementById("completedTaskList");

  async function fetchCompletedTasks() {
    try {
      console.log("Fetching tasks...");
      const response = await fetch("http://localhost:3000/api/tasks");
      console.log("Response:", response);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const tasks = await response.json();
      console.log("All tasks:", tasks);
      const completedTasks = tasks.filter((task) => task.completed);
      console.log("Completed tasks:", completedTasks);
      displayCompletedTasks(completedTasks);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  }

  function displayCompletedTasks(tasks) {
    completedTaskList.innerHTML = ""; // Clear the current list
    console.log("Tasks to display:", tasks);
    if (tasks.length === 0) {
      const listItem = document.createElement("li");
      listItem.textContent = "No tasks have been completed yet.";
      completedTaskList.appendChild(listItem);
      return;
    }
    tasks.forEach((task) => {
      const listItem = document.createElement("li");
      listItem.textContent = task.text;
      completedTaskList.appendChild(listItem);
    });
  }

  // Fetch and display completed tasks when the page loads
  fetchCompletedTasks();
});
