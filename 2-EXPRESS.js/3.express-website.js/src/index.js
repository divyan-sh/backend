const express = require("express");
const path = require("path");

const app = express();

const port = 3000;

const staticPath = path.join(__dirname, "../public");

app.use(express.static(staticPath));

app.get("/", (req, res) => res.send("Response ended"));

app.listen(port, () => console.log(`Server is listening on port: ${port}`));
