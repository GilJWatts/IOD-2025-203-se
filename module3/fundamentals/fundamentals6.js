// 6. a) Complete the inigo object by adding a lastName property and including it in the greeting.
//    b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead prints his famous catch phrase to the console.
//    c) Update getCatchPhrase to use arrow function syntax and a conditional operator.

const westley = {
  name: "Westley",
  numFingers: 5,
};

const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};

const inigo = {
  firstName: "Inigo",
  lastName: "Montoya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  // getCatchPhrase(person) {
  //   return person.numFingers === 6
  //     ? "You killed my father. Prepare to die."
  //     : "Nice to meet you.";
  // },
  getCatchPhrase: (person) =>
    person.numFingers === 6
      ? "You killed my father. Prepare to die."
      : "Nice to meet you.",
};

inigo.greeting(westley);
inigo.greeting(rugen);
