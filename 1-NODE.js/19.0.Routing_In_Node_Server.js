/* 
Now let;s see how we will change the response of the server based on the changes in URL..

$ So routing simple means to route or to navigate..
- And the routing is handled using URL's.
for ex--
if you type in a search bar www.xyz.com/about
then the last part of this url represents routes or we can say path at which you want to go..

So we have to program our server in such a way that whenever user request on our server with different paths then what response we have to send them according to different path..
Ex if user type /about then our server should send response to the about.html page similarly
if user type /contact then our server should send response to contact.html page
and in case user type a path that doesn't exist in our website pages then in response our server should a 404 error response.

So we have to program this to make our server work correctly.

A simple logic to do this.. is to check urls and respond according to URl that is if url contain /about then we send response as about.html

so to check the url we have a separate module in NODE.js which is a URL module... but in we also check the url in other way.

> The request object which we get in requestListeners has a property called "url" which holds the part of the url that comes after the domain name.

so let's see how we will do that..
*/

const http = require("http");

const server = http.createServer((req, res) => {
  // You can see what we will get with the request object, but our need is the url property: req.url
  //   console.log(req);
  console.log(req.url);

  if (req.url == "/") {
    res.end(`Hello from the Home page`);
  } else if (req.url == "/about") {
    res.end(`Hello from the About Page`);
  } else if (req.url == "/contact") {
    res.end(`Hello from the Contact Page`);
  } else {
    //   Now this is okay that if user enter a wrong web page name then in response our sever will send a 404 message but the problem is that the status code is still 200 that is not okay, if there is a error then response code should be an error code. hence we also have to check the response code. we can do that by writeHead() method
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write(
      `<h1>404 Error: No such page exist, please check the page url and try again</h1>`
    );
    res.end();
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log(`Server is listening to the port 8000`);
});

/* 
* you can use res.write() method to write response code such as..
res.write(`Hello from the HOME page`)
res.end() 
? But it is compulsory to write res.end() method to send the response to the browser. otherwise the response will not send

You can see that the type of response we are sending is a data text that means a document..
Now what if i want to send a HTML response..
to send a HTML response i can simple write HTML code in response message i.e-->
--> set response content    
    + res.write('<html><body><p>This is home Page.</p></body></html>');
    + res.end();

* If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type, just like we have to specify the http response code in case of error; so to specify the content type

--> set response header
    + res.writeHead(200, { 'Content-Type': 'text/html' }); 
The first argument of the res.writeHead() method is the status code, 200 means that all is OK this we know right.
The second argument is an object containing the response headers.

$ What is header..
In normal language header represents the top most block of any thing right..hence
In information technology, header refers to supplemental data placed at the beginning of a block of data being stored or transmitted.
we can also call header as metadata that is it stores the information about the transmitting data.

Now when we talk about web here this header name is change to HTTP headers.
HTTP headers let the client and the server pass additional information with an HTTP request or response. here also the purpose of the header is the same that is it stored the information about the http request and http response such as type of data, method of data transmission, content type of data, source of data transfer, destination of data transfer etc these are the information which are include in the http headers.

- Headers can be grouped according to their contexts:
> General headers apply to both requests and responses, but with no relation to the data transmitted in the body.

> Request headers contain more information about the resource to be fetched, or about the client requesting the resource.

> Response headers hold additional information about the response, like its location or about the server providing it.

> Entity headers contain information about the body of the resource, like its content length or MIME type.

*/
