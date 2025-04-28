// 2. Create a function truncate(str, max) that truncates a given string of text if its total
// length is greater than the max length. It should return either the truncated text, with an
// ellipsis (…) added to the end if it was too long, or the original text otherwise.

function truncate(str, max) {
  if (str.length > max) {
    return str.slice(0, max) + "...";
  } else {
    return str;
  }
}

console.log(truncate("This text will be truncated if it is too long", 20));
console.log(truncate("This is a short string", 30));
console.log(truncate("Another very long string to test", 10));
console.log(truncate("", 5));

// b) Write another variant of the truncate function that uses a conditional operator.
function truncateConditional(str, max) {
  return str.length > max ? str.slice(0, max) + "..." : str;
}

console.log(
  truncateConditional("This text will be truncated if it is too long", 20)
);
console.log(truncateConditional("This is a short string", 30));
console.log(truncateConditional("Another very long string to test", 10));
console.log(truncateConditional("", 5));
