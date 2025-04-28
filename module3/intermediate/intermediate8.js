// 8. The following code creates a new Map object for storing names beginning with A, B, or C
// with their phone numbers.
const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

// a) Create a new phoneBookDEF Map to store names beginning with D, E or F
const phoneBookDEF = new Map();

// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
const initialDEFEntries = [
  ["David", "0466123456"],
  ["Eve", "0477889900"],
  ["Fiona", "0488555111"],
];

const phoneBookDEFInitialized = new Map(initialDEFEntries);
console.log("b) Initial phoneBookDEF:", phoneBookDEFInitialized);

// c) Update the phone number for Caroline
phoneBookABC.set("Caroline", "0499876543");
console.log("c) phoneBookABC after updating Caroline:", phoneBookABC);

// d) Write a function printPhoneBook(contacts) that prints the names and phone
//    numbers in the given Map
function printPhoneBook(contacts) {
  console.log("--- Phone Book ---");
  for (const [name, number] of contacts) {
    console.log(`${name}: ${number}`);
  }
  console.log("------------------");
}

printPhoneBook(phoneBookABC);
printPhoneBook(phoneBookDEFInitialized);

// e) Combine the contents of the two individual Maps into a single phoneBook Map
const phoneBookCombined = new Map([
  ...phoneBookABC,
  ...phoneBookDEFInitialized,
]);
console.log("e) Combined phoneBook:", phoneBookCombined);

// f) Print out the full list of names in the combined phone book
function printNames(contacts) {
  console.log("--- Names in Phone Book ---");
  for (const name of contacts.keys()) {
    console.log(name);
  }
  console.log("--------------------------");
}

printNames(phoneBookCombined);
