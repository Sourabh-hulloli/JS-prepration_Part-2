// for loop in array
/*
let fruits = ["apple", "banana", "mango", "kiwi", "grapes", "watermelon"];

console.log(fruits.length); // 6
console.log(fruits[fruits.length - 1]); // last element watermelon
console.log("--------------------------");
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // mango
console.log(fruits[3]); // kiwi
console.log(fruits[4]); // grapes
console.log(fruits[5]); // watermelon
console.log("-----------------------");

let fruitUpper = [];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i].toUpperCase());
  fruitUpper.push(fruits[i].toUpperCase());
}
console.log(fruitUpper);

*/
const cars = [
  "BMW",
  "Ferrari",
  "Bently",
  "Rolls Royce",
  "Range Rover",
  "Toyota",
  "Mahindra",
  "TATA Motors",
  "KIA",
];

console.log(cars);
// console.log(cars.length); // prints length of array.
// console.log(cars[cars.length - 1]); // last element of array.

// iterating array through for loop

let carsUpperCase = [];

console.log("Before Pushing Elements: ", carsUpperCase);

for (let i = 0; i < cars.length; i++) {
  // console.log(cars[i].toUpperCase());
  carsUpperCase.push(cars[i].toUpperCase());
}

console.log("After Pushing the Elements: ", carsUpperCase);
