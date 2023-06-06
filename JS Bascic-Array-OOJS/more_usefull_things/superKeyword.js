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
  run() {
    return `${this.name} is running at a ${this.speed}`;
  }
}

// object or instance
const tommy = new Dog("tommy", 3, "45km/h");
console.log(tommy);
console.log(tommy.run());
