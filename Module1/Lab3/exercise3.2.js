function changeColumn1() {
  const column1 = document.getElementById("column1");
  const heading1 = document.getElementById("heading1");
  const text1 = document.getElementById("text1");

  column1.style.backgroundColor = "lightblue";
  heading1.textContent = text1.value;
}

function changeColumn2() {
  const column2 = document.getElementById("column2");
  const heading2 = document.getElementById("heading2");
  const text2 = document.getElementById("text2");

  column2.style.backgroundColor = "lightgreen";
  heading2.textContent = text2.value;
}

document.getElementById("button1").addEventListener("click", changeColumn1);
document.getElementById("button2").addEventListener("click", changeColumn2);
