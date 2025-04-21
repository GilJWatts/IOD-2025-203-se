// 9. Use the following variables to understand how JavaScript stores objects by reference.
//   a) Create a new moreSports variable equal to teamSports and add some new sport values to it (using push and unshift)
let teamSports = ["Hockey", "Cricket", "Volleyball"];
let moreSports = teamSports; //assigning by reference

moreSports.push("Football");
moreSports.unshift("Basketball");

console.log("moreSports", moreSports);

//   b) Create a new dog2 variable equal to dog1 and give it a new value
let dog1 = "Bingo";
let dog2 = dog1;

dog2 = "Lucky";

console.log("dog2:", dog2);

//   c) Create a new cat2 variable equal to cat1 and change its name property
let cat1 = { name: "Whiskers", breed: "Siamese" };
let cat2 = cat1;

cat2.name = "Mittens";

console.log("cat2:", cat2);

//   d) Print the original teamSports, dog1 and cat1 variables to the console. Have they changed? Why?
console.log("Original teamSports:", teamSports);
console.log("Original dog1:", dog1);
console.log("Original cat1:", cat1);

// teamSports has changed:
// I didn't create a new copy of the array. moreSports became another reference to the same array in memory.

// dog1 has not changed:
// The original dog1 will still be 'Bingo'. This is because strings are primitive data types in JavaScript.
// With let dog2 = dog1;, the actual value of dog1 ('Bingo') is copied to dog2.
// They are now independent variables. Reassigning dog2 to 'Lucky' doesn't affect the value stored in dog1.

// cat1 has changed:
// Similar to arrays, objects are also non-primitive data types and are stored by reference.
// let cat2 = cat1; creates another reference to the same object in memory.
// Therefore, when I modify a property of cat2, I am directly changing the underlying object that both cat1 and cat2 refer to.

//   e) Change the way the moreSports and cat2 variables are created to ensure the originals remain independent
let teamSports2 = ["Hockey", "Cricket", "Volleyball"];
let moreSports2 = [...teamSports2];

moreSports2.push("Football");
moreSports2.unshift("Basketball");

console.log("teamSports2", teamSports2);
console.log("moreSports2", moreSports2);

let cat12 = { name: "Whiskers", breed: "Siamese" };
let cat22 = { ...cat12 };

cat22.name = "Mittens";

console.log("cat12", cat12);
console.log("cat22:", cat22);
