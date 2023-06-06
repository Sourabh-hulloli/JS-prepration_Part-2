// sort method
// ASCII Table
// char : ascii value

// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57

// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64

// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90

// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// ' ' ' : 96

// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '/' : 124
// '}' : 125

// sort() - it will modify the original array
// const numbers = [5, 9, 1200, 400, 3000];

// it will consider only 1st character of array elements ascii value.
// ["5", "9", "1200", "400", "3000"]
// [53,  57,    49,    52,    51]

// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57
// numbers.sort();
// console.log(numbers);

// sort userNames
// const userNames = ["Sarvesh", "Pranav", "Ganesh", "Kunal", "Abd", "abd"];
// userNames.sort();
// console.log(userNames); // ['Ganesh', 'Kunal', 'Pranav', 'Sarvesh']

// const numbers = [5, 9, 1200, 400, 3000];
// numbers.sort((a, b) => {
//   return a - b; // ascending order sort
// });
// console.log(numbers); // [5, 9, 400, 1200, 3000]

// numbers.sort((a, b) => {
//   return b - a; // descending order sort
// });
// console.log(numbers); // [3000, 1200, 400, 9, 5]

// real time example of sort(), in ecommerce website price low to high there we can use sort method

const products = [
  { productId: 1, productName: "Mobile", price: 30000 },
  { productId: 2, productName: "Laptop", price: 95000 },
  { productId: 3, productName: "SmatrWatch", price: 3000 },
  { productId: 4, productName: "Earphones", price: 1000 },
  { productId: 5, productName: "Pendrive", price: 499 },
];

// price lowToHigh
// but it effects original array
// products.sort((a, b) => {
//   return a.price - b.price;
// });
// console.log(products);

// price low to high with cloned array
const lowToHigh = products.slice(0).sort((a, b) => {
  return a.price - b.price;
});
console.log(lowToHigh);

// price high to low wit cloned array
const highToLow = products.slice(0).sort((a, b) => {
  return b.price - a.price;
});
console.log(highToLow);
