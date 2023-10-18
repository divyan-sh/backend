/* 
ToDay we will see how to use EJS templates engine with express-->

? To get started with ejs: 
  >> npm install ejs

? USE ejs on client side:
  > let ejs = require('ejs');
  > let people = ['geddy', 'neil', 'alex'];
  > let html = ejs.render('<%= people.join(", "); %>', {people: people});

  + Browser support: Download a browser build from the latest release, and use it in a script tag.
    <script src="ejs.js"></script>
    <script>
      let people = ['geddy', 'neil', 'alex'];
      let html = ejs.render('<%= people.join(", "); %>', {people: people});
    </script>

  + CLI: 
    ejs ./template_file.ejs -f data_file.json -o ./output.html
    
? USing ejs on server side with express:
  if you want to use another named for views folder then you must tell express that folder name like this: 
  > app.set("views",path.join(__dirname,'./myViews'))

  to tell express that you are using ejs as the views engine-->
  > app.set("view engine",'ejs')
  
  That's all now just make a index.ejs file and to render it on server use this-->
  > app.get("/",function(req,res){
  >     app.render('index');
  > })

  To provide dynamic content to the templates you need to pass a object with the render function.
  like this..
  > app.get("/",function(req,res){
  >     app.render('index',{
  >     name: "cnu",
  >     });
  > })

? Syntax of EJS templates:
  + <% 'Scriptlet' tag, for control-flow, no output
  + <%_ 'Whitespace Slurping' Scriptlet tag, strips all whitespace before it
  + <%= Outputs the value into the template (escaped)
  + <%- Outputs the unescaped value into the template
  + <%# Comment tag, no execution, no output
  + <%% Outputs a literal '<%'
  + %%> Outputs a literal '%>'
  + %> Plain ending tag
  + -%> Trim-mode ('newline slurp') tag, trims following newline
  + _%> 'Whitespace Slurping' ending tag, removes all whitespace after it

? TO define custom delimiters:
  > ejs.delimiter = '?';
  > ejs.openDelimiter = '[';
  > ejs.closeDelimiter = ']';

  With express: 
  > app.set('view options', {delimiter: '?'});

*/

const express = require("express");
const path = require("path");

const app = express();
const port = 8000;
const staticPath = path.join(__dirname, "../public");

app.use("/public", express.static(staticPath));
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.get("/", (req, res) =>
  res.render("index", {
    name: "Divyansh Thakur -_~",
  })
);

app.get("/blogs", (req, res) => {
  res.render("blogs", {
    blogs: [
      {
        title: "top DIY Face masks",
        snippet: "Lorem ipsum dolor sit amet.",
      },
      {
        title: "DIY Art and crafts",
        snippet: "Lorem ipsum dolor sit amet.",
      },
      {
        title: "Yoshi's Egg hunt",
        snippet: "Lorem ipsum dolor sit amet.",
      },
      {
        title: "Top of the notch",
        snippet: "Lorem ipsum dolor sit amet.",
      },
    ],
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/create", (req, res) => {
  res.render("create");
});

app.use((req, res) => {
  if (res.status(404)) {
    res.render("404");
  }
});

app.listen(port, () => console.log(`Server is listening on the port ${port}`));

/* 

$ Style.css error with EJS templates
// using app.use to serve up static CSS files in public/assets/ folder when /public link is called in ejs files
// app.use("/route", express.static("foldername"));
app.use('/public', express.static('public'));

*/
