// optional chaining
const user = {
  firstName: "Sourabh",
  //   address: { houseNumber: 1234 },
};

console.log(user.firstName);
// console.log(user.address.houseNumber); // throw error
console.log(user?.address?.houseNumber);
