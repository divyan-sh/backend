// # project-folder create
// # inside that project folder >> npm init
// # index.js | server.js inside that folder
// # npm install express

const express = require("express");
const fs = require("fs");
const morgan = require("morgan");
const path = require("path");

//@Entry Point of my backend application
const app = express();

// @Middlewares:
app.use(morgan("dev"));

// app.use((req, res, next) => {
//   console.log(`${req.method} and ${req.url}`);
//   // res.send(`<h1>Error</h1>`);
//   next();
// });

//@ Static file path set

const static_path = path.join(__dirname, "./public");
// const static_path2 = path.join(__dirname, "./static");

app.use(express.static("./public"));
// app.use(express.static(static_pat2));

//# Basic Routing >>>

//# app.METHOD(PATH,HANDLER)
// > app instance of express
// > METHOD , http methods (GET, POST, PUT, PATCH, DELETE)
// > PATH , route
// > Handlers

app.get("/", (req, res) => {
  res.send(`<h1>Hello World</h1>`);
});

app.get("/users", (req, res) => {
  fs.readFile("./src/data/data.json", (err, data) => {
    if (err) {
      res.send(`<h1>Error</h1>`);
    } else {
      res.send(data.toString());
    }
  });
});

app.post("/post", (req, res) => {
  res.send("<h1>This is post request</h1>");
});

app.put("/user", (req, res) => {
  res.send(`<h1>This is a PUT request</h1>`);
});

app.delete("/user", (req, res) => {
  res.send("<h1>This is a delete request</h1>");
});

//# Server Start

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
