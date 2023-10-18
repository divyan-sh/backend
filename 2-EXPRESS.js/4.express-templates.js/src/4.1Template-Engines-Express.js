/* 
Have you ever wonder how we will serve dynamic websites using express..
$ Ok now we will see Templates engines in node.js using which we serve dynamic websites..
--> In the modern world, things are much more interactive and tailored to each user. Today, almost everyone has access to the internet. Most of the web apps today are dynamic. For example, on Facebook you and I will see a very different news feeds when logged in. For each person, the page will follow the same template (i.e. sequential posts with usernames above them), but the content will be different.

--> This is the work of a template engine - the template for the news feed is defined and then, based on the current user and the query to the database, the template is populated with received content.

--> We can use template engines in both the backend and front-end. If we use a template engine in the backend to generate the HTML, we call that Server-Side Rendering (SSR).

--> A template engine facilitates you to use static template files in your applications. At runtime, it replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. So this approach is preferred to design HTML pages easily.

? What exactly template engine do--
  >> client-side browser loads HTML template, JSON/XML data and template engine library from the server.
  >> Template engine produces the final HTML using template and data in client's browser.
  >> However, some HTML templates process data and generate final HTML page at server side also.

--> There are many template engines available for Node.js. Each template engine uses a different language to define HTML template and inject data into it.

The following is a list of important (but not limited) template engines for Node.js
+ Pug
+ Jade
+ Vash
+ EJS
+ Mustache
+ Dust.js
+ Nunjucks
+ Handlebars
+ atpl
+ haml

? How to use a Template Engine..
  To render template files you have to set the following application setting properties:

  > Views: It specifies a directory where the template files are located.
    For example: app.set('views', './views').
  > view engine: It specifies the template engine that you use. For example, to use the Pug template engine: app.set('view engine', 'pug').


$ we will use Handlebars.js in this tutorial..
  There are two reasons why we have chosen handlebars.js:
  + It uses <html> as the language
  + It is available on both the client and server side
  
# How to use Handlebars.js ?
  ? TO use it at client side u just have to use Handlebars compiler that will compile that template into html code with the dynamic data which u provide during the compile.
  Ex-->
  <!-- Include Handlebars from a CDN -->
  <script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/  handlebars.js"></script>
  <script>
    // compile the template
    var template = Handlebars.compile("Handlebars <b>{{doesWhat}}</b>");
    // execute the compiled template and print the output to the console
    console.log(template({ doesWhat: "rocks!" }));
  </script>

  ? You can deliver a template to the browser by including it in a <script> tag.
  <script id="entry-template" type="text/x-handlebars-template">
    <div class="entry">
      <h1>{{title}}</h1>
      <div class="body">
        {{body}}
      </div>
    </div>
  </script>
  + Compile a template in JavaScript by using Handlebars.compile
  var source = document.getElementById("entry-template").innerHTML;
  var template = Handlebars.compile(source);
  + Get the HTML result of evaluating a Handlebars template by executing the template with a context.
  var context = { title: "My New Post", body: "This is my first post!" };
  var html = template(context);
  + Result:
    <div class="entry">
      <h1>My New Post</h1>
      <div class="body">
        This is my first post!
      </div>
    </div>

* Handlebars has been designed to work in any ECMAScript 3 environment.

# How to use Handlebars with Express.js ?
  Note: When using Handlebars server-side, you'll likely use a helper module like "express-handlebars", "hbs" that integrates Handlebars with your web framework like here Express.js

  So as we are using handlebars with our web framework we need a helper module that integrates it with express.js

  ? So the helper module is "HBS".
    An Express.js view engine adapter for Handlebars.js.
    This is a module which will do all the compilation of handlebar templates files to HTML file. We just have to follow proper folder structure..

 ? What is Proper folder structure.
   A folder structure is required so that hbs can know where all the templates files are located and hence able to compile them to HTML file.

--Step.1: Create a separate folder named "views", 
  that will contain the layouts or the template wrappers. Those layouts will contain the HTML structure, style sheets, and scripts that are shared between templates.

--Step.2: Set views directory and views engine as Handlebars using,
  + app.set(‘views’,path.join(__dirname,”views”))
  + app.set(“view engine”,”hbs”)

--Step.3: That's All for setup now just whenever someone request on our server instead of serving them static files we serve them dynamic pages which data we can change from backend..to do that-->Setup a GET route at ‘/’ using,
  app.get(‘/’,(req,res)=>{
  res.render(‘index’);
  )}

-- Did you notice we are rendering an ‘index’ file at ‘/’ route?

-- Well, it’s time for us to create the index.hbs file inside our views folder. we didn't use extension .hbs while rendering the file because our express server will automatically detect that because we set the default view engine to hbs.

-- To use dynamic data into .hbs file use double curly brackets and inside that write the variables.

-- The data to that variables will be pass when u render that template using res.render() in a second argument in a object from where key represent your variable name which you have given in th template and the value will be the value you want to pass to that template.. like user name.
ex:
res.render('index',{
    name: 'JOHN DOE',
})

-- More rules for this templates we will see in .hbs file

*/

//$ Using HBS...
const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();
const partialsPath = path.join(__dirname, "../templates/partials");

//? View Engine Setup:
app.set("views", path.join(__dirname, "../templates/views")); // this is to setup if you want to change the named of by default view directory.. here i am not changing name but if you want to change the name of default view directory then you can use this method.
app.set("view engine", "hbs");

//$ Register partials:
hbs.registerPartial(partialsPath, (err) => {
  console.log(err);
});

const port = 8000;

app.get("/", (req, res) => {
  res.render("index", {
    name: "CNU",
  });
});

var projects = {
  name: "Rahul",
  skills: ["Data Mining", "BlockChain Dev", "node.js"],
};

app.get("/about", (req, res) => {
  res.render("about", { project: projects });
});
//Let's a little more dynamic templates..

app.listen(port, () => console.log(`App is listening on port: ${port}`));
