// function myFunction(power) {
//   return function (number) {
//     return number ** power;
//   };
// }
// const square = myFunction(2);
// // console.log(square);
// const ans = square(3);
// console.log(ans);

// // Ex-2
// const cube = myFunction(3);
// const ans2 = cube(3);
// console.log(ans2);

// refactoring the code using arrow function with implicit return.
const findSquare = (power) => (number) => number ** power;
const square = findSquare(2);
const sq = square(5);
console.log(sq);
