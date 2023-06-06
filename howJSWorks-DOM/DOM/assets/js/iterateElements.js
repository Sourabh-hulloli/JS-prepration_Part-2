// iterate Elements through loop

// let navItems = document.getElementsByTagName("a"); // returns HTML Collection

// simple for loop can use to iterate HTML Collection.
// for of loop can use to iterate HTML Collection.
// forEach() method cannot use to iterate HTML Collection.

// console.log(navItems);

//? Simple for loop
// for (let i = 0; i < navItems.length; i++) {
//   //   console.log(navItems[i]);
//   const navItem = navItems[i];
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "red";
//   navItem.style.fontWeight = "bold";
// }

//? for..of loop
// for (let navItem of navItems) {
//   //   console.log(navItem);
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "red";
//   navItem.style.fontWeight = "bold";
// }

//? converting HTML Collection array like object to pure array
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems)); // true
// navItems.forEach((item) => {
//   item.style.backgroundColor = "cyan";
//   item.style.color = "crimson";
//   item.style.fontWeight = "bold";
// });

//? NodeList all 3 loops can be used
// simple for loop can be used
// for .. of loop can be used
// forEach() method can be used
const items = document.querySelectorAll(".nav-item"); // returns Node List
console.log(items[0]);
console.log(items[1]);
console.log(items[2]);
console.log(typeof items); // object
console.log(Array.isArray("items"));

items.forEach((ele) => {
  console.log(ele);
});
