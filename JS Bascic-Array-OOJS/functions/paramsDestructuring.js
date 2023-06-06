// param destructuring

// object
// react

const person = {
  firstName: "Sourabh",
  gender: "male",
};

//? without paramas destructuring
// function printDetails(obj) {
//   console.log(obj.firstName);
//   console.log(obj.gender);
// }
// printDetails(person);

//? using params destructuring
function printDetails({ firstName, gender }) {
  console.log(firstName);
  console.log(gender);
}
printDetails(person);
