/* 
So now the best part that is SERVERS.

as you know backend is all about server side which means we make a server in the backend which handles all our request that we initiate on frontend..

? What is a web server: basically it is a software program which serves web pages to web users (browsers).

So normally all our website code is store at our server than
we make a particular http request for our Home.html or About.html page to our server, then in return our server will send us response and in response our server will send us Home.html file which our browsers renders and display the content to us..

Most of the web server support server side scripts using scripting language or redirect to application server which perform the specific task of getting data from database, perform complex logic etc. and then sends a result to the HTTP client through the Web server.

# Web Application Architecture-->
  A web application can be divided in 4 layers:

  +1: Client Layer: The Client layer contains web browsers, mobile browsers or applications which can make HTTP request to the web server.

  +2: Server Layer: The Server layer contains Web server which can intercepts the request made by clients and pass them the response.

  +3: Business Layer: The business layer contains application server which is utilized by web server to do required processing. This layer interacts with data layer via data base or some external programs.

  +4: Data Layer: The Data layer contains databases or any source of data.

So normally a PHP code runs on a server which is XAMPP server. That can understand PHP code and give you the desired output..

BUT IN NODE.js we can create our own server which will handle HTTP requests asynchronously. so let's see how?

$ We use the module to create an HTTP server.
*/
const http = require("http");

/* 
> http.createServer() is method used to create an HTTP server with a special function, which in Node.js we call a request listener. This function is meant to handle an incoming HTTP request and return an HTTP response. This function must have two arguments, a request object and a response object. The request object captures all the data of the HTTP request that’s coming in. The response object is used to return HTTP responses for the server.
This request listener seems like this-->
const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};

+ All request listener functions in Node.js accept two arguments: req and res (we can name them differently if we want).

+ The first line res.writeHead(200); sets the HTTP status code of the response. HTTP status codes indicate how well an HTTP request was handled by the server. In this case, the status code 200 corresponds to "OK".

+ The next line of the function, res.end("My first server!");, writes the HTTP response back to the client who requested it. This function returns any data the server has to return. In this case, it’s returning text data.

Note: Even though requestListener() does not use the req object, it must still be the first argument of the function.
*/

// but here i pass anonymous function instead of the requestListener function ..baat toh ek hi he na ^_~
const server = http.createServer((req, res) => {
  //+ These two object which we provide in the callback help us to collect the data about the request and to response to a request..
  //+ The request object(an http.IncomingMessage object) can be used to get information about current request, ex: url,request header, and the data.
  //+ The response object (http.ServerResponse object) can be used to send a response for a current request.

  // SO we create a server successfully but we have to write here something so that for responding to the request otherwise how we will check server is running correctly or not. so
  res.end("Hello World from the other side- CNU");
});

/* 
+ After we create our server, we must bind it to a network address. We do that with the server.listen() method. It accepts three arguments: port, host, and a callback function that fires when the server begins to listen.
Now what we will do,

+ We will just configure our server to how to listen to the response and we will do that using the listen method of the node server in which we set the port number and the ip address of our server..

+ In our case we will use our own computer as a server so we can use local web server and in this case our ip address is 127.0.01 that is LOCALHOST.

+ You can specify any http port which are current free on your machine i mean check if any another XAMPP or live server is not running on your machine. You can use 80,3000,8000.

- When we bind our server to this host and port, we will be able to reach our server by visiting http://localhost:8000 in a local browser.

+ We will also provide a callback function in the listen method so that we get to know that when it is successfully listen to server response
*/

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port number 8000");
});

/*  
$ Let’s break down what happened when we tested our server.

- we sent a GET request to the server at http://localhost:8000 using browser. 
- Our Node.js server listened to connections from that address. 
- The server passed that request to the requestListener() function. 
- The function returned text data with the status code 200. 
- The server then sent that response back to browser, which displayed the message in web page.
*/
