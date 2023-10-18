/* 
$ Node.js Console -->

The Node.js console module provides a simple debugging console similar to JavaScript console mechanism provided by web browsers.

#Arey Dar mat kuch bhi nya nhi he bas jo console.log() ham JS me use krte the ye wohi he, but the only difference is that there this console module is stored in window object.
>> Remember that window.console.log() and as we knw window object is a part of V8 chrome engine hence
Same here in NODE.js there is a console module which provides 3 methods-->

--> log()
--> error()
--> warn()

don't use it directly i mean the write way to write this is -->
--> console.log():
    The console.log() function is used to display simple message on console.
--> console.error():
    The console.error() function is used to render error message on console.
--> console.warn():
    The console.warn() function is used to display warning message on console.

*/

console.log("Hello World");
console.log("Hello %s", "CNU");
console.error(new Error("Hello! Bro you are at wrong place"));
console.warn("Don't you dare to say that again");
