// classList, add, remove, toggle classes

const sectionTodo = document.querySelector(".todo-section");
console.log(sectionTodo);
console.log(sectionTodo.classList); // return DOMTokenList

//? 1. adding class thorugh JS using classList.add() method
// console.log(sectionTodo.classList.add("bg-dark")); // adding class through JS

//? 2. removing class through JS using classList.remove() method
// sectionTodo.classList.remove("container");

//? 3. check weather the class is present in a element
// return true if class is present or false if class is not present in the element.
// console.log(sectionTodo.classList.contains("container"));

//? 4. classList.toggle()
// if the class is already present it will remove the that class.
// if the class is not present it will add the class.
// sectionTodo.classList.toggle("bg-dark");
// sectionTodo.classList.toggle("bg-dark");

//? select header
const header = document.querySelector(".header");
console.log(header);
header.classList.add("bg-dark");
console.log(header.classList);
