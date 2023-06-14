// some old methods to support poor IE
// appendChild
// insertBefore
// replaceChild
// removeChild

//? EX - 1 appendChild()
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "Hello Javascript";
ul.appendChild(li);
