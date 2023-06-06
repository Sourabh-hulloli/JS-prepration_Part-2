function func() {
  let counter = 0;
  return function () {
    if (counter < 1) {
      console.log("hi you called me");
      counter++;
    } else {
      console.log("Already the function is called");
    }
  };
}

const myFunc = func();
myFunc();

// trace the above code in GEC
