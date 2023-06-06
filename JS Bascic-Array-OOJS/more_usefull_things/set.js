// Sets (it is iterable)
// store data
// sets also have its own method
// No index-based access
// order is not guaranteed
// unique items only (no duplicates allowed)

// const numbers = new Set([1, 2, 3]);
// console.log(numbers);

const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(["item1", "item2"]);
numbers.add(["item1", "item2"]);
numbers.add("Sourabh");
numbers.add("Sourabh");
numbers.add(3);
numbers.add(4);
numbers.add(5);

if (numbers.has(1)) {
  console.log("1 is present");
} else {
  console.log("1 is not present");
}
console.log(numbers);
console.log(numbers.has("Sourabh"));

for (let number of numbers) {
  console.log(number);
}
