var events = require('events')
var eventEmitter = new events.EventEmitter()

eventEmitter.on('connection',function(){
    console.log('connect success!')
    eventEmitter.emit('data_received')
})

eventEmitter.on('data_received',function(){
    console.log('data receive success!')
    eventEmitter.emit('data_exit')
})

eventEmitter.on('data_exit',function(){
    console.log('exit')
})

eventEmitter.emit('connection')
