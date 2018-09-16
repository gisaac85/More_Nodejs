var event = require('events');
var eventEmitter = new event.EventEmitter();
eventEmitter.on("play", function () {
    console.log('players will start game 1');
});
eventEmitter.addListener("play", function () {
    console.log('players will start game 2');
});
eventEmitter.emit("play");