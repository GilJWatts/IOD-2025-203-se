function ucFirstLetters(str) {
  if (!str) {
    return "";
  }
  const words = str.split(" ");
  const capitalizedWords = words.map((word) => {
    if (word.length > 0) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return "";
    }
  });
  return capitalizedWords.join(" ");
}

console.log(ucFirstLetters("los angeles"));
console.log(ucFirstLetters("this is a test string"));
console.log(ucFirstLetters("  multiple   spaces  ")); // Testing with multiple spaces
console.log(ucFirstLetters("one")); // Testing with a single word
console.log(ucFirstLetters("")); // Testing with an empty string
