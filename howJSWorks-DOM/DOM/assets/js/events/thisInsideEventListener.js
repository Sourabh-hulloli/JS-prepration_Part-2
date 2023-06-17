// this keyword

//? EX - 1. this keyword in normal function
// const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click", function () {
//   console.log("Button Clicked");
//   console.log("value of this");
//   console.log(this); // refers to btn element on which event is added.
// });

//? EX - 2. this keyword in arrow function
const btn = document.querySelector(".btn-headline");
btn.addEventListener("click", () => {
  console.log("button clicked");
  console.log(this); // refers to window object.
});
7;
