// getters and setters
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  //   setName(firstName, lastName) {
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  //   }

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const sourabh = new Person("sourabh", "hulloli", 30);
console.log(sourabh);
console.log(sourabh.fullName);
// sourabh.setName("kunal", "patil");
console.log(sourabh.firstName);
console.log(sourabh.lastName);

sourabh.fullName = "vedant neelagoudar";
console.log(sourabh.fullName);
