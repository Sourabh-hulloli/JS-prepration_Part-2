// for of loop in array
let fruits = ["apple", "mango", "banana", "grapes"];

let newFruits = [];

for (let fruit of fruits) {
  console.log(fruit);
  newFruits.push(fruit.toUpperCase());
}
console.log(newFruits);
