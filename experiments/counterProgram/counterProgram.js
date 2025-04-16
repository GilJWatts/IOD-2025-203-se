// Counter program

const decreaseButton = document.getElementById("decrementButton");
const resetButton = document.getElementById("resetButton");
const increaseButton = document.getElementById("incrementButton");
const counter = document.getElementById("countLabel");

let count = 0;

increaseButton.onclick = function () {
  count++;
  counter.textContent = count;
};

decreaseButton.onclick = function () {
  count--;
  counter.textContent = count;
};

resetButton.onclick = function () {
  count = 0;
  counter.textContent = count;
};
