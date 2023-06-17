// event bubbling / event propogation
// event capturing
// event delegation

const grandParent = document.querySelector(".grandParent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

//? Event Capture
child.addEventListener(
  "click",
  (e) => {
    console.log("Capture !!!! child");
  },
  true
);

parent.addEventListener(
  "click",
  (e) => {
    console.log("Capture !!!! parent");
  },
  true
);

grandParent.addEventListener(
  "click",
  (e) => {
    console.log("Capture !!!! grandParent");
  },
  true
);

document.body.addEventListener(
  "click",
  (e) => {
    console.log("Capture !!!! document.body");
  },
  true
);

//? Event Bubbling or event Propogation
child.addEventListener("click", (e) => {
  console.log("You  clicked on child");
});

parent.addEventListener("click", (e) => {
  console.log("You  clicked on parent");
});

grandParent.addEventListener("click", (e) => {
  console.log("You  clicked on grandParent");
});

document.body.addEventListener("click", (e) => {
  console.log("You  clicked on document.body");
});
