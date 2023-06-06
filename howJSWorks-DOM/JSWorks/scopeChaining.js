// lexical environment, scope chaining

/* EX - 1
const lastName = "hardy";

const printName = function () {
  const firstname = "Tom";
  console.log(firstname);
  console.log(lastName); // lastName not found in local scope, it will check its lexical scope of the function that is global scope and access the lastname and prints.
};
printName();

*/

// EX - 2;
const lastName = "hardy";

const printName = function () {
  const firstname = "Tom";

  function fullName() {
    console.log(firstname); // locallly the fullName is not present it will check its parent that is lexical scope and if the variable is present it will access or else it will check the parents lexical scope to access the variable if it present it will print or else it throw error (Uncaught ReferenceError: lastName is not defined).
    console.log(lastName);
  }

  fullName();
};
printName();
