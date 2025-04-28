// 6. Create a function unique(duplicatesArray) which takes an array parameter that may include duplicates.
// Your function should return an array containing only the unique values from duplicatesArray.
// Test with the following arrays and create another one of your own.
function unique(duplicatesArray) {
  if (!duplicatesArray || duplicatesArray.length === 0) {
    return [];
  }
  return [...new Set(duplicatesArray)];
}

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
const mixedValues = [
  1,
  2,
  "hello",
  "world",
  true,
  false,
  1,
  2,
  "hello",
  "world",
  true,
  false,
];

console.log("Unique colors:", unique(colors)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log("Unique test scores:", unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]
console.log("Unique mixed values:", unique(mixedValues)); // [1, 'hello', true, 'world', false]
console.log("Unique of an empty array:", unique([]));
console.log("Unique of null:", unique(null));
