// object destructuring

const person = {
  userName: "Sourabh",
  email: "sourabh.hulloli@gmail.com",
  age: 30,
  hobbies: ["treckking", "bike riding", "cycling"],
};

// const { userName, email, age, hobbies } = person;

// giving different variable name to the existing key of object
// const { userName: empName, email: emailId, age, hobbies } = person;

// using rest operator in destructuring and storing remaining properties in a variable
const { userName: empName, email: emailId, ...remObject } = person;

console.log(empName);
console.log(emailId);
console.log(remObject);
