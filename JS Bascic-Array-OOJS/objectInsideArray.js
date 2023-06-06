// objects inside array
// very useful in real world appliocations

let users = [
  { empId: 1, firstName: "Sourabh", gender: "male" },
  { empId: 2, firstName: "Sarvesh", gender: "male" },
  { empId: 3, firstName: "kunal", gender: "male" },
];

for (let user of users) {
  //   console.log(user);
  console.log(user.empId);
  console.log(user.firstName);
  console.log(user.gender);
}
