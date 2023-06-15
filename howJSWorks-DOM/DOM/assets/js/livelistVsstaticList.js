//? live list Vs static list

//? EX -1 querySelectorAll() return NodeList --> that is static list
// const listItems = document.querySelectorAll(".todo-list li");
// const sixthList = document.createElement("li");
// sixthList.textContent = "item 6";
// const ul = document.querySelector(".todo-list");
// ul.append(sixthList);
// console.log(listItems);

//? EX - 2 getElementsByTagName, className, returns HTML Collection -- > live list
const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");
const sixthList = document.createElement("li");
sixthList.textContent = "item 6";
ul.append(sixthList);
console.log(listItems);
