// lexical Scope

const myVar = "value1";

function myApp() {
  function myFun() {
    // const myVar = "value59";

    const myFun2 = () => {
      console.log("inside myFun2", myVar);
    };
    myFun2();
  }
  console.log(myVar);
  myFun();
}
myApp();
