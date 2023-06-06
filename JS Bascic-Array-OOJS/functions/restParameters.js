// rest parameters

function myFunc(a, b, ...c) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(c[1]);
}
myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9);

const add = (...numbers) => {
  let total = 0;
  for (let number of numbers) {
    total = total + number;
  }
  return total;
};
const ans = add(5, 5, 5);
console.log(ans);
