// XHR - > XMLHTTPRexuest()

// Request URL
const URL = "https://jsonplaceholder.typicode.com/posts";

// first create an object using XMLHTTPRequest()
const xhr = new XMLHttpRequest();
// console.log(xhr);

// using this xhr variable we have to make request

// step-1
xhr.open("GET", URL);

// this will be handled by browser
// xhr.onreadystatechange = function () {
//   //   console.log(xhr.readyState);
//   if (xhr.readyState === 4) {
//     // console.log(xhr.readyState);
//     // console.log(typeof xhr.response); // string
//     // need to convert from string to JSON format
//     const response = xhr.response;
//     const data = JSON.parse(response);
//     // console.log(typeof data); // object
//     console.log(data);
//   }
// };

// xhr.onload() will be execute when onreadyState will become 4.
xhr.onload = function () {
  //   console.log(xhr.response);
  const response = xhr.response; // response will be in the form of JSON String
  const data = JSON.parse(response); // converting JSON String to Javascript object using JSON.parse() method.
  console.log(data);
};

// step-2
xhr.send();
