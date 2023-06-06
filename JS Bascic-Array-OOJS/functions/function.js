// functions

function singHappyBirthday() {
  console.log("happy birthday to you....");
}

singHappyBirthday();

// function to add two numbers
// function sum(num1, num2) {
//   return num1 + num2;
// }
// console.log(sum(5, 5));
// console.log(undefined + undefined);

// function to find the given number is odd or even.
// function oddEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(oddEven(2));

// refactoring the above code and writing the statement in single line.
// function sum(num) {
//   return num % 2 === 0;
// }
// console.log(sum(2));

// create function it accepts argument as a string and return a 1st character of a string.
// function firstCharacter(str) {
//   // let firstChar = [...str];
//   // return firstChar[0];

//   // console.log(str.slice(0, 1)); // prints S
//   return str[0];
// }
// console.log(firstCharacter("Sourabh"));

// function:
// input: array, target (number)
//output: index of target if target presents in array.

function findTarget(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

const myArray = [2, 3, 5, 4, 65, 88, 99];
const answer = findTarget(myArray, 88);
console.log(answer);
