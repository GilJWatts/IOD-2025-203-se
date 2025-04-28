let teamSports = ["Hockey", "Cricket", "Volleyball"];
let moreSports = teamSports; // Assigning by reference

moreSports.push("Football");
moreSports.unshift("Basketball");

console.log("moreSports:", moreSports);
