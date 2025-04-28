// 10. The following code uses the Date object to print the current time and the number of hours
// that have passed today so far. Extend the code to do the following:
const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

// a) Print the total number of minutes that have passed so far today
const minutesPassed = today.getHours() * 60 + today.getMinutes();
console.log(minutesPassed + " minutes have passed so far today");

// b) Print the total number of seconds that have passed so far today
const secondsPassed =
  today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
console.log(secondsPassed + " seconds have passed so far today");

// c) Calculate and print your age as: 'I am x years, y months and z days old'
// Replace with your actual birth date
const birthDate = new Date("1985-04-30");
const now = new Date();

let years = now.getFullYear() - birthDate.getFullYear();
let months = now.getMonth() - birthDate.getMonth();
let days = now.getDate() - birthDate.getDate();

if (months < 0 || (months === 0 && days < 0)) {
  years--;
  months += 12;
  if (days < 0) {
    const lastMonthDays = new Date(
      now.getFullYear(),
      now.getMonth(),
      0
    ).getDate();
    days += lastMonthDays;
    months--;
    if (months < 0) {
      months = 11;
    }
  }
}

console.log(`I am ${years} years, ${months} months and ${days} days old`);

// d) Write a function daysInBetween(date1, date2) which calculates the number of days
//    between two Date objects.

function daysInBetween(date1, date2) {
  // Get the time difference in milliseconds
  const timeDifference = Math.abs(date2.getTime() - date1.getTime());

  // Convert milliseconds to days (1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
}

const pastDate = new Date("2025-04-20");
const futureDate = new Date("2025-05-10");
const anotherPastDate = new Date("2024-12-25");

console.log(
  `Number of days between ${pastDate.toDateString()} and ${futureDate.toDateString()}:`,
  daysInBetween(pastDate, futureDate)
);
console.log(
  `Number of days between ${today.toDateString()} and ${futureDate.toDateString()}:`,
  daysInBetween(today, futureDate)
);
console.log(
  `Number of days between ${today.toDateString()} and ${anotherPastDate.toDateString()}:`,
  daysInBetween(today, anotherPastDate)
);
