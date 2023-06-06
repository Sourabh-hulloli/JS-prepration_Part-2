// default parameters

// function sum(num1, num2) {
//   return num1 + num2;
// }

// console.log(sum(5, 5));

// before ES2015 default parameters where assigned like this
function sum(a, b) {
  if (typeof b === "undefined") {
    b = 1; // default value
  }
  return a + b;
}
console.log(sum(5));

// after ES2015 default Parameter where assigned
function add(num1, num2 = 0) {
  return num1 + num2;
}

console.log(add(5));
