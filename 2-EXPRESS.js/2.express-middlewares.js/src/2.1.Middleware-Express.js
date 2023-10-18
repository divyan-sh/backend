/* 
? WHat is middleware: 
A middleware is middle function that call just before the source object reaches the destination, that is this function called between the source and the destination.
for ex in REACT, middleware called when data is just about to store in the store..

--> Express.js Middleware are different types of functions that are invoked by the Express.js routing layer before the final request handler.

--> As the name specified, Middleware appears in the middle between an initial request and final intended route. 

--> In stack, middleware functions are always invoked in the order in which they are added.

>> Middleware is commonly used to perform tasks like body parsing for URL-encoded or JSON requests, cookie parsing for basic cookie handling, or even building JavaScript modules on the fly.

>> IN Express, Middleware functions are the functions that access to the request and response object (req, res) in request-response cycle.

# A middleware function can perform the following tasks:
  + It can execute any code.
  + It can make changes to the request and the response objects.
  + It can end the request-response cycle.
  + It can call the next middleware function in the stack. hence it have a next function..

# Following is a list of possibly used middleware in Express.js app:
  + Application-level middleware
  + Router-level middleware
  + Error-handling middleware
  + Built-in middleware
  + Third-party middleware
*/

//@ Simple Middle ware Example--
/* 
We will use a middleware that gives us the url every time we get a request on the server..
So it is the middle function that have access to the req and res object..
> app.use() is a function that initiated middleware, inside this we pass our custom middleware or 3rd party middleware..
> and whenever there is a request initiated before it ended up this app.use() is called and the app.use() method called the middleware which is written inside it..
*/

const express = require("express");
const app = express();
const port = 8000;

app.use((req, res, next) => {
  console.log(`${req.method} and ${req.url}`);
  next();
});
//Note: the call above to next(). Calling this function invokes the next middleware function in the app. The next() function is not a part of the Node.js or Express API, but is the third argument that is passed to the middleware function. The next() function could be named anything, but by convention it is always named “next”. To avoid confusion, always use this convention.

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/help", (req, res) => res.send("How may i Help You"));

app.listen(port, () => {
  console.log(`Example app listening at port no ${port}`);
});
