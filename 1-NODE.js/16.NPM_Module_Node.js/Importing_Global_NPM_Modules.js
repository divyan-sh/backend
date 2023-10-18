/*
To Import Node Modules globally means,
that you can access that module  in any project.
That module will not  save in your particular project package.json dependencies list..
But it will save in your computer root directory i.e CDrive..
So that you can access it globally in any project without installing it every time in every project..

Now let's see a Node module which will help us every time we use node..

$ NodeMon.js
nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

i.e what i am doing till now is that do some changes in my js file and then go to console and compile that js file using node index.js command,
to get rid of this we use nodemon that will automatically do this for me.

> to install any module globally u just have to use a -g flag at the end of th install command.
+ npm i nodemon -g

to check weather it is installed successfully or not open cmd in any directory and type nodemon -v
if it will return the version then it is successfully
installed. 

Now you can clearly see that this module we installed globally so it did not listen in our project dependencies list...

Now as nodemon is successfully installed let's test it...
in our previous file..
*/
