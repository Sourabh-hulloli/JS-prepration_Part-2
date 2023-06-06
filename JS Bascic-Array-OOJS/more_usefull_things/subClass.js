class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }

  isSuperCute() {
    return this.age <= 1;
  }
}

class Dog extends Animal {
  constructor(name, age, speed) {
    super(name, age);
    this.speed = speed;
  }
  eat() {
    return `Modified Eat : ${this.name} is eating`;
  }
  run() {
    return `${this.name} is running at a ${this.speed}`;
  }
}

// object or instance
const tommy = new Dog("tommy", 3, "45km/h");
console.log(tommy.run());
console.log(tommy.eat());
