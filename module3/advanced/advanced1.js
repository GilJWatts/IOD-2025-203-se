// 1. makeCounter below is a decorator function which creates and returns a function that increments a counter.
// a) Create a second counter counter2 using the makeCounter function and test to see if
// it remains independent to counter1
//

// b) Modify makeCounter so that it takes an argument startFrom specifying where the
// counter starts from (instead of always starting from 0)
// function makeCounter(startFrom) {
//   let currentCount = startFrom;
//   return function () {
//     currentCount++;
//     console.log(currentCount);
//     return currentCount;
//   };
// }

// let counter1 = makeCounter(10);
// counter1(); // 11
// counter1(); // 12

// let counter2 = makeCounter(5);
// counter2(); // 6

// c) Modify makeCounter to take another argument incrementBy, which specifies how
// much each call to counter() should increase the counter value by.
function makeCounter(startFrom, incrementBy) {
  let currentCount = startFrom;
  return function () {
    currentCount += incrementBy;
    console.log(currentCount);
    return currentCount;
  };
}

let counter1 = makeCounter(0, 2); // Starts at 0, increments by 2
counter1(); // 2
counter1(); // 4

let counter2 = makeCounter(10, 5); // Starts at 10, increments by 5
counter2(); // 15
counter2(); // 20
