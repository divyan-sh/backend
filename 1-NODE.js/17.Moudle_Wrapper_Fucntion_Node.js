/* 
$ Module Wrapper Function..

Do you ever think whenever we use require or module, exports
where does this came from.. how our code get to know that what it is...

The ans of your question is...

+ Before a module's code is executed, Node.js will wrap it with a function wrapper that looks like the following:

 (function(exports, require, module, __filename, __dirname) { 
    //* All the data inside this is PRIVATE because this is created using a Grouping Operator which makes a scope and outside that scope we can't use anything
    // Module code actually lives in here 
}); 

I.e when you write a simple code like this -->
console.log("Hello World") in your index.js file

then when executing this file node.js wrap this code into its module wrapper function something like this..

(function(exports, require, module, __filename, __dirname) { 
    console.log("Hello World")
}); 

$ By doing this, Node.js achieves a few things:

-1: It keeps top-level variables (defined with var, const or let) scoped to the module rather than the global object.
-2: It helps to provide some global-looking variables that are actually specific to the module, such as:
    +The module and exports objects that the implementor can use to export values from the module.
    +The convenience variables __filename and __dirname, containing the module's absolute filename and directory path.

? This module wrapper function is exactly same as the IIFE function of JS
because in IIFE what we written inside it is private even var variable which have by default global scope, cannot used outside iife.
(()=>{
    var a= "CNU";
})();
console.log(a);
*Error: a is not defined

$ You can edit the wrapper, too:

let Module = require('module');

Module.wrap = (function (exports, require, module, __filename, __dirname) {
    // What you want the new wrapper to be.
    return Module.wrapper[0] + exports + 'console.log("This is the wrapper.");' + Module.wrapper[1];
});

*/
