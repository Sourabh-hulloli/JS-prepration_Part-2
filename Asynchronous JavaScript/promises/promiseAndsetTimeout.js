// promise && setTimeout

// I want to resolve / reject promise after 2 seconds

function myPromise() {
  const value = true;
  return new Promise((resolve, reject) => {
    if (value) {
      resolve();
    } else {
      reject();
    }
  });
}

// consuming the promise
myPromise()
  .then(() => {
    console.log("resolved");
  })
  .catch(() => {
    console.log("rejected");
  });
