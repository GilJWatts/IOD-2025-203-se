// 5. The following car object has several properties and a method which uses them to print a
// description. When calling the function normally this works as expected, but using it from
// within setTimeout fails.
//
// Why?
// When car.printCarInfo is passed as a callback function to setTimeout, the function is eventually
// executed in a different context. Specifically, within setTimeout, the this keyword usually defaults
// to the global object.
// The global object doesn't have the properties make, model, or year, so when the
// printCarInfo function tries to access this.make, this.model, and this.year,
// it finds them as undefined, leading to unexpected output or errors.
// This is what my research found...but I'm not exactly sure what the global object is.

// let car = {
//   make: "Porsche",
//   model: "911",
//   year: 1964,
//   printCarInfo: function () {
//     console.log(`This car is a ${this.year} ${this.make} ${this.model}`);
//   },
// };

// car.printCarInfo();

// setTimeout(car.printCarInfo, 100);

// a)  Fix the setTimeout call by wrapping the call to car.description() inside a function
let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  printCarInfo: function () {
    console.log(`This car is a ${this.year} ${this.make} ${this.model}`);
  },
};

setTimeout(function () {
  car.printCarInfo();
}, 1000);

// b) Change the year for the car by creating a clone of the original and overriding it
let updatedCar = { ...car, year: 1968 };

console.log("Original car year:", car.year);
console.log("Updated car year:", updatedCar.year);
// c) Does the delayed description() call use the original values or the new values from b)? Why?
// Original. Function happens before the data is updated, it is simply delayed.

// d) Use bind to fix the description method so that it can be called from within
// setTimeout without a wrapper function
const boundPrintCarInfo = car.printCarInfo.bind(car);
setTimeout(boundPrintCarInfo, 2000);

// e) Change another property of the car by creating a clone and overriding it,
// and test that setTimeout still uses the bound value from d)
let anotherUpdatedCar = { ...car, make: "Ferrari" };
console.log("Another updated car make:", anotherUpdatedCar.make);
