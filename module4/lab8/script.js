const DateTime = luxon.DateTime;
const birthDate = DateTime.fromISO("1985-04-30");
const currentDate = DateTime.now();
const resultElement = document.getElementById("days-result");
const diffInDays = currentDate.diff(birthDate, "days").toObject().days;

// 1. Calculate the number of days between your birthdate and the current date
resultElement.textContent = `The number of days between your birthdate and today is: ${Math.floor(
  diffInDays
)} days.`;

// 2. Display the number of years, months, and days between your birthdate and current date
const resultTimeElement = document.getElementById("time-result");
const diffDetailed = currentDate

  .diff(birthDate, ["years", "months", "days"])
  .toObject();
resultTimeElement.textContent = `The time between your birthdate and today is: ${
  diffDetailed.years
} years, ${diffDetailed.months} months, and ${Math.floor(
  diffDetailed.days
)} days.`;

// --- 3. Given two dates, display the date closest to the current date ---
// Define the dates and get the current time
const date1 = DateTime.fromISO("2024-01-15");
const date2 = DateTime.fromISO("2025-08-01");
const now = DateTime.now();
const closestDateResultElement = document.getElementById("closest-date-result");
const diff1_ms = Math.abs(now.diff(date1).as("milliseconds"));
const diff2_ms = Math.abs(now.diff(date2).as("milliseconds"));

// Determine which date is closer or if it's a tie
let closestDateStr;
if (diff1_ms < diff2_ms) {
  closestDateStr = date1.toFormat("DDD");
} else if (diff2_ms < diff1_ms) {
  closestDateStr = date2.toFormat("DDD");
} else {
  closestDateStr = "Both dates are equally close";
}

closestDateResultElement.innerHTML = `Comparing <code>${date1.toFormat(
  "DDD"
)}</code> and <code>${date2.toFormat("DDD")}</code>.<br>
The date closest to today (<code>${now.toFormat(
  "DDD"
)}</code>) is: <strong>${closestDateStr}</strong>`;

// --- 4. Given two dates, display whether the first date is before or after the second date ---
// Define the dates
const dateX = DateTime.fromISO("2024-01-15");
const dateY = DateTime.fromISO("2025-08-01");
const comparisonResultElement = document.getElementById("comparison-result");

let comparisonResultText;
if (dateX.equals(dateY)) {
  comparisonResultText = "the same as";
} else if (dateX < dateY) {
  comparisonResultText = "before";
} else {
  comparisonResultText = "after";
}

comparisonResultElement.innerHTML = `Is <code>${dateX.toFormat(
  "DDD"
)}</code> before or after <code>${dateY.toFormat("DDD")}</code>?<br>
Result: The first date is <strong>${comparisonResultText}</strong> the second date.`;

// --- 5. Display the current time in London ---
const londonTimeResultElement = document.getElementById("london-time-result");
const londonTime = DateTime.now().setZone("Europe/London");

londonTimeResultElement.innerHTML = `Current time in London: <strong>${londonTime.toFormat(
  "HH:mm:ss ZZZZ"
)}</strong><br>
Full Date & Time: <strong>${londonTime.toFormat("DDDD, HH:mm:ss")}</strong>`;
