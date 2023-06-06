// block scope vs function scope

// let and const are block scope
// var is function scope

const userName = "User"; // Global Scope

{
  let firstName = "Sourabh"; // block scope variable
}
// firstName cannot be accessed becaused it is declared in block.
// console.log(firstName);

{
  const lastName = "hulloli"; // block scope
  console.log(lastName);
}

function myApp() {
  if (true) {
    let firstName = "Sourabh"; // block scope
    console.log(firstName);
  }
  //   console.log(firstName);

  if (true) {
    var secondName = "Hulloli";
    console.log(secondName);
  }
  console.log(secondName);
}
myApp();
