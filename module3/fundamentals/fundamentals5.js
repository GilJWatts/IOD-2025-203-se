// 5. Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.
// function getGreeting(name) {
//   return "Hello " + name + "!";
// }

// Function expression syntax
const getGreetingExpression = function (name) {
  return "Hello " + name + "!";
};
// Testing the function expression
let greeting1 = getGreetingExpression("Alice");
console.log(greeting1);
let greeting2 = getGreetingExpression("Bob");
console.log(greeting2);

// arrow function syntax
const getGreetingArrowShort = (name) => "Hello " + name + "!";
// Testing arrow function
let greeting5 = getGreetingArrowShort("Eve");
console.log(greeting5);
let greeting6 = getGreetingArrowShort("Fred");
console.log(greeting6);
