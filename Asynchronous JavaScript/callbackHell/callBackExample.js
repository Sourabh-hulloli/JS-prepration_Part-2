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
// setTimeout(() => {
//   heading1.textContent = "One";
//   heading1.style.color = "violet";
//   setTimeout(() => {
//     heading2.textContent = "Two";
//     heading2.style.color = "purple";
//     setTimeout(() => {
//       heading3.textContent = "Three";
//       heading3.style.color = "red";
//       setTimeout(() => {
//         heading4.textContent = "Four";
//         heading4.style.color = "pink";
//         setTimeout(() => {
//           heading5.textContent = "Five";
//           heading5.style.color = "green";
//           setTimeout(() => {
//             heading6.textContent = "Six";
//             heading6.style.color = "blue";
//             setTimeout(() => {
//               heading7.textContent = "Seven";
//               heading7.style.color = "brown";
//             }, 1000);
//           }, 3000);
//         }, 2000);
//       }, 1000);
//     }, 2000);
//   }, 2000);
// }, 1000);

//? EX - 2 Pyramid of Doom
function changeText(
  element,
  text,
  color,
  time,
  onSuccessCallback,
  onFailuerCallback
) {
  setTimeout(() => {
    if (element) {
      element.textContent = text;
      element.style.color = color;
      if (onSuccessCallback) {
        onSuccessCallback();
      }
    } else {
      if (onFailuerCallback) {
        onFailuerCallback();
      }
    }
  }, time);
}
changeText(
  heading1,
  "One",
  "violet",
  1000,
  () => {
    changeText(
      heading2,
      "Two",
      "purple",
      2000,
      () => {
        changeText(
          heading3,
          "Three",
          "red",
          3000,
          () => {
            changeText(
              heading4,
              "Four",
              "pink",
              4000,
              () => {
                changeText(
                  heading5,
                  "Five",
                  "green",
                  4000,
                  () => {
                    changeText(
                      heading6,
                      "Six",
                      "blue",
                      6000,
                      () => {
                        changeText(
                          heading7,
                          "Seven",
                          "brown",
                          7000,
                          () => {
                            console.log("hello");
                          },
                          () => {
                            console.log("Heading7 does not exist");
                          }
                        );
                      },
                      () => {
                        console.log("Heading6 does not exist");
                      }
                    );
                  },
                  () => {
                    console.log("Heading5 does not exist");
                  }
                );
              },
              () => {
                console.log("Heading4 does not exist");
              }
            );
          },
          () => {
            console.log("Heading3 does not exist");
          }
        );
      },
      () => {
        console.log("Heading2 does not exist");
      }
    );
  },
  () => {
    console.log("Heading1 does not exist");
  }
);
