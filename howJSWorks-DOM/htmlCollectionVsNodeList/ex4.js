// 4. HTMLCollection (live*) Vs NodeList (static*)
// getElementsByClassName() is live.
// getElementsByTagName() is live.
// getElementsByName() is live.
// querySelectorAll() is NOT live

// EX - 1
const boxWrapper = document.getElementById("box-wrapper");
// console.log(boxWrapper);

// const boxes = boxWrapper.getElementsByClassName("box");
// console.log(boxes); // HTML Collection
// console.log(boxes.length); // 4

// const div = document.createElement("div");
// div.classList.add("box");
// div.innerHTML = "box 5";
// boxWrapper.appendChild(div);

// console.log(boxes.length); // 5

// EX - 2
const boxes = document.querySelectorAll(".box");
console.log(boxes.length); // 4

const div = document.createElement("div");
div.setAttribute("class", "box");
div.innerHTML = "box 5";
boxWrapper.appendChild(div);

console.log(boxes); // 4
console.log(boxes.length); // 4
console.log(document.querySelectorAll(".box").length); // 5
console.log(document.querySelectorAll(".box")); // 5
