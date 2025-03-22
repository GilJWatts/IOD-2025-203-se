console.log("hello world, 'this is in quotes'");

function sayHello() {
  console.log("Hello this my hello function");
}

// this is supposed to call the function
sayHello();

function sum(a, b) {
  console.log(a + b);

  console.log("THIS IS BEFORE THE RETURN");

  return a + b;

  console.log("THIS IS AFTER THE RETURN");
}

sum(5, 1);
