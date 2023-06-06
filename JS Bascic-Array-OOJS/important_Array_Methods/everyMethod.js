// every method
// every method returns true if all the elements satisfy the condition, or else it will return false.

const numbers = [2, 4, 6, 8, 10];

const isEven = numbers.every((number) => {
  return number % 2 === 0;
});
console.log(isEven);

// real lif example
const products = [
  { productId: 1, productName: "Mobile", price: 30000 },
  { productId: 2, productName: "Laptop", price: 95000 },
  { productId: 3, productName: "SmatrWatch", price: 3000 },
  { productId: 4, productName: "Earphones", price: 1000 },
  { productId: 5, productName: "Pendrive", price: 499 },
];

// requirement is check the weather product price is less than 300000.

const proPrice = products.every((product) => {
  return product.price < 300000;
});
console.log(proPrice);
