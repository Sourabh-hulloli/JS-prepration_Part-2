// some method
// it returns true if any one condition statisfies or else ir return false

const numbers = [3, 5, 8, 9];

const isEven = numbers.some((number) => number % 2 === 0);
console.log(isEven);

// real time example of some method
const products = [
  { productId: 1, productName: "Mobile", price: 30000 },
  { productId: 2, productName: "Laptop", price: 95000 },
  { productId: 3, productName: "SmatrWatch", price: 3000 },
  { productId: 4, productName: "Earphones", price: 1000 },
  { productId: 5, productName: "Pendrive", price: 499 },
  { productId: 6, productName: "mackbook", price: 250000 },
];

const highestPrice = products.some((product) => product.price > 200000);
console.log(highestPrice);
