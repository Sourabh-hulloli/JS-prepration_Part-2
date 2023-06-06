// methods
// function inside object

// const person = {
//   firstName: "sourabh",
//   age: 30,
//   gender: "male",
//   about: function () {
//     console.log(`person name is ${this.firstName} and age is ${this.age}`);
//   },
// };
// person.about();

function personInfo() {
  console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
  firstName: "Sourabh",
  age: 30,
  about: personInfo,
};

const person2 = {
  firstName: "Pranav",
  age: 30,
  about: personInfo,
};

const person3 = {
  firstName: "Sumanth",
  age: 30,
  about: personInfo,
};

person1.about();
person2.about();
person3.about();
