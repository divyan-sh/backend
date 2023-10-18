/* 
$ Node.js Chaining Streams
--> Chaining stream is a mechanism of creating a chain of multiple stream operations by connecting output of one stream to another stream. It is generally used with piping operation.
like this: 
+ src.pipe(dest1).pipe(dest2)
Let's take an example of piping and chaining to compress a file and then decompress the same file.
*/

const fs = require("fs");
const zlib = require("zlib");

// compress the file input.txt to input.txt.gz

const readStream = fs.createReadStream("./input.txt");
readStream.pipe(zlib.createGzip()).pipe(fs.createWriteStream("input.txt.gx"));

console.log("File Compressed");

// To Decompress the same file:

fs.createReadStream("input.txt.gz")
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream("input.txt"));
console.log("File Decompressed.");
