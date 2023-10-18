/* 

When writing code like this in production, you may not want to load an HTML page every time you get an HTTP request. While this HTML page is roughly 800 bytes in size, more complex websites can be megabytes in size. Large files can take a while to load. If your site is expecting a lot of traffic, it may be best to load HTML files at startup and save their contents. After they are loaded, you can set up the server and make it listen to requests on an address.

To demonstrate this method, let’s see how we can rework our server to be more efficient and scalable.

$ Serving HTML Efficiently
--> Instead of loading the HTML for every request, in this step we will load it once at the beginning. The request will return the data we loaded at startup.
*/

const http = require("http");
const fs = require("fs");

let indexFile;

const requestListener = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.end(indexFile);
};

/* 
Next, we shift the file reading logic from the requestListener() function to our server startup. Make the following changes as we create the server:
*/

const server = http.createServer(requestListener);

fs.readFile(__dirname + "/index.html", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    indexFile = data.toString();
    server.listen(8000, "127.0.0.1", () => {
      console.log(`Server is running on http://localhost:8000`);
    });
  }
});
