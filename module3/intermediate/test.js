function ucFirstLetters(str) {
  if (!str) {
    return ""; // Handle empty strings
  }
  const words = str.split(" "); // Split the string into an array of words
  const capitalizedWords = words.map((word) => {
    if (word.length > 0) {
      return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize first letter and add the rest
    } else {
      return ""; // Handle empty words (e.g., due to multiple spaces)
    }
  });
  return capitalizedWords.join(" "); // Join the capitalized words back into a string
}

console.log(ucFirstLetters("los angeles"));
console.log(ucFirstLetters("this is a test string"));
console.log(ucFirstLetters("  multiple   spaces  ")); // Testing with multiple spaces
console.log(ucFirstLetters("one")); // Testing with a single word
console.log(ucFirstLetters("")); // Testing with an empty string
