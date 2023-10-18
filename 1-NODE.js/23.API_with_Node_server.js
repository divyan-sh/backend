/* 
Today let's make a small API based on client server architecture.
I.e we will send request to server using url and in return it will give us the requested resources.

*/

const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname;
  console.log(pathname);

  fs.readFile(`.${pathname}`, (err, data) => {
    if (err) {
      console.log(err);
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(`<h1>404:Page does not exist..</h1>`);
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(data);
      res.end();
    }
  });
});

server.listen(8000, "127.0.0.1", () => {
  console.log(`Server is listening to the port 8000`);
});
