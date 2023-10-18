/*  
$ I Found two ways to add 404 pages in express:

? Way one: By Using a middleware..
  > Define a middleware and on every request we will will check the response if response code is equal to 404 then we will display 404 page..
    + app.use((req,res,next)=>{
    +   if(res.status(404){
    +       res.render(404-error,{
    +           errorComment: "404: Page not found"
    +       })
    +   }
    + })

? Way two: by using a special Operator.. (*)
  > * this means all so if we write app.get("*") these means all the routes hence we will define this in last so that after every route is check and still the route is not found than that means that router we did not define ok so then we will render 404 page..
  Ex-->
    + app.get("/",(req,res)=>{
    +     res.render("index")
    + })

    + app.get("/about",(req,res)=>{
    +     res.render("about")
    + })
  > if some one goes on this route /about/xyz then what to do 404 page will still come but now i want to give more detail error such that no page exist in about.. so what i do let's see..
   + app.get("/about/",(req,res)=>{
   +      res.render("404-error",{
   +       errorComment: "404: Page not found in about"
   +      })
   +  })

   + app.get("*",(req,res)=>{
   +      res.render("404-error",{
   +       errorComment: "404: Page not found"
   +      })
   +  })



  
*/
