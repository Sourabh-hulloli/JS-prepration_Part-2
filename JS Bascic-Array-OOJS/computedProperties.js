// computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// const obj = {};

// obj[key1] = value1;
// obj[key2] = value2;

// console.log(obj);

const obj = {
  [key1]: value1,
  [key2]: value2,
};
console.log(obj);

const user1 = "Pranav";
const user2 = "Sumanth";

const email1 = "pranav@gmail.com";
const email2 = "sumanth@gmail.com";

const user = {};

user[user1] = email1;
user[user2] = email2;

console.log(user);

// Computed Properties
const newUser = {
  [user1]: email1,
  [user2]: email2,
};
console.log(newUser);
