// this keyword inside arrow function
// arrow function dont have its own this keyword.
// arrow function this keyword comes from its surrounding. ie nothing but from its parent (lexical scope).

const user1 = {
  firstName: "Sourabh",
  age: 30,
  about: () => {
    console.log(this.firstName, this.age);
  },
};

user1.about();
