// event object

// const firstButton = document.querySelectorAll(".my-buttons button")[0];
// firstButton.addEventListener("click", function () {
//   console.log(this);
// });

//? EX - 1
const allButtons = document.querySelectorAll(".my-buttons button");

for (button of allButtons) {
  button.addEventListener("click", (e) => {
    // console.log(e); // prints event object
    console.log(e.currentTarget); // it targets the element on which the event is added
  });
}
