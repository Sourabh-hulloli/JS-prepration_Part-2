// array destructuring

const myArray = ["value1", "value2", "value3", "value4", "value5"];

let v1 = myArray[0];
let v2 = myArray[1];
console.log(v1, v2);

const [v3, , v4, ...v5] = myArray;

console.log(v3, v4, v5);
