/* 
$ Basics-->

--1. It uses a template and an input object to generate HTML or other text formats. Handlebars templates look like regular text with embedded Handlebars expressions.
    >> The following template defines two Handlebars expressions:
       <p>{{firstname}} {{lastname}}</p>

    >> If applied to the input object:
       {
       firstname: "Yehuda",
       lastname: "Katz",
       }

    >> The expressions will be replaced by the corresponding properties. The result is then
       <p>Yehuda Katz</p>

--2. Nested input objects: Sometimes, the input objects contains other objects or arrays. For example:
     {
       person: {
         firstname: "Yehuda",
         lastname: "Katz",
       },
     }

    >> In such a case, you can use a dot-notation to gain access to the nested properties: 
    {{person.firstname}} {{person.lastname}}

--3: Evaluation context: The built-in block-helpers each and with allow you to change the current evaluation context.
    >> The with-helper dives into an object-property, giving you access to its properties
       {{#with person}}
       {{firstname}} {{lastname}}
       {{/with}}
       
       {
         person: {
           firstname: "Yehuda",
           lastname: "Katz",
         },
       }

    >> The each-helper iterates an array, allowing to you access the properties of each object via simple handlebars expressions.
       <ul class="people_list">
         {{#each people}}
           <li>{{this}}</li>
         {{/each}}
       </ul>

        {
          people: [
            "Yehuda Katz",
            "Alan Johnson",
            "Charles Jolley",
          ],
        }

--4. Custom Helpers: Handlebars helpers can be accessed from any context in a template. You can register a helper with the Handlebars.registerHelper method.
    >> {{firstname}} {{loud lastname}}
       Handlebars.registerHelper('loud', function (aString) {
           return aString.toUpperCase()
       })
    
    >> Helpers receive the current context as the this-context of the function.
       {{#each people}}
          {{print_person}}
       {{/each}}

       Handlebars.registerHelper('print_person', function () {
           return this.firstname + ' ' + this.lastname
       }

--5. Block Helpers: Block expressions allow you to define helpers that will invoke a section of your template with a different context than the current. These block helpers are identified by a # preceeding the helper name and require a matching closing mustache, /, of the same name. Let's consider a helper that will generate an HTML list:
     >> {{#list people}}{{firstname}} {{lastname}}{{/list}}
        Handlebars.registerHelper("list", function(items, options) {
          const itemsAsHtml = items.map(item => "<li>" + options.fn(item) + "</li>");
          return "<ul>\n" + itemsAsHtml.join("\n") + "\n</ul>";
        });

        {
          people: [
            {
              firstname: "Yehuda",
              lastname: "Katz",
            },
            {
              firstname: "Carl",
              lastname: "Lerche",
            },
            {
              firstname: "Alan",
              lastname: "Johnson",
            },
          ],
        }
        ​
        Output
        <ul>
        <li>Yehuda Katz</li>
        <li>Carl Lerche</li>
        <li>Alan Johnson</li>
        </ul>

--6. HTML Escaping: Because it was originally designed to generate HTML, Handlebars escapes values returned by a {{expression}}. If you don't want Handlebars to escape a value, use the "triple-stash", {{{.
    >> raw: {{{specialChars}}}.
    >> html-escaped: {{specialChars}}.

    Input:
    { specialChars: "& < > \" ' ` =" }

    Output:
    raw: & < > " ' ` =
    html-escaped: &amp; &lt; &gt; &quot; &#x27; &#x60; &#x3D;

--7. Handlebars partials allow for code reuse by creating shared templates. You can register a partial using the registerPartial-method:
    >> Handlebars.registerPartial(
       "person", 
       "{{person.name}} is {{person.age}} years old.\n"
       )
    
       {{#each persons}}
         {{>person person=.}}
       {{/each}}

       input: W
       {
         persons: [
           { name: "Nils", age: 20 },
           { name: "Teddy", age: 10 },
           { name: "Nelson", age: 40 },
         ],
       }

       output: 
       Nils is 20 years old.
       Teddy is 10 years old.
       Nelson is 40 years old.


​
$ Now If you are using handlebar.js at server side then you must be using a helper like hbs or express-handlebars

Then in these helpers some syntax change might be seen like-->

var hbs = require('hbs');
--> In HBS to registerHelper: 
    >> hbs.registerHelper('helper_name', function (options) { return 'helper value'; });

--> TO registerPartial: 
    >> hbs.registerPartial('partial_name', 'partial value');

--> For convenience, registerPartials provides a quick way to load all partials from a specific directory:
    >> hbs.registerPartials(__dirname + '/views/partials', function (err) {});

    Partials that are loaded from a directory are named based on their filename, where spaces and hyphens are replaced with an underscore character:
    +template.html      -> {{> template}}
    +template 2.html    -> {{> template_2}}
    +login view.hbs     -> {{> login_view}}
    +template-file.html -> {{> template_file}}

--> hbs has the ability to expose the application and request locals within any context inside a view. To enable this functionality, simply call the localsAsTemplateData method and pass in your Express application instance.
var hbs = require('hbs');
var express = require('express');
 
var app = express();
hbs.localsAsTemplateData(app);
 
app.locals.foo = "bar";

+ The local data can then be accessed using the @property syntax:
top level: {{@foo}}
{{#each items}}
  {{label}}: {{@foo}}
{{/each}}

fOR MORE iNFO..
FO TO @https://handlebarsjs.com/guide/


*/
