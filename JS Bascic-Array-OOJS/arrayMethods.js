// array push  pop

// arry shift, unshift

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);

//push it will add new element at the last position of the array.
// 1. It will return the updated length of the array.
// 2. it will modify the original array.
// fruits.push("banana");
// console.log(fruits);

// pop it will remove the last element of the array.
// 1. it will return the removed element from the array.
// 2. it will modify the original array.
let poppedFruit = fruits.pop();
console.log("popped fruit is ", poppedFruit);
console.log(fruits);

// unshift it will add new element at the start position of array.
// 1. it will return the updated length of the array.
// 2. it will modify the original original array.
fruits.unshift("banana", "grapes", "watermelon");
console.log(fruits);

// shift it will remove the first element from the array.
let removedFruit = fruits.shift();
console.log(removedFruit);
