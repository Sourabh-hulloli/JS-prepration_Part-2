// function returning promise

function ricePromise() {
  const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];
  return new Promise((resolve, reject) => {
    if (
      bucket.includes("vegetables") &&
      bucket.includes("salt") &&
      bucket.includes("rice")
    ) {
      resolve({ value: "friedrice" });
    } else {
      reject("could not do it");
    }
  });
}

ricePromise()
  .then((myFriedRice) => {
    console.log("lets eat ", myFriedRice);
  })
  .catch((error) => {
    console.log(error);
  });
