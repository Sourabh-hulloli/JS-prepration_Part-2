// how to clone array

let array1 = ["item1", "item2"];

// let array2 = ["item1", "item2"];

// let array2 = array1.slice(0);

// let array2 = [].concat(array1);

// using spread operator

// let array2 = [...array1];
// array1.push("item3", "item4");

// console.log(array1);
// console.log(array2);

// let array2 = array1.slice(0).concat(["item3", "item4"]); // or

// let array2 = [].concat(array1, ["item3", "item4"]); // or

// let array2 = [...array1, "item3", "item4"];
// console.log(array2);

const fruits = ["Mango", "banana", "Apple"];

const cars = ["BMW", "Ferrari", "Bently", "Rolls Royce"];

// const fruitsCars = fruits.slice(0).concat(cars);

// const fruitsCars = [].concat(fruits, cars);

const fruitsCars = [...fruits, ...cars];

console.log(fruitsCars);
