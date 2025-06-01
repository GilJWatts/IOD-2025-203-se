document.addEventListener("DOMContentLoaded", () => {
  const num1Input = document.getElementById("num1");
  const num2Input = document.getElementById("num2");
  const resultSpan = document.getElementById("result");
  const errorMessageDiv = document.getElementById("error-message");

  const addButton = document.getElementById("addButton");
  const subtractButton = document.getElementById("subtractButton");
  const multiplyButton = document.getElementById("multiplyButton");
  const divideButton = document.getElementById("divideButton");

  const clearMessages = () => {
    resultSpan.textContent = "Waiting for calculation...";
    resultSpan.style.color = "#007bff";
    errorMessageDiv.textContent = "";
  };

  const performCalculation = async (operation) => {
    clearMessages();

    const num1 = num1Input.value;
    const num2 = num2Input.value;

    const url = `http://localhost:3000/calculator/${operation}?num1=${num1}&num2=${num2}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        resultSpan.textContent = data.result;
      } else {
        errorMessageDiv.textContent = `Error: ${
          data.error || "Something went wrong on the server."
        }`;
        resultSpan.textContent = "ERROR";
        resultSpan.style.color = "#dc3545";
      }
    } catch (error) {
      console.error("Fetch error:", error);
      errorMessageDiv.textContent =
        "Network error or server unreachable. Please check the server.";
      resultSpan.textContent = "FAIL";
      resultSpan.style.color = "#dc3545";
    }
  };

  // Add event listeners to each button
  addButton.addEventListener("click", () => performCalculation("add"));
  subtractButton.addEventListener("click", () =>
    performCalculation("subtract")
  );
  multiplyButton.addEventListener("click", () =>
    performCalculation("multiply")
  );
  divideButton.addEventListener("click", () => performCalculation("divide"));
});
