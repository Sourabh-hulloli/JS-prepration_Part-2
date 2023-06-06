// for in loop

const fruits = ["apple", "banana", "mango", "grapes"];
const newFruits = [];
for (let index in fruits) {
  console.log(fruits[index]);
  newFruits.push(fruits[index].toUpperCase());
}
console.log(newFruits);
