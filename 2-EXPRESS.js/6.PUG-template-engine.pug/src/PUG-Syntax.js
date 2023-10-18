/* 
--1.PUG is whitespace sensitive, which means that Pug uses indentation to work out which tags are nested inside each other.
    for ex->
    > div.remark
    >    p Pug rocks!!
    The code above looks like this in HTML:
    > <div class="remark">
    >   <p>Pug rocks!!</p>
    > </div>
    Now take this code...
    > div.remark
    > p Pug rocks!!
    This produce the following..
    > <div class="remark"></div>
    > <p>Pug rocks!!</p>

--2.Secondly, Pug doesn’t have any closing tags.

--3.Notice that Pug is smart enough to close any self-closing tags (such as the <input /> element) for us.
    > nav
    >   navbar-default  div
    >     h1 My Website!
    >   ul
    >     li
    >       a Home
    >     li
    >       a Page 1
    >     li
    >       a Page 2
    >   input
    The code above compiles to this:
    > <nav>
    >   <div>
    >     <h1>My Website!</h1>
    >   </div>
    >   <ul>
    >     <li><a>Home</a></li>
    >     <li><a>Page 1</a></li>
    >     <li><a>Page 2</a></li>
    >   </ul>
    >   <input/>
    > </nav>

--4.Classes, IDs and Attributes:Classes and IDs are expressed using a .className and #IDname notation.
    > nav#navbar-default  
    >   div.container-fluid
    >     h1.navbar-header My Website!
    
    -- Pug also offers us a handy shortcut. If no tag is specified, it will assume a <div> element:
    > nav#navbar-default  
    >   .container-fluid
    >     h1.navbar-header My Website!
    Both of these compile to:
    > <nav id="navbar-default">
    >   <div class="container-fluid">
    >     <h1 class="navbar-header">My Website!</h1>
    >   </div>
    > </nav>

    -- Attributes are added using brackets:
    >  ul
    >    li
    >      a(href='/') Home
    >    li
    >      a(href='/page-1') Page 1
    >    li
    >      a(href='/page-2') Page 2
    >
    >  input.search(
    >    type='text'
    >    name='search'
    >    placeholder='Enter a search term...'
    >  )

--5.Plain Text and Text Blocks: Pug provides various methods for adding plain text directly into the rendered HTML
    > h1.navbar-header My Website! We can write anything we want here …

    -- Another way is to prefix a line with a pipe character (|):
    > p
    >   | You are logged in as
    >   | user@example.com
    This gives us the following:
    > <p>
    >   You are logged in as
    >   user@example.com
    > </p>

    -- When dealing with large blocks of text, you can just ad a dot . right after the tag name, or after the closing parenthesis, if the tag has attributes:
    > p.
    >   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    >   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    >   veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    >   commodo consequat.

--6.Comments: Finally, comments can be added like so:
    > // My wonderful navbar
    > nav#navbar-default
    This comment will be added to the rendered HTML:
    > <!-- My wonderful navbar-->
    > <nav id="navbar-default"></nav>

    -- When you start a comment like so.THen the comment will remain in the Pug file but won’t appear in the HTML.
    > //- My wonderful navbar
    > nav#navbar-default

    -- Comments must appear on their own line. Here, the comment will be treated as plain text:
    > nav#navbar-default // My wonderful navbar
    



*/
