const mongoose = require("mongoose");

const url = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@node-rest-shop.iyyf4ee.mongodb.net/${process.env.DBNAME}`;

const main = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connection Successful");
  } catch (error) {
    console.log(error.message);
  }
};

main().catch(console.dir);
