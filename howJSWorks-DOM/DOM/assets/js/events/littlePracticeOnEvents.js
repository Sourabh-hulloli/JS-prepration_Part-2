// little practice on events
const allButtons = document.querySelectorAll(".my-buttons button");
console.log(allButtons);

allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.target.style.background = "yellow";
    e.target.style.color = "#333";
  });
});
