const btn = document.querySelector("#btn");
const body = document.body;
const currentColor = document.querySelector(".current-color");

function randomColorGenerator() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomColor = `rgb(${red}, ${green}, ${blue})`;
  return randomColor;
}

btn.addEventListener("click", (e) => {
  const randomColor = randomColorGenerator();
  body.style.background = randomColor;
  currentColor.textContent = randomColor;
});
