// Event Delegation

const grandParent = document.querySelector(".grandParent");

grandParent.addEventListener("click", (e) => {
  //   console.log("You clicked on Something...!");
  console.log(e.target);
});
