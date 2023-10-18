const http = require("http");
const fs = require("fs");
const url = require("url");

//Create server
const server = http.createServer((req, res) => {
  // parse the request contaning file name..
  const pathname = url.parse(req.url).pathname;
  console.log(pathname);
  // substr to remove this "/" from the pathname.
  console.log(pathname.substr(1));

  //Read the requested file content from the file system..
  fs.readFile(pathname.substr(1), (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.writeHead(err);
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      // Write the content of the file to response body
      res.write(data.toString());
    }
    // send the response body
    res.end();
  });
});

server.listen(8000, "127.0.0.1", () => {
  console.log(`Server is listening to the port 8000`);
});
