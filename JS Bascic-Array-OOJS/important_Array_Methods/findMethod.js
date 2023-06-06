// find method

// const myArray = ["Hello", "cat", "dog", "lion"];

// const ans = myArray.find((string) => string.length === 3);

// console.log(ans);

// real time example

const users = [
  { userId: 1, userName: "Sarvesh" },
  { userId: 2, userName: "Pranav" },
  { userId: 3, userName: "Kunal" },
  { userId: 4, userName: "Ganesh" },
  { userId: 5, userName: "Sumanth" },
  { userId: 6, userName: "Vedanth" },
];

const uName = users.find((user) => {
  //   return user.userName.startsWith("Ved"); // or find with userId
  return user.userId === 3;
});
console.log(uName);
