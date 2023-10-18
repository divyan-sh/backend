/* 
$ Today we will learn how to use PUG template engine with express.js

--> Pug doesn’t have any closing tags and relies on indentation for nesting. This might take a small amount of getting used to, but once you do, it makes for clean and readable code

--> Notice that Pug is smart enough to close any self-closing tags (such as the <input /> element) for us.

? Using PUG at Client Side..
  >  npm install pug
  > const pug = require('pug');
    //- template.pug
    p #{name}'s Pug source code!
  > const compiledFunction = pug.compileFile('template.pug');
    // Render a set of data
    console.log(compiledFunction({
      name: 'Timothy'
    }));
    // "<p>Timothy's Pug source code!</p>"
    + Pug also provides the pug.render() family of functions that combine compiling and rendering into one step. However, the template function will be re-compiled every time render is called, which might impact performance. Alternatively, you can use the cache option with render, which will automatically store the compiled function into an internal cache.
      // Compile template.pug, and render a set of data
      console.log(pug.renderFile('template.pug', {
        name: 'Timothy'
      }));
      // "<p>Timothy's Pug source code!</p>"
  > pug-cli
    pug -w . -o ./html -P

--> Our main motive is to use PUG at the server side so let's get deep into it..

? Using PUG at the server side: 
  > Run npm install pug --save to install the pug module to your current project.

  must set the view engine property of your Express application to pug .
  > app.set("view engine", "pug");

  you must set the view directory of your app so that Express knows where to look for your Pug files (for compilation).
  > app.set("views", "path/to/views");

  Now to render the PUG files on your routes simple setup routes using app.get() and to provide dynamic data to the templates we will use same way as we are using before that is passing the object.
  > app.get("/", function (req, res, next) {
  >     // Your route code
  >     var locals = {
  >         title: "Home",
  >     };
  >     res.render("index", locals);
  > });
 
*/

const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.set("view engine", "pug");
app.set("view engine", path.join(__dirname, "../views"));

app.get("/", (req, res) =>
  res.render("index", {
    name: "Divyansh",
  })
);

app.listen(port, () => console.log(`Example app listening on port port!`));
