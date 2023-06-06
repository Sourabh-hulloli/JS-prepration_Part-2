//  nested destructuring

let users = [
  { empId: 1, firstName: "Sourabh", gender: "male" },
  { empId: 2, firstname: "Sarvesh", gender: "male" },
  { empId: 3, firstName: "Kunal", gender: "male" },
];

// const [user1, user2, user3] = users;

// const [{ firstName: user1firstName }, , { gender: user3Gender }] = users;

const [
  { firstName: user1firstName, empId: user1empId },
  { empId: user2empId },
  { gender: user3gender },
] = users;

console.log(user1firstName);
console.log(user1empId);
console.log(user2empId);
console.log(user3gender);
