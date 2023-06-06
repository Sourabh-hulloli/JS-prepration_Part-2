function hello() {
  console.log("Hello World");
}
/* usefull theory
     javascript function is a combination of function and object.
    JS Function ===> function + object
*/
// console.log(typeof hello); // function

// how to get a name of function
// console.log(hello.name); // gives name of function ie hello

// you can add your own properties
// hello.myOwnProperty = "very Unique value";
// console.log(hello.myOwnProperty);

/* Usefull theory
 name property --> tells function name

 functiom provides more usefull properties

 function also provide some free space.
 the free space is called prototype.
 here we can store key : value pair related to function.
 prototype is a object. {}
 only function provide prototype property
*/
console.log(hello.prototype);

hello.prototype.firstName = "Sourabh";
hello.prototype.lastName = "Hulloli";
hello.prototype.about = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log(hello.prototype.about());
