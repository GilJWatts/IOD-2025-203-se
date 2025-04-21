// 1. What are the results of these expressions? (answer first, then use console.log() to check)
// "" + 1 + 0        // Answer: 10     // string
// - 1 + 0           // Answer: -1     // not a string
// true + false      // Answer: 1      // true = 1 false =2
// !true             // Answer: false  // ! reverses the true
// 6 / "3"           // Answer: 2      // math operator converts string into number
// "2" * "3"         // Answer: 6      // math operator converts string into number
// 4 + 5 + "px"      // Answer: 9px    // started with math
// "$" + 4 + 5       // Answer: $45    // string came first
// "4" - 2           // Answer: 2      // math operator converts string into number
// "4px" - 2         // Answer: NaN    // 4px is NaN
// " -9 " + 5        // Answer: -4     // math operator converts string into number // not sure why "9" is not converted to a number
// " -9 " - 5        // Answer: -14    // math operator converts string into number
// null + 1          // Answer: 1      // null =0
// undefined + 1     // Answer: NaN    // undefined = NaN
// undefined == null // Answer: true   // just is
// undefined === null// Answer: false  // different types
// " \t \n" - 2      // Answer: -2     // tab, space and newline = 0

console.log("" + 1 + 0);
console.log(-1 + 0);
console.log(true + false);
console.log(!true);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log(" -9 " + 5);
console.log(" -9 " - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(undefined == null);
console.log(undefined === null);
console.log(" \t \n" - 2);

// tests
console.log(!0);
console.log(!1);
console.log(!2);
console.log(!!0);
console.log(!!1);
console.log(!!2);
// falsy" (e.g., false, null, undefined, 0, NaN, empty string "").
