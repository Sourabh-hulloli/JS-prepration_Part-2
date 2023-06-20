// Promise.resolve
// Promise chaining

//? EX -1
// Promise.resolve() function is the most concise way to create a fulfilled promise that contains the given value.
// const myPromise = Promise.resolve("hello");
// myPromise.then((value) => {
//   console.log(value); // hello
// });

//? EX - 2 Promise chaining
// then() method always return promise. i.e resolved promise
function myPromise() {
  return new Promise((resolve, reject) => {
    resolve("Hello");
  });
}

//? this is the promise chaining
myPromise()
  .then((value) => {
    console.log(value);
    value += " World,";
    return value;
    // internally it will be like this (return Promise.resolve(value)).
    // if we do not return any thing it will be like (return Promise.resolve(undefined)).
  })
  .then((value) => {
    console.log(value);
    value += " Printed";
    return value;
  })
  .then((value) => {
    console.log(value);
    value += " using";
    return value;
  })
  .then((value) => {
    console.log(value);
    value += " Javascript";
    return value; // if i miss the return the value will be returned as undefined.
  })
  .then((value) => {
    console.log(value);
  });
