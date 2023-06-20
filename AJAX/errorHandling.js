// error handling in AJAX

const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);

xhr.onload = () => {
  if (xhr.status === 200 && xhr.status <= 300) {
    const data = JSON.parse(xhr.response);
    // console.log(data);
    // need 4th object from the API
    const id = data[3].id;
    // console.log(id);
    const xhrId = new XMLHttpRequest();
    const URLID = `${URL}/${id}`;
    xhrId.open("GET", URLID);
    xhrId.onload = () => {
      if (xhrId.status === 200 && xhrId.status <= 300) {
        const dataId = JSON.parse(xhrId.response);
        console.log(dataId);
      } else {
        console.log("Something went wrong");
      }
    };
    xhrId.send();
  } else {
    console.log("Something went wrong");
  }
};

// if you want to handle network related error use xhr.onerror() method
xhr.onerror = () => {
  console.log("Check your Network");
};
xhr.send();
