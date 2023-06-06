function CreateUser(firstName, lastName, email, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
}
const user1 = new CreateUser(
  "Sourabh",
  "Hulloli",
  "sourabh@gmail.com",
  30,
  "bangalore"
);

const user2 = new CreateUser(
  "Sarvesh",
  "Patil",
  "sarvesh@gmail.com",
  18,
  "Kolhapur"
);

const user3 = new CreateUser(
  "Vedant",
  "Neelagoudar",
  "vedant@gmail.com",
  15,
  "belgaum"
);

CreateUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old`;
};
CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};

CreateUser.prototype.sing = function () {
  return "on my way ";
};

for (let key in user1) {
  //   console.log(key);
  if (user1.hasOwnProperty(key)) {
    console.log(key);
  }
}
