/* 

$ TO Create a Express Application:
--> First you have to require that module..
--> Then using The express() function which is a top level function exported by the express module, create a Express app.
--> This function returns an object which can be used to configure Express application (app in the below example).
--> The app object includes methods for routing HTTP requests, configuring middleware, rendering HTML views and registering a template engine.

? This app object works exactly same as http object but with some additional properties..

as you know to create a sever using node.js we use http.createServer and then inside it we define a callback which fires whenever  there is a requests on the server that means 
+ when someone try to "get" the data from our server that request fucntion fires.
Hence in express we get some function which we can easily use to handle the basic crud operations on our server..these are-->
-- get
-- post
-- put
-- delete

using these function which is provided in the app object we can easily configure our server to respond accordingly.

for ex--> instead of createServer method of http module, we will directly use: 
>> get() method which accept two arguments one is the "route" and the other is the "callback".
>> The callback function has 2 parameters request(req) and response(res).
>> The Request object (req) represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on.
>> Similarly the Response object (res) specifies the HTTP response which is sent by an Express app when it gets an HTTP request.

# Configure Routes
  + Use app object to define different routes of your application. The app object includes get(), post(), put() and delete() methods to define routes for HTTP GET, POST, PUT and DELETE requests respectively.

$ NOW to listen incoming Response from the server we have to use listen function same as we use in http module.

*/

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Hello from the server side..using Express.js</h1>`);
});

app.listen(8000, () => {
  console.log(`Listening the port at 8000`);
});
