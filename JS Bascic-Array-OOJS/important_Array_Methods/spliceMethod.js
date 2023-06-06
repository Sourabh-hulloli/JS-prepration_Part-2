// splice method
// start , delete, insert
// it returns deleted item in array.
// it effects original array

const myArray = ["item1", "item2", "item3", "item4"];

// delete
const deletedItem = myArray.splice(1, 1);
console.log(myArray);
console.log(deletedItem); // it returns deleted item.

// insert
myArray.splice(1, 0, "Inserted Item");
console.log(myArray);

// insert and delete
const deleteItem = myArray.splice(1, 2, "insertedItem1", "insertedItem2");
console.log(myArray);
console.log("deleteItem", deleteItem);
