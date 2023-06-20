// error handling in AJAX

const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);

xhr.onload = () => {
  if (xhr.status === 200 && xhr.status <= 300) {
    const data = JSON.parse(xhr.response);
    console.log(data);
  } else {
    console.log("Something went wrong");
  }
};

// if you want to handle network related error use xhr.onerror() method
xhr.onerror = () => {
  console.log("Check your Network");
};
xhr.send();
