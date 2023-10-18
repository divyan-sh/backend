/* 
$ Node.js Piping Streams:
--> Piping is a mechanism where output of one stream is used as input to another stream.
>> stream.pipe() the method used to take a readable stream and connect it to a writeable stream.

>> Using pipe method i can read data chunks by chunks from a file and write that data simultaneously to some other destination..

>> pipe(destination,[options])
   +destination: <stream.Writable> The destination for writing data.
   + options: 
     end (booleans) end the writer when the reader ends. Default: true


*/

const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  const readStream = fs.createReadStream("./input.txt");
  readStream.pipe(res);
  //> Let's take a piping example for reading from one file and writing it to another file.
  const writeStream = fs.createWriteStream("./output2.txt");
  readStream.pipe(writeStream);
  //Here we are simultaneously doing read and write the data which we read chunks by chunks from that file now we simultaneously write that data to response using pipe().
  // The advantage of pipe() is the speed of read() and write() is same that means there will be no delay between read() and write() of data.
  //* Where as in the previous method where we define the event handlers in that case the data is not write at that speed at which data was reading..
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:8000/");
});
