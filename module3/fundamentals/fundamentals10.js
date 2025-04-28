// 10. The following constructor function creates a new Person object with the given name and age values.
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  // e) Add a canDrive method
  this.canDrive = function () {
    return this.age >= 16;
  };
}

// a) Create a new person using the constructor function and store it in a variable
const person1 = new Person("Alice", 30);

// b) Create a second person using different name and age values and store it in a separate variable
const person2 = new Person("Bob", 15);

// c) Print out the properties of each person object to the console
console.log("Person 1:", person1);
console.log("Person 2:", person2);

// d) Rewrite the constructor function as a class called PersonClass and use it to create a third person using different name and age values. Print it to the console as well.
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }
  // e) Add a canDrive method
  canDrive() {
    return this.age >= 16;
  }
}

const person3 = new PersonClass("Charlie", 37);
console.log("Person 3:", person3);

// e) Add a canDrive method to both the constructor function and the class that returns true if the person is old enough to drive.
console.log("Alice can drive:", person1.canDrive());
console.log("Bob can drive:", person2.canDrive());
console.log("Charlie can drive:", person3.canDrive());
