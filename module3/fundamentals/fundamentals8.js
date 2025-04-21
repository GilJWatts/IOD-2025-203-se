// 8. The object below represents a single city.
// a) Write a function that takes an object as an argument and uses a for…in loop to access
//    and print to the console each of those object properties and their values. Test it using
//    the sydney object below.
// b) Create a new object for a different city with different properties and call your function
//    again with the new object.

function printCityDetails(city) {
  console.log(`--- Details for ${city.name} ---`);
  for (const property in city) {
    console.log(`${property}: ${city[property]}`);
  }
  console.log("----------------------------");
}

const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};
printCityDetails(sydney);

const tokyo = {
  name: "Tokyo",
  population: 13_929_286,
  country: "Japan",
  founded: "1457",
  timezone: "Asia/Tokyo",
  majorAirport: "Haneda Airport",
};
printCityDetails(tokyo);
