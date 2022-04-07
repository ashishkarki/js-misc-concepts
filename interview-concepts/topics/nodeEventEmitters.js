const events = require("events");

// Create an event emitter object
const evtEmitter = new events.EventEmitter();

// create an event handler
const myEventHandler = () => {
  console.log(`new connection established`);

  // fire another event
  evtEmitter.emit("data_received");
};

// Bind the connection event with the handler
evtEmitter.on("connection", myEventHandler);

// bind the data_received event with the anonymous function
evtEmitter.on("data_received", () => {
  console.log(`data received successfully`);
});

// fire the connection event
evtEmitter.emit("connection");

console.log(`Done, program now exiting.`);
