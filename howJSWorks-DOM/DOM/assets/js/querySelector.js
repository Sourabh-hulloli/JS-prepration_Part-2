// select element using query selector
// It selects the element based on the selector, It selects 1st occured element.
// If selector not present it gives null.
// it return 1st occured element.
// if we dont pass any selector it gives error.

const mainHeading = document.querySelector("#main-heading"); // id we have to use prefix #
console.log(mainHeading);
const header = document.querySelector(".header"); // to target header we use . as prefix.
console.log(header);
console.log(document.querySelector("hello")); // if the selector is not present return null.

const navItem = document.querySelector(".nav-item");
console.log(navItem);
