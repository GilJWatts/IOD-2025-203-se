// 6. Use the Function prototype to add a new delay(ms) function to all functions, which can
// be used to delay the call to that function by ms milliseconds.
// function multiply(a, b) {
//   console.log(a * b);
// }
// multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds
// a) Use the example multiply function below to test it with, as above, and assume that all
// delayed functions will take two parameters
Function.prototype.delay = function (ms) {
  const originalFunction = this;
  return function (a, b) {
    setTimeout(() => {
      originalFunction(a, b);
    }, ms);
  };
};

function multiply(a, b) {
  console.log(a * b);
}

multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

// b) Use apply to improve your solution so that delayed functions can take any number of parameters
Function.prototype.delay = function (ms) {
  const originalFunction = this;
  return function (...args) {
    setTimeout(() => {
      originalFunction.apply(this, args);
    }, ms);
  };
};

function multiply(a, b) {
  console.log(a * b);
}

multiply.delay(1000)(5, 5);

function sumThree(a, b, c) {
  console.log(a + b + c);
}

sumThree.delay(1500)(1, 2, 3);

// c) Modify multiply to take 4 parameters and multiply all of them, and test that your
// delay prototype function still works.
Function.prototype.delay = function (ms) {
  const originalFunction = this;
  return function (...args) {
    setTimeout(() => {
      originalFunction.apply(this, args);
    }, ms);
  };
};

function multiplyFour(a, b, c, d) {
  console.log(a * b * c * d);
}

multiplyFour.delay(2000)(2, 3, 4, 5);
