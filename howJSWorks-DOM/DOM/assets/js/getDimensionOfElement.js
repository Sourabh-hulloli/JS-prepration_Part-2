//  How to get the dimensions of element
// height and width of element

const sectionTodo = document.querySelector(".todo-section");
const info = sectionTodo.getBoundingClientRect();
console.log(info);
console.log(info.width);
console.log(info.height);
console.log(info.top);
console.log(info.left);
