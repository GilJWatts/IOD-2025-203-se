// 8. Using the following starter code, create a decorator function to validate function arguments
// as strings. Test it by decorating the given orderItems function below.

// a) Create a decorator function validateStringArg(fn) which will validate an
// argument passed to fn to ensure that it is a string, throwing an error if not
function validateStringArg(fn) {
  return function (arg) {
    if (typeof arg !== "string") {
      throw new Error(`Argument must be a string, but received: ${typeof arg}`);
    }
    return fn(arg);
  };
}

function orderItems(itemName) {
  return `Order placed for: ${itemName}`;
}

const validatedOrderItem = validateStringArg(orderItems);

console.log(validatedOrderItem("Apple Watch")); // should run the function
// console.log(validatedOrderItem(123)); // should throw an error

// b) Extend orderItems to use the ... rest operator, allowing multiple item name
// arguments, and include them all in the returned string
function orderItems(...itemNames) {
  if (itemNames.length === 0) {
    return "No items ordered.";
  }
  const orderList = itemNames.map((item) => item).join(", ");
  return `Order placed for: ${orderList}`;
}

console.log(orderItems("Apple Watch", "AirPods", "iPad"));
console.log(orderItems());

// c) Extend the decorator function to validate as strings all arguments passed to fn
function validateStringArg(fn) {
  return function (...args) {
    for (const arg of args) {
      if (typeof arg !== "string") {
        throw new Error(
          `All arguments must be strings, but received: ${typeof arg}`
        );
      }
    }
    return fn(...args);
  };
}

console.log(validatedOrderItem("Apple Watch", "Charger"));

try {
  console.log(validatedOrderItem("Keyboard", 123));
} catch (error) {
  console.error(error.message);
}

try {
  console.log(validatedOrderItem(true, "Mouse"));
} catch (error) {
  console.error(error.message);
}

console.log(validatedOrderItem()); // Should work as no arguments violate the string rule

// d) When testing the decorated function, use try-catch blocks to handle errors thrown for non-string arguments
try {
  console.log(validatedOrderItem("Apple Watch", "Charger"));
} catch (error) {
  console.error("Error during order:", error.message);
}

try {
  console.log(validatedOrderItem("Keyboard", 123));
} catch (error) {
  console.error("Error during order:", error.message);
}

try {
  console.log(validatedOrderItem(true, "Mouse"));
} catch (error) {
  console.error("Error during order:", error.message);
}

try {
  console.log(validatedOrderItem());
} catch (error) {
  console.error("Error during order:", error.message);
}
