document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("newTask");
  const addTaskButton = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  // Function to fetch tasks from the server and display them
  async function fetchTasks() {
    try {
      const response = await fetch("http://localhost:3000/api/tasks");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const tasks = await response.json();
      displayTasks(tasks);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  }

  // Function to display tasks in the list
  function displayTasks(tasks) {
    taskList.innerHTML = ""; // Clear the current list
    tasks.forEach((task) => {
      const listItem = document.createElement("li");
      listItem.dataset.taskId = task.id; // Store the task ID in a data attribute
      listItem.innerHTML = `
              <span class="task-text ${task.completed ? "completed" : ""}">${
        task.text
      }</span>
              <button class="complete-btn">${
                task.completed ? "Undo" : "Complete"
              }</button>
              <button class="delete-btn">Delete</button>
          `;

      const completeButton = listItem.querySelector(".complete-btn");
      const deleteButton = listItem.querySelector(".delete-btn");
      const taskSpan = listItem.querySelector(".task-text");

      // Function to mark as Complete
      completeButton.addEventListener("click", async function () {
        const taskId = parseInt(listItem.dataset.taskId);
        const newCompletedStatus = !task.completed;
        try {
          const response = await fetch(
            `http://localhost:3000/api/tasks/${taskId}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ completed: newCompletedStatus }),
            }
          );
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const updatedTask = await response.json();
          taskSpan.classList.toggle("completed", updatedTask.completed);
          listItem.classList.toggle(
            "task-item--completed",
            updatedTask.completed
          ); // Toggle class on LI for background animation
          completeButton.textContent = updatedTask.completed
            ? "Undo"
            : "Complete";
          task.completed = updatedTask.completed; // Update the local task object
        } catch (error) {
          console.error("Failed to update task:", error);
        }
      });

      // Function to delete
      deleteButton.addEventListener("click", async function () {
        const taskId = parseInt(listItem.dataset.taskId);
        try {
          const response = await fetch(
            `http://localhost:3000/api/tasks/${taskId}`,
            {
              method: "DELETE",
            }
          );
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          listItem.remove(); // Remove the item from the DOM on successful deletion
        } catch (error) {
          console.error("Failed to delete task:", error);
        }
      });

      taskList.appendChild(listItem);
    });
  }

  // Event listener for adding a new task
  addTaskButton.addEventListener("click", async function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      try {
        const response = await fetch("http://localhost:3000/api/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: taskText }),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const newTask = await response.json();
        displayTasks([newTask]);
        taskInput.value = ""; // Clear the input field
        fetchTasks(); // Re-fetch to ensure the list is up-to-date
      } catch (error) {
        console.error("Failed to add task:", error);
      }
    }
  });

  // Allow adding tasks by pressing Enter in the input field
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTaskButton.click();
    }
  });

  // Fetch initial tasks when the page loads
  fetchTasks();
});
