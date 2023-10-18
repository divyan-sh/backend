# Partials

if your code have some reparative block of code like nav or some other component that you use in your templates.
Then you can make a separate file of that block of code and then use it anywhere you want to.
These are called partials..

# How to use partials in EJS.

suppose here is my navbar code that i required on every view.

<nav>
  <div class="logo">
    <img src="logo.png" alt="logo" />
  </div>
  <ul class="nav-links">
    <li class="nav-link"><a href="Home">Home</a></li>
    <li class="nav-link"><a href="About">About</a></li>
    <li class="nav-link"><a href="contact">Contact</a></li>
  </ul>
</nav>

Now i make a separate file of this code and named it nav.ejs

Now where i want to use this block of code, i will simple include it using include function..
<%- include("./partials/nav") %>

## include(filename, [locals])

note: the variables in the parent function are not visible to the child template, unless it is explicitly declared in the locals object, or is passed as a local to the parent template.

## Example

included.ejs

<li><%= pet.name %></li>

main.ejs

<ul>
<%  pets.forEach(function (pet) { -%>
  <%- include('included', {
        pet: pet
      }) %>
<%  }) -%>
</ul>

Locals

{
"pets": [
{
"name": "Hazel"
}
, {
"name": "Crystal"
}
, {
"name": "Catcher"
}
]
}

HTML

<ul>
  <li>Hazel</li>
  <li>Crystal</li>
  <li>Catcher</li>
</ul>
