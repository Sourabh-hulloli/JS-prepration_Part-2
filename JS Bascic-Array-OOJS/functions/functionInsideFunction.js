// function inside function

function app() {
  function sum(num1, num2) {
    return num1 * num2;
  }

  const mul = (a, b) => {
    return a * b;
  };

  console.log("App function");
  console.log(sum(5, 5));
  console.log(mul(2, 2));
}
app();
