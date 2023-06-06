// important array methods

// forEach

const numbers = [4, 2, 5, 8];

// function multiplyBy2(number, index) {
//   console.log(`index is ${index} and number is :`, number);
//   //   console.log(`${number} * 2 = ${number * 2}`);
// }

// for (let i = 0; i < numbers.length; i++) {
//   multiplyBy2(numbers[i], i);
// }

// numbers.forEach(function (element, index, array) {
//   console.log("array index is : ", index);
//   console.log("array element : ", element);
//   console.log(array);
// });

// // multiply all array elements with 3
// numbers.forEach(function (number) {
//   console.log(number * 3);
// });

// real time example to use forEach()

const users = [
  { firstName: "Sourabh", age: 30 },
  { firstName: "Pranav", age: 30 },
  { firstName: "Sumanth", age: 30 },
  { firstName: "Sarvesh", age: 18 },
];

users.forEach(({ firstName, age }) => {
  console.log(firstName);
  console.log(age);
});
