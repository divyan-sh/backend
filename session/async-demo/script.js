// Fetch API:

// const url = new URL("https://www.geeksforgeeks.org/components-of-a-url/?a=10");
// console.log(url);

//# GET API CALL
// const getDataFromServer = () => {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((data) => {
//       return data.json();
//     })
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

//-to get the response body, we need to use an additional method call.

//> Response provides multiple promise-based methods to access the body in various formats:

//> response.text() – read the response and return as text,
//> response.json() – parse the response as JSON,
//> response.formData() – return the response as FormData object (explained in the next chapter),
//> response.blob() – return the response as Blob (binary data with type),
//> response.arrayBuffer() – return the response as ArrayBuffer (low-level representation of binary data),
//> additionally, response.body is a ReadableStream object, it allows you to read the body chunk-by-chunk,

//# GET API CALL With Options
// const token = "xyz";
// const getDataFromServer2 = () => {
//   fetch("https://jsonplaceholder.typicode.com/todos/1", {
//     method: "GET",
//     // headers: {
//     //   Authorization: `Bearer ${token}`,
//     // },
//     // mode: "cors",
//   })
//     .then((data) => {
//       return data.json();
//     })
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

//# FormData
//> 1. GET Call (No Data with body) but we can send data using query params: ex >> url(www.xyz.com/docs?id=10)
//> 2.POST call (data with body)
// Object format
// ?? to send data to backend >> JSON.stringify({
//     name:'userName',
//     email:"zyx@gmail.com",
//     password:"abc@1234"
// })
// ?? to get data from backend>> JSON.parse(data)

// const data = new FormData();
// data.append("name", "username");
// data.append("email", "zyx@gmail.com");
// data.append("password", "abc@1234");

// console.log(data);
// ?? data >> send to backend

//# POST CALL
// const postDataToSever = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({
//       userId: 1,
//       id: 1,
//       title:
//         "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//       body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//     }),
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .then((result) => {
//       console.log(result);
//     });
// };

//# GET CALL with Async Await
// const getDataFromServer = async () => {
//   const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const result = await data.json();
// };

//# Error handling with async wait:
const getDataFromServer = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    if (response.status === 200) {
      const result = await response.json();
      console.log(result);
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    console.error(error.message);
  }
};
