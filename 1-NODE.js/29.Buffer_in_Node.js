/* 
$ What is Buffer ?
>> A buffer is an area of memory. 
JavaScript developers are not familiar with this concept, much less than C, C++ or Go developers (or any programmer that uses a system programming language), which interact with memory every day.

>> It represents a fixed-size chunk of memory (can't be resized) allocated outside of the V8 JavaScript engine.

>> You can think of a buffer like an array of integers, which each represent a byte of data.

It is implemented by the Node.js Buffer class.
>> Node.js provides Buffer class to store raw data similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap. Buffer class is used because pure JavaScript is not nice to binary data. So, when dealing with TCP streams or the file system, it's necessary to handle octet streams.

+ Buffer class is a global class. It can be accessed in application without importing buffer module.

? Why do we need a buffer ?
  >> Buffers were introduced to help developers deal with binary data, in an ecosystem that traditionally only dealt with strings rather than binaries.
  >> Buffers are deeply linked with streams. When a stream processor receives data faster than it can digest, it puts the data in a buffer.
  * A simple visualization of a buffer is when you are watching a YouTube video and the red line goes beyond your visualization point: you are downloading data faster than you're viewing it, and your browser buffers it.
  
? How to create Buffer ?
A buffer is created using the-
  + Buffer.from(), 
  + Buffer.alloc(), and 
  + Buffer.allocUnsafe() methods.
  + Buffer() constructor.
 
*/

//--Way:1 Buffer Constructor()

// Create an uninitiated buffer:Following is the syntax of creating an uninitiated buffer of 10 octets-->
const buf = new Buffer(10);

// Create a buffer from array: Following is the syntax to create a Buffer from a given array-->
const buf2 = new Buffer([10, 20, 30, 40]);

// Create a buffer from string: Following is the syntax to create a Buffer from a given string and optionally encoding type-->
const buf3 = new Buffer("Simply Easy Learning", "utf-8");

//-- Way:2 Buffer.from() method
//+ Buffer.from(array)
//+ Buffer.from(arrayBuffer[, byteOffset[, length]])
//+ Buffer.from(buffer)
//+ Buffer.from(string[, encoding])
const buf3 = Buffer.from("Hey!");

//-- Way:3 Buffer.alloc() and Buffer.allocUnsafe(): You can also just initialize the buffer passing the size. This creates a 1KB buffer:
const buf4 = Buffer.alloc(1024);
//or
const buf5 = Buffer.allocUnsafe(1024);

/* 
+ While both alloc and allocUnsafe allocate a Buffer of the specified size in bytes, 
+ the Buffer created by alloc will be initialized with zeroes and the one created by allocUnsafe will be uninitialized. 
+ This means that while allocUnsafe would be quite fast in comparison to alloc, the allocated segment of memory may contain old data which could potentially be sensitive.
+ Older data, if present in the memory, can be accessed or leaked when the Buffer memory is read. This is what really makes allocUnsafe unsafe and extra care must be taken while using it.
*/

//# Using a buffer:
// A buffer, being an array of bytes, can be accessed like an array:
const buf6 = Buffer.from("Hey!");
console.log(buf[0]); //72
console.log(buf[1]); //101
console.log(buf[2]); //121
//* Those numbers are the Unicode Code that identifies the character in the buffer position (H => 72, e => 101, y => 121)

//You can print the full content of the buffer using the toString() method:
console.log(buf6.toString());

//Note: that if you initialize a buffer with a number that sets its size, you'll get access to pre-initialized memory that will contain random data, not an empty buffer!

//# Get the length of a buffer:
const buf7 = Buffer.from("Hey!");
console.log(buf.length);

//# Iterate over the contents of a buffer:
for (const item of buf7) {
  console.log(item); //72 101 121 33
}

//# Changing the content of a buffer:
// You can write to a buffer a whole string of data by using the write() method:
const buf8 = Buffer.alloc(4);
buf8.write("Hey!");

//Just like you can access a buffer with an array syntax, you can also set the contents of the buffer in the same way:
buf8[1] = 111; //o
console.log(buf8.toString()); //Hoy!

//# Copy a buffer:  Copying a buffer is possible using the copy() method:
let bufCopy = Buffer.alloc(4); //allocate 4 bytes
buf8.copy(bufCopy);

// By default you copy the whole buffer. 3 more parameters let you define the starting position, the ending position, and the new buffer length:

let bufCopy1 = Buffer.alloc(2); //allocate 2 bytes
buf8.copy(bufCopy1, 0, 0, 2);
bufCopy1.toString(); //'He'

//# Slice a buffer: If you want to create a partial visualization of a buffer, you can create a slice. A slice is not a copy: the original buffer is still the source of truth. If that changes, your slice changes.

buf8.slice(0).toString(); //Hey!
const slice = buf8.slice(0, 2);
console.log(slice.toString()); //He
bu8f[1] = 111; //o
console.log(slice.toString()); //Ho
