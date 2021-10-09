const EventEmitter = require("events");

const customEvent = new EventEmitter();

customEvent.on("response", (name, id) => {
  console.log(`data received user ${name} ${id}`);
});

customEvent.on("response", (name) => {
  console.log(`some other logic  ${name}`);
});
customEvent.emit("response", "john", 34);
