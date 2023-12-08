const mongoose = require("mongoose");

const server = "127.0.0.1:27017";
const database = "clovesCRUDapp";

class Database {
  constructor() {
    this._connect();
  }

  async _connect() {
    try {
      await mongoose.connect(`mongodb://${server}/${database}`);
      console.log("MongoDB Connection successfully");
    } catch (error) {
      console.log("Error in connection", error.message);
    }
  }
}

module.exports = new Database();
