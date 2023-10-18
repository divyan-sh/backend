/* 
# TO serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

$ express.static(root,[options])
  > The root argument specifies the root directory from which to serve static assets

-- For serving static files we need a proper folder structure where all our static files are separated.
+ Public folder for static files.
+ src folder for JS files..(logic part).

-- what is express.static() do ?
   ?Using this middleware what we are doing is we just tell the express server that all our static file are stored in this directory and u can server them from here..

-- How will i get the static path ?
   Hmm good question, well we will use the path module and the predefined global variable of node.js to get the path.
   i.e using the __dirname we can get the current directory but we have to go one step back from that directory and then enter into public folder,

   So is there any method to do this.. manipulation with the path..
   + Yes we have path.join() method using this we can do this so let's do this..

-- How to implement this middleware ?
   + To load the middleware function, call app.use(), specifying the middleware function. 
   So what app.use() method, it's just connect your middleware in between request and response handlers, so that whenever there is a request the middleware function will be called just before the server send the response and close the request.

*/

const express = require("express");
const path = require("path");

const app = express();
const port = 8000;

const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));
/* 
Now, you can load the files that are in the public directory:
http://localhost:8000/css/style.css
http://localhost:8000/index.html

>> To create a virtual path prefix (where the path does not actually exist in the file system) for files that are served by the express.static function, specify a mount path for the static directory, as shown below:
? app.use('/static', express.static('public')) -->
http://localhost:3000/static/css/style.css
http://localhost:3000/static/index.html

*/

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on ${port}`));

/* 
The example we see above can also do with npm module: 
# node-static
  npm install node-static

>> After installing node-static module, you can create static file server in Node.js which serves static files only.
var http = require('http');

var nStatic = require('node-static');

var fileServer = new nStatic.Server('./public');

http.createServer(function (req, res) {
    
    fileServer.serve(req, res);

}).listen(5000);

>> In the above example, node-static will serve static files from public folder by default. So, an URL request will automatically map to the file in the public folder and will send it as a response.

*/
