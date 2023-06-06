// difference between dot and bracket notation
let key = "email";

const person = {
  name: "Sourabh",
  age: 30,
  "person hobbies": ["swimming", "treckking", "bike riding"],
};

console.log(person["person hobbies"]);

person[key] = "sourabh.hulloli@gmail.com";
// person[`${key}`] = "sourabh.hulloli@gmail.com";
console.log(person);
