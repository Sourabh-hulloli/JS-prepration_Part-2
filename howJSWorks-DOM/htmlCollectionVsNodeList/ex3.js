// 3. HTMLCollection (name, id or index number) Vs NodeList (index only)

// EX - 1. HTMLCollection (name, id or index number)
// const boxWrapper = document.getElementById("box-wrapper");
// const boxes = boxWrapper.children; // return HTML Collection
// console.log(boxes[0]);
// console.log(boxes.namedItem("id-box1"));
// console.log(boxes.namedItem("box2"));
// console.log(boxes.namedItem("cls-box1"));

// EX - 2 NodeList (index only)
const boxWrapper = document.getElementById("box-wrapper");
const boxes = boxWrapper.childNodes;
console.log(boxes); // NodeList
console.log(boxes[0]); // Using Index WORKS!
console.log(boxes.namedItem("id-box1")); // Using ID ERROR!
console.log(boxes.namedItem("nm-box1")); // Using Name ERROR!
console.log(boxes.namedItem("cls-box1")); // Using Class ERROR!
