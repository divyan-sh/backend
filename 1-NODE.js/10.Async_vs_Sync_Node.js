/*
$ Async VS Sync
let me clear you the difference by example-->
*/

const fs = require("fs");

//> Synchronous Way
console.log("Cnu request a file to read...Process Initiated");

const data = fs.readFileSync("asyncFile.txt", "utf-8");
console.log(`Hey Cnu your Data is Successfully Fetched:
${data}`);

console.log("Punit request a File to read...Process Initiated");
/* 
Now you will see that the output is -->
Cnu request a file to read...Process Initiated
Hey Cnu your Data is Successfully Fetched:
Hey Today was a awesome Day.. ^_~
But Little things S2 is still going boring as S1 nothing, new except Kavya's understanding 🥰😍🤩
Punit request a File to read...Process Initiated

that is unless and until the data is not fetched the commands after that will not run.
Now suppose that if the file take more than 1 min to fetch data then the next command will wait for 1min and then when data will fetch successfully than only the next command will run.
So this is not good for us if our next user want to read another file then he have to wait for first request to complete..and then he will able to read the file.
-- hence here punit have to wait until cnu file is completely fetched.
*/

//> Asynchronous Way
console.log("Cnu request a file to read...Process Initiated");
const data1 = fs.readFile("asyncFile.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(`OOps Error: ${err.message}`);
  } else {
    console.log(`Hey Cnu your Data is successfully fetched:
${data}`);
  }
});

console.log("Punit requesting a file to read...Process Initiated");
/* 
Now as you can see the output:
Cnu request a file to read...Process Initiated
Punit requesting a file to read...Process Initiated
Hey Cnu your Data is successfully fetched:
Hey Today was a awesome Day.. ^_~
But Little things S2 is still going boring as S1 nothing, new except Kavya's understanding 🥰😍🤩

Now as you can see in Asynchronous way the commands after the async events do not have to wait till the event is completed.
as the async event fires then went in the background and do their process and when the process is completed they call the callback function and whatever written in callback function will show to you.
When the async event doing his work in the background you do not have to wait you can simply initiate another request or do another task.
--> Just like in this above case, the another user punit do not have to wait until cnu request is completed.

*NOW I Think you understand what is the difference between Asynchronous and Synchronous and why we have to prefer Asynchronous over Synchronous.
*/
