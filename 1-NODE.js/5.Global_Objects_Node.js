/* 
$ Node.js Global Objects-->
  Node.js global objects are global in nature and available in all modules. You don't need to include these objects in your application; rather they can be used directly.

# These objects are modules, functions, strings and object etc. Some of these objects aren't actually in the global scope but in the module scope.

-- __dirname
-- __filename
-- Console
-- Process
-- Buffer
-- setImmediate(callback[, arg][, ...])
-- setInterval(callback, delay[, arg][, ...])
-- setTimeout(callback, delay[, arg][, ...])
-- clearImmediate(immediateObject)
-- clearInterval(intervalObject)
-- clearTimeout(timeoutObject)

*/

//$ __dirname: It is a string. It specifies the name of the directory that currently contains the code.
console.log(__dirname);

//$ __filename: It specifies the filename of the code being executed. This is the resolved absolute path of this code file. The value inside a module is the path to that module file.

console.log(__filename);
