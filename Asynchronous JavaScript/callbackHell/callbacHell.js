// callbacks, callback hell, pyramid of doom
// asynchronous programming

const heading1 = document.querySelector(".heading-1");
const heading2 = document.querySelector(".heading-2");
setTimeout(() => {
  heading1.textContent = "Heading - 1";
  heading1.style.color = "orange";
  setTimeout(() => {
    heading2.textContent = "Heading - 2";
    heading2.style.color = "purple";
  }, 1000);
}, 1000);
