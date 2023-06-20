// fetch API
const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch bydefault will use GET method and return promise.
// in fetch() method catch block will not execute because you will get response and in that response object there is a property ok, if the response is success it will be true or it will be false, by using this we have to handle the error.
// catch() block will execute only when network related issue comes.

//? EX - 1  fetch and Read the data from API
// fetch(URL)
//   .then((res) => {
//     if (res.ok) {
//       return res.json();
//     } else {
//       throw new Error("Something went wrong");
//     }
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("inside catch");
//     console.log(error);
//   });

//? EX - 2  Creating the data using fetch method
fetch(URL, {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Something went wrong"); // only throw will work if any error comes, catch() block will not work.
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
