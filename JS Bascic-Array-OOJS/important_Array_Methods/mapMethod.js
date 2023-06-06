// map method

const numbers = [3, 4, 6, 1, 8];

const squareNumber = numbers.map((element, index, array) => {
  return element * element;
});

console.log(squareNumber);

//  real time example
const users = [
  { firstName: "Sourabh", age: 30 },
  { firstName: "Pranav", age: 30 },
  { firstName: "Sumanth", age: 30 },
  { firstName: "Sarvesh", age: 18 },
];

const userNames = users.map((element, index, array) => {
  return element.firstName;
});
console.log(userNames);
