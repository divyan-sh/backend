/* 
$ fs module Node.js--> 
  In Node.js, file I/O is provided by simple wrappers around standard POSIX functions.
  
BRAIN FUCK 🤯🤯: what the hell is POSIX function?
Before diving into deep intro of POSIX,

let us see how a file is created in our OS.

so basically our OS is a Giant Software which runs on user commands.
There are two ways to give commands to our OS
* one is GUI based that is right click on the mouse--> click on new file --> and your file is created
* and the second way is command line base that is your interact with your os using command prompt where you write machine understandable command like mkdir, cd ,clear , type, touch etc then your OS process these commands and show you the output..

You know one fun fact is that The GUI way of giving just way to provide easy communication to the user but deep down when you click on a button inside it,there command line which is working that is on click button there is code runs in background in command line..

So according the my opinion..inside the file system module there are functions written which are deep down using the command line feature of the OS.. for ex when you use a method to create file from file system and then in background it opens the command prompt and uses the some machine understandable commands to create a file ex-- mkdir 

let's is my theory is correct or not-->

> The Portable Operating System Interface (POSIX) is a family of standards specified by the IEEE Computer Society for maintaining compatibility between operating systems.
> POSIX defines the application programming interface (API), along with command line shells and utility interfaces, for software compatibility with variants of Unix and other operating systems.

So in simple language POSIX is an standard API to interact with OS.

So after reading many blogs on POSIX i came to this conclusion that 
POSIX is a standard API that help us to connect to OS that's all....

So the above line--> "In Node.js, file I/O is provided by simple wrappers around standard POSIX functions."

this means that functions of fs modules are are just a wrapper of POSIX standard functions(mkdir,dirname,ls)

There is no need to install it. Being part of the Node.js core, it can be used by simply requiring it:

$ const fs = require('fs');

Once you do so, you have access to all its methods, which include:

-- fs.access(): check if the file exists and Node.js can access it with its permissions
-- fs.appendFile(): append data to a file. If the file does not exist, it's created
-- fs.chmod(): change the permissions of a file specified by the filename passed. Related: fs.lchmod(), fs.fchmod()
-- fs.chown(): change the owner and group of a file specified by the filename passed. Related: fs.fchown(), fs.lchown()
-- fs.close(): close a file descriptor
-- fs.copyFile(): copies a file
-- fs.createReadStream(): create a readable file stream
-- fs.createWriteStream(): create a writable file stream
-- fs.link(): create a new hard link to a file
-- fs.mkdir(): create a new folder
-- fs.mkdtemp(): create a temporary directory
-- fs.open(): set the file mode
-- fs.readdir(): read the contents of a directory
-- fs.readFile(): read the content of a file. Related: fs.read()
-- fs.readlink(): read the value of a symbolic link
-- fs.realpath(): resolve relative file path pointers (., ..) to the full path
-- fs.rename(): rename a file or folder
-- fs.rmdir(): remove a folder
-- fs.stat(): returns the status of the file identified by the filename passed. Related: fs.fstat(), fs.lstat()
-- fs.symlink(): create a new symbolic link to a file
-- fs.truncate(): truncate to the specified length the file identified by the filename passed. Related: fs.ftruncate()
-- fs.unlink(): remove a file or a symbolic link
-- fs.unwatchFile(): stop watching for changes on a file
-- fs.utimes(): change the timestamp of the file identified by the filename passed. Related: fs.futimes()
-- fs.watchFile(): start watching for changes on a file. Related: fs.watch()
-- fs.writeFile(): write data to a file. Related: fs.write()


* One peculiar thing about the fs module is that all the methods are asynchronous by default, but they can also work synchronously by appending Sync.

For example:
>> fs.rename()
>> fs.renameSync()
>> fs.write()
>> fs.writeSync()

This makes a huge difference in your application flow.

lET'S see some examples-->
*/

const fs = require("fs");

//$ Currently we are seeing only synchronous version..
//creating a new file-->
fs.writeFileSync("read.txt", "Hey this is me CNU ^_~");

//* if read.txt file is already exists then the above command just replace the text with the new text.
fs.writeFileSync(
  "read.txt",
  "Hey this is me CNU ^_~, and i am learning Node.js"
);

//If you don;t want to replace the text from read.txt instead want to add some then there is one append method, see-->
fs.appendFileSync("read.txt", " How is your day going..😋😋");

//What if you wanna read that file-->
// Why i am using this type of variable name wait you will get to knw  that soon just compile the program.
const buf_data = fs.readFileSync("read.txt");
console.log(buf_data);

/* 
Output-->
<Buffer 48 65 79 20 74 68 69 73 20 69 73 20 6d 65 20 43 4e 55 20 5e 5f 7e 2c 20 61 6e 64 20 69 20 61 6d 20 6c 65 61 72 6e 69 6e 67 20 4e 6f 64 65 2e 6a 73 20 ... 31 more bytes>

Now if you saw the output in cmd then you got that the output shows in some different format that format is called Binary Format.

and the reason i use such variable name because that data type that stores this binary data is known as Buffer Data Type..
So conclusion-->

* Node.js includes an additional data type called Buffer.
(Not available in Browser's JS..)
>> Buffer is mainly used to store binary data..
>> While reading from a file or receiving packets over the network..

its not possible for a normal user to understand this binary data hence we have to convert it into a readable string..

#using toSting() method.
*/

console.log(buf_data.toString());

//$ To rename the file-->
// fs.renameSync("old_path", "new_Path")

fs.renameSync("read.txt", "read_&_write.txt");
