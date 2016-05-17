// ���� events
var events = require('events')

// ���� eventEmitter ����
var eventEmitter = new events.EventEmitter()

// ����������
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

// ���¼���������
eventEmitter.on('test',eventHandler)
eventEmitter.on('test2',eventHandler2)
eventEmitter.on('test3',eventHandler3)

// �����¼�
setInterval(function(){
    eventEmitter.emit('test')
},1000)