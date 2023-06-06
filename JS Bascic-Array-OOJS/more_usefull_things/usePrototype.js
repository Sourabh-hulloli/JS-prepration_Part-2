function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(createUser.prototype);
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;

  return user;
}
const user1 = createUser(
  "Sourabh",
  "Hulloli",
  "sourabh@gmail.com",
  30,
  "bangalore"
);

const user2 = createUser(
  "Sarvesh",
  "Patil",
  "sarvesh@gmail.com",
  18,
  "Kolhapur"
);

const user3 = createUser(
  "Vedant",
  "Neelagoudar",
  "vedant@gmail.com",
  15,
  "belgaum"
);

createUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old`;
};
createUser.prototype.is18 = function () {
  return this.age >= 18;
};

createUser.prototype.sing = function () {
  return "on my way ";
};

console.log(createUser.prototype);

console.log(user1);
