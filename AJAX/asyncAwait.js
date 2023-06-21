// async await

const URL = "https://jsonplaceholder.typicode.com/posts";

async function getPosts() {
  const response = await fetch(URL);
  const data = response.json();
  return data;
}
getPosts()
  .then((myData) => {
    console.log(myData);
  })
  .catch((error) => {
    console.log(error);
  });
