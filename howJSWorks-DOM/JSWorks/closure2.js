function hello(x) {
  const a = "varA";
  const b = "varB";
  return function () {
    console.log(a, b, x);
  };
}
const printHello = hello("arg");
printHello();
