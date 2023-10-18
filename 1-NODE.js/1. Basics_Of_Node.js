/* 
$ NODE.js

# basically it is a program that written in c++ by A Google Developer Ryan Dahl.
Before the invention of node js we can use JS on client side that is our javascript code can only run on client machines only if his browser have the required engine for interpreting js code this interpreter or compiler is different in different browser.
Such as Chrome has its own js compiler which is known as Chrome V8 engine, using this whatever code we write in JS is shown to user in a understanding way because the chrome v8 engines is able to interpret that js code into machines understandable code than machine can show the desired output corresponding to that js code.

>> Hence before the invention of node.js the js can only used on client side that is on browsers..

But after the invention of node.js we can now use JS on server side too because what node js did it just make the v8 chrome engine which interpret the JS code protable that is now that engine is not only limited to browser but now in the form of a application like node.js it is now available on machines.
hence now we can user that node.js on our server side machine where we can use JS code.

# Features of node.js Application-->

-- 1. Extremely fast: Node.js is built on Google Chrome's V8 JavaScript Engine, so its library is very fast in code execution.
-- 2. I/O is Asynchronous and Event Driven: All APIs of Node.js library are asynchronous i.e. non-blocking. So a Node.js based server never waits for an API to return data. The server moves to the next API after calling it and a notification mechanism of Events of Node.js helps the server to get a response from the previous API call. It is also a reason that it is very fast.
-- 3. Single threaded: Node.js follows a single threaded model with event looping.
-- 4. Highly Scalable: Node.js is highly scalable because event mechanism helps the server to respond in a non-blocking way.
-- 5. No buffering: Node.js cuts down the overall processing time while uploading audio and video files. Node.js applications never buffer any data. These applications simply output the data in chunks.
-- 6. Open source: Node.js has an open source community which has produced many excellent modules to add additional capabilities to Node.js applications.

* Ye toh hogai kitabi baate now let us understand it in a practical way..
Node.js uses asynchronous programming that what the above 2nd point says it means that when we raise and when we get the response of that request by server, during this interval noting will freeze as like in synchronous programming says that at one time u can do only one task but as asynchronous prgression says at one time you can do multiple tasks don't wait for the first task to complete, i will give you the response as it will complete till then u can raise another request if i found the resources for that request earlier then i will send it you u just do your work not wait.. as Time is very precious.

$ A common task for a web server can be to open a file on the server and return the content to the client.
Here is how PHP or ASP handles a file request:
 --> Sends the task to the computer's file system.
 --> Waits while the file system opens and reads the file.
 --> Returns the content to the client.
 --> Ready to handle the next request.

Here is how Node.js handles a file request:
 --> Sends the task to the computer's file system.
 --> Ready to handle the next request. (So cool ha Tezz ho rhe ho ^_~)
 --> When the file system has opened and read the file, the server returns the content to the client.

* Node.js eliminates the waiting, and simply continues with the next request.

$ What Can Node.js Do?
 >> Node.js can generate dynamic page content
 >> Node.js can create, open, read, write, delete, and close files on the server
 >> Node.js can collect form data
 >> Node.js can add, delete, modify data in your database

$ What is a Node.js File?
 # Node.js files contain tasks that will be executed on certain events
 # A typical event is someone trying to access a port on the server
 # Node.js files must be initiated on the server before having any effect
 # Node.js files have extension ".js"
 */
