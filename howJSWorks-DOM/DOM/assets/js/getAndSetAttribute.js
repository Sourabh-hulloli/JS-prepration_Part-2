// setAttribute and getAttribute

// get attribute value
const link = document.querySelector("a");
console.log(link.getAttribute("href"));
console.log(link.getAttribute("id"));
console.log(link);
// link.removeAttribute("id");
// console.log(link);

const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));

const email = document.querySelector(".form-group #email");
console.log(email.getAttribute("name"));

// change attribute value set attribute value
link.setAttribute("href", "https://www.google.com");
console.log(link.getAttribute("href"));
link.setAttribute("target", "_blank");
