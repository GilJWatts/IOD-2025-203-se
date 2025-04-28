// 9. We can delay execution of a function using setTimeout, where we need to provide both
// the callback function and the delay after which it should execute.
// a) Create a promise-based alternative randomDelay() that delays execution for a
// random amount of time (between 1 and 20 seconds) and returns a promise we can use
// via .then(), as in the starter code below

function randomDelay() {
  const delay = Math.floor(Math.random() * 20000) + 1000;
  console.log(`Generated delay: ${delay}ms`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

randomDelay().then(() => console.log("There appears to have been a delay."));

// b) If the random delay is even, consider this a successful delay and resolve the promise,
// and if the random number is odd, consider this a failure and reject it

function randomDelay() {
  const delay = Math.floor(Math.random() * 20000) + 1000;
  console.log(`Generated delay: ${delay}ms`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay % 2 === 0) {
        resolve(delay); // Resolve with the delay value
      } else {
        reject(delay); // Reject with the delay value
      }
    }, delay);
  });
}

randomDelay().then((delay) => console.log(`Success! Delayed by ${delay}ms.`));

// c) Update the testing code to catch rejected promises and print a different message

function randomDelay() {
  const delay = Math.floor(Math.random() * 20000) + 1000;
  console.log(`Generated delay: ${delay}ms`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay % 2 === 0) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

randomDelay()
  .then((delay) => console.log(`Success! Delayed by ${delay}ms.`))
  .catch((delay) => console.error(`Failed! Delay was odd: ${delay}ms.`));

// d) Try to update the then and catch messages to include the random delay value
function randomDelay() {
  const delay = Math.floor(Math.random() * 20000) + 1000;
  console.log(`Generated delay: ${delay}ms`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay % 2 === 0) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

randomDelay()
  .then((delay) => console.log(`Promise resolved after ${delay}ms.`))
  .catch((delay) => console.error(`Promise rejected after ${delay}ms.`));
