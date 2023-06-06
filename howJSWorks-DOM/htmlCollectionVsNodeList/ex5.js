//  5. HTMLCollection (for..of) Vs NodeList (forEach)

// HTML Collection

//  Ex -1
// const boxes = document.getElementsByClassName("box"); //HTMLCollection

// for(box of boxes) {
//   console.log(box); // [HTMLDivElement]
// }

// EX -2
// const boxes = document.getElementsByClassName("box"); //HTMLCollection

// const boxesArray = Array.from(boxes);

// boxesArray.forEach((box) => {
//   console.log(box); // [HTMLDivElement]
// });

//  NodeList
// Unlike the HTMLCollection, NodeList has a forEach() method natively.
const boxes = document.querySelectorAll(".box"); //NodeList

boxesArray.forEach((box) => {
  console.log(box); // [HTMLDivElement]
});
