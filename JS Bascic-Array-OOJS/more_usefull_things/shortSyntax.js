// short syntax
const user1 = {
  firstName: "Sourabh",
  age: 30,
  about: function () {
    console.log(this.firstName, this.age);
  },
};
user1.about();

// short syntax
const user2 = {
  firstName: "Pranav",
  age: 30,
  about() {
    console.log(this.firstName, this.age);
  },
};
user2.about();
