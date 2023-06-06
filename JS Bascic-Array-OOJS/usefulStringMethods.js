// trim()
// toUpperCase()
// toLowerCase()
// slice()

let firstName = "       Sourabh        ";
console.log(firstName);
console.log(firstName.length); // 22

firstName.trim(); // we have to assign it to new variable or we can directly print or log the result.
// because string is immutable.
// trim() will not modify the existing string it will return new string.
console.log(firstName.length); // length will be 22 only.

const newName = firstName.trim();
console.log(newName);
console.log(newName.length); // length will be 7

// or mutating the firstName variable

firstName = firstName.trim();
console.log(firstName);

// toUpperCase() : it will convert all the string characters to uppercase letters, and it will return new string.
const empName = "maxwell";
const empUpper = empName.toUpperCase();
console.log(empUpper);

// toLowerCase() : It will convert all the string characters to lowercase letters, and return new string.
const userName = "AlexA";
const userLower = userName.toLowerCase();
console.log(userLower);

// slice(startIndex, endIndex) : it accepts 2 arguments
// 1. start index
// 2. end index
let str = "Hello Javascript";

const strLength = str.length;
console.log(strLength);
const newStr = str.slice(0);
console.log(newStr);
