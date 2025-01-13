//An object in JavaScript is a data structure used to store related data collections. It stores data as key-value pairs, where each key is a unique identifier for the associated value. Objects are dynamic, which means the properties can be added, modified, or deleted at runtime.


let person = {
    name:"Anjum",
    age:20,
    city:"Hubli"
    
};
console.log(person);


//accessing properties
console.log(person.name);
console.log(person.age);
console.log(person.city);

//modifying properties
person.age = 21;
console.log(person.age);


//Adding, Updating, and Deleting Properties

person.country = "India";
console.log(person.country);

delete person.country;
console.log(person.country);


//Using Object.keys(), Object.values(), and Object.entries()


console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));


//nested objects

const person1 ={
    name:"Anjum",
    age:20,
    address:{
        city:"Goa",
        state:"Karnataka"
    },
    hobbies:["reading","watching movies","playing games"]
};

console.log(person1.address.city);
console.log(person1.hobbies[1]);