// selecting multiple elements using query selector all method
// it selects all the elements matching to the selector.
// it return all the elements in the form of node list.
// node list :- It is iterable type.

const navItem = document.querySelectorAll(".nav-item");
console.log(navItem); // return node list,
// NodeList(3) [li.nav-item, li.nav-item, li.nav-item]

const navItem2 = document.querySelectorAll(".n");
console.log(navItem2); // it elements not present it return empty node list.

const li = document.getElementsByClassName("nav-item");
console.log(li); // returns HTML Collection

for (let i = 0; i < li.length; i++) {
  console.log(li[i]);
}

const lists = document.getElementsByTagName("li");
console.log(lists); // returns HTML Collection
