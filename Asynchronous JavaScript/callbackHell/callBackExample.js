// callbacks, callback hell, pyramid of doom
// asynchronous programming

const heading1 = document.querySelector(".heading-1");
const heading2 = document.querySelector(".heading-2");
const heading3 = document.querySelector(".heading-3");
const heading4 = document.querySelector(".heading-4");
const heading5 = document.querySelector(".heading-5");
const heading6 = document.querySelector(".heading-6");
const heading7 = document.querySelector(".heading-7");

//     Text         Delay         Color

//      one          1s           Violet
//      Two          2s           purple
//      Three        2s           red
//      Four         1s           pink
//      Five         2s           green
//      Six          3s           blue
//      Seven        1s           brown

//? EX - 1 Calback Hell using setTimeout() method.
setTimeout(() => {
  heading1.textContent = "One";
  heading1.style.color = "violet";
  setTimeout(() => {
    heading2.textContent = "Two";
    heading2.style.color = "purple";
    setTimeout(() => {
      heading3.textContent = "Three";
      heading3.style.color = "red";
      setTimeout(() => {
        heading4.textContent = "Four";
        heading4.style.color = "pink";
        setTimeout(() => {
          heading5.textContent = "Five";
          heading5.style.color = "green";
          setTimeout(() => {
            heading6.textContent = "Six";
            heading6.style.color = "blue";
            setTimeout(() => {
              heading7.textContent = "Seven";
              heading7.style.color = "brown";
            }, 1000);
          }, 3000);
        }, 2000);
      }, 1000);
    }, 2000);
  }, 2000);
}, 1000);
