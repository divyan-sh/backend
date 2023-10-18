/* 
$Challenge-2

>1: Create a folder name it.
>2: Create a file in it name it and add data to it.
>3: Add more data into the file at the end of the existing data.
>4:Read the data without getting the buffer data.
>5: Rename the file.
>6:Now Delete both the file and the folder.
*/

const fs = require("fs");

console.log(`Making Folder..Process Initiated`);

fs.mkdir("CRUD_Async", (err) => {
  if (err) {
    console.log(`Oops Error: ${err.message}`);
  } else {
    console.log(
      `A folder named "CRUD_Async" is successfully created in the root directory`
    );
  }
});

console.log("Creating a File...Process Initiated");

const data =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt sit accusamus, soluta unde quasi ab corporis consequuntur, iusto voluptatibus, eaque facilis nostrum alias libero facere perferendis quaerat distinctio suscipit eos!";

fs.writeFile("./CRUD_Async/today7Dec.txt", data, (err) => {
  if (err) {
    console.log(`Oops Error: ${err.message}`);
  } else {
    console.log(
      `A file named "today7Dec.txt" is successfully created in the "CURD_Async" folder of root directory`
    );
  }
});

console.log(
  "Adding more data into the recently created file...Process Initiated"
);

fs.appendFile(
  "./CRUD_Async/today7Dec.txt",
  "\n Abe yarr kitna data chahiye tujhe..So ja na Chup Chap its 1AM",
  (err) => {
    if (err) {
      console.log(`Oops Error: ${err.message}`);
    } else {
      console.log(
        `More data is added successfully in a file named "today7Dec.txt" which is in the "CURD_Async" folder of root directory`
      );
    }
  }
);

console.log("Reading the Data of the file...Process Initiated");

fs.readFile("./CRUD_Async/today7Dec.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(`Oops Error: ${err.message}`);
  } else {
    console.log(
      `Data of file "today7Dec.txt" is successfully fetched:
${data}`
    );
  }
});

console.log("Renaming the file...Process Initiated");

fs.rename(
  "./CRUD_Async/today7Dec.txt",
  "./CRUD_Async/today7DecRenamed.txt",
  (err) => {
    if (err) {
      console.log(`Oops Error: ${err.message}`);
    } else {
      console.log(
        `The file named "today7Dec.txt" is successfully renamed to "today7DecRename.txt"`
      );
    }
  }
);

console.log("Now deleting file...Process Initiated");

fs.unlink("./CRUD_Async/today7DecRenamed.txt", (err) => {
  if (err) {
    console.log(`Oops Error: ${err.message}`);
  } else {
    console.log(`The file "today7Dec.txt" has been deleted successfully`);
  }
});

console.log("Now deleting Folder...Process Initiated");

fs.rmdir("./CRUD_Async", (err) => {
  if (err) {
    console.log(`Oops Error: ${err.message}`);
  } else {
    console.log(`The Folder "CRUD_Async" has been deleted successfully`);
  }
});
