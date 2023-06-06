// reduce method

const numbers = [1, 2, 3, 4, 5, 10];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(sum);

// how reduce((accumulator, currentValue)={return accumulator + currentValue}) method works
//  accumulator,    currentvalue,     return
//      1                 2              3
//      3                 3              6
//      6                 4              10
//      10                5              15
//      15                10             25

const userCart = [
  { productId: 1, productName: "mobile", price: 15000 },
  { productId: 2, productName: "Laptop", price: 95000 },
  { productId: 3, productName: "smartWatch", price: 1500 },
];

const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
  return totalPrice + currentProduct.price;
}, 0);

console.log(totalAmount);
