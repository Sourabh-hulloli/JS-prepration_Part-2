// 2015 / es6
// class keyword

class CreateUser {
  constructor(firstName, lastName, email, age, address) {
    console.log("constructor called");
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }

  about() {
    return `${this.firstName} is ${this.age} years old.`;
  }
  is18() {
    return this.age >= 18;
  }
  sing() {
    return "la la la la";
  }
  sum(a, b) {
    return a + b;
  }
}

const user1 = new CreateUser(
  "Sourabh",
  "hulloli",
  "sourabh@gmail.com",
  30,
  "bangalore"
);

console.log(user1.firstName);
console.log(user1.about());
console.log(user1.sum(5, 5));
