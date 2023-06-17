// keypress event
// mouseover event

// keypress event
// const body = document.body;
// body.addEventListener("keypress", (e) => {
//   console.log(e.key);
// });

// mouseover event
const btn = document.querySelector(".btn-headline");
btn.addEventListener("mouseover", (e) => {
  console.log("mouseover event occured");
});

btn.addEventListener("mouseleave", (e) => {
  console.log("mouseleave event occured");
});
