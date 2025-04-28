// 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// 'margin-left' into camel-cased 'marginLeft'.
// The function should remove all dashes, and uppercase the first letter of each word after a dash.
function camelCase(cssProp) {
  if (!cssProp) {
    return "";
  }
  const words = cssProp.split("-");
  if (words.length === 1) {
    return words[0];
  }
  const camelCasedWords = words.map((word, index) => {
    if (index === 0) {
      return word.toLowerCase();
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  });
  return camelCasedWords.join("");
}

console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display
console.log(camelCase("font-size"));
console.log(camelCase(""));

// b) Create variants of the camelCase function that use different types of for loops, and
function camelCaseForLoop(cssProp) {
  if (!cssProp) {
    return "";
  }
  let result = "";
  let capitalizeNext = false;
  for (let i = 0; i < cssProp.length; i++) {
    const char = cssProp[i];
    if (char === "-") {
      capitalizeNext = true;
    } else {
      if (capitalizeNext) {
        result += char.toUpperCase();
        capitalizeNext = false;
      } else {
        result += char.toLowerCase();
      }
    }
  }
  return result;
}

console.log(camelCaseForLoop("margin-left"));
console.log(camelCaseForLoop("background-image"));
console.log(camelCaseForLoop("display"));
console.log(camelCaseForLoop("font-size"));
console.log(camelCaseForLoop(""));

// c) with and without the conditional operator.
function camelCaseForOf(cssProp) {
  if (!cssProp) {
    return "";
  }
  let result = "";
  let capitalizeNext = false;
  for (const char of cssProp) {
    if (char === "-") {
      capitalizeNext = true;
    } else {
      if (capitalizeNext) {
        result += char.toUpperCase();
        capitalizeNext = false;
      } else {
        result += char.toLowerCase();
      }
    }
  }
  return result;
}

console.log(camelCaseForOf("margin-left"));
console.log(camelCaseForOf("background-image"));
console.log(camelCaseForOf("display"));
console.log(camelCaseForOf("font-size"));
console.log(camelCaseForOf(""));
