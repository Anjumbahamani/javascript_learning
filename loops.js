//loops are used to repeat a block of code a certain number of times or until a condition is met.

//types of loops in js
// for loop
// while loop
// do-while loop
// for-in loop(used with arrays)
// for-of loop(used with objects)
// for-each loop




// while loop: The condition is checked before the loop body runs. If the condition is false initially, the loop will not execute at all.
// do...while loop: The code inside the loop runs at least once, and the condition is checked after the loop body.
//for-in loop: Iterates over the properties of an object.
//for-of loop: Iterates over the values of an iterable object.
//for-each loop: Iterates over the elements of an array.






//(for loop)

//increment
for (let i = 0; i < 10; i++) {
  // alert(i);
  console.log(i);
}

//decrement or Reverse Counting
for (let i = 5; i > 0; i--) {
  console.log(i);
}

//nested  for loop

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i: ${i},j: ${j}`);
  }
}

//looing through arrays
const names = ["Anjum1", "Anjumb", "Anjum2"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

const fruits = ["apple", "banana", "orange", "mango", "grapes"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//Continue and break

for (let i = 0; i < 10; i++) {
  if (i === 5) continue;
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i);
}

//looping through objects
// const person={
//     name:"Anjum",
//     age:20,
//     city:"Hubli"
// };
// for (let key in person){
//     console.log(`${key}: ${person[key]}`);}

let sum = 0;

for (let i = 1; i <= 5; i++) {
  sum += i;
  //sum = sum + i
}

console.log("Sum is:", sum);

/////////////////////////////////////////////////////////////////////

//(while loop)

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

//infinite loop

// let i = 0;
// while(true){
//     console.log(i);
//     i++;
// }

//break

// let i =0;

// while (true){
//   console.log(i);
//   if (i ===3){
//     break;
//   }
//   i++;
// }

//continue

// let i=0;
// while(i <10){
//   i++;
//   if(i === 5){
//     continue;
//   }
//   console.log(i);
// }

//nested while loop

// let i =0;
// while(i <=3){
//   let j=1;
//   while(j<=3){
//     console.log(`i:${i},j:${j}`);
//     j++;
//   }
//   i++;
// }


//////////////////////////////////////////////////////////////////////////



//do-while loop



// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);



//do...while for skip even number
// let i = 0;
// do {
//   i++;
//   if(i%2===0){
// continue;
//   }
//   console.log(i);
// }while(i<10);

//reverse counting

let i=5;
do{
  console.log(i);
  i--;
}while(i>0);

///////////////////////////////////////////////////////////////////

//for...of loop

const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
  console.log(number);
}
                                 

const fruity = ["apple", "banana", "orange", "mango", "grapes"];
for (const fruit of fruity) {
  console.log(fruit);
}

//value of array
const number=[1,2,3,4,5];
let sum1 = 0;
for (const num of number){
  sum1 += num;
  
}

console.log("sum:",sum1);



//working with string
const message ="hello anjum";

for (const char of message){
  console.log(char);
}



//continue and skip even number

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const num of numbers2){
  if (num %2 ===0){
    continue;
  }
  console.log(num);
}


///////////////////////////////////////////////////////////////////////



//for..in loop

const person ={
  name :"anjum B",
  aga:"21",
  city:"Hubli"
};

for (const key in person){
  console.log(key,":" ,person[key]);
}


//for...in loop for array
const fruitt = ["apple", "banana", "orange", "mango", "grapes"];
for (const index in fruitt){
  console.log(index,":",fruitt[index]);
}


//for...in for nested loop

const user={
  name:"Anjum",
  profile:{
    age:20,
    city:"Hubli"
  },
  friends:["a","b","c","d"]
};

for (const key in user){
  console.log(key ,":",user[key]);
  if(typeof user[key] === "object"){
    for (const innerKey in user[key]){
      console.log(innerKey,":",user[key][innerKey]);
    }
  }
}


const anjum={

  name:"Anjumbbbb",
  profile:{
    age:20,
    city:"Hubli"
  },
}
for (const key in anjum){
  console.log(key,":",anjum[key]);
}