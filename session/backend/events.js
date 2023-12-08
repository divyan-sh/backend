const events = require("events");

const eventEmitter = new events.EventEmitter();

// Custom Event
eventEmitter.on("hey", () => {
  console.log("hey");
});

// Fire Event
eventEmitter.emit("hey");
