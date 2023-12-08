const express = require("express");
const path = require("path");

const app = express();

const static_path = path.join(__dirname, "./public");
// const views_path = path.join(__dirname, "./views");

app.use(express.static(static_path));

// //@ How to set EJS view engine:
// app.set("views", views_path);
// app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // res.render("index", {
  //   name: "Divyansh Thakur -_~",
  //   lastname: "Hello",
  // });
  res.send("Hello World");
});

app.listen(8000, () => {
  console.log(`Server is running on Port: 8000`);
});
