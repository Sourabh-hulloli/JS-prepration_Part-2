// spread operator

const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

// const newArray = [...array1, ...array2, 89, 69];

// const newArray = [..."sourabh"];
// const newArray = [..."12345689"];
// console.log(newArray);

// spread operator in objects
const obj1 = {
  key1: "value1",
  key2: "value2",
};

const obj2 = {
  key1: "uniqueValue",
  key3: "value3",
  key4: "value4",
};

const newObject = { ...obj1, ...obj2 }; // object2 ke1=y1 will be printed.
// const newObject = { ...obj2, ...obj1 }; // object1 key1 will be printed.
console.log(newObject);

// want to add new key
const updatedObject = { ...obj1, ...obj2, key69: "value69" };
console.log(updatedObject);

const strObject = { ..."abc" };
console.log(strObject);

const arrayObject = { ...["item1", "item2"] };
console.log(arrayObject);
