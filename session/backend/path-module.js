const path = require("path");
//# normalize
//# join
//# resolve
//# extname
//# parse

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
