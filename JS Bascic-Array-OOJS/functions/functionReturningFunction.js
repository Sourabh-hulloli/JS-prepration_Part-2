// function returning function

function myFunc() {
  function hello() {
    return "hello World";
  }
  return hello;
}
const ans = myFunc();
console.log(ans());
