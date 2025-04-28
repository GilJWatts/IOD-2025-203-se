// 3. Use the following animals array for the below tasks.
// Test each one by printing the result to the console.
const animals = ["Tiger", "Giraffe"];

// a) Add 2 new values to the end
animals.push("Elephant", "Piranha");
console.log("a) Animals after adding to the end:", animals);

// b) Add 2 new values to the beginning
animals.unshift("Monkey", "Zebra");
console.log("b) Animals after adding to the beginning:", animals);

// c) Sort the values alphabetically
animals.sort();
console.log("c) Animals sorted alphabetically:", animals);

// d) Write a function replaceMiddleAnimal(newValue) that replaces the
// value in the middle of the animals array with newValue
function replaceMiddleAnimal(newValue) {
  const middleIndex = Math.floor(animals.length / 2);
  if (animals.length % 2 === 1) {
    animals[middleIndex] = newValue;
  } else {
    animals[middleIndex - 1] = newValue;
  }
}

replaceMiddleAnimal("Panda");
console.log("d) Animals after replacing the middle:", animals);

// e) Write a function findMatchingAnimals(beginsWith) that returns a new array
//    containing all the animals that begin with the beginsWith string. Try to make it
//    work regardless of upper/lower case.
function findMatchingAnimals(beginsWith) {
  const lowerCaseBeginsWith = beginsWith.toLowerCase();
  return animals.filter((animal) =>
    animal.toLowerCase().startsWith(lowerCaseBeginsWith)
  );
}

console.log("e) Animals starting with 'T':", findMatchingAnimals("T"));
console.log("e) Animals starting with 'g':", findMatchingAnimals("g"));
console.log("e) Animals starting with 'P':", findMatchingAnimals("P"));
