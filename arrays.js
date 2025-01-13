//An array is an ordered collection of elements. Each element in an array has an index (position), starting at 0.

// Using square brackets
let fruitss = ["Apple", "Banana", "Cherry"];

// Using the Array constructor
let numbers = new Array(1, 2, 3, 4, 5);

let fruits = ["apple", "banana", "mango"];
fruits[3] = "grapes";
console.log(fruits[3]);
console.log(fruits[0]);

//add element push for end and unshift for start

let number = [10, 20, 30, 40, 50, 60, 70, 80, 90];

number.push(100);
number.unshift(5);

console.log(number);

//remove element pop for end and shift for start

let number1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

number1.pop();
number1.shift();

console.log(number1);

//length of array
let numbers2 = [10, 20, 30, 40, 50];
console.log(numbers2.length);

//looping through an array
let numbers3 = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers3.length; i++) {
  console.log(numbers3[i]);
}

//for each loop
let number4 = [100, 200, 300, 400, 500];
number4.forEach((number) => {
  console.log(number);
});

//map method

let age = [10, 20, 30, 40, 50];

let doubleAge = age.map((age) => age * 2);
console.log(doubleAge);

//filter method
let numbers5 = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers5.filter((num) => num % 2 === 0);
console.log(evenNumbers);

// reduce method
let numbers6 = [1, 2, 3, 4, 5];
let sum = numbers6.reduce((total, num) => total + num, 0);
console.log(sum);

//indexOf method
let fruit = ["apple", "banana", "mango"];
console.log(fruit.indexOf("banana"));
console.log(fruit.indexOf("mango"));
console.log(fruit.indexOf("grapes"));

//includes method
let fruit1 = ["apple", "banana", "mango"];
console.log(fruit1.includes("banana"));
console.log(fruit1.includes("mango"));
console.log(fruit1.includes("grapes"));


//join method
let fruit2 = ["apple", "banana", "mango"];
console.log(fruit2.join(", "));



//slice method
let fruit3 = ["apple", "banana", "mango", "grapes"];
console.log(fruit3.slice(1, 3));

let frui = ["Apple", "Banana", "Cherry", "Mango"];
let sliced = frui.slice(1, 3);
console.log(sliced); 


//splice method
let fruit4 = ["apple", "banana", "mango", "grapes"];
fruit4.splice(0,2);
console.log(fruit4);
