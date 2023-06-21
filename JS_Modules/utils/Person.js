// in file only one default export must be used , if you assign default to multiple function or any variable it will throw error.
export default class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  info() {
    console.log(this.firstName, this.lastName, this.age);
  }
}

export class Person2 {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  info() {
    console.log(this.firstName, this.lastName, this.age);
  }
}
