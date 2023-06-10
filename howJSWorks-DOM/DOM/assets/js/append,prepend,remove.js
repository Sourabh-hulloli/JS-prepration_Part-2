// document.createElement();
// append
// prepend
// remove

// before
// after

// creating HTML Element
// const newtodoItem = document.createElement("li");

//? 1. creating text node using createTextNode() method.
// const newTextNode = document.createTextNode("Learning Javascript");

//? 2. creating text node using textContent
// newTextNode.textContent = "Hello Javascript";

// adding textnode in to the list
// newtodoItem.appendChild(newTextNode);
// console.log(newtodoItem);

// adding newely created element in to todo-list class container
// const todoList = document.querySelector(".todo-list");
// todoList.append(newtodoItem);

// prepend()
// const todoList = document.querySelector(".todo-list");

// const langs = [
//   "HTML",
//   "CSS",
//   "JS",
//   "REACTJS",
//   "MongoDB",
//   "ExpressJS",
//   "NodeJS",
// ];

// let nodes = langs.map((lang) => {
//   let li = document.createElement("li");
//   li.textContent = lang;
//   return li;
// });
// todoList.prepend(...nodes);

// remove the HTML Element
// const li = todoList.querySelectorAll("li");
// const todo1 = li[li.length - 1];
// todo1.remove();

// before
const todoList = document.querySelector(".todo-list");
const newlistItem = document.createElement("li");
const newTextNode = document.createTextNode(
  "Appending text using before() method"
);
newlistItem.append(newTextNode);
todoList.before(newlistItem);

// after
todoList.after(newlistItem);
