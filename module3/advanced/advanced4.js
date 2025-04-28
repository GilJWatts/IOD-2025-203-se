// 4. The Fibonacci sequence of numbers is a famous pattern where the next number in the
// sequence is the sum of the previous 2.
// e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
// a) Write a function printFibonacci() using setInterval that outputs a number in
// the Fibonacci sequence every second.
function printFibonacci() {
  let a = 1;
  let b = 1;
  let intervalId = setInterval(() => {
    console.log(a);
    let temp = b;
    b = a + b;
    a = temp;
  }, 1000);

  setTimeout(() => clearInterval(intervalId), 10000);
}

printFibonacci();

// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
// calls to do the same thing
function printFibonacciTimeouts() {
  let a = 1;
  let b = 1;

  function printNextFibonacci() {
    console.log(a);
    let temp = b;
    b = a + b;
    a = temp;
    setTimeout(printNextFibonacci, 1000);
  }

  setTimeout(printNextFibonacci, 1000);
}

printFibonacciTimeouts();

// c) Extend one of the above functions to accept a limit argument, which tells it how many
// numbers to print before stopping.
function printFibonacciTimeouts(limit) {
  let a = 1;
  let b = 1;
  let count = 0;

  function printNextFibonacci() {
    if (count < limit) {
      console.log(a);
      let temp = b;
      b = a + b;
      a = temp;
      count++;
      setTimeout(printNextFibonacci, 1000);
    }
  }

  if (limit > 0) {
    setTimeout(printNextFibonacci, 1000);
  }
}

printFibonacciTimeouts(10);
