// understand callback

//? EX - 1
// function myFunc(callback) {
//   console.log("Function is doing task 1");
//   callback();
// }

// function myFunc2() {
//   console.log("function is doing task 2");
// }
// myFunc(myFunc2);

//? Ex - 2
// function myFunc(callback) {
//   console.log("Function is doing task 1");
//   callback();
// }

// myFunc(function myFunc2() {
//   console.log("function is doing task 2");
// });

//? EX - 3
// function myFunc(callback) {
//   console.log("Function is doing task 1");
//   callback();
// }

// myFunc(() => {
//   console.log("function is doing task 2");
// });

//? EX - 3 get two numbers
// function getTowNumbers(number1, number2) {
//   console.log(number1, number2);
// }
// getTowNumbers(2, 5);

//? EX - 4 Add Two Numbers
function addTwoNumber(num1, num2) {
  return num1 + num2;
}

console.log(addTwoNumber(9, 9));
