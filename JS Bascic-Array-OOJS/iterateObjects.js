// how to iterate object

const person = {
  name: "Sourabh",
  age: 30,
  "person hobbies": ["swimming", "treckking", "bike riding"],
};

// for in loop
// Object.keys

// for (let key in person) {
//   console.log(`${key} :`, person[key]);
//   //   console.log(`${key} :`, `${person[key]}`);
// }

// console.log(typeof Object.keys(person));
// console.log(Array.isArray(Object.keys(person))); // true

// for (let key of Object.keys(person)) {
//   console.log(person[key]);
// }

const emp = {
  name: "Pranav",
  age: 30,
  gender: "Male",
  hobbies: ["reading", "listening music", "coding"],
};

// for in loop is used to iterate the object keys
// object.keys

// for (let key in emp) {
//   console.log(`${key}: `, emp[key]);
// }

for (let key of Object.keys(emp)) {
  console.log(emp[key]);
}
