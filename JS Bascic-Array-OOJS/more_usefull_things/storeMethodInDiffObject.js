const userMethods = {
  about: function () {
    return `${this.firstName} is ${this.age} years old`;
  },
  is18: function () {
    return this.age >= 18;
  },
};

function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = userMethods.about;
  user.is18 = userMethods.is18;

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

console.log(user1.about());
console.log(user2.about());
console.log(user3.about());
