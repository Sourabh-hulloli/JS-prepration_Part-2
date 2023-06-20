const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    // xhr.open(method, url);
    xhr.open(method, url);
    xhr.onload = () => {
      if (xhr.status === 200 && xhr.status <= 300) {
        resolve(xhr.response);
      } else {
        reject(new Error("Something went wrong"));
      }
    };
    // if network failuer
    xhr.onerror = () => {
      console.log("Network error");
    };
    xhr.send();
  });
}

// promise chaining or promisfying
sendRequest("GET", URL)
  .then((response) => {
    const data = JSON.parse(response);
    // console.log(data);
    return data;
  })
  .then((data) => {
    const id = data[3].id;
    return id;
  })
  .then((id) => {
    const url = `${URL}/${id}`;
    // console.log(url);
    return sendRequest("GET", url);
  })
  .then((res) => {
    // console.log(res); // response from server in the form of JSON String.
    const newData = JSON.parse(res); // using JSON.parse() we converted JSON String to Javascript Object.
    console.log(newData);
  })
  .catch((err) => console.log(err));
