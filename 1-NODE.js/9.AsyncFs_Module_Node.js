/* 
Now we will learn asynchronous way to handle the files.

Now what is asynchronous way:
Now if you create a file with async method then this request will get done in a async manner i.e in background it will go and create file but now during that time you can create another request and when your previous request is completed it will show you the output.

Just like in a Hotel, when you go in a hotel one aviator comes to you and take your order--> go to the kitchen tell them to made it, now during that time when your order is processing in the kitchen, the aviator didn't stop there and wait for your order, he will go and take another order and when your food is processed he will serve you the food.That is asynchronous way to save time..

? What is callback-->
- Callback is the method which fires when your async task is completed..
i.e while firing a Async event we also add one callback with it so that when you task is completed this callback will fire and let you inform that your task is completed..
So callback is a function which pass as a argument.

*/
const fs = require("fs");

// fs.writeFile("asyncFile.txt", "Hey Today was a awesome Day.. ^_~");
//*Error: Callback must be a function, Received undefined
//+This is because when you deal with async events then in node.js it is must to provide a callback function.

fs.writeFile("asyncFile.txt", "Hey Today was a awesome Day.. ^_~", (err) => {
  // Checking for Errors..
  if (err) {
    console.log(`Oops Error: ${err.message}`);
  } else {
    console.log("You File is successfully created ^_~");
  }
});

fs.appendFile(
  "asyncFile.txt",
  "\nBut Little things S2 is still going boring as S1 nothing, new except Kavya's understanding 🥰😍🤩",
  (err) => {
    if (err) {
      console.log(`Oops Error: ${err.message}`);
    } else {
      console.log("New Data Added to the file..");
    }
  }
);

fs.readFile("asyncFile.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(`Oops Error: ${err.message}`);
  } else {
    console.log(`The Data you requested is -->
"${data}"`);
  }
});
