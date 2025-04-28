// 2. The following delayMsg function is intended to be used to delay printing a message until
// some time has passed.
// function delayMsg(msg) {
//   console.log(`This message will be printed after a delay: ${msg}`);
// }
// setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
// setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
// setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
// delayMsg("#4: Not delayed at all");

// a) What order will the four tests below print in? Why?
// The order is:
// #4 - no delay
// #3 - 0ms delay
// #2 - 20ms delay
// #1 - 100ms delay

// b) Rewrite delayMsg as an arrow function
const delayMsg = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
};
setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");
// c) Add a fifth test which uses a large delay time (greater than 10 seconds)
const timeoutId5 = setTimeout(delayMsg, 12000, "#5: Delayed by 12 seconds");

// d) Use clearTimeout to prevent the fifth test from printing at all.
clearTimeout(timeoutId5);

console.log("The fifth delayed message has been cancelled.");
