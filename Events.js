var events = require("events")

var myEmitter = new events.EventEmitter();
myEmitter.on("someEvent", function(msg) {
  console.log(msg);
});

myEmitter.emit("someEvent", "this event is emitter by myEventEmitter")
