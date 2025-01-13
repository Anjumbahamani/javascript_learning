//Conditionals allow you to execute different code based on conditions (true/false).

//if statement

let age = 18;

if (age >= 18) {
  console.log("you are eligible to vote");
}

let number = 10;
if (number > 0) {
  console.log("The number is positive.");
}

//if-else statement
let ages = 18;
if (ages >= 19) {
  console.log("you are eligible to vote");
} else {
  console.log("you are not eligible to vote");
}

let agee = 17;

if (agee >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

let isLoggedIn = false;

if (isLoggedIn) {
  console.log("Wellcome back!");
} else {
  console.log("Please log in.");
}

//if...else if....else statement

let marks = 85;

if (marks >= 90) {
  console.log("you got distinction");
} else if (marks >= 60) {
  console.log("you got first class");
} else if (marks >= 40) {
  console.log("you got second class");
} else {
  console.log("you got fail");
}

let temperature = 30;

if (temperature > 35) {
  console.log("It's extremely hot.");
} else if (temperature > 25) {
  console.log("It's warm.");
} else if (temperature > 15) {
  console.log("It's cool.");
} else {
  console.log("It's cold.");
}

//switch statement
let day = 4;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

let fruit = "Apple";

switch (fruit) {
  case "Banana":
    console.log("Bananas are yellow.");
    break;
  case "Apple":
    console.log("Apples can be red, green, or yellow.");
    break;
  default:
    console.log("Fruit not recognized.");
}

//without break statement

let numberr = 2;

switch (numberr) {
  case 1:
    console.log("one");
  case 2:
    console.log("two");
  case 3:
    console.log("three");
    break;
  default:
    console.log("Invalid number");
}


//ternary operator

let isHealthy = true;
let message = isHealthy ? "healthy" : "sick";
console.log(message);


let anjum = true;
let messages = anjum ? "yes" : "no";
console.log(messages);