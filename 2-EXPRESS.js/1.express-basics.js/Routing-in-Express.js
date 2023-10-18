/*
$ Today we will see routing in Express.js
+ Have you remember how we create different routes in node.js using HTTP module..
Oh Ya that if else if.. So complicated routes..

+ don't worry let's see how express will help us to get rid of that if else :)

*/

const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => res.send(`<h1>Welcome to /Home ^_~</h1>`));

app.get("/about", (req, res) =>
  res.status(200).send(`<h1>Welcome to /About ^_~</h1>`)
);

app.get("/contact", (req, res) => res.send(`<h1>Welcome to /Contact ^_~</h1>`));

app.get("/temp", (req, res) => res.send(`<h1>Welcome to /Temp ^_~</h1>`));

app.listen(port, () => console.log(`App is listening to the port ${port}`));

/* 
>> So have you seen this how simple is this to make routes in express...
*  res.send() will check the structure of your output and set header information accordingly.

A 304 Not Modified response code indicates that the requested resource has not been modified since the previous transmission. This typically means there is no need to retransmit the requested resource to the client, and a cached version can be used, instead. However, it’s possible that the server is improperly configured, which is causing it to incorrectly respond with a 304 Not Modified code, instead of the standard and expected 200 OK code of a normal, functional request. Thus, a large part of diagnosing the issue will be going through the process of double-checking what resources/URLs are generating 304 Not Modified response codes and determining if these codes are appropriate or not.
*/
