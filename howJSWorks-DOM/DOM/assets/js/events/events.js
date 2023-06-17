// intro to events.
// In Javascript we can add event in three ways.

//? EX - 1. Inline Event Handler -> we add event directly on HTML element in a HTML file using attribute onclick, onmouseover ... etc. (adding event in this way is not used, its very old way to add event). (refer html code for Inline Event Handler).

//? EX - 2. Event Handler Properties way
// const btnHeadLine = document.querySelector(".btn-headline");
// console.log(btnHeadLine);
// btnHeadLine.onclick = function () {
//   console.log("You Clicked Me");
// };

//? EX - 3 Method addEventListener()
//? 1. using addEventListener() - 1st way writing eventHandler seperately and passing the function name in addEventListener().
// const btnHeadLine = document.querySelector(".btn-headline");
// function clickMe() {
//   console.log("You clicked Me");
// }
// btnHeadLine.addEventListener("click", clickMe);

//? 2. using addEventListener() - 2nd way writing function decleration in addEventListener()
// const btnHeadLine = document.querySelector(".btn-headline");
// btnHeadLine.addEventListener("click", function () {
//   console.log("button clicked");
// });

//? 3. using addEventListener() -> 3rd way writing arrow function as eventHandler
const btnHeadLine = document.querySelector(".btn-headline");
btnHeadLine.addEventListener("click", () => {
  console.log("You Clicked Me");
});
