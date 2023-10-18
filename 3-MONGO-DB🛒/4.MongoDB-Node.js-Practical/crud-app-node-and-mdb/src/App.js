const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./Database");
const {
  createPlaylist,
  showAllPlaylist,
  searchPlaylist,
  updatePlaylist,
  deletePlaylist,
} = require("./CRUD");

const app = express();

// Constant Variables:
const port = 8000;
const static_path = path.join(__dirname, "../public");
const views_path = path.join(__dirname, "../views");

// App configuration:
app.use("/public", express.static(static_path));
app.set("views", views_path);
app.set("view engine", "ejs");
// For POST DATA
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Handling Routes
app.get("/", (req, res) => {
  const page = +req.query.page || 1;
  const limit = 3;

  showAllPlaylist(page, limit).then((result) => {
    result.currentPage = page;
    res.render("index", result);
  });
});

app.get("/create", (req, res) => {
  res.render("create");
});
app.get("/read", (req, res) => {
  res.render("read");
});
app.get("/update", (req, res) => {
  res.render("update");
});
app.get("/delete", (req, res) => {
  res.render("delete");
});

// Handling Post Requests...
app.post("/create-playlist", (req, res) => {
  createPlaylist(req.body).then((result) => {
    res.json(result);
  });
});

app.post("/search-playlist", (req, res) => {
  searchPlaylist(req.body).then((result) => {
    res.json(result);
  });
});

// Handling PUT Requests
app.put("/update-playlist", (req, res) => {
  updatePlaylist(req.body).then((result) => {
    res.json(result);
  });
});

// handling Delete Request
app.delete("/delete-playlist", (req, res) => {
  deletePlaylist(req.body).then((result) => {
    res.json(result);
  });
});

app.listen(port, () => console.log(`The CRUD App is listening on ${port}`));
