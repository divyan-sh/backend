/* 
To serve HTML pages that is a different topic but here we will se how to send html in response.

Well that's not so complicated as simple as sending a simple response...
>> U just have to write html code in res.send() or res.write() method no need to specify headers, because express will automatically detect the content type and set the content-type header for you..

>> Similarly u can json by writing a js object in response and express will automatically stringify it to json  and also set the perfect content type in header.

*/

const express = require("express");
const app = express();
const port = 8000;

// Sending HTML Data..
app.get("/", (req, res) => {
  res.write("<h1>Hello World!</h1>");
  res.write("<h2>Welcome to Home Page</h2>");
  //it is must to use res.send() method because the server will continuously fetch the data unless and until response is not ended..
  res.send();
});

// Sending JSON Data...
app.get("/api", (req, res) => {
  res.send([
    {
      id: 1,
      name: "cnu",
    },
    {
      id: 2,
      name: "punit",
    },
    {
      id: 3,
      name: "shivani",
    },
    {
      id: 4,
      name: "shraddha",
    },
    {
      id: 5,
      name: "kishanva",
    },
  ]);
  /* 
  # You can also send the response like this : 
  res.json([
       {
      id: 1,
      name: "cnu",
    },
    {
      id: 2,
      name: "punit",
    },
    {
      id: 3,
      name: "shivani",
    },
    {
      id: 4,
      name: "shraddha",
    },
    {
      id: 5,
      name: "kishanva",
    },
  ])
 
  --> THe only difference between this two method res.send() and res.json() is that when an array is passed, but res.json() will also convert non-objects,such as null and undefined, which are not valid JSON.
  else both method work same..

  --> The method also uses the json replacer and json spaces application settings, so you can format JSON with more options. Those options are set like so:
  + app.set('json spaces', 2);
  + app.set('json replacer', replacer);
 
  --> This is the code in the res.json() method that the send method doesn't have:
      var app = this.app;
      var replacer = app.get('json replacer');
      var spaces = app.get('json spaces');
      var body = JSON.stringify(obj, replacer, spaces);
      
      + The method ends up as a res.send() in the end:
      this.charset = this.charset || 'utf-8';
      this.get('Content-Type') || this.set('Content-Type', 'application/json');
      
      return this.send(body);
 */
});

app.listen(port, () => console.log(`Example app listening on port port!`));
