const express = require("express");
const app = express();
const port = 3000;

//@ Setting the local variables of our APP.
app.set("views", "./views");
app.set("view engine", "ejs");
app.set("custom", "cnu");

app.locals.title = "MyApp";
app.locals.email = "admin@exp.com";

// @To Retrieve the settings and locals variables.
console.log(app.get("custom"));
console.dir(app.locals.title);
console.dir(app.locals.email);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port port!`));

/* 

# app.locals: The app.locals object has properties that are local variables within the application.
  - So we can say that app.locals is a object that store all the local variables of our application that can be accessed from anywhere in the application.

  - TO retrieve the local variables values inside application
    > console.dir(app.locals.title);
    > console.dir(app.locals.email);

  - Once set, the value of app.locals properties persist throughout the life of the application, in contrast with res.locals properties that are valid only for the lifetime of the request.  
    
  - You can access local variables in templates rendered within the application, simply using the variables name.
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    *   <title> <%= title %> </title>
    </head>
    <body>
        
    </body>
    </html>

   - Local variables are available in middleware via req.app.locals (see req.app)
     (req,res,next)=>{
     *   console.log(req.app.locals.title)
     } 

# app.set(name, value): Assigns setting name to value. You may store any value that you want, but certain names can be used to configure the behavior of the server. These special names are listed in the app settings table.
  - using app.set() we can either set custom local variables or we can also set some predefined variables which our used for configuration of our express-app.
  - behind the scenes app.set() work as
    > app.locals.setting.name=value;
    So app.set("views") === app.locals.setting.views="./views"

  - Retrieve the value of a setting with app.get().  
    > app.set('title', 'My Site')
    > app.get('title') // "My Site"
  
  - access local.settings variables in templates rendered within the application
    as locals variables is available to the templates directly, so as setting is also a local variables it is directly available but to access the variables inside the settings then we have to use dot object notation to access properties.
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    *   <title> <%= title %> </title>
    </head>
    <body>
    *   <h1>Hello <%= settings.custom %</h1>
    </body>
    </html>

# res.locals: An object that contains response local variables scoped to the request, and therefore available only to the view(s) rendered during that request / response cycle (if any). Otherwise, this property is identical to app.locals.
  - This property is useful for exposing request-level information such as the request path name, authenticated user, user settings, and so on.    
    > app.use(function (req, res, next) {
    >   res.locals.user = req.user
    >   res.locals.authenticated = !req.user.anonymous
    >   next()
    > })
  
  - Same as app.locals the only difference is small life span the the variables is only available to 1 request-response cycle.
    
*/
