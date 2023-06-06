// call, apply, bind

//? EX-1
// function hello() {
//   console.log("Hello World");
// }
// hello();
// hello.call();

//? EX-2
// const user1 = {
//   firstName: "Sourabh",
//   age: 30,
//   about: function () {
//     console.log(this.firstName, this.age);
//   },
// };
// user1.about();

// const user2 = {
//   firstName: "Pranav",
//   age: 30,
// };
// user1.about.call(); // undefined undefined
// user1.about.call(user2); // Pranav 30
// user1.about.call(user1); // Sourabh 30

//? EX-3
function about(hobby, favMusic) {
  console.log(this.firstName, this.age, hobby, favMusic);
}

const user1 = {
  firstName: "Sourabh",
  age: 30,
};

const user2 = {
  firstName: "Pranav",
  age: 30,
};

// call() method
about.call(user1, "swimming", "Rock");
about.call(user2, "playing cricket", "Jazz");

// apply() method arguments must be in the form of array
about.apply(user1, ["boxing", "trance"]);
about.apply(user2, ["reading", "romantic"]);

// bind() method accepts arguments and return a function, that we can use whenever we want
const aboutUser1 = about.bind(user1, "coding", "english");
aboutUser1(); // calling the function which is returned by bind method.
