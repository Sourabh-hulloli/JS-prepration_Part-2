// click event on multiple buttons
const allButtons = document.querySelectorAll(".my-buttons button");
console.log(allButtons);

//? Ex - 1. using for loop to add event to all buttons
// for (let i = 0; i < allButtons.length; i++) {
//   //   console.log(allButtons[i]);
//   allButtons[i].addEventListener("click", function () {
//     console.log(`Yo have clicked button ${i + 1}`);
//   });
// }

//? EX - 2 using for .. of loop and this keyword in event
for (button of allButtons) {
  button.addEventListener("click", function () {
    console.log(this.textContent);
  });
}

//? EX - 3 we can use forEach method also
