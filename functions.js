(function () {
  console.log("Hello World");
})();

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

//higher order function
function higherorder(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const multiply2 = (x, y) => x * y;

console.log(higherorder(3, 5, add));
console.log(higherorder(3, 5, multiply2));

//global scope
let globalVar = "Anjum here";
function printGlobalVar() {
  console.log(globalVar);
}
printGlobalVar();

//local scope

function example() {
  let localVar = "Anjum bahamani";
  console.log(localVar);
}
example();

const greet = function (name) {
  return `Hello, ${name}!`;
};

console.log(greet("Alice"));
console.log(greet("Bob"));

// function expression
function add(a, b) {
  return a + b;
}
console.log(add(5, 3));

// arrow function
const functionName = (parameters) => {
  return value;
};
const multiply = (a, b) => a * b;

console.log(multiply(4, 3));
