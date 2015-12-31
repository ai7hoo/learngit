var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

server.listen(1377);

//app.get('/', function (req, res) {
  //res.sendfile(__dirname + '/index.html');
//});


io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('anotherNews', function (data) {
    console.log('<<------------------');
	console.log('编号：'+data.id+'\n发送人：'+data.name+'\n消息内容：'+data.message);
	console.log('------------------>>');
  });
});
