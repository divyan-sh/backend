const express = require("express");
require("./config/database");

const app = express();

app.get("/", async (req, res) => {
  res.send("Hello from server");
});

app.listen(8000, () => {
  console.log("Sever is listening on port: 8000");
});
