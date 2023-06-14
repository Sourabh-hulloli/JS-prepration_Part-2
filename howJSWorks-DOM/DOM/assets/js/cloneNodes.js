// clone nodes

//? Ex - 1  without cloning
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "New list item";
// ul.append(li);
// ul.prepend(li); // prepend will work append will not work because we have only one li node.
// Note : - 1. the single node cannote be used for both append  and prepend.
// 2. if we want to use same node for both append and prepend we have to clone it.

//? Ex - 2 with clone
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "New list item";
const li2 = li.cloneNode(true);
ul.append(li);
ul.prepend(li2);
