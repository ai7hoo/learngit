var events = require('events')

var eventEmitter = new events.EventEmitter();

eventEmitter.on('testEvent',function(){
    console.log('ooo');
})

eventEmitter.emit('testEvent')