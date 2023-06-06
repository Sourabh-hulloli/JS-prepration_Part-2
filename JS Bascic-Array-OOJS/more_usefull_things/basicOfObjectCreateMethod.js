const obj1 = {
  key1: "value1",
  key2: "value2",
};

// const obj2 = {
//   key3: "value3",
// };

// creating object using other way
const obj2 = Object.create(obj1);
obj2.key3 = "value3";
// obj2.key2 = "Unique";
console.log(obj1.key1);
console.log(obj2.key1);
console.log(obj2.key2);
console.log(obj2);
console.log(obj2.__proto__); // also called dunder
// __proto__
// official ecmascript documentation [[proptotype]]
// __proto__ and [[prototype]] both are same

// every object has its own __proto__ object
const user = {
  firstName: "Sourabh",
  gender: "male",
};

console.log(user);

if (user.__proto__) {
  console.log("__proto__ is present");
} else {
  console.log("__proto__ is not present");
}
