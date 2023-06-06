// small warning

const user1 = {
  firstName: "Sourabh",
  age: 30,
  about: function () {
    console.log(this.firstName, this.age);
  },
};

// don't do this mistake

// user1.about();
// const myFunc = user1.about;
// myFunc(); // undefined undefined

// correct way
const myFunc = user1.about.bind(user1);
myFunc();
