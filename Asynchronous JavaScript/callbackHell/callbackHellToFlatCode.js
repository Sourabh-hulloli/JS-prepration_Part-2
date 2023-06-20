// callback hell to flatcode
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

//? EX - 2 Pyramid of Doom
function changeText(element, text, color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        element.style.color = color;
        resolve();
      } else {
        reject("element not found");
      }
    }, time);
  });
}

changeText(heading1, "One", "violet", 1000)
  .then(() => changeText(heading2, "Two", "purple", 1000))
  .then(() => changeText(heading3, "Three", "red", 1000))
  .then(() => changeText(heading4, "Four", "pink", 1000))
  .then(() => changeText(heading5, "Five", "green", 1000))
  .then(() => changeText(heading6, "Six", "blue", 1000))
  .then(() => changeText(heading7, "Seven", "brown", 1000))
  .catch((error) => alert(error));
