// break keyword

// continoue keyword

for (let i = 0; i <= 10; i++) {
  if (i === 4 || i == 5 || i === 2) {
    continue;
  }
  console.log(i);
}

// && will not work
// for (let i = 0; i <= 10; i++) {
//   if (i === 4 && i == 5 && i === 2) {
//     continue;
//   }
//   console.log(i);
// }

for (let i = 0; i <= 10; i++) {
  if (i == 8) {
    break;
  }
  console.log(i);
}
