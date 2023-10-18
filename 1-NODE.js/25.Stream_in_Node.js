/* 
$ NODE.js Streams..
--> Streams are the objects that facilitate you to read data from a source and write data to a destination in continuos fashion.

Streaming means listening to music or watching video in 'real-time', instead of downloading file to your computer and watching it later..

With the help of stream object now we can read and write directly from our server in a continuos manner, that is we will read and write data from the server chunks by  chunks.

> 4 type of streams..
  + Readable: This stream is used for read operations.
  + Writable: This stream is used for write operations.
  + Duplex: This stream can be used for both read and write operations.
  + Transform: It is type of duplex stream where the output is computed according to input.

> Each type of stream is an Event emitter instance and throws several events at different times. Following are some commonly used events:
  + Data:This event is fired when there is data available to read.
  + End:This event is fired when there is no more data available to read.
  + Error: This event is fired when there is any error receiving or writing data.
  + Finish:This event is fired when all data has been flushed to underlying system.

-- Streams are not a concept unique to Node.js. They were introduced in the Unix operating system decades ago, and programs can interact with each other passing streams through the pipe operator (|).
For example, in the traditional way, when you tell the program to read a file, the file is read into memory, from start to finish, and then you process it.
Using streams you read it piece by piece, processing its content without keeping it all in memory.

? Why streams:
Streams basically provide two major advantages over using other data handling methods:
+ Memory efficiency: you don't need to load large amounts of data in memory before you are able to process it

+ Time efficiency: it takes way less time to start processing data, since you can start processing as soon as you have it, rather than waiting till the whole data payload is available

> Now understand this with a help of example..
There is file named input.txt suppose that it is on the server it contains a paragraph and we have to read the text present inside that file..
we can do this with fs.readFile but it will load all the file first and then give us the text inside it..
But we want to receive the text line by line that is chunk by chunk in a continuos manner, hence we have to use stream now let's see how we will use this stream object..
*/

const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  /* 
  fs.readFile("input.txt", function (err, data) {
    if (err) return console.error(err);
    res.end(data.toString());
  });
  + Here we didn't streaming u can see we first load data and then send it as response.. Here the line of code in the input.txt is very less if the lines are more than 10000 then it will take lots of time to load that data.. hence we have to use stream in that case..

  2nd way: 
  + Reading from a Stream.
  + Create a readable stream.
  + Handle stream events --> Data,end,and error.
 */

  const readStream = fs.createReadStream("./input.txt");

  readStream.on("data", (chunkData) => {
    res.write(chunkData);
  });
  readStream.on("end", () => {
    res.end();
  });
  readStream.on("error", (err) => {
    console.error(err);
    res.end("File Not Found..");
  });
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:8000/");
});

//# Node.js Writing to stream:

const data =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quas ipsum neque dolores hic mollitia ullam repellendus enim amet porro, quisquam molestiae fugiat, sed, sunt placeat expedita consequatur repellat dicta!";

const writeStream = fs.createWriteStream("output.txt");
writeStream.write(data, "utf-8");
writeStream.end();
writeStream.on("finish", () => {
  console.log("File Created successfully");
});

writeStream.on("error", (err) => {
  console.error(err.stack);
});
