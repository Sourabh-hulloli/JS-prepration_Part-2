// Promise -> Promise is a javascript object
console.log("Script start");
const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

const friedRicePromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("vegetables") &&
    bucket.includes("rice") &&
    bucket.includes("salt")
  ) {
    resolve({ value: "Fried Rice" });
  } else {
    reject("Fried Rice ingridents are not available");
    // or wec can create error object or any value we can use
    // reject(new Error("Something missing from bucket"));
  }
});

// produce

// consume
// how to consume promise
// using only then() method   ---> then() & catch() method are browser part (browser consume the javascript).
// friedRicePromise.then(
//   // when promise resolve
//   (myFriedRice) => {
//     console.log("let's eat ", myFriedRice);
//   },
//   // when promise reject
//   (error) => {
//     console.log(error);
//   }
// );

// using then() and catch()
friedRicePromise
  .then((myFriedRice) => {
    console.log("lets eat ", myFriedRice);
  })
  .catch((error) => {
    console.log(error);
  });

setTimeout(() => {
  console.log("hello from setTimeout");
}, 0);

for (let i = 0; i <= 100; i++) {
  console.log(Math.random(), i);
}

console.log("Script end...!");
