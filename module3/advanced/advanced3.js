// 3. 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed,
// similar requests until there's a brief pause, then only executing the most recent of those
// requests. See https://www.techtarget.com/whatis/definition/debouncing
// It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server
// requests being initiated if a user clicks repeatedly on a button.
// Using the following code to test and start with:

// a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
// suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
// pause, the most recent call to func should be executed and any others ignored.
// function debounce(func) {
//   let timeoutId;
//   return function () {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       func();
//     }, 1000);
//   };
// }

// function printMe() {
//   console.log("printing debounced message");
// }
// printMe = debounce(printMe); //create this debounce function for a)
// //fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
// setTimeout(printMe, 100);
// setTimeout(printMe, 200);
// setTimeout(printMe, 300);

// b) Extend the debounce decorator function to take a second argument ms, which defines the
// length of the period of inactivity instead of hardcoding to 1000ms
// function debounce(func, ms) {
//   let timeoutId;
//   return function () {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       func();
//     }, ms);
//   };
// }

// function printMe() {
//   console.log("printing debounced message");
// }

// printMe = debounce(printMe, 10500); // Now debounced with a 10.5s delay

// setTimeout(printMe, 100);
// setTimeout(printMe, 200);
// setTimeout(printMe, 300);

// c) Extend debounce to allow the original debounced function printMe to take an argument
// msg which is included in the console.log statement.
function debounce(func, ms) {
  let timeoutId;
  return function (...args) {
    // Collect any arguments passed to the decorated function
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args); // Pass the collected arguments to the original function
    }, ms);
  };
}

function printMe(msg) {
  console.log(`printing debounced message: ${msg}`);
}

printMe = debounce(printMe, 750); // Debounced with a 750ms delay

setTimeout(() => printMe("first try"), 100);
setTimeout(() => printMe("second attempt"), 200);
setTimeout(() => printMe("final call"), 300);
