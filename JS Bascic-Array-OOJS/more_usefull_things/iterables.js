// iterables
// iterables on which we can apply loops
// string, array are iterable

// array like object
// array like object have length property
// and we access by index
// ex : - string.

// string
const firstName = "Sourabh";
for (let char of firstName) {
  console.log(char);
}

// array
const items = ["item1", "item2", "item3"];
for (let item of items) {
  console.log(item);
}

// object -- object is not iterable.
// const products = { productId: 1, productName: "Mobile", price: 30000 };

// for (let product of products) {
//   console.log(product);
// }
