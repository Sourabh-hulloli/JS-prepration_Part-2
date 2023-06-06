// get multiple elements using getElementsByClassName() method
// get multiple elements using querySelectorAll() method

const navItems = document.getElementsByClassName("nav-item"); // returns HTML Collection
console.log(navItems[0]);
console.log(navItems[1]);
console.log(navItems[2]);
console.log(typeof navItems); // object
console.log(Array.isArray("navItems")); // false

const items = document.querySelectorAll(".nav-item"); // returns Node List
console.log(items[0]);
console.log(items[1]);
console.log(items[2]);
console.log(typeof items); // object
console.log(Array.isArray("items"));
