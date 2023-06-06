// and or operator
let firstName = "Sourabh";
let age = 22;

if (firstName.startsWith("Soura") && age >= 18) {
  console.log("He is a good developer");
} else {
  console.log("he is preparing to become good developer");
}

if (firstName.startsWith("Soura") || age >= 18) {
  console.log("He is a good developer");
} else {
  console.log("he is preparing to become good developer");
}
