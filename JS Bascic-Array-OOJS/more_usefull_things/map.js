// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects

// different between maps and objects

// objects can only have string or symbol as key

// in maps you can use anything as key
// like array, number, string

// object literals
// object key are stored as string or symbol.
// const person = {
//   firstName: "Sourabh",
//   age: 7,
//   1: "one",
// };
// console.log(person.firstName);
// console.log(person["firstName"]);

// for (let key in person) {
//   console.log(typeof key);
// }

// key value pair
const person = new Map();
person.set("firstname", "Sourabh");
person.set("gender", "male");
person.set(1, "one");
// person.set([1, 2, 3], "onetwothree ");
// console.log(person);

// for (let key of person.keys()) {
//   console.log(key, typeof key);
// }

// for (let key of person) {
//   console.log(key);
// }

// for (let [key, value] of person) {
//   console.log(key, value);
// }

const person1 = {
  id: 1,
  firstName: "Sourabh",
};

const userInfo = new Map();
userInfo.set();
