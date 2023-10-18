/* 
$ Node.js PATH Module--> The path module provides a lot of very useful functionality to access and interact with the file system.

+ 1.	path.normalize(p)	                It is used to normalize a string path, taking care of '..' and '.' parts.
+ 2.	path.join([path1][, path2][, ...])	It is used to join all arguments together and normalize the resulting path.
+ 3.	path.resolve([from ...], to)	    It is used to resolve an absolute path.
+ 4.	path.isabsolute(path)	            It determines whether path is an absolute path. an absolute path will always resolve to the same location, regardless of the working directory.
+ 5.	path.relative(from, to)	            It is used to solve the relative path from "from" to "to".
+ 6.	path.dirname(p)	                    It return the directory name of a path. It is similar to the unix dirname command
+ 7.	path.basename(p[, ext])	            It returns the last portion of a path. It is similar to the Unix basename command.
+ 8.	path.extname(p)	                    It returns the extension of the path, from the last '.' to end of string in the last portion of the path. if there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string.
+ 9.	path.parse(pathstring)	            It returns an object from a path string.
+ 10.	path.format(pathobject)	            It returns a path string from an object, the opposite of path.parse above.

--> This module provides path.sep which provides the path segment separator (\ on Windows, and / on Linux / macOS), and path.delimiter which provides the path delimiter (; on Windows, and : on Linux / macOS).

> path.parse(): Parses a path to an object with the segments that compose it:
root: the root
dir: the folder path starting from the root
base: the file name + extension
name: the file name
ext: the file extension

*/

const path = require("path");

// Normalization
console.log(
  "normalization : " +
    path.normalize("/sssit/javatpoint//node/newfolder/tab/..")
);

// Join
console.log(
  "joint path : " +
    path.join("/sssit", "javatpoint", "node/newfolder", "tab", "..")
);

// Resolve
console.log("resolve : " + path.resolve("Path_Module_Node.js"));

//-By specifying a second parameter, resolve will use the first as a base for the second:
console.log(path.resolve("tmp", "joe.txt")); //+ '/Users/joe/tmp/joe.txt'

//- If the first parameter starts with a slash, that means it's an absolute path:
console.log(path.resolve("/etc", "joe.txt")); //+'/etc/joe.txt'

// Extension
console.log("ext name: " + path.extname("Path_Module_Node.js"));

// Parse
const p = path.parse("/users/cnu/test.js");

console.log(p);
