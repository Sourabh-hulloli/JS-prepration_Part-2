// async await

const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
