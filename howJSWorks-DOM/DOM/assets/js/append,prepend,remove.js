// document.createElement();
// append
// prepend
// remove

// creating HTML Element
const newtodoItem = document.createElement("li");

//? 1. creating text node using createTextNode() method.
const newTextNode = document.createTextNode("Learning Javascript");

//? 2. creating text node using textContent
newTextNode.textContent = "Hello Javascript";

// adding textnode in to the list
newtodoItem.appendChild(newTextNode);
console.log(newtodoItem);

// adding newely created element in to todo-list class container
const todoList = document.querySelector(".todo-list");
todoList.append(newtodoItem);

// prepend()
