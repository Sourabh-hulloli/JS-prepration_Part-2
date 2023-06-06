// arrow functions

const singHappyBirthday = () => {
  console.log("happy birthday to you ...");
};
singHappyBirthday();

const sum = (num1, num2) => {
  return num1 + num2;
};

console.log(sum(5, 5));

// function to find the given number is odd or even.
// const oddEven = (num) => {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(oddEven(2));

// refactoring the above code and writing the statement in single line.
const sumOfTwo = (num) => {
  return num % 2 === 0;
};
console.log(sumOfTwo(2));

// create function it accepts argument as a string and return a 1st character of a string.
const firstCharacter = (str) => {
  // let firstChar = [...str];
  // return firstChar[0];

  // console.log(str.slice(0, 1)); // prints S
  return str[0];
};
console.log(firstCharacter("Sourabh"));

// function:
// input: array, target (number)
//output: index of target if target presents in array.

const findTarget = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};

const myArray = [2, 3, 5, 4, 65, 88, 99];
const answer = findTarget(myArray, 88);
console.log(answer);
