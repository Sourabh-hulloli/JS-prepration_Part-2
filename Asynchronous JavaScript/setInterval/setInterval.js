const body = document.body;
const btn = document.querySelector("#btn");

const intervalId = setInterval(() => {
  const red = Math.floor(Math.random() * 126);
  const green = Math.floor(Math.random() * 126);
  const blue = Math.floor(Math.random() * 126);
  body.style.background = `rgb(${red},${green}, ${blue} )`;
}, 1000);

console.log(intervalId);

btn.addEventListener("click", (e) => {
  clearInterval(intervalId);
  btn.textContent = body.style.background;
});
