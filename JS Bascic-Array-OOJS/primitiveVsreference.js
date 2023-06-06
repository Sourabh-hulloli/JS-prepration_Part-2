// primitive vs reference data types

// primitive types
let num1 = 6;
let num2 = num1;

console.log(num1);
console.log(num2);

num1 = 30;

console.log(num1);
console.log(num2);

// reference types
// array

let array1 = ["item1", "item2"];
let array2 = array1;
console.log(array1);
console.log(array2);

array1.push("item3");
console.log(array1);
console.log(array2);
