// 1. Methods That Return HTMLCollection & NodeList

//? 1. getElementByClassName() return HTML Collection
// const boxes = document.getElementsByClassName("box");
// console.log(boxes);
// const result = document.getElementById("result");
// result.innerHTML = `The <em>getElementByClassName()</em> method returns <strong>${boxes}</strong>`;

//? 2. getElementsByTagName() returns HTML Collection
// const boxes = document.getElementsByTagName("div");
// console.log(boxes);
// const result = document.getElementById("result");
// result.innerHTML = `The <em>getElementsByTagName()</em> method returns <strong>${boxes}</strong>`;

//? 3. getElementsByName() method return NodeList
// const boxes = document.getElementsByName("box");
// const result = document.getElementById("result");
// result.innerHTML = `The <em>getElementsByName()</em> returns ${boxes}`;

//? 4. querySelectorAll() method return NodeList
const boxes = document.querySelectorAll(".box");
const result = document.getElementById("result");
result.innerHTML = `The <em>querySelectorAll()</em> method returns ${boxes}`;
