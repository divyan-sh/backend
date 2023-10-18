/* 
$ Express.js Request and Response objects are the parameters of the callback function which is used in Express applications.

-The express.js request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on.
Similarly,
-The Response object (res) specifies the HTTP response which is sent by an Express app when it gets an HTTP request.
- res object: What it does
  + It sends response back to the client browser.
  + It facilitates you to put new cookies value and that will write to the client browser (under cross domain rule).
  + Once you res.send() or res.redirect() or res.render(), you cannot do it again, otherwise, there will be uncaught error.

+ app.get('/', function (req, res) {  
+    // --  
    req.Methods
    res.Methods
+ })  

# Express.js Request Object Properties:
> 1.	req.app	            This is used to hold a reference to the instance of the express application that is using the middleware.
> 2.	req.baseurl	        It specifies the URL path on which a router instance was mounted.
> 3.	req.body	        It contains key-value pairs of data submitted in the request body. By default, it is undefined, and is populated when you use body-parsing middleware such as body-parser.
> 4.	req.cookies	        When we use cookie-parser middleware, this property is an object that contains cookies sent by the request.
> 5.	req.fresh	        It specifies that the request is "fresh." it is the opposite of req.stale.
> 6.	req.hostname	    It contains the hostname from the "host" http header.
> 7.	req.ip	            It specifies the remote IP address of the request.
> 8.	req.ips	            When the trust proxy setting is true, this property contains an array of IP addresses specified in the ?x-forwarded-for? request header.
> 9.	req.originalurl	    This property is much like req.url; however, it retains the original request URL, allowing you to rewrite req.url freely for internal routing purposes.
> 10.	req.params	        An object containing properties mapped to the named route ?parameters?. For example, if you have the route /user/:name, then the "name" property is available as req.params.name. This object defaults to {}.
> 11.	req.path	        It contains the path part of the request URL.
> 12.	req.protocol	    The request protocol string, "http" or "https" when requested with TLS.
> 13.	req.query	        An object containing a property for each query string parameter in the route.
> 14.	req.route	        The currently-matched route, a string.
> 15.	req.secure	        A Boolean that is true if a TLS connection is established.
> 16.	req.signedcookies	When using cookie-parser middleware, this property contains signed cookies sent by the request, unsigned and ready for use.
> 17.	req.stale	        It indicates whether the request is "stale," and is the opposite of req.fresh.
> 18.	req.subdomains	    It represents an array of subdomains in the domain name of the request.
> 19.	req.xhr	            A Boolean value that is true if the request's "x-requested-with" header field is "xmlhttprequest", indicating that the request was issued by a client library such as jQuery

# Request Object Properties:
> 1. res.app	        It holds a reference to the instance of the express application that is using the middleware.
> 2. res.headersSent	It is a Boolean property that indicates if the app sent HTTP headers for the response.
> 3. res.locals     	It specifies an object that contains response local variables scoped to the request

> 4. res.append(field [, value])   This method appends the specified value to the HTTP response header field. That means if the specified value is not appropriate then this method redress that.
>5. res.attachment([filename])     This method facilitates you to send a file as an attachment in the HTTP response.

>6. res.cookie(name, value [, options])  This method is used to set a cookie name to value. The value can be a string or object converted to JSON.
>7. res.clearCookie(name [, options])    As the name specifies, the clearCookie method is used to clear the cookie specified by name.

>8. res.download(path [, filename] [, fn])   This method transfers the file at path as an "attachment" and enforces the browser to prompt user for download.
>9. res.end([data] [, encoding])             This method is used to end the response process.
res.end();  
res.status(404).end();  

>10. res.format(object)   This method performs content negotiation on the Accept HTTP header on the request object, when present.
     res.format({  
       'text/plain': function(){  
         res.send('hey');  
       },  
      'text/html': function(){  
         res.send('  
     hey');  
       },  
       'application/json': function(){  
         res.send({ message: 'hey' });  
       },  
      'default': function() {  
         // log the request and respond with 406  
         res.status(406).send('Not Acceptable');  
       }  
     });  
     
>11. res.get(field)   This method provides HTTP response header specified by field.
>12. res.json([body]) This method returns the response in JSON format.

>13. res.jsonp([body]) This method returns response in JSON format with JSONP support.  
>14. res.links(links)  This method populates the response?s Link HTTP header field by joining the links provided as properties of the parameter.
res.links({  
  next: 'http://api.rnd.com/users?page=5',  
  last: 'http://api.rnd.com/users?page=10'  
});  

>15.res.location(path)  This method is used to set the response location HTTP header field based on the specified path parameter.
res.location('http://xyz.com');  







*/
