// 引入 events
var events = require('events')

// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter()

// 创建处理函数
function eventHandler(){
    console.log('test1!')
    eventEmitter.emit('test2')
}
function eventHandler2(){
    console.log('test2!')
    eventEmitter.emit('test3')

}
function eventHandler3(){
    console.log('test3!')
}

// 绑定事件及处理函数
eventEmitter.on('test',eventHandler)
eventEmitter.on('test2',eventHandler2)
eventEmitter.on('test3',eventHandler3)

// 触发事件
setInterval(function(){
    eventEmitter.emit('test')
},1000)