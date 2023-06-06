// objects are reference type
//arrays are good but not sufficient
// for real wold data
// objects store key value pairs
// objects dont have index

// how to create objects

// object literal
const person = {
  name: "Sourabh",
  age: 30,
  hobbies: ["swimming", "trekking", "bike riding"],
};

console.log(typeof person);
console.log(person);

// how to access data from objects
console.log(person.name);
console.log(person.age);
console.log(person.hobbies);

// how to add key value pair to objects
person.gender = "male";
console.log(person);

const emp = {
  name: "Pranav",
  age: 30,
  gender: "Male",
  hobbies: ["reading", "listening music", "coding"],
};

const key = "email";

console.log(emp.name);
console.log(emp["age"]);
console.log(emp.hobbies);
emp.id = 111;
emp[key] = "pranav@gmail.com";
console.log(emp);
