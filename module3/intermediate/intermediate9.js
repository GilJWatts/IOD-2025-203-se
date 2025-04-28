// 9. Given the below salaries object, perform the following tasks.
let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

// a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
function sumSalaries(salaries) {
  let totalSalary = 0;
  for (const salary of Object.values(salaries)) {
    totalSalary += salary;
  }
  return totalSalary;
}

console.log("a) Total of all salaries:", sumSalaries(salaries));

// b) Write a function topEarner(salaries) that calculates and returns the name of the
//    person earning the highest salary
function topEarner(salaries) {
  let maxSalary = -Infinity;
  let topEarnerName = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      topEarnerName = name;
    }
  }
  return topEarnerName;
}

console.log("b) Top earner:", topEarner(salaries));
