// clone usinbg Object.assign()

// memory

const obj = {
  key1: "value1",
  key2: "value2",
};

// cloning object using spread operator
const obj1 = { ...obj };

// cloning object using Object.assign() method
const obj2 = Object.assign({}, obj);
obj.key3 = "value3";
console.log(obj);
console.log(obj1);
console.log(obj2);
