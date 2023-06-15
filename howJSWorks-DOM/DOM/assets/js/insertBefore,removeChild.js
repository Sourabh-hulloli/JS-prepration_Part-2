// some old methods to support poor IE
// appendChild
// insertBefore
// replaceChild
// removeChild

//? EX - 1 appendChild()
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "Hello Javascript";
// ul.appendChild(li);

//? EX -2 The insertBefore(new, existing) method inserts a child node before an existing child.
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// const referenceNode = document.querySelector(".first-todo");
// li.textContent = "Hello Javascript";
// ul.insertBefore(li, referenceNode);

//? EX - 3 The replaceChild(newnode, oldnode) method replaces a child node with a new node.
// const ul = document.querySelector(".todo-list");

// // new Element
// const li = document.createElement("li");
// li.textContent = "Hello Javascript";

// // reference node
// const referenceNode = document.querySelector(".first-todo");

// ul.replaceChild(li, referenceNode);

//? EX - 4 removeChild()
const ul = document.querySelector(".todo-list");

// reference node
const referenceNode = document.querySelector(".first-todo");

ul.removeChild(referenceNode);
