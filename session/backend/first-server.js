const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname.substring(1);

  switch (req.url) {
    case "/":
      fs.readFile("./index.html", (err, data) => {
        if (err) {
          const data = fs.readFileSync("./error.html", "utf-8");
          res.writeHead(404, { "Content-Type": "text/html" });
          res.write(data);
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          const dataString = data.toString();
          const newData = dataString.replace("{%name%}", "DivyanSH");
          res.write(newData);
        }
        res.end();
      });
      break;
    case "/about":
      fs.readFile(`./${pathname}.html`, (err, data) => {
        if (err) {
          const data = fs.readFileSync("./error.html", "utf-8");
          res.writeHead(404, { "Content-Type": "text/html" });
          res.write(data);
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data.toString());
        }
        res.end();
      });
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write(
        `<h1>404 Error: No such page exist, please check the page url and try again</h1>`
      );
      res.end();
      break;
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server started");
});
