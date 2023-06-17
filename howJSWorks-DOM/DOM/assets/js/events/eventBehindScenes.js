// Event behind scenes

console.log("Script Start !!!");
const allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let num = 0;
    for (let i = 0; i <= 1000000000; i++) {
      num += 1;
    }
    console.log(e.currentTarget.textContent, num);
  });
});

let outerVar = 0;
for (let i = 0; i <= 100000000; i++) {
  outerVar += 1;
}
console.log("Outer variable value is : ", outerVar);
console.log("Script End !!!");
