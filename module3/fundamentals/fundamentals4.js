// 4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?
// let a = 2, b = 3;
// if (a + b < 10) {
//   result += "less than 10";
// } else {
//   result += "greater than 10";
// }

let a = 2,
  b = 3;
aa = 12;
bb = 13;
let result = `${a} + ${b} is `;
let result2 = `${aa} + ${bb} is `;

result += a + b < 10 ? "less than 10" : "greater than 10";
console.log(result);
result2 += aa + bb < 10 ? "less than 10" : "greater than 10";
console.log(result2);
