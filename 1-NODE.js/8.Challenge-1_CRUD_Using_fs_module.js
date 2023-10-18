/* 
$  Lorem ipsum dolor sit amet.
>  Lorem ipsum dolor sit amet.
- Lorem ipsum dolor sit amet.
+ Lorem ipsum dolor sit amet.
#  Lorem ipsum dolor sit amet.
*  Lorem ipsum dolor sit amet.
?  Lorem ipsum dolor sit amet.
note: Lorem ipsum dolor sit amet.
@ Lorem ipsum dolor sit amet.

CRUD Operations using Fs module
$ Challenge Time
+ Create a folder named it {Your Name}
+ Create a file in it named it whatever you want and add data into it.
+ Add More data into the file at the end of the existing data.
+ Read the data without getting the buffer data at first.
HINT: understand file encoding
+ Rename the file name.
+ Now delete both the file and the folder.
*/

const fs = require("fs");

const data = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ratione repellendus aspernatur vero laboriosam vel non eaque similique incidunt nihil reiciendis maiores explicabo minus voluptatem aliquam, vitae, porro esse quam!`;

console.log("Creating Folder named CRUD");
fs.mkdirSync("CRUD");

console.log("Creating a file in it named myData.txt");
fs.writeFileSync("./CRUD/exData.txt", data);

console.log("Adding more data into the existing data that is appending data");
fs.appendFileSync(
  "./CRUD/exData.txt",
  "         Hii this is dummy data for the CRUD operation"
);

console.log("Reading the data without getting the buffer data first");
const unBuff_data = fs.readFileSync("./CRUD/exData.txt", "utf-8");
console.log(`Here is the un buffered data:
 ${unBuff_data}`);
//note: If you omit the "utf8" argument completely, then the method will just return the raw contents in a Buffer object.

console.log("Renaming the file-->");
fs.renameSync("./CRUD/exData.txt", "./CRUD/cnu.txt");

console.log("Deleing file");
fs.unlinkSync("./CRUD/cnu.txt");

console.log("Deleting Folder");
fs.rmdirSync("./CRUD");
/* 
$ Challenge Accomplished-->

What i learned that-->

1.) fs.mkDirSync creates a folder but if that folder is already exists then it will give error.

2.) fs.readFileSync and fs.writeFile both return the data in buffer unless and until any encoding is specified,
hence we specify that we want the data in "utf-8" encoding so now it will return the data in string format

3.) fs.unlinkSync cannot delete folder, it will show error

4.) to delete a folder fs.rmdirSync will use :)

*/
