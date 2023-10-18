const mongoose = require("mongoose");

const server = "127.0.0.1:27017";
const database = "clovesCRUDapp";

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(`mongodb://${server}/${database}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      })
      .then(() => {
        console.log("Connection SuccessFull");
      })
      .catch((err) => {
        console.log(`Database Connection Error-${err.message}`);
      });
  }
}

module.exports = new Database();
