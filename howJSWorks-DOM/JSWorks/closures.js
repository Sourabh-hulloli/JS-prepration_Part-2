// closures

/* EX-1
// function can return function
function outerFunction() {
  function innerFunction() {
    console.log("Hello World");
  }
  return innerFunction;
}

const hello = outerFunction();
console.log(hello); // prints function structure.
hello();
*/

// EX - 2
function printFullName(firstName, lastName) {
  function printName() {
    console.log(firstName, lastName);
  }
  return printName;
}

const fullName = printFullName("MS", "Dhoni");
console.log(fullName); // prints function structure.
fullName();
