//@ Import module
const fs = require("fs");

//# Challenge CRUD using node.js fs module
//- Create file
//- Read file
//- Update
//- Delete

//@ fs.mkdirSync
//@ fs.writeFileSync
//@ fs.appendFileSync
//@ fs.readFileSync
//@ fs.renameSync
//@ fs.unlinkSync
//@ fs.rmdirSync

//#Step-1 Create a dir
fs.mkdirSync("CRUD");

const data =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo assumenda aliquam veritatis officiis ut impedit cupiditate odit illum dolorum at!";

//#Step-2 create a file:
// console.log(__dirname);
// console.log(__filename);

// fs.writeFileSync(`./CRUD/file.txt`, data);
fs.writeFileSync(`${__dirname}/CRUD/file.txt`, data);

//# Step-3 Read a file:
const data2 = fs.readFileSync(`${__dirname}/CRUD/file.txt`, "utf-8");
console.log(data2);

//# Step-3 Rename file:
fs.renameSync(`${__dirname}/CRUD/file.txt`, `${__dirname}/CRUD/newFile.txt`);

//# Step-4 Remove file:
fs.unlinkSync(`${__dirname}/CRUD/newFile.txt`);

//#Step-5 Remove folder:
fs.rmdirSync("./CRUD");
