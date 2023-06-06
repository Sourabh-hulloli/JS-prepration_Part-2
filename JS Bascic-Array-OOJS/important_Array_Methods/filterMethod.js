// filter method

const numbers = [1, 3, 2, 6, 4, 8];

const isEven = numbers.filter((element) => {
  return element % 2 === 0;
});
console.log(isEven);

const isOdd = numbers.filter((element) => {
  return element % 2 !== 0;
});
console.log(isOdd);
