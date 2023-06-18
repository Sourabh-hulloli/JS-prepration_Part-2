// synchronous programming vs asynchronous programming.
// Javascript is a synchronous and single threaded programming language.

// synchronous programming.
// console.log("script start");
// for (let i = 1; i <= 1000; i++) {
//   console.log("inside Looop");
// }
// console.log("script end");

// setTimeout
console.log("script Start");
function hello() {
  console.log("inside setTimeout...!");
}
setTimeout(hello, 1000);
console.log("script end");
