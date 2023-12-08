const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
require("./config/database");
const {
  showAllPlaylist,
  createPlaylist,
  searchPlaylist,
  updatePlaylist,
} = require("./services/playlist.service");

const app = express();

const static_path = path.join(__dirname, "../public");
const views_path = path.join(__dirname, "./views");

app.use(express.static(static_path));
app.set("views", views_path);
app.set("view engine", "ejs");

// For POST DATA
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const page = +req.query.page || 1;
  const limit = 5;
  const result = await showAllPlaylist(page, limit);
  res.render("index", result);
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

app.get("/get-all-playlist", async (req, res) => {
  const page = +req.query.page || 1;
  const limit = 5;
  const result = await showAllPlaylist(page, limit);
  res.json(result);
});
app.post("/create-playlist", async (req, res) => {
  const data = await createPlaylist(req.body);
  res.json(data);
});

app.post("/search-playlist", async (req, res) => {
  const data = await searchPlaylist(req.body);
  res.json(data);
});

// Handling PUT Requests
app.put("/update-playlist", async (req, res) => {
  const data = await updatePlaylist(req.body);
  res.json(data);
});

// handling Delete Request
app.delete("/delete-playlist", (req, res) => {
  deletePlaylist(req.body).then((result) => {
    res.json(result);
  });
});

app.listen(8000, () => {
  console.log("Sever is listening on port: 8000");
});
